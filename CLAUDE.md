# Gulfstream Marine Supplies — website

Static multi-page marine-canvas site (custom boat enclosures & covers, B2C-first;
distributors secondary). Pages: index, products, gallery, process, get-started,
distributors. Shared `styles.css` + `script.js`. No build step.

## Design guidelines (persistent — follow on every change)

- **No eyebrows / kickers / overlines above headings.** Do not put a small label
  line (e.g. "— SELECTED WORK") above a heading. Lead with the heading itself.
  This is a standing preference — applies site-wide, every page, every section.
- **Editorial, near-monochrome style.** No gradients, drop shadows, pill badges,
  checkmark-bullet cards, marquees, or generic line icons.
- **Sparse copy.** One confident sentence over three. Let whitespace carry it.
- Palette, type, and spacing are CSS variables in the `:root` block of `styles.css`
  — change them there to reskin the whole site.
- Fonts: Fraunces (display serif) + Schibsted Grotesk (text).
- Photos use one uniform warm-monochrome grade; every `<img>` has
  `onerror="this.remove()"` so it falls back to a flat tone, never a broken icon.
