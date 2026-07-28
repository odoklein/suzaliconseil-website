export const OFFER_CATEGORIES = [
  {
    id: "contact",
    label: "Centre de Contact",
    headline: "Prospection, fichiers, SMS et RDV dans un seul cockpit.",
    summary:
      "Des offres commerciales modulaires pour lancer, nourrir et transformer vos campagnes B2B.",
    sections: [
      {
        id: "rdv",
        title: "Acquisition & RDV",
        eyebrow: "Pipeline commercial",
        description:
          "Pour combiner ciblage, approche multicanale, qualification et passage de relais propre aux commerciaux.",
        offers: [
          {
            id: "contact-growth-standard",
            serviceHref: "/services/prospection-commerciale-externalisee",
            name: "Growth Standard",
            price: "1 590 €",
            billing: "/mois + 150 € par RDV validé et honoré",
            description:
              "Le plan growth est intégré au Centre de Contact pour piloter l'acquisition et les rendez-vous.",
            features: [
              "Prospection multicanale",
              "Account manager dédié",
              "Reporting hebdomadaire",
              "Intégration CRM",
              "Briefing avant-vente",
            ],
            highlight: true,
            tag: "Recommandé",
          },
          {
            id: "contact-vente-rdv",
            serviceHref: "/services/prise-rendez-vous-b2b",
            name: "Vente au Rendez-Vous",
            price: "599 €",
            billing: "setup + 55 € par RDV",
            description:
              "Audit, script, téléconseillers et suivi en temps réel pour remplir votre agenda.",
            features: [
              "10 RDV minimum",
              "Formation des téléconseillers",
              "Relances email et SMS sous 48h",
              "Plateforme de suivi en temps réel",
            ],
          },
          {
            id: "contact-qualification-leads",
            serviceHref: "/services/qualification-leads-b2b",
            name: "Qualification de Leads",
            price: "7 €",
            billing: "/lead qualifié",
            description:
              "Une cellule d'appel pour transformer vos leads existants en opportunités exploitables.",
            features: [
              "Minimum 100 leads",
              "Jusqu'à 5 appels par lead sur 10 jours",
              "Relances stratégiques",
              "Fiche de qualification détaillée",
            ],
          },
        ],
      },
      {
        id: "files",
        title: "Vente de fichiers qualifiés",
        eyebrow: "Data B2B",
        description:
          "Des bases propres, ciblées et activables pour alimenter vos équipes commerciales.",
        offers: [
          {
            id: "file-custom",
            serviceHref: "/services/fichier-prospection-b2b",
            name: "Fichier sur mesure",
            price: "Sur devis",
            billing: "selon ciblage",
            description:
              "Ciblage ICP, segmentation et enrichissement adaptés à votre marché.",
            features: [
              "Critères secteur, taille, zone et fonction",
              "Emails vérifiés",
              "Téléphones directs selon disponibilité",
              "Livraison Excel ou CSV",
            ],
          },
          {
            id: "file-starter-500",
            serviceHref: "/services/fichier-prospection-b2b",
            name: "Fichier Starter",
            price: "290 €",
            billing: "500 contacts",
            description:
              "Un fichier prêt à prospecter pour tester une cible rapidement.",
            features: [
              "500 contacts ciblés",
              "Emails vérifiés",
              "Données entreprise essentielles",
              "Livraison rapide",
            ],
          },
          {
            id: "file-pro-2000",
            serviceHref: "/services/fichier-prospection-b2b",
            name: "Fichier Pro",
            price: "890 €",
            billing: "2 000 contacts",
            description:
              "Un volume solide pour soutenir une campagne multicanale complète.",
            features: [
              "2 000 contacts ciblés",
              "Segmentation par priorité",
              "Données enrichies",
              "Format CRM-ready",
            ],
          },
        ],
      },
      {
        id: "sms-email",
        title: "SMS & Email",
        eyebrow: "Activation",
        description:
          "Des offres courtes pour activer vos fichiers et relancer les signaux chauds.",
        offers: [
          {
            id: "sms-starter-1000",
            serviceHref: "/services/campagnes-email-sms-b2b",
            name: "Starter SMS",
            price: "90 €",
            billing: "1 000 SMS",
            description:
              "Un premier volume de relance SMS pour tester un segment ciblé.",
            features: [
              "1 000 SMS inclus",
              "Message optimisé",
              "Ciblage par segment",
              "Suivi des envois",
            ],
          },
          {
            id: "sms-standard-2000",
            serviceHref: "/services/campagnes-email-sms-b2b",
            name: "Standard SMS",
            price: "180 €",
            billing: "2 000 SMS",
            description:
              "Une campagne SMS plus large pour soutenir une séquence commerciale.",
            features: [
              "2 000 SMS inclus",
              "Import de fichier",
              "Relance segmentée",
              "Reporting de campagne",
            ],
          },
          {
            id: "sms-pro-5000",
            serviceHref: "/services/campagnes-email-sms-b2b",
            name: "Pro SMS",
            price: "450 €",
            billing: "5 000 SMS",
            description:
              "Un pack SMS complet pour relancer un fichier qualifié à grande échelle.",
            features: [
              "5 000 SMS inclus",
              "Segmentation avancée",
              "Plan de relance",
              "Suivi post-campagne",
            ],
          },
          {
            id: "email-strategy",
            serviceHref: "/services/campagnes-email-sms-b2b",
            name: "Stratégie Email",
            price: "500 €",
            billing: "one-shot",
            description:
              "Architecture de campagne email pour une séquence claire, mesurable et actionnable.",
            features: [
              "6 séquences email",
              "Jusqu'à 5 000 emails",
              "Copywriting des messages",
              "Plan de lancement",
            ],
          },
          {
            id: "full-campaign-pack",
            serviceHref: "/services/campagnes-email-sms-b2b",
            name: "Pack Full Campagne",
            price: "890 €",
            billing: "/mois",
            description:
              "Emailing massif et relance SMS ciblée sur les contacts ayant ouvert ou cliqué.",
            features: [
              "5 000 emails inclus",
              "1 000 SMS de relance",
              "Ciblage des ouvreurs et cliqueurs",
              "Reporting de performance",
            ],
            highlight: true,
            tag: "Full funnel",
          },
        ],
      },
    ],
  },
  {
    id: "digital",
    label: "Solutions Digitales",
    headline: "Sites, automatisations et identité pour convertir mieux.",
    summary:
      "Une grille digitale complète avec options d'abonnement pour maintenance, évolution et optimisation.",
    sections: [
      {
        id: "digital-grid",
        title: "Grille validée",
        eyebrow: "Production digitale",
        description:
          "Chaque offre peut être livrée en projet ponctuel, avec un abonnement optionnel pour maintenir et améliorer.",
        offers: [
          {
            id: "digital-site-vitrine",
            name: "Site Vitrine",
            price: "1 200 €",
            billing: "projet",
            subscription: "Abonnement optionnel dès 89 €/mois",
            description:
              "Site 5 pages, responsive, rapide et prêt pour la conversion locale ou B2B.",
            features: [
              "Design personnalisé",
              "SEO de base",
              "Formulaire de contact",
              "Livraison 15 jours",
            ],
          },
          {
            id: "digital-site-avance",
            name: "Site Avancé",
            price: "3 500 €",
            billing: "projet",
            subscription: "Abonnement optionnel dès 190 €/mois",
            description:
              "Site complet pour contenus, formulaires avancés, tracking et parcours de conversion.",
            features: [
              "Architecture sur mesure",
              "Pages de service avancées",
              "Tracking et analytics",
              "Formation à la prise en main",
            ],
            highlight: true,
            tag: "Conversion",
          },
          {
            id: "digital-ecommerce",
            name: "E-commerce",
            price: "Sur devis",
            billing: "projet",
            subscription: "Abonnement optionnel dès 290 €/mois",
            description:
              "Boutique Shopify ou parcours de vente sur mesure pour produits, catalogues ou B2B.",
            features: [
              "Catalogue et paiement",
              "Tunnel d'achat optimisé",
              "Emails transactionnels",
              "Connexion outils métier",
            ],
          },
          {
            id: "digital-chatbot-ia",
            name: "Chatbot IA",
            price: "Sur devis",
            billing: "projet",
            subscription: "Abonnement optionnel dès 149 €/mois",
            description:
              "Assistant IA entraîné sur vos contenus pour qualifier, orienter ou assister vos visiteurs.",
            features: [
              "Base de connaissance",
              "Scénarios de qualification",
              "Intégration site",
              "Suivi des conversations",
            ],
          },
          {
            id: "digital-migration-crm",
            name: "Migration CRM",
            price: "Sur devis",
            billing: "projet",
            subscription: "Abonnement optionnel dès 190 €/mois",
            description:
              "Migration, nettoyage et automatisation CRM pour repartir sur des données exploitables.",
            features: [
              "Audit de structure",
              "Mapping des données",
              "Automatisations clés",
              "Recette et accompagnement",
            ],
          },
          {
            id: "digital-landing-page",
            name: "Landing Page",
            price: "850 €",
            billing: "projet",
            subscription: "Abonnement optionnel dès 79 €/mois",
            description:
              "Page dédiée à une campagne, pensée pour capter les leads avec un message direct.",
            features: [
              "Copywriting de conversion",
              "Formulaire connecté",
              "Tracking de campagne",
              "Version mobile optimisée",
            ],
          },
          {
            id: "digital-identite-visuelle",
            name: "Identité Visuelle",
            price: "Sur devis",
            billing: "projet",
            subscription: "Abonnement optionnel dès 120 €/mois",
            description:
              "Logo, direction visuelle et supports pour clarifier votre marque sur tous les points de contact.",
            features: [
              "Logo et déclinaisons",
              "Palette et typographies",
              "Charte d'usage",
              "Templates commerciaux",
            ],
          },
        ],
      },
    ],
  },
];

export const getOfferCount = (categoryId) => {
  const category = OFFER_CATEGORIES.find((item) => item.id === categoryId);
  return category
    ? category.sections.reduce((total, section) => total + section.offers.length, 0)
    : 0;
};

/** Flat view of every offer, used to look one up by id. */
export const ALL_OFFERS = OFFER_CATEGORIES.flatMap((category) =>
  category.sections.flatMap((section) => section.offers),
);

/**
 * Returns the offers matching the given ids, in the order requested.
 * Lets other surfaces (e.g. the homepage teaser) reuse catalogue pricing
 * without duplicating it.
 */
export const getOffersByIds = (ids) =>
  ids
    .map((id) => ALL_OFFERS.find((offer) => offer.id === id))
    .filter(Boolean);
