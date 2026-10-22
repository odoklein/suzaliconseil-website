-- Table du plafond d'essais de génération d'articles (3 par 24 h, rejets compris).
-- À exécuter UNE FOIS sur la base de production (console Neon > SQL Editor).
-- Idempotent : peut être relancé sans effet. N'agit sur aucune table existante.
-- Voir src/lib/article-attempts.js. Équivalent : node scripts/migrate-attempts-table.mjs --apply

CREATE TABLE IF NOT EXISTS article_generation_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  attempted_at timestamp NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS article_generation_attempts_attempted_at_idx
  ON article_generation_attempts (attempted_at);

-- Vérification (doit renvoyer 0 la première fois) :
-- SELECT count(*) FROM article_generation_attempts;

-- Retour arrière, si besoin (supprime uniquement ce journal) :
-- DROP TABLE IF EXISTS article_generation_attempts;
