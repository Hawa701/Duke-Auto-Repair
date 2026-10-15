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
