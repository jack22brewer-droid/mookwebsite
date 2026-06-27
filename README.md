# Gulfstream Marine Supplies

> Essentials for Every Voyage

Marketing site for a custom marine canvas business — **boat enclosures and covers**
are the core, with biminis, cushions and other canvas made to order. Boat owners
(B2C) are the focus; distributors (B2B) are a secondary audience.

Static HTML/CSS/JS — no build step. Open `index.html`.

## Files

| File | What it is |
|------|------------|
| `index.html` | The main page — a single scrolling experience: Hero → Products → Gallery → Our Process → Get Started, plus a small distributor band |
| `distributors.html` | Secondary B2B page — wholesale catalog, spec table, account form |
| `styles.css` | The whole site's stylesheet (editorial design system) |
| `script.js` | Nav, mobile menu, scroll reveals, form handling |

> Note: earlier drafts had `custom.html`, `trade.html` and `home.css`. Those were
> renamed/merged — `custom.html` folded into `index.html`, `trade.html` →
> `distributors.html`, `home.css` → `styles.css`. (Git history still has the old
> versions if ever needed.)

## Design system

Editorial, near-monochrome, flat — deliberately the opposite of a generic template:
no gradients, drop shadows, pill badges, checkmark cards, marquees or stock icons.

- **Palette / type / spacing** are CSS variables in the `:root` block of `styles.css`
  — change them once to reskin everything. Fonts: Fraunces (display) + Schibsted
  Grotesk (text), via Google Fonts.
- **Imagery** uses one uniform warm-monochrome grade so varied photos read as one
  brand. Every `<img>` falls back to a flat tone if it can't load (no broken icons).

## Photos (temporary placeholders)

Photo spots pull keyword stock from [LoremFlickr](https://loremflickr.com)
(e.g. `https://loremflickr.com/1100/1400/boat?lock=51`). The `?lock=N` pins a
specific image. These are temporary — replace the `src` with your own photos:

```html
<img src="images/enclosure.jpg" alt="Full cockpit enclosure"
     loading="lazy" decoding="async" onerror="this.remove()" />
```

## Forms

Two lead forms validate and show an inline thank-you, logging data to the console:
- `#sampleForm` — the **Get Started** form on `index.html`
- `#tradeForm` — the **Open an Account** form on `distributors.html`

To receive leads for real, replace the marked block in `script.js` with a POST to
Formspree / Netlify Forms / your CRM. (Forms are not wired to a backend yet.)

## Run locally

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```
Or use the VS Code **Live Server** extension for auto-reload on save.

## Deploy

This is a plain static site — no build step, no server. Deploy the repo root of
the **`main`** branch to any static host:

- **Netlify / Vercel / Cloudflare Pages** — "New project" → import this repo →
  framework: **None/Other**, build command: *(leave empty)*, publish directory: **`/`**.
- **GitHub Pages** — repo **Settings → Pages** → Source: **Deploy from a branch**,
  Branch: **`main`** / **`/ (root)`**. URL: `https://<user>.github.io/<repo>/`.
- **Any web host** — just upload the files; `index.html` is the entry point.

Before going live: replace placeholder photos and contact details, and wire the
forms to a real endpoint (see **Forms** above).
