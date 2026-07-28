import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "../db/schema";

/**
 * Client Drizzle initialisé paresseusement.
 *
 * Importer ce module ne doit avoir aucun effet de bord : `next build` évalue
 * chaque module de route pendant la phase « Collecting page data », y compris
 * dans des environnements où DATABASE_URL n'est pas défini. Lever une erreur au
 * niveau du module ferait échouer le build entier au lieu de la seule requête.
 */
let client;

function getClient() {
  if (client) return client;

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not defined");
  }

  client = drizzle(neon(connectionString), { schema });
  return client;
}

export const db = new Proxy(
  {},
  {
    get(_target, prop) {
      const instance = getClient();
      const value = instance[prop];
      return typeof value === "function" ? value.bind(instance) : value;
    },
  },
);
