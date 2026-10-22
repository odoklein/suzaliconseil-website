/**
 * Cadence des articles automatiques : 1 par semaine au maximum.
 *
 * Le réglage « fréquence par semaine » de l'admin (settings.frequencyPerWeek) est
 * enregistré mais n'était lu par personne : le rythme réel dépendait uniquement de
 * la fréquence à laquelle un planificateur externe appelait /api/cron/generate-article.
 * Le plafond est donc appliqué ICI, dans le code, quel que soit le planificateur
 * (appelé 3 fois par semaine ou toutes les heures, il ne publiera qu'un article).
 *
 * L'écart minimal est de 7 jours moins 2 heures de tolérance : lastRunAt est écrit
 * à la FIN d'une génération (quelques dizaines de secondes après le déclenchement),
 * donc un déclenchement hebdomadaire exact tomberait légèrement sous 7 jours et
 * serait refusé une semaine sur deux sans cette marge. Conséquence : deux articles
 * automatiques ne sont jamais publiés à moins de 6 j 22 h d'intervalle.
 */
export const MAX_AUTO_ARTICLES_PER_WEEK = 1;

const HOUR_MS = 60 * 60 * 1000;
const DAY_MS = 24 * HOUR_MS;
const JITTER_MS = 2 * HOUR_MS;

/** Écart minimal entre deux articles automatiques, en millisecondes. */
export const MIN_GAP_MS = (7 / MAX_AUTO_ARTICLES_PER_WEEK) * DAY_MS - JITTER_MS;

/**
 * @param {Date|string|null|undefined} lastRunAt dernière génération (settings.lastRunAt)
 * @param {Date} [now]
 * @returns {{ allowed: boolean, nextAllowedAt: Date | null }}
 */
export function checkCadence(lastRunAt, now = new Date()) {
  if (!lastRunAt) return { allowed: true, nextAllowedAt: null };
  const last = new Date(lastRunAt);
  if (Number.isNaN(last.getTime())) return { allowed: true, nextAllowedAt: null };
  const next = new Date(last.getTime() + MIN_GAP_MS);
  return { allowed: now >= next, nextAllowedAt: next };
}
