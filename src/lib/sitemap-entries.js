import { SITE_URL } from "./seo";
import articleMerges from "../data/article-merges.json";
import { STATIC_LASTMOD, latestDate } from "./static-lastmod";

export const STATIC_ROUTES = [
  ["/", "weekly", 1],
  ["/services", "weekly", 0.9],
  ["/services/commercial", "weekly", 0.9],
  ["/services/prospection-commerciale-externalisee", "weekly", 0.9],
  ["/services/generation-leads-b2b", "weekly", 0.8],
  ["/services/teleprospection-b2b", "weekly", 0.8],
  ["/services/prise-rendez-vous-b2b", "weekly", 0.8],
  ["/services/outbound-marketing-b2b", "weekly", 0.8],
  ["/services/vente-marque-blanche", "weekly", 0.8],
  ["/services/fichier-prospection-b2b", "weekly", 0.8],
  ["/services/qualification-leads-b2b", "weekly", 0.8],
  ["/services/campagnes-email-sms-b2b", "weekly", 0.8],
  ["/services/digital", "weekly", 0.9],
  ["/services/digital/strategie-digitale", "monthly", 0.8],
  ["/services/digital/sites-web-ecommerce", "monthly", 0.8],
  ["/services/digital/seo-acquisition", "monthly", 0.8],
  ["/services/digital/branding-identite", "monthly", 0.8],
  ["/services/digital/developpement-automatisation", "monthly", 0.8],
  ["/offres", "weekly", 0.8],
  ["/etudes-de-cas", "monthly", 0.8],
  ["/equipe", "monthly", 0.7],
  ["/actualites", "weekly", 0.8],
  ["/contact", "monthly", 0.7],
  ["/carriers", "monthly", 0.6],
];

/**
 * Construit les entrées du sitemap. Fonction pure (testable sans base de données).
 *
 * @param {Array<{slug: string, publishedAt?: Date|string|null, updatedAt?: Date|string|null, coverImageUrl?: string|null}> | null} allPosts
 *   articles publiés ; null si la base est inaccessible (le sitemap garde alors les pages statiques).
 */
export function buildSitemapEntries(allPosts) {
  const staticRoutes = STATIC_ROUTES.map(([path, changeFrequency, priority]) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    // Date réelle de dernière modification du contenu (voir static-lastmod.js) ; absente = pas de lastmod.
    ...(STATIC_LASTMOD[path] ? { lastModified: STATIC_LASTMOD[path] } : {}),
    changeFrequency,
    priority,
  }));

  if (!allPosts) return staticRoutes;

  // /actualites : sa date suit l'article publié le plus récent (la liste change à chaque publication).
  const newestPost = latestDate(...allPosts.map((post) => post.updatedAt || post.publishedAt));
  const routes = staticRoutes.map((route) =>
    route.url === `${SITE_URL}/actualites`
      ? { ...route, lastModified: latestDate(STATIC_LASTMOD["/actualites"], newestPost) ?? route.lastModified }
      : route,
  );

  return [
    ...routes,
    // Un article fusionné dans un autre redirige (301) : il n'a rien à faire dans le sitemap.
    ...allPosts
      .filter((post) => !(post.slug in articleMerges))
      .map((post) => ({
        url: `${SITE_URL}/actualites/${post.slug}`,
        lastModified: post.updatedAt || post.publishedAt,
        changeFrequency: "monthly",
        priority: 0.7,
        ...(post.coverImageUrl ? { images: [post.coverImageUrl] } : {}),
      })),
  ];
}
