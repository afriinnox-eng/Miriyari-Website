# Miriyari Website (React)

Corporate website for [Miriyari Ltd](https://www.miriyari.com) — a business and
investment facilitation firm in Kigali, Rwanda. Built with React + Vite,
converted from the original static HTML site (same design system and content).

## Pages

- `/` — Home (hero, stats, services preview, differentiators, workflow, partners)
- `/about` — Mission, vision, approach, values, team
- `/services` — Grant Access, Investor Connections, Direct Investments
- `/impact` — Results, partner spotlight (BEYI Group, AFRIINNOX), sectors
- `/contact` — Contact info + mailto contact form

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build
npm run check    # build + smoke test of the built output
```

## Deploy (Render)

The repo contains `render.yaml`, so you can either:

1. **Dashboard** — *New → Blueprint* and pick this repo, or
2. **API** — create a Static Site service linked to this repo with
   `buildCommand: npm install && npm run build` and
   `staticPublishPath: dist`.

SPA routing is handled by a rewrite of `/*` to `/index.html` (see `render.yaml`).

## Contact

- Email: info@miriyari.com
- Phone: +250 789 211 684
- Address: KN 112 St, Kigali, Rwanda
