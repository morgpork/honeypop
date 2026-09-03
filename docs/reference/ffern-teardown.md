# Ffern.co — Structural Teardown

Reference for SUPER site structure. Captured 2026-04-15. Aesthetic is *not* the goal; layout, pacing, IA is.

## Pages Overview

| Page | URL | Purpose | Key sections |
|---|---|---|---|
| Home | `/` | Editorial launchpad; waiting-list signup; current season | Sidebar · hero photo+steps · press · film · latest release · ingredients · sustainability · noses · archive · store · reviews · footer |
| Season/product | `/seasons/spring-26` | One perfume = one season | Sidebar · bottle+specs · film · ingredient note-pills · upsell · footer |
| Shop | `/products` | Full catalog grid | Sidebar · title · category tabs · 3-col tinted tile grid · footer |
| Our Story | `/about/our-story` | Brand origin | Sidebar · multi-section long-form text, no images |
| How it Works | `/about/how-it-works` | Ledger subscription mechanic | Sidebar · sectioned text · 01–04 release schedule · inline CTA |
| Our Noses | `/about/our-noses` | Perfumer credentials | Sidebar · portrait+bio carousel |
| Sustainability | `/about/sustainability` | Values | Sidebar · full-bleed hero · centered intro · alternating text/image |
| Ingredients | `/ingredients` | Database | Sidebar · title+intro · Top/Mid/Base pill-button sections |
| Cinema | `/cinema` | Brand film theater | **Sidebar removed** · rounded "screen" bezel · now-showing ribbon |
| Folk Foundation/Artists/Podcast | — | "Ffern World" editorial | Grid-of-cards pages |
| 23 Beak St | `/about/23-beak-st` | Physical shop | Sidebar · hero · opening-times table |
| FAQ | `/faq` | Support index | Sidebar · centered title · tinted card with bullet topic links |

## Information Architecture

**Hamburger (top-right circular button)** groups into: **Seasons** (backward-chrono list of ~30 perfumes), **Shop** (Artefacts / Archive / Categories), **Ffern World** (Cinema, Folk Foundation, Podcast, Artists), **Info** (Our story, How it works, Our noses, Sustainability, The Ffern shop, Ingredients), **Sign in**.

**Footer** flattens to three stacks: Utility (FAQ, Delivery, Returns, Careers, Contact) · About · Social. Thin copyright bar underneath (Press, Privacy, Terms).

**Core flow:** land on home → sticky sidebar countdown enforces scarcity → phone input draws for ledger space → browse Seasons / Ingredients for depth. No cart on primary pages; purchase happens behind ledger membership. Shop pages exist for ancillary products only.

## Design Tokens

### Type
- **Families:** `FfernType, georgia, serif` does body + display (one custom serif for everything). `FfernTypeMono` for data chips. `Spectral` secondary. No sans-serif body.
- **Weights:** 300 / 400 / 500 / 600 only. No 700+.
- **Scale (1440px viewport):**
  - Carousel display H3: 39px / 48.75px, weight 600, uppercase, ls 0.25px
  - Page title H4: 32px / 48px, weight 500, terracotta
  - Body p: 16px / 24px, weight 300–400
  - Nav/button: 15px / 22.5px, weight 300
  - Micro label ("JUST LAUNCHED", meta chips): 12px / 15px uppercase
  - Section anchor marker: small lowercase + trailing `#`
- Global `letter-spacing: 0.25px` on almost everything — unified rhythm.

### Colour
Exposed Tailwind-style scales (50–900) for **terracotta, ash, sand, red, green**.
- **Paper bg:** `#fcfbf7` (sand-50) — warm off-white
- **Secondary surface:** `#e2d5c5` (sand-200) — tinted cards / meta chips
- **Body text:** `rgba(0,0,0,0.85)`
- **Primary accent:** burnt terracotta `#98512b` / `rgb(226,151,110)` (titles, links, pills)
- **Muted grey:** `rgb(126,116,105)` (secondary text)
- **Sage greens:** ingredient pills and hover states

No pure white, no pure black anywhere. Everything sits on paper.

### Spacing
From CSS custom props: `mobContentMargin: 20px`, `deskContentMargin: 48px`, `deskMegaMargin: 70px`, `siderMargin: 20px`. Buttons `border-radius: 4px`, cards `6px`. Sections have no vertical padding of their own; rhythm comes from internal children + a 1px `#e2d5c5` hairline divider between them.

### Container / measure
- Desktop sidebar: fixed 380px, sticky, `padding: 48px`
- Main column: ~900px (1280px max site − 380px sidebar)
- Body prose measure: 920px wide at 16px serif (~60ch) — comfortable
- Buttons `radius: 4px`, cards `radius: 6px`

## Per-Page Breakdown

### Homepage
1. Thin top strip — centered terracotta "Free worldwide delivery" (12px)
2. **Persistent left sidebar** (sticky): `Ffern` wordmark → meta table (Current Season / Next Release / Waiting List, each value a sand-200 chip) → hairline → Join-waiting-list card (flag + phone + arrow) → country currency selector
3. **Main column** — vertical scroll through meta-labeled sections separated by hairline dividers. Each section starts with a small "`section-name #`" anchor marker:
   - **Hero:** full-bleed product photo; floating off-white card overlay with H1, three-step 01/02/03 list, price line, `JOIN` button
   - "This Wild Land #" — film tile with WATCH pill
   - "Ffern in the press #" — tinted card with quote + publication wordmark (Vogue), dot pager
   - "Our story #" — full-bleed still, WATCH overlay
   - "Our latest release #" — bottle + tagline + Learn more
   - "This season's key ingredients #" — 3-up card grid (ingredient photo / name / origin), carousel
   - "Sustainability #" — image-left + text-right
   - "Our noses #" — portrait carousel
   - "The archive #" — horizontal strip of season thumbnails
   - "23 Beak Street #" — store image + 7-row opening-times table
   - "Latest reviews #" — stars + quote carousel
4. **Footer** — 3 link stacks + thin copyright bar
5. Occasional full-viewport modal: "enter the draw" with phone input

### Season / Product
- Sidebar identical.
- Right column: centered bottle photo → specs block (season H3 + price, one-line description, composition sentence `Organic Eau de Parfum twice aged and bottled in Somerset, England. 32ml.`, meta rows with sand-200 chip values) → seasonal film → ingredients 3-up → **fragrance notes pills** in three tint-coded rows `Top / Mid / Base` (each a wrap of pill buttons beside explanatory prose) → candle upsell → footer.

### Shop
- Sidebar identical.
- Right column: title + sub-intro + tinted ledger notice bar → horizontal category filter → **3-column square tile grid**, each tile with a soft-color tinted background (cream, sage, peach, dusk, mint), product name, subtitle, tiny category tag, right-aligned price.

### Our Story
- Sidebar identical.
- Narrow centered prose column — no images at all. Pattern: `Intro #` label → H4 `Our Story` in terracotta → 1-para intro → `The History #` label → 5–6 paras at ~60ch. Pure text editorial.

### How it Works
- Sidebar identical.
- Stacked sections with meta labels (`How It Works #`, `The Ffern Ledger #`, `Natural Fragrance #`, `Our Sampling System #`, `The Ffern Archive #`). Inside Ledger section: horizontal `01 Winter Solstice / 02 Spring Equinox / 03 Summer Solstice / 04 Autumn Equinox` row. Inline CTA `Discover our Ingredients`.

### Ingredients
- Sidebar identical.
- Breadcrumb → H4 title + intro → sections `Top / Mid / Base`, each a wrap of pill-shaped ingredient buttons (Neroli, Frankincense, Petitgrain, etc.). Click opens a detail view.

### Cinema
- **Layout break — sidebar removed.** Thin centered "Now Showing: This Wild Land" ribbon. Full-viewport rounded-corner bezel rendering a cinema "screen" (tan frame, inner paper rectangle) with `Ffern Cinéma` watermark center while loading. Footer below.

### FAQ
- Sidebar identical.
- Content centered: H4 `Questions?` (serif) + one-line sub-intro → sand-200 tinted card with bullet list of terracotta topic links (Waiting List, Ledger, Candles, Fragrance, Delivery, General, Returns, Billing).

### Sustainability
- Sidebar identical.
- Full-bleed botanical photo hero → centered H4 + one-paragraph intro → `Our approach #` label → alternating text/image blocks (image-left+text-right, then flipped) → footer.

## Photography / Imagery Style

Uniformly low-contrast, warm, wide-aperture. Three modes: (1) still life on paper — single bottle or ingredient on beige/tan surface, diffused daylight, heavy negative space; (2) botanical in-situ — raw plants in the field, grainy analog feel, often shot through glass; (3) editorial portraiture — perfumer in window light. All mid-tone and slightly desaturated, no sharp blacks, no blown whites. "English farmhouse Sunday" — domestic, slow, authored. For SUPER, this is replaced wholesale with saturated matchbox-label stills; only the *compositional discipline* (one subject, negative space, serif-friendly backdrop) transfers.

## Voice / Tone Patterns (shape, not substance)

- **Section intro rhythm:** short lead sentence → one paragraph of mechanics → terms used as if already understood (`ledger`, `nose`, `solstice`). Reader is trusted.
- **Product intro rhythm:** Season H3 → one-line sensory descriptor → two-clause craft sentence → meta data rows.
- **Brand intro rhythm:** current state (1 sentence) → origin (1 para) → problem with status quo (1 para) → vision restatement → mechanism explained.
- **Pull-quotes:** 1–2 sentence quote on tinted card, attribution `Name, Title`, publication wordmark aligned right.
- **Micro-copy:** anchor markers lowercase + trailing `#`. All-caps reserved for status values (`JUST LAUNCHED`, `OPEN`, `WATCH`, `JOIN`). Reviews attributed as `Firstname L.`
- **CTA shape:** tiny label prompt ("Join waiting list") → thin input → arrow button. Never a bold solid rectangle.

## Patterns to Steal for SUPER

1. **Persistent sticky left sidebar** with brand mark + meta chips + conversion form. Every page has the same skeleton. SUPER version: wordmark + "This Season's Balm" + `Batch: 03 / Next Pour: 24d / Tins Left: 47` + order button.
2. **Meta-label + `#` anchor.** Tiny lowercase label on every section acting as in-page anchor. Zero ornament, free structural navigation.
3. **Meta-chip table for product state.** Always-visible scarcity without shouting.
4. **Editorial pacing.** Home scrolls through ~10 meta-labeled sections divided by 1px hairlines. No accordions, no tabs. Serial reading. Use this rhythm for the matchbox-label sections.
5. **Narrow-measure prose pages.** Our Story has no images at all, just single-column long-form at ~60ch. One quiet page between visual-heavy ones. SUPER equivalent: "Why Wax and Honey" as plain-text essay.
6. **Tinted product tiles on shop grid.** Each tile has its own soft-color tint. For SUPER, replace tint with full-bleed matchbox label pattern — same grid, bolder fill.
7. **"Cinema" as a total layout break.** One page in the IA drops the chrome and reframes the viewport. SUPER equivalent: a `Workshop` or `Pour` page with a single full-bleed process video.

## Patterns to NOT Steal

- **Whisper-quiet light weights (300).** Will fight SUPER's bold matchbox aesthetic. SUPER needs 500/700.
- **Duotone-cream photography.** Replace wholesale with saturated Bare Earth stills; inheriting Ffern's palette would make SUPER look like a flanker.
- **Single serif doing every job.** Ffern gets away with it because of artisan-English-countryside posture. SUPER needs a display font with attitude (poster-grotesque, Prada-Mode-style) for labels, with body serif only where long prose lives.
- **Bare `#` anchor marker.** Reads as a nice detail in Ffern's minimalism; may read as a typo in SUPER's bolder field. Consider `§01` or an underline.
- **Burnt-sienna-on-cream primary system.** Too gentle. SUPER needs higher-contrast anchor color (deep black, waxed gold, or saturated red).
- **Ledger/waiting-list mechanic as the front door.** Ffern's site is built around scarcity-as-conversion ("Currently full"). SUPER sells tins, not subscriptions — don't let IA imply gate-keeping.

## Captured Artifacts

Screenshots at `/tmp/ffern-shots/`:
- Home: `home-hero.png`, `home-2b.png`, `home-3b.png`, `home-4b.png`, `home-5b.png`, `home-footer.png`, `home-mobile.png`
- `story-1.png`, `how-1.png`, `sust-1.png`, `shop-1.png`, `shop-2.png`
- Product: `product-1.png`, `product-2.png`, `product-3.png`
- `ingredients-1.png`, `cinema-1.png`, `cinema-3.png`, `faq.png`

Text dumps: `/tmp/ffern-home-text.txt`, `/tmp/ffern-story.txt`, `/tmp/ffern-how.txt`.
