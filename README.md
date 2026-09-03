# Honey Pop

NZ honey lip balm in a wooden matchbox. Refillable insert. Four ingredients, six flavours.

Marketing site, Ffern-chassis clone + Prada-Mode-style matchbox lid system + Honey Pop content.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → ./dist
npm run preview  # serve ./dist locally
```

## Stack

- **Vite 8** — multi-page static site (23 routes, see `vite.config.js`)
- **Vanilla HTML + CSS** — no framework, no JS (beyond one stub form)
- **Google Fonts** — Newsreader (serif) + Space Grotesk (lid display only) + Space Mono (data chips)
- **Cloudflare Pages** — deploy target (see `wrangler.toml`)

## Repo map

```
src/
  index.html                         Homepage — Ffern-style editorial scroll
  404.html                           Not-found page with off-flavour lid

  shop/index.html                    Catalog (6 lids)
  shop/<flavour>/index.html          Per-flavour page × 6
    (vanilla · pomegranate · coconut-pear · beeswax · honey-grapefruit · mango)

  about/
    our-story/index.html             Narrow-prose brand essay
    how-it-works/index.html          Refill mechanic explainer
    sustainability/index.html        Sustainability argument
    our-beekeepers/index.html        6 beekeeper profiles
    design-system/index.html         Live lid system preview

  ingredients/index.html             Core 4 + 6 flavour oils + 6 honey varietals
  cinema/index.html                  Layout break — sidebar removed, full-viewport frame

  stockists/index.html               Retailer list + wholesale CTA
  wholesale/index.html               B2B landing
  refills/index.html                 Refill catalog

  faq/index.html                     Accordion Q&A
  privacy/index.html                 Privacy policy
  terms/index.html                   Terms

  tokens.css                         Design tokens (palette, type, spacing)
  style.css                          Chassis CSS (sidebar, sections, lids, etc.)
  favicon.svg

  public/                            Static copy-through to dist/ root
    robots.txt
    sitemap.xml
    og-image.svg                     Social preview (1200×630)
    _headers                         Cloudflare security + cache headers
    _redirects                       Cloudflare redirects (legacy slugs, aliases)
```

## Design system

Three locked surfaces, three visual languages.

| Surface | Language | Reference |
|---|---|---|
| **Marketing site** | Ffern editorial — sticky 380px sidebar + 900px main column + 1px hairlines + lowercase `#` anchors + single serif | `docs/reference/ffern-teardown.md` |
| **Matchbox outer sleeve** | Prada-Mode block-colour posters — flat saturated colour bands + tight grotesque type + no decoration | `docs/reference/visual-language-teardown.md` §2 |
| **Matchbox lid (inner drawer face)** | Japanese 1950s–70s matchbox labels → scaled back down via the Prada-Mode system | `docs/reference/visual-language-teardown.md` §1 |

See **`/about/design-system/`** live for the six lids at actual matchbox scale with palette swatches.

### Design tokens (`src/tokens.css`)

- Paper: `#fcfbf7` (ffern.co sand-50)
- Ink: `rgba(0, 0, 0, 0.85)` · Ink muted: `rgb(126, 116, 105)`
- Accent: `#98512b` terracotta
- Hairline: `#e2d5c5`
- Six per-flavour lid palettes (deep / dominant / light) — see `tokens.css`

### Typography

- **Serif** — Newsreader, 300/400/500/600 only (site chrome + headings + body prose)
- **Display** — Space Grotesk, 400–700 (lid component only — hard bifurcation)
- **Mono** — Space Mono 400 / 700 (data chips, meta)
- Global letter-spacing `0.016em` (~0.25px at 16px) for Ffern rhythm

## Content

- **Brand story** — `brand/story/brand-story.md` (Honey Pop v1) · predecessor archived at `brand-story-honeybum.md`
- **Voice** — warm graphic confidence; UK English; curly quotes; em dashes. See brand-story doc for banned words.
- **Locked copy**
  - Hero H1: "Lip balm in a wooden matchbox."
  - Hero 3-line: `Four ingredients. / Six flavours. / Keep the box, refill the insert.`
  - §04 Keep (how-it-works) — full paragraph, do not paraphrase.

## Deploy (Cloudflare Pages)

```bash
npm run build
npx wrangler pages deploy dist --project-name=super-honey
```

Or connect the repo in the Cloudflare dashboard — Pages will run `npm run build` and publish `dist/` on each push.

`_headers` and `_redirects` under `src/public/` are copied to `dist/` root by Vite and picked up by Cloudflare automatically.

## Known follow-ups

- `src/_partials/` extraction via custom Vite HTML-include plugin (spec §6.7). Sidebar + footer + `<head>` currently duplicate across 23 pages.
- Real matchbox lid SVG designs (per `visual-language-teardown.md` lid principle #5 — flavour marks should be hand-drawn, not typeset).
- Product photography replaces gray `.image-placeholder` blocks.
- Waiting-list form backend (currently a stub `<form action="#join">`).
- Real stockist + beekeeper names (placeholders in both pages).

## References

- Spec: `/Users/grom/morgpork/super/docs/superpowers/specs/2026-04-15-super-marketing-site-design.md`
- Ffern structural teardown: `docs/reference/ffern-teardown.md` (+ 34 screenshots in `docs/reference/ffern/`)
- Visual language teardown: `docs/reference/visual-language-teardown.md`
- HoneyBum-era screenshots (Bare Earth render inspiration): `docs/reference/honeybum-screenshots/`
