# Duke Auto Repair

A responsive website for Duke Auto Repair & Service in Alexandria, Virginia. Visitors can explore services, meet the team, read customer feedback, find contact details, and book appointments through ShopGenie.

The site includes Home, About, Services, Reviews, Contact, and ten individual service pages. It uses local photography and fonts, shared page layouts, and selective entrance animations.

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
| `npm run build` | Create the production build and check TypeScript |
| `npm start` | Serve an existing production build |
| `npm run lint` | Check application code and test scripts with ESLint |
| `npm run test:google-reviews` | Test the review integration using mocked responses |
| `npm run test:reveals` | Test viewport observation and animation cleanup |
| `npm run test:scrollbar` | Test scrollbar sizing and drag calculations |

## Project structure

```text
app/
  layout.tsx             Shared layout, metadata, providers, header and footer
  page.tsx               Home page
  about/                 About page and its styles
  contact/               Contact page and its styles
  reviews/               Reviews page and its styles
  services/              Services overview and individual service routes
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
| Service groups and destination links | [lib/services.ts](lib/services.ts) |
| Individual service copy, photos, checklists and related services | [lib/service-details.ts](lib/service-details.ts) |
| Shared service page layout | [components/service-detail.tsx](components/service-detail.tsx) |
| Featured customer review, displayed rating and review topics | [lib/customer-reviews.ts](lib/customer-reviews.ts) |
| Sample review cards | [lib/dummy-reviews.ts](lib/dummy-reviews.ts) |
| Navigation and footer | [components/site-navigation.tsx](components/site-navigation.tsx), [components/footer.tsx](components/footer.tsx) |
| Shared page headings and breadcrumbs | [components/page-header.tsx](components/page-header.tsx) |
| Default page titles, descriptions and favicon links | [app/layout.tsx](app/layout.tsx) |
| Apple and device shortcut icons | `public/` and [app/manifest.ts](app/manifest.ts) |

### Adding a service

1. Add the service to `lib/services.ts` and its detailed content to `lib/service-details.ts`.
2. Create `app/services/<slug>/page.tsx`, following an existing route such as [the brake page](app/services/brakes/page.tsx). Set its metadata and render `ServiceDetail` with the corresponding content.
3. Update related services, home page cards and footer links where appropriate. The home and footer service links are maintained in their own components.
4. Add the new route to `ROUTES` in `scripts/check-site.py`, then run the checks below.

See [service content sources](docs/service-content-sources.md) for the background research. Confirm service claims with the shop when changing customer-facing copy.

### Styling and interaction

Keep page-specific styles scoped under that page's wrapper class, such as `.home-page` or `.reviews-page`. Shared theme colors live in `app/design.css`; shared responsive behavior lives in `app/responsive.css`.

Pages and layouts use Server Components by default. Add `"use client"` where state, effects or browser APIs are needed. Reuse `Entrance` and `Stagger` for selective animation; these components support reduced-motion preferences. Fonts are loaded locally through `app/fonts.ts`.

The header sticks on mobile only. The home page service stripe scrolls automatically and pauses on hover. Preserve these behaviors when changing navigation or responsive styles.

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

The script covers all 15 pages and confirms the removed Blog, Tires and Specials routes return 404. Also check mobile, tablet and desktop layouts in a browser, including navigation, keyboard focus, review filters and appointment links.

## Running a demo or production build

```sh
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000). For hosting, configure a Next.js-compatible Node environment with `npm ci` as the install command, `npm run build` as the build command, and `npm start` as the start command. The generated `.next/` directory is build output and stays out of Git.

### Current demo behavior

- Appointment buttons open the ShopGenie booking URL in a new tab. Update that URL once in `lib/business.ts`.
- The review list contains six fictional sample entries. The featured testimonial is maintained separately. Replace sample entries with approved content before a public launch.
- The contact form has no submission backend. Its send button is disabled, and visitors are directed to call. Connect a working endpoint before enabling submissions.
- No database or account system is required to run the current site.
