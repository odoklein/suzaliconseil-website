# SEO changelog

## B1: Repo audit (2026-10-16, corrected 2026-10-22), branch `seo/B1-audit`

- Added `SEO_PLAN_CLAUDE_CODE.md` (the plan), `SEO_AUDIT.md` (findings) and `CLAUDE.md` (working rules). **No site code changed.**
- Correction (2026-10-22): the first audit reported a possible `www` redirect loop. It was a faulty test. `www` to non-`www` is a single 301 that keeps path and query.
- Done by hand earlier (outside the plan): Google Search Console verification file `public/google2f092a151e9f95b5.html`, live on production.

**Left for the team to do by hand**
- Optional: pin the Cloudflare `www` to non-`www` redirect rule so it doesn't depend on an unseen setting (exact rule in the B1 report).

## B2: Stable article slugs + redirects (2026-10-16), branch `seo/B2-slugs`

Decisions applied: keep the existing `/services/...` URLs (no flat URLs, no service-page moves); slug rewrite on existing articles **prepared but NOT run** (needs a separate OK, see `docs/slug-migration-runbook.md`).

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
