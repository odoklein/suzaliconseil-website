import { Mistral } from "@mistralai/mistralai";
import { SERVICES } from "./article-services.js";

/**
 * Cibles prioritaires : mots-clés réellement présents dans la Search Console
 * (export du 24/09/2026, forts volumes d'impressions, position 40-80, sans
 * page dédiée bien classée) plutôt qu'un tirage aléatoire dans une liste
 * générique. Chacune a un angle éditorial précis et une page de service
 * déterminée à l'avance : le modèle n'a pas à deviner quel lien interne
 * poser, on le lui donne.
 *
 * "angle" cadre le sujet exact ; le modèle reste libre du titre final tant
 * qu'il contient le mot-clé.
 */
const PRIORITY_TARGETS = [
  {
    keyword: "agence de génération de leads b2b",
    angle:
      "Un guide pour choisir son agence de génération de leads B2B : critères de sélection, questions à poser, grille d'évaluation. Public : décideur qui compare plusieurs prestataires avant de signer.",
    topic: "commercial",
    targetService: SERVICES.generationLeads,
    secondaryService: SERVICES.qualificationLeads,
  },
  {
    keyword: "prospection commerciale externalisée",
    angle:
      "Un guide complet sur l'externalisation de la prospection commerciale B2B : ce que ça coûte réellement, les modèles de facturation courants, les avantages et limites concrets, comment évaluer un prestataire. Public : dirigeant ou directeur commercial qui hésite entre interne et externalisé.",
    topic: "commercial",
    targetService: SERVICES.prospectionExternalisee,
    secondaryService: SERVICES.commercial,
  },
  {
    keyword: "agence outbound",
    angle:
      "Un comparatif outbound vs inbound marketing B2B : différences concrètes, quand choisir l'un plutôt que l'autre selon le marché et le cycle de vente, comment les combiner. Public : responsable marketing qui arbitre son budget d'acquisition.",
    topic: "commercial",
    targetService: SERVICES.outbound,
    secondaryService: SERVICES.generationLeads,
  },
];

/**
 * Pool secondaire pour la cadence récurrente (cron lun/mer/ven) une fois les
 * cibles prioritaires épuisées. Repris de l'ancienne liste statique
 * (src/lib/gemini.js), sans service imposé : l'article retombe sur le lien
 * par défaut du thème (voir article-services.js).
 */
const SECONDARY_POOL = [
  { keyword: "téléprospection efficace b2b", topic: "commercial" },
  { keyword: "combien coûte la génération de leads b2b", topic: "commercial" },
  { keyword: "meilleur outil prospection b2b", topic: "commercial" },
  { keyword: "script téléprospection b2b", topic: "commercial" },
  { keyword: "kpi prospection commerciale", topic: "commercial" },
  { keyword: "fichier prospection b2b", topic: "commercial", targetService: SERVICES.fichierProspection },
  { keyword: "agence prospection pour startup saas", topic: "commercial" },
  { keyword: "génération leads b2b industrie", topic: "commercial" },
  { keyword: "prospection commerciale pme", topic: "commercial" },
  { keyword: "cold emailing b2b france", topic: "commercial", targetService: SERVICES.campagnesEmailSms },
  { keyword: "linkedin prospection commerciale", topic: "commercial" },
  { keyword: "qualification leads bant", topic: "commercial", targetService: SERVICES.qualificationLeads },
  { keyword: "prise de rendez-vous b2b externalisée", topic: "commercial", targetService: SERVICES.priseRendezVous },
  { keyword: "techniques de closing b2b", topic: "commercial" },
  { keyword: "vente en marque blanche", topic: "commercial" },
  { keyword: "comment trouver des clients b2b", topic: "commercial" },
  { keyword: "account based marketing b2b", topic: "commercial" },
  { keyword: "agence acquisition google", topic: "digital", targetService: SERVICES.seoAcquisition },
  { keyword: "spécialiste acquisition digitale", topic: "digital", targetService: SERVICES.seoAcquisition },
  { keyword: "référencement naturel b2b", topic: "digital", targetService: SERVICES.seoAcquisition },
  { keyword: "content marketing b2b", topic: "digital" },
  { keyword: "stratégie seo b2b", topic: "digital", targetService: SERVICES.seoAcquisition },
  { keyword: "automatisation marketing b2b", topic: "digital", targetService: SERVICES.developpementAutomatisation },
  { keyword: "identité visuelle entreprise", topic: "digital", targetService: SERVICES.strategieDigitale },
  { keyword: "site e-commerce b2b", topic: "digital" },
];

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
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
 * Choisit la prochaine cible : cibles prioritaires non encore traitées
 * d'abord (dans l'ordre), puis pool secondaire non encore traité, puis
 * n'importe laquelle du pool secondaire en dernier recours.
 * @param {Set<string>} usedKeywords mots-clés déjà ciblés (posts.targetKeyword, en minuscules)
 */
export function pickNextTarget(usedKeywords = new Set()) {
  const unusedPriority = PRIORITY_TARGETS.filter(
    (t) => !usedKeywords.has(t.keyword.toLowerCase()),
  );
  if (unusedPriority.length > 0) return unusedPriority[0];

  const unusedSecondary = SECONDARY_POOL.filter(
    (t) => !usedKeywords.has(t.keyword.toLowerCase()),
  );
  const pool = unusedSecondary.length > 0 ? unusedSecondary : SECONDARY_POOL;
  return pool[Math.floor(Math.random() * pool.length)];
}

/**
 * Génère un article d'actualité optimisé SEO via Mistral.
 * @param {{ tone?: string, target?: object, usedKeywords?: Set<string> }} options
 *   - target : cible explicite (voir PRIORITY_TARGETS) ; sinon choisie via pickNextTarget(usedKeywords)
 * @returns {Promise<{title, slug, seoTitle, seoDescription, excerpt, content, metaKeywords, targetKeyword, faq, topic}>}
 */
export async function generateArticle(options = {}) {
  let apiKey = process.env.MISTRAL_API_KEY;
  if (!apiKey) {
    throw new Error("MISTRAL_API_KEY is not set");
  }
  apiKey = apiKey.replace(/[^\x20-\x7E]/g, "").trim();
  const modelName = process.env.MISTRAL_MODEL || "mistral-large-latest";

  const tone = options.tone || "expert";
  const target = options.target || pickNextTarget(options.usedKeywords);

  const client = new Mistral({ apiKey });

  const linkInstructions = target.targetService
    ? `- Lien interne PRINCIPAL obligatoire, à poser naturellement dans le corps du texte (pas seulement en conclusion) : <a href="${target.targetService.href}">${target.targetService.label}</a>${
        target.secondaryService
          ? `\n- Lien interne SECONDAIRE, à poser ailleurs dans le texte : <a href="${target.secondaryService.href}">${target.secondaryService.label}</a>`
          : ""
      }\n- N'invente PAS d'autres URLs internes que celles fournies ci-dessus.`
    : `- Liens internes SEO : inclus au moins 2 liens internes en HTML vers nos pages de services parmi :
  * Prospection / leads : <a href="/services/commercial">, <a href="/services/generation-leads-b2b">, <a href="/services/teleprospection-b2b">
  * Digital : <a href="/services/digital">, <a href="/services/digital/seo-acquisition">, <a href="/services/digital/sites-web-ecommerce">`;

  const angleInstruction = target.angle
    ? `\nAngle éditorial imposé : ${target.angle}`
    : "";

  const prompt = `Tu es un rédacteur senior SEO pour Suzali Conseil, agence B2B française (génération de leads, prospection commerciale, digital). Tu écris comme un expert qui a réellement mené ces missions : affirmations concrètes, chiffres ou fourchettes plausibles, exemples précis plutôt que généralités. Jamais de ton robotique ni de tournures creuses.

Génère UN article de blog optimisé pour le mot-clé principal suivant (dans le titre, l'accroche, et naturellement 3-5 fois dans le texte, jamais en sur-optimisation forcée) :
**Mot-clé principal à cibler :** "${target.keyword}"${angleInstruction}

Contraintes :
- Langue : français. Ton : ${tone}.
- Public : décideurs et responsables marketing/commercial/digital en B2B en France.
- Longueur : 1600 à 2200 mots de contenu rédactionnel (hors titre/extrait) — un article de référence, pas un article de blog superficiel.
- Structure : introduction qui pose un problème concret (pas "dans un monde où..."), 4 à 6 sections avec sous-titres H2 (et H3 si une section a des sous-parties), au moins une liste à puces ou un tableau HTML (<table>) si le sujet s'y prête (comparatif, critères, étapes), conclusion avec CTA vers une prise de contact.
${linkInstructions}
- Originalité : ne rédige PAS sur ces sujets déjà traités : ${(options.recentTitles || "").substring(0, 500)}
- E-E-A-T : montre une expérience terrain (ex. "sur les missions que nous menons...", "en pratique, la plupart des entreprises sous-estiment..."), pas de discours marketing vide.
- Interdictions strictes : pas de <h1>. Pas de "dans cet article", "en conclusion", "il est important de noter que", "dans le monde d'aujourd'hui". N'écris AUCUNE année (2023, 2024, 2025...) dans le titre, le seoTitle ou l'excerpt : un article daté devient obsolète et faux dès l'année suivante. Si une date est indispensable dans le corps du texte, reste vague ("actuellement", "ces dernières années") plutôt qu'une année en dur.
- FAQ : génère 4 à 5 questions/réponses courtes et concrètes, au format "People Also Ask" (questions que taperait réellement un utilisateur Google), réponses de 2-4 phrases chacune, sans redite du corps de l'article.
- Réponds UNIQUEMENT avec un JSON valide, sans markdown ni \`\`\`, avec exactement les clés suivantes :

{
  "title": "Titre de l'article (60 caractères max, contient le mot-clé, proche du début)",
  "seoTitle": "Titre SEO distinct et naturel (42 caractères maximum avant la marque)",
  "seoDescription": "Meta description unique, orientée clic, avec un verbe d'action (130 à 155 caractères)",
  "excerpt": "Accroche éditoriale visible de l'article, indépendante de la meta description",
  "content": "Contenu en HTML valide (paragraphes <p>, sous-titres <h2>/<h3>, listes <ul>/<li>, <table> si pertinent). Pas de <h1>.",
  "metaKeywords": "mot-clé principal, 3 à 5 mots-clés secondaires séparés par des virgules",
  "faq": [{"question": "...", "answer": "..."}],
  "topic": "commercial ou digital selon le sujet. Une seule valeur."
}`;

  let response;
  try {
    response = await client.chat.complete({
      model: modelName,
      temperature: 0.85,
      responseFormat: { type: "json_object" },
      messages: [{ role: "user", content: prompt }],
    });
  } catch (error) {
    console.error("Mistral chat.complete failed:", {
      apiKeyLength: apiKey.length,
      modelName,
      errorMsg: error?.message,
    });
    throw error;
  }

  const rawContent = response?.choices?.[0]?.message?.content;
  if (!rawContent) {
    throw new Error("Mistral returned no content");
  }

  let raw = typeof rawContent === "string" ? rawContent.trim() : String(rawContent);
  const jsonMatch = raw.match(/\{[\s\S]*\}/);
  if (jsonMatch) raw = jsonMatch[0];
  const data = JSON.parse(raw);

  // Filet de sécurité : même sur consigne explicite, le modèle glisse parfois
  // une année en dur ("guide complet 2024") qui rend le titre daté et faux
  // dès l'année suivante. On la retire plutôt que de faire confiance au
  // prompt seul.
  const stripYear = (text) =>
    String(text || "").replace(/\s*[:\-–]?\s*\b(20[2-3]\d)\b\s*/g, " ").replace(/\s+/g, " ").trim();

  const title = stripYear(data.title) || "Article B2B";
  const slugified = slugify(title);
  const slugBase = slugified.length > 0 ? slugified : `article-${Date.now().toString(36)}`;

  const topic =
    (data.topic || target.topic || "").toLowerCase() === "digital"
      ? "digital"
      : "commercial";

  const faq = Array.isArray(data.faq)
    ? data.faq
        .filter((f) => f && f.question && f.answer)
        .map((f) => ({ question: String(f.question), answer: String(f.answer) }))
        .slice(0, 6)
    : [];

  return {
    title,
    slug: `${slugBase}-${Date.now().toString(36)}`,
    seoTitle: truncateAtWord(stripYear(data.seoTitle) || title, 42),
    seoDescription: truncateAtWord(stripYear(data.seoDescription) || stripYear(data.excerpt) || "", 155),
    excerpt: stripYear(data.excerpt) || stripYear(data.seoDescription) || "",
    content: data.content || "",
    metaKeywords: data.metaKeywords || target.keyword,
    targetKeyword: target.keyword,
    faq,
    topic,
  };
}
