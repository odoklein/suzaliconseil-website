# Slug migration runbook (B2)

Removes the random suffix (`-mojth973`) and hard-coded years from the slugs of existing articles, and adds a 301 from each old URL. **It writes to the production database, so nothing here is run without an explicit OK.**

Script: `scripts/migrate-post-slugs.mjs`. Dry run by default. Next.js sends permanent redirects as **HTTP 308**, which Google treats like a 301.

## 1. What will change (expected result)

From the 13 articles in the live sitemap (2026-10-22). The real list comes from the database: the dry run prints it, and it must match this table before anything is applied. Drafts and articles outside the sitemap can only appear in that dry run.

| # | Old URL (`/actualites/...`) | New URL (`/actualites/...`) |
|--:|---|---|
| 1 | `prospection-commerciale-externalisee-guide-complet-2024-mug26uk3` | `prospection-commerciale-externalisee-guide-complet` |
| 2 | `pourquoi-externaliser-sa-prospection-commerciale-b2b-mojth973` | `pourquoi-externaliser-sa-prospection-commerciale-b2b` |
| 3 | `prospection-commerciale-pme-les-strategies-incontournables-mmix31os` | `prospection-commerciale-pme-les-strategies-incontournables` |
| 4 | `boostez-vos-ventes-b2b-agence-generation-leads-paris-expert-mm4molzg` | `boostez-vos-ventes-b2b-agence-generation-leads-paris-expert` |
| 5 | `cold-emailing-b2b-france-la-strategie-gagnante-en-2024-mlywxerj` | `cold-emailing-b2b-france-la-strategie-gagnante` |
| 6 | `le-fichier-prospection-b2b-cle-de-voute-de-votre-croissance-mlunw2ai` | `le-fichier-prospection-b2b-cle-de-voute-de-votre-croissance` |
| 7 | `generation-leads-b2b-industrie-strategies-d-impact-mlrokvm8` | `generation-leads-b2b-industrie-strategies-d-impact` |
| 8 | `kpi-prospection-commerciale-mesurer-et-piloter-la-performance-mocznw1b` | `kpi-prospection-commerciale-mesurer-et-piloter-la-performance` |
| 9 | `strategie-outbound-b2b-reussir-sa-prospection-commerciale-momocs1c` | `strategie-outbound-b2b-reussir-sa-prospection-commerciale` |
| 10 | `agence-de-generation-de-leads-b2b-comment-bien-choisir-mug25o6t` | `agence-de-generation-de-leads-b2b-comment-bien-choisir` |
| 11 | `agence-outbound-vs-inbound-quand-choisir-mug27mpp` | `agence-outbound-vs-inbound-quand-choisir` |

Unchanged (no suffix): `les-10-outils-numeriques-indispensables-pour-booster-la-performance-commerciale-de-votre-entreprise`, `5-strategies-efficaces-pour-automatiser-vos-workflows-de-prospection`.

### Existing legacy redirects (`next.config.mjs`), and where they point after the migration

They are re-pointed automatically at build time, so a visitor on an old WordPress-era URL still goes **straight to the final slug in one hop**, not through the intermediate suffixed slug.

| Legacy URL (`/actualites/...`) | Today | After migration |
|---|---|---|
| `kpi-prospection-commerciale-mesurez-l-efficacite-b2b-mo2n9l4c` | `...mesurer-et-piloter-la-performance-mocznw1b` | `kpi-prospection-commerciale-mesurer-et-piloter-la-performance` |
| `les-kpi-prospection-commerciale-essentiels-pour-le-b2b-mmomuh03` | same as above | same as above |
| `externaliser-sa-prospection-commerciale-b2b-croissance-assuree-mn2x90bz` | `pourquoi-externaliser-...-b2b-mojth973` | `pourquoi-externaliser-sa-prospection-commerciale-b2b` |
| `pourquoi-externaliser-sa-prospection-commerciale-b2b-le-guide-complet-mmymxhud` | same as above | same as above |
| `prospection-commerciale-pme-methodes-et-leviers-performants-moqyogfj` | `...incontournables-mmix31os` | `prospection-commerciale-pme-les-strategies-incontournables` |
| `5-strategies-efficaces-pour-automatiser-vos-workflows-de-prospection-2` | `5-strategies-...-prospection` | unchanged |
| `combien-coute-la-generation-de-leads-b2b-le-guide-suzali-mn8n0mlp` | `/offres` | `/offres` (**to repoint to the price article once it is published**, decided in T1) |
| `comment-generer-des-leads-b2b-en-france-le-guide-expert-mmlryr4j` | `/services/generation-leads-b2b` | unchanged |
| `agence-digitale-b2b-france-levier-de-croissance-strategique-mnfs7ocq` | `/services/digital` | unchanged |
| `boostez-votre-croissance-agence-prospection-pour-startup-saas-mncxbxlw` | `/services/commercial` | unchanged |

Other rules added in B2 (independent of the migration): `/category/*` and `/tag/*` to `/actualites`, `/author/*` to `/equipe`, `/feed` to `/actualites`. `/blog/<slug>` still goes to `/actualites/<slug>`; an old suffixed `/blog/...` URL therefore takes two hops (legacy, unchanged).

### Effect of the "fold into the price / true-cost articles" decision (T1)

Rows 1 and 2 (the "guide complet" and "Pourquoi externaliser") are later redirected to the "vrai coût" article **once it is live**. That adds one rule for their *new* slugs; the build collapses the chain so the old suffixed URLs also go straight to the new article. No extra step is needed now.

## 2. Back up the database (before anything)

The database is Neon. Do both, they take two minutes.

1. **Neon branch as a snapshot (instant, free copy-on-write).** Neon console → project → **Branches** → *Create branch* from `main` (or the production branch), name it `backup-slugs-2026-MM-JJ`. Keep it until the migration has been verified for a week.
2. **A `posts` dump.** Use the **direct** (non-pooled) connection string from the console and a PostgreSQL client 16 or 17:
   ```
   pg_dump "<connection string>" --table=posts --no-owner --file=posts-backup-2026-MM-JJ.sql
   ```
   Keep the file outside the repo (it contains the article content).
3. The script also writes `backups/slugs-before-<timestamp>.json` (id, slug, title, publication date of **every** article) before it changes anything. `backups/` is git-ignored.

## 3. Test on a copy first

1. Neon console → *Create branch* from `main`, name it `slug-test`. It is an independent copy; changing it does not touch production. Copy its connection string.
2. In PowerShell, set the variable **in the shell** (it overrides `.env.local`, which keeps pointing at production, so you cannot hit production by accident). The script prints the target host first: **check it is the `slug-test` host.**
   ```
   $env:DATABASE_URL = "<slug-test connection string>"
   node scripts/migrate-post-slugs.mjs
   ```
   Compare the list with the table in section 1 (they must match).
3. Apply on the copy and check the result:
   ```
   node scripts/migrate-post-slugs.mjs --apply
   npm run build
   npm run start
   ```
   Then in another terminal:
   ```
   curl.exe -I http://localhost:3000/actualites/pourquoi-externaliser-sa-prospection-commerciale-b2b-mojth973   # 308, Location: /actualites/pourquoi-externaliser-sa-prospection-commerciale-b2b
   curl.exe -I http://localhost:3000/actualites/pourquoi-externaliser-sa-prospection-commerciale-b2b            # 200
   curl.exe -s http://localhost:3000/sitemap.xml                                                              # only new slugs
   ```
4. Test the way back on the copy: `node scripts/migrate-post-slugs.mjs --rollback backups/slugs-before-<timestamp>.json` (dry run), then add `--apply`. Slugs must return to their old values.
5. Reset the redirect map after testing: `git checkout src/data/slug-redirects.json`. Delete the `slug-test` branch in Neon. Close the PowerShell window (or `Remove-Item Env:DATABASE_URL`).

## 4. Run on production (only after a separate OK)

1. Backup (section 2) done, test on the copy (section 3) passed.
2. Make sure `DATABASE_URL` points at production (the printed host must be the production one), then `node scripts/migrate-post-slugs.mjs`, read the list, then `--apply`.
3. **Commit `src/data/slug-redirects.json` and redeploy immediately.** Between the database change and the deploy, the old URLs return 404 (a few minutes). Do both steps back to back.
4. Check in production: old URL gives 308 to the new one, new URL gives 200, `/sitemap.xml` lists the new slugs, an article shows its "Services associés" block.
5. Search Console: request indexing for the new URLs; keep the sitemap submitted.

## 5. Rollback

- Before deploying: `node scripts/migrate-post-slugs.mjs --rollback backups/slugs-before-<timestamp>.json --apply`, then `git checkout src/data/slug-redirects.json`.
- After deploying: same command, then commit the emptied `src/data/slug-redirects.json` and redeploy. Fallback: restore the `backup-slugs-...` Neon branch.
