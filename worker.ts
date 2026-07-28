// Point d'entrée du Worker Cloudflare.
//
// On réutilise le handler `fetch` généré par OpenNext et on ajoute un handler
// `scheduled` : sur Cloudflare, les crons sont des Cron Triggers déclarés dans
// wrangler.jsonc (`triggers.crons`), pas des entrées `vercel.json`.
//
// Ce fichier est exclu de tsconfig.json car `.open-next/worker.js` n'existe
// qu'après `opennextjs-cloudflare build`, donc après le `next build`.
import { default as handler } from "./.open-next/worker.js";

/** Hôte utilisé pour fabriquer la requête interne vers la route cron. */
const CRON_ORIGIN = "https://suzaliconseil.com";
const CRON_PATH = "/api/cron/generate-article";

export default {
  fetch: handler.fetch,

  async scheduled(event, env, ctx) {
    const secret = env.CRON_SECRET;
    if (!secret) {
      console.error("scheduled: CRON_SECRET manquant, génération ignorée.");
      return;
    }

    const request = new Request(`${CRON_ORIGIN}${CRON_PATH}`, {
      method: "POST",
      headers: { authorization: `Bearer ${secret}` },
    });

    const run = handler
      .fetch(request, env, ctx)
      .then(async (response: Response) => {
        const body = await response.text();
        if (!response.ok) {
          console.error(`cron generate-article: ${response.status} ${body}`);
        } else {
          console.log(`cron generate-article: ${body}`);
        }
      })
      .catch((err: unknown) => {
        console.error("cron generate-article a échoué:", err);
      });

    ctx.waitUntil(run);
  },
};
