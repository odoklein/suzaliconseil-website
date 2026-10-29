/*
 * Liens internes réutilisés par le contenu des pages services (maillage interne).
 *
 * Un seul endroit : si une URL change, on la corrige ici et pas dans chaque page.
 *
 * ARTICLES : les slugs sont ceux EN LIGNE aujourd'hui (avec leur ancien suffixe).
 * Quand la migration des slugs (scripts/migrate-post-slugs.mjs) aura été lancée,
 * remplacer ces slugs par leur forme propre (sans suffixe) : l'ancien slug redirige
 * déjà (308), donc aucun lien ne casse entre-temps, il fait juste un saut de plus.
 */

export const SERVICES = {
  commercial: ["/services/commercial", "Prospection commerciale B2B"],
  externalisee: ["/services/prospection-commerciale-externalisee", "Prospection commerciale externalisée"],
  generationLeads: ["/services/generation-leads-b2b", "Génération de leads B2B"],
  leadsParis: ["/services/agence-generation-de-leads-paris", "Agence de génération de leads à Paris"],
  marketingExternalise: ["/services/marketing-b2b-externalise", "Marketing B2B externalisé"],
  teleprospection: ["/services/teleprospection-b2b", "Téléprospection B2B"],
  priseRdv: ["/services/prise-rendez-vous-b2b", "Prise de rendez-vous B2B"],
  outbound: ["/services/outbound-marketing-b2b", "Outbound marketing B2B"],
  marqueBlanche: ["/services/vente-marque-blanche", "Force de vente externalisée"],
  fichier: ["/services/fichier-prospection-b2b", "Fichier de prospection B2B"],
  qualification: ["/services/qualification-leads-b2b", "Qualification de leads B2B"],
  campagnes: ["/services/campagnes-email-sms-b2b", "Campagnes email et SMS B2B"],
  digital: ["/services/digital", "Agence digitale B2B"],
  seoAcquisition: ["/services/digital/seo-acquisition", "SEO et acquisition digitale B2B"],
  strategieDigitale: ["/services/digital/strategie-digitale", "Stratégie marketing digitale B2B"],
  sitesWeb: ["/services/digital/sites-web-ecommerce", "Sites web et e-commerce B2B"],
  branding: ["/services/digital/branding-identite", "Branding et identité visuelle B2B"],
  automatisation: ["/services/digital/developpement-automatisation", "Développement et automatisation IA"],
  offres: ["/offres", "Offres et tarifs"],
  contact: ["/contact", "Nous contacter"],
};

const article = (slug, title) => [`/actualites/${slug}`, title];

export const ARTICLES = {
  choisirAgenceLeads: article(
    "agence-de-generation-de-leads-b2b-comment-bien-choisir-mug25o6t",
    "Agence de génération de leads B2B : comment bien choisir ?",
  ),
  leadsIndustrie: article(
    "generation-leads-b2b-industrie-strategies-d-impact-mlrokvm8",
    "Génération de leads B2B dans l’industrie : stratégies d’impact",
  ),
  kpiProspection: article(
    "kpi-prospection-commerciale-mesurer-et-piloter-la-performance-mocznw1b",
    "KPI de prospection commerciale : mesurer et piloter la performance",
  ),
  fichierProspection: article(
    "le-fichier-prospection-b2b-cle-de-voute-de-votre-croissance-mlunw2ai",
    "Le fichier de prospection B2B : clé de voûte de votre croissance",
  ),
  coldEmailing: article(
    "cold-emailing-b2b-france-la-strategie-gagnante-en-2024-mlywxerj",
    "Cold emailing B2B en France : la stratégie gagnante",
  ),
  prospectionPme: article(
    "prospection-commerciale-pme-les-strategies-incontournables-mmix31os",
    "Prospection commerciale PME : les stratégies incontournables",
  ),
  pourquoiExternaliser: article(
    "pourquoi-externaliser-sa-prospection-commerciale-b2b-mojth973",
    "Pourquoi externaliser sa prospection commerciale B2B ?",
  ),
  guideExternalisee: article(
    "prospection-commerciale-externalisee-guide-complet-2024-mug26uk3",
    "Prospection commerciale externalisée : le guide complet",
  ),
  strategieOutbound: article(
    "strategie-outbound-b2b-reussir-sa-prospection-commerciale-momocs1c",
    "Stratégie outbound B2B : réussir sa prospection commerciale",
  ),
  outboundVsInbound: article(
    "agence-outbound-vs-inbound-quand-choisir-mug27mpp",
    "Agence outbound ou inbound : quand choisir ?",
  ),
  automatiserWorkflows: article(
    "5-strategies-efficaces-pour-automatiser-vos-workflows-de-prospection",
    "5 stratégies pour automatiser vos workflows de prospection",
  ),
  outilsNumeriques: article(
    "les-10-outils-numeriques-indispensables-pour-booster-la-performance-commerciale-de-votre-entreprise",
    "Les 10 outils numériques pour booster la performance commerciale",
  ),
};
