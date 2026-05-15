# Manu's AI Portfolio

Built with Astro 5 + React + Tailwind v4. Static-first, MDX-driven case studies.

## Develop

```bash
npm install
npm run dev          # http://localhost:4321
npm run build
npm run preview
```

## Editing content

Each project is one MDX file in `src/content/projects/`. Frontmatter drives the cards and metadata; the MDX body drives the case-study page.

## Personalize before deploying

Replace these placeholders in `src/lib/site.ts`:

- `EMAIL` — your contact email
- `LINKEDIN_URL` — your LinkedIn profile URL
- `GITHUB_URL` — your GitHub profile URL

Photo: drop a square image (recommended 800×800) at `public/manu.jpg`.

Resume: a PDF is already in `public/`. Update `RESUME_PATH` in `src/lib/site.ts` if you rename it.

## Tech

- Astro 5 with content collections
- React 19 islands for interactive bits (filter chips, theme toggle, copy email)
- Tailwind CSS v4 (Vite plugin)
- Fontsource for variable fonts (Fraunces, Inter, JetBrains Mono)
