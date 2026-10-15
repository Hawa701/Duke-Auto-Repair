# Homepage hero color experiment

The warm cream, pale blue, and yellow treatment is enabled by the `hero--welcoming`
class and the `hero-welcoming.css` import in `components/home/hero.tsx`.
Its navigation and utility-bar styles apply only while that hero is present.

The original hero is saved verbatim in `hero.tsx.before`. To restore it, run this
from the `duke-auto-repair` project directory:

```powershell
Copy-Item -LiteralPath '.\experiments\home-hero\hero.tsx.before' -Destination '.\components\home\hero.tsx'
```

Then refresh the browser. This removes both the experiment import and its opt-in
class. The standalone stylesheet can remain unused. Other pages and the content
below the homepage hero were not changed for this experiment.
