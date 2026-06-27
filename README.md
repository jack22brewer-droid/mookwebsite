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

Both lead forms post to **one** endpoint, so you only configure it once:
- `#sampleForm` — the **Get Started** form (`get-started.html`)
- `#tradeForm` — the **Open an Account** form (`distributors.html`)

### Connect it (one line)

Open `script.js` and paste your URL into `FORM_ENDPOINT` at the top:

```js
var FORM_ENDPOINT = "https://hooks.zapier.com/hooks/catch/123456/abcd/";
```

**With Zapier:** create a Zap → trigger **Webhooks by Zapier → Catch Hook** →
copy the custom webhook URL → paste it above. Then add actions (email yourself,
add a row to Google Sheets, create a CRM lead, etc.). Each submission arrives as
JSON including a `formSource` field (`sampleForm` or `tradeForm`) so you can route
B2C vs. distributor leads differently.

Also works with **Formspree / Getform / Basin** — just paste their form URL.

Leave `FORM_ENDPOINT` blank to keep demo mode (shows the thank-you message and
logs the data to the browser console — nothing is sent).

> Prefer an embedded form instead (Zapier Interfaces, Jotform, Tally, Google
> Forms)? Replace the `<form>…</form>` block on the page with their embed code.

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
