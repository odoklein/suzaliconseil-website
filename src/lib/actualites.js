import { neon } from "@neondatabase/serverless";

/**
 * Server-side only. Fetches posts from Neon (same data as GET /api/actualites).
 * Use in Server Components or API routes.
 * @returns {Promise<Array<{ id: string, title: string, excerpt: string, slug: string, coverImageUrl: string|null, publishedAt: string|null, createdAt: string }>>}
 */
export async function getPosts() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) return [];

  const sqlClient = neon(connectionString);
  const rows = await sqlClient`
    SELECT id, title, excerpt, slug, cover_image_url, published_at, created_at, topic
    FROM posts
    WHERE published_at IS NOT NULL
    ORDER BY COALESCE(published_at, created_at) DESC
  `;
  return (Array.isArray(rows) ? rows : []).map((p) => ({
    id: p.id,
    title: p.title ?? "",
    excerpt: p.excerpt ?? "",
    slug: p.slug ?? "",
    coverImageUrl: p.cover_image_url ?? null,
    publishedAt: p.published_at ? new Date(p.published_at).toISOString() : null,
    createdAt: p.created_at ? new Date(p.created_at).toISOString() : null,
    topic: p.topic === "digital" ? "digital" : "commercial",
  }));
}
