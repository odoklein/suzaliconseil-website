import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";
import { posts, contentGeneratorSettings } from "../../../../db/schema";
import { eq, isNotNull, sql } from "drizzle-orm";
import { generateArticle } from "../../../../lib/ai-writer.js";
import { notifyArticlePublished } from "../../../../lib/indexnow.js";

/** Vercel Cron envoie Authorization: Bearer <CRON_SECRET> */
function isAuthorized(request) {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const auth = request.headers.get("authorization");
  return auth === `Bearer ${secret}`;
}

export async function GET(request) {
  return handleCron(request);
}

export async function POST(request) {
  return handleCron(request);
}

async function handleCron(request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    let [settings] = await db.select().from(contentGeneratorSettings).limit(1);
    if (!settings) {
      const [inserted] = await db
        .insert(contentGeneratorSettings)
        .values({
          frequencyPerWeek: "3",
          tone: "expert",
          autoPublish: "true",
        })
        .returning();
      settings = inserted;
    }

    const tone = settings.tone || "expert";
    const autoPublish = settings.autoPublish === "true";

    const recentPosts = await db.select({ title: posts.title }).from(posts).orderBy(sql`created_at DESC`).limit(30);
    const recentTitles = recentPosts.map(p => p.title).join(" | ");

    const targetedPosts = await db
      .select({ targetKeyword: posts.targetKeyword })
      .from(posts)
      .where(isNotNull(posts.targetKeyword));
    const usedKeywords = new Set(
      targetedPosts.map((p) => (p.targetKeyword || "").toLowerCase()).filter(Boolean),
    );

    const article = await generateArticle({ tone, recentTitles, usedKeywords });

    const now = new Date();
    const [post] = await db
      .insert(posts)
      .values({
        title: article.title,
        slug: article.slug,
        excerpt: article.excerpt,
        seoTitle: article.seoTitle,
        seoDescription: article.seoDescription,
        content: article.content,
        coverImageUrl: null,
        publishedAt: autoPublish ? now : null,
        source: "auto",
        topic: article.topic || "commercial",
        targetKeyword: article.targetKeyword,
        metaKeywords: article.metaKeywords,
        faq: article.faq,
      })
      .returning();

    await db
      .update(contentGeneratorSettings)
      .set({
        lastRunAt: now,
        updatedAt: now,
      })
      .where(eq(contentGeneratorSettings.id, settings.id));

    if (autoPublish) {
      // Best-effort : ne bloque jamais la réponse du cron si IndexNow est down.
      notifyArticlePublished(post.slug).catch(() => {});
    }

    return NextResponse.json({
      ok: true,
      postId: post.id,
      slug: post.slug,
      published: autoPublish,
      title: post.title,
      targetKeyword: post.targetKeyword,
    });
  } catch (err) {
    console.error("Cron generate-article error:", err);
    return NextResponse.json(
      { error: err.message || "Generation failed" },
      { status: 500 }
    );
  }
}
