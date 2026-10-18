---
name: add-project
description: Add or update a project case study on Jana's portfolio. Use when the user shares a new project (notes, write-up, screenshots, repo link) or asks to edit/reorder projects.
---

# Add a project

1. **Gather** from the user: title, solo or team (and teammates), category, the problem, what she built, results, stack, links, and 1 screenshot. Ask only for what's missing. Don't invent metrics.
2. **Image**: copy the screenshot to `src/assets/projects/<slug>.png` (kebab-case). Landscape, ≥1600px wide preferred. Check that it reads at card size (16:10 crop from the top). If the top is mostly blank, ask for or pick a better shot.
3. **Write the entry in both** `src/i18n/en.ts` and `src/i18n/ar.ts` (`projects` array, same `slug`/`image`/order in both), following the `Project` type and the `content-writing` skill:
   - `summary`: one sentence, ≤ 25 words, what it is and why it matters.
   - `problem`: 1–2 sentences of the pain before.
   - `flow`: 3–5 short steps (≤ 3 words each) describing the architecture/data path. Rendered as a pipeline.
   - `built`: 3–5 bullets, each starting with a verb or concrete noun, specific (tools, numbers).
   - `outcomes`: 2–3 bullets, results only, no fluff.
   - `stack`: most important first (cards show the first 4).
   - Team projects: credit teammates in `summary` ("Built with …").
4. **Order**: the array order is the display order. The first item is the large featured card, so it should be the strongest infra/DevOps project.
5. Stats and the hero terminal derive project count automatically; nothing else to update.
6. Run `npm run build`; confirm no errors.

Never include client names, internal IPs, credentials or anything from a screenshot that looks like personal data (names, phone numbers). Flag it to the user if a screenshot shows any.
