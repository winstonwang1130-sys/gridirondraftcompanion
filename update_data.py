import json
import re
import sys
import time
from pathlib import Path

import requests
from bs4 import BeautifulSoup
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
            "Accept-Language": "en-US,en;q=0.5",
        }
    )
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


def parse_fantasypros_html(html_content: str) -> list:
    cleaned = []
    soup = BeautifulSoup(html_content, "html.parser")
    table = soup.find("table", {"id": "data"})
    if not table:
        return []

    thead = table.find("thead")
    if not thead:
        return []

    headers = [th.text.strip().lower() for th in thead.find_all("th")]

    player_idx = headers.index("player") if "player" in headers else 1
    pos_idx = headers.index("pos") if "pos" in headers else 2
    avg_idx = headers.index("avg") if "avg" in headers else -1

    tbody = table.find("tbody")
    if not tbody:
        return []

    rows = tbody.find_all("tr")
    for index, row in enumerate(rows):
        cells = row.find_all("td")
        if len(cells) <= max(player_idx, pos_idx, abs(avg_idx)):
            continue

        player_link = cells[player_idx].find("a")
        if not player_link:
            continue
        name = player_link.text.strip()

        full_text = cells[player_idx].text
        remaining_text = full_text.replace(name, "").strip()

        team = "FA"
        bye_week = "N/A"

        team_match = re.search(r"([A-Z]{2,3})", remaining_text)
        if team_match:
            team = team_match.group(1)

        bye_match = re.search(r"\(.*?(\d+).*?\)", remaining_text)
        if bye_match:
            bye_week = bye_match.group(1)

        pos_text = cells[pos_idx].text.strip()
        pos_match = re.match(r"^(QB|RB|WR|TE)", pos_text)
        if not pos_match or pos_match.group(1) not in VALID_POSITIONS:
            continue
        position = pos_match.group(1)

        try:
            adp = float(cells[avg_idx].text.strip())
        except (ValueError, IndexError):
            adp = 999.0

        cleaned.append(
            {
                "id": f"fp_{index + 1}",
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


def fetch_with_backoff(session: requests.Session, url: str, max_attempts: int = 5) -> str | None:
    last_error = None

    for attempt in range(1, max_attempts + 1):
        try:
            print(f"[INFO] Fetch attempt {attempt}/{max_attempts}...")
            response = session.get(url, timeout=90)
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


def write_player_data(players: list) -> None:
    js_content = f"const PLAYERS_DATA = {json.dumps(players, indent=2, ensure_ascii=False)};"
    temp_path = OUTPUT_PATH.with_suffix(".js.tmp")
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    temp_path.write_text(js_content, encoding="utf-8")
    temp_path.replace(OUTPUT_PATH)


def fetch_rankings_pipeline() -> int:
    print("[INFO] Fetching FantasyPros Half-PPR consensus ADP...")

    session = create_session()
    html_content = fetch_with_backoff(session, FANTASYPROS_URL)

    if not html_content:
        print("[FALLBACK] Keeping existing player-data.js unchanged.")
        return 1

    try:
        all_players = parse_fantasypros_html(html_content)
    except Exception as exc:
        print(f"[ERROR] Parse failed: {exc}")
        print("[FALLBACK] Keeping existing player-data.js unchanged.")
        return 1

    if len(all_players) < MIN_PLAYERS:
        print(
            f"[FALLBACK] Only {len(all_players)} players parsed "
            f"(minimum {MIN_PLAYERS}). Keeping existing player-data.js unchanged."
        )
        return 1

    write_player_data(all_players)
    print(f"[OK] Wrote {len(all_players)} players to {OUTPUT_PATH}.")
    return 0


if __name__ == "__main__":
    sys.exit(fetch_rankings_pipeline())
