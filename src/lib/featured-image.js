import { uploadBuffer } from "./s3-upload.js";
import OpenAI from "openai";

const WIDTH = 1200;
const HEIGHT = 630;

/**
 * Génère une image featured 1200x630 qui illustre le contenu de l'article (pas le titre).
 * Uploade sur S3 et retourne l'URL. Si la génération échoue, retourne null.
 * @param {string} title - Titre de l'article
 * @param {string} slug - Slug (pour le nom de fichier)
 * @param {string} [excerpt] - Extrait pour contexte
 * @param {string} [content] - Contenu HTML de l'article pour décrire la scène à illustrer
 * @returns {Promise<string|null>} URL publique ou null
 */
export async function generateFeaturedImage(
  title,
  slug,
  excerpt = "",
  content = "",
) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;
  const client = new OpenAI({ apiKey });

  const safeSlug = slug.replace(/[^a-z0-9-]/gi, "-").slice(0, 60);
  const filename = `actualites/${new Date().toISOString().slice(0, 7)}/${safeSlug}-${Date.now()}.png`;
  const imageModel = process.env.OPENAI_IMAGE_MODEL || "gpt-image-1";

  // Résumé du contenu sans HTML pour le prompt (premiers paragraphes)
  const contentPlain =
    typeof content === "string"
      ? content
          .replace(/<[^>]+>/g, " ")
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 600)
      : "";

  const summaryLine = excerpt
    ? `Summary: ${excerpt
        .replace(/<[^>]+>/g, " ")
        .trim()
        .slice(0, 200)}`
    : "";
  const contentLine = contentPlain
    ? `Main themes from the article: ${contentPlain}`
    : "";
  const contextBlock = [summaryLine, contentLine].filter(Boolean).join("\n");

  const prompt = `Create a high-end, PHOTOREALISTIC editorial image (16:9 aspect ratio) to illustrate a B2B article about: "${title}".
Article context:
${contextBlock || "B2B business strategy and digital transformation."}

CRITICAL VISUAL REQUIREMENTS:
1. STYLE: Cinematic, hyper-realistic photography (shot on 85mm lens, f/1.8), soft natural lighting, modern office aesthetic or sleek abstract tech background.
2. SUBJECTS:
   - If the topic is about Sales/Commercial/Prospection: Show real professionals in modern business attire, engaging in a meeting, shaking hands, or working in a glass-walled office. Focus on human interaction and professionalism.
   - If the topic is about Digital/Web/SEO: Show a sophisticated abstract 3D visualization (glassmorphism, light rays, connecting nodes) OR a close-up of modern tech gear in a workspace.
3. ATMOSPHERE: Professional, trustworthy, dynamic. Use depth of field to create focus.
4. QUALITY: 8k resolution, highly detailed, professional color grading.
5. NEGATIVE CONSTRAINTS: ABSOLUTELY NO TEXT. NO WORDS. NO LETTERS. NO LOGOS. NO CARTOONS. NO FLAT ICONS. The image must be a PHOTOGRAPH or high-end 3D RENDER.`;

  try {
    const imageBuffer = await generateImageViaOpenAI(client, imageModel, prompt);
    if (imageBuffer && imageBuffer.length > 0) {
      const resized = await resizeToFeatured(imageBuffer);
      const url = await uploadBuffer(filename, resized, "image/png");
      return url;
    }
  } catch (err) {
    console.warn(`Featured image (${imageModel}):`, err.message);
  }

  return null;
}

async function generateImageViaOpenAI(client, model, prompt) {
  const res = await client.images.generate({
    model,
    size: "1536x1024",
    quality: "high",
    prompt,
  });

  const b64 = res.data?.[0]?.b64_json;
  if (!b64) return null;
  return Buffer.from(b64, "base64");
}

async function resizeToFeatured(buffer) {
  try {
    const sharp = (await import("sharp")).default;
    return await sharp(buffer)
      .resize(WIDTH, HEIGHT, { fit: "cover", position: "center" })
      .png()
      .toBuffer();
  } catch {
    return buffer;
  }
}
