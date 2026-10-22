/**
 * Slugs d'articles : fonctions pures (aucune dépendance base de données), pour
 * pouvoir être importées par ai-writer.js, les actions admin et les scripts.
 *
 * Jusqu'à fin 2026, chaque slug se terminait par un suffixe aléatoire issu de
 * Date.now().toString(36) (ex. « -mojth973 »). Les slugs sont désormais stables :
 * le titre slugifié, rien d'autre. Les articles déjà publiés sont migrés par
 * scripts/migrate-post-slugs.mjs.
 */

export function slugify(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Date.now().toString(36) fait 8 caractères. Un vrai mot de 8 lettres (« -national »)
// a la même forme : on ne retire donc le suffixe que s'il se décode en un
// horodatage plausible pour ce site : les suffixes n'ont existé qu'en 2025-2026
// (plus aucun n'est créé depuis cette réforme).
const TIMESTAMP_SUFFIX = /-([a-z0-9]{8})$/;
const MIN_TIMESTAMP = Date.UTC(2025, 0, 1);
const MAX_TIMESTAMP = Date.UTC(2027, 0, 1);

/** Retire l'ancien suffixe aléatoire (-mojth973) s'il y en a un. */
export function stripSlugSuffix(slug) {
  const match = String(slug || "").match(TIMESTAMP_SUFFIX);
  if (match) {
    const timestamp = parseInt(match[1], 36);
    if (timestamp >= MIN_TIMESTAMP && timestamp < MAX_TIMESTAMP) {
      return slug.slice(0, -match[0].length);
    }
  }
  return slug;
}

/** Retire une année en dur (« -en-2024 », « -2025 ») : elle périme le slug. */
export function stripSlugYear(slug) {
  return String(slug || "")
    .replace(/(-(?:en|de|pour))?-20[2-3]\d(?=-|$)/g, "")
    .replace(/-{2,}/g, "-")
    .replace(/^-|-$/g, "");
}

/** Forme canonique d'un slug : sans suffixe aléatoire ni année. */
export function cleanSlug(slug) {
  return stripSlugYear(stripSlugSuffix(slug));
}

/** Tronque à la limite d'un mot (jamais au milieu d'un mot). */
export function limitSlug(slug, max = 75) {
  if (slug.length <= max) return slug;
  const cut = slug.slice(0, max + 1);
  const lastHyphen = cut.lastIndexOf("-");
  return (lastHyphen > 20 ? cut.slice(0, lastHyphen) : slug.slice(0, max)).replace(/-$/, "");
}

/** Slug d'un nouvel article à partir de son titre (stable, sans suffixe). */
export function slugFromTitle(title) {
  const base = limitSlug(stripSlugYear(slugify(title)));
  return base || `article-${Date.now().toString(36)}`;
}
