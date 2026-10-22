import { eq, like, or } from "drizzle-orm";
import { posts } from "../db/schema.js";
import { db } from "./db.js";

/**
 * Renvoie `base` s'il est libre, sinon `base-2`, `base-3`... La colonne
 * posts.slug est UNIQUE : en cas de course entre deux insertions simultanées,
 * l'INSERT échoue plutôt que d'écraser un article.
 */
export async function uniquePostSlug(base) {
  const rows = await db
    .select({ slug: posts.slug })
    .from(posts)
    .where(or(eq(posts.slug, base), like(posts.slug, `${base}-%`)));
  const taken = new Set(rows.map((row) => row.slug));
  if (!taken.has(base)) return base;
  let n = 2;
  while (taken.has(`${base}-${n}`)) n += 1;
  return `${base}-${n}`;
}
