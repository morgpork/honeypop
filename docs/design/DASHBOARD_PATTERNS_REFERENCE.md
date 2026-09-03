# Dashboard & data-dense UI patterns reference

A practical guide to designing and building data-heavy interfaces — dashboards, tables, financial displays, analytics views, and dense productivity tools. Written for Queen, Final, Longjons, Logg, and any future product that needs to display a lot of information without overwhelming the user.

This document sits alongside `TYPOGRAPHY_REFERENCE.md` and `COLOUR_SYSTEMS_REFERENCE.md` as a foundation layer.

---

## The core tension

Every data-dense interface lives in tension between two needs: **show me everything** and **help me focus.** Users want comprehensive data (they don't trust tools that hide things), but they also want to understand what matters right now without cognitive overload.

The best data interfaces — Bloomberg Terminal, Rows.com, Linear, Figma — resolve this by being *dense but structured*. They pack significant information into every screen, but they use hierarchy, spacing, and restraint to guide the eye.

The worst data interfaces — most enterprise SaaS — resolve the tension by showing everything at equal volume: every metric is a card, every card is the same size, every number is bold. The result is visual noise where nothing stands out because everything is trying to.

**Your guiding principle: information density is good. Visual noise is bad. The difference between them is hierarchy.**

---

## Layout patterns

### The sidebar + main canvas

The dominant pattern for productivity tools and dashboards. A narrow left sidebar provides navigation; the main area shows content.

**Sidebar rules:**
- Width: 220–260px. Narrower than 200px cramps labels. Wider than 280px wastes horizontal real estate.
- Collapsible: always provide a way to collapse to icon-only (48–56px wide) for focused work.
- Content: navigation items, workspace/project switchers, and nothing else. Don't put data in the sidebar.
- Sections: group nav items under subtle section labels. Keep groups to 5–7 items maximum per section — if you have more, your IA needs restructuring.
- Active state: subtle background fill (step 3–4 in your colour scale) with bold text or accent-coloured indicator. Don't use colour for inactive items.
- Bottom section: settings, user avatar, and secondary actions pinned to the bottom.

**Main canvas rules:**
- Full available width minus sidebar.
- Content should have internal max-width constraints for prose text (see Typography Reference) but tables and data grids can span the full width.
- Horizontal padding: 24–32px on each side.
- Vertical padding: 24px from the top toolbar/header.

### The header bar

Sits above the main canvas. Contains context (current page title, breadcrumbs) and actions (primary CTA, filters, search).

**Rules:**
- Height: 48–56px. Enough for a title and action buttons without feeling wasteful.
- Sticky: yes, almost always. Users need persistent access to page context and actions.
- Content hierarchy: page title (left), actions (right). Filters and secondary controls sit below the header as a toolbar row if needed.
- Don't overload: if you have more than 3–4 action buttons, group them into a menu or rethink the page structure.

### Split views

Two panels side by side. Used for master-detail patterns (list on left, detail on right), comparison views, or code + preview layouts.

**Rules:**
- Provide a draggable divider so users can adjust the split ratio.
- Remember the user's preferred split ratio across sessions.
- Default to roughly 40/60 or 35/65 — the detail panel usually needs more space than the list.
- Each panel should be independently scrollable.
- Provide a way to collapse one panel entirely for focused work in the other.

### Cards vs. tables

Cards are for browsable, heterogeneous content (projects, products, people). Tables are for scannable, homogeneous content (transactions, orders, metrics, logs).

**Use cards when:**
- Each item has a visual element (image, chart, avatar)
- Items vary significantly in structure or importance
- Users browse rather than search/filter
- Mobile responsiveness matters (cards stack naturally)

**Use tables when:**
- Data has consistent attributes across all rows
- Users need to compare values across items
- Sorting and filtering are primary interactions
- Data density is more important than visual richness

**Don't mix them on the same page for the same data type.** Pick one and commit.

---

## Tables — the most important component

Tables are the workhorse of data-dense UI. Getting them right is the highest-leverage thing you can do for Queen, Final, and Longjons.

### Anatomy of a good table

**Column headers:**
- Left-aligned for text columns. Right-aligned for number columns. Never centred.
- Subtle weight distinction from body rows — semibold (500) at the same size, or regular weight with a background fill. Don't use dramatically different styling.
- Sortable columns should show a subtle directional indicator (arrow/chevron). Active sort shows filled indicator; inactive shows ghosted indicator on hover only.
- Sticky headers: yes, always, for any table that might scroll vertically.

**Rows:**
- Consistent height: 40–48px for compact/data-dense. 52–64px for comfortable/readable.
- Alternating row shading OR subtle horizontal dividers — not both. Alternating shading (step 1/step 2 of your gray scale) is better for wide tables. Dividers (1px, step 6 gray) are better for narrow tables.
- Hover state: subtle background fill (step 3) across the full row. This helps the eye track across wide tables.
- Selected state: accent colour background (step 3 of brand) with optional left border indicator.
- Don't zebra-stripe with colour — only with subtle lightness variation.

**Cells:**
- Horizontal padding: 12–16px. Vertical padding: 8–12px.
- Text truncation with ellipsis for long values. Provide tooltip on hover showing full value.
- Action buttons (edit, delete, etc.) should appear on row hover, not permanently visible. This keeps the resting state clean.
- Status values: use a pill/badge with coloured background (step 3 of semantic colour) and coloured text (step 11). Not coloured dots alone — they're too small and too dependent on colour perception.

**Number formatting (critical for Queen):**
- Right-align all numeric columns.
- Use tabular figures (`font-variant-numeric: tabular-nums`) so digits stack vertically.
- Use your mono font (Atkinson Hyperlegible Mono) for number-heavy columns.
- Thousands separators for values above 999.
- Currency symbols prefix the number, no space: $1,234.56.
- Negative values: minus sign, optionally in red. Parenthetical negatives ((1,234)) are an accounting convention — use them if your audience expects them.
- Percentage values: right-align, number immediately followed by % symbol.
- Deltas/changes: prefix with + or −, colour green/red respectively. Consider a small arrow icon alongside.

### Column types and widths

**Fixed vs. flexible columns:**
- ID columns, status badges, and action columns: fixed width.
- Name/description columns: flexible (take remaining space).
- Numeric columns: fixed width based on the largest expected value plus padding.

**Minimum widths by type:**

| Column type | Min width | Notes |
|------------|-----------|-------|
| Checkbox/select | 40px | Fixed |
| Status badge | 100px | Fixed |
| Short text (name) | 150px | Flexible, with truncation |
| Long text (description) | 200px | Flexible, with truncation |
| Date | 100–120px | Fixed, depends on format |
| Currency | 100–120px | Fixed, right-aligned |
| Percentage | 80px | Fixed, right-aligned |
| Actions | 48–96px | Fixed, depends on number of actions |

**Resizable columns:** For power-user tables (Queen, Final admin), allow users to resize columns by dragging column borders. Remember their preferences.

### Sorting and filtering

**Sorting:**
- Single-column sort is the default.
- Multi-column sort (shift+click for secondary sort) is a power feature worth having for data-heavy apps.
- Default sort should be the most useful — usually newest first for time-series data, alphabetical for name lists.
- Clear sort indicator in the column header. Don't rely on the user remembering which column is sorted.

**Filtering:**
- Filters sit above the table, not in a separate panel (unless you have 10+ filter dimensions).
- Show active filter count prominently.
- Provide a "clear all filters" action that's always visible when any filter is active.
- Common pattern: filter bar with dropdown selectors for each dimension, plus a search input for text filtering.
- For large filter sets: use a popover/dropdown panel that groups filters by category. Airbnb's filter UI is the benchmark.

**Search:**
- Table search should be instant (client-side) for tables under ~1000 rows.
- Highlight matching text within cells.
- Search across all visible columns by default, with option to scope to specific columns.

### Empty states

Empty tables need a clear, helpful message. Never show just column headers with no rows and no explanation.

**Good empty state formula:**
1. An illustration or icon (subtle, not dominant)
2. A clear headline explaining *why* it's empty ("No orders yet", "No results match your filters")
3. A primary action to resolve it ("Create your first order", "Clear filters")

---

## KPIs and metric displays

### The metric card

A single number with context. The most common dashboard component.

**Anatomy:**
- **Label:** what this metric measures. Short, clear, sentence case. 12–13px, secondary text colour.
- **Value:** the number. Large (24–32px), primary text colour, tabular figures. This is the focal point.
- **Trend/change:** how the value has moved. Small (12–13px), coloured green/red/gray for positive/negative/neutral. Include direction arrow and percentage.
- **Sparkline (optional):** a tiny inline chart showing the trend over time. 40–60px tall, no axis labels, single colour.
- **Period:** what time range this covers. 11–12px, tertiary text colour. "Last 30 days", "This week", etc.

**Layout rules:**
- 3–5 KPI cards in a row is the sweet spot. Fewer than 3 feels sparse. More than 5 and no single metric gets enough attention.
- All cards in a row should be the same height. If one has a sparkline, they all get the space for one (even if some don't show it).
- Don't put borders on KPI cards unless they sit on a coloured background. On white/neutral backgrounds, cards are better defined by spacing and subtle background variation.

### Comparative metrics

When showing the same metric across different dimensions (revenue by region, signups by channel):

- **Bar chart** is almost always better than a table for 3–10 items. The visual encoding makes comparison instant.
- **Horizontal bar chart** works better than vertical when labels are long (region names, product names).
- **Sort by value, not alphabetically.** The user wants to know what's biggest, not what starts with 'A'.
- **Label the value at the end of each bar.** Don't make users trace their eye back to an axis.

---

## Charts and data visualisation

### Chart selection

| Data question | Chart type | Notes |
|-------------|-----------|-------|
| How has X changed over time? | Line chart | Multiple lines for comparison. Max 5–6 lines before it's unreadable. |
| How much of each category? | Bar chart (horizontal) | Sort by value. Label directly. |
| What's the composition? | Stacked bar or area chart | Use when parts-of-whole matters. |
| How do two variables relate? | Scatter plot | For analytical/exploratory views. Not for dashboards. |
| What's the distribution? | Histogram | Rarely needed in product dashboards. Useful for analytics. |
| What's the single key number? | Big number + trend | Not a chart — just display the value prominently. |

**Charts to avoid:**
- **Pie charts:** Humans are terrible at comparing angles. Use a horizontal bar chart instead. Always.
- **3D charts:** Distort data perception. Never use them.
- **Dual-axis charts:** Confusing and misleading. If you need to show two metrics, use two charts stacked vertically with aligned time axes.
- **Gauge/speedometer charts:** Waste space. A single number with a trend indicator conveys the same information in a fraction of the space.

### Chart styling principles

**Colour:**
- Use your brand accent for the primary data series. Use gray for secondary/comparison series.
- Never use more than 5–6 colours in a single chart. If you have more categories, group the smaller ones into "Other."
- For categorical data, use colours that are distinguishable in grayscale (vary lightness, not just hue).
- Semantic colours (red/green) for financial data: green = positive/growth, red = negative/decline. Don't use these for non-financial categories.

**Axes and labels:**
- Y-axis: always start at zero for bar charts. Line charts can start at a relevant baseline if the variation is meaningful.
- Grid lines: subtle (step 4–5 gray), horizontal only. Vertical grid lines are almost never needed.
- Axis labels: small (11–12px), secondary text colour. Don't overload with too many tick marks — 4–6 labels on each axis is plenty.
- Direct labelling (values on the chart itself) is better than requiring the user to trace to an axis. Use it for bar charts, sparingly for line charts (endpoints and key inflection points).

**Interactivity:**
- Hover tooltip showing exact values. The tooltip should show all series at the hovered time point, not just the nearest one.
- Click to drill down (if applicable).
- Time range selector: allow zooming into specific periods. Preset buttons (7d, 30d, 90d, 1y, All) plus custom date range.

**Responsive:**
- Charts should resize fluidly with their container.
- On narrow screens, simplify: fewer tick marks, abbreviated labels, hide legend and use direct labelling instead.

---

## Navigation and information architecture

### Breadcrumbs

For hierarchical navigation (Queen: Products > Kānuka Kola > Edit; Final: Inspections > #2847 > Report):

- Show the full path, not just parent > current.
- Each segment is a clickable link except the current page.
- Separator: `/` or `›` — not `>` (that implies a button/action).
- Truncate middle segments for deep paths: Home / ... / Parent / Current.

### Tabs

For switching between views of the same entity (Order tabs: Details, Items, Payment, History):

- Maximum 5–7 tabs before you need a different pattern (dropdown, sidebar nav).
- Active tab: bold text or underline indicator. Don't use background fill — it creates a visual break that suggests a separate container.
- Tab content should load without a full page navigation. Tabs are view switches, not navigation.
- URL should update when switching tabs (for shareability and back-button support).

### Command palette (K-bar)

The ⌘K pattern, popularised by Linear, Raycast, and Vercel. Essential for power-user productivity tools.

- Fuzzy search across all navigable pages, actions, and recently viewed items.
- Keyboard-first: arrow keys to navigate, Enter to select, Esc to close.
- Categorised results: pages, actions, recent, settings.
- Fast — results should appear as the user types, no loading delay.
- Good for Queen, Longjons, and Final. Overkill for Golden's marketing site.

---

## Forms and data entry

Critical for Longjons (it's literally a forms platform) and important for Queen (order entry, product management) and Final (inspection forms, booking flows).

### Input field anatomy

- **Label:** above the input, not inside as placeholder text. Placeholders disappear when the user starts typing, removing context. Labels persist.
- **Input:** full width within its column. Height: 36–40px for compact, 44–48px for comfortable. Border: 1px, gray step 7. Focus: accent colour border (step 8) with subtle box-shadow.
- **Helper text:** below the input, in secondary text colour. Used for format hints ("YYYY-MM-DD"), constraints ("Max 500 characters"), or contextual guidance.
- **Error state:** red border, red helper text with specific error message. Don't just say "Invalid" — say "Email must include @ symbol."
- **Required indicator:** asterisk (*) after the label, in secondary text colour. Don't use red — it looks like an error before the user has done anything.

### Form layout

- **Single-column for most forms.** Two-column layouts are harder to scan and break on mobile. Exception: short, related fields (first name / last name, city / postcode) can sit side by side.
- **Group related fields** under section headings with clear visual separation (space + heading, not rules/borders).
- **Progressive disclosure:** don't show all fields at once if some are conditional. Show them when they become relevant.
- **Primary action button at the bottom left** (or full-width on mobile). Secondary actions (cancel, save as draft) to the right of or below the primary.
- **Autosave where possible** — eliminates the save button entirely for edit forms. Show a subtle "Saved" indicator that appears briefly after each change.

### Validation

- **Inline validation on blur** (when the user leaves the field), not on every keystroke.
- **Don't validate before the user has finished** — showing an "invalid email" error while they're mid-typing is hostile.
- **Summarise errors at the top of the form** in addition to inline indicators, especially for long forms.
- **Keep the user's input** — never clear a field because validation failed.

---

## Loading, empty, and error states

These "non-happy-path" states are where most interfaces fall apart. They're also where you build (or destroy) trust.

### Loading

- **Skeleton screens** (gray placeholder shapes mimicking the layout) are better than spinners. They give the user a preview of what's coming and reduce perceived load time.
- **Progressive loading** — show the page structure and navigation immediately, load data into it. Don't block the entire page for one slow query.
- **Loading within context** — if a table is reloading after a filter change, show a subtle loading indicator within the table area, not a full-page spinner.
- **Optimistic updates** — for actions where failure is rare (toggling a status, reordering), update the UI immediately and reconcile with the server in the background. Show an undo option rather than waiting for confirmation.

### Empty states

Three types, each needs different treatment:

1. **First use** (no data yet): welcoming, instructional. "You haven't created any products yet. Start by adding your first product." Include a clear primary action.
2. **No results** (filters/search returned nothing): helpful, not punishing. "No orders match your filters." Include a clear "clear filters" action.
3. **Intentionally empty** (data exists but this view is clear): confirmatory. "All tasks are complete" or "No pending invoices." This is a positive state — don't make it feel like something is broken.

### Error states

- **Be specific.** "Something went wrong" is useless. "Couldn't load orders — the server didn't respond. Try refreshing." is helpful.
- **Offer a recovery action.** Retry button, contact support link, alternative path.
- **Don't destroy context.** If a page partially loaded before the error, keep what loaded. Don't replace the entire page with an error screen.
- **Log errors silently.** The user doesn't need to see stack traces or error codes unless they're a developer (in which case, put it in a collapsible "Technical details" section).

---

## Density and spacing

### The density scale

Different users and contexts need different information density. The best data-dense tools offer a density toggle.

| Density | Row height | Font size | Padding | Use |
|---------|-----------|-----------|---------|-----|
| Compact | 32–36px | 13px | 4–8px | Power users, large datasets, monitoring |
| Default | 40–48px | 14px | 8–12px | Everyday use, balanced readability |
| Comfortable | 52–64px | 15px | 12–16px | Casual browsing, presentation mode |

**Implementation:** density should be a user preference that persists, not a per-view setting. Store it in user preferences and apply globally.

### Spacing scale

Use a consistent spacing scale based on a 4px grid. Every measurement in your UI should be a multiple of 4.

```css
--space-1:  4px;   /* Tightest — between related inline elements */
--space-2:  8px;   /* Between elements within a component */
--space-3:  12px;  /* Between components within a group */
--space-4:  16px;  /* Between groups within a section */
--space-5:  20px;  /* Between sections */
--space-6:  24px;  /* Section padding, page gutters */
--space-8:  32px;  /* Major section breaks */
--space-10: 40px;  /* Page-level spacing */
--space-12: 48px;  /* Hero/feature spacing */
--space-16: 64px;  /* Page margins, major separation */
```

The 4px grid keeps everything aligned and creates a rhythm that feels intentional. If something looks "off" but you can't explain why, check if the spacing follows the scale.

### Borders and dividers

- **Use sparingly.** Every border adds visual noise. Ask: can spacing alone create the separation I need? If yes, don't add a border.
- **When you do use borders:** 1px, gray step 6. Subtle enough to create structure without drawing attention.
- **Horizontal dividers in tables:** lighter than standalone borders (step 5 or even step 4). They're guides, not walls.
- **No double borders.** If two adjacent elements both have borders, the meeting point creates a 2px line. Use border on one side only, or use gap/spacing instead.
- **Border radius:** pick a value and use it consistently. 6–8px for most components (inputs, cards, badges). 12px for larger containers. 99px for pills and toggles.

---

## Keyboard navigation and power features

Data-dense tools live or die by keyboard support. The users who need the most data are the users who are fastest with a keyboard.

### Essential keyboard patterns

| Shortcut | Action | Priority |
|----------|--------|----------|
| ⌘K | Command palette / search | Must have |
| ⌘/ | Keyboard shortcut reference | Must have |
| ↑↓ | Navigate rows/items | Must have |
| Enter | Open/select focused item | Must have |
| Esc | Close modal/popover, deselect | Must have |
| ⌘Z | Undo last action | Should have |
| Space | Toggle checkbox/selection | Should have |
| ⌘⇧P | Toggle command palette | Nice to have |
| J/K | Navigate items (vim-style) | Nice to have (power users love it) |

### Bulk actions

For any table with selectable rows:
- Checkbox in the header row for select-all.
- When rows are selected, show a floating action bar at the bottom of the table with available bulk actions (delete, export, change status).
- Show selected count prominently.
- Allow shift+click to select a range.

---

## Performance patterns

### Virtual scrolling

For tables with 100+ rows, render only the visible rows plus a small buffer. This keeps the DOM lean and scrolling smooth. Libraries like TanStack Virtual handle this well.

### Pagination vs. infinite scroll

- **Pagination** for transactional data (orders, invoices) where users need to reference "page 3" or bookmark a position.
- **Infinite scroll** for feed-like data (activity logs, notifications) where chronological browsing is the primary pattern.
- **Load more button** as a middle ground — infinite scroll without the disorientation.

### Data freshness

- **Polling** for real-time dashboards (every 30–60 seconds).
- **Websockets** for collaborative features where users see each other's changes.
- **Stale-while-revalidate** for data that doesn't need to be instantly current — show cached data immediately, refresh in background.
- **Always show a timestamp** for when data was last updated. "Updated 2 minutes ago" builds trust.

---

## Reference implementations to study

These are the products worth studying screen-by-screen for dashboard and data-dense UI patterns:

| Product | What to study | Relevance |
|---------|--------------|-----------|
| **Rows.com** | Financial-grade table styling, formula bar, cell formatting | Queen's primary aesthetic reference |
| **Linear** | Sidebar nav, command palette, keyboard shortcuts, view switching, colour system | Queen, Longjons |
| **Notion** | Block-based content, inline databases, flexible views | Queen's CMS features |
| **Stripe Dashboard** | KPI cards, charts, transaction tables, financial data formatting | Queen's analytics |
| **Vercel** | Deployment tables, log views, minimal chrome, devtools aesthetic | Longjons |
| **Supabase Dashboard** | Database table views, SQL editor, real-time features | Queen's data layer |
| **Retool** | Dense form layouts, table components, filter patterns | Queen's internal tools |
| **Airbnb** | Two-sided marketplace search, trust signals, review systems, filter UI | Final |
| **Thumbtack** | Service marketplace flows, provider profiles, booking | Final |
| **Mercury** | Banking dashboard, transaction tables, financial charts | Queen financial views |
| **Xero** | Accounting UI patterns, invoice tables, reporting | Queen, familiar to NZ users |

---

*This is a living document. As you build Queen and other products, annotate specific patterns that work well or poorly. The best pattern libraries are built from direct experience, not just observation.*
