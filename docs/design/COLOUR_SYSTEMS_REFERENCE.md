# Colour systems reference

A practical guide to building, maintaining, and applying colour across all project development. Covers colour spaces, palette construction, semantic tokens, dark mode, accessibility, and project-specific application.

This document sits alongside `TYPOGRAPHY_REFERENCE.md` as a foundation layer in your design knowledge base.

---

## Why colour systems matter

Colour is the fastest signal your brain processes. Before a user reads a single word, colour has already communicated hierarchy, mood, trust, and state. A colour system turns this from a series of ad hoc decisions into a reliable, scalable framework.

Without a system, you end up with hex values scattered across CSS files, Figma frames, and Shopify templates — slightly different blues competing with each other, grays that clash between components, and dark mode that looks like someone ran the UI through a photo negative filter.

With a system, every colour has a role, a name, and a reason. New components inherit the right colours automatically. Dark mode is a theme swap, not a redesign. Brand colours stay consistent from your website to your can label to your pitch deck.

---

## Colour spaces: what you need to know

### The problem with HSL

Most designers learn HSL (Hue, Saturation, Lightness) first because it feels intuitive — pick a hue, set how colourful it is, set how bright it is. The problem is that HSL lies about lightness. A yellow at 50% lightness and a blue at 50% lightness look dramatically different in perceived brightness. This means you can't reliably generate consistent palettes by manipulating HSL values — you'll get muddy midpoints, uneven contrast, and colours that feel "off" without an obvious reason.

HSL was designed to describe how screens mix light, not how humans perceive colour. That mismatch is the root of most palette problems.

### OKLCH: the modern answer

OKLCH (OK Lightness, Chroma, Hue) is a perceptually uniform colour space. "Perceptually uniform" means that equal numerical changes produce equal visual changes — a 10% lightness shift looks the same whether you're adjusting blue or yellow.

**The three channels:**

- **Lightness (L):** 0% = black, 100% = white. Unlike HSL, this tracks true perceived brightness across all hues.
- **Chroma (C):** How colourful the colour is. 0 = pure gray. Higher values = more saturated. Unlike HSL saturation, the maximum available chroma varies by hue (yellows can be more vivid than blues at the same lightness).
- **Hue (H):** 0–360° around the colour wheel, same concept as HSL but more evenly distributed perceptually.

**Why this matters for you:**

- You can generate lightness scales by fixing H and C and stepping L — every step will have genuinely consistent perceived brightness.
- You can create multi-hue palettes with matched perceived lightness by fixing L and C and rotating H — perfect for categorical colours in data viz, status badges, and user-assigned labels.
- Dark mode becomes a systematic transformation: shift lightness values while preserving hue and chroma relationships.
- Accessibility contrast calculations are more reliable because the lightness channel tracks actual perception.

**CSS syntax:**
```css
/* OKLCH in CSS — supported in all modern browsers */
color: oklch(65% 0.15 250);        /* A medium blue */
color: oklch(85% 0.08 90);         /* A soft gold */
color: oklch(45% 0.2 30 / 80%);    /* A warm red at 80% opacity */

/* Relative colour syntax for programmatic adjustments */
color: oklch(from var(--brand) calc(l - 0.1) c h);  /* 10% darker */
```

**Browser support:** Chrome 111+, Firefox 113+, Safari 15.4+, Edge 111+. For older browsers, provide an sRGB fallback:
```css
color: #3b82f6;                    /* sRGB fallback */
color: oklch(62% 0.2 260);         /* Modern browsers use this */
```

**Figma note:** Figma doesn't natively support OKLCH yet, but you can work in Display P3 colour space (Figma preferences) to get closer to perceptual uniformity. Use the OKLCH Figma plugin or external tools like oklch.com to generate values, then convert to hex for Figma.

### When to use what

| Colour space | Use for | Avoid for |
|-------------|---------|-----------|
| OKLCH | Palette generation, lightness scales, programmatic colour manipulation, CSS custom properties | Legacy browser support without fallbacks |
| Hex/RGB | Figma design files, brand guidelines, print specifications, anywhere you need a single portable value | Generating palettes (use OKLCH then convert) |
| HSL | Quick mental model ("I need a warm red"), legacy code | Palette generation, accessibility checks, dark mode systems |

---

## Anatomy of a colour system

A well-structured colour system has three layers. Each layer references the one below it, never skipping levels.

### Layer 1: Primitive colours

The raw palette. Named by what the colour *is*, not what it *does*. These are your complete set of available colours — every shade, tint, and tone you might need.

**Structure:** Each hue gets a scale of 10–12 steps from lightest to darkest. The scale should be perceptually even (use OKLCH lightness to ensure this).

```css
/* Primitive scale example — Gold (for Queen/Golden) */
--gold-50:  oklch(97% 0.02 90);    /* Nearly white with gold warmth */
--gold-100: oklch(93% 0.04 90);
--gold-200: oklch(87% 0.08 90);
--gold-300: oklch(78% 0.12 88);
--gold-400: oklch(70% 0.15 86);    /* Mid-tone — your "pure" gold */
--gold-500: oklch(62% 0.14 85);
--gold-600: oklch(54% 0.12 84);
--gold-700: oklch(45% 0.10 83);
--gold-800: oklch(37% 0.08 82);
--gold-900: oklch(28% 0.06 80);    /* Near-black with gold undertone */
```

**How many hues?** Most products need:

- **1 brand/accent hue** (Gold for Queen, whatever Longjons picks)
- **1 neutral/gray scale** (tinted or pure — tinted grays that lean toward your brand hue create a more cohesive feel)
- **4 semantic hues:** red (error/danger), amber/yellow (warning), green (success), blue (info)
- **Optional:** additional categorical hues for data viz, user avatars, labels, tags

**The Radix approach (12-step functional scale):**

The Radix Colors system assigns a specific UI purpose to each step in the scale. This is powerful because it means you don't have to think about which shade to use — the step number tells you:

| Step | Purpose | Example use |
|------|---------|-------------|
| 1 | App background | Page background, body |
| 2 | Subtle background | Card, sidebar, inset panels |
| 3 | Element background | Hover states, selected rows |
| 4 | Hovered element background | Button hover, active states |
| 5 | Active/selected element background | Active tab, pressed button |
| 6 | Subtle border | Dividers, separators |
| 7 | Element border | Input borders, card outlines |
| 8 | Hovered border | Input focus ring, hover borders |
| 9 | Solid background | Primary buttons, badges, indicators |
| 10 | Hovered solid background | Primary button hover |
| 11 | Low-contrast text | Secondary text, placeholder |
| 12 | High-contrast text | Primary text, headings |

This mapping works whether you're building your scales from scratch in OKLCH or adopting Radix Colors directly. The principle is the same: each stop has a job.

### Layer 2: Semantic tokens

Named by what the colour *does*, not what it *is*. This is the abstraction layer that makes dark mode and theming possible.

```css
/* Semantic tokens — these are what components reference */
--color-bg-primary:    var(--gray-1);
--color-bg-secondary:  var(--gray-2);
--color-bg-tertiary:   var(--gray-3);

--color-text-primary:   var(--gray-12);
--color-text-secondary: var(--gray-11);
--color-text-tertiary:  var(--gray-9);

--color-border-default: var(--gray-6);
--color-border-strong:  var(--gray-7);
--color-border-focus:   var(--brand-8);

--color-accent-solid:   var(--brand-9);
--color-accent-hover:   var(--brand-10);
--color-accent-subtle:  var(--brand-3);

--color-success-solid:  var(--green-9);
--color-success-text:   var(--green-11);
--color-success-bg:     var(--green-3);

--color-danger-solid:   var(--red-9);
--color-danger-text:    var(--red-11);
--color-danger-bg:      var(--red-3);

--color-warning-solid:  var(--amber-9);
--color-warning-text:   var(--amber-11);
--color-warning-bg:     var(--amber-3);
```

**The critical rule:** Components should *only* reference semantic tokens, never primitives. A button background is `var(--color-accent-solid)`, never `var(--gold-400)`. This is what makes theming and dark mode work — you change the semantic mapping, not every component.

### Layer 3: Component tokens (optional)

For complex design systems, you may want a third layer that maps semantic tokens to specific component states:

```css
--button-primary-bg:       var(--color-accent-solid);
--button-primary-bg-hover: var(--color-accent-hover);
--button-primary-text:     var(--color-text-on-accent);
--button-secondary-bg:     var(--color-bg-secondary);
--button-secondary-border: var(--color-border-default);
```

This layer is useful for Queen (complex component library) but overkill for simpler projects like a Golden landing page. Start with two layers and add the third when you find yourself needing it.

---

## Dark mode

Dark mode is not an inverted light mode. It's a different theme that shares the same semantic structure but maps to different primitive values.

### Principles

**Don't invert.** If light mode uses gray-1 for backgrounds and gray-12 for text, dark mode doesn't simply flip them. Dark backgrounds need to be slightly warm (pure black is harsh), and the full range of surface elevations needs to be compressed into a narrower lightness band.

**Elevation = lightness in dark mode.** In light mode, you create hierarchy with shadows (higher elements cast shadows onto lower elements). In dark mode, shadows are invisible against dark backgrounds. Instead, higher elements are *lighter* — a modal is lighter than the page behind it, a dropdown is lighter than the toolbar it emerged from.

```css
/* Dark mode surface elevation */
--surface-base:     oklch(15% 0.01 250);   /* Deepest background */
--surface-raised:   oklch(19% 0.01 250);   /* Cards, sidebars */
--surface-overlay:  oklch(23% 0.01 250);   /* Dropdowns, popovers */
--surface-modal:    oklch(27% 0.01 250);   /* Modals, dialogs */
```

**Reduce chroma for coloured backgrounds.** Vivid colours that look great on white can be overwhelming on dark backgrounds. In dark mode, reduce chroma by 20–30% for background fills while keeping solid interactive elements (buttons, badges) at full chroma.

**Don't use pure black (#000000).** Linear's design team puts it well — pure black creates too much contrast against text and feels like a void rather than a surface. Use a very dark gray with a hint of warmth: `oklch(13% 0.005 250)` is a better starting point than `oklch(0% 0 0)`.

**Don't use pure white (#FFFFFF) for text.** It's too harsh against dark backgrounds. Use 85–90% lightness: `oklch(90% 0 0)` for primary text, `oklch(70% 0 0)` for secondary.

### Implementation pattern

The cleanest implementation: define your semantic tokens once, and swap which primitives they point to based on theme.

```css
/* Light theme */
:root, .light {
  --color-bg-primary:    var(--gray-1);
  --color-text-primary:  var(--gray-12);
  --color-border-default: var(--gray-6);
}

/* Dark theme */
.dark {
  --color-bg-primary:    var(--gray-dark-1);
  --color-text-primary:  var(--gray-dark-12);
  --color-border-default: var(--gray-dark-6);
}

/* System preference detection */
@media (prefers-color-scheme: dark) {
  :root:not(.light) {
    /* Apply dark primitives */
  }
}
```

**Linear's approach (worth studying):** Linear generates their entire theme from just three inputs: base colour, accent colour, and contrast level. They use LCH colour space to derive all surface, text, border, and interactive colours algorithmically. This means they support arbitrary custom themes with accessibility guarantees baked in. Queen could adopt a similar approach.

### Images and illustrations in dark mode

- Use transparent backgrounds wherever possible so images adapt to either mode.
- For illustrations with coloured backgrounds, provide separate light/dark versions.
- Photos generally work in both modes without modification.
- Screenshots and UI images may need separate light/dark versions — a white-background screenshot on a dark UI looks jarring.
- SVG icons should use `currentColor` so they automatically inherit the text colour of their context.

---

## Accessibility

### Contrast requirements

**WCAG 2.2 (current standard):**

| Element | Minimum ratio (AA) | Enhanced ratio (AAA) |
|---------|--------------------|--------------------|
| Normal text (<18px or <14px bold) | 4.5:1 | 7:1 |
| Large text (≥18px or ≥14px bold) | 3:1 | 4.5:1 |
| UI components and graphical objects | 3:1 | — |

**APCA (Accessible Perceptual Contrast Algorithm):** The next generation contrast standard, already used by Radix Colors. APCA accounts for the direction of contrast (light text on dark vs dark text on light) and the specific lightness of the colours, producing more accurate readability predictions than the current WCAG ratio. While not yet officially mandated, designing with APCA awareness future-proofs your work.

### Practical rules

- **Never use colour alone to convey meaning.** Always pair colour with another indicator: an icon, a text label, a pattern, or a positional cue. Red text for errors is fine *if* the error also has an icon and an explanatory message.
- **Test your palette in grayscale.** If you can't distinguish your status colours (success/warning/danger) in a desaturated view, users with colour vision deficiency can't either. This is especially critical for data visualisation.
- **Maintain contrast in both themes.** A colour combination that passes in light mode may fail in dark mode, and vice versa.
- **Check against real content.** Contrast tools test pairs of colours. Reality is messier — text overlaps images, borders are thin, icons are small. Test with actual components at actual sizes.

### Tools

- **OKLCH.com** — colour picker with gamut mapping and contrast checking
- **Contrast** (macOS app by Nothing Magical) — check contrast anywhere on screen
- **Stark** (Figma plugin) — accessibility checker within Figma
- **Chrome DevTools** — built-in contrast ratio display in the colour picker
- **Huetone** — palette generator built on OKLCH with contrast checking

---

## Building a palette from scratch

Here's the step-by-step process for generating a project colour palette. This works for any project — adapt the brand hues to each.

### Step 1: Define your brand hue(s) in OKLCH

Start with your primary brand colour. Convert it to OKLCH. Note the hue angle.

```
Queen:  Gold #EED484 → oklch(88% 0.11 90)   → Hue ≈ 90°
Golden: (similar gold, project-specific tuning)
Longjons: TBD — likely a neutral/cool hue for devtools feel
Final:  TBD — likely blue or teal for trust/property
```

### Step 2: Generate the lightness scale

Fix the hue and chroma, then step lightness evenly from ~97% (near-white) to ~15% (near-black). You'll need 10–12 steps.

```
L: 97, 93, 87, 78, 70, 62, 54, 45, 37, 28, 20, 13
```

Adjust chroma at the extremes — very light and very dark colours can't sustain high chroma. Taper it:

```
C: 0.02, 0.04, 0.08, 0.12, 0.15, 0.14, 0.12, 0.10, 0.08, 0.06, 0.04, 0.02
```

### Step 3: Generate the neutral scale

Pick a gray that's slightly tinted toward your brand hue. Pure gray (`C: 0`) works but feels clinical. A gray with `C: 0.005–0.015` and the same hue as your brand colour creates a warmer, more cohesive feel.

For Queen (gold brand): use a warm gray with hue ≈ 85° and chroma ≈ 0.008.
For Longjons (devtools): use a cool gray with hue ≈ 250° and chroma ≈ 0.005.

### Step 4: Add semantic hues

Generate red, amber, green, and blue scales at the same lightness stops as your brand scale. Because you're working in OKLCH, matching the lightness values guarantees perceptual consistency — your green-success and red-danger badges will feel like they belong to the same system.

```
Red:    H ≈ 25°   (warm, energetic red — not too orange, not too cool)
Amber:  H ≈ 70°   (caution without alarm)
Green:  H ≈ 155°  (success, positive — avoid neon)
Blue:   H ≈ 250°  (information, links, calm)
```

### Step 5: Assign semantic tokens

Map your scales to semantic roles using the Radix step convention or your own naming. Document which step serves which purpose.

### Step 6: Generate dark mode variants

For each scale, create a dark variant by adjusting the lightness mapping. The key transformation: in dark mode, step 1 (background) maps to very low lightness (~13–15%), and step 12 (text) maps to high lightness (~90–93%). The interior steps compress more tightly.

### Step 7: Test

- Check contrast ratios at every text-on-background combination
- View the palette in grayscale
- Test on a real screen (not just your calibrated monitor — try your phone, a cheap laptop)
- Test with actual UI components, not just swatches

---

## Colour across your projects

### Queen (Business OS)

Queen's palette is defined: black (#25282A), gray (#BBBCBC), gold (#EED484). The colour system here needs to support data-dense financial displays, which means:

- **Neutral dominance:** 80%+ of the interface should be grayscale. Colour is reserved for status, actions, and data highlights.
- **Minimal accent use:** Gold is the accent, used sparingly for primary actions and key indicators. Not for backgrounds.
- **Clear status colours:** Financial data needs unambiguous positive/negative/neutral indicators. Use green for positive change, red for negative, and neutral gray for zero/unchanged.
- **Tabular figure colours:** In number-heavy displays, consider using colour *only* for the delta/change column, keeping absolute values in neutral text. This draws the eye to what's changed.

### Golden (Drinks brand)

Golden's colour story is about NZ provenance — honey golds, native bush greens, orchard colours. The system here is more emotional than functional:

- **Warm gold as hero colour** — rich, natural, honey-toned
- **Supporting palette drawn from ingredients:** blackcurrant purples, lemon yellows, orchard greens
- **High contrast for packaging:** shelf visibility demands strong contrast between product name and background
- **Limited palette per product:** each SKU should own 2–3 colours maximum. Kānuka Kola might be gold + deep brown. A lemon flavour might be gold + bright citrus yellow.

### Longjons (Forms platform)

DevTools aesthetic — Vercel, Linear, Raycast territory:

- **Near-monochrome base** — cool grays, very low chroma
- **Single accent hue** — used extremely sparingly for interactive elements and focus states
- **High contrast, minimal colour** — the "less colour = more serious" principle
- **Dark mode first** — this is the audience that lives in dark mode

### Final (Property marketplace)

Trust and clarity for a two-sided marketplace:

- **Blue or teal as primary** — property, finance, and trust all lean toward cool hues
- **Warm accent for CTAs** — a warm colour (amber, coral) for action buttons creates contrast against the cool base
- **Status colours for inspection states** — clear, distinct colours for pending/in-progress/complete/failed
- **Neutral enough for both sides** — inspectors and homeowners both need to feel the platform is professional and trustworthy

### Thirds (Sleep brand)

Night, dawn, calm, wool:

- **Deep navy/indigo as primary** — the colour of the sky before dawn
- **Warm cream/off-white as secondary** — wool, warmth, softness
- **Very limited palette** — sleep is about reduction, calm, absence of stimulation
- **Low chroma throughout** — nothing should feel bright or energetic

---

## Colour in code — implementation patterns

### CSS custom properties (recommended)

```css
:root {
  /* Primitives */
  --gold-9: oklch(70% 0.15 86);
  --gold-10: oklch(65% 0.16 85);

  /* Semantic */
  --color-accent: var(--gold-9);
  --color-accent-hover: var(--gold-10);
}

.dark {
  --gold-9: oklch(72% 0.14 88);
  --gold-10: oklch(77% 0.13 89);
}
```

### Tailwind CSS

If using Tailwind (Queen, Longjons, Final are all Tailwind + Next.js):

```js
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      // Map semantic tokens to Tailwind classes
      bg: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
      },
      text: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
      },
      accent: {
        DEFAULT: 'var(--color-accent)',
        hover: 'var(--color-accent-hover)',
        subtle: 'var(--color-accent-subtle)',
      },
    },
  },
}
```

This gives you `bg-bg-primary`, `text-text-primary`, `bg-accent` etc. — semantic classes that automatically respect the current theme.

### Don't hardcode hex values in components

Every hardcoded hex value is a debt. When you decide to shift your gray scale warmer, or adjust your brand gold, you'll have to find and replace every instance. Use tokens from day one, even if your "system" is just a handful of CSS variables in a single file.

---

## Tools and resources

**Palette generation:**
- **OKLCH Color Picker** (oklch.com) — the essential tool for working in OKLCH
- **Huetone** (huetone.ardov.me) — generate perceptually uniform palettes with OKLCH
- **Radix Custom Palette** (radix-ui.com/colors/custom) — generate Radix-compatible scales from a base colour
- **Leonardo** (leonardocolor.io) — Adobe's contrast-based colour tool

**Contrast checking:**
- **WebAIM Contrast Checker** (webaim.org/resources/contrastchecker)
- **APCA Contrast Calculator** (apcacontrast.com)
- **Polypane** — browser with built-in accessibility testing

**Inspiration:**
- **Radix Colors** (radix-ui.com/colors) — the gold standard for functional colour systems
- **Linear's theme system** — study their approach to generating themes from minimal inputs
- **Stripe's colour documentation** — excellent example of systematic colour in a financial product
- **Tailwind CSS default palette** — well-balanced general-purpose scales

**Further reading:**
- **"OKLCH in CSS: why we moved from RGB and HSL"** by Evil Martians — the definitive practical introduction to OKLCH
- **Radix "Understanding the scale"** documentation — explains the 12-step functional scale
- **"An interactive guide to color & contrast"** by Josh W. Comeau — excellent visual explainer

---

*This is a living document. Update it as your palettes evolve. The best colour systems grow with the product — start simple, add complexity only when you need it.*
