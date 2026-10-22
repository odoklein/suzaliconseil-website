// Crée la table article_generation_attempts (journal des essais de génération d'articles,
// plafond de 3 par 24 h : voir src/lib/article-attempts.js).
//
//   node scripts/migrate-attempts-table.mjs            -> DRY RUN : affiche le SQL, n'écrit rien
//   node scripts/migrate-attempts-table.mjs --apply    -> crée la table
//
// Idempotent (IF NOT EXISTS) et sans effet sur les tables existantes. Sans cette table, la route
// cron répond 503 et n'appelle JAMAIS Mistral (échec propre, voir src/lib/article-cron.js).
// Le même SQL est dans docs/article-attempts-table.sql (à coller dans la console Neon).
// Le script affiche l'hôte de la base visée : à vérifier avant --apply (une DATABASE_URL du
// shell prime sur .env.local).
import { config } from "dotenv";
import postgres from "postgres";

config({ path: ".env.local" });

const APPLY = process.argv.includes("--apply");
if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required (.env.local).");

const STATEMENTS = [
  `CREATE TABLE IF NOT EXISTS article_generation_attempts (
     id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
     attempted_at timestamp NOT NULL DEFAULT now()
   )`,
  `CREATE INDEX IF NOT EXISTS article_generation_attempts_attempted_at_idx
     ON article_generation_attempts (attempted_at)`,
];

console.log(`Base cible : ${new URL(process.env.DATABASE_URL).host}`);
console.log(APPLY ? "Mode : --apply (écrit)\n" : "Mode : dry run (n'écrit rien)\n");
for (const statement of STATEMENTS) console.log(statement.replace(/\s+\n/g, "\n") + ";\n");

if (!APPLY) {
  console.log("DRY RUN : rien n'a été écrit. Vérifier l'hôte ci-dessus, puis relancer avec --apply.");
  process.exit(0);
}

const sql = postgres(process.env.DATABASE_URL, { max: 1 });
try {
  await sql.begin(async (tx) => {
    for (const statement of STATEMENTS) await tx.unsafe(statement);
  });
  const [{ count }] = await sql`SELECT count(*)::int AS count FROM article_generation_attempts`;
  console.log(`Table prête (${count} essai(s) enregistré(s)).`);
} finally {
  await sql.end();
}
