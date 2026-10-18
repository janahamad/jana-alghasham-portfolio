---
name: portfolio-design
description: Jana's portfolio visual system — palette, type, spacing, components and motion rules. Use before adding or restyling any section, component or animation on this site.
---

# Portfolio design system

Direction: dark "systems console". Editorial serif display type (from her logo) meets terminal/mono readouts. Numbered sections (`[03] Selected work`), uppercase mono labels, hairline dividers, navy/blue glows. Inspired by the structure of mazen96.com (visuals only, never content).

## Tokens (`src/styles/global.css`)
| Role | Value |
|---|---|
| Background | `--bg` #030303 |
| Surface | `--surface` #191A19, `--surface-2` #121312 |
| Glow / depth | `--navy` #161179, `--blue` #261FB3 (radial gradients only; never text) |
| Accent | `--crimson` #BF092F (big type, buttons, rules); `--accent-bright` #E8264F for small text |
| Text | `--text` #E9E4E5, `--text-muted` #A19C9D, `--text-faint` #6F6B6C |
| Lines | `--line` 9% white, `--line-strong` 18% white |
| Status green | #3DDC84 (open-to-work dot, OK states only) |

Never put crimson on mid-tone backgrounds (brand rule). The brand kit is in `assets_inbox/brand/README.md`.

## Type
- Display: Fraunces 800–900, `font-variation-settings: 'opsz' 144, 'SOFT' 100`, tight tracking (-0.02 to -0.035em). Section titles, hero name, big numbers.
- Body/UI: Space Grotesk.
- Labels: `.mono` class (JetBrains Mono 12px, uppercase, 0.08em).
- Arabic: IBM Plex Sans Arabic (400/500/700), wired as the fallback in every font stack, so Arabic glyphs always use it. Arabic display headings use weight 700, letter-spacing 0, line-height ≥ 1.25.

## Components to reuse
`SectionHead`, `.section`, `.container`, `.chip`, `.btn .btn-primary/.btn-ghost`, `[data-reveal]` (+ `style="--i:n"` for stagger), the `<dialog>` open/close pattern in `Header.astro` / `Projects.astro`.

## Motion
Follow `.claude/skills/emil-design-eng`. Before adding motion, run through `find-animation-opportunities`; after, review with `review-animations`. In short:
- Enter: `--ease-out` / `--ease-drawer`; exits faster than enters.
- Only transform, opacity and clip-path. No `transition: all`.
- Hover effects inside `@media (hover: hover) and (pointer: fine)`.
- Every animation has a `prefers-reduced-motion` path.

## Checks before done
1. `npm run build` passes.
2. 390px and 1440px both look intentional on `/` **and** `/ar/`, no horizontal scroll (use `mobile-native` + `break-ui` skills for edge cases).
3. Keyboard: Tab order sensible, focus visible, Esc closes dialogs.
