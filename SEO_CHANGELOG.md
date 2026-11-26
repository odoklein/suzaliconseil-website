# SEO changelog

## B1: Repo audit (2026-10-16, corrected 2026-10-22), branch `seo/B1-audit`

- Added `SEO_PLAN_CLAUDE_CODE.md` (the plan), `SEO_AUDIT.md` (findings) and `CLAUDE.md` (working rules). **No site code changed.**
- Correction (2026-10-22): the first audit reported a possible `www` redirect loop. It was a faulty test. `www` to non-`www` is a single 301 that keeps path and query.
- Done by hand earlier (outside the plan): Google Search Console verification file `public/google2f092a151e9f95b5.html`, live on production.

**Merged:** 2026-10-22, PR #1 (`c51554e`), docs only. Nothing to check on production.

**Left for the team to do by hand**
- Optional: pin the Cloudflare `www` to non-`www` redirect rule so it doesn't depend on an unseen setting (exact rule in the B1 report).

## B2: Stable article slugs + redirects (2026-10-16), branch `seo/B2-slugs`

Decisions applied: keep the existing `/services/...` URLs (no flat URLs, no service-page moves); slug rewrite on existing articles **prepared but NOT run** (needs a separate OK, see `docs/slug-migration-runbook.md`).

### Live

Merged 2026-10-22, PR #2 (`f17232e`); deployed by Dokploy (merge to `main` auto-deploys, a build takes about 25 minutes, so wait for it before checking production). **The slug migration of existing articles has NOT been run**, so existing article URLs still carry their suffix.

Production checks (`curl -I https://suzaliconseil.com/...`, 2026-10-22, after the deploy):

| URL | Result |
|---|---|
| `/category/foo`, `/tag/foo` | `308` to `/actualites` |
| `/category/a/b?x=1` | `308` to `/actualites?x=1` (query kept) |
| `/author/admin` | `308` to `/equipe` |
| `/feed`, `/feed/atom` | `308` to `/actualites` |
| `/blog/test-article` | `308` to `/actualites/test-article` (unchanged) |
| `/this-page-does-not-exist` | `404` |
| `/actualites/prospection-commerciale-externalisee-guide-complet-2024-mug26uk3` | `200` (still the live slug, migration not run) |
| `/robots.txt`, `/google2f092a151e9f95b5.html` | `200` |
| `/sitemap.xml` | `200`, 37 URLs, unchanged |

(Next.js sends permanent redirects as 308; Google treats them like 301.) Not verifiable on production until the migration runs: the old-slug safety net (needs an article renamed in the database).

Manual actions still open: slug migration (backup, test on the `slug-test` copy, separate OK); Search Console: request indexing once the migration is done.

### Changed

| File | Change |
|---|---|
| `src/lib/post-slug.js` (new) | Pure slug helpers: `slugFromTitle` (no random suffix, no year, max 75 chars at a word boundary), `cleanSlug` / `stripSlugSuffix` (recognise a legacy `-mojth973` suffix only if it decodes to a 2025-2026 timestamp, so real words like `-national` are safe), `stripSlugYear` |
| `src/lib/post-slug-db.js` (new) | `uniquePostSlug(base)`: `base`, else `base-2`, `base-3`... (`posts.slug` is UNIQUE, so a race fails loudly instead of overwriting) |
| `src/lib/ai-writer.js` | `generateArticle` returns a suffix-less slug |
| `src/app/api/cron/generate-article/route.js`, `src/app/admin/(dashboard)/actions.js` (AI + manual post), `scripts/generate-targeted-articles.mjs` | Insert through `uniquePostSlug()`. **New articles no longer get a random suffix.** |
| `src/lib/article-services.js` | Service-link table is keyed by cleaned slug, so it keeps working before and after the slug migration |
| `scripts/migrate-post-slugs.mjs` (new) | Slug migration. **Dry run by default**; `--apply` backs up to `backups/`, updates the DB in one transaction and writes `src/data/slug-redirects.json` |
| `src/data/slug-redirects.json` (new) | Old slug to new slug map (empty `{}` until the migration is applied) |
| `next.config.mjs` | Reads that map and emits one 301 per migrated article; collapses chains (old WordPress URL goes straight to the final slug); adds 301s for `/category/*`, `/tag/*` (to `/actualites`), `/author/*` (to `/equipe`), `/feed` (to `/actualites`) |
| `src/app/actualites/[slug]/page.jsx` | Unpublished posts (draft) now return a real 404 and `noindex` (small, kept here because it concerns article URLs) |
| `src/lib/post-lookup.js` (new), `src/app/actualites/[slug]/page.jsx` | Safety net: an old slug (suffix, year) that no longer exists is permanently redirected (308) to the migrated article, so there is no 404 between the database change and the redeploy. Published articles only |
| `src/data/article-merges.json` (new, empty `{}`), `next.config.mjs`, `src/app/sitemap.js` | Folding one article into another (T1): one 301 per old URL straight to the target (old suffixed URL and WordPress URLs included, no chain); invalid entries fail the build; folded articles leave the sitemap; an entry can also repoint the legacy « combien coûte la génération de leads » redirect |
| `docs/slug-migration-runbook.md` (new) | Redirect table, backup, test-on-a-copy and rollback procedure |
| `.gitignore` | Ignores `/backups/` |

### Verified
- `next lint` clean on the changed files; `next build` passes (DB errors in the log are the expected "no `DATABASE_URL` locally" cases).
- Slug helpers tested on the 11 real slugs (all suffixes removed, `en-2024` handled) and on look-alike words.
- Redirect rules load (17); chain collapsing tested with a sample map, then reset.
- **Not testable here:** the slug migration against a real database and the live redirects (need a database copy and a deploy).

### Deliberately not done
- **Static-route `lastmod` in the sitemap.** I have no reliable per-page date; stamping the build date on every page is a known anti-pattern and makes Google ignore `lastmod`. Article `lastmod` (from `updatedAt`) stays. Needs a per-page "last content update" you maintain.
- Sitemap, robots.txt, canonical, 404 behaviour: audited OK in B1, unchanged.

### To do by hand (after a separate OK)
1. Follow `docs/slug-migration-runbook.md`: back up, test on a copy, then run on production.
2. **Commit `src/data/slug-redirects.json` and redeploy**, otherwise the old URLs 404 until the next deploy.
3. Search Console: request indexing for the new article URLs.
## B7 + B8: On-page SEO and structured data (2026-10-16), branch `seo/B7-B8-onpage`

### Live

Merged 2026-10-22 16:10, PR #4 (`a5192fd`); **live on production at about 16:47** (about 37 minutes after the merge: Dokploy builds on every merge to `main`, so wait for the build before checking production). Checked on https://suzaliconseil.com the same day:

| Check | Result |
|---|---|
| 24 static pages in the sitemap | all 200, `lang="fr"`, exactly 1 H1, self-referencing canonical, valid JSON-LD, unique title and description |
| 13 article pages (database-backed) | all have `BlogPosting` + `BreadcrumbList` + `publisher`, self canonical, 1 H1 |
| Home, `/services/prise-rendez-vous-b2b`, `/services/teleprospection-b2b` | still show « 150 € », **no JSON-LD `Offer`** (manager decision) |
| `/services/prospection-commerciale-externalisee` | hero says « Offre Growth Standard », 2 `Offer`s in JSON-LD; every JSON-LD price (1 590, 150, 599, 55) is written on the page |
| JSON-LD prices vs visible text, all 24 pages | the only priced JSON-LD is on the externalisée page and matches its text |
| `/sitemap.xml` | 37 URLs (unchanged) |
| `/robots.txt` | `Allow: /api/og`, `/api/` still blocked |
| 404 | real 404, `noindex`, no canonical to the home page |
| Redirects | `/category/foo` → `/actualites`, `/author/x` → `/equipe`, `/feed` → `/actualites`, `/blog/x` → `/actualites/x` (308) |
| `/api/og?title=Test` | 200 |

Still open for the team: run PageSpeed Insights (mobile) on `/` and one service page, and the Rich Results Test on `/`, `/services/prospection-commerciale-externalisee` and one article.

No URL changed, so no new redirects. All visible text is in French.

### Titles, descriptions, H1 (24 indexable pages)

Every page now has a unique `<title>` of 50 to 60 characters (keyword first, ending `| Suzali Conseil`), a unique description of 140 to 155 characters that ends on a call to action, and exactly one H1 containing the main keyword, in sentence case (the Title Case keyword strings are gone). Keywords follow the Phase 4 table, so each service page already targets its intent.

| Page | New H1 | Title (chars) |
|---|---|---:|
| `/` | Agence de prospection B2B en France (was « Génération de leads B2B en France », which competed with the lead-gen page) | 52 |
| `/services` | Services B2B : prospection commerciale et digital | 54 |
| `/services/commercial` | Solutions de prospection commerciale B2B | 54 |
| `/services/outbound-marketing-b2b` | Agence outbound B2B : des rendez-vous avec vos décideurs | 60 |
| `/services/generation-leads-b2b` | Agence de génération de leads B2B qualifiés | 50 |
| `/services/teleprospection-b2b` | Agence de téléprospection B2B en France | 56 |
| `/services/prise-rendez-vous-b2b` | Prise de rendez-vous B2B qualifiés | 51 |
| `/services/vente-marque-blanche` | Force de vente externalisée en marque blanche | 58 |
| `/services/digital` | Agence digitale B2B pour soutenir votre croissance | 53 |
| `/services/digital/seo-acquisition` | Agence d'acquisition digitale B2B : SEO et Google Ads | 57 |
| `/services/digital/strategie-digitale` | Conseil en stratégie marketing digitale B2B | 60 |
| `/services/digital/sites-web-ecommerce` | Création de sites web et e-commerce B2B | 56 |
| `/services/digital/branding-identite` | Branding et identité visuelle B2B | 50 |
| `/services/digital/developpement-automatisation` | Développement web et automatisation IA sur mesure | 51 |
| `/offres` | Nos offres et tarifs de prospection B2B | 54 |
| `/etudes-de-cas` | Études de cas : nos missions B2B, du défi au livrable | 55 |
| `/equipe` | Notre équipe commerciale et digitale | 53 |
| `/actualites` | Guides et actualités de la prospection B2B | 56 |
| `/contact` | Contactez notre agence de prospection B2B | 50 |
| `/carriers` | Carrières : rejoignez l'équipe Suzali Conseil | 52 |

Unchanged H1: prospection externalisée, fichier, qualification, campagnes (already correct). Prices quoted in descriptions are read from `offers-catalog.js`, never typed by hand.

### Structured data (all in the server HTML)

| File | Change |
|---|---|
| `src/lib/structured-data.js` (new) | One place for `Organization`, `WebSite`, `ProfessionalService`, `Service`, `FAQPage`, `BreadcrumbList`, `BlogPosting`. Services and articles point to the organisation by `@id` |
| `src/components/seo/JsonLd.jsx` (new) | Plain `<script type="application/ld+json">`, escapes `<` |
| `src/app/layout.jsx` | `Organization` now carries email, address (registered office), founder, founding year, LinkedIn: all data already published on the site |
| `src/app/page.jsx` | Home adds `ProfessionalService` |
| 12 service `page.jsx` files | `Service` added where missing (commercial, lead-gen, téléprospection, prise de RDV, outbound, marque blanche, digital + 5 children). `FAQPage` only where the FAQ is visible |
| `src/app/services/page.jsx`, `ServicesHub.jsx` | The `FAQPage` described 3 questions worded differently from the 5 shown on the page; it now comes from the visible FAQ |
| `src/app/actualites/[slug]/page.jsx` | `BlogPosting`: adds `publisher`, author `@id`/`url`, ISO dates, `inLanguage`, `url`, headline capped at 110 characters; word count from text without tags |
| `src/components/kit/PageHero.jsx`, `FaqList.jsx`, `home/Faq.jsx`, `TransactionalServicePage.jsx`, `ProspectionExternaliseePage.jsx` | Use the shared builders |
| `src/components/ui/Breadcrumbs.jsx` | Deleted: unused, and it emitted JSON-LD through JavaScript only |

### Other fixes

- **Breadcrumbs:** visible trail + `BreadcrumbList` on every page except the home (11 pages had none). The `/services/commercial` crumb now reads « Prospection commerciale » everywhere.
- **Root layout:** removed the inherited `canonical: "/"`, which made the 404 page (and any page that forgets its own) canonicalise to the home. Default title and OG updated; the unverified `@suzaliconseil` Twitter handle is no longer emitted.
- **`robots.txt`:** `Allow: /api/og`. The OG images live there, and `/api/` was blocked, so LinkedIn and X (which obey robots.txt) could show previews without an image.
- **Images:** hero images get `fetchpriority="high"` (Next 16 no longer adds it with `priority`); 5 hero images with an empty `alt` got a French description; a below-the-fold image on `/etudes-de-cas` was loaded eagerly and is now lazy.
- **Link text:** « En savoir plus » (home pricing) and « Voir le détail du service » (`/offres`) now show the target service name; « Découvrir le service » (home) is now « Nos solutions de prospection B2B » / « Notre agence digitale B2B »; a home FAQ link labelled « Outbound marketing B2B » actually pointed to prospection externalisée and is relabelled.

### Verified (local production build, `next start`)

- `next build` passes; lint clean on changed files (one pre-existing error in `AgendaField.jsx`, not touched).
- Crawl of the 24 sitemap pages: 200, `lang="fr"`, unique titles 50–60, unique descriptions 140–155, exactly one H1, self-referencing canonical, OG + Twitter with a 1200×630 image, visible breadcrumb on every non-home page, no heading-level skips, no generic link text, no image without `alt` (the only empty `alt` values are the hidden duplicate copies of the scrolling logo bands).
- JSON-LD check: every block parses, required fields present, `@id` references resolve on the page, every `FAQPage` question is visible on the page, no duplicate `FAQPage`/`BreadcrumbList`.
- 404: real 404 status, `noindex`, no canonical.
- **Not verifiable here:** article pages (need the database; the `BlogPosting` builder was tested with a sample post) and **Lighthouse**: no local Lighthouse, and the PageSpeed Insights API refused the request (quota). Fonts were already `next/font` with `display: swap` + preload; production images are served as AVIF by the optimizer (checked: a 7 MB PNG comes out at 28 KB).

### Prices (decision of 2026-10-22: the hook « 150 € par RDV » stays on three pages)

The catalogue (`src/lib/offers-catalog.js`, the source of `/offres`) has two offers with a per-appointment price: **Growth Standard** (1 590 € par mois + 150 € par RDV validé et honoré) and **Vente au Rendez-Vous** (599 € de mise en place + 55 € par RDV). There is no standalone « 150 € par RDV » offer in the catalogue: the 150 € is the variable part of Growth Standard.

**Decision (manager):** the home page, `/services/prise-rendez-vous-b2b` and `/services/teleprospection-b2b` keep the commercial hook « 150 € par RDV » **exactly as it is on `main`**. This branch does not change the visible text of those three pages (checked: the price lines are identical to `main`).

Rule that follows: **a JSON-LD `Offer` is only emitted on a page whose visible text writes exactly those amounts.** Those three pages therefore have **no `Offer`** (a 1 590 € or 599 € Offer would not match their visible text).

| Where | What |
|---|---|
| `src/lib/offer-terms.js`, `src/lib/offer-schemas.js` (new) | The two offers read from the catalogue; one JSON-LD `Offer` per offer with its own `priceSpecification` |
| `/services/prospection-commerciale-externalisee` | Hero price line prefixed « Offre Growth Standard : … »; JSON-LD has the two `Offer`s (Growth Standard, Vente au Rendez-Vous). The page shows both offers as two separate cards, so all six JSON-LD amounts (1 590, 150, 599, 55) are written on it |
| `/offres` (`PricingFaq.jsx`) | The billing FAQ no longer lists « 55 € ou 150 € par rendez-vous » together; each amount stays on its offer's card |
| Home, prise de RDV, téléprospection | Unchanged price text; no `Offer` |

Checked on the local build (script over the 24 sitemap pages): the only page with a priced JSON-LD node is the externalisée page, and every price in it (including prices quoted in `Offer` descriptions) is written in its visible text.
### Address

`10 rue de la Paix, 75002 Paris` (confirmed: footer, contact page and legal notice all say this; `structured-data.js` already used it). No change needed.

### TODO SUZALI (real data needed)

1. `ProfessionalService`: opening hours and price range: **left empty on purpose** (Odo's instruction).
2. Articles are signed by the organisation: named author **left empty on purpose**.
3. **To confirm (informational):** the prise-de-RDV page (offer Vente au Rendez-Vous per the catalogue) still says « une absence n'est pas facturée » and « 150 € par RDV honoré », which are Growth Standard terms. Left as is by the manager's decision; if that page is ever aligned with the catalogue, check the no-show rule for Vente au Rendez-Vous first.
4. The « 150 € par RDV » hook shown alone on three pages omits Growth Standard's 1 590 € par mois; kept on purpose (decision above). If a standalone offer exists, its exact conditions should be added to the catalogue.

### To do by hand
1. After deploy, run PageSpeed Insights (mobile) on `/` and one service page, and note the scores for the Phase 8 report.
2. Rich Results Test on `/`, `/services/prospection-commerciale-externalisee` and one article.


## T2: Retarget the automatic article generator (2026-10-22), branch `seo/T2-ai-writer`

**Live** (merged 2026-10-22 16:51, PR #5, `bbfabbf`; deployed by 2026-10-23 at the latest: the new `x-cron-features` header is served). What could be checked on production **without the secret**:

| Check | Result |
|---|---|
| `curl -I https://suzaliconseil.com/api/cron/generate-article` | `401 Unauthorized` with `x-cron-features: dry-run,attempt-cap,figure-guard`: the deployed route is the T2 version and knows `?dryRun=1` |
| Authentication | the route answers 401 to everyone without the secret (also with `?dryRun=1`) |

**Not verified on production** (needs the secret, which I do not have; the owner makes the first calls): the authenticated behaviour. Tested locally instead (144 checks, including the real route handler run without a database).

**Until the table is created, automatic generation is paused**: the route answers 503 and never calls Mistral. The owner creates the table with `docs/article-attempts-table.sql` (Neon SQL editor). Then, **before any real call**, run once `?dryRun=1` with the secret and check that it answers `wouldGenerate`.

### Why

The generator's three priority targets (« agence de génération de leads b2b », « prospection commerciale externalisée », « agence outbound ») are exactly the searches held by the service pages: it created the cannibalisation. Its secondary pool also contained other service-page searches and « combien coûte la génération de leads b2b » (reserved for the team's price article). And the « 3 articles per week » setting was never read by anything.

### Changed

| File | Change |
|---|---|
| `src/lib/ai-writer.js` | **Priority targets are now 4 practical topics**, each with a service link: « modèle de script de téléprospection b2b », « modèle d'email de prospection b2b », « comment prospecter sur linkedin en b2b », « comment qualifier un lead b2b avec la méthode bant ». **Secondary pool: 12 practical topics** (« comment… », « exemple de… », « techniques de… »). **15 keywords removed** and listed in `EXCLUDED_KEYWORDS` with the reason (service-page searches, the team's price article, a « meilleur outil » ranking that would need unverifiable claims about competitors, topics already covered by existing articles). |
| `src/lib/ai-writer.js` | `pickNextTarget` now returns `null` when every target already has an article, instead of picking a random used one (which would have written duplicate articles once the pool ran out). |
| `src/lib/article-cadence.js` (new) | **1 automatic article per week maximum**, enforced in code: minimum gap 7 days minus 2 hours (the 2 hours absorb the delay between the trigger and `lastRunAt`). Independent of how often the scheduler calls the endpoint. |
| `src/app/api/cron/generate-article/route.js` | Skips (HTTP 200, `skipped: true`, with the reason and `nextAllowedAt`) when the cadence rule or the target list says so. |
| `src/lib/ai-writer.js` (prompt) | **No more invented figures (requested 2026-10-22).** « chiffres ou fourchettes plausibles » is removed. New strict rule « CHIFFRES »: no percentage, amount or price range, average delay, « x fois plus », statistic, « selon une étude », client example with figures or success rate; write qualitatively (« souvent », « nettement plus long ») or give the method/formula to compute one's own value. Only numbers that count the text's own elements (« 3 modèles », « étape 2 ») are allowed. The rule also covers the FAQ, and the E-E-A-T example « la plupart des entreprises sous-estiment… » (a hidden statistic) is now « ce point est souvent sous-estimé… ». The prompt is built by the exported `buildArticlePrompt` so a test can pin these rules. |
| `src/lib/article-figures.js` (new), `src/lib/ai-writer.js` | **Safety net, because a prompt is not a guarantee** and articles publish automatically: after generation, title, SEO fields, excerpt, body and FAQ are scanned for percentages, amounts (€, k€, \$), « x fois » / « 3x » and « selon une étude / d'après un rapport ». If found, **one retry** with the offending figures quoted; if the second draft still has any, **the article is rejected** (error, nothing published, nothing saved). |

| `src/lib/article-attempts.js`, `article-attempts-db.js` (new), `src/db/schema.js` | **Attempt limit: 3 per rolling 24 h, rejections included.** Every call that reaches the model is recorded in the new table `article_generation_attempts` **before** Mistral is called, so a rejected or crashed attempt counts too. `lastAttemptAt` is the most recent row (returned by the route). A refused call is not recorded and does not call Mistral. Worst case: 3 attempts × 2 model calls (1 + the figure retry) = 6 Mistral calls per 24 h. Skips for the weekly cap or an empty target list do not count as attempts. |
| `src/lib/article-cron.js` (new), `route.js` | **The cron's decisions are now in a testable module** (the route only checks the secret, wires the real database and Mistral in, and reads `?dryRun=1`). **`?dryRun=1`**: after the same authentication, runs the checks (weekly cap, target, attempt limit) **read-only** and answers what a real call would do (`wouldGenerate`, the keyword and service it would use, `attemptsInWindow`, `attemptsLeft`, `lastAttemptAt`, `nextAllowedAt`). It never calls Mistral, never publishes, never records an attempt, and never creates a settings row. |
| `docs/article-attempts-table.sql`, `scripts/migrate-attempts-table.mjs` (new) | The `CREATE TABLE IF NOT EXISTS` for that table (exact SQL for the Neon console; the script is the same thing with a dry run by default). **Not run on production** (to be run by the site owner). |

**If the table does not exist yet:** the route **fails cleanly**: HTTP **503** with the message « Table article_generation_attempts absente : exécuter docs/article-attempts-table.sql », and **Mistral is never called** (checked: 10 consecutive calls = 10 × 503, 0 model calls). There is deliberately no in-memory fallback: a limit that resets on every restart is not a limit. Any other database error on the attempts store also stops the call before Mistral (HTTP 500). Consequence: **until the table is created, the automatic generation is paused** (the rest of the site is unaffected: nothing else reads this table).
### Checked

- Lint clean; build passes.
- Prompt and figure guard (script, all pass): the prompt no longer contains « plausibles » or « la plupart des entreprises » and contains the strict rule; the detector flags 11 kinds of figure claims in the body, a table cell, the title, SEO title, description, excerpt and FAQ question/answer, and does not flag « 3 modèles », « étape 2 », links or plain prose; with a **mocked Mistral**: a clean draft = 1 call and accepted; a dirty then clean draft = 2 calls, the retry prompt quotes the figure, accepted; two dirty drafts = exactly 2 calls and rejected.
- Script (33 checks): no target is an excluded keyword, no duplicates, no target contains service-page or plan wording (agence, externalisée, prix, comparatif, forfait…), every target is « comment / modèle / exemple / techniques »; the selection walks each target once and then returns `null`; a Mon/Wed/Fri scheduler publishes 1 article per week; an hourly scheduler over 60 days publishes 9 (about 1 per week), never two closer than 6 days 22 hours.
extAllowedAt; 200 more calls in the same minute record nothing; the window rolls (refused at 23 h 59, allowed at 24 h); 5 cron calls where every generation is rejected = 3 reach the model and 2 are skipped; an attempt is already recorded when the process crashes mid-generation; store errors fail closed.
- Attempt limit (scripts, all pass): attempts 1 to 3 allowed, the 4th refused with `lastAttemptAt` and `nextAllowedAt`; 200 more calls in the same minute record nothing; the window rolls (refused at 23 h 59, allowed at 24 h); 6 cron calls where every generation is rejected = 3 reach the model and 3 are skipped, nothing published; the attempt is recorded before the model call (order add, generate, publish) and even if the process crashes mid-generation; store errors and a missing table stop the call before Mistral.
- Cron decisions with fake dependencies that record every call (24 checks): **dryRun never calls generate, publish or add, in every case** (all clear, weekly cap, no target left, limit reached, table missing, no settings row); 25 dry runs consume no attempt and a real call right after is still allowed.
- The real route handler run through `tsx` without a database (14 checks): 401 without a secret, with a wrong secret, without the `Bearer ` prefix and **with `dryRun=1` but no secret** (authentication comes first), for GET and POST; `dryRun=1` and `dryRun=true` are understood, `dryRun=0` is a real call; **no outbound network request** in any case.
- **Years, legal references, official rates (current behaviour of the figure detector, pinned by tests):** « en 2026 », « depuis 2018 » and a year in a title are **not flagged** (ai-writer strips years from the title, SEO title and excerpt afterwards, never from the body); legal references (« article L.1234-1 », « article L. 34-5 du CPCE », « loi n° 2018-493 ») are **not flagged**; official rates (« TVA à 20 % », « TVA de 5,5 % ») **are flagged** as percentages (so is an unrelated « 42 % de charges patronales »). Decision pending: legal references are exactly what a model can invent (wrong article number) and nobody checks them before publication.
- **Not testable here:** the cron route itself (needs the database and Mistral).

### Things to know

- **Before calling `?dryRun=1` in production, check that T2 is the deployed version:** `curl.exe -I https://suzaliconseil.com/api/cron/generate-article` must show `x-cron-features: dry-run,attempt-cap,figure-guard` (the header is sent even on the 401, so no secret is needed). An older deployed version does not know `dryRun` and would ignore it and do a **real** generation. The header is absent until T2 is live.

- The new keywords are **not validated in Search Console** (the old ones were, but they were the service pages' own searches). Replace or add real ones in `src/lib/ai-writer.js` as data comes in.
- The admin setting « fréquence par semaine » is still displayed and saved, but it is not what limits publishing (the cap above is). A manual « Générer » in the admin is not limited, but it updates `lastRunAt`, so it uses up that week's automatic article.
- **Figures:** handled (see the prompt and safety-net rows above). A rejected article makes the cron answer with an error and leaves lastRunAt untouched, so the next scheduler call tries again with a fresh draft (one extra Mistral call or two per attempt). If rejections become frequent, check the logs line « chiffres non sourcés détectés ».
- The detector catches figure claims, not every vague quantifier (« la plupart », « souvent » are not flagged), and it cannot verify that a qualitative statement is true: articles are still not fact-checked.
- 3 existing articles may carry the old priority keywords as `targetKeyword`; they simply don't block the new targets.

## B4: `lastmod` for the static pages in sitemap.xml (2026-10-23), branch `seo/B4-lastmod`

**Live** (merged 2026-10-23 12:12, PR #6, `17fddce`; deployed about 20 minutes later). Checked on https://suzaliconseil.com/sitemap.xml: 37 URLs, 23 static pages dated 2026-10-22, and `/actualites` dated 2026-10-22T14:09:36.289Z (the newest article, as designed).

### Why

The rest of B4 was already satisfied on production (checked 2026-10-23: all 37 sitemap URLs answer 200, are self-canonical, indexable, not redirected; the legal notice is `noindex` and absent; no private area listed). The one gap: **only the 13 articles had a `<lastmod>`; the 24 static pages had none**, because there was no honest date to give them. A build date would have been worse than nothing (a date that changes without a content change teaches Google to ignore `lastmod` for the whole site).

### Changed

| File | Change |
|---|---|
| `src/lib/static-lastmod.js` (new) | Table route → date of the last **real** change of the page's visible content or metadata. All 24 pages are dated **2026-10-22**: that day B7/B8 gave every page a unique title and description, a visible breadcrumb and server-rendered structured data (home: new H1). The rule is written in the file: update by hand in the commit that changes a page; never the build date; no entry = no `lastmod`. |
| `src/lib/sitemap-entries.js` (new), `src/app/sitemap.js` | The sitemap is built by a pure function (testable without a database); `sitemap.js` only loads the articles. `/actualites` takes the date of the **newest published article** (the list changes with each publication) but never goes earlier than its static date. Merged articles stay out. If the database is down, the static pages are still returned, with their dates. |

### Checked

- Lint clean; build passes; the served `/sitemap.xml` is valid XML with 24 entries, all with `lastmod` 2026-10-22, all 24 URLs answer 200 (local production server, no database, so no article entries locally).
- 18 checks (script): every route has a date and no date is orphaned; all dates valid `YYYY-MM-DD`, none is today's date, none in the future; two calls give identical output (no clock involved); database down = 24 dated static entries; with articles, `/actualites` follows the newest article's `updatedAt`, articles keep `updatedAt` else `publishedAt`, merged slugs are excluded, an old article does not move `/actualites` back in time.
- **Not testable locally:** the article entries from the real database (they were already live and unchanged by this task).

### To do by hand

1. After deploy: Search Console → Sitemaps → resubmit `https://suzaliconseil.com/sitemap.xml` (or just let Google re-read it).
2. **Maintenance rule for the team:** when a static page's content really changes, update its date in `src/lib/static-lastmod.js` in the same commit.

## B3, B5, B6: verified already satisfied on production (2026-10-23)

No code change was needed: B2 and B7/B8 covered them. Checked with `curl` / a script on https://suzaliconseil.com (read-only):

| Task | Verified |
|---|---|
| **B3** canonical + redirect policy | `http`, `www` (http and https) and trailing-slash variants all reach the clean `https://suzaliconseil.com/...` URL in one hop; an uppercase path is a real 404 (no duplicate page); `?utm_source=...&page=2` and WordPress-style `/?s=test` both canonicalise to the clean URL; every page has an absolute self-referencing canonical (checked on the 24 static pages and the 13 articles on 2026-10-22) |
| **B5** `robots.txt` | allows `/`, links `https://suzaliconseil.com/sitemap.xml`, blocks `/api/`, `/admin/`, `/portal/`, `/private/`, keeps `/api/og` crawlable for social previews |
| **B6** real 404s + noindex | an unknown URL and an unknown article answer HTTP 404 (`noindex`, no canonical); `/admin/login` and `/portal/login` are `noindex`; `/admin` redirects to the login page; `/wp-admin`, `/wp-login.php`, `/xmlrpc.php` are 404 (no soft 404). There is no internal search page or filter that would need `noindex,follow` |

Remaining part of B4 (`lastmod` on the static pages): see the B4 section.

## Environment notes (2026-10-23)

Names only, never values (this repository is public).

- **No production key on the development machine** (owner's rule): the local `.env.local` holds no variable at all. In particular there is no production `DATABASE_URL` locally. The tests that need a database (B9 browser test, trial of the slug migration) use **only** the Neon `slug-test` URL, once the owner provides it.
- **Secrets rotation:** the owner rotates the production secrets in Dokploy (database, S3, Mistral, Gemini, cron, admin). Hosting settings are never touched by Claude.
- **`GEMINI_API_KEY` is unused:** no file in `src/` or `scripts/` reads it. To be removed from the environment later.
- **`MISTRAL_MODEL`:** when set, it overrides the code's default (`mistral-large-latest`) in `src/lib/ai-writer.js`. Left unchanged; the owner decides later.
- **Read by the code but not needed locally for now:** `SMTP_*`, `MAIL_FROM`, `MAIL_FROM_NAME`, `CONTACT_TO`, `LEADS_TO`, `CAREERS_TO`, `OPENAI_API_KEY`, `OPENAI_IMAGE_MODEL`, `SEO_AUDIT_BASE_URL`. (Without them the contact forms cannot send email and admin image generation does not work in a local run.)

## C1: long-form content for the 14 thin service pages (2026-10-23), branch `seo/C1-service-pages`

**Live, verified in production on 2026-10-23 (PR #7):** the 14 pages measure 1,268 to 2,133 words, each with one H1 and one `FAQPage`; the 26-page check and the price check pass. Two pre-existing issues seen on article pages, unrelated to C1 (meta description under 130 characters, edited in the admin): `agence-de-generation-de-leads-b2b-comment-bien-choisir` (117) and `agence-outbound-vs-inbound-quand-choisir` (105).

Decision of the owner (2026-10-23): work autonomously on SEO, in this order: (1) enrich the thin service pages to 1,200–2,000 useful words, (2) create the missing pages, (3) internal linking, (4) the rest of `CLAUDE.md` §6. This section covers point 1 and the first part of point 3.

### What was added

Every page keeps its existing hero and sections and gains, just above its closing call to action: method, use cases, how to measure, GDPR/compliance where relevant, a longer FAQ (with its `FAQPage` markup), related services and related articles. Writing rules: no figure that is not already published on the site, no client result, no competitor criticism, no price (prices stay on `/offres`); anything that is not a definition or a method stays qualitative.

| Page | Words before → after* | Internal links added (services / articles) |
|---|---|---|
| `/services/generation-leads-b2b` | 438 → 2,133 | 8 / 5 |
| `/services/digital/seo-acquisition` | 299 → 1,854 | 6 / 3 |
| `/services/teleprospection-b2b` | 426 → 1,729 | 7 / 4 |
| `/services/commercial` (hub) | 590 → 1,687 | 9 / 5 |
| `/services/prise-rendez-vous-b2b` | 419 → 1,491 | 6 / 3 |
| `/services/vente-marque-blanche` | 284 → 1,436 | 5 / 3 |
| `/services/campagnes-email-sms-b2b` | 327 → 1,393 | 5 / 3 |
| `/services/fichier-prospection-b2b` | 347 → 1,342 | 5 / 2 |
| `/services/digital/branding-identite` | 306 → 1,344 | 5 / 2 |
| `/services/digital/sites-web-ecommerce` | 335 → 1,299 | 5 / 2 |
| `/services/digital/developpement-automatisation` | 333 → 1,278 | 4 / 2 |
| `/services/digital/strategie-digitale` | 345 → 1,275 | 7 / 2 |
| `/services/digital` (hub) | 280 → 1,268 | 7 / 3 |
| `/services/qualification-leads-b2b` | 329 → 1,302 | 4 / 2 |

\* Visible words of the page body (header and footer excluded), measured on the rendered HTML. « Before » comes from the Phase 1 audit. `/services/outbound-marketing-b2b` (1,418) and `/services/prospection-commerciale-externalisee` (1,767) were already long enough and are unchanged.

### How it is built

| File | Role |
|---|---|
| `src/components/services/ServiceLongForm.jsx` (new) | Renders the long-form block with the site's own kit (`SectionHead`, `FaqList`, `LedgerList`). Server component: all text, links and the FAQ markup are in the HTML. Text can carry inline links. |
| `src/content/services/*.js` (new) | The French content, one module per page (`transactional-long-forms.js` for the three pages built on the shared template, `digital-long-forms.js` for the five digital pages). |
| `src/lib/internal-links.js` (new) | **One table** of service and article links used by the content. After the slug migration of existing articles, update the article slugs there (old URLs already redirect, so nothing breaks in the meantime). |
| Page components (10 files) | Accept `children` and render it above the closing call to action. |
| `src/components/services/TransactionalServicePage.jsx` | Reads the extra content of its page by path, merges the extra FAQ questions into the single `FAQPage` markup. |

### Unsourced statistics removed from existing text

The site's own text contained two statistics with no source; replaced with qualitative wording (rule: no unsourced figure):
- `/services/digital/seo-acquisition`: « 93 % des expériences en ligne commencent par un moteur de recherche » → « Pour un grand nombre d'acheteurs professionnels, la recherche en ligne est le point de départ d'un projet. »
- `/services/digital/sites-web-ecommerce`: « 53 % des visiteurs quittent un site qui met plus de 3 secondes à charger » → « Beaucoup de visiteurs quittent un site qui met trop de temps à s'afficher. »

### Checked (local production build)

- Lint identical to `main` (1 existing error, 157 warnings); build passes.
- On each of the 14 pages (script): between 1,189 and 2,133 words at first measure (two short pages were extended and re-measured above 1,200), exactly one H1, exactly one `FAQPage` JSON-LD whose questions are all visible, no figure-like claim in the visible text, and every internal link resolves (article links checked on production).
- Site-wide: the 24-page check (200, `lang="fr"`, one H1, self canonical, valid JSON-LD, unique title and description) and the price-versus-visible-text check both pass; the three « 150 € par RDV » pages are untouched.

### Still to do for the plan

- Point 2: create the two missing pages (« marketing B2B externalisé », « génération de leads Paris »).
- Point 3 (rest): each article links to its service page (`article-services.js` already does for 10 articles; the generated articles get theirs from their target); the service pages now link to 2–5 articles each.
- After deploy (manual): Search Console → resubmit the sitemap, request indexing of the 14 enriched pages.

## 2026-10-23 — C2: two new service pages (branch `seo/C2-new-service-pages`)

**Live, verified in production on 2026-10-23 (PR #8):** both pages return 200 with a self canonical, one H1, one `FAQPage`; `sitemap.xml` lists them (39 URLs) with `lastmod` 2026-10-23; the site-wide and price checks pass.

C3 (same day): the two live articles that still had generic service links (« comment bien choisir » and the externalised-prospection guide) now point to their own service pages in `article-services.js`; every live article is mapped.

| New page | Target search | Notes |
|---|---|---|
| `/services/marketing-b2b-externalise` | marketing B2B externalisé | Wider than « prospection externalisée » (positioning, outbound, content, SEO, automation), so it does not compete with the prospection page. |
| `/services/agence-generation-de-leads-paris` | agence de génération de leads Paris | Uses the postal address already published on the contact page (Paris 2e). No client, figure or office claim beyond that. |

- Both are built on the shared `TransactionalServicePage` template (`TRANSACTIONAL_SERVICES.marketing` / `.paris`, long-form text in `transactional-long-forms.js`); the template now accepts an optional parent breadcrumb and footnote.
- Each has one H1, one `FAQPage` (8 visible questions), `Service` + `BreadcrumbList` JSON-LD, a canonical URL, 1,300–1,400 words, and no figure or price in the text.
- Added to `sitemap.xml` (with `lastmod`), the services hub, the mega menu / footer data and `internal-links.js`; the Paris article now points to the Paris page first (`article-services.js`); `generation-leads-b2b` and `seo-acquisition` link to the new pages.
- `lastmod` of the 14 pages enriched in C1 (and `/services`) set to 2026-10-23, the real date they went live.
- Decision pending (owner): the existing article « Boostez vos ventes B2B… agence de génération de leads à Paris » targets the same search as the new Paris page. Nothing was redirected; the article keeps its URL and links to the page.

## 2026-10-29 — B14: final check (documentation only)

Added `SEO_REPORT.md` (production checks, redirect test, link depth, image audit, Lighthouse mobile measurement without changes, manual actions, pending decisions). CLAUDE.md: B12 and B14 ticked. No site change. The cleanup branch `seo/C4-claims-cleanup` is not live: it waits for the owner's approval after screenshots.


## 2026-10-29 — C4: unconfirmed promises removed, Paris article merged (PR #11)

Live, verified in production: the three old URLs of the article « Boostez vos ventes B2B… Paris » (suffixed slug, clean slug, /blog/ form) answer with a permanent redirect (308) in one hop to `/services/agence-generation-de-leads-paris` (200); the article left the sitemap (38 URLs) and the Actualités list. Pages rechecked: Paris, marque blanche, branding, automatisation (one H1, one FAQPage, 1,264 to 1,523 words); 26-page check and price check pass. Text and redirects only: no CSS, font, component or class changed (owner's condition: no change to design, typography or visual identity).

Still open: « Account manager dédié » remains in the offers catalogue (/offres, home, prospection externalisée) until the owner decides (QUESTIONS-METIER.md). Done in C5 below.

## 2026-10-29 — C5: « Account manager dédié » removed from the Growth Standard offer (PR #13)

Owner's rule: no dedicated account manager (QUESTIONS-METIER.md, question 1). One line removed from the Growth Standard features in `src/lib/offers-catalog.js`; the card appears on `/`, `/offres` and `/services/prospection-commerciale-externalisee`. No price, layout or style change; no redirect. Approved by the owner after before/after captures (`seo-reports/captures/C5/`, local folder).

Live, verified in production (merged 14:31, live by 14:36): the three pages answer 200 with one H1 and a self canonical, and contain no « account manager »; the rest of the card (« Reporting hebdomadaire »…) is unchanged; `/sitemap.xml` 200 (38 URLs), `/robots.txt` 200. « Account Manager » is still a job title on `/equipe` (a role, not an offer promise): left as is.

Nothing to do by hand.

## 2026-11-05 — Search Console: sitemap + indexing requests (no code change)

Done in Search Console (domain property `sc-domain:suzaliconseil.com`) with the owner's OK:

- **Sitemap:** submitted `https://suzaliconseil.com/sitemap.xml` (non-www). Read the same day: Success, 38 pages. The old `https://www.suzaliconseil.com/sitemap.xml` (submitted 29 Jul 2026, last read 1 Nov) is left in place.
- **Indexing requested** (all already « URL is on Google », re-crawl of the new content): `/services/outbound-marketing-b2b`, `/services/generation-leads-b2b`, `/services/prospection-commerciale-externalisee`, `/services/agence-generation-de-leads-paris` (requested twice by mistake, harmless), `/services/marketing-b2b-externalise`, `/services/teleprospection-b2b`, `/services/prise-rendez-vous-b2b`, `/services/commercial`, `/services/vente-marque-blanche`. Stopped there because of Google's daily limit (about 10 requests).
- **Still to request (next day):** `/services/qualification-leads-b2b`, `/services/fichier-prospection-b2b`, `/services/campagnes-email-sms-b2b`, `/services/digital`, `/services/digital/seo-acquisition`, `/services/digital/strategie-digitale`, `/services/digital/sites-web-ecommerce`, `/services/digital/branding-identite`, `/services/digital/developpement-automatisation`.

Baseline read the same day (23 Oct – 3 Nov vs 11 – 22 Oct): clicks 12 → 12, impressions 607 → 1,240, average position 49.3 → 61.6 (more impressions on new, deeper queries). Indexing report: 38 indexed, 215 not indexed (118 × 404, 44 × redirect, 18 × crawled not indexed, 10 × Google chose another canonical).

## 2026-11-05 — B9: FAQ editor for manual articles (PR #15)

Merged 2026-11-05 12:45 UTC, PR #15 (`76fc277`), owner's « OK en ligne ». The « new manual article » form in the admin gets a FAQ block (up to 8 question/answer rows, plain text, HTML stripped). Saved in the existing `posts.faq` column, the same one generated articles use, so the article page shows the FAQ and its `FAQPage` JSON-LD from the same data. No database migration, no env change.

Checked before the merge: build OK, 11 parser tests pass; the only lint error (`AgendaField.jsx`) was already on `main`. Not done: the browser test against a test database (no test database URL).

Production, about 30 minutes after the merge: `/`, `/actualites`, `/sitemap.xml`, `/robots.txt`, `/services/prospection-commerciale-externalisee` answer 200, `/admin` 307 to the login. The FAQ form sits behind the admin login, so it can't be seen from outside.

**To do by hand**
- Owner: open Admin → new manual article and check that the FAQ block is there (if not, the Dokploy deploy has not finished).
- Team (T3): paste the 4 content-plan articles from `seo-reports/articles/admin/*.txt` (local folder), FAQ included, then send me the URLs to check (FAQ visible + `FAQPage` JSON-LD) and request indexing in Search Console.

## 2026-11-05 — B10: SEO title counter in the admin (PR #17)

Owner's decision: keep the 42-character limit, because the article page adds « | Suzali Conseil » (17 characters) and 42 + 17 = 59 fits Google's ~60. Merged 2026-11-05 13:20 UTC, PR #17 (`2b99aea`). Under both « Titre SEO » fields of the admin (new manual article, and « Modifier les métadonnées SEO » on each article), a live counter shows `n / 42` and the full title length as Google shows it (`n + 17 / 60`), in amber at 42. Admin only, no public page changed. Checked before the merge: build OK, lint OK on the changed files. No local capture (the admin needs the database).

**To do by hand**
- Owner: after the deploy (about 25 minutes), check the counter under « Titre SEO » in the admin.

## 2026-11-05 — B11: measurement only, no change

Lighthouse 13.6 mobile (simulated throttling) on this machine: production home **95** (FCP/LCP about 1.3 s, TBT about 100 ms), local build 100 on `/` and `/services/generation-leads-b2b`. The earlier 65 came from a slower test machine (this one has benchmarkIndex 3,487, so these figures are optimistic). The rest of the first-screen JavaScript is React itself and the animation library (about 28 KiB unused). Removing it means rewriting the hero, button and booking animations: a visible change for a small gain, so nothing was changed. Reports in `seo-reports/lighthouse/B11/` (local folder).

## 2026-11-05 — R1: 301 for the real old pages in the Search Console 404 report (PR #18)

Search Console « Not found (404) » (118 URLs, read 2026-11-05): 114 are spam from an old WordPress hack (casino slugs, `/get…items`, `/shop/order/make_estimate.aspx`, `/pcmypage/`, `/en/`, `/5`) and are not redirected. The 4 real old Suzali pages now redirect (`next.config.mjs`):

| Old URL | New URL |
|---|---|
| `/actualites/maitriser-les-kpi-prospection-commerciale-pour-performer-en-b2b-mogylg33` | `/actualites/kpi-prospection-commerciale-mesurer-et-piloter-la-performance-mocznw1b` |
| `/actualites/content-marketing-b2b-strategies-gagnantes-pour-generer-des-leads-mottk8py` | `/services/marketing-b2b-externalise` |
| `/actualites/comment-optimiser-le-developpement-dapplications-pour-repondre-aux-besoins-des-entreprises` | `/services/digital/developpement-automatisation` |
| `/developpement-web` | `/services/digital/sites-web-ecommerce` |

Merged 13:36 UTC (`4489932`), live at 13:42 UTC (Dokploy took 6 minutes this time). Production: the 4 URLs end on their target in 200 (one hop; `/developpement-web/` two, slash first), spam URLs still 404, `/sitemap.xml` 200.

Other Search Console groups read the same day (no change needed): « Google chose a different canonical » (10) and most « Crawled, not indexed » are `www.` URLs, which now redirect; « Alternative page with proper canonical » (6) are old WordPress `?p=` / `?page_id=` URLs; « Blocked by robots.txt » (3) are `/api/og` images; « noindex » (3) are `/mentions-legales` (intended), `/?m=20250219` and `openreplay.suzaliconseil.com`.

**To do by hand**
- Search Console: request indexing of the 6 pages « Discovered, currently not indexed » (all 200 and in the sitemap): `/services/qualification-leads-b2b`, `/services/fichier-prospection-b2b`, `/services/campagnes-email-sms-b2b`, `/etudes-de-cas`, `/actualites/agence-de-generation-de-leads-b2b-comment-bien-choisir-mug25o6t`, `/actualites/le-fichier-prospection-b2b-cle-de-voute-de-votre-croissance-mlunw2ai`.
- Subdomains seen by Google (`app.`, `mailing.`, `openreplay.suzaliconseil.com`: login and admin pages): not in this repo; add `X-Robots-Tag: noindex` on those hosts (hosting setting, owner's call).

## 2026-11-05 — R2: 301 for two more old articles (PR #20)

Found in the Search Console « Crawled, not indexed » and « Duplicate without user-selected canonical » groups (404 on the site):

| Old URL | New URL |
|---|---|
| `/actualites/comment-lautomatisation-des-processus-transforme-votre-suivi-client-en-2023` | `/services/digital/developpement-automatisation` |
| `/actualites/comment-les-nouvelles-technologies-b2b-revolutionnent-le-monde-des-affaires-guide-pratique` | `/actualites/les-10-outils-numeriques-indispensables-pour-booster-la-performance-commerciale-de-votre-entreprise` |

Merged 13:51 UTC (`6dd9384`), live at 13:57 UTC. Production: both end on their target in 200 after one hop; R1's `/developpement-web`, `/` and `/sitemap.xml` unchanged. Tested locally on top of `main` with the 410 for spam URLs (PR #19, other session): no conflict.

Nothing to do by hand.

## 2026-11-05 — Spam 410: hacked-WordPress spam URLs answer « Gone » (PR #19)

Search Console « Not found (404) » listed 118 URLs on 2026-11-05; 110 of them are spam left by a past hack of the old WordPress site (casino, slots, bingo… at the root, and `/get…/…items` pages). They now answer **410 Gone** with `X-Robots-Tag: noindex`, so Google drops them faster. No redirect (redirecting spam would pass it to a real page), no visible change, nothing in the sitemap. Search Console: no manual action, no security issue.

| File | Change |
|---|---|
| `src/lib/spam-urls.js` (new) | `isSpamPath()`: `/get(i\|id\|idm)<digits>/<3 letters><digits><4 letters>items(.htm)`, or a single root segment containing a gambling word (casino, slot, bingo, rummy, gambl, blackjack, roulette, poker…) |
| `src/proxy.js` (new) | Next 16 proxy, `matcher` limited to `/get…` and single root segments; everything else passes through unchanged |

Live, verified in production (merged 14:49, serving 410 by 14:53): the 110 spam URLs from the report all end in **410** (addresses with a trailing slash first get the site's usual 308 that removes the slash); 38/38 sitemap URLs answer 200; `/robots.txt`, the Google verification file, `/api/og`, `/admin/login` 200; `/developpement-web` and `/category/…` redirects unchanged; unknown URLs (`/5`, `/en`, `/this-page-does-not-exist`) still 404.

Left as 404 on purpose (not clearly spam): `/5`, `/en/`, `/pcmypage/`, `/shop/order/make_estimate.aspx`.

Rule to remember: a future page at the root of the site whose address contains one of those gambling words would answer 410; put new pages under `/services/` or `/actualites/`.

Nothing to do by hand. The Search Console 404 report will shrink on its own as Google re-crawls those URLs (weeks).

## 2026-11-05 — T3: the 4 content-plan articles published, with FAQ

Published from the admin (« Article manuel », B9 FAQ block, « Publier immédiatement », AI cover image), with the owner's go-ahead. Text taken as is from `seo-reports/articles/admin/*.json`: before each submit, every form field was compared by SHA-256 with the source file (all identical). The owner confirmed the two Suzali sentences « téléprospecteurs en offshore » and « rendez-vous annulé remplacé » (prix, comparatif, forfait-ou-rdv). Suzali prices in the articles match `src/lib/offers-catalog.js`.

| Article | URL | `<title>` | Description | FAQPage |
|---|---|---|---|---|
| Prix d'une agence | `/actualites/prix-d-une-agence-de-prospection-b2b-combien-compter` | 53 | 141 | 5 |
| Vrai coût | `/actualites/internaliser-ou-externaliser-sa-prospection-le-vrai-cout` | 57 | 152 | 5 |
| Comparatif | `/actualites/agences-de-prospection-b2b-en-france-le-comparatif` | 56 | 153 | 5 |
| Forfait ou RDV | `/actualites/forfait-ou-paiement-au-rendez-vous-quel-modele-choisir` | 53 | 149 | 5 |

Production: 200, clean slug, self canonical, `index, follow`, one H1, `BlogPosting` + `BreadcrumbList` + `FAQPage`; listed on `/actualites`; every internal link in the 4 articles answers 200.

**Indexing requests (Search Console, 2026-11-05, owner's go-ahead):** `/actualites/prix-d-une-agence-de-prospection-b2b-combien-compter` → « Indexing requested, URL added to a priority crawl queue ». The next one (`…le-vrai-cout`) got « Quota exceeded »: the daily quota (about 10) was already used that morning by the service-page requests.

**2026-11-06 (URL inspection, about 12:30 UTC):** the 3 other articles (`…le-vrai-cout`, `…le-comparatif`, `…quel-modele-choisir`) are already **« URL is on Google »**: indexed overnight from the sitemap, no request needed. `/services/qualification-leads-b2b`: indexing request refused, « Quota exceeded » (quota apparently counted over a rolling 24 hours). `/services/fichier-prospection-b2b`, `/services/campagnes-email-sms-b2b`, `/etudes-de-cas`: still « URL is not on Google », not requested.

**To do by hand**
- Search Console, from **2026-11-07**: request indexing of `/services/qualification-leads-b2b`, `/services/fichier-prospection-b2b`, `/services/campagnes-email-sms-b2b`, `/etudes-de-cas`, then the rest of the 2026-11-05 list.
- Team: set the 4 articles to « Publié » in the content plan. T4 (links from old articles) is unblocked.

## 2026-11-05 — B4b: sitemap refreshed hourly (PR #22)

Found while checking T3: `src/app/sitemap.js` had no `revalidate`, so the sitemap was built once per deploy and articles published from the admin never entered it until the next deploy. Added `export const revalidate = 3600`. Merged 14:31 UTC (`8aeb584`), live at 14:35: `/sitemap.xml` 200, **42 URLs**, the 4 T3 articles included.

Nothing to do by hand.

## 2026-11-05/06 — B15: edit an article's text and FAQ from the admin (PR #23)

New page `/admin/articles/<id>` (excerpt, HTML content, FAQ, pre-filled; title and slug unchanged so no URL breaks), linked « Modifier le texte et la FAQ → » under each article in the admin list. Its save action checks the admin session server-side. Every admin edit (text, FAQ, SEO, publish toggle) now refreshes `/actualites/<slug>`, `/actualites` and `/sitemap.xml`: article pages were static, so admin edits only showed after a deploy (found when the B13 SEO title, saved on 2026-11-05, did not appear).

Merged 2026-11-05 15:10 UTC (`41bc0ab`) during a GitHub error (504): the commit reached `main` but no deploy started, and PR #23 still shows « open » (its content is in `main`; it can be closed). Deployed with B16 on 2026-11-06, live at 12:58 UTC: `/admin/articles/<id>` → 307 to `/admin/login` without session; the outbound/inbound article shows its new SEO title.

## 2026-11-06 — B16: admin session checked in every admin action (PR #24)

Admin server actions (delete, publish toggle, SEO, manual article, generation, settings, lead and contact status) relied only on the admin pages being protected; a server action can be called directly. Each now returns `{ ok: false, error: "Session expirée : reconnectez-vous." }` without an admin session. Tested on a local build: calling « delete article » directly without a session returns that error and runs nothing; admin pages still redirect to the login; public pages 200. Merged 12:54 UTC (`dd4e9b5`), live at 12:58 UTC.

Nothing to do by hand.

## 2026-11-05/06 — B13: « Outbound ou inbound » article (in progress)

Owner-approved draft (`seo-reports/B13-brouillon-outbound-vs-inbound.md`). SEO title and description changed in the admin on 2026-11-05, live since the 2026-11-06 deploy: « Outbound ou inbound en B2B : que choisir ? » (42; the draft's 46-character title exceeded the admin limit) and a 142-character description (was 105). Previous values: « Outbound vs Inbound B2B : quel levier » / « Découvrez les différences concrètes entre outbound et inbound B2B pour allouer votre budget efficacement. ». URL unchanged.

**Text and FAQ applied 2026-11-06 (about 13:15 UTC)** with the B15 form (`seo-reports/articles/admin/outbound-inbound.txt`; every field compared by SHA-256 with that file before saving). Additions to the approved draft, shown to the owner: one closing sentence carrying the 3 planned links, a new excerpt, and FAQ answer 2 reworded (FAQ answers are plain text, no link). The previous text (15,097 characters, with unsourced figures such as « 30 projets… 68 % ») is saved as the full live page in `seo-reports/backups/2026-11-06_outbound-vs-inbound_avant-B13.html` (local folder).

Production right after saving: 200, `<title>` « Outbound ou inbound en B2B : que choisir ? | Suzali Conseil », self canonical, `index, follow`, one H1, `BlogPosting` + `BreadcrumbList` + **`FAQPage` (3 questions)**; new text present, old text and figures gone; links to `/services/outbound-marketing-b2b`, `/services/digital/seo-acquisition`, `/services/marketing-b2b-externalise` present (all 200). The page refreshed immediately, which also confirms B15's revalidation in production.

**Re-indexing requested** (Search Console, 2026-11-06 about 13:00 UTC): « Indexing requested, URL added to a priority crawl queue ».

Nothing to do by hand.

## 2026-11-06 — Search Console: indexing requests for the service pages

The quota opened again early afternoon. Requested, each answered « Indexing requested, URL added to a priority crawl queue »: `/services/qualification-leads-b2b`, `/services/fichier-prospection-b2b`, `/services/campagnes-email-sms-b2b`, `/etudes-de-cas` (all four were « URL is not on Google » that morning), plus the outbound/inbound article above. With the 4 T3 articles already indexed, every page from the 2026-11-05 « Discovered, not indexed » list has now been requested.

Then the rest of the 2026-11-05 list, also each « added to a priority crawl queue » (already indexed, re-crawl of the content enriched in C1): `/services/digital`, `/services/digital/seo-acquisition`, `/services/digital/strategie-digitale`, `/services/digital/sites-web-ecommerce`, `/services/digital/branding-identite`, `/services/digital/developpement-automatisation`. 11 requests on 2026-11-06, no quota refusal. **Every page of the site has now been requested at least once since 2026-11-05.**

**To do by hand:** check the Search Console « Pages » report around 2026-11-13 (indexed pages, and the 404 count shrinking with the 410s).

## 2026-11-06 — Team photos on `/equipe` (PR #25)

New section « L'équipe au travail » under the hero of `/equipe`: 7 portrait photos supplied by the owner (`public/images/equipe/equipe-1…7.webp`, served by `next/image`, AVIF in production), French alt texts describing the scene without names, lazy-loaded, and a caption cell (« Une équipe dédiée à vos rendez-vous. »). Owner saw it on a local build (desktop and mobile) before the OK. Captures in `seo-reports/captures/team-photos/` (local folder). Merged 2026-11-06 (`e21418b`), live at 16:51 local time: `/equipe` 200, one H1, 7 alts; the 7 images 200.

**To do by hand**
- Owner: keep the consent of each person shown on the photos.
- Names and roles under the photos can be added later if the owner provides them.

## 2026-11-06 — Phase 7: cold emailing article rewritten, MQL/SQL article published

Both owner-approved (drafts `seo-reports/P7-brouillon-cold-emailing.md` and `seo-reports/P7-brouillon-mql-sql.md`), applied from the admin in the owner's Chrome session. Before each save, every field was compared by SHA-256 with `seo-reports/articles/admin/cold-emailing.txt` and `mql-sql.txt` (all identical).

**Cold emailing (rewrite, URL unchanged)** — `/actualites/cold-emailing-b2b-france-la-strategie-gagnante-en-2024-mlywxerj`: new text (7-step method, email template, follow-ups, deliverability, CNIL rules), new excerpt, FAQ of 3 questions. SEO title and description unchanged. Removed: the inaccurate sentence on generic addresses, the list of named software vendors. Previous page saved in `seo-reports/backups/2026-11-06_cold-emailing_avant-P7.html` (local folder). Production: 200, self canonical, `index, follow`, one H1, `BlogPosting` + `FAQPage` (3 questions), new text present, old text gone. The visible H1 still says « …en 2024 » (the B15 form does not change the title).

**MQL/SQL (new article)** — `/actualites/lead-qualifie-mql-sql-definitions-et-criteres-de-qualification`, « Article manuel », Commercial, AI cover image, published immediately. `<title>` « MQL, SQL, lead qualifié : les définitions | Suzali Conseil » (58), description 151, self canonical, `index, follow`, one H1, `BlogPosting` + `FAQPage` (3 questions), listed on `/actualites`, created once.

**To do by hand**
- Search Console: request indexing of both URLs.
- Optional follow-up (owner's OK): remove « comment qualifier un lead b2b avec la méthode bant » from the `src/lib/ai-writer.js` pool, which is close to the new MQL/SQL article.

## 2026-11-06 — P7b: edit an article's visible title from the admin (PR #28)

The admin page `/admin/articles/<id>` now has a « Titre de l'article (H1) » field (required, 120 characters max). Saving changes the title only; the slug never changes, so no URL breaks. Merged (`05d5af5`) and live by 20:14 local time.

Used right away on the cold emailing article: H1 « Cold Emailing B2B France : La Stratégie Gagnante en 2024 » → « Cold emailing B2B en France : la méthode pas à pas ». Text, excerpt and FAQ checked by SHA-256 as unchanged before saving. Production: 200, H1 and `BlogPosting` headline updated, no « 2024 » left in the H1, `<title>` (SEO title) and canonical unchanged, FAQ 3 questions, `/actualites` shows the new title.

Nothing to do by hand.

## 2026-11-07 — `/equipe`: developer photo as a large tile (PR #30)

Owner's request: the developer photo (`public/images/equipe/developpeur.webp`, 3:4 WebP, 119 KiB) opens the « L'équipe au travail » grid as a 2×2 tile labelled « Pôle Technologie · Développement », ahead of the 7 sales-team photos and the caption tile (3 full rows on desktop; full width on mobile). Intro sentence now « Développement, appels, emails, qualification des leads : une journée de l'équipe, à son poste. ». No name; the alt text describes the scene only. Approved after before/after captures and a local preview (`seo-reports/captures/equipe/`, local folder).

Merged 14:31 UTC (`3c286d5`), live at 14:36 UTC: `/equipe` 200, one H1, the photo and its label in the HTML, `/images/equipe/developpeur.webp` 200.

Nothing to do by hand.
