# AGENTS.md

## Project Stack
- React 19 + Vite 8 + TypeScript.
- Tailwind CSS v4 through `@tailwindcss/vite`.
- `motion/react` for subtle animation, `lucide-react` and `react-icons` for icons.
- Playwright scripts generate homepage and project preview screenshots.

## Commands
- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Tests: no test script is configured.
- Preview: `npm run preview`
- Homepage screenshot: `npm run preview:screenshot`
- Project screenshots: `npm run generate:project-previews`

## Structure
- `src/components`: portfolio sections and reusable UI.
- `src/data/cv.ts`: profile, skills, experience, projects, and awards data.
- `src/index.css`: Tailwind import, global fonts, and editor color helpers.
- `public/images`, `public/cv`, `public/previews`: static assets.
- `scripts`: Playwright screenshot generators.

## Coding Conventions
- Use TypeScript React components with named exports for sections.
- Keep portfolio content data-driven in `src/data/cv.ts` when practical.
- Use Tailwind classes for styling; do not add external UI libraries by default.
- Keep semantic HTML, accessible labels, and `target="_blank" rel="noreferrer"` for external links.
- Keep comments minimal and useful.

## Design Rules
- Preserve the dark code-editor aesthetic: dark panels, thin borders, monospace text, line numbers, and compact spacing.
- Use purple accents for project/card interactions; keep existing green/yellow accents where already established.
- Prefer square editor-style panels over rounded marketing cards.
- Keep layouts responsive and do not break the fixed header, sidebar, line-number gutter, or right index.

## Restrictions
- Do not overwrite user assets in `public`.
- Do not install new libraries unless necessary and approved.
- Do not revert unrelated dirty worktree changes.
- Screenshot scripts may need network access and an installed Playwright Chromium browser.

## Validation
- Run `npx tsc -b` for code-only changes when a full build is not needed.
- Run `npm run build` for broader React/Vite changes.
- Run `npm run lint` when touching components or TypeScript logic if practical.
- For screenshot changes, run the relevant script and confirm output files exist.
- Visually check responsive layout after changing UI sections.
