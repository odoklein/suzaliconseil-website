# DESIGN.md — Suzali Conseil (homepage world)

Written from the built homepage (October 2026). PRODUCT.md holds product truth; this file holds the visual decisions the homepage established. Other routes have not been migrated yet, so they still use the older card language.

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
- No eyebrow labels above headings. The heading carries the section.
- The lime **Marker** (a swept underline at 0.3em) is the brand's heading device. Use it at most once per heading, on paper only (Services, Méthode, Pricing).

## Components (`src/components/home/kit/`)
- **SectionHead**: the h2 (mask wipe) plus an optional intro (fade). It is the only heading voice on the page.
- **Reveal**: `data-reveal="fade" | "mask" | "focus"` and becomes visible on `data-shown`. Content is visible without JS, and reduced motion forces it visible. The mask clips an inner `.reveal-mask`, because a fully clipped element never registers as intersecting.
- **Marker**: the lime sweep under one word.
- **ParallaxImage**: an image drifting ±7% inside its frame.
- **Ledger rows** (`.ledger-row`, `.on-ink`): hairline-separated link rows whose background rises on hover or focus. They replace pill clouds and same-size card grids.
- **Status chips** (`.chip-status[data-step=0|1|2]`): Contacté (grey) → Qualifié (green) → RDV planifié (lime).
- **PipelineBoard**: the SuzaLink window with a week grid and a pipeline feed. Data is illustrative (roles and sectors only), and its caption must say so.

## Shape and depth
- Radius is 22px on chapter cards and panels, 18px on project images, 8–12px inside the board, and pill-shaped only on buttons and status chips.
- Shadows always carry an offset and a soft blur (e.g. `0 50px 90px -40px`). No zero-offset glows and no hard offset shadows.
- The only texture is the hairline agenda grid in the hero.

## Motion
- **Lenis** (`components/layout/SmoothScroll.jsx`): duration 1.15, expo-out easing, anchor offset −88. It is skipped under `prefers-reduced-motion`. It is paused through `lib/smooth-scroll.js` while the mobile menu or the booking modal is open, and `data-lenis-prevent` is set on scrollable overlays.
- **Authored scroll moments**:
  - the hero board filling (about 12 s, once)
  - the method rail fill, with nodes lighting at mid-screen
  - the approach rows lighting their answer
  - the parallax team photo
  - sticky stacking case files
  - the pinned horizontal projects track (≥1024px with motion allowed; otherwise a snap row)
- Easing is `cubic-bezier(0.16, 1, 0.3, 1)` everywhere. Reveals take 0.9–1.1 s and hovers 0.3–0.5 s.

## Honesty rules (from PRODUCT.md)
Never invent metrics, client names or testimonials. Illustrative UI is labelled as illustrative. The figures in Results and the case studies predate this redesign and come from existing site copy; they still need to be validated against PRODUCT.md's "no unmeasured metrics" rule.
