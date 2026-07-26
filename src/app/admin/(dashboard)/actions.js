"use server";

import { revalidatePath } from "next/cache";
import { db } from "../../../lib/db";
import {
  posts,
  contentGeneratorSettings,
  leads,
  contacts,
} from "../../../db/schema";
import { eq } from "drizzle-orm";
import { generateArticle } from "../../../lib/gemini.js";
import { generateFeaturedImage } from "../../../lib/featured-image.js";

function slugify(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function updateSettings(formData) {
  const frequencyPerWeek = formData.get("frequencyPerWeek")?.toString() || "3";
  const tone = formData.get("tone")?.toString() || "expert";
  const autoPublish = formData.get("autoPublish") === "true" ? "true" : "false";

  const [row] = await db.select().from(contentGeneratorSettings).limit(1);
  if (row) {
    await db
      .update(contentGeneratorSettings)
      .set({
        frequencyPerWeek,
        tone,
        autoPublish,
        updatedAt: new Date(),
      })
      .where(eq(contentGeneratorSettings.id, row.id));
  } else {
    await db.insert(contentGeneratorSettings).values({
      frequencyPerWeek,
      tone,
      autoPublish,
    });
  }
  revalidatePath("/admin");
  return { ok: true };
}

export async function deletePost(formData) {
  const postId = formData.get("postId")?.toString();
  if (!postId) return { ok: false };
  await db.delete(posts).where(eq(posts.id, postId));
  revalidatePath("/admin");
  revalidatePath("/actualites");
  return { ok: true };
}

export async function togglePublish(formData) {
  const postId = formData.get("postId")?.toString();
  const publish = formData.get("publish") === "true";
  if (!postId) return { ok: false };
  await db
    .update(posts)
    .set({ publishedAt: publish ? new Date() : null, updatedAt: new Date() })
    .where(eq(posts.id, postId));
  revalidatePath("/admin");
  revalidatePath("/actualites");
  return { ok: true };
}

export async function updatePostSeo(formData) {
  const postId = formData.get("postId")?.toString();
  const seoTitle = formData.get("seoTitle")?.toString()?.trim() || null;
  const seoDescription =
    formData.get("seoDescription")?.toString()?.trim() || null;
  if (!postId) return { ok: false, error: "Article introuvable." };
  if (seoTitle && seoTitle.length > 42) {
    return { ok: false, error: "Le titre SEO doit rester sous 42 caractères." };
  }
  if (
    seoDescription &&
    (seoDescription.length < 130 || seoDescription.length > 160)
  ) {
    return {
      ok: false,
      error: "La description SEO doit contenir entre 130 et 160 caractères.",
    };
  }
  await db
    .update(posts)
    .set({ seoTitle, seoDescription, updatedAt: new Date() })
    .where(eq(posts.id, postId));
  revalidatePath("/admin");
  revalidatePath("/actualites");
  return { ok: true };
}

export async function triggerGenerate() {
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

  let article;
  try {
    article = await generateArticle({ tone });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return { error: error.message || "Erreur lors de la génération avec l'API Gemini." };
  }
  let coverImageUrl = null;
  try {
    coverImageUrl = await generateFeaturedImage(
      article.title,
      article.slug,
      article.excerpt,
      article.content,
    );
  } catch (err) {
    console.error("Featured image failed:", err);
  }

  const now = new Date();
  await db.insert(posts).values({
    title: article.title,
    slug: article.slug,
    excerpt: article.excerpt,
    seoTitle: article.seoTitle,
    seoDescription: article.seoDescription,
    content: article.content,
    coverImageUrl,
    publishedAt: autoPublish ? now : null,
    source: "auto",
    topic: article.topic || "commercial",
  });

  await db
    .update(contentGeneratorSettings)
    .set({ lastRunAt: now, updatedAt: now })
    .where(eq(contentGeneratorSettings.id, settings.id));

  revalidatePath("/admin");
  revalidatePath("/actualites");
  return { ok: true, message: "Article généré." };
}

/** Create a manual post: topic (commercial/digital), optional AI-generated featured image. */
export async function createManualPost(formData) {
  const title = formData.get("title")?.toString()?.trim();
  const excerpt = formData.get("excerpt")?.toString()?.trim() ?? "";
  const seoTitle = formData.get("seoTitle")?.toString()?.trim() ?? "";
  const seoDescription =
    formData.get("seoDescription")?.toString()?.trim() ?? "";
  const content = formData.get("content")?.toString()?.trim();
  const topic =
    formData.get("topic")?.toString() === "digital" ? "digital" : "commercial";
  const generateImage = formData.get("generateImage") === "true";
  const publishNow = formData.get("publishNow") === "true";

  if (!title) return { ok: false, error: "Le titre est requis." };
  if (!content) return { ok: false, error: "Le contenu est requis." };
  if (seoTitle && seoTitle.length > 42) {
    return { ok: false, error: "Le titre SEO doit rester sous 42 caractères." };
  }
  if (
    seoDescription &&
    (seoDescription.length < 130 || seoDescription.length > 160)
  ) {
    return {
      ok: false,
      error: "La description SEO doit contenir entre 130 et 160 caractères.",
    };
  }

  const slugBase = slugify(title) || `post-${Date.now()}`;
  const slug = `${slugBase}-${Date.now().toString(36)}`;

  let coverImageUrl = null;
  if (generateImage) {
    try {
      coverImageUrl = await generateFeaturedImage(
        title,
        slug,
        excerpt,
        content,
      );
    } catch (err) {
      console.error("Featured image generation failed:", err);
    }
  }

  const now = new Date();
  await db.insert(posts).values({
    title,
    slug,
    excerpt: excerpt || null,
    seoTitle: seoTitle || null,
    seoDescription: seoDescription || null,
    content,
    coverImageUrl,
    publishedAt: publishNow ? now : null,
    source: "manual",
    topic,
  });

  revalidatePath("/admin");
  revalidatePath("/actualites");
  return { ok: true, message: "Article manuel créé." };
}

export async function updateLeadStatus(formData) {
  const leadId = formData.get("leadId")?.toString();
  const status = formData.get("status")?.toString();
  if (!leadId || !status) return { ok: false };
  await db.update(leads).set({ status }).where(eq(leads.id, leadId));
  revalidatePath("/admin");
  return { ok: true };
}

export async function updateContactStatus(formData) {
  const contactId = formData.get("contactId")?.toString();
  const status = formData.get("status")?.toString();
  if (!contactId || !status) return { ok: false };
  await db.update(contacts).set({ status }).where(eq(contacts.id, contactId));
  revalidatePath("/admin");
  return { ok: true };
}
