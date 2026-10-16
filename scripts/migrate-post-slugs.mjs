// Retire le suffixe aléatoire (-mojth973) et les années en dur des slugs
// d'articles déjà en base, et alimente les redirections 301 correspondantes.
//
//   node scripts/migrate-post-slugs.mjs            -> DRY RUN (n'écrit rien)
//   node scripts/migrate-post-slugs.mjs --apply    -> sauvegarde, met à jour la base,
//                                                     écrit src/data/slug-redirects.json
//   node scripts/migrate-post-slugs.mjs --rollback backups/slugs-before-<date>.json [--apply]
//                                                  -> remet les anciens slugs (dry run sans --apply)
//
// Procédure complète (sauvegarde, test sur une copie) : docs/slug-migration-runbook.md
//
// Après --apply : committer src/data/slug-redirects.json et REDÉPLOYER, sinon les
// anciennes URLs renvoient 404 (next.config.mjs lit ce fichier au build).
import { config } from "dotenv";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import postgres from "postgres";
import { cleanSlug } from "../src/lib/post-slug.js";

config({ path: ".env.local" });

const APPLY = process.argv.includes("--apply");
const REDIRECTS_FILE = new URL("../src/data/slug-redirects.json", import.meta.url);

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required (.env.local).");
}

// Montre sur quelle base on va travailler (hôte seulement, jamais les identifiants).
// Une variable DATABASE_URL déjà définie dans le shell prime sur .env.local : c'est
// ainsi qu'on pointe le script vers une COPIE de la base pour les tests.
console.log(`Base cible : ${new URL(process.env.DATABASE_URL).host}`);
console.log(APPLY ? "Mode : --apply (écrit)\n" : "Mode : dry run (n'écrit rien)\n");

const sql = postgres(process.env.DATABASE_URL, { max: 1 });

const rollbackIndex = process.argv.indexOf("--rollback");

try {
  if (rollbackIndex !== -1) {
    // Remet les slugs d'avant (fichier backups/slugs-before-*.json), par id.
    const file = process.argv[rollbackIndex + 1];
    if (!file) throw new Error("Usage : --rollback backups/slugs-before-<date>.json [--apply]");
    const saved = JSON.parse(readFileSync(file, "utf8"));
    const current = await sql`SELECT id, slug FROM posts`;
    const currentById = new Map(current.map((r) => [r.id, r.slug]));
    const toRestore = saved.filter((s) => currentById.has(s.id) && currentById.get(s.id) !== s.slug);
    console.log(`${toRestore.length} slug(s) à restaurer sur ${saved.length} sauvegardés.\n`);
    for (const s of toRestore) console.log(`${currentById.get(s.id)}\n  -> ${s.slug}`);
    if (!APPLY) {
      console.log("\nDRY RUN : rien n'a été écrit. Relancer avec --apply pour restaurer.");
    } else if (toRestore.length > 0) {
      await sql.begin(async (tx) => {
        for (const s of toRestore) {
          await tx`UPDATE posts SET slug = ${s.slug}, updated_at = now() WHERE id = ${s.id}`;
        }
      });
      console.log("\nSlugs restaurés. Remettre src/data/slug-redirects.json à {} (git checkout) et redéployer.");
    }
    process.exit(0);
  }

  const rows = await sql`
    SELECT id, slug, title, published_at FROM posts ORDER BY created_at
  `;
  const taken = new Set(rows.map((r) => r.slug));
  const plan = [];

  for (const row of rows) {
    let next = cleanSlug(row.slug);
    if (!next || next === row.slug) continue;
    // Collision avec un slug existant ou déjà prévu : -2, -3...
    if (taken.has(next)) {
      let n = 2;
      while (taken.has(`${next}-${n}`)) n += 1;
      next = `${next}-${n}`;
    }
    taken.add(next);
    plan.push({ id: row.id, from: row.slug, to: next, published: !!row.published_at, title: row.title });
  }

  console.log(`${rows.length} articles en base, ${plan.length} slug(s) à modifier.\n`);
  for (const p of plan) {
    console.log(`${p.published ? "PUBLIÉ    " : "brouillon "} ${p.from}\n           -> ${p.to}`);
  }
  if (plan.length === 0) process.exit(0);

  if (!APPLY) {
    console.log("\nDRY RUN : rien n'a été écrit. Relire la liste, puis relancer avec --apply.");
    process.exit(0);
  }

  // 1. Sauvegarde de l'état actuel (id + slug de TOUS les articles).
  const backupDir = new URL("../backups/", import.meta.url);
  mkdirSync(backupDir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const backupFile = new URL(`slugs-before-${stamp}.json`, backupDir);
  writeFileSync(
    backupFile,
    JSON.stringify(rows.map(({ id, slug, title, published_at }) => ({ id, slug, title, published_at })), null, 2),
  );
  console.log(`\nSauvegarde : ${backupFile.pathname}`);

  // 2. Mise à jour en une seule transaction : tout ou rien.
  await sql.begin(async (tx) => {
    for (const p of plan) {
      await tx`UPDATE posts SET slug = ${p.to}, updated_at = now() WHERE id = ${p.id} AND slug = ${p.from}`;
    }
  });

  // 3. Table de redirections (ancien slug -> nouveau), fusionnée avec l'existante.
  const redirects = existsSync(REDIRECTS_FILE) ? JSON.parse(readFileSync(REDIRECTS_FILE, "utf8")) : {};
  for (const p of plan) {
    // Évite les chaînes : si A -> B existait et B -> C arrive, A -> C.
    for (const [old, target] of Object.entries(redirects)) {
      if (target === p.from) redirects[old] = p.to;
    }
    if (p.published) redirects[p.from] = p.to;
  }
  writeFileSync(REDIRECTS_FILE, JSON.stringify(redirects, null, 2) + "\n");
  console.log(`${plan.length} slug(s) mis à jour. Redirections écrites dans src/data/slug-redirects.json.`);
  console.log("À FAIRE : committer ce fichier et redéployer, puis soumettre les nouvelles URLs dans la Search Console.");
} finally {
  await sql.end();
}
