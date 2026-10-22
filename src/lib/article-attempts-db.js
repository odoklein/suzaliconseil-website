import { gt } from "drizzle-orm";
import { articleGenerationAttempts } from "../db/schema.js";
import { db } from "./db.js";

/*
 * Store des essais de génération (voir article-attempts.js).
 *
 * Table : article_generation_attempts, à créer avec le SQL de
 * docs/article-attempts-table.sql (ou scripts/migrate-attempts-table.mjs).
 *
 * Si la table n'existe pas encore, le store LÈVE AttemptsTableMissingError : la route
 * répond 503 et n'appelle JAMAIS Mistral. Pas de repli en mémoire : un plafond qui se
 * remet à zéro à chaque redémarrage n'en est pas un, et « échouer proprement » est
 * plus sûr que « continuer sans garde-fou ». Toute autre erreur de base remonte telle
 * quelle (même effet : pas d'appel au modèle).
 */
export class AttemptsTableMissingError extends Error {
  constructor() {
    super(
      "Table article_generation_attempts absente : exécuter docs/article-attempts-table.sql sur la base, puis relancer.",
    );
    this.name = "AttemptsTableMissingError";
  }
}

export const isMissingTable = (error) => {
  const text = `${error?.code ?? ""} ${error?.message ?? ""} ${error?.cause?.message ?? ""} ${error?.cause?.code ?? ""}`;
  return /42P01|does not exist|n'existe pas/i.test(text);
};

export const dbAttemptStore = {
  async list(since) {
    try {
      const rows = await db
        .select({ attemptedAt: articleGenerationAttempts.attemptedAt })
        .from(articleGenerationAttempts)
        .where(gt(articleGenerationAttempts.attemptedAt, since));
      return rows.map((row) => row.attemptedAt);
    } catch (error) {
      if (isMissingTable(error)) throw new AttemptsTableMissingError();
      throw error;
    }
  },
  async add(at) {
    try {
      await db.insert(articleGenerationAttempts).values({ attemptedAt: at });
    } catch (error) {
      if (isMissingTable(error)) throw new AttemptsTableMissingError();
      throw error;
    }
  },
};
