# SEO plan for Claude Code: suzaliconseil.com

> **How to use this file:** put it at the root of the repo `github.com/odoklein/suzaliconseil-website`, open Claude Code in that folder and say:
> *"Read SEO_PLAN_CLAUDE_CODE.md and carry it out phase by phase. Stop at the end of each phase, show me the diff and wait for my OK."*

---

## 0. Context (from Google Search Console, Jul 12 to Oct 11, 2026)

- **68 clicks, 2,490 impressions, 2.7% CTR, average position 40.9.**
- About 72% of clicks come from **brand searches** ("suzali conseil", "suzali"). Non-brand traffic is close to zero.
- **Indexing:** only **41 pages indexed** and **215 not indexed**. The Pages chart reaches about 18k URLs, so something is generating many URLs.
- News URLs end in random suffixes, e.g. `/actualites/prospection-commerciale-externalisee-guide-complet-2024-mug26uk3`.
- HTTPS is fine. 6 valid breadcrumb items. No Core Web Vitals data (traffic too low).
- **Goal:** reach the top 5 on Google.fr for the target keywords below.

### Target keywords (impressions / current position)

| Cluster | Keywords | Impr. | Pos. |
|---|---|---|---|
| Outbound | agence outbound / outbound b2b / agence outbound marketing / agence prospection outbound | 245 / 32 / 11 / 3 | 39 / 38 / 34 / 30 |
| Outsourced prospecting | prospection externalisée / prospection commerciale externalisée / externalisation prospection commerciale / externaliser (sa) prospection commerciale / agence de prospection externalisée | 191 / 137 / 60 / 55 / 7 | 54 / 54 / 54 / 48–54 / 65 |
| B2B lead generation | agence (de) génération de leads b2b / agence génération de leads paris / lead generation | 182 + 101 + 41 / 22 / 8 | 61–73 / 28–41 / 21 |
| Digital acquisition | agence acquisition google / spécialiste acquisition digitale / expert acquisition digitale / seo acquisition | 59 / 56 / 53 / 27 | 60 / 82 / 71 / 35 |
| Outsourced B2B marketing | marketing externalisé b2b / marketing b2b externalisé / externaliser son marketing b2b / marketing btob externalisé | 50 / 11 / 20 / 8 | 42 / **10.7** / **22.5** / **20.4** |
| Inbound vs outbound (blog) | inbound vs outbound / outbound inbound / outbound versus inbound / inbound et outbound | 12 / 10 / 7 / 5 | **24 / 27 / 19 / 21** |
| Teleprospecting | agence de téléprospection / agence téléprospection b2b | 7 / 4 | 86 / 34 |
| KPIs (blog) | kpis prospection commerciale b2b / kpi prospection | 16 / 4 | 60 / 47 |

**Bold = quick wins** (already close to page 1 or 2).

---

## 1. Working rules for Claude Code

1. Work on a branch `seo/phase-N`. Commit by phase with clear messages. Never push to `main` without my OK.
2. **All visible website content is in French**, with a professional B2B tone. Code and comments can be in English.
3. **Never make anything up:** no invented client figures, testimonials, logos, certifications or stats. When real data is needed, leave a clearly marked placeholder `<!-- TODO SUZALI: ... -->` and list it in the report.
4. Don't break existing URLs that are indexed or have clicks. Any URL change needs a **301 redirect**.
5. Run the build and the tests after each phase. Check the generated HTML: titles, meta, canonical and JSON-LD must be in the **server-rendered HTML**, not only injected by JavaScript.
6. Keep a file `SEO_CHANGELOG.md` updated with what changed, the files touched and what's left for me to do by hand.

---

## Phase 1: Repo audit (read only, no changes)

Produce `SEO_AUDIT.md` covering:

- Framework, rendering mode (SSR / SSG / SPA), hosting, routing.
- **How the `/actualites/` slugs are generated** and where the suffix `-mug26uk3` comes from (ID, timestamp, CMS?).
- The full list of routes/pages and their real URLs.
- Whether `robots.txt`, `sitemap.xml`, canonical tags, `<html lang>`, meta robots, OG tags and JSON-LD exist and are correct.
- Possible sources of **duplicate or infinite URLs**: query params (`?page=`, `?utm`, filters, search), pagination, tags/categories, trailing slash vs no slash, `www` vs non-`www`, `http` vs `https`, preview/draft pages, uppercase letters, empty or duplicate pages.
- Title, meta description, H1 and approximate word count for each main page.
- Images with no `alt`, oversized images, render-blocking scripts.

➡️ **Stop and wait for my OK.**

---

## Phase 2: Fix indexing (top priority)

Goal: every useful page is indexable, canonical and in the sitemap. Junk URLs are excluded.

1. **Stable slugs for news posts:** remove the random suffix (e.g. `...-guide-complet-2024-mug26uk3` → `.../prospection-commerciale-externalisee-guide-complet`). Add a **301** from every old URL to the new one. Avoid dates in slugs unless they're necessary.
2. **Self-referencing absolute canonical** on every page (`https://suzaliconseil.com/...`), with one consistent trailing-slash policy and 301s for the other forms (www, http, slash).
3. **Query params / pagination / filters / internal search:** canonical to the clean version, and `noindex,follow` for internal search pages and empty filters.
4. **`sitemap.xml` generated automatically** containing only canonical pages that return 200 and are indexable, with `lastmod`. Exclude drafts, 404s, redirects and noindex pages.
5. **`robots.txt`:** allow everything useful, block only technical paths (admin, API, preview), and point to the sitemap.
6. Real **404 pages** (HTTP 404 status, not a 200 "soft 404").
7. Thin or duplicate pages: merge them (301) or set `noindex`. List them in the report so I can decide.
8. Make sure there's no stray `noindex` and no `X-Robots-Tag` header blocking production.

➡️ **Stop, show the diff and the list of redirects.**

---

## Phase 3: Technical on-page SEO (whole site)

- `<html lang="fr">`.
- **A unique `<title>` on every page** (50–60 characters, main keyword first, ending `| Suzali Conseil`).
- **A unique meta description** (140–155 characters, benefit + call to action).
- **Exactly one H1** per page, containing the main keyword, followed by a logical H2/H3 hierarchy.
- Open Graph and Twitter cards (title, description, 1200×630 image).
- **JSON-LD structured data:**
  - Home page: `Organization` + `ProfessionalService` (name, URL, logo, `sameAs` LinkedIn, address/area served: France / Paris, contact). Use real data only, otherwise a TODO.
  - Service pages: `Service` + `BreadcrumbList` + `FAQPage` (only when the FAQ is visible on the page).
  - Articles: `Article`/`BlogPosting` (author, `datePublished`, `dateModified`, image) + `BreadcrumbList`.
- Visible breadcrumbs on every page except the home page.
- Images: descriptive French `alt` text, WebP/AVIF, `width`/`height`, `loading="lazy"` except the hero, `fetchpriority="high"` on the LCP image.
- Performance: fonts with `font-display: swap` + preload, defer non-critical JS, no layout shift (CLS). Target Lighthouse SEO = 100 and Performance ≥ 90 on mobile.
- Descriptive internal links (no "cliquez ici").

➡️ **Stop and wait for my OK.**

---

## Phase 4: Service pages ("money pages")

Create or rewrite **one strong page per intent**. One page = one main keyword. Avoid cannibalization: if 2 existing pages target the same keyword, merge them with a 301.

| URL (suggested) | Main keyword | Secondary keywords |
|---|---|---|
| `/agence-outbound` | agence outbound | outbound b2b, agence outbound marketing, agence prospection outbound, solution prospection outbound b2b |
| `/prospection-commerciale-externalisee` | prospection commerciale externalisée | prospection externalisée, externaliser sa prospection commerciale, externalisation prospection commerciale btob, agence de prospection externalisée |
| `/agence-generation-de-leads-b2b` | agence génération de leads b2b | génération de leads b2b, lead generation, rendez-vous qualifiés décideurs b2b, prise de rendez-vous b2b |
| `/agence-generation-de-leads-paris` | agence génération de leads paris | agence prospection commerciale b2b paris, agence outbound paris |
| `/marketing-b2b-externalise` | marketing b2b externalisé | marketing externalisé b2b, externaliser son marketing b2b, marketing btob externalisé |
| `/agence-acquisition-digitale` | agence acquisition digitale b2b | expert / spécialiste acquisition digitale, agence acquisition google, seo acquisition |
| `/agence-teleprospection-b2b` | agence téléprospection b2b | agence de téléprospection, téléprospection b2b |

**Template for each service page (1,200–2,000 words, in French):**

1. H1 with the keyword + a promise (e.g. *"Agence outbound B2B : des rendez-vous qualifiés avec vos décideurs"*).
2. Intro (2–3 sentences) + main CTA ("Réserver un appel").
3. Problem / pain points of the target client.
4. Method in steps (targeting, data, sequences, cold email/LinkedIn/phone, qualification, reporting).
5. Deliverables and channels.
6. Results / case studies: **TODO SUZALI** placeholders with real numbers only.
7. Why Suzali Conseil (differentiators).
8. Pricing or engagement model (or TODO).
9. FAQ with 5–8 questions (based on real queries, e.g. "Comment Suzali Conseil mesure-t-elle les rendez-vous qualifiés ?") + `FAQPage` JSON-LD.
10. Final CTA + links to 2–3 related service pages and 2–3 articles.

➡️ **Stop: show me the drafts before publishing.**

---

## Phase 5: Quick wins (pages already near page 1)

For each query below: find the page that already ranks (in the codebase, the page closest to the topic), then improve it:
add the exact query to the title, H1 and first paragraph, expand the content (+500–800 words), add a FAQ and 3–5 internal links pointing to it.

- `marketing b2b externalisé` (pos. 10.7) → `/marketing-b2b-externalise`
- `marketing btob externalisé` (20.4) / `externaliser son marketing b2b` (22.5) → same page
- `outbound versus inbound` (19), `inbound et outbound` (21), `inbound vs outbound` (24), `outbound inbound` (27) → **one single** article *"Inbound vs outbound : quelle stratégie de prospection B2B choisir ?"* (comparison table, pros/cons, when to combine them). Merge any similar articles with a 301.
- `lead generation` (21) / `leads` (12) → strengthen `/agence-generation-de-leads-b2b`.

---

## Phase 6: Internal linking and navigation

- Main menu: a "Services" dropdown listing all the Phase 4 pages.
- Footer: links to all service pages + key articles.
- Each article links to **at least 1 service page** (keyword-rich anchor) + 2 related articles.
- Each service page links to 2–3 articles in its cluster.
- Home page: one section with a short paragraph and a link for each service.
- Check that no important page is **orphaned** and that every page is at most 3 clicks from the home page.

---

## Phase 7: Blog content (topic clusters)

Create the structure (Markdown/MDX templates or CMS entries) and **draft** these articles in French (1,500+ words each, with an author, date and FAQ). Mark facts or numbers that need checking as TODO.

**Outbound / prospecting cluster** (→ `/agence-outbound`, `/prospection-commerciale-externalisee`)
1. Prospection commerciale externalisée : le guide complet (update the existing article, clean slug)
2. Externaliser sa prospection commerciale : avantages, coûts, pièges à éviter
3. Inbound vs outbound : quelle stratégie choisir en B2B ? (Phase 5)
4. Les KPIs de la prospection commerciale B2B à suivre
5. Cold emailing B2B : construire une campagne qui obtient des rendez-vous
6. Agence de téléprospection ou équipe interne : comment choisir ?

**Lead generation cluster** (→ `/agence-generation-de-leads-b2b`)
7. Génération de leads B2B : méthodes et canaux qui fonctionnent
8. Comment choisir son agence de génération de leads B2B (checklist)
9. Lead qualifié, MQL, SQL : définitions et critères de qualification

**Marketing / acquisition cluster** (→ `/marketing-b2b-externalise`, `/agence-acquisition-digitale`)
10. Externaliser son marketing B2B : quand et comment ?
11. SEO et acquisition B2B : générer des leads organiques

Pace after launch: **2 articles per month**.

---

## Phase 8: Final check

Produce `SEO_REPORT.md` with:

- [ ] Build OK, no console errors, no broken internal links (run a crawler/link checker).
- [ ] Every page: 200 status, unique title and meta, a single H1, self-referencing canonical, lang="fr".
- [ ] JSON-LD valid (schema.org syntax, no errors).
- [ ] Sitemap contains only canonical 200 URLs. robots.txt is correct.
- [ ] Full table of 301 redirects (old URL → new URL), each tested.
- [ ] Mobile Lighthouse scores (SEO, Performance, Accessibility, Best Practices) before and after.
- [ ] List of all `TODO SUZALI` items (real data to provide).
- [ ] List of **manual actions** for the team (below).

---

## Manual actions after deploying (for the Suzali team, not Claude Code)

1. Google Search Console → **Sitemaps**: submit `https://suzaliconseil.com/sitemap.xml`.
2. **URL inspection** → "Request indexing" for the home page + each service page.
3. **Indexing → Pages**: check the reasons for not-indexed pages again 2–4 weeks later.
4. Remove the **unused verification token** reported by GSC.
5. Create or complete the **Google Business Profile** (Paris) with a link to the site.
6. Backlinks: LinkedIn company page, B2B directories (Sortlist, Clutch, Malt, LesBonsProfils…), guest articles, partners. Aim for 3–5 quality links per month.
7. Track monthly in GSC: non-brand clicks, average position per target keyword, number of indexed pages.

### Success indicators (3–6 months)

- Indexed pages: 41 → **all useful pages** (not-indexed pages limited to junk URLs).
- Average position: 40.9 → **< 20**.
- At least 3 target keywords in the **top 10**, then in the top 5.
- Non-brand clicks: about 0 → **> 50% of clicks**.
