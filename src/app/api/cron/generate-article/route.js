import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";
import { posts, contentGeneratorSettings } from "../../../../db/schema";
import { eq, isNotNull, sql } from "drizzle-orm";
import { generateArticle } from "../../../../lib/ai-writer.js";
import { notifyArticlePublished } from "../../../../lib/indexnow.js";
import { uniquePostSlug } from "../../../../lib/post-slug-db.js";
import { dbAttemptStore } from "../../../../lib/article-attempts-db.js";
import { runArticleCron } from "../../../../lib/article-cron.js";

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

// Valeurs utilisées quand aucune ligne de réglages n'existe et qu'on ne doit rien écrire (dryRun).
const DEFAULT_SETTINGS = { id: null, lastRunAt: null, tone: "expert", autoPublish: "true" };

/** Les accès réels à la base et à Mistral, injectés dans la logique testable (article-cron.js). */
const deps = {
  async loadSettings({ createIfMissing }) {
    let [settings] = await db.select().from(contentGeneratorSettings).limit(1);
    if (!settings && createIfMissing) {
      const [inserted] = await db
        .insert(contentGeneratorSettings)
        .values({ frequencyPerWeek: "3", tone: "expert", autoPublish: "true" })
        .returning();
      settings = inserted;
    }
    return settings || DEFAULT_SETTINGS;
  },

  async loadTargeting() {
    const recentPosts = await db.select({ title: posts.title }).from(posts).orderBy(sql`created_at DESC`).limit(30);
    const targetedPosts = await db
      .select({ targetKeyword: posts.targetKeyword })
      .from(posts)
      .where(isNotNull(posts.targetKeyword));
    return {
      recentTitles: recentPosts.map((p) => p.title).join(" | "),
      usedKeywords: new Set(
        targetedPosts.map((p) => (p.targetKeyword || "").toLowerCase()).filter(Boolean),
      ),
    };
  },

  attemptStore: dbAttemptStore,

  generate: (args) => generateArticle(args),

  async publish({ article, settings, now }) {
    const autoPublish = settings.autoPublish === "true";
    const [post] = await db
      .insert(posts)
      .values({
        title: article.title,
        slug: await uniquePostSlug(article.slug),
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
      .set({ lastRunAt: now, updatedAt: now })
      .where(eq(contentGeneratorSettings.id, settings.id));

    if (autoPublish) {
      // Best-effort : ne bloque jamais la réponse du cron si IndexNow est down.
      notifyArticlePublished(post.slug).catch(() => {});
    }
    return post;
  },
};

// Visible SANS le secret (même sur un 401) : permet de vérifier, avant d'appeler la route avec ?dryRun=1,
// que la version déployée connaît bien ce mode. Une ancienne version l'ignorerait et ferait un vrai appel.
const FEATURES_HEADER = { "x-cron-features": "dry-run,attempt-cap,figure-guard" };

async function handleCron(request) {
  // L'authentification passe AVANT tout, y compris le mode dryRun.
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401, headers: FEATURES_HEADER });
  }

  // ?dryRun=1 : exécute les contrôles (auth, cadence, cible, plafond d'essais) en lecture
  // seule et dit ce que ferait un vrai appel, sans appeler Mistral ni rien écrire.
  const dryRunParam = new URL(request.url).searchParams.get("dryRun");
  const dryRun = dryRunParam === "1" || dryRunParam === "true";

  try {
    const { status, body } = await runArticleCron({ dryRun, deps });
    return NextResponse.json(body, { status, headers: FEATURES_HEADER });
  } catch (err) {
    console.error("Cron generate-article error:", err);
    return NextResponse.json(
      { error: err.message || "Generation failed", ...(dryRun ? { dryRun: true } : {}) },
      { status: 500, headers: FEATURES_HEADER },
    );
  }
}
