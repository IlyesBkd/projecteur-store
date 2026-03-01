import base64
import json
import re
from pathlib import Path

ROOT = Path(__file__).parent
HTML_PATH = ROOT / "projecteur.html"
PUBLIC_DIR = ROOT / "public" / "images" / "features"
DATA_PATH = ROOT / "feature_data.json"

SECTION_IDS = [
    "4FFpHB",
    "QqJMNE",
    "eXJ8rk",
    "QYrUyq",
    "BFbyiW",
    "WUGbbe",
    "EyTXiU",
]

html = HTML_PATH.read_text(encoding="utf-8")
PUBLIC_DIR.mkdir(parents=True, exist_ok=True)

items = []
for idx, section_id in enumerate(SECTION_IDS, start=1):
    marker = f'id="shopify-section-template--28124580151621__image_with_text_{section_id}"'
    start = html.find(marker)
    if start == -1:
        raise RuntimeError(f"Section not found: {section_id}")

    next_section = html.find('id="shopify-section-template--28124580151621__image_with_text_', start + len(marker))
    next_divider = html.find('id="shopify-section-template--28124580151621__section_divider_984Tmh"', start + len(marker))

    candidates = [x for x in [next_section, next_divider] if x != -1]
    end = min(candidates) if candidates else len(html)

    block = html[start:end]

    img_match = re.search(r'<img src="([^"]+)"', block)
    h2_match = re.search(r'<h2[^>]*>(.*?)</h2>', block, re.S)
    p_match = re.search(r'<div class="image-with-text__text rte body">\s*<p>(.*?)</p>', block, re.S)

    if not img_match:
        raise RuntimeError(f"Image src not found in section: {section_id}")

    src = img_match.group(1)
    if not src.startswith("data:image/"):
        raise RuntimeError(f"Unexpected image source format in section {section_id}: {src[:50]}")

    media_info, encoded = src.split(",", 1)
    ext = media_info.split("/")[1].split(";")[0]

    image_name = f"feature-{idx}.{ext}"
    image_path = PUBLIC_DIR / image_name
    image_path.write_bytes(base64.b64decode(encoded))

    heading = re.sub(r"\s+", " ", h2_match.group(1)).strip() if h2_match else ""
    paragraph_html = re.sub(r"\s+", " ", p_match.group(1)).strip() if p_match else ""

    items.append(
        {
            "id": section_id,
            "title": heading,
            "descriptionHtml": paragraph_html,
            "image": f"/images/features/{image_name}",
            "reverseOnDesktop": "image-with-text__grid--reverse" in block,
            "alt": "",
        }
    )

DATA_PATH.write_text(json.dumps(items, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"Wrote {len(items)} images to {PUBLIC_DIR}")
print(f"Wrote metadata to {DATA_PATH}")
