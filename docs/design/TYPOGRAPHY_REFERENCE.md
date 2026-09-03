# Typography reference

A practical typography guide for all project development and publishing. Principles synthesised from professional typographic practice, adapted for web, product UI, packaging, pitch decks, and brand communications.

This document is a **living reference** — not a textbook. Use it when making typographic decisions across any project. Claude Code should reference this when generating UI, documents, or brand materials.

---

## The core thesis

Typography is the visual component of the written word. Every time you put text in front of a reader — on a screen, a can label, a pitch deck, an investor memo — you are making typographic choices. The question is whether those choices are intentional or accidental.

Good typography serves the reader. It makes text easier to read, reinforces hierarchy, and creates a professional impression before a single word is processed. Bad typography — the default settings of every tool you use — actively works against you.

The single most important thing to understand: **body text determines the quality of the entire piece.** There is more body text than anything else in any document, page, or screen. Get the body text right and everything else falls into place. Get it wrong and no amount of decorative headings will save you.

---

## The five non-negotiable decisions

Every typographic project — whether it's a Queen dashboard, a Golden can label, a Final pitch deck, or a Longjons landing page — requires five decisions made in this order:

### 1. Font choice

This is the single highest-leverage typographic decision you can make. A professional font does for your text what a professional photographer does for your product shots — it brings craft and intention that readers feel even if they can't articulate it.

**The hierarchy of font quality:**

- **Professional retail fonts** — designed by skilled typographers, sold commercially. These are the secret weapon. Every beautifully typeset thing you've ever admired uses one. Examples: the fonts from Klim Type Foundry (NZ-based — Söhne, Untitled Sans, Tiempos), Commercial Type (Graphik, Atlas Grotesk), Grilli Type (GT America, GT Walsheim), Dinamo (ABC Diatype, ABC Favorit).
- **High-quality free fonts** — a small number of free fonts are genuinely excellent. Charter (designed by Matthew Carter) is the gold standard. Source Serif and Source Sans by Adobe are solid. IBM Plex is comprehensive. Inter is the best free sans serif for UI. Atkinson Hyperlegible (which you already use in Queen) is excellent for accessibility.
- **System fonts** — the fonts pre-installed on every computer. Some are acceptable (San Francisco on Mac, Segoe UI on Windows). Most are mediocre. They signal "I didn't make a choice."
- **Default fonts** — Times New Roman, Arial, Calibri. These are the Comic Sans of professional work. They signal apathy. Never use them in anything that represents you or your brands.
- **Novelty and display fonts** — the vast majority of free fonts on the internet. 99% are poorly designed. Avoid unless you have a specific, justified reason.

**Font selection rules:**

- Use no more than two font families in any single project. One is often enough. Three is almost always too many.
- If using two fonts, give each a clear, consistent role. One for body text, one for headings. Or one for content, one for UI chrome. Never mix them within the same context.
- Pair fonts that are identifiably different. Two similar sans serifs fighting each other is worse than using one. Low contrast between fonts can work beautifully (two serifs, or a geometric sans with a humanist sans) — but only if the difference is obvious enough to feel intentional.
- Fonts by the same designer tend to pair well. They share underlying proportions and sensibilities even when they look quite different on the surface.

**Your current font stack (for reference):**

| Project | Primary | Secondary | Mono |
|---------|---------|-----------|------|
| Queen | Atkinson Hyperlegible Next | — | Atkinson Hyperlegible Mono |
| Morgpork | Cormorant | Figtree | JetBrains Mono |
| Golden | Project-specific display | — | — |
| Longjons | TBD (devtools aesthetic) | — | Mono TBD |

### 2. Point size

Point size controls how large the font renders. But here's the critical insight most people miss: **different fonts at the same point size appear different sizes on screen or page.** A font's x-height (the height of lowercase letters) determines perceived size more than the nominal point value.

**Print (documents, pitch decks, packaging):**

- Body text: 10–12pt. This is the range that 500 years of printing has converged on for comfortable reading of continuous text.
- Don't go below 10pt for anything a reader needs to actually read. Footnotes and legal text can go to 8–9pt but understand you're sacrificing readability.
- Captions and labels: 8–10pt.
- Don't assume bigger is better. 14pt body text in a document looks amateurish, like a student padding page count.

**Screen (web, product UI, dashboards):**

- Body text: 15–25px (or roughly 1rem–1.5rem). The web's legacy of tiny text is a holdover from low-resolution screens. Modern screens can render beautiful text at proper sizes.
- UI labels and secondary text: 12–14px. Below 12px, most fonts become difficult to read.
- Dashboard data (Queen): numbers in tables and grids can go to 13–14px. Financial-grade displays need to balance density with legibility — err toward legibility.

**The adjustment principle:** Always adjust point size based on the specific font, not a fixed number. A font with a large x-height (like Inter or Atkinson) will appear bigger at the same point size than a font with a small x-height (like Garamond). Set the size, print or preview it, and adjust based on what your eyes tell you — not what the number says.

### 3. Line spacing (leading)

Line spacing is the vertical distance between lines of text. It is the single most underestimated typographic control. Most software defaults are wrong.

**The rule: 120–145% of the point size.**

- At 16px body text, line spacing should be 19–23px. In CSS: `line-height: 1.2` to `line-height: 1.45` (unitless values, not px).
- Tighter leading (120%) suits short text, headings, and dense UI.
- Looser leading (135–145%) suits long-form reading, body text, and anywhere you want the reader to settle in.

**Common mistakes:**

- "Single spacing" in word processors is roughly 117% — too tight for comfortable reading.
- "1.5 spacing" is roughly 175% — too loose, creates visible rivers of white between lines.
- "Double spacing" is roughly 233% — a relic of typewriter-era editing marks, never appropriate for finished work.
- CSS `line-height: 1` (100%) means lines literally touch. Never use this for multi-line text.

**Adjustments by context:**

- Longer lines need more leading. If your line length is at the upper end (80–90 characters), push leading toward 140–145%.
- Shorter lines (captions, sidebars, mobile) can use tighter leading (120–130%).
- Large point sizes (headings, display text) need proportionally less leading. A 48px heading at `line-height: 1.1` looks fine. At `line-height: 1.4` it looks disconnected.
- Dark backgrounds with light text need slightly more leading than the reverse. The eye perceives light-on-dark text as slightly heavier, and the extra vertical breathing room compensates.

### 4. Line length (measure)

Line length is the horizontal width of the text block, measured in characters per line. This is the control most people never think about — and the one that makes the biggest difference to readability.

**The rule: 45–90 characters per line, including spaces.**

- The sweet spot for body text is 55–75 characters.
- Below 45 characters, the eye is constantly jumping to the next line. Exhausting.
- Above 90 characters, the eye loses its place when returning to the left margin. Equally exhausting.
- Two to three lowercase alphabets is a quick visual test: abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklm

**What this means in practice:**

- **Print (A4/Letter):** One-inch margins on 8.5×11 paper create a 6.5-inch line — too wide for proportional fonts at 12pt. Use 1.5–2 inch margins instead. Yes, this feels like "wasting" paper. It's not. It's making the text readable. Professional books never use full-width text on large pages.
- **Web:** Never let text flow to the edges of the browser window. Set a `max-width` on your text container. At 16px body text, aim for `max-width: 38em` (roughly 600–680px). This is why well-designed blogs and articles have a narrow central column with generous margins.
- **Dashboards (Queen):** Data tables are exempt from this rule — tables are scanned, not read linearly. But any prose text in a dashboard (descriptions, help text, empty states) should still respect line length limits.
- **Mobile:** Screen width naturally constrains line length. At 375px wide with padding, you're in the 35–45 character range, which is fine for mobile reading patterns.

**Don't fear white space.** The margins, the gutters, the empty areas around your text — these aren't wasted space. They're the frame that makes the content readable. Work outward from the text, not inward from the page edges.

### 5. Font style and emphasis

How you use bold, italic, caps, and other stylistic variations within your chosen fonts.

**Bold or italic — not both.** Bold and italic serve the same function: emphasis. Using both simultaneously is like shouting while also whispering. Pick one. In body text, italic is the traditional choice for emphasis — it's gentler, flows with the text, and doesn't disrupt the colour (visual density) of the paragraph. Bold is more assertive and works better in headings and UI labels where text is scanned rather than read.

**Use emphasis sparingly.** If everything is emphasised, nothing is. A page full of bold text is just a page of bold text — the reader's eye has nothing to anchor to. The power of emphasis comes from contrast with the surrounding text.

**Underlining is dead.** Underlining was a typewriter convention for indicating italic (typewriters couldn't produce italic). On screen, underlines mean hyperlinks. In print, underlines are simply ugly — they collide with descenders (g, j, p, q, y). Never underline text except for web links.

**All caps: sparingly and with letterspacing.** All caps are fine for short labels, button text, and headings of a few words. They are unreadable for anything longer than a single line. When you use all caps, always add 5–12% letterspacing (in CSS: `letter-spacing: 0.05em` to `0.12em`). Without it, capital letters feel cramped and claustrophobic. With it, they feel authoritative and deliberate.

**Small caps** are a beautiful typographic feature — but only if your font has true small caps (designed specifically, not just scaled-down capitals). Fake small caps (which most software generates by shrinking regular capitals) look lightweight and wrong. If your font doesn't have proper small caps, don't use them at all.

---

## Type composition — the details that separate amateur from professional

These are the small choices that, in aggregate, determine whether your typography looks professional or default. Each one takes seconds to get right.

### Quotation marks: curly, not straight

Straight quotes (" ') are a typewriter legacy. Proper typographic quotes are curly (also called "smart quotes"): " " and ' '. Every modern tool can produce them — most do so automatically. But you need to verify.

- "Like this" — correct. Curly quotes, opening and closing.
- "Not this" — wrong. Straight quotes. Lazy.
- Apostrophes follow the same rule: it's, don't, can't — all use the curly form (').
- Foot and inch marks (6′ 2″) are the one place you use straight marks deliberately.
- **In code and terminal contexts,** straight quotes are correct. This only applies to prose text.

### One space between sentences

Two spaces after a period is a typewriter habit. Typewriters used monospaced fonts where every character occupied the same width, making it hard to see sentence boundaries. Extra space helped. Proportional fonts (every font you'll use today) have built-in spacing that makes sentence boundaries clear. One space. Always.

### Hyphens and dashes

Three different marks. Three different uses. Getting these right is one of the clearest signals of typographic care.

- **Hyphen (-):** Connects compound words. Self-contained, well-known, sugar-free. Also used for hyphenation at line breaks.
- **En dash (–):** Indicates ranges. Pages 10–25. Monday–Friday. 2024–2025. Also used for parenthetical asides in some styles – like this – though em dashes are more common in NZ/US usage.
- **Em dash (—):** The punctuation mark for interruptions, asides, and parenthetical thoughts — like this one — in flowing text. No spaces around em dashes in most style guides, though spaced en dashes (like British usage) are an acceptable alternative.

**How to type them:**

| Mark | Mac | Windows | HTML | CSS content |
|------|-----|---------|------|-------------|
| En dash – | Option + Hyphen | Alt + 0150 | `&ndash;` | `\2013` |
| Em dash — | Option + Shift + Hyphen | Alt + 0151 | `&mdash;` | `\2014` |

Never use two hyphens (--) as a dash. This is another typewriter habit that software sometimes auto-corrects, but you should never rely on auto-correction.

### Ellipses

An ellipsis (…) is a single character, not three periods (...). The difference is subtle but real — three periods have awkward spacing between them and can break across lines. The ellipsis character stays together and has proper internal spacing.

- Mac: Option + Semicolon
- HTML: `&hellip;`
- In continuous text: "I was going to say… but never mind."

### Ampersands

The ampersand (&) is not a synonym for "and" in running text. Use it only in proper names (Procter & Gamble, Simon & Garfunkel), abbreviations (R&D), or stylistic contexts where space is tight (headings, labels, UI). In body text, write "and."

### Trademark and copyright symbols

Use the proper symbols (™ ® ©), never alphabetic approximations like (TM) or (c). Set them in a smaller point size than the surrounding text — they're designed to sit unobtrusively, not to draw attention.

---

## Headings — fewer levels, subtler emphasis

Most documents use too many heading levels. Three levels is the maximum for any document. Two is better. More than three and the reader cannot hold the hierarchy in their head — which defeats the entire purpose of headings.

### Structural discipline

Before you style your headings, fix your structure. If you have four or five heading levels, your document is over-structured. Flatten it. A heading that only covers a single paragraph doesn't need to be a heading — it can be a bold lead-in sentence.

### Styling principles

1. **Space is your primary tool.** The most effective way to distinguish a heading is by the white space above and below it. More space above (to separate from the previous section) than below (to connect with the following content). This is subtle and powerful.

2. **Bold, not italic.** Headings are scanned, not read. Bold is easier to spot than italic when scanning. But bold is an option, not a requirement — a heading distinguished purely by size and spacing can look more refined.

3. **Size changes should be minimal.** If body text is 16px, try headings at 18–20px — not 32px. The smallest increment that creates a visible difference is the right one. Giant headings look like they're compensating for weak content.

4. **Never underline headings.** No exceptions.

5. **Avoid all caps for headings longer than a few words.** All-caps headings of full sentences are difficult to read. If you do use caps, keep it to two or three words maximum and add letterspacing.

6. **Sentence case, not Title Case.** "How the inspection process works" reads more naturally than "How The Inspection Process Works." Title case is a convention from book covers and newspaper headlines — it feels stiff in most modern contexts.

### Heading scale for screen (recommendation)

| Level | Size | Weight | Spacing above | Use |
|-------|------|--------|--------------|-----|
| H1 | 1.5–1.75× body | 500–600 | 2–3× body line height | Page titles, major sections |
| H2 | 1.15–1.3× body | 500 | 1.5–2× body line height | Subsections |
| H3 | 1× body | 600 (bold) | 1× body line height | Minor divisions |

The key insight: heading levels are distinguished by a *combination* of size, weight, and spacing — not by any single attribute cranked to extremes.

---

## Page layout and white space

### The fear of emptiness

The most common layout mistake is trying to fill every available space. This comes from a misunderstanding of what white space does. White space is not wasted space — it is an active element that creates hierarchy, focus, and breathing room. Every great magazine, book, and website uses generous white space. Every cluttered amateur layout crams content to the edges.

### Margins and padding

**Print:** Use margins of at least 1.5 inches on each side for A4/Letter documents. Yes, this feels large. Yes, professional publishers have been doing it for centuries. The text block should feel comfortably set within the page, not pressed against the edges.

**Web:** Set a `max-width` on your main content container and let the margins breathe. A text column of 600–700px on a 1440px screen means roughly 370–420px of "empty" space on each side. That empty space is what makes the content readable and the page feel professional.

**Dashboards and dense UI (Queen):** Dense layouts are acceptable for data-heavy interfaces — that's the Rows.com aesthetic you're going for. But even in dense layouts, consistent internal padding within components, and clear gutters between them, prevent the interface from feeling suffocating. 8px, 12px, 16px, 24px — pick a spacing scale and stick to it religiously.

### Paragraph separation

Two options. Pick one. Never both.

1. **First-line indent:** Indent the first line of each paragraph by 1–4× the body text point size. No extra space between paragraphs. This is the traditional book style — elegant and space-efficient. The first paragraph after a heading is never indented (the heading itself provides the visual break).

2. **Space between paragraphs:** Add 4–10 points (or 0.5–1em) of space between paragraphs. No first-line indent. This is the standard for web and UI text — clean and scannable.

Using both (indented first lines AND space between paragraphs) is redundant and looks unsure of itself.

### Alignment

**Left-aligned (ragged right)** is the default and usually the best choice. The uneven right edge gives the eye a varied landscape that aids reading, and avoids the awkward word spacing that justified text creates.

**Justified text** (even on both sides) looks formal and bookish. It can work well in print with proper hyphenation — but without hyphenation, justified text creates ugly rivers of white space between words. On the web, automatic hyphenation is inconsistent across browsers. **Rule: never justify text unless you also enable hyphenation.**

**Centred text** should be used sparingly — short headings, invitations, labels. Never centre body text. Never centre more than a few lines. Centred text is hard to read because the eye has to find a new starting position for every line.

**Right-aligned text** has very limited uses — pull quotes, certain label positions, numerical alignment in tables. Never use it for body text.

---

## Tables and data display

Tables are a distinct typographic context with their own rules. This is especially relevant for Queen's financial-grade displays.

### Structure over decoration

- **Remove most borders.** The default table — every cell outlined in black — is visual noise. Use subtle horizontal rules to separate rows, or alternating background shading. Vertical rules between columns are almost never necessary if you have adequate column spacing.
- **Increase cell padding.** Default cell padding in every tool is too tight. Add generous padding — start at 8–12px and increase until the table breathes. Vertical padding (top and bottom of cells) matters more than horizontal padding for readability.
- **Align numbers to the right** and use tabular (monospaced) figures. This ensures decimal points and digit columns line up, making comparison easy. This is why Atkinson Hyperlegible Mono is in Queen's stack.
- **Align text to the left.** Never centre text columns in a data table — it creates a ragged mess that's harder to scan than left-aligned text.
- **Header rows should be visually distinct** but not overpowering. A slightly heavier weight, a subtle background colour, or just bold text is enough. Don't use dramatically different styling that makes the header compete with the data.

### Number formatting

- Use tabular (monospaced) figures for any column of numbers. Most professional fonts include both proportional figures (for use in running text) and tabular figures (for tables and financial data). In CSS: `font-variant-numeric: tabular-nums`.
- Thousands separators: use commas (1,234,567) or thin spaces (1 234 567) for numbers above four digits. Be consistent across the entire interface.
- Currency: place the symbol before the number with no space ($1,234). For negative values, prefer minus sign to parentheses in most contexts, but follow accounting conventions where appropriate.
- Percentages: number immediately followed by the symbol (42.5%). No space.

---

## Typography across your project types

### Web applications (Queen, Longjons, Final, Logg, Party Pay)

**Body text:** 15–18px sans serif. `line-height: 1.4` to `1.55`. Max content width of 38–42em for prose text; no max width for data tables and dashboards.

**System font stack as fallback:**
```css
font-family: 'Your Font', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
```

**Responsive type:** Use `clamp()` for fluid sizing that scales with viewport:
```css
/* Body text: 16px at 375px viewport, scales to 18px at 1440px */
font-size: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
```

**Dark mode considerations:** Light text on dark backgrounds appears slightly heavier than dark text on light backgrounds. Consider reducing font weight by one step in dark mode (e.g., 400 → 350 if your font supports variable weight), or use a very slightly lighter colour than pure white (#E8E8E8 instead of #FFFFFF) to reduce perceived heaviness.

**Loading strategy:** Use `font-display: swap` for body fonts (show fallback immediately, swap when loaded) and `font-display: optional` for decorative or display fonts (only show if already cached). Always self-host fonts rather than loading from Google Fonts — faster, more private, more reliable.

### Brand and marketing (Golden, Thirds, InCase, HoneyBalm)

**Hierarchy on packaging:** When space is limited (can labels, lip balm tubes), hierarchy becomes critical. You have three levels at most: brand name, product name, and supporting text. Each needs to be instantly distinguishable at arm's length.

**Legibility at distance:** Packaging text needs to work at arm's length on a shelf. Test your type choices printed at actual size, from 60–90cm away. If you can't immediately read the product name, increase the size or simplify the font.

**Regulatory text:** Nutrition panels, ingredient lists, and legal text have prescribed minimum sizes in NZ (Food Standards Australia New Zealand requires minimum 1.5mm x-height for mandatory information). Design your layout to accommodate these requirements without cramming.

### Documents and presentations (pitch decks, investor memos, business cards)

**Pitch decks:** No more than two fonts. Keep body text at 18–24pt minimum — the audience is viewing from across a room or on a small video call window. Limit each slide to one idea. White space is your friend.

**Investor memos and one-pagers:** Use generous margins (at least 1.5 inches). Body text at 10.5–11.5pt with 135–140% leading. This creates a professional, readable document that feels considered rather than dense.

**Business cards:** Your name and role are the foreground. Everything else (email, phone, address, social) is background. The foreground should be at least twice the visual weight of the background — through a combination of size, weight, and colour.

---

## The colour of text

In typography, "colour" has a specific meaning: the overall visual density of a text block when viewed from a distance. Good typographic colour is even — no dark patches, no light patches, no distracting variations.

### Text colour on screen

- **Primary text:** Not pure black (#000000) on pure white (#FFFFFF). Pure black on white creates harsh contrast that fatigues the eye. Use #1A1A1A to #2C2C2A on white, or #FFFFFF on #1A1A1A for dark mode. (Your Queen system already does this well with #25282A.)
- **Secondary text:** 60–70% opacity relative to primary. Used for supporting information, timestamps, metadata. In Queen's palette: #BBBCBC works for this role.
- **Disabled/hint text:** 40–45% opacity relative to primary. Must still meet WCAG AA contrast requirements (4.5:1 for normal text, 3:1 for large text).

### Colour as emphasis

Text colour should be used sparingly for emphasis. Blue for links is a near-universal convention on the web — don't repurpose it for other emphasis. Beyond links, limit coloured text to:

- Status indicators (success/green, warning/amber, error/red)
- Interactive elements (buttons, labels)
- Brand moments (sparingly — a gold accent in Queen, for instance)

Never use colour as the *only* way to convey meaning. Always pair it with another indicator (weight, icon, position) for accessibility.

---

## Rules for specific characters

Quick reference for the typographic details that separate careful work from default output.

| Character | Correct | Incorrect | Notes |
|-----------|---------|-----------|-------|
| Quotes | "curly" 'single' | "straight" 'marks' | Always curly in prose |
| Apostrophe | it's, don't | it's, don't | Curly, pointing down-right |
| Em dash | word—word | word--word | No spaces (or spaced en dash) |
| En dash | 10–20, Mon–Fri | 10-20, Mon-Fri | Ranges and connections |
| Ellipsis | wait… | wait... | Single character, not periods |
| Multiplication | 3 × 4 | 3 x 4 | Use × (times), not x |
| Minus | −5 | -5 | Use − (minus), not hyphen |
| Degree | 25°C | 25 C | Degree symbol, no space before C |
| Copyright | © 2025 | (c) 2025 | Real symbol, always |
| Trademark | Golden™ | Golden(TM) | Real symbol, smaller size |

---

## Checklist: before you ship

Run through this before publishing, deploying, or sending anything:

**Body text:**
- [ ] Font is intentional (not a default)
- [ ] Size is in the correct range (10–12pt print, 15–25px screen)
- [ ] Line spacing is 120–145% of point size
- [ ] Line length is 45–90 characters
- [ ] Curly quotes, not straight
- [ ] One space between sentences
- [ ] Proper dashes (en and em), not hyphens
- [ ] Proper ellipses, not three periods

**Headings:**
- [ ] No more than three levels
- [ ] Size increments are minimal
- [ ] Sentence case (not Title Case or ALL CAPS for long headings)
- [ ] No underlining
- [ ] Adequate space above and below

**Layout:**
- [ ] Margins/padding are generous enough
- [ ] White space feels intentional, not accidental
- [ ] Paragraph separation is consistent (indent OR space, not both)
- [ ] Text alignment is left-aligned unless there's a reason otherwise
- [ ] Justified text has hyphenation enabled

**Emphasis:**
- [ ] Bold and italic never used simultaneously
- [ ] Emphasis is used sparingly
- [ ] All-caps text has added letterspacing
- [ ] Colour is not the only indicator of meaning

**Data (tables, numbers):**
- [ ] Numbers use tabular figures
- [ ] Numbers are right-aligned
- [ ] Table borders are minimal
- [ ] Cell padding is adequate
- [ ] Headers are distinct but not overpowering

---

## Further reading

- **Butterick's Practical Typography** (practicaltypography.com) — the foundational resource this guide synthesises from. Read the full book; it's free, beautifully typeset, and opinionated in the best way.
- **The Elements of Typographic Style** by Robert Bringhurst — the canonical reference. Dense but authoritative. Worth owning.
- **Thinking with Type** by Ellen Lupton — more visual and design-oriented. Good for understanding type as a design tool, not just a reading tool.
- **Typewolf** (typewolf.com) — font identification and pairing in the wild.
- **Fonts In Use** (fontsinuse.com) — real-world type specimens across print, web, and signage. Excellent for seeing how fonts perform in context.
- **Google Fonts Knowledge** (fonts.google.com/knowledge) — surprisingly good educational resource on type fundamentals, variable fonts, and web typography.
- **Klim Type Foundry** (klim.co.nz) — New Zealand's world-class type foundry. Their design notes and specimen pages are typography education in themselves.

---

*This is a living document. Update it as your projects evolve and your typographic sensibility sharpens. The best typography comes from practice — finding problems and solving them.*
