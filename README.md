# Tidewell Canvas Co. — Landing Page

A single-page, conversion-focused landing site for a custom marine canvas factory:
**custom boat covers, bimini & T-tops, and full cockpit enclosures**. The primary
call-to-action is **Request Free Fabric Samples** (lead capture).

Built as static files — no build step, no dependencies. Just open `index.html`.

## Files

| File | Purpose |
|------|---------|
| `index.html` | All page content & structure |
| `styles.css` | Styling — slate blue & sand luxury palette |
| `script.js` | Sticky nav, mobile menu, scroll reveals, form handling |

## Design choices (per your direction)

- **Palette:** Slate blue & sand (coastal-premium). Defined as CSS variables at the
  top of `styles.css` — change `--slate-*` and `--sand-*` to re-skin instantly.
- **Products featured:** Custom boat covers · Bimini & T-tops · Full enclosures.
- **Primary CTA:** Request fabric samples (the lead form near the bottom).
- **Imagery:** Tasteful CSS placeholders, each labeled with the shot it expects.
  Replace them with your real factory / on-the-water photos (see below).
- **Vibe:** Hand-stitched fine canvas — serif display type (Fraunces), woven-canvas
  texture motifs, brass accent used sparingly.

## Customize

1. **Brand name** — find-and-replace `Tidewell Canvas Co.` (placeholder) with your
   real name across `index.html`. Update the `<title>` and meta description too.
2. **Contact details** — footer has placeholder address / phone / email.
3. **Copy & testimonials** — all placeholder; swap for real customer quotes.
4. **Colors** — edit the `:root` variables in `styles.css`.
5. **Fonts** — swap the Google Fonts `<link>` in `index.html`.

## Add real photos

Each placeholder is a `<div class="ph ...">` with a `ph__label` describing the shot.
To use a real image, replace the div with:

```html
<img src="images/your-photo.jpg" alt="Fitted mooring cover on a center console" />
```

…or set the photo as a CSS `background-image` on that placeholder class. The
labels tell you what each slot expects (e.g. *"Photo: fitted mooring cover"*).

## Wire up the lead form

The form currently validates and shows a thank-you message, logging the data to the
browser console. To actually receive leads, open `script.js` and replace the marked
block in the submit handler with a real submission. Easiest options:

- **Formspree / Getform** — set `<form action="https://formspree.io/f/XXXX" method="POST">`
  and remove the `ev.preventDefault()` (or keep the JS for the inline thank-you).
- **Netlify Forms** — add `netlify` to the `<form>` tag if hosting on Netlify.
- **Your own API / CRM** — `POST` the `data` object to your endpoint.

The collected fields are: `firstName, lastName, email, phone, address, boat,
product, notes`.

## Run locally

Just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```
