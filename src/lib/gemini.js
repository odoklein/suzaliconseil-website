import { GoogleGenerativeAI } from "@google/generative-ai";

const MODEL_NAME = process.env.GEMINI_MODEL || "gemini-2.0-flash";

/** Mots-clés SEO B2B / digital / commercial pour les articles (sources: SEO_STRATEGY_FRENCH_B2B.md) */
const B2B_KEYWORDS = [
  // Commercial & Vente
  "comment générer des leads b2b en france", "externaliser sa prospection commerciale", 
  "téléprospection efficace b2b", "combien coûte la génération de leads b2b",
  "meilleur outil prospection b2b", "script téléprospection b2b", "kpi prospection commerciale",
  "fichier prospection b2b", "agence prospection pour startup saas", "génération leads b2b industrie",
  "prospection commerciale pme", "stratégie outbound b2b", "cold emailing b2b france",
  "linkedin prospection commerciale", "qualification leads BANT", "prise de rendez-vous b2b externalisée",
  "techniques de closing b2b", "vente en marque blanche", "externalisation force de vente",
  "comment trouver des clients b2b", "social selling linkedin b2b", "account based marketing b2b",
  "cycle de vente long b2b", "objections commerciales b2b", "taux de conversion prospection",
  "relance commerciale efficace", "pitch commercial b2b", "automatisation prospection b2b",
  // Digital & Tech
  "transformation digitale entreprise", "agence digitale b2b france", "référencement naturel b2b",
  "content marketing b2b", "création site web b2b", "refonte site internet entreprise",
  "stratégie seo b2b", "inbound marketing b2b", "génération de trafic qualifié",
  "audit seo site b2b", "automatisation marketing b2b", "hubspot crm pour pme",
  "identité visuelle entreprise", "branding b2b france", "stratégie digitale 360",
  "outils no-code pme", "intégration api entreprise", "site e-commerce b2b",
  "ux design site corporate", "marketing de contenu linkedin", "optimisation conversion web"
];

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function truncateAtWord(text, maxLength) {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  if (clean.length <= maxLength) return clean;
  const shortened = clean.slice(0, maxLength + 1).replace(/\s+\S*$/, "").trim();
  return shortened.replace(/[,:;–-]+$/, "").trim();
}

/**
 * Génère un article d'actualité optimisé SEO via OpenAI.
 * @param {{ tone?: string }} options - tone: "expert" | "accessible" | "professional"
 * @returns {{ title: string, slug: string, excerpt: string, content: string, metaKeywords: string }}
 */
export async function generateArticle(options = {}) {
  let apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set");
  }
  
  // Clean the API key in case it was copy-pasted with hidden characters (like a bullet point •)
  apiKey = apiKey.replace(/[^\x20-\x7E]/g, '').trim();

  // Clean the model name as well, just in case
  const cleanModelName = MODEL_NAME.replace(/[^\x20-\x7E]/g, '').trim();

  const tone = options.tone || "expert";
  const recentTitles = options.recentTitles || "";
  
  // Try to pick a keyword that isn't heavily present in recent titles
  let keyword = B2B_KEYWORDS[Math.floor(Math.random() * B2B_KEYWORDS.length)];
  for (let i = 0; i < 5; i++) {
    if (recentTitles.toLowerCase().includes(keyword.split(" ")[0].toLowerCase())) {
      keyword = B2B_KEYWORDS[Math.floor(Math.random() * B2B_KEYWORDS.length)];
    } else {
      break;
    }
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: cleanModelName,
    generationConfig: {
      temperature: 0.9,
      responseMimeType: "application/json",
    },
  });

  const prompt = `Tu produis du contenu B2B premium en français. Tu renvoies toujours strictement un objet JSON valide.
Tu es un rédacteur senior SEO pour Suzali Conseil, agence B2B française (génération de leads, prospection commerciale, digital).

Génère UN article de blog optimisé pour le mot-clé suivant (à placer dans le titre, l'accroche et naturellement dans le texte) :
**Mot-clé principal à cibler :** "${keyword}"

Contraintes :
- Langue : français.
- Ton : ${tone}.
- Public : décideurs et responsables marketing/commercial/digital en B2B en France.
- Longueur : 800 à 1200 mots de contenu rédactionnel (hors titre/extrait).
- Structure : introduction accrocheuse, 3 à 4 sections avec sous-titres H2, conclusion avec CTA vers une prise de contact.
- Liens internes SEO : Tu DOIS inclure au moins 2 liens internes en HTML vers nos pages de services. Utilise des balises <a> avec ces URLs :
  * Pour la prospection / leads : <a href="/services/commercial">, <a href="/services/generation-leads-b2b">, <a href="/services/teleprospection-b2b">
  * Pour le digital : <a href="/services/digital">, <a href="/services/digital/seo-acquisition">, <a href="/services/digital/sites-web-ecommerce">
- Originalité : Ne rédige PAS sur ces sujets récents : ${recentTitles.substring(0, 500)}...
- Qualité éditoriale : style naturel, nuancé, crédible et concret ; évite les tournures robotiques.
- Interdictions : pas de <h1>. Pas de "dans cet article", "en conclusion".
- Réponds UNIQUEMENT avec un JSON valide, sans markdown ni \`\`\`, avec exactement les clés suivantes :

{
  "title": "Titre de l'article (60 caractères max, contient le mot-clé)",
  "seoTitle": "Titre SEO distinct et naturel (42 caractères maximum avant la marque)",
  "seoDescription": "Meta description unique et utile (130 à 155 caractères)",
  "excerpt": "Accroche éditoriale visible de l'article, indépendante de la meta description",
  "content": "Contenu en HTML valide (paragraphes <p>, sous-titres <h2>, listes <ul>/<li> si utile). Pas de <h1>.",
  "metaKeywords": "mot-clé principal, 3 à 5 mots-clés secondaires séparés par des virgules",
  "topic": "commercial ou digital selon le sujet : 'digital' si l'article porte sur le digital (web, SEO, transformation digitale, content marketing, outils numériques, automatisation, etc.), sinon 'commercial' (prospection, leads, vente, téléprospection, B2B commercial). Une seule valeur."
}`;

  let result;
  try {
    result = await model.generateContent(prompt);
  } catch (error) {
    console.error("Gemini GenerateContent Failed!", {
      apiKeyLength: apiKey.length,
      apiKeyStart: apiKey.substring(0, 3),
      modelName: cleanModelName,
      errorMsg: error.message
    });
    throw error;
  }
  const rawContent = result.response.text();
  if (!rawContent) {
    throw new Error("Gemini returned no text");
  }

  let raw = rawContent.trim();
  const jsonMatch = raw.match(/\{[\s\S]*\}/);
  if (jsonMatch) raw = jsonMatch[0];
  const data = JSON.parse(raw);

  const title = data.title || "Article B2B";
  const slugBase = slugify(title);
  const slug =
    slugBase.length > 0 ? slugBase : `article-${Date.now().toString(36)}`;

  const topic =
    (data.topic || "").toLowerCase() === "digital" ? "digital" : "commercial";

  return {
    title,
    slug: `${slug}-${Date.now().toString(36)}`,
    seoTitle: truncateAtWord(data.seoTitle || title, 42),
    seoDescription: truncateAtWord(
      data.seoDescription || data.excerpt || "",
      155,
    ),
    excerpt: data.excerpt || data.seoDescription || "",
    content: data.content || "",
    metaKeywords: data.metaKeywords || keyword,
    topic,
  };
}
