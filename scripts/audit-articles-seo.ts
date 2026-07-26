import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { neon } from "@neondatabase/serverless";

const siteUrl = "https://suzaliconseil.com";
const outputPath = path.join(process.cwd(), ".seo-audit", "articles-seo-report.json");

function htmlToText(value: string | null | undefined) {
  return (value ?? "").replace(/<!--[\s\S]*?-->/g, " ").replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ").replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&quot;/gi, '"').replace(/&#39;/g, "'").replace(/\s+/g, " ").trim();
}

function extractInternalLinks(content: string) {
  const links = new Set<string>();
  const internalHosts = new Set(["suzaliconseil.com", "www.suzaliconseil.com"]);
  for (const match of content.matchAll(/<a\b[^>]*\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi)) {
    const href = (match[1] ?? match[2] ?? match[3] ?? "").trim();
    if (!href || href.startsWith("#") || /^(mailto:|tel:|javascript:)/i.test(href)) continue;
    try {
      const url = new URL(href, siteUrl);
      if (internalHosts.has(url.hostname)) links.add(`${url.pathname}${url.search}${url.hash}`);
    } catch { /* malformed links are excluded */ }
  }
  return [...links].sort();
}

async function main() {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required.");
  const sql = neon(process.env.DATABASE_URL);
  const posts = await sql`SELECT id, title, slug, excerpt, content, cover_image_url, published_at, created_at, source, topic FROM posts WHERE published_at IS NOT NULL ORDER BY published_at DESC, created_at DESC`;
  const articles = posts.map((post) => {
    const title = String(post.title ?? "");
    const description = htmlToText(post.excerpt as string | null) || "Article d'actualités Suzali Conseil.";
    const content = String(post.content ?? "");
    const slug = String(post.slug ?? "");
    const url = new URL(`/actualites/${slug}`, siteUrl).toString();
    return { id: post.id, slug, url, title, titleLength: title.length, metaTitle: title ? `${title} | Suzali Conseil` : "Suzali Conseil", metaTitleLength: title.length + (title ? 18 : 0), description, descriptionLength: description.length, publishedAt: post.published_at, wordCount: htmlToText(content).split(/\s+/).filter(Boolean).length, category: post.topic || "commercial", canonical: url, imageOpenGraph: post.cover_image_url || new URL("/og-image.jpg", siteUrl).toString(), internalLinks: extractInternalLinks(content) };
  });
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, JSON.stringify({ generatedAt: new Date().toISOString(), source: { table: "posts", filter: "published_at IS NOT NULL", readOnly: true }, articles }, null, 2) + "\n");
  console.log(`SEO audit written for ${articles.length} published article(s).`);
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
