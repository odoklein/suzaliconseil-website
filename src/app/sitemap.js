import { isNotNull } from "drizzle-orm";
import { posts } from "@/db/schema";
import { db } from "@/lib/db";
import { buildSitemapEntries } from "@/lib/sitemap-entries";

// Sans cette ligne, le sitemap est figé au build : un article publié depuis
// l'admin n'y entrait qu'au déploiement suivant. Rafraîchi au plus toutes les heures.
export const revalidate = 3600;

export default async function sitemap() {
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

    return buildSitemapEntries(allPosts);
  } catch (error) {
    console.error("Sitemap article fetch failed:", error);
    return buildSitemapEntries(null);
  }
}
