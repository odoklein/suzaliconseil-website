import { Mistral } from "@mistralai/mistralai";
import { SERVICES } from "./article-services.js";
import { slugFromTitle } from "./post-slug.js";
import { findUnsourcedFigures, describeFigures } from "./article-figures.js";

/*
 * POLITIQUE DE CIBLAGE (tâche T2, 22/10/2026)
 *
 * Une recherche = une seule page Suzali. Les articles automatiques ne doivent donc
 * JAMAIS viser :
 *   1. une recherche déjà tenue par une page service (agence de génération de leads,
 *      prospection commerciale externalisée, agence outbound, téléprospection, prise
 *      de rendez-vous, fichier de prospection, qualification de leads, marque blanche,
 *      acquisition digitale, branding, site e-commerce…) ;
 *   2. un sujet réservé aux 4 articles rédigés par l'équipe marketing : prix d'une
 *      agence de prospection, internaliser ou externaliser (le vrai coût), comparatif
 *      des agences, forfait ou paiement au rendez-vous (dont « combien coûte la
 *      génération de leads b2b »).
 *
 * Les cibles ci-dessous sont des questions pratiques (« comment… », « modèle de… »,
 * « exemple de… ») : elles répondent à un besoin d'information et envoient ensuite le
 * lecteur vers la page service concernée par un lien interne.
 *
 * Ces mots-clés n'ont PAS été validés dans la Search Console (ceux de l'ancienne liste
 * l'étaient mais visaient les pages services) : à ajuster avec les données réelles.
 */

/**
 * Cibles prioritaires, traitées dans l'ordre. "angle" cadre le sujet exact ; le
 * modèle reste libre du titre final tant qu'il contient le mot-clé. Chaque cible
 * a la page de service vers laquelle poser le lien interne.
 */
const PRIORITY_TARGETS = [
  {
    keyword: "modèle de script de téléprospection b2b",
    angle:
      "Un modèle de script d'appel B2B commenté, étape par étape : accroche, questions de qualification, traitement des objections courantes, prise de rendez-vous. Donner des formulations concrètes que le lecteur peut adapter, sans promettre de taux de réussite chiffrés.",
    topic: "commercial",
    targetService: SERVICES.teleprospection,
    secondaryService: SERVICES.priseRendezVous,
  },
  {
    keyword: "modèle d'email de prospection b2b",
    angle:
      "Trois modèles d'emails de prospection B2B commentés (première approche, relance, dernier message) et les règles à respecter (objet, longueur, une seule demande, désinscription simple, information sur l'origine des données). Aucun chiffre de performance inventé.",
    topic: "commercial",
    targetService: SERVICES.campagnesEmailSms,
    secondaryService: SERVICES.outbound,
  },
  {
    keyword: "comment prospecter sur linkedin en b2b",
    angle:
      "Une méthode pas à pas pour prospecter sur LinkedIn : préparer son profil, cibler, rédiger un message de connexion et une relance, mesurer ce qui fonctionne. Exemples de messages courts et sobres, sans automatisation abusive.",
    topic: "commercial",
    targetService: SERVICES.outbound,
    secondaryService: SERVICES.generationLeads,
  },
  {
    keyword: "comment qualifier un lead b2b avec la méthode bant",
    angle:
      "Appliquer BANT (budget, autorité, besoin, délai) à la qualification d'un lead B2B : questions types pour chaque critère, grille de décision simple, quand transmettre ou écarter un lead.",
    topic: "commercial",
    targetService: SERVICES.qualificationLeads,
    secondaryService: SERVICES.priseRendezVous,
  },
];

/**
 * Pool secondaire, utilisé quand les cibles prioritaires sont traitées (et seulement
 * au rythme d'un article par semaine, voir article-cadence.js). Mêmes règles : des
 * questions pratiques qui ne visent aucune page service ni aucun des 4 articles de
 * l'équipe. Sans service imposé, l'article retombe sur le lien par défaut du thème
 * (voir article-services.js).
 */
const SECONDARY_POOL = [
  { keyword: "comment trouver des clients b2b", topic: "commercial" },
  { keyword: "comment préparer un appel de téléprospection b2b", topic: "commercial", targetService: SERVICES.teleprospection },
  { keyword: "comment choisir un outil de prospection b2b", topic: "commercial" },
  { keyword: "techniques de closing b2b", topic: "commercial" },
  { keyword: "comment répondre aux objections en prospection b2b", topic: "commercial", targetService: SERVICES.teleprospection },
  { keyword: "comment lancer une stratégie abm b2b", topic: "commercial", targetService: SERVICES.outbound },
  { keyword: "comment relancer un prospect b2b sans être insistant", topic: "commercial" },
  { keyword: "exemple de séquence de prospection multicanale", topic: "commercial", targetService: SERVICES.outbound },
  { keyword: "comment construire une stratégie de content marketing b2b", topic: "digital" },
  { keyword: "exemple de scénario d'automatisation marketing b2b", topic: "digital", targetService: SERVICES.developpementAutomatisation },
  { keyword: "comment faire un audit seo b2b", topic: "digital", targetService: SERVICES.seoAcquisition },
  { keyword: "comment structurer le site web d'une entreprise b2b", topic: "digital", targetService: SERVICES.strategieDigitale },
];

/**
 * Mots-clés retirés des listes (et pourquoi), gardés ici pour que personne ne les remette :
 * agence de génération de leads b2b, prospection commerciale externalisée, agence outbound,
 * téléprospection efficace b2b, fichier prospection b2b, prise de rendez-vous b2b externalisée,
 * vente en marque blanche, agence acquisition google, spécialiste acquisition digitale,
 * stratégie seo b2b, identité visuelle entreprise, site e-commerce b2b, agence prospection pour
 * startup saas : recherches tenues par une page service.
 * combien coûte la génération de leads b2b, meilleur outil prospection b2b : article prix de
 * l'équipe / comparatif non vérifiable (publicité comparative).
 * kpi prospection commerciale, génération leads b2b industrie, prospection commerciale pme,
 * cold emailing b2b france : déjà couverts par un article existant.
 */
export const EXCLUDED_KEYWORDS = [
  "agence de génération de leads b2b",
  "prospection commerciale externalisée",
  "agence outbound",
  "téléprospection efficace b2b",
  "fichier prospection b2b",
  "prise de rendez-vous b2b externalisée",
  "vente en marque blanche",
  "agence acquisition google",
  "spécialiste acquisition digitale",
  "stratégie seo b2b",
  "identité visuelle entreprise",
  "site e-commerce b2b",
  "agence prospection pour startup saas",
  "combien coûte la génération de leads b2b",
  "meilleur outil prospection b2b",
];

/** Pour les tests : toutes les cibles actuellement proposées par le générateur. */
export const ALL_TARGET_KEYWORDS = [...PRIORITY_TARGETS, ...SECONDARY_POOL].map((t) => t.keyword);

function truncateAtWord(text, maxLength) {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  if (clean.length <= maxLength) return clean;
  const shortened = clean.slice(0, maxLength + 1).replace(/\s+\S*$/, "").trim();
  return shortened.replace(/[,:;–-]+$/, "").trim();
}

/**
 * Choisit la prochaine cible : les cibles prioritaires non encore traitées d'abord
 * (dans l'ordre), puis le pool secondaire (dans l'ordre).
 *
 * Renvoie `null` quand toutes les cibles ont déjà un article. On ne retombe PAS sur
 * une cible déjà traitée : écrire un deuxième article sur la même recherche est
 * exactement la cannibalisation que ce générateur ne doit plus créer. Il faut alors
 * ajouter de nouveaux mots-clés (validés dans la Search Console) dans cette liste.
 *
 * @param {Set<string>} usedKeywords mots-clés déjà ciblés (posts.targetKeyword, en minuscules)
 * @returns {object|null}
 */
export function pickNextTarget(usedKeywords = new Set()) {
  const unused = [...PRIORITY_TARGETS, ...SECONDARY_POOL].filter(
    (t) => !usedKeywords.has(t.keyword.toLowerCase()),
  );
  return unused[0] ?? null;
}

/**
 * Construit le prompt de génération. Exportée pour être testée : les règles sur les
 * chiffres (ci-dessous) ne doivent pas pouvoir disparaître sans qu'un test le signale.
 */
export function buildArticlePrompt({ target, tone = "expert", recentTitles = "" }) {
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

  return `Tu es un rédacteur senior SEO pour Suzali Conseil, agence B2B française (génération de leads, prospection commerciale, digital). Tu écris comme un expert qui a réellement mené ces missions : affirmations concrètes, exemples précis plutôt que généralités, sans aucun chiffre inventé. Jamais de ton robotique ni de tournures creuses.

Génère UN article de blog optimisé pour le mot-clé principal suivant (dans le titre, l'accroche, et naturellement 3-5 fois dans le texte, jamais en sur-optimisation forcée) :
**Mot-clé principal à cibler :** "${target.keyword}"${angleInstruction}

Contraintes :
- Langue : français. Ton : ${tone}.
- Public : décideurs et responsables marketing/commercial/digital en B2B en France.
- Longueur : 1600 à 2200 mots de contenu rédactionnel (hors titre/extrait) — un article de référence, pas un article de blog superficiel.
- Structure : introduction qui pose un problème concret (pas "dans un monde où..."), 4 à 6 sections avec sous-titres H2 (et H3 si une section a des sous-parties), au moins une liste à puces ou un tableau HTML (<table>) si le sujet s'y prête (comparatif, critères, étapes), conclusion avec CTA vers une prise de contact.
- CHIFFRES (règle stricte) : tu n'as accès à aucune source, donc tout chiffre que tu avancerais serait inventé. N'écris AUCUN chiffre qui présente un fait, un résultat ou un ordre de grandeur : pas de pourcentage, pas de montant ni de fourchette de prix, pas de délai moyen ou de durée « typique », pas de « x fois plus », pas de statistique, pas de « selon une étude » ou « d'après un rapport », pas d'exemple client chiffré, pas de taux de réussite. Quand un ordre de grandeur serait tentant, écris en termes qualitatifs (« souvent », « nettement plus long », « une part importante des échanges ») ou explique comment le lecteur calcule sa propre valeur (la méthode ou la formule, sans valeurs inventées). Seuls les nombres qui comptent ou numérotent des éléments de ton propre texte sont autorisés (« 3 modèles », « étape 2 », « 5 questions »), ainsi que ceux donnés dans ce prompt.
${linkInstructions}
- Originalité : ne rédige PAS sur ces sujets déjà traités : ${String(recentTitles || "").substring(0, 500)}
- E-E-A-T : montre une expérience terrain sans la chiffrer (ex. "sur les missions que nous menons...", "en pratique, ce point est souvent sous-estimé..."), pas de discours marketing vide.
- Interdictions strictes : pas de <h1>. Pas de "dans cet article", "en conclusion", "il est important de noter que", "dans le monde d'aujourd'hui". N'écris AUCUNE année (2023, 2024, 2025...) dans le titre, le seoTitle ou l'excerpt : un article daté devient obsolète et faux dès l'année suivante. Si une date est indispensable dans le corps du texte, reste vague ("actuellement", "ces dernières années") plutôt qu'une année en dur.
- FAQ : génère 4 à 5 questions/réponses courtes et concrètes, au format "People Also Ask" (questions que taperait réellement un utilisateur Google), réponses de 2-4 phrases chacune, sans redite du corps de l'article, et sans chiffre (même règle que ci-dessus).
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
  if (!target) {
    throw new Error(
      "Aucune cible de mot-clé disponible : toutes ont déjà un article. Ajoutez de nouveaux mots-clés dans src/lib/ai-writer.js.",
    );
  }

  const client = new Mistral({ apiKey });

  const basePrompt = buildArticlePrompt({ target, tone, recentTitles: options.recentTitles });

  // Appelle le modèle et renvoie l'article brut (JSON analysé).
  const callModel = async (prompt) => {
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
    return JSON.parse(raw);
  };

  // Garde-fou « aucun chiffre non sourcé » : le prompt l'interdit, mais un prompt n'est
  // pas une garantie et l'article est publié automatiquement. Un seul nouvel essai avec
  // les chiffres fautifs cités ; si le second jet en contient encore, on REJETTE l'article
  // (rien n'est publié, rien n'est enregistré) plutôt que de publier un chiffre inventé.
  let data = await callModel(basePrompt);
  let figures = findUnsourcedFigures(data);
  if (figures.length > 0) {
    console.warn(`ai-writer: chiffres non sourcés détectés, nouvel essai : ${describeFigures(figures)}`);
    data = await callModel(
      `${basePrompt}\n\nCORRECTION OBLIGATOIRE : ta version précédente contenait des chiffres non sourcés : ${describeFigures(figures)}. Réécris l'article COMPLET sans aucun chiffre de ce type (ni pourcentage, ni montant, ni « x fois », ni « selon une étude ») : formule ces points de façon qualitative.`,
    );
    figures = findUnsourcedFigures(data);
    if (figures.length > 0) {
      throw new Error(`Article rejeté : chiffres non sourcés après un nouvel essai (${describeFigures(figures)}).`);
    }
  }
  // Filet de sécurité : même sur consigne explicite, le modèle glisse parfois
  // une année en dur ("guide complet 2024") qui rend le titre daté et faux
  // dès l'année suivante. On la retire plutôt que de faire confiance au
  // prompt seul.
  const stripYear = (text) =>
    String(text || "").replace(/\s*[:\-–]?\s*\b(20[2-3]\d)\b\s*/g, " ").replace(/\s+/g, " ").trim();

  const title = stripYear(data.title) || "Article B2B";

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
    // Slug stable (titre slugifié). L'unicité (-2, -3...) est garantie à
    // l'insertion par uniquePostSlug(), pas ici : ce module n'accède pas à la base.
    slug: slugFromTitle(title),
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
