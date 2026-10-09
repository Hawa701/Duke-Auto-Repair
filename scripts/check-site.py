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
