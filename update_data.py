import json
import shutil
import sys
import time
from pathlib import Path

import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

SLEEPER_URL = "https://api.sleeper.app/v1/players/nfl"
OUTPUT_PATH = Path("js/player-data.js")
MIN_PLAYERS = 50
TOP_N = 200
VALID_POSITIONS = {"QB", "RB", "WR", "TE"}

USER_AGENT = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/120.0.0.0 Safari/537.36 "
    "GridironDraftCompanion/1.0 (+https://gridirondraftcompanion.com)"
)


def create_session() -> requests.Session:
    """Build a requests session with User-Agent spoofing and urllib3 retries."""
    session = requests.Session()
    session.headers.update(
        {
            "User-Agent": USER_AGENT,
            "Accept": "application/json",
            "Accept-Language": "en-US,en;q=0.9",
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


def fetch_with_backoff(session: requests.Session, url: str, max_attempts: int = 5):
    """Fetch JSON with manual exponential backoff on top of adapter retries."""
    last_error = None

    for attempt in range(1, max_attempts + 1):
        try:
            print(f"[INFO] Fetch attempt {attempt}/{max_attempts}...")
            response = session.get(url, timeout=90)

            if response.status_code == 200:
                data = response.json()
                if isinstance(data, dict) and data:
                    return data
                print("[WARN] API returned empty or invalid payload.")
                last_error = "empty payload"
            else:
                print(f"[WARN] HTTP {response.status_code}: {response.reason}")
                last_error = f"HTTP {response.status_code}"

        except (requests.RequestException, json.JSONDecodeError) as exc:
            print(f"[WARN] Request failed: {exc}")
            last_error = str(exc)

        if attempt < max_attempts:
            wait = 2 ** attempt
            print(f"   Retrying in {wait}s...")
            time.sleep(wait)

    print(f"[ERROR] All fetch attempts failed. Last error: {last_error}")
    return None


def clean_players(all_players: dict) -> list:
    cleaned = []

    for player_id, info in all_players.items():
        if not isinstance(info, dict):
            continue

        if (
            info.get("active")
            and info.get("position") in VALID_POSITIONS
            and info.get("fantasy_positions")
        ):
            first = info.get("first_name") or ""
            last = info.get("last_name") or ""
            name = f"{first} {last}".strip()
            if not name:
                continue

            cleaned.append(
                {
                    "id": player_id,
                    "name": name,
                    "position": info.get("position"),
                    "team": info.get("team") or "FA",
                    "bye_week": info.get("bye") if info.get("bye") is not None else "N/A",
                    "adp": info.get("search_rank") if info.get("search_rank") else 999,
                }
            )

    cleaned.sort(key=lambda x: x["adp"])
    return cleaned


def build_js_content(players: list) -> str:
    return f"const PLAYERS_DATA = {json.dumps(players, indent=2, ensure_ascii=False)};"


def write_player_data(players: list) -> None:
    """Write to a temp file first, then atomically replace the live file."""
    js_content = build_js_content(players)
    temp_path = OUTPUT_PATH.with_suffix(".js.tmp")

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    temp_path.write_text(js_content, encoding="utf-8")
    temp_path.replace(OUTPUT_PATH)


def fetch_sleeper_data() -> int:
    print("[INFO] Fetching latest NFL player data from Sleeper API...")

    if not OUTPUT_PATH.exists():
        print(f"[WARN] {OUTPUT_PATH} does not exist yet — a successful fetch is required.")

    session = create_session()
    all_players = fetch_with_backoff(session, SLEEPER_URL)

    if not all_players:
        print("[FALLBACK] Keeping existing player-data.js unchanged.")
        return 1

    cleaned_players = clean_players(all_players)
    top_players = cleaned_players[:TOP_N]

    for index, player in enumerate(top_players, start=1):
        player["rank"] = index

    if len(top_players) < MIN_PLAYERS:
        print(
            f"[FALLBACK] Only {len(top_players)} players parsed "
            f"(minimum {MIN_PLAYERS}). Keeping existing player-data.js unchanged."
        )
        return 1

    write_player_data(top_players)
    print(f"[OK] Success! Wrote {len(top_players)} players to {OUTPUT_PATH}.")
    return 0


if __name__ == "__main__":
    sys.exit(fetch_sleeper_data())
