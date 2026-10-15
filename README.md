# Duke Auto Repair

Next.js website for Duke Auto Repair & Service in Alexandria, Virginia.
Contact details are maintained in `lib/business.ts`.

## Local development

```powershell
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` for a production build.

## Live Google rating and review count

The site uses Google's official Maps JavaScript API Places library in the browser.
The pages can remain statically rendered: no Next.js API route or application server is needed for ratings.

1. Create a Google Cloud project and enable billing. Enable **Maps JavaScript API** and **Places API (New)**.
2. Create a browser API key. Apply **Websites / HTTP referrer restrictions** for your production domain and `http://localhost:3000/*`. Restrict API access to the two APIs above.
3. Copy `.env.example` to `.env.local`, then set `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` locally. Do not paste keys into chat or commit `.env.local`.
4. Optionally set `NEXT_PUBLIC_GOOGLE_PLACE_ID`. Otherwise the app uses an exact business name/address search requesting only the ID, then verifies the returned phone and address before displaying the rating.
5. Restart `npm run dev`. Production builds need these public variables set at build time; rebuild after changing them.

`NEXT_PUBLIC_` values are visible to website visitors. This is intentional for a referrer-restricted browser key. Never use an unrestricted key or a server secret here.

All rating displays use one shared request per page session, then refresh every 15 minutes while visible or when the visitor returns to an older page. Only the place ID is reused between refreshes. Ratings and review counts are not persisted to disk or browser storage. Google determines when its underlying data updates; this is not an instantaneous push feed.

Without a key or when a live request fails, the site uses the manually supplied Google listing snapshot: 4.8 stars and 765 reviews. These fallback values, topic mention counts, and the transcribed customer review are maintained in `lib/customer-reviews.ts`. They do not update automatically. Successful API responses replace the fallback overall rating and total count. The distribution bars reproduce approximate visual lengths from the supplied screenshot; they do not claim exact percentages or star counts.

Fetching `rating` and `userRatingCount` uses **Place Details Enterprise**. Google's global price list currently includes 1,000 monthly requests, then $20 per 1,000 at the first paid tier. Pricing and allowances can change. Configure API quotas in Google Cloud to limit usage; budget alerts alone do not cap charges. No billing account or key is created or activated by this code.

Before launch, include the Google-required terms/privacy references in the site's published policies. Google Maps attribution and a link explaining Google reviews are included alongside the rating displays.

Official references:

- [Google pricing](https://developers.google.com/maps/billing-and-pricing/pricing)
- [Maps API key setup and restrictions](https://developers.google.com/maps/documentation/javascript/get-api-key)
- [Places data fields](https://developers.google.com/maps/documentation/javascript/reference/place)
- [Attribution and policies](https://developers.google.com/maps/documentation/javascript/policies)

## Checks

All ten service detail pages use the approved brake-page layout, including the white checkmarks on blue circles. Each has separate content in `lib/service-details.ts`. See [service content sources](docs/service-content-sources.md) for the research and editorial scope. The Services overview, homepage cards, footer links and related-service cards lead to the individual pages.

The Reviews page list currently uses six fictional development entries from `lib/dummy-reviews.ts`. Replace these before launch. The featured review and homepage testimonial use the supplied Jennie Dunnavant review from `lib/customer-reviews.ts`; the Google rating snapshot is maintained separately there.

```powershell
npm run test:google-reviews
npm run test:reveals
