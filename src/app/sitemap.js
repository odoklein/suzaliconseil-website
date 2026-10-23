import { isNotNull } from "drizzle-orm";
import { posts } from "@/db/schema";
import { db } from "@/lib/db";
import { buildSitemapEntries } from "@/lib/sitemap-entries";

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
