# Honey Pop

NZ honey lip balm in a wooden matchbox. Refillable insert. Four ingredients, six flavours. (Renamed from HoneyBum — see `brand/story/brand-story-honeybum.md` archived in the parent repo.)

## Brand

- **Name:** Honey Pop (a super is the box on top of a beehive — where bees store the honey they don't need)
- **Format:** Wooden matchbox + refillable insert. Outer sleeve uses Prada Mode colour bands; the inner drawer / lid graphic uses the Japanese matchbox label aesthetic.
- **Product:** NZ honey lip balm — honey, beeswax, coconut oil, jojoba oil
- **Philosophy:** Four ingredients you can pronounce. Buy the matchbox, refill the insert, keep the box.
- **Voice:** Warm graphic confidence. Direct, fond, graphic, specific. Never wellness, never luxury-cold, never cheeky.
- **Audience:** 25–40 design-conscious — keeps nice things, reads ingredient lists, notices packaging.
- **Price:** ~$25 NZD matchbox · ~$8 NZD refill insert
- **Reframe from HoneyBum:** *cheeky name, serious product* → *obvious once you see it*

## Three locked design surfaces

| Surface | Visual language | Reference |
|---|---|---|
| **Outer matchbox sleeve** | Prada Mode poster — flat colour bands, big bold type, tight grid | `docs/reference/visual-language-teardown.md` §2 |
| **Inner drawer face / lid graphic** | Japanese matchbox labels (1950s–70s Tokyo) — flat saturated ink, hand-lettered wordmark, single subject | `docs/reference/visual-language-teardown.md` §1 |
| **Marketing site** | Ffern editorial — sticky 380px sidebar + 900px main column + hairline-divided sections + lowercase `§NN` mono anchors | `docs/reference/ffern-teardown.md` |

## Flavours (launch range)

| Flavour | Honey varietal | Accent token |
|---|---|---|
| Vanilla | Clover (Canterbury) | `--flavour-vanilla` `#e6b56a` |
| Pomegranate | Tāwari (Northland) | `--flavour-pomegranate` `#a81d2e` |
| Coconut & Pear | Rewarewa (West Coast) | `--flavour-coconut-pear` `#6e8e3e` |
| Beeswax (Original) | Mānuka (East Cape) | `--flavour-beeswax` `#c68418` |
| Honey & Grapefruit | Pōhutukawa (Coromandel) | `--flavour-honey-grapefruit` `#e4622a` |
| Mango | Kāmahi (Westland) | `--flavour-mango` `#e89420` |

## Stack

- Vite 8 (multi-page static site) — 22 `rollupOptions.input` routes in `vite.config.js`
- Vanilla HTML/CSS, no framework
- `src/tokens.css` — design tokens (Ffern-exact palette + per-flavour lid palettes)
- `src/style.css` — chassis CSS (sidebar / section / hero / lid / split / etc.)
- `src/public/` — static copy-through (robots.txt, sitemap.xml, og-image.svg, _headers, _redirects)
- Google Fonts: Newsreader (serif — body + headings), Space Grotesk (display — lid component only), Space Mono (data chips)
- Cloudflare Pages deploy target — `wrangler.toml` + `src/public/_headers` + `src/public/_redirects`

## Build

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → ./dist (23 HTML pages, ~26KB CSS)
npm run preview
```

## Routes (23)

- `/` · `/404.html`
- `/shop/` + 6 flavour pages at `/shop/<slug>/`
- `/about/{our-story,how-it-works,sustainability,our-beekeepers,design-system}/`
- `/ingredients/` · `/cinema/` · `/stockists/` · `/wholesale/` · `/refills/` · `/faq/` · `/privacy/` · `/terms/`

See `/about/design-system/` for the matchbox lid design system live.

## Source of truth

- **Spec:** `/Users/grom/morgpork/super/docs/superpowers/specs/2026-04-15-super-marketing-site-design.md`
- **Brand story:** `/Users/grom/morgpork/super/brand/story/brand-story.md`
- **Visual language:** `docs/reference/visual-language-teardown.md`
- **Site IA reference:** `docs/reference/ffern-teardown.md` + `docs/reference/ffern/` screenshots
