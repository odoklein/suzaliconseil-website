/**
 * Garde-fou « aucun chiffre non sourcé » pour les articles générés par IA.
 *
 * Le générateur n'a accès à aucune source : tout pourcentage, montant, délai moyen
 * ou statistique qu'il écrit est inventé, et l'article est publié automatiquement.
 * Le prompt l'interdit (voir ai-writer.js) ; ce module vérifie le résultat, car une
 * consigne de prompt n'est jamais une garantie.
 *
 * Sont détectés : pourcentages, montants en euros / dollars, « x fois », « 3x »,
 * et les références d'étude non vérifiables (« selon une étude »). Ne sont PAS
 * détectés (donc autorisés) : les nombres qui comptent des éléments du texte
 * (« 3 modèles », « étape 2 », « 5 questions »).
 */

const FIGURE_PATTERNS = [
  { kind: "pourcentage", re: /\d+(?:[.,]\d+)?\s?(?:%|pour\s?cent\b|pourcents?\b)/gi },
  { kind: "montant", re: /\d[\d\s.,]*\s?(?:€|euros?\b|k€|\$|dollars?\b)/gi },
  { kind: "multiplicateur", re: /\b(?:\d+\s?(?:x|fois)\b|x\s?\d+\b)/gi },
  {
    kind: "étude citée",
    re: /\b(?:selon|d'après|d’après)\s+(?:une?\s+|la\s+|les\s+)?(?:étude|enquête|rapport|sondage|statistiques?|chiffres)\b/gi,
  },
];

const stripTags = (html) =>
  String(html ?? "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ");

/**
 * @param {{ title?: string, seoTitle?: string, seoDescription?: string, excerpt?: string,
 *           content?: string, faq?: Array<{question?: string, answer?: string}> }} article
 * @returns {Array<{ field: string, kind: string, text: string }>} vide si l'article est conforme
 */
export function findUnsourcedFigures(article) {
  const fields = [
    ["title", article?.title],
    ["seoTitle", article?.seoTitle],
    ["seoDescription", article?.seoDescription],
    ["excerpt", article?.excerpt],
    ["content", article?.content],
    ...(Array.isArray(article?.faq)
      ? article.faq.flatMap((f, i) => [
          [`faq[${i}].question`, f?.question],
          [`faq[${i}].answer`, f?.answer],
        ])
      : []),
  ];

  const found = [];
  for (const [field, value] of fields) {
    const text = stripTags(value);
    for (const { kind, re } of FIGURE_PATTERNS) {
      for (const match of text.matchAll(re)) {
        found.push({ field, kind, text: match[0].trim() });
      }
    }
  }
  return found;
}

/** Résumé court des chiffres trouvés, pour le message de relance et les logs. */
export function describeFigures(figures, max = 6) {
  const shown = figures.slice(0, max).map((f) => `« ${f.text} » (${f.kind})`);
  const more = figures.length > max ? `, et ${figures.length - max} autre(s)` : "";
  return shown.join(", ") + more;
}
