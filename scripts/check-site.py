"""Read-only checks against a running local site. No external URLs are requested."""

from collections import Counter
from html.parser import HTMLParser
import re
import sys
from urllib.error import HTTPError
from urllib.parse import unquote, urljoin, urlsplit
from urllib.request import urlopen

