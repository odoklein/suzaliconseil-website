/**
 * Detects if a post is "commercial" (green theme) or "digital" (blue theme)
 * from title and excerpt. Default: commercial.
 * @param {{ title?: string, excerpt?: string }} post
 * @returns {'commercial' | 'digital'}
 */
export function getPostTheme(post) {
  const title = (post?.title || "").toLowerCase();
  const excerpt = (
    typeof post?.excerpt === "string"
      ? post.excerpt.replace(/<[^>]+>/g, " ")
      : ""
  ).toLowerCase();
  const text = `${title} ${excerpt}`;

  const digitalKeywords = [
    "digital",
    "digitale",
    "web",
    "seo",
    "référencement",
    "transformation digitale",
    "content marketing",
    "linkedin",
    "numérique",
    "applications",
    "développement d",
    "automatisation",
    "outils numériques",
    "technologies b2b",
  ];

  const commercialKeywords = [
    "prospection",
    "commercial",
    "commerciale",
    "leads",
    "téléprospection",
    "vente",
    "b2b",
    "rendez-vous",
    "outbound",
    "performance commerciale",
    "stratégies commerciales",
    "prospection pme",
    "génération de leads",
    "qualification",
  ];

  const hasDigital = digitalKeywords.some((k) => text.includes(k));
  const hasCommercial = commercialKeywords.some((k) => text.includes(k));

  if (hasDigital && !hasCommercial) return "digital";
  return "commercial";
}

/** Green theme (commercial) - class names / style hints */
export const themeCommercial = {
  gradient: "from-[#0D332B] to-[#1a4d42]",
  gradientLight: "from-[#0D332B]/10 to-[#1a4d42]/5",
  border: "border-[#0D332B]/30",
  borderHover: "hover:border-[#0D332B]/50",
  accent: "text-[#0D332B]",
  bgAccent: "bg-[#0D332B]",
  bgMuted: "bg-[#0D332B]/5",
  noImageGradient: "from-[#0D332B] via-[#1a4d42] to-[#0f4438]",
};

/** Blue theme (digital) */
export const themeDigital = {
  gradient: "from-[#0c4a6e] to-[#0369a1]",
  gradientLight: "from-[#0c4a6e]/10 to-[#0369a1]/5",
  border: "border-[#0369a1]/30",
  borderHover: "hover:border-[#0369a1]/50",
  accent: "text-[#0369a1]",
  bgAccent: "bg-[#0c4a6e]",
  bgMuted: "bg-[#0c4a6e]/5",
  noImageGradient: "from-[#0c4a6e] via-[#0369a1] to-[#0284c7]",
};
