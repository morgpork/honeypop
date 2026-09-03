# Design reference engine

## How this works

This is not a collection of principles. This is a **library of analysed real-world examples** that Claude reads at build time to produce better output. Every file in `references/` is a structured teardown of something beautiful — extracted design DNA that Claude can pattern-match against.

When you say "build me a sidebar like Linear" or "make the landing page feel like Vercel," Claude reads the relevant teardown and has concrete, specific patterns to work from — not just vibes.

## Feeding the system

### Quick add (conversation)

Say any of these to Claude:

- "Analyse [URL] and add it to my references"
- "Tear down [product name] for me"
- "I love how [site] does [specific thing] — capture that"
- "Add [screenshot] to my reference library"

Claude will fetch/analyse and produce a teardown file you can drop into `references/`.

### Batch add (Claude Code)

In any project with this system installed:

```
# In CLAUDE.md:
When I say "reference [URL]", fetch and analyse it using the teardown 
template in /docs/design-foundations/TEARDOWN_TEMPLATE.md, then save 
the result to /docs/design-foundations/references/
```

### What to feed it

Anything that made you stop scrolling:

- A landing page with perfect rhythm
- A dashboard that's dense but breathable
- Packaging that owns the shelf
- A colour palette that feels inevitable
- A form that doesn't make you want to quit
- An animation that explains something without words
- A brand that sounds like a real person

## Folder structure

```
design-foundations/
├── README.md
├── TEARDOWN_TEMPLATE.md          ← This file (the format + process)
├── TYPOGRAPHY_REFERENCE.md       ← Principles
├── COLOUR_SYSTEMS_REFERENCE.md   ← Principles  
├── DASHBOARD_PATTERNS_REFERENCE.md ← Principles
├── CLAUDE_CODE_SNIPPET.md        ← Paste into any CLAUDE.md
│
└── references/                   ← THE LIBRARY (grows over time)
    ├── _INDEX.md                 ← Master index, tagged and searchable
    │
    ├── linear.md                 ← Product UI teardown
    ├── vercel.md                 ← Landing page teardown
    ├── stripe-dashboard.md       ← Dashboard teardown
    ├── rows.md                   ← Financial UI teardown
    ├── aesop.md                  ← Brand/packaging teardown
    ├── olipop.md                 ← Beverage packaging teardown
    └── ...                       ← You keep adding
```

## Teardown format

Every reference file follows this exact structure so Claude can parse it consistently:

```markdown
# [Product/Brand name]

> One sentence: why this is in the library.

**URL:** https://...
**Category:** [landing | product-ui | dashboard | packaging | brand | form | data-viz | motion]
**Aesthetic:** [minimal | dense | editorial | playful | premium | utilitarian | warm | cold]
**Relevant to:** [Queen, Golden, Longjons, Final, etc — which projects benefit]

---

## What they got right

[2-4 paragraphs. Not what it looks like — why it works. The design 
decisions and the reasoning behind them. Written so Claude can 
extract actionable patterns.]

## Colour

- Background: [specific values or description]
- Text hierarchy: [primary, secondary, tertiary approach]
- Accent usage: [how sparingly, what for]
- Dark mode approach: [if applicable]

## Typography

- Font stack: [what fonts, what roles]
- Body size: [px/rem]
- Heading approach: [scale, weight, spacing]
- Number treatment: [if relevant — tabular figures, mono, etc]

## Layout

- Grid: [columns, max-width, breakpoints if visible]
- Spacing rhythm: [tight/medium/generous, base unit if visible]
- Density: [how much info per screen]
- White space strategy: [where they're generous, where they're tight]

## Components worth stealing

[List specific UI patterns with enough detail to reproduce them.
Not screenshots — written descriptions Claude can code from.]

- **[Component name]:** [How it works, dimensions, colours, behaviour]
- **[Component name]:** [How it works, dimensions, colours, behaviour]

## What to avoid

[What about this design is specific to THEIR brand/context and 
shouldn't be cargo-culted into your projects.]

## CSS/code patterns

[Any specific technical patterns worth noting — CSS techniques,
animation approaches, interaction patterns.]

```

---

## How Claude uses this at build time

When the references folder is in a project's docs, Claude Code can:

1. **Pattern match by category:** "I need dashboard patterns" → reads all files tagged `dashboard`
2. **Pattern match by aesthetic:** "Make it feel minimal and dense" → reads files tagged `minimal` + `dense`
3. **Pattern match by project:** "Build a Queen component" → reads files tagged with `Queen` relevance
4. **Direct reference:** "Build it like Linear's sidebar" → reads `linear.md` specifically

The more teardowns you add, the better the output gets. 50 well-analysed references is worth more than 5,000 uncontextualized screenshots.
