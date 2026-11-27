# Duke Auto Repair

A responsive website for Duke Auto Repair & Service in Alexandria, Virginia. Visitors can explore services, meet the team, read customer feedback, find contact details, and book appointments through ShopGenie.

The site includes Home, About, Services (8 service pages), Vehicles We Service (17 brand pages), Reviews, Contact, Coupons, Car Tips (with articles) and Request a Quote. It uses local photography and fonts, shared page layouts, and selective entrance animations.

## Tech stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4 tooling with shared and page-specific CSS
- Motion for entrance animations
- ESLint and Node's built-in test runner

## Requirements

- Node.js **20.9 or newer**, with npm
- Git
- Python 3, optional, for the site verification script

## Getting started

Clone the repository and install the locked dependencies:

```sh
git clone https://github.com/Hawa701/Duke-Auto-Repair.git
cd Duke-Auto-Repair
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Run these commands from the project root, where `package.json` lives. Changes to application files update automatically during development.

### Environment configuration

The default demo works without environment variables. If you need optional integrations, copy `.env.example` to `.env.local` and follow the comments in that file.

Keep `.env.local` out of Git. Variables prefixed with `NEXT_PUBLIC_` are visible in the browser and are included at build time. Restart the development server after changing environment values; rebuild when changing them for production.

## Commands

| Command | Purpose |
| --- | --- |
| `npm ci` | Install dependencies exactly as recorded in `package-lock.json` |
| `npm run dev` | Start the development server |
| `npm run build` | Export the static site to `out/` and check TypeScript |
| `npm run lint` | Check application code and test scripts with ESLint |
| `npm run test:google-reviews` | Test the review integration using mocked responses |
| `npm run test:reveals` | Test viewport observation and animation cleanup |
| `npm run test:scrollbar` | Test scrollbar sizing and drag calculations |

## Project structure

```text
app/
  layout.tsx             Shared layout, metadata, providers, header and footer
  page.tsx               Home page
  [slug]/                Root-level SEO pages: services (/brake-repair/),
                         blueprint brands (/toyota-mechanic/) and blueprint articles
  about-us/              About page and its styles
  contact/               Contact page and its styles
  reviews/               Reviews page and its styles
  services/              Services overview
  vehicles/              Vehicles overview (brand pages live in app/[slug])
  promotions/ car-tips/ quote/  Coupons, Car Tips hub + articles, Request a Quote
  design.css             Base theme and shared component styles
  globals.css            Global behavior, accessibility and shared overrides
  responsive.css         Shared responsive rules
  home.css               Home page styles
  fonts.ts               Local font configuration
  manifest.ts            Device shortcut metadata and icons
components/              Reusable layouts, navigation and UI components
  home/                  Home page sections
  reviews/               Review summary, list and filtering
lib/                     Business details, service content and shared helpers
public/                  Images, fonts and browser/device icons
scripts/                 Automated tests and local site checks
docs/                    Service content research and editorial notes
```

Files in `public/` are served from the site root: `public/images/about/lounge.jpg`, for example, is available at `/images/about/lounge.jpg`.

## Updating the site

| Change | Where to work |
| --- | --- |
| Business name, address, phone, booking URL and map links | [lib/business.ts](lib/business.ts) |
| Shopgenie chat script, customer portal link, quote form endpoint (hidden while empty) | `integrations` in [lib/business.ts](lib/business.ts) |
| Service page copy, photos and overview groups | [lib/services.ts](lib/services.ts) |
| Vehicle brand pages | [lib/vehicles.ts](lib/vehicles.ts) |
| Car Tips articles (titles without copy show as "Coming soon") | [lib/articles.ts](lib/articles.ts) |
| Shared service/vehicle page layout | [components/silo-page.tsx](components/silo-page.tsx) |
| Main menu items | [lib/navigation.ts](lib/navigation.ts) |
| Featured customer review, displayed rating and review topics | [lib/customer-reviews.ts](lib/customer-reviews.ts) |
| Customer review cards (real Google reviews only) | [lib/customer-reviews.ts](lib/customer-reviews.ts) |
| Navigation and footer | [components/site-navigation.tsx](components/site-navigation.tsx), [components/footer.tsx](components/footer.tsx) |
| Shared page headings and breadcrumbs | [components/page-header.tsx](components/page-header.tsx) |
| Default page titles, descriptions and favicon links | [app/layout.tsx](app/layout.tsx) |
| Apple and device shortcut icons | `public/` and [app/manifest.ts](app/manifest.ts) |

### Adding a service

1. Add the service, with its copy, to `services` in `lib/services.ts`. Its page, menu entry, footer link and sidebar links are generated from that list.
2. Add it to a group in the same file so it appears on the Services overview, and add a short blurb in `components/home/services.tsx` for the home carousel.
3. Add the new route to `ROUTES` in `scripts/check-site.py`, then run the checks below.
4. If a public URL is retired or renamed, add a redirect to `public/.htaccess`.

See [service content sources](docs/service-content-sources.md) for the background research. Confirm service claims with the shop when changing customer-facing copy.

### Styling and interaction

Keep page-specific styles scoped under that page's wrapper class, such as `.home-page` or `.reviews-page`. Shared theme colors live in `app/design.css`; shared responsive behavior lives in `app/responsive.css`.

Pages and layouts use Server Components by default. Add `"use client"` where state, effects or browser APIs are needed. Reuse `Entrance` and `Stagger` for selective animation; these components support reduced-motion preferences. Fonts are loaded locally through `app/fonts.ts`.

The header is sticky; on tablet and mobile the utility bar scrolls away and only the navigation stays pinned. Header styles live in `components/header.css`. The home page service stripe scrolls automatically and pauses on hover. Preserve these behaviors when changing navigation or responsive styles.

## Verification

Before sharing a demo or deploying a change, run:

```sh
npm run lint
npm run test:google-reviews
npm run test:reveals
npm run test:scrollbar
npm run build
```

With the site running in another terminal, check pages, links, metadata, form labels and assets:

```sh
python scripts/check-site.py
```

The checker defaults to `http://localhost:3000`. Pass a different local base URL if needed:

```sh
python scripts/check-site.py http://localhost:3001
```

The script covers all 37 pages and confirms removed routes return 404. Also check mobile, tablet and desktop layouts in a browser, including navigation, keyboard focus, review filters and appointment links.

## Static build and SiteGround deployment

```sh
npm run build
```

The current configuration exports HTML, CSS, JavaScript and assets into `out/`. Routes use directory indexes, such as `out/about-us/index.html`, so they work on a static web server. Images are served as local files, and the manifest is generated at build time.

To preview the exported site locally with Python 3:

```sh
python -m http.server 3001 --directory out
```

Open [http://localhost:3001](http://localhost:3001). Use `python scripts/check-site.py http://localhost:3001` to verify this exported version. `npm start` uses the Next.js server and does not serve an `output: "export"` build.

For SiteGround, follow [HOW-TO-DEPLOY.txt](HOW-TO-DEPLOY.txt): delete the old files in `public_html`, then upload and extract a zip of the **contents of `out/`**. The export includes `public/.htaccess` (404 page and redirects for retired URLs), so no server configuration is needed.

In detail: upload the **contents of `out/`** to the target domain's `public_html` folder through Site Tools > Site > File Manager. If using a ZIP, extract it and move its contents into `public_html` if extraction creates an enclosing folder. The final path must be `public_html/index.html`, alongside `_next/`, `images/`, `services/` and the other exported files. Back up any existing site files before replacing them.

Test the deployment on a temporary or test domain first, including direct visits to `/about-us/` and `/brake-repair/`, image loading and booking links. This export needs no Node.js process on the host. Keep `out/` and `.next/` out of Git, and rebuild and upload a fresh export after changes.

### Current demo behavior

- Appointment buttons open the ShopGenie booking URL in a new tab. Update that URL once in `lib/business.ts`.
- The review list contains six fictional sample entries. The featured testimonial is maintained separately. Replace sample entries with approved content before a public launch.
- The contact and quote forms have no submission backend. Their send buttons are disabled, and visitors are directed to call. Set `integrations.quoteFormAction` (and connect the contact form) before enabling submissions.
- No database or account system is required to run the current site.
