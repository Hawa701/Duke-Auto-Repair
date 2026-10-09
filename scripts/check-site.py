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

