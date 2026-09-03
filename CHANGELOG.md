# Changelog

## 2026-04-15 — Ffern-chassis clone + lid system

Built the whole marketing site on a single branch (`claude/recursing-northcutt`) starting from a HoneyBum-era single-page Vite skeleton. Final state: 23 static HTML routes, ~26KB of shared CSS, a live matchbox-lid design system, and Cloudflare Pages deploy config.

### Pages added (17)
- `/` homepage — Ffern editorial scroll with 12 meta-labeled sections (hero, film, press, range, matchbox, latest release, four ingredients, sustainability, refills, story, beekeepers, archive, stockists, reviews)
- `/shop/` catalog + 6 flavour detail pages (`/shop/{vanilla,pomegranate,coconut-pear,beeswax,honey-grapefruit,mango}/`)
- `/about/our-story/` (narrow-prose essay), `/about/how-it-works/` (refill mechanic), `/about/sustainability/`, `/about/our-beekeepers/`, `/about/design-system/` (lid system live)
- `/ingredients/`, `/cinema/` (layout break, sidebar removed), `/stockists/`, `/wholesale/`, `/refills/`, `/faq/`, `/privacy/`, `/terms/`, `/404.html`

### Matchbox lid design system (`/about/design-system/`)
- Prada-Mode 3-band composition locked across six flavours
- Per-flavour palette: deep / dominant / light hex defined in `tokens.css`
- Space Grotesk loaded for lid poster lane; rest of site stays Newsreader serif
- `.lid` component in `style.css` with `--sm/--md/--lg/--xl` scale modifiers
- Lids now render in: hero (current-batch flavour at `--xl`), range tiles (6× `--md`), §03 flavour-page "the lid" section (`--md`), upsell tiles (`--md`), archive strip (`--sm`), 404 (off-brand `404` lid)

### Chassis (`src/tokens.css` + `src/style.css`)
- Ffern-exact palette: paper `#fcfbf7`, ink `rgba(0,0,0,0.85)`, terracotta `#98512b`, hairline `#e2d5c5`
- Single serif throughout (Newsreader); type scale 12/14/16/19/24/32/39px with 1.25–1.5 line-height
- Sticky 380px sidebar + 900px main column + 1px hairline dividers + lowercase `#` anchor markers
- Canonical components: `.sidebar`, `.top-strip`, `.section`, `.hero`, `.split`, `.range`, `.tile`, `.lid`, `.meta-panel`, `.refill-cta`, `.ingredients`, `.steps`, `.stockists`, `.portraits`, `.archive`, `.reviews`, `.press`, `.film`, `.cinema-frame`, `.pill-group`, `.topics`, `.visually-hidden`

### Infrastructure
- Multi-page Vite config (`vite.config.js`) with 22 explicit `rollupOptions.input` routes
- `src/public/` for static copy-through: `robots.txt`, `sitemap.xml` (21 URLs), `og-image.svg` (1200×630 featured-lid SVG), `_headers` (security + immutable-asset cache), `_redirects` (trailing-slash normalisation + legacy-slug forwarding + 404 fallback)
- Cloudflare Pages `wrangler.toml`
- SEO meta: og:title / og:description / og:image / twitter:card / canonical on every page; JSON-LD Organization on homepage; JSON-LD Product on each flavour page

### Content
- All prose original in Honey Pop voice (warm graphic confidence, UK English, curly quotes, em dashes)
- Brand renamed HoneyBum → Honey Pop; `brand/story/brand-story.md` canonical
- `CLAUDE.md` updated to match Honey Pop state (three locked design surfaces, flavours table, stack)

### Housekeeping
- Deleted `src/fonts/` (492KB of unused FH Oscar / Lexicon / BeoSupreme)
- Moved 3 HoneyBum-era Bare Earth screenshots from worktree root → `docs/reference/honeybum-screenshots/`
- Removed `@import 'tokens.css'` from `style.css`; now loaded as parallel `<link>` (one less RTT before first paint)
- Dropped unused Newsreader italic 600 from Google Fonts URL

### Build
```
vite v8.0.2 building client environment for production...
✓ 38 modules transformed.
dist/index.html                        20.60 kB │ gzip: 4.58 kB
dist/about/design-system/index.html    17.70 kB │ gzip: 3.97 kB
dist/shop/honey-grapefruit/index.html  11.85 kB │ gzip: 3.67 kB
dist/assets/style-DsirIrpj.css         25.76 kB │ gzip: 5.09 kB
(23 HTML pages total)
✓ built in 222ms
```

### Known deferred
- `_partials/` extraction via custom Vite HTML-include plugin (spec §6.7) — sidebar + footer + `<head>` still duplicated across 23 pages
- Real matchbox lid SVG artwork (lid principle #5 calls for hand-drawn flavour marks; current lids are typeset for system preview)
- Product photography replacing gray `.image-placeholder` blocks
- Waiting-list form backend (currently stub)
- Real stockist + beekeeper names
