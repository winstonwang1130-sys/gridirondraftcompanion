import json
import os
import re
import sys
import time
from pathlib import Path

import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

FANTASYPROS_URL = "https://www.fantasypros.com/nfl/adp/half-point-ppr-overall.php"
OUTPUT_PATH = Path("js/player-data.js")

MIN_PLAYERS = 50
BACKEND_MAX_POOL = 400
VALID_POSITIONS = {"QB", "RB", "WR", "TE"}

USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/120.0.0.0 Safari/537.36 "
    "GridironDraftCompanion/1.0 (+https://gridiron-draft-companion.online)"
)


def create_session() -> requests.Session:
    session = requests.Session()

    session.headers.update(
        {
            "User-Agent": USER_AGENT,
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.9",
            "Referer": "https://www.fantasypros.com/",
        }
    )

    cookies = os.getenv("FANTASYPROS_COOKIES", "")

    if cookies:
        for item in cookies.split(";"):
            if "=" in item:
                key, value = item.strip().split("=", 1)
                session.cookies.set(key.strip(), value.strip())

        print("[INFO] FantasyPros cookies loaded.")
    else:
        print("[WARN] FANTASYPROS_COOKIES is not set.")

    retry = Retry(
        total=5,
        connect=5,
        read=5,
        backoff_factor=2,
        status_forcelist=[429, 500, 502, 503, 504],
        allowed_methods=["GET"],
        raise_on_status=False,
    )

    adapter = HTTPAdapter(max_retries=retry)
    session.mount("https://", adapter)
    session.mount("http://", adapter)

    return session


def fetch_with_backoff(
    session: requests.Session,
    url: str,
    max_attempts: int = 5,
) -> str | None:
    last_error = None

    for attempt in range(1, max_attempts + 1):
        try:
            print(f"[INFO] Fetch attempt {attempt}/{max_attempts}...")

            response = session.get(
                url,
                timeout=90,
                allow_redirects=True,
            )

            print(f"[DEBUG] HTTP {response.status_code}")
            print(f"[DEBUG] Final URL: {response.url}")
            print(f"[DEBUG] Response length: {len(response.text)}")

            if response.status_code == 200 and response.text:
                return response.text

            print(f"[WARN] HTTP {response.status_code}")
            last_error = f"HTTP {response.status_code}"

        except requests.RequestException as exc:
            print(f"[WARN] Request failed: {exc}")
            last_error = str(exc)

        if attempt < max_attempts:
            wait = 2 ** attempt
            print(f"   Retrying in {wait}s...")
            time.sleep(wait)

    print(f"[ERROR] All fetch attempts failed. Last error: {last_error}")
    return None


def extract_report_config(html_content: str) -> dict | None:
    """
    Extract the JSON object assigned to:
        window.FP.reportConfig = {...};
    
    Uses JSONDecoder.raw_decode() so semicolons or other characters
    inside JSON strings do not cause premature truncation.
    """

    marker = "window.FP.reportConfig = "

    start = html_content.find(marker)

    if start == -1:
        print("[ERROR] window.FP.reportConfig not found.")
        return None

    json_start = start + len(marker)

    # Find the first JSON object character.
    while (
        json_start < len(html_content)
        and html_content[json_start].isspace()
    ):
        json_start += 1

    if json_start >= len(html_content) or html_content[json_start] != "{":
        print("[ERROR] reportConfig does not start with a JSON object.")
        return None

    try:
        decoder = json.JSONDecoder()

        # raw_decode parses exactly one JSON value and tells us
        # where that value ends.
        config, end_index = decoder.raw_decode(
            html_content,
            json_start,
        )

    except json.JSONDecodeError as exc:
        print(f"[ERROR] Failed to decode reportConfig JSON: {exc}")

        # Useful diagnostic information
        preview_start = max(0, json_start - 100)
        preview_end = min(len(html_content), json_start + 500)

        print("[DEBUG] reportConfig preview:")
        print(html_content[preview_start:preview_end])

        return None

    if not isinstance(config, dict):
        print("[ERROR] reportConfig is not a JSON object.")
        return None

    print(
        f"[DEBUG] Successfully extracted reportConfig "
        f"({end_index - json_start} characters)."
    )

    return config


def parse_fantasypros_html(html_content: str) -> list:
    config = extract_report_config(html_content)

    if not config:
        return []

    table = config.get("table")

    if not isinstance(table, dict):
        print("[ERROR] reportConfig does not contain a valid table object.")
        return []

    rows = table.get("rows", [])

    if not isinstance(rows, list):
        print("[ERROR] reportConfig table rows are not a list.")
        return []

    print(f"[INFO] Found {len(rows)} raw FantasyPros rows.")

    cleaned = []

    for index, row in enumerate(rows):

        if not isinstance(row, dict):
            continue

        player = row.get("player")

        if not isinstance(player, dict):
            continue

        name = str(player.get("name", "")).strip()

        if not name:
            continue

        pos_text = str(row.get("pos", "")).strip()

        # FantasyPros currently uses values such as:
        # RB1, RB2, WR1, QB1, TE1
        position_match = re.match(r"^(QB|RB|WR|TE)", pos_text)

        if not position_match:
            continue

        position = position_match.group(1)

        if position not in VALID_POSITIONS:
            continue

        team_text = str(player.get("team", "")).strip()

        team = "FA"
        bye_week = "-"

        # Example:
        # DET (6)
        match = re.match(
            r"^([A-Z]{2,3})\s*\((\d+)\)$",
            team_text,
        )

        if match:
            team = match.group(1)
            bye_week = match.group(2)
        else:
            # Fallback if FantasyPros changes the team representation.
            team_match = re.search(r"\b([A-Z]{2,3})\b", team_text)

            if team_match:
                team = team_match.group(1)

            bye_match = re.search(r"\((\d+)\)", team_text)

            if bye_match:
                bye_week = bye_match.group(1)

        # FantasyPros now provides AVG directly.
        avg_value = row.get("avg")

        try:
            adp = float(avg_value)
        except (TypeError, ValueError):
            adp = 999.0

        player_id = player.get("id")

        if player_id is not None:
            output_id = f"fp_{player_id}"
        else:
            output_id = f"fp_{index + 1}"

        cleaned.append(
            {
                "id": output_id,
                "name": name,
                "position": position,
                "team": team,
                "bye_week": bye_week,
                "adp": adp,
            }
        )

        if len(cleaned) >= BACKEND_MAX_POOL:
            break

    return cleaned


def write_player_data(players: list) -> None:
    js_content = (
        "const PLAYERS_DATA = "
        + json.dumps(
            players,
            indent=2,
            ensure_ascii=False,
        )
        + ";"
    )

    temp_path = OUTPUT_PATH.with_suffix(".js.tmp")

    OUTPUT_PATH.parent.mkdir(
        parents=True,
        exist_ok=True,
    )

    temp_path.write_text(
        js_content,
        encoding="utf-8",
    )

    temp_path.replace(OUTPUT_PATH)


def fetch_rankings_pipeline() -> int:
    print("[INFO] Fetching FantasyPros Half-PPR consensus ADP...")

    session = create_session()

    html_content = fetch_with_backoff(
        session,
        FANTASYPROS_URL,
    )

    if not html_content:
        print("[FALLBACK] Keeping existing player-data.js unchanged.")
        return 1

    try:
        all_players = parse_fantasypros_html(html_content)

    except Exception as exc:
        print(f"[ERROR] Parse failed: {exc}")
        print("[FALLBACK] Keeping existing player-data.js unchanged.")
        return 1

    print(
        f"[INFO] Parsed {len(all_players)} valid "
        f"QB/RB/WR/TE players."
    )

    if len(all_players) < MIN_PLAYERS:
        print(
            f"[FALLBACK] Only {len(all_players)} players parsed "
            f"(minimum {MIN_PLAYERS}). "
            f"Keeping existing player-data.js unchanged."
        )
        return 1

    write_player_data(all_players)

    print(
        f"[OK] Wrote {len(all_players)} players "
        f"to {OUTPUT_PATH}."
    )

    return 0


if __name__ == "__main__":
    sys.exit(fetch_rankings_pipeline())
