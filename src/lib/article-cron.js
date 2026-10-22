import { checkCadence } from "./article-cadence.js";
import { beginAttempt, peekAttempts, MAX_ATTEMPTS_PER_DAY } from "./article-attempts.js";
import { pickNextTarget } from "./ai-writer.js";

/**
 * Décisions de la route /api/cron/generate-article, sans dépendance directe à la base
 * ni à Mistral : tout passe par `deps`, ce qui permet de tester chaque cas (et de
 * PROUVER que le mode dryRun n'écrit rien et n'appelle pas le modèle).
 *
 * Ordre des contrôles (les 3 premiers ne coûtent rien) :
 *   1. cadence hebdomadaire (1 article automatique par semaine)
 *   2. il reste une cible de mot-clé inédite
 *   3. plafond d'essais : 3 par 24 h, rejets compris (table article_generation_attempts)
 *   4. seulement alors : l'essai est enregistré, puis Mistral est appelé
 *
 * dryRun : exécute les contrôles 1 à 3 en LECTURE SEULE et renvoie ce que ferait un vrai
 * appel. N'appelle pas deps.generate / deps.publish / store.add, et ne crée aucune ligne
 * (deps.loadSettings reçoit createIfMissing = false).
 *
 * deps : {
 *   loadSettings({ createIfMissing }) -> { id, lastRunAt, tone, autoPublish }
 *   loadTargeting() -> { recentTitles: string, usedKeywords: Set<string> }
 *   attemptStore -> { list(since), add(at) }
 *   generate({ tone, recentTitles, target }) -> article        (Mistral)
 *   publish({ article, settings, now }) -> post                 (écrit)
 * }
 *
 * @returns {Promise<{ status: number, body: object }>}
 */
export async function runArticleCron({ dryRun = false, now = new Date(), deps }) {
  const settings = await deps.loadSettings({ createIfMissing: !dryRun });

  // 1. Cadence hebdomadaire
  const cadence = checkCadence(settings.lastRunAt, now);
  if (!cadence.allowed) {
    return {
      status: 200,
      body: {
        ok: true,
        ...(dryRun ? { dryRun: true, wouldGenerate: false } : {}),
        skipped: true,
        reason: "Cadence : 1 article automatique par semaine au maximum.",
        nextAllowedAt: cadence.nextAllowedAt,
      },
    };
  }

  // 2. Cible de mot-clé inédite
  const { recentTitles, usedKeywords } = await deps.loadTargeting();
  const target = pickNextTarget(usedKeywords);
  if (!target) {
    return {
      status: 200,
      body: {
        ok: true,
        ...(dryRun ? { dryRun: true, wouldGenerate: false } : {}),
        skipped: true,
        reason:
          "Toutes les cibles de mots-clés ont déjà un article : ajouter de nouveaux mots-clés dans src/lib/ai-writer.js.",
      },
    };
  }

  // 3. Plafond d'essais (rejets compris). dryRun : on regarde sans enregistrer.
  let attempt;
  try {
    attempt = dryRun
      ? await peekAttempts(deps.attemptStore, now)
      : await beginAttempt(deps.attemptStore, now);
  } catch (error) {
    if (error?.name === "AttemptsTableMissingError") {
      // Échec propre : la table des essais n'existe pas, donc on ne peut pas garantir le
      // plafond. On n'appelle PAS Mistral (aucune boucle d'appels possible).
      return {
        status: 503,
        body: {
          ok: false,
          ...(dryRun ? { dryRun: true, wouldGenerate: false } : {}),
          error: error.message,
        },
      };
    }
    throw error;
  }

  if (!attempt.allowed) {
    return {
      status: 200,
      body: {
        ok: true,
        ...(dryRun ? { dryRun: true, wouldGenerate: false } : {}),
        skipped: true,
        reason: `Plafond : ${MAX_ATTEMPTS_PER_DAY} essais de génération par 24 h (rejets compris).`,
        attemptsInWindow: attempt.attemptsInWindow,
        lastAttemptAt: attempt.lastAttemptAt,
        nextAllowedAt: attempt.nextAllowedAt,
      },
    };
  }

  if (dryRun) {
    return {
      status: 200,
      body: {
        ok: true,
        dryRun: true,
        wouldGenerate: true,
        reason: "Un vrai appel générerait un article maintenant (rien n'a été appelé ni écrit).",
        target: { keyword: target.keyword, topic: target.topic, service: target.targetService?.href ?? null },
        tone: settings.tone || "expert",
        autoPublish: settings.autoPublish === "true",
        attemptsInWindow: attempt.attemptsInWindow, // essais déjà faits ; un vrai appel serait le suivant
        attemptsLeft: MAX_ATTEMPTS_PER_DAY - attempt.attemptsInWindow,
        lastAttemptAt: attempt.lastAttemptAt,
        lastRunAt: settings.lastRunAt ?? null,
      },
    };
  }

  // 4. Vrai appel : l'essai est déjà enregistré (beginAttempt), puis Mistral.
  const article = await deps.generate({ tone: settings.tone || "expert", recentTitles, target });
  const post = await deps.publish({ article, settings, now: new Date() });

  return {
    status: 200,
    body: {
      ok: true,
      postId: post.id,
      slug: post.slug,
      published: settings.autoPublish === "true",
      title: post.title,
      targetKeyword: post.targetKeyword,
      lastAttemptAt: attempt.lastAttemptAt,
      attemptsInWindow: attempt.attemptsInWindow,
    },
  };
}
