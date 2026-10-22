/**
 * Plafond d'essais de génération : 3 par période glissante de 24 h, REJETS COMPRIS.
 *
 * Pourquoi : un article rejeté (chiffres non sourcés, erreur du modèle) ne met pas
 * lastRunAt à jour, donc le garde-fou hebdomadaire (article-cadence.js) ne l'arrête
 * pas : sans ce plafond, un planificateur qui appelle la route toutes les minutes
 * déclencherait des appels Mistral en boucle. Chaque essai (1 appel de la route =
 * 1 à 2 appels Mistral, voir ai-writer.js) est enregistré AVANT d'appeler le modèle,
 * donc même un plantage en cours de route compte. Au plus 3 essais par 24 h, soit au
 * plus 6 appels Mistral par 24 h.
 *
 * Ce module ne touche aucune base : il reçoit un « store » ({ list(since), add(at) }),
 * ce qui le rend testable. Le store réel est dans article-attempts-db.js.
 */
export const MAX_ATTEMPTS_PER_DAY = 3;
export const ATTEMPT_WINDOW_MS = 24 * 60 * 60 * 1000;

/**
 * Vérifie le plafond ; s'il n'est pas atteint, enregistre l'essai et l'autorise.
 * Un essai refusé n'est PAS enregistré (il n'appelle pas Mistral).
 *
 * @param {{ list: (since: Date) => Promise<Array<Date|string>>, add: (at: Date) => Promise<void> }} store
 * @param {Date} [now]
 * @returns {Promise<{ allowed: boolean, attemptsInWindow: number, lastAttemptAt: Date | null, nextAllowedAt: Date | null }>}
 */
export async function beginAttempt(store, now = new Date()) {
  const since = new Date(now.getTime() - ATTEMPT_WINDOW_MS);
  const inWindow = (await store.list(since))
    .map((value) => new Date(value))
    .filter((at) => !Number.isNaN(at.getTime()) && at > since && at <= now)
    .sort((a, b) => a - b);

  if (inWindow.length >= MAX_ATTEMPTS_PER_DAY) {
    // Le plus ancien essai de la fenêtre sort de la fenêtre 24 h après son horodatage.
    const oldestOfLastN = inWindow[inWindow.length - MAX_ATTEMPTS_PER_DAY];
    return {
      allowed: false,
      attemptsInWindow: inWindow.length,
      lastAttemptAt: inWindow[inWindow.length - 1],
      nextAllowedAt: new Date(oldestOfLastN.getTime() + ATTEMPT_WINDOW_MS),
    };
  }

  await store.add(now);
  return {
    allowed: true,
    attemptsInWindow: inWindow.length + 1,
    lastAttemptAt: now,
    nextAllowedAt: null,
  };
}
