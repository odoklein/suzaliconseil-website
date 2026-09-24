// Génère les 3 articles de lancement, un par cible prioritaire de
// src/lib/ai-writer.js (PRIORITY_TARGETS), publication immédiate.
//
// Script one-off, à lancer une fois : `node scripts/generate-targeted-articles.mjs`
// La cadence récurrente (cron lun/mer/ven) prend le relais ensuite via
// pickNextTarget(), qui passera automatiquement au pool secondaire une fois
// ces 3 cibles épuisées.
import { config } from "dotenv";
config({ path: ".env.local" });

import { db } from "../src/lib/db.js";
import { posts } from "../src/db/schema.js";
import { generateArticle } from "../src/lib/ai-writer.js";
import { notifyArticlePublished } from "../src/lib/indexnow.js";
import { isNotNull } from "drizzle-orm";

async function main() {
  if (!process.env.MISTRAL_API_KEY) {
    console.error("MISTRAL_API_KEY manquant dans .env.local — abandon.");
    process.exit(1);
  }

  const results = [];

  for (let i = 0; i < 3; i++) {
    const targetedPosts = await db
      .select({ targetKeyword: posts.targetKeyword })
      .from(posts)
      .where(isNotNull(posts.targetKeyword));
    const usedKeywords = new Set(
      targetedPosts.map((p) => (p.targetKeyword || "").toLowerCase()).filter(Boolean),
    );

    const recentPosts = await db.select({ title: posts.title }).from(posts).limit(30);
    const recentTitles = recentPosts.map((p) => p.title).join(" | ");

    console.log(`\n[${i + 1}/3] Génération en cours...`);
    const article = await generateArticle({ tone: "expert", recentTitles, usedKeywords });
    console.log(`  -> cible : "${article.targetKeyword}"`);
    console.log(`  -> titre : "${article.title}"`);
    console.log(`  -> ${article.content.split(/\s+/).length} mots, ${article.faq.length} questions FAQ`);

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
        publishedAt: now,
        source: "auto",
        topic: article.topic,
        targetKeyword: article.targetKeyword,
        metaKeywords: article.metaKeywords,
        faq: article.faq,
      })
      .returning();

    const indexResult = await notifyArticlePublished(post.slug);
    console.log(`  -> publié : https://suzaliconseil.com/actualites/${post.slug}`);
    console.log(`  -> IndexNow : ${indexResult.ok ? "notifié" : `échec (${indexResult.error || indexResult.status})`}`);

    results.push({ slug: post.slug, title: post.title, targetKeyword: post.targetKeyword });
  }

  console.log("\n=== Résumé ===");
  results.forEach((r, i) => {
    console.log(`${i + 1}. ${r.title}`);
    console.log(`   cible : ${r.targetKeyword}`);
    console.log(`   url   : https://suzaliconseil.com/actualites/${r.slug}`);
  });

  process.exit(0);
}

main().catch((err) => {
  console.error("Échec de la génération :", err);
  process.exit(1);
});
