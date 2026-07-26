import { isNotNull } from "drizzle-orm";
import { posts } from "@/db/schema";
import { db } from "@/lib/db";
import { SITE_URL } from "@/lib/seo";

const STATIC_ROUTES = [
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
  ["/equipe", "monthly", 0.7],
  ["/actualites", "weekly", 0.8],
  ["/contact", "monthly", 0.7],
  ["/carriers", "monthly", 0.6],
];

export default async function sitemap() {
  const staticRoutes = STATIC_ROUTES.map(([path, changeFrequency, priority]) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    changeFrequency,
    priority,
  }));

  try {
    const allPosts = await db
      .select({
        slug: posts.slug,
        publishedAt: posts.publishedAt,
        updatedAt: posts.updatedAt,
        coverImageUrl: posts.coverImageUrl,
      })
      .from(posts)
      .where(isNotNull(posts.publishedAt));

    return [
      ...staticRoutes,
      ...allPosts.map((post) => ({
        url: `${SITE_URL}/actualites/${post.slug}`,
        lastModified: post.updatedAt || post.publishedAt,
        changeFrequency: "monthly",
        priority: 0.7,
        ...(post.coverImageUrl ? { images: [post.coverImageUrl] } : {}),
      })),
    ];
  } catch (error) {
    console.error("Sitemap article fetch failed:", error);
    return staticRoutes;
  }
}
