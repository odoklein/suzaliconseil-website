import { cache } from "react";
import { eq } from "drizzle-orm";
import { posts } from "../db/schema.js";
import { db } from "./db.js";
import { cleanSlug } from "./post-slug.js";

async function selectBySlug(slug) {
  const [post] = await db.select().from(posts).where(eq(posts.slug, slug)).limit(1);
  return post || null;
}

/**
 * Trouve un article par son slug, avec un filet de sécurité pour les anciens
 * slugs (suffixe aléatoire « -mojth973 », année en dur).
 *
 * Pourquoi : la migration des slugs (scripts/migrate-post-slugs.mjs) modifie la
 * base AVANT que les redirections 301 de next.config.mjs soient redéployées.
 * Sans ce filet, une ancienne URL répondrait 404 pendant cet intervalle. Ici,
 * si l'ancien slug n'existe plus mais que sa forme nettoyée existe, on indique
 * où rediriger (permanentRedirect côté page) : aucune 404, à aucun moment.
 *
 * Retourne :
 *   { post }               slug exact trouvé
 *   { post, redirectTo }   ancien slug : l'article existe sous `redirectTo`
 *   { post: null }         introuvable
 *
 * Seuls les articles PUBLIÉS sont redirigés : un brouillon ne doit pas se
 * révéler par ce chemin. `cache()` évite une double requête entre
 * generateMetadata et la page pour une même requête.
 */
export const findPostBySlug = cache(async (slug) => {
  const exact = await selectBySlug(slug);
  if (exact) return { post: exact };

  const clean = cleanSlug(slug);
  if (clean && clean !== slug) {
    const canonical = await selectBySlug(clean);
    if (canonical?.publishedAt) {
      return { post: canonical, redirectTo: canonical.slug };
    }
  }
  return { post: null };
});
