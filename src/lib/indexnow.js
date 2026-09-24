import { SITE_URL } from "./seo.js";

/**
 * Protocole IndexNow : notifie Bing, Yandex et les autres moteurs
 * participants qu'une URL est nouvelle ou modifiée, pour un crawl quasi
 * immédiat plutôt que d'attendre leur prochain passage programmé.
 *
 * Important : Google NE PARTICIPE PAS à IndexNow. Pour Google, les leviers
 * réels sont le maillage interne depuis une page à fort crawl (fait
 * automatiquement : tout nouvel article apparaît dans /actualites et dans
 * les blocs "Articles similaires"), un sitemap.xml à jour (déjà le cas,
 * lastModified suit updatedAt/publishedAt), et au cas par cas la demande
 * manuelle d'indexation dans Search Console pour les pages prioritaires.
 *
 * La clé doit être servie telle quelle sur /{key}.txt (vérification par
 * IndexNow) — voir public/<INDEXNOW_KEY>.txt.
 */
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

/**
 * @param {string[]} urls URLs absolues, mêmes hôte que SITE_URL
 * @returns {Promise<{ ok: boolean, status?: number, error?: string }>}
 */
export async function notifyIndexNow(urls) {
  // Lu au moment de l'appel, pas à l'import : dans les scripts autonomes,
  // les imports ES sont évalués avant dotenv.config(), donc une lecture au
  // niveau module figerait cette valeur à "undefined" (voir le même bug
  // corrigé sur MODEL_NAME dans ai-writer.js).
  const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
  if (!INDEXNOW_KEY) {
    return { ok: false, error: "INDEXNOW_KEY is not set" };
  }
  const urlList = (Array.isArray(urls) ? urls : [urls]).filter(Boolean);
  if (urlList.length === 0) {
    return { ok: false, error: "No URLs provided" };
  }

  const host = new URL(SITE_URL).host;

  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host,
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList,
      }),
    });
    // 200/202 = accepté. On ne bloque jamais la publication sur ce résultat.
    return { ok: res.ok, status: res.status };
  } catch (error) {
    console.error("IndexNow notify failed:", error?.message);
    return { ok: false, error: error?.message || "fetch failed" };
  }
}

/** Notifie IndexNow pour un article publié, sans jamais faire échouer l'appelant. */
export async function notifyArticlePublished(slug) {
  const result = await notifyIndexNow(`${SITE_URL}/actualites/${slug}`);
  if (!result.ok) {
    console.warn(`IndexNow: notification échouée pour /actualites/${slug}`, result.error || result.status);
  }
  return result;
}
