# SEO audit: suzaliconseil.com (Phase 1, read only)

Audited on 2026-10-16 against `origin/main` @ `ebe7bfe`, plus a read-only crawl of the production site (`https://suzaliconseil.com`, 37 sitemap URLs fetched, no writes). No site code was changed. Production may lag the repo by a deploy; where that matters it's noted.

---

## 1. Stack, rendering, hosting

| Item | Finding |
|---|---|
| Framework | Next.js **16.2.12**, App Router, React 19, JS/JSX (not TS) in `src/` |
| Rendering | Server components. Service pages are static/ISR (fast TTFB). `/actualites/[slug]` uses `generateStaticParams` (prerendered at build) plus on-demand for new posts. Titles, meta, canonical and the page-level JSON-LD are in the server HTML. |
| Data | Neon Postgres via Drizzle (`src/db/schema.js`, table `posts`). Service pages are code, not DB. |
| Hosting | **Cloudflare Workers** via OpenNext (`wrangler.jsonc`, `worker.ts`). `nixpacks.toml` is a leftover from another host. Cron `0 8 * * 1,3,5` triggers `/api/cron/generate-article`. |
| Content | Articles are **AI-generated** (Mistral, `src/lib/ai-writer.js`) and published by cron, 3 per week, or created in `/admin`. |
| CI | None (no GitHub Actions). Deploys are not driven by this repo's pushes as far as I can see. |

## 2. Where the `-mug26uk3` slug suffix comes from

`Date.now().toString(36)` appended to a slugified title, in **two places**:

- `src/lib/ai-writer.js:224`: `slug: \`${slugBase}-${Date.now().toString(36)}\`` (cron articles)
- `src/app/admin/(dashboard)/actions.js:197`: same pattern (manual articles)

So **every** article slug has a random timestamp suffix, e.g. `...-mojth973`, and every future cron article will get a new one unless this is changed. Slugs are also long and keyword-stuffed (`cold-emailing-b2b-france-la-strategie-gagnante-en-2024-mlywxerj`), and some contain a year (`2024`).

Related existing handling: `next.config.mjs` already has 11 redirects, including 9 hard-coded for old suffixed article URLs.

## 3. Routes (real URLs)

**Indexable, in sitemap (24 static + 13 article = 37):**
`/`, `/services`, `/services/commercial`, `/services/prospection-commerciale-externalisee`, `/services/generation-leads-b2b`, `/services/teleprospection-b2b`, `/services/prise-rendez-vous-b2b`, `/services/outbound-marketing-b2b`, `/services/vente-marque-blanche`, `/services/fichier-prospection-b2b`, `/services/qualification-leads-b2b`, `/services/campagnes-email-sms-b2b`, `/services/digital` and 5 children (`strategie-digitale`, `sites-web-ecommerce`, `seo-acquisition`, `branding-identite`, `developpement-automatisation`), `/offres`, `/etudes-de-cas`, `/equipe`, `/actualites`, `/contact`, `/carriers`, plus `/actualites/<slug>` (14 sitemap entries under `/actualites` including the list page).

**Not indexable / private:** `/admin/*`, `/portal/*`, `/api/*` are only blocked by `robots.txt` (no `noindex` meta found in the code; a robots.txt block alone doesn't stop a linked URL from being indexed, though these need a login). `/mentions-legales` is intentionally `noindex` (`robots: { index: false }`) and correctly absent from the sitemap.

> **Important for Phase 4:** the plan suggests new top-level URLs (`/agence-outbound`, `/marketing-b2b-externalise`, ...). **The site already has service pages under `/services/...`**, several on the same intents:
>
> | Plan's page | Closest existing page |
> |---|---|
> | `/agence-outbound` | `/services/outbound-marketing-b2b` (1,418 words, FAQ already) |
> | `/prospection-commerciale-externalisee` | `/services/prospection-commerciale-externalisee` (1,767 words, Service+Offer+FAQ schema) |
> | `/agence-generation-de-leads-b2b` | `/services/generation-leads-b2b` (438 words, thin) |
> | `/agence-teleprospection-b2b` | `/services/teleprospection-b2b` (426 words, thin) |
> | `/agence-acquisition-digitale` | `/services/digital/seo-acquisition` (299 words, thin) |
> | `/marketing-b2b-externalise` | **none** |
> | `/agence-generation-de-leads-paris` | **none** |
>
> Creating the plan's URLs literally would duplicate these (cannibalization) and would break rule 4 unless every move gets a 301. **A decision is needed (see section 10).**

## 4. Indexing and technical checks (production)

| Check | Result |
|---|---|
| `robots.txt` | OK. Allows `/`, disallows `/api/ /admin/ /portal/ /private/`, points to sitemap. `Host:` directive is non-standard (harmless). |
| `sitemap.xml` | Generated (`src/app/sitemap.js`), 37 URLs, only canonical pages. **Static routes have no `lastmod`** (only articles do). The hard-coded list must be edited by hand for each new service page. |
| `<html lang>` | `fr` on all pages. OK. |
| Canonical | Present on all 37 sampled pages, absolute, self-referencing, no trailing slash. **Home canonical is `https://suzaliconseil.com` (no slash): fine.** The root layout sets `canonical: "/"`; every page I sampled overrides it, so no page inherits the home canonical today. This is a latent trap for any new page that forgets `alternates`. |
| Meta robots | `index, follow` everywhere sampled. No stray `noindex`, no `X-Robots-Tag` header. |
| `http` to `https` | 301 to `https://suzaliconseil.com/...`. OK. |
| `www` to non-`www` | **OK, single hop (re-tested 2026-10-22 with `curl -I`).** `http(s)://www.suzaliconseil.com/<path>?<query>` returns one `301` to `https://suzaliconseil.com/<path>?<query>`, then `200`. No loop. *(An earlier version of this audit reported a possible loop; that was a bad test: PowerShell's `-MaximumRedirection 0` throws on any 3xx, and a Node `fetch` failed once. Corrected.)* The `301` status and the headers (`location` in lower case, no `x-powered-by`) differ from Next.js's own `308`, so the redirect is produced by Cloudflare in front of the app; the `www` rule in `next.config.mjs` is a backup that is never reached. |
| Trailing slash | `/services/commercial/` returns **308** to the slashless URL. OK. |
| Uppercase | `/Services/Commercial` returns **404**. OK (no duplicate). |
| Query params | `/actualites?page=2` and `?utm_source=x` return 200 with canonical to `/actualites`. OK. |
| 404 handling | Real **HTTP 404** for unknown pages and unknown article slugs (`notFound()`). No soft 404 found. |
| Legacy WordPress URLs | `/blog/:slug` 308 to `/actualites/:slug`. **`/category/*`, `/tag/*`, `/author/*`, `/feed`, `/wp-login.php` return 404**; the redirects proposed in `INDEXATION_FIXES.md` were never added. `/wp-content/*` redirects to `/assets/*`. |
| Google verification file | `/google2f092a151e9f95b5.html` now returns 200 with the right content. |

### Why GSC shows ~18k URLs and 215 "not indexed"

Not caused by this app. The current app generates **no** infinite URL space (no faceted filters, no search pages, pagination is client-side, query params canonicalise correctly). The repo's own `INDEXATION_ANALYSIS.md` (Feb 2026) reported ~93k 404s and ~8k redirected URLs, i.e. the **old WordPress site's URLs that Google still remembers**. The 215 not-indexed pages are overwhelmingly legacy URLs. Expected to decay slowly on its own; the redirects for `/category`, `/tag`, `/author` are a small, safe improvement.

## 5. Structured data

| Page type | Finding |
|---|---|
| Site-wide `Organization` + `WebSite` | Defined in `src/app/layout.jsx` but rendered with `next/script strategy="beforeInteractive"`. In the served HTML this is **not a `<script type="application/ld+json">` tag**: it is injected through `self.__next_s.push(...)` (JavaScript). **0 real JSON-LD tags** on `/contact` (verified). This breaks working rule 5 (JSON-LD must be in server HTML). Google usually renders JS, but this is fragile. |
| Home | Only `FAQPage` as a real tag. No `Organization`/`ProfessionalService` as real tag. |
| Services (`/services`, 6 transactional pages) | `Service` + `FAQPage` + `BreadcrumbList` present. |
| `/services/commercial`, `/generation-leads-b2b`, `/teleprospection-b2b`, `/prise-rendez-vous-b2b`, 5 digital children | `BreadcrumbList` only, or **no JSON-LD at all** (`/digital`, `/strategie-digitale`, `/sites-web-ecommerce`, `/vente-marque-blanche`). |
| Articles | `BlogPosting` + `BreadcrumbList` (+ `FAQPage` if the post has FAQ). **Author is `Organization`, no `publisher`.** |
| Other | `/actualites` list, `/contact`, `/equipe`, `/carriers`: none (acceptable for most). |

## 6. Per-page on-page data (production, 2026-10-16)

All sampled pages: 200, unique `<title>`, unique meta description, exactly **one H1**, OG image present, 0 images missing `alt`. Title lengths and description lengths were not measured one by one.

| Page | Words | H1 | JSON-LD | Notes |
|---|---:|---|---|---|
| `/` | 1,359 | "Génération de leads B2B en France" | FAQPage | Title "Suzali Conseil — Agence de prospection B2B en France" |
| `/services/prospection-commerciale-externalisee` | 1,767 | "Prospection commerciale externalisée" | Service, Offer, FAQ, Breadcrumb | Strongest page; already near the plan's template |
| `/services/outbound-marketing-b2b` | 1,418 | "Agence Outbound Marketing B2B Prospection Digitale" | FAQPage | Title says "outbound marketing", intent is "agence outbound" |
| `/services/generation-leads-b2b` | 438 | "Agence Génération de Leads B2B Qualifiés France" | Breadcrumb | **Thin** for a money page |
| `/services/teleprospection-b2b` | 426 | "Agence Téléprospection B2B Prise de RDV France" | Breadcrumb | **Thin** |
| `/services/prise-rendez-vous-b2b` | 419 | | Breadcrumb | Thin |
| `/services/commercial` | 590 | "Accélérez votre prospection B2B" | Breadcrumb | Title ends "| Suzali" (not "Suzali Conseil"). Overlaps with `/services/prospection-commerciale-externalisee` |
| `/services/digital` and 5 children | 280 to 345 | Several H1s are keyword strings with missing punctuation | None / Breadcrumb | **Thin.** H1 like "Création d Identité Visuelle Stratégie de Marque" (apostrophe lost). `/seo-acquisition` is the "acquisition digitale" page at 299 words |
| `/services/campagnes-email-sms-b2b`, `/fichier-prospection-b2b`, `/qualification-leads-b2b` | 327 to 347 | OK | Service, FAQ, Breadcrumb | Thin |
| `/actualites/<slug>` (6 sampled) | 838 to 1,619 | AI-generated Title Case H1s with lost apostrophes ("Stratégies d Impact"), years ("2024") | BlogPosting etc. | Article `<title>` often differs from H1 (e.g. H1 "Boostez Vos Ventes B2B : Agence Génération Leads Paris Expert" vs title "Choisir une agence de leads B2B") |
| `/contact`, `/equipe`, `/carriers` | 134 to 340 | OK | None | Fine for their role |

Other observations:

- **Keyword gap:** no page exists for "marketing B2B externalisé" (the best quick win, pos. 10.7) or "agence génération de leads Paris". I have not checked whether an "inbound vs outbound" article exists beyond the 6 sampled; Phase 5 needs a DB query for that.
- **Stale year in content:** a sampled article H1 says "en 2024".
- **Likely cannibalization:** `/services/commercial`, `/services/prospection-commerciale-externalisee` and the `/actualites/pourquoi-externaliser...` article all target "prospection commerciale externalisée".
- **Images, performance:** not measured in this phase (no Lighthouse run). `next/image` with AVIF/WebP is configured; fonts use `next/font` with `display: swap`. A Lighthouse run belongs to Phase 3.

## 7. Duplicate / infinite-URL sources

| Source | Status |
|---|---|
| Query params, pagination, filters | Canonicalised to the clean URL; list is client-side |
| Trailing slash, uppercase | 308 / 404, no duplicates |
| `http`, `www` | Both redirect in one hop to `https://suzaliconseil.com` (see section 4). Google Search Console still lists some `www` URLs because they are **old index entries** that will consolidate over time, not a live duplicate |
| Tags / categories / authors | None on the new site |
| Preview / draft pages | Posts without `publishedAt` are excluded from the sitemap; but `/actualites/[slug]` does **not** check `publishedAt`, so an **unpublished post is reachable by URL** and has `index, follow`. Low risk because it isn't linked, but worth a guard |
| `/api/og?title=...` | Disallowed by robots; used for OG images |
| `/admin/*`, `/portal/*` | Blocked in robots.txt only, no `noindex` meta (add `noindex` as a safety net) |

## 8. Smaller defects worth fixing

1. `/carriers` is the URL (typo of "carrières"); renaming needs a 301.
2. `INDEXATION_*.md`, `README.md` ("Next.js 15", Supabase) and `nixpacks.toml` are stale; they describe a previous setup.
3. `next.config.mjs` contains mojibake in comments (an encoding issue); harmless but messy.
4. The root `layout.jsx` carries a hidden `<div hidden>` HTML comment block of design notes in the page HTML. Harmless, but it's noise in production markup.
5. Sitemap statics have no `lastmod`.
6. Home page H1 ("Génération de leads B2B en France") differs from its `<title>` focus ("Agence de prospection B2B").

## 9. What is already good (don't redo)

HTTPS + HSTS, canonical + OG + Twitter on every page, correct 404 status, `lang="fr"`, robots/sitemap, FAQ and Service schema on the main money page, unique titles/descriptions, a real `not-found` page, `generateStaticParams` for articles, `/blog` to `/actualites` redirect, IndexNow (`src/lib/indexnow.js`) wired to new articles (Bing/Yandex only; Google doesn't use IndexNow, and it needs the `INDEXNOW_KEY` env var).

## 10. Decisions I need from you before Phase 2

1. **Service URL strategy.** Keep the existing `/services/...` URLs and improve those pages in place (my recommendation: zero redirect risk, keeps what little authority exists), **or** move to the plan's flat URLs with 301s from the current ones?
   If keeping `/services/...`, I'd create only the two missing pages there: `/services/marketing-b2b-externalise` and `/services/agence-generation-de-leads-paris`.
2. **Article slugs.** OK to change slug generation to **no suffix** (collision handled by `-2`) and to **rewrite the existing ~13 published slugs with 301s from the old ones**? This changes the `slug` column in the production database, so it needs your explicit OK and a backup first.
3. **`www`.** Resolved: working today (see section 4). Optional: pin the rule in Cloudflare so it doesn't depend on an unseen setting (exact rule in the B1 report).
4. **Branching.** The plan says never push to `main` without your OK. Phase 1 is committed locally on `seo/phase-1`; tell me if you want it pushed.

## 11. Proposed Phase 2 scope (once decisions 1 and 2 are made)

- Real JSON-LD `<script>` tags in server HTML for `Organization`/`WebSite` (replace `next/script`).
- Slug generation without suffix + one-off migration script (dry-run by default) + generated 301 map.
- `/category`, `/tag`, `/author`, `/feed` redirects.
- Sitemap: add `lastmod` to static routes (from a single source of truth) ; derive the list from one route table.
- Guard `/actualites/[slug]` against unpublished posts.
- (`www` redirect: no code change needed.)
