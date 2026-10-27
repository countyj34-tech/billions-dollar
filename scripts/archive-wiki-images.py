"""Download Wikimedia destination photos into public/ so the site never fetches Wikipedia at runtime."""
from __future__ import annotations

import hashlib
import ssl
import re
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

SSL = ssl._create_unverified_context()

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "destinations" / "wiki"
FILES = [
    ROOT / "src" / "lib" / "countries.ts",
    ROOT / "src" / "lib" / "place-photos.ts",
]
URL_RE = re.compile(r"https://upload\.wikimedia\.org/[^`'\"\s]+")
UA = "BestEasternTravel/1.0 (offline archive for production website)"


def safe_name(url: str) -> str:
    stem = url.rstrip("/").split("/")[-1]
    stem = re.sub(r"^\d+px-", "", stem)
    stem = urllib.parse.unquote(stem)
    stem = re.sub(r"[^A-Za-z0-9._-]+", "-", stem).strip("-")
    if len(stem) > 80:
        digest = hashlib.md5(url.encode()).hexdigest()[:8]
        ext = Path(stem).suffix or ".jpg"
        stem = stem[:60] + "-" + digest + ext
    if not Path(stem).suffix:
        stem += ".jpg"
    return stem.lower()


def download(url: str, dest: Path) -> bool:
    if dest.exists() and dest.stat().st_size > 2000:
        return True
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    for attempt in range(5):
        try:
            with urllib.request.urlopen(req, timeout=45, context=SSL) as res:
                data = res.read()
            if len(data) < 1500:
                print(f"SKIP tiny {len(data)} {url}")
                return False
            dest.write_bytes(data)
            print(f"OK {dest.name} {len(data)}")
            return True
        except urllib.error.HTTPError as err:
            print(f"{err.code} {url}")
            if err.code in {429, 503}:
                time.sleep(8 + attempt * 6)
                continue
            return False
        except Exception as err:
            print(f"ERR {err} {url}")
            time.sleep(3)
    return False


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    urls: list[str] = []
    for path in FILES:
        text = path.read_text(encoding="utf-8")
        urls.extend(URL_RE.findall(text))
    unique = list(dict.fromkeys(urls))
    print(f"{len(unique)} unique Wikimedia URLs")
    mapping: dict[str, str] = {}
    for url in unique:
        name = safe_name(url)
        dest = OUT / name
        if download(url, dest):
            mapping[url] = f"/destinations/wiki/{name}"
        time.sleep(1.2)

    for path in FILES:
        text = path.read_text(encoding="utf-8")
        for url, local in mapping.items():
            text = text.replace(url, local)
        path.write_text(text, encoding="utf-8")
        print(f"updated {path.name}")
    print(f"archived {len(mapping)}/{len(unique)}")


if __name__ == "__main__":
    main()
