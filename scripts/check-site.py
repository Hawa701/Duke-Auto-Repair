"""Read-only checks against a running local site. No external URLs are requested."""

from collections import Counter
from html.parser import HTMLParser
import re
import sys
from urllib.error import HTTPError
from urllib.parse import unquote, urljoin, urlsplit
from urllib.request import urlopen

BASE = (sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3000").rstrip("/")
ROUTES = ['/', '/about', '/services', '/services/oil-change', '/services/bg-fluids', '/services/battery-services', '/services/brakes', '/services/suspension-steering', '/services/air-conditioning', '/services/heating-system', '/services/wheel-alignment', '/services/engine-diagnostics', '/services/state-inspection', '/reviews', '/contact']
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
