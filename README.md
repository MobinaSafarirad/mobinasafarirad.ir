# Mobina — personal site

Portfolio and proof-of-work site for Mobina, an aspiring AI engineer. It is bilingual (English / Persian), supports light and dark themes, and is honest about what is real versus what is still a placeholder.

## Tech stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- next-intl (`/en`, `/fa`, RTL for Persian)
- Lucide React
- Motion (subtle, reduced-motion aware)
- Markdown notes via `gray-matter` + `react-markdown`

No chatbot. No backend. Ready for Vercel.

## Features

- Home, About, Projects, project case notes, Writing, Contact
- Locale-aware metadata, sitemap, robots
- Theme preference persisted in `localStorage`, with a first-visit system preference
- Contact and GitHub / LinkedIn links only render when set in environment variables
- CareerPilot case notes based on the actual local Python project (not invented metrics)

## Project structure

```text
app/[locale]/     routes (home, about, projects, writing, contact)
components/       layout, sections, UI
content/writing/  markdown notes per locale
i18n/             next-intl routing and request config
lib/              site config, projects, writing, metadata
messages/         en.json, fa.json
```

## Local development

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Middleware sends `/` to `/en`.

## Environment variables

See `.env.example`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for sitemap, robots, Open Graph |
| `NEXT_PUBLIC_GITHUB_URL` | Public GitHub profile or org |
| `NEXT_PUBLIC_LINKEDIN_URL` | Public LinkedIn URL |
| `NEXT_PUBLIC_EMAIL` | Public email; omitted from the UI if empty |

## Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm start
```

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Import the project in Vercel (Next.js preset).
3. Set the environment variables from `.env.example`, with `NEXT_PUBLIC_SITE_URL` as the production origin (your future `yourname.dev` or the `*.vercel.app` URL).
4. Deploy.

Custom domain: add it in Vercel, then update `NEXT_PUBLIC_SITE_URL`. Do not hardcode a domain in the source.

## What you still need to replace

- GitHub, LinkedIn, email in `.env.local`
- CareerPilot repository URL in `lib/projects.ts` (`githubUrl`)
- The placeholder “Next project” entry
- Draft writing in `content/writing/{en,fa}/`
- Optional portrait later (no stock photo is used)

## Future improvements

- Publish real notes once they are written
- Add a CareerPilot GitHub link when the repo is public
- Optional later: a small “ask about my work” feature as a separate Python FastAPI service behind Next.js — not a gimmick chatbot on v1

```text
Next.js frontend → FastAPI → model / project knowledge
```
