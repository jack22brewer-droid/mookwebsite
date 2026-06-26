# Gulfstream Marine Supplies

> Essentials for Every Voyage

A three-page marketing site for a marine canvas house that serves two audiences:
the **trade** (wholesale materials) and **boat owners** (bespoke custom covers).
Static HTML/CSS/JS — no build step. Open `index.html`.

## Pages

| File | Page | Audience | Primary CTA |
|------|------|----------|-------------|
| `index.html` | Brand hub — splits the two audiences | Everyone | Route to the right page |
| `custom.html` | Custom covers & canvas | B2C — boat owners | **Request Fabric Samples** |
| `trade.html` | Wholesale & materials | B2B — awning mfrs, canvas/sail lofts, upholsterers | **Open a Trade Account** |

Shared assets: `styles.css` (design system) and `script.js` (nav, reveals, forms).

## Brand / design system

- **Palette:** slate blue & sand with a single **brass** accent, on warm paper.
  All defined as CSS variables in the `:root` block of `styles.css` — change them
  once to reskin everything.
- **Logo:** monogram (compass star + gulfstream current) + wordmark lockup, used
  in nav and footer. Inline SVG, also used as the favicon.
- **Motifs:** a recurring "gulfstream current" line (`.stream`), small-caps
  overlines with hairline rules (`.eyebrow`), and a subtle film-grain overlay for
  a printed, premium feel.
- **Type:** Fraunces (display serif) + Inter (UI), via Google Fonts.
- **Imagery:** unified duotone placeholders (`.ph` + tonal `--a … --f` variants),
  each labeled with the shot it expects — so disparate photos still read as one
  brand once you drop them in.

## Customize

1. **Brand name / tagline** — search-and-replace `Gulfstream Marine Supplies` and
   `Essentials for Every Voyage` if they ever change.
2. **Contact details** — placeholder address / phone / emails live in each footer
   (`hello@…` for retail, `trade@…` for wholesale).
3. **Trade specs** — the spec table and catalog in `trade.html` use representative
   placeholder figures; replace with your real line card, widths, weights and MOQs.
4. **Copy & testimonials** — all placeholder.
5. **Colors / fonts** — `:root` variables and the Google Fonts `<link>`.

## Add real photos

Each placeholder is a `<div class="ph ph--x">` with a `ph__label` describing the
shot. Replace with an `<img>` (or set a `background-image` on that element):

```html
<img src="images/your-photo.jpg" alt="Fitted mooring cover on a center console" />
```

Keep aspect ratios consistent (the gallery and cards already enforce them) so the
grid stays tidy.

## Wire up the forms

Both lead forms (`#sampleForm` on custom.html, `#tradeForm` on trade.html) validate
and show an inline thank-you, logging data to the console. To actually receive
leads, replace the marked block in `script.js`'s submit handler:

- **Formspree / Getform** — set the form `action` + `method="POST"`.
- **Netlify Forms** — add the `netlify` attribute to each `<form>`.
- **Your own API / CRM** — `POST` the collected `data` object.

Sample form fields: `firstName, lastName, email, phone, address, boat, product, notes`.
Trade form fields: `company, contact, email, phone, businessType, volume, resaleId, notes`.

## Run locally

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```
Or use the VS Code **Live Server** extension for auto-reload on save.
