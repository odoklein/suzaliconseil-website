# DESIGN.md — Suzali Conseil (one world, every page)

Written from the built site (October 2026). PRODUCT.md holds product truth; this file holds the visual decisions. The homepage established the world; every public route (services, the five digital and nine commercial service pages, offres, études de cas, équipe, carrières, contact, actualités and articles, mentions légales) now runs on it. Portal and admin are out of scope.

**One cabinet, one palette.** The digital pages used to carry their own colour worlds (violet, navy, blue) and their own footer colours. They were removed on purpose (decision of 2026-10-13): commercial and digital read as one firm, per PRODUCT.md principle 2. Never reintroduce a per-service hue — not in heroes, footers, chips or OG images (`/api/og` ignores `theme` for colour).

## Thesis
The homepage is the agenda Suzali fills. Proof is shown as a pipeline at work, never as pastel cards, blurred blobs or pill labels.

## Colour
| Token | Value | Role |
|---|---|---|
| `--ink` | `#0d332b` | Dark chapters, primary text on paper, inked pricing column |
| `--ink-deep` | `#07221d` | The deepest chapter (Results) |
| `--ink-2` | `#1a4d43` | Hover on ink buttons, image placeholders |
| `--paper` | `#f6f7f4` | Main light ground |
| `#fcfdfc` | — | Alternate light ground (Services, Clients), separated by hairlines |
| `--signal` | `#b0ff5b` | **Only** booked / active / actionable: CTAs, booked meetings, `RDV planifié` chips, method rail fill, active checks, link arrows on ink |
| `--signal-soft` | `#e3ffc4` | Hover wash of a ledger row on paper |
| `--muted-on-paper` | `#4e605b` | Secondary text on paper (AA) |
| `--muted-on-ink` | `#b9cbc4` | Secondary text on ink (AA) |

Metrics, prices and emphasised words are white on ink and ink on paper. Lime is never decoration.

Chapter rhythm: Hero (ink) → Logos (paper) → Services (light, with one ink pole) → Approach (ink) → Method (paper) → Results (deep ink) → Clients (light, with ink case files) → Projects (ink) → Pricing (paper) → FAQ (paper, hairline seam).

## Type
- Sora is the only display and text face. Headings are weight 600 at `-0.045em`, with line-height 0.96–1.05.
- Section headings: `clamp(2.4rem, 5.4vw, 4.9rem)` (`SectionHead size="lg"`) or `clamp(2.2rem, 4.4vw, 4rem)` (`md`).
- Hero h1: `clamp(2.7rem, 5vw, 5rem)`, max 13ch.
- Big figures (results, case stats, prices): `clamp(3.4rem, 6–8vw, 5.5–7rem)`, tracking `-0.05em`, `tabular-nums`.
- Geist Mono is used only for data: times in the board, the billing line under prices, project tags.
- No eyebrow labels above headings, on any page. The heading carries the section.
- No lime, gradient or coloured words inside headings. Emphasis on ink is size and white; on paper, at most one Marker.
- The lime **Marker** (a swept underline at 0.3em) is the brand's heading device. Use it at most once per heading, on paper only (Services, Méthode, Pricing).

## Page skeleton (every public page)
1. **`PageHero`** — the homepage's inset ink stage on paper (22px radius), the agenda hairline grid lit around the cursor, a plain-text h1 whose words rise out of line masks, intro, actions, optional mono `meta` line (price), and an aside (photo at 18px radius, or a node: the contact form, a figure). Breadcrumbs render on the ink and emit the BreadcrumbList JSON-LD — never also render `<Breadcrumbs/>`.
2. **Chapters** alternating paper `#F6F7F4` / light `#FCFDFC` (hairline seam) with at most one or two ink chapters, all headed by `SectionHead`.
3. **`ClosingCta`** — full-bleed ink, last element of the page, running into the ink footer so every page ends on the ground it opened on. Its aside is one empty week with a single lime slot: the call it offers. `slotLabel`/`slotMeta` must come from the page's own copy (e.g. "Audit gratuit · sans engagement"), never a new promise. The footer renders the default ClosingCta only on routes that don't end on their own (see `hideGlobalCTA` in `Footer.jsx`).

## Site kit (`src/components/kit/`, barrel `index.js`)
- **PageHero**, **ClosingCta**, **AgendaGrid** (the hairline texture), as above.
- **LedgerList**: title / description / mono meta rows on hairlines, linking with an arrow. The replacement for card grids and pill clouds.
- **FaqList**: sticky heading + native `<details>` rows. Emits FAQPage JSON-LD unless `jsonLd={false}`; pages that already ship FAQ schema must pass false (one FAQPage per page).
- **MethodRail** / **MethodSection**: the homepage method — numbered nodes on a hairline rail that fills lime as the reader goes. `ground` must match the chapter background so unreached nodes sit opaque.
- **FigureRow**: modest figures between hairlines (value in Sora 600 tabular, label under). Never a giant hero stat bar.
- Re-exported from `home/kit`: SectionHead, Reveal, Marker, ParallaxImage.
- Buttons: `MagneticButton` variants `primary` (lime, on ink), `ink` (primary action on paper), `outline` (paper), `outline-light` (ink). Sentence case, never uppercase; `ui/Button` matches.
- Commercial pages may show the pipeline with `.chip-status` (Contacté → Qualifié → RDV planifié) in an ink panel, captioned as illustrative (`services/commercial-shared/PipelinePanel.jsx`).

## Components (`src/components/home/kit/`)
- **SectionHead**: the h2 (mask wipe) plus an optional intro (fade). It is the only heading voice on the page.
- **Reveal**: `data-reveal="fade" | "mask" | "focus"` and becomes visible on `data-shown`. Content is visible without JS, and reduced motion forces it visible. The mask clips an inner `.reveal-mask`, because a fully clipped element never registers as intersecting.
- **Marker**: the lime sweep under one word.
- **ParallaxImage**: an image drifting ±7% inside its frame.
- **Ledger rows** (`.ledger-row`, `.on-ink`): hairline-separated link rows whose background rises on hover or focus. They replace pill clouds and same-size card grids.
- **Status chips** (`.chip-status[data-step=0|1|2]`): Contacté (grey) → Qualifié (green) → RDV planifié (lime).
- **AgendaField** (hero): the week drawn straight onto the ink in hairline cells, with no window or white panel, and edges that dissolve into the ground. A white "now" line sweeps the five days and books each meeting (a lime block) as it passes. A rolling count of booked meetings sits underneath. Data is illustrative (roles only), and the caption must say so.

## Shape and depth
- Radius is 22px on chapter cards and panels, 18px on project images, 8–12px inside the board, and pill-shaped only on buttons and status chips.
- Shadows always carry an offset and a soft blur (e.g. `0 50px 90px -40px`). No zero-offset glows and no hard offset shadows.
- The only texture is the hairline agenda grid in the hero.

## Motion
- **Lenis** (`components/layout/SmoothScroll.jsx`): duration 1.15, expo-out easing, anchor offset −88. It is skipped under `prefers-reduced-motion`. It is paused through `lib/smooth-scroll.js` while the mobile menu or the booking modal is open, and `data-lenis-prevent` is set on scrollable overlays.
- **Authored scroll moments**:
  - the hero entrance: headline words rise out of line masks, the copy comes into focus, the grid lights around the cursor
  - the hero agenda sweep (about 4 s, once): slots ink in diagonally, then the "now" line books the week
  - the method rail fill, with nodes lighting at mid-screen
  - the approach rows lighting their answer
  - the parallax team photo
  - sticky stacking case files
  - the pinned horizontal projects track (≥1024px with motion allowed; otherwise a snap row)
- Easing is `cubic-bezier(0.16, 1, 0.3, 1)` everywhere. Reveals take 0.9–1.1 s and hovers 0.3–0.5 s.

## Honesty rules (from PRODUCT.md)
Never invent metrics, client names or testimonials. Illustrative UI is labelled as illustrative. Figures on the homepage Results, the case studies and the service pages (télépro, lead-gen, prise de RDV, outbound, marque blanche, SEO, dev, stratégie, sites web, équipe) predate this redesign and come from existing site copy; the migration kept them deliberately modest (FigureRow, never a hero stat bar) and they still need to be validated against PRODUCT.md's "no unmeasured metrics" rule. Known contradiction: show-up rate 92 % (téléprospection) vs 95 % (prise de RDV).
