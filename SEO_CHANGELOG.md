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

**Not live yet** (waiting for Odo's OK).

### Why

The generator's three priority targets (« agence de génération de leads b2b », « prospection commerciale externalisée », « agence outbound ») are exactly the searches held by the service pages: it created the cannibalisation. Its secondary pool also contained other service-page searches and « combien coûte la génération de leads b2b » (reserved for the team's price article). And the « 3 articles per week » setting was never read by anything.

### Changed

| File | Change |
|---|---|
| `src/lib/ai-writer.js` | **Priority targets are now 4 practical topics**, each with a service link: « modèle de script de téléprospection b2b », « modèle d'email de prospection b2b », « comment prospecter sur linkedin en b2b », « comment qualifier un lead b2b avec la méthode bant ». **Secondary pool: 12 practical topics** (« comment… », « exemple de… », « techniques de… »). **15 keywords removed** and listed in `EXCLUDED_KEYWORDS` with the reason (service-page searches, the team's price article, a « meilleur outil » ranking that would need unverifiable claims about competitors, topics already covered by existing articles). |
| `src/lib/ai-writer.js` | `pickNextTarget` now returns `null` when every target already has an article, instead of picking a random used one (which would have written duplicate articles once the pool ran out). |
| `src/lib/article-cadence.js` (new) | **1 automatic article per week maximum**, enforced in code: minimum gap 7 days minus 2 hours (the 2 hours absorb the delay between the trigger and `lastRunAt`). Independent of how often the scheduler calls the endpoint. |
| `src/app/api/cron/generate-article/route.js` | Skips (HTTP 200, `skipped: true`, with the reason and `nextAllowedAt`) when the cadence rule or the target list says so. |

### Checked

- Lint clean; build passes.
- Script (33 checks): no target is an excluded keyword, no duplicates, no target contains service-page or plan wording (agence, externalisée, prix, comparatif, forfait…), every target is « comment / modèle / exemple / techniques »; the selection walks each target once and then returns `null`; a Mon/Wed/Fri scheduler publishes 1 article per week; an hourly scheduler over 60 days publishes 9 (about 1 per week), never two closer than 6 days 22 hours.
- **Not testable here:** the cron route itself (needs the database and Mistral).

### Things to know

- The new keywords are **not validated in Search Console** (the old ones were, but they were the service pages' own searches). Replace or add real ones in `src/lib/ai-writer.js` as data comes in.
- The admin setting « fréquence par semaine » is still displayed and saved, but it is not what limits publishing (the cap above is). A manual « Générer » in the admin is not limited, but it updates `lastRunAt`, so it uses up that week's automatic article.
- **Risk to review, not changed here:** the generation prompt asks for « chiffres ou fourchettes plausibles ». Articles are published automatically, so a model-invented figure can go live. Suggest asking the model not to invent figures (a prompt change, separate task).
- 3 existing articles may carry the old priority keywords as `targetKeyword`; they simply don't block the new targets.
