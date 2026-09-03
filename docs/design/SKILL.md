---
name: teardown
description: "Run a design teardown on any website, product, or brand. Trigger whenever the user says 'teardown', 'tear down', 'analyse this site', 'add this to my references', 'reference this', or pastes a URL with intent to study its design. Also trigger when the user says 'teardown [URL] for [project]' — this is the primary usage pattern. The skill fetches the site, extracts design DNA (colour, typography, layout, components, voice), writes a structured markdown teardown file, saves it to /docs/design-foundations/references/, and updates the index. This is a design learning system — every teardown makes future Claude Code output better."
---

# Teardown skill

Extract design DNA from any website and store it as a structured reference that Claude Code reads at build time.

## Trigger patterns

- `teardown [URL]` — analyse site, infer project relevance
- `teardown [URL] for [project]` — analyse site, tag for specific project
- `teardown [product name]` — search for the site, then analyse
- `tear down [URL]` — same thing, different spacing
- `analyse [URL] and add it to my references` — same pipeline
- `reference [URL]` — same pipeline

## Process

### Step 1: Fetch and read the site

Use `web_search` to find the URL if only a product name was given. Then `web_fetch` the homepage and 1-2 key interior pages (pricing, product, about — whatever reveals the most design decisions).

If the site can't be fetched, search for design reviews, case studies, or Figma community recreations of the product to gather enough information.

### Step 2: Analyse

Extract the following from the fetched content and your knowledge of the product:

**Colour:**
- Background values (light and dark if applicable)
- Text hierarchy (primary, secondary, tertiary)
- Accent colour usage (how much, what for)
- Status/semantic colours
- Dark mode approach

**Typography:**
- Font families and their roles (body, headings, mono, display)
- Body text size (px)
- Heading scale and weight approach
- Number treatment (tabular figures, mono for data)
- Letter spacing choices

**Layout:**
- Grid structure (columns, max-width)
- Spacing rhythm (tight/generous, base unit)
- Information density
- White space strategy

**Components:**
- 3-6 specific UI components worth stealing, described in enough detail that Claude Code could reproduce them without seeing the original. Include dimensions, colours, behaviours, and states.

**What to avoid:**
- What about this design is specific to their brand/context and would be cargo-culting if copied directly.

**Code patterns:**
- CSS techniques, animation approaches, interaction patterns worth noting.

### Step 3: Determine the filename

Derive a slug from the product/brand name:
- `linear.md` for Linear
- `stripe-dashboard.md` for Stripe Dashboard  
- `olipop.md` for Olipop
- `gov-uk-forms.md` for Gov.uk form patterns

Lowercase, hyphens, no special characters.

### Step 4: Determine project relevance

If the user specified a project (`teardown [URL] for Queen`), use that as the primary tag.

If not specified, infer relevance from the content:
- Product UI / dashboard / data-dense → **Queen**
- DevTools / developer marketing / CLI → **Longjons**  
- Marketplace / two-sided / property / trust → **Final**
- Beverage / packaging / FMCG / DTC food → **Golden**
- Sleep / wellness / calm / night → **Thirds**
- Disaster / preparedness / outdoor / rugged → **InCase**
- Beauty / lip / body / natural → **HoneyBalm**
- Pharmacy / medicine / honest labels / anti-wellness → **Potions**
- Any project can also be tagged if relevant

### Step 5: Write the teardown file

Use this exact format:

```markdown
# [Product/Brand name]

> One sentence: why this is in the library.

**URL:** [url]
**Category:** [landing | product-ui | dashboard | packaging | brand | form | data-viz | motion]
**Aesthetic:** [minimal | dense | editorial | playful | premium | utilitarian | warm | cold]
**Relevant to:** [project names]

---

## What they got right

[2-4 paragraphs. Not what it looks like — why it works. The design 
decisions and the reasoning behind them. Written so Claude can 
extract actionable patterns.]

## Colour

[Bullet points with specific values or descriptions]

## Typography

[Bullet points with specific fonts, sizes, approaches]

## Layout

[Bullet points covering grid, spacing, density, white space]

## Components worth stealing

[3-6 components described in enough detail to reproduce]

## What to avoid

[What not to cargo-cult from this design]

## CSS/code patterns

[Technical patterns worth noting]
```

### Step 6: Save the file

Save to the project's design foundations references folder. Check these paths in order and use the first one that exists:

1. `/docs/design-foundations/references/[slug].md`
2. `./design-foundations/references/[slug].md`
3. `./docs/references/[slug].md`

If no references folder exists at all, create it at `/docs/design-foundations/references/`.

### Step 7: Update the index

Open `_INDEX.md` in the same references folder and:

1. Add the new teardown to the appropriate **category** section
2. Add it to the **aesthetic** table
3. Add it to the **project relevance** table
4. Remove it from the **backlog** if it was listed there

If `_INDEX.md` doesn't exist, create it with the new entry as the first item.

### Step 8: Confirm

Tell the user:
- What was analysed
- The filename and path where it was saved
- Which projects it's tagged for
- 2-3 key takeaways (the most interesting/useful patterns found)
- Suggest the next most valuable teardown from the backlog

## Output quality rules

- **Be specific.** "Clean typography" is useless. "16px Inter, semibold 500 headings at 20px, 1.5 line-height, tabular figures in data columns" is useful.
- **Describe components like a spec.** Not "nice sidebar" but "240px sidebar, collapsible to 48px icons, sections grouped under 11px uppercase muted labels, active item has rgba(accent, 0.08) background fill, hover is rgba(gray, 0.04)."
- **Extract the WHY.** Not "they use dark mode" but "dark mode because their audience lives in code editors and the reduced luminance creates a focused, professional atmosphere that signals 'this is a serious tool.'"
- **Be honest about what to avoid.** Every great design has context-specific choices that would fail in a different context. Call them out.
- **Write for Claude Code.** The primary consumer of these files is Claude at build time. Be precise enough that Claude can translate the description into working Tailwind/CSS without guessing.

## Batch mode

If the user says "tear down the backlog" or "do the next 5 teardowns", work through the backlog in `_INDEX.md` one by one, fetching and analysing each site and producing the files sequentially.
