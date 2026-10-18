# Jana Alghasham — Portfolio

Single-page, bilingual (English `/` + Arabic `/ar/`, RTL) portfolio for Jana Alghasham (جنى حمد الغشام), Infrastructure & DevOps Engineer, founder of JXTech Studio, open to work.

## Stack
- **Astro 5**, static output, no UI framework. Vanilla TS in `<script>` tags, scoped CSS in `<style>`.
- Fonts self-hosted via `@fontsource`: Fraunces (display/brand), Space Grotesk (body/UI), JetBrains Mono (labels/terminal), IBM Plex Sans Arabic (all Arabic text).
- Images in `src/assets/` go through `astro:assets` (`<Image>`) → WebP. Static files (favicons, CV, OG image, brand SVGs) live in `public/`.
- Hosting: **Cloudflare Pages** → https://jana-alghasham.pages.dev (build `npm run build`, output `dist`). Headers in `public/_headers`.

## Commands
- `npm run dev` — dev server on :4321
- `npm run build` — must pass with no errors before finishing any change
- `npm run preview` — serve `dist/`

## Structure
- `src/i18n/en.ts`, `src/i18n/ar.ts` — **all copy**, per language: UI strings, profile, experience, projects (case studies), skills, infra-map text. Both files share the `Content` type in `src/i18n/types.ts`, so a field added to one must be added to the other (the build fails otherwise). **Never hard-code copy in components.**
- `src/i18n/index.ts` — `content[lang]`, `person` (email, links, CV path: language-independent), section ids, helpers.
- `src/data/infra.ts` — geometry of the infrastructure map. Keep it conceptual: **no IPs, ports, or client project names**; tools not in use must be `planned: true`.
- `src/components/Page.astro` — assembles the page; `src/pages/index.astro` (en) and `src/pages/ar/index.astro` (ar) just render `<Page lang>`.
- `src/components/` — one component per section, each takes `lang`: Header (incl. menu dialog + language switch), Hero, About, InfraMap, Projects (incl. case-study drawer), Experience, Stack, Studio (JXTech Studio founder card), Credentials, Contact (incl. footer).
- `src/assets/illustrations/` — Jana's illustrations (infrastructure in About, development in Studio).
- `assets_inbox/` — raw source material (brand kit, CVs, old data). Not shipped.

## Rules
- **One page only.** Navigation = overlay menu + section anchors. No extra routes/tabs.
- Every section: `id` from `sectionIds` in `src/i18n/index.ts`, `data-section={t.ui.sections[id]}`, `data-index="NN"`, and `SectionHead` with `[NN]` kicker.
- Colors only via tokens in `src/styles/global.css` (palette: #030303, #191A19, #161179, #261FB3, #BF092F). Crimson `#BF092F` fails AA for small text on black → use `--accent-bright` for small crimson text.
- Motion follows the installed Emil Kowalski skills (`.claude/skills/emil-design-eng` etc.): custom curves (`--ease-out`, `--ease-drawer`), animate only transform/opacity/clip-path, UI ≤300ms, `:active` scale 0.97, hover gated behind `(hover: hover) and (pointer: fine)`, always a `prefers-reduced-motion` fallback.
- Dialogs (menu, drawer) use native `<dialog>` + `showModal()` with a JS-driven exit animation; Esc must animate closed and return focus.
- Must work at 360px wide with no horizontal page scroll, in **both** languages.
- RTL: use logical CSS (`margin-inline-*`, `inset-inline-*`, `padding-inline-*`), multiply horizontal motion by `var(--dir)`. Never letter-space or uppercase Arabic (global `.mono:lang(ar)` handles it). Keep the terminal, infra diagram and tech chips `dir="ltr"`.
- Never show the phone number publicly.

## Content decisions (from Jana)
- JXTech Studio is its own section after Stack, NOT an Experience entry. Text is only the one-line description, no dates/"present".
- Arabic company names: الجواد بريميوم، ندير، منافع المالية، T2.
