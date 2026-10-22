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
