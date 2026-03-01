import base64
import re
from pathlib import Path

html = Path("projecteur.html").read_text(encoding="utf-8")

pattern = re.compile(
    r'<li id="Slide-template--28124580151621__main-70213801902405".*?<img src="([^"]+)"',
    re.S,
)

match = pattern.search(html)
if not match:
    raise RuntimeError("Hero product image not found in projecteur.html")

src = match.group(1)
if not src.startswith("data:image/"):
    raise RuntimeError(f"Unexpected image format: {src[:60]}")

meta, encoded = src.split(",", 1)
ext = meta.split("/")[1].split(";")[0]

output_dir = Path("public/images/product")
output_dir.mkdir(parents=True, exist_ok=True)
output_path = output_dir / f"hero-main.{ext}"
output_path.write_bytes(base64.b64decode(encoded))

print(output_path.as_posix())
