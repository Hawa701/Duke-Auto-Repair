"""Read-only checks against a running local site. No external URLs are requested."""

from collections import Counter
from html.parser import HTMLParser
import re
import sys
from urllib.error import HTTPError
from urllib.parse import unquote, urljoin, urlsplit
from urllib.request import urlopen

BASE = (sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3000").rstrip("/")
ROUTES = (
    ['/', '/about-us', '/services', '/vehicles', '/reviews', '/contact', '/promotions', '/car-tips', '/quote']
    # Root-level pages from the Master SEO Blueprint.
    + ['/brake-repair', '/check-engine-light-diagnostic', '/emissions-test', '/wheel-alignment', '/oil-change-service', '/car-ac-repair', '/suspension-repair', '/transmission-repair', '/tire-shop-alexandria', '/mechanic-alexandria-va', '/auto-electrical-repair', '/auto-tune-up']
    + ['/toyota-mechanic', '/honda-repairs', '/nissan-repair-shop', '/ford-service', '/hyundai-maintenance', '/chevy-repair', '/bmw-service', '/mercedes-service', '/jeep-repair-shop', '/lexus-mechanic', '/audi-repair']
    + [f'/car-tips/{slug}' for slug in ['diagnosing-vehicle-alignment-issues', 'winter-driving-tips-northern-virginia', 'what-your-check-engine-light-means']]
    # Car Tips articles at the site root (Master SEO Blueprint, section 4).
    + ['/how-long-do-brake-pads-last', '/gas-cap-is-loose', '/tires-balding', '/why-does-my-car-shake-when-i-brake', '/why-are-my-brakes-squeaking', '/why-is-my-check-engine-light-flashing', '/why-is-my-oil-light-on', '/how-often-should-i-change-my-transmission-fluid', '/clicking-sound-when-trying-to-start-the-car', '/why-is-my-car-ac-blowing-hot-air', '/how-long-does-a-wheel-alignment-take', '/what-is-a-wheel-alignment', '/how-long-does-an-oil-change-take', '/when-to-get-a-brake-pad-replacement']
)
VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}


class Document(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.nodes = []
        self.stack = []
        self.feed(html)

    def handle_starttag(self, tag, attributes):
        node = {"tag": tag, "attrs": dict(attributes), "text": ""}
        self.nodes.append(node)
        if tag not in VOID:
            self.stack.append(node)

    def handle_startendtag(self, tag, attributes):
        self.handle_starttag(tag, attributes)
        if tag not in VOID:
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        for index in range(len(self.stack) - 1, -1, -1):
            if self.stack[index]["tag"] == tag:
                del self.stack[index:]
                break

    def handle_data(self, data):
        if not any(node["tag"] in {"script", "style"} for node in self.stack):
            for node in self.stack:
                node["text"] += data

    def tags(self, tag):
        return [node for node in self.nodes if node["tag"] == tag]


cache = {}


def fetch(path):
    url = urljoin(BASE + "/", path)
    assert urlsplit(url).netloc == urlsplit(BASE).netloc, "External request blocked"
    if url not in cache:
        try:
            with urlopen(url, timeout=20) as response:
                cache[url] = (response.status, response.read(), response.headers.get("Content-Type", ""))
        except HTTPError as error:
            cache[url] = (error.code, error.read(), error.headers.get("Content-Type", ""))
    return cache[url]


documents = {}
for route in ROUTES:
    status, body, _ = fetch(route)
    assert status == 200, f"{route}: HTTP {status}"
    document = Document(body.decode("utf-8"))
    documents[route] = document
    assert len(document.tags("h1")) == 1, f"{route}: expected one h1"
    assert len(document.tags("main")) == 1, f"{route}: expected one main landmark"
    assert any(node["text"].strip() for node in document.tags("title")), f"{route}: missing title"
    viewport = next((node["attrs"].get("content", "") for node in document.tags("meta") if node["attrs"].get("name") == "viewport"), "")
    assert "width=device-width" in viewport, f"{route}: missing device-width viewport"
    assert "user-scalable=no" not in viewport and "maximum-scale=1" not in viewport, f"{route}: browser zoom must remain available"
    assert any(node["attrs"].get("name") == "description" and node["attrs"].get("content") for node in document.tags("meta")), f"{route}: missing description"
    ids = Counter(node["attrs"]["id"] for node in document.nodes if "id" in node["attrs"])
    assert all(count == 1 for count in ids.values()), f"{route}: duplicate IDs"
    assert sum(node["attrs"].get("aria-label") == "Main navigation" for node in document.tags("nav")) == 1, f"{route}: navigation duplicated"
    for node in document.tags("button"):
        assert node["attrs"].get("aria-label") or node["text"].strip(), f"{route}: unnamed button"
    labels = {node["attrs"].get("for") for node in document.tags("label")}
    for node in document.nodes:
        if node["tag"] in {"input", "textarea", "select"} and node["attrs"].get("type") != "hidden":
            assert node["attrs"].get("id") in labels or node["attrs"].get("aria-label"), f"{route}: unlabeled form control"
    for image in document.tags("img"):
        assert "alt" in image["attrs"], f"{route}: image missing alt attribute"
        image_status, _, content_type = fetch(image["attrs"]["src"])
        assert image_status == 200 and content_type.startswith("image/"), f"{route}: broken image"
    print(f"PASS {route}: headings, landmarks, metadata, labels, IDs, and images")

for route, document in documents.items():
    for node in document.tags("a"):
        href = node["attrs"].get("href", "")
        assert href and href != "#", f"{route}: empty link"
        destination = urlsplit(urljoin(BASE + route, href))
        if destination.netloc != urlsplit(BASE).netloc or destination.scheme not in {"http", "https"}:
            continue
        path = destination.path.rstrip("/") or "/"
        assert path in documents, f"{route}: unknown internal page {href}"
        if destination.fragment:
            target_ids = {item["attrs"].get("id") for item in documents[path].nodes}
            assert unquote(destination.fragment) in target_ids, f"{route}: broken section link {href}"
    for node in document.tags("link"):
        if node["attrs"].get("rel") != "stylesheet":
            continue
        status, css, _ = fetch(node["attrs"]["href"])
        assert status == 200, f"{route}: stylesheet unavailable"
        for asset in re.findall(r"url\(\s*['\"]?(/[^\s)'\"]+)", css.decode("utf-8")):
            assert fetch(asset)[0] == 200, f"{route}: missing CSS asset {asset}"

for removed in ["/blog", "/tires", "/specials"]:
    assert fetch(removed)[0] == 404, f"Removed {removed} route should return 404"
print("PASS internal page/section links, stylesheets, fonts, background images, and removed Blog/Tires/Specials routes")
print("NOTE: These are document checks, not browser viewport or visual tests.")
