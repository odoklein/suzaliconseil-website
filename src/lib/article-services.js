/**
 * Maillage interne article -> page service.
 *
 * Le bloc « Services associés » ne proposait que deux liens génériques par
 * thème, avec un libellé identique sur tous les articles. Deux conséquences
 * relevées dans l'audit Search Console du 07/09/2026 :
 *
 * - l'article « boostez-vos-ventes-b2b-agence-generation-leads-paris-expert »
 *   ressortait en position 29,27 quand /services/generation-leads-b2b, qui vise
 *   la même intention commerciale, plafonnait à 66,76 ;
 * - quatre pages services (prospection externalisée, fichier de prospection,
 *   qualification de leads, campagnes email/SMS) ne recevaient aucun lien
 *   depuis les articles et n'enregistraient aucune impression.
 *
 * On associe donc explicitement chaque article publié aux pages services qui
 * partagent son intention, avec une ancre descriptive plutôt qu'un libellé
 * générique. Les articles absents de la table retombent sur la paire par
 * défaut du thème.
 */

const SERVICES = {
  generationLeads: {
    href: "/services/generation-leads-b2b",
    label: "Agence de génération de leads B2B",
  },
  prospectionExternalisee: {
    href: "/services/prospection-commerciale-externalisee",
    label: "Prospection commerciale externalisée",
  },
  priseRendezVous: {
    href: "/services/prise-rendez-vous-b2b",
    label: "Prise de rendez-vous B2B qualifiés",
  },
  teleprospection: {
    href: "/services/teleprospection-b2b",
    label: "Téléprospection B2B",
  },
  outbound: {
    href: "/services/outbound-marketing-b2b",
    label: "Agence outbound marketing B2B",
  },
  fichierProspection: {
    href: "/services/fichier-prospection-b2b",
    label: "Fichier de prospection B2B qualifié",
  },
  qualificationLeads: {
    href: "/services/qualification-leads-b2b",
    label: "Qualification de leads B2B",
  },
  campagnesEmailSms: {
    href: "/services/campagnes-email-sms-b2b",
    label: "Campagnes email et SMS B2B",
  },
  commercial: {
    href: "/services/commercial",
    label: "Prospection commerciale B2B",
  },
  seoAcquisition: {
    href: "/services/digital/seo-acquisition",
    label: "SEO et acquisition digitale",
  },
  developpementAutomatisation: {
    href: "/services/digital/developpement-automatisation",
    label: "Développement et automatisation",
  },
  strategieDigitale: {
    href: "/services/digital/strategie-digitale",
    label: "Stratégie marketing digitale",
  },
};

/** slug d'article -> services les plus proches de son intention de recherche */
const SERVICES_BY_SLUG = {
  "boostez-vos-ventes-b2b-agence-generation-leads-paris-expert-mm4molzg": [
    SERVICES.generationLeads,
    SERVICES.priseRendezVous,
  ],
  "pourquoi-externaliser-sa-prospection-commerciale-b2b-mojth973": [
    SERVICES.prospectionExternalisee,
    SERVICES.commercial,
  ],
  "prospection-commerciale-pme-les-strategies-incontournables-mmix31os": [
    SERVICES.prospectionExternalisee,
    SERVICES.teleprospection,
  ],
  "strategie-outbound-b2b-reussir-sa-prospection-commerciale-momocs1c": [
    SERVICES.outbound,
    SERVICES.prospectionExternalisee,
  ],
  "kpi-prospection-commerciale-mesurer-et-piloter-la-performance-mocznw1b": [
    SERVICES.commercial,
    SERVICES.generationLeads,
  ],
  "le-fichier-prospection-b2b-cle-de-voute-de-votre-croissance-mlunw2ai": [
    SERVICES.fichierProspection,
    SERVICES.qualificationLeads,
  ],
  "cold-emailing-b2b-france-la-strategie-gagnante-en-2024-mlywxerj": [
    SERVICES.campagnesEmailSms,
    SERVICES.outbound,
  ],
  "generation-leads-b2b-industrie-strategies-d-impact-mlrokvm8": [
    SERVICES.generationLeads,
    SERVICES.qualificationLeads,
  ],
  "les-10-outils-numeriques-indispensables-pour-booster-la-performance-commerciale-de-votre-entreprise":
    [SERVICES.developpementAutomatisation, SERVICES.strategieDigitale],
  "5-strategies-efficaces-pour-automatiser-vos-workflows-de-prospection": [
    SERVICES.developpementAutomatisation,
    SERVICES.outbound,
  ],
};

const DEFAULT_BY_THEME = {
  digital: [SERVICES.seoAcquisition, SERVICES.developpementAutomatisation],
  commercial: [SERVICES.generationLeads, SERVICES.teleprospection],
};

/**
 * @param {string} slug slug de l'article affiché
 * @param {'commercial' | 'digital'} theme thème détecté, utilisé en repli
 * @returns {{ href: string, label: string }[]}
 */
export function getRelatedServices(slug, theme) {
  return (
    SERVICES_BY_SLUG[slug] ||
    DEFAULT_BY_THEME[theme] ||
    DEFAULT_BY_THEME.commercial
  );
}
