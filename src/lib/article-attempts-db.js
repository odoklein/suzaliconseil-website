import { gt } from "drizzle-orm";
import { articleGenerationAttempts } from "../db/schema.js";
import { db } from "./db.js";

/*
 * Store des essais de génération (voir article-attempts.js).
 *
 * Table : article_generation_attempts (créée par scripts/migrate-attempts-table.mjs).
 * Une nouvelle table plutôt que de nouvelles colonnes sur content_generator_settings :
 * l'admin et le cron lisent cette table en entier, une colonne absente les ferait tous
 * planter ; une table absente ne gêne personne.
 *
 * Tant que la table n'existe pas (déploiement avant migration), on retombe sur une
 * liste en MÉMOIRE du processus : le plafond s'applique alors tant que le serveur
 * tourne, mais un redémarrage le remet à zéro. Toute AUTRE erreur de base, elle,
 * remonte : on n'appelle pas Mistral sans pouvoir enregistrer l'essai.
 */
const memory = [];
let warned = false;

export const isMissingTable = (error) => {
  const text = `${error?.code ?? ""} ${error?.message ?? ""} ${error?.cause?.message ?? ""}`;
  return /42P01|does not exist|n'existe pas/i.test(text);
};

function warnOnce() {
  if (warned) return;
  warned = true;
  console.warn(
    "article-attempts: table article_generation_attempts absente, plafond en mémoire seulement (lancer scripts/migrate-attempts-table.mjs).",
  );
}

export const dbAttemptStore = {
  async list(since) {
    try {
      const rows = await db
        .select({ attemptedAt: articleGenerationAttempts.attemptedAt })
        .from(articleGenerationAttempts)
        .where(gt(articleGenerationAttempts.attemptedAt, since));
      return rows.map((row) => row.attemptedAt);
    } catch (error) {
      if (!isMissingTable(error)) throw error;
      warnOnce();
      return memory.filter((at) => at > since);
    }
  },
  async add(at) {
    try {
      await db.insert(articleGenerationAttempts).values({ attemptedAt: at });
    } catch (error) {
      if (!isMissingTable(error)) throw error;
      warnOnce();
      memory.push(at);
    }
  },
};
