export async function getMegaMenuData() {
  // Static data matching the user's provided database screenshot

  return [
    {
      id: "commercial-uuid",
      title: "Commercial",
      slug: "commercial",
      description: "Améliorez votre performance de vente.",
      subServices: [
        {
          id: "c0",
          title: "Prospection externalisée",
          slug: "prospection-commerciale-externalisee",
          href: "/services/prospection-commerciale-externalisee",
          description: "Une équipe dédiée pour exécuter et piloter votre prospection.",
        },
        {
          id: "c1",
          title: "Génération de Leads B2B",
          slug: "generation-leads-b2b",
          href: "/services/generation-leads-b2b",
          description: "Prospects ciblés et qualifiés pour votre pipeline.",
        },
        {
          id: "c2",
          title: "Téléprospection B2B",
          slug: "teleprospection-b2b",
          href: "/services/teleprospection-b2b",
          description: "Prise de contact directe et passage de barrages.",
        },
        {
          id: "c3",
          title: "Prise de Rendez-vous B2B",
          slug: "prise-rendez-vous-b2b",
          href: "/services/prise-rendez-vous-b2b",
          description: "Remplissez votre agenda avec des RDV qualifiés.",
        },
        {
          id: "c4",
          title: "Outbound Marketing B2B",
          slug: "outbound-marketing-b2b",
          href: "/services/outbound-marketing-b2b",
          description: "Stratégies proactives d'acquisition multicanale.",
        },
        {
          id: "c5",
          title: "Vente en Marque Blanche",
          slug: "vente-marque-blanche",
          href: "/services/vente-marque-blanche",
          description: "Déléguez vos ventes à nos experts dédiés.",
        },
        {
          id: "c6",
          title: "Fichier de prospection B2B",
          slug: "fichier-prospection-b2b",
          href: "/services/fichier-prospection-b2b",
          description: "Des contacts ciblés, vérifiés et prêts à activer.",
        },
        {
          id: "c7",
          title: "Qualification de leads B2B",
          slug: "qualification-leads-b2b",
          href: "/services/qualification-leads-b2b",
          description: "Scoring, appels et transmission claire dans votre CRM.",
        },
        {
          id: "c8",
          title: "Campagnes email et SMS B2B",
          slug: "campagnes-email-sms-b2b",
          href: "/services/campagnes-email-sms-b2b",
          description: "Des séquences segmentées et des relances mesurables.",
        },
      ],
    },
    {
      id: "digital-uuid",
      title: "Digital",
      slug: "digital",
      description: "Développez votre visibilité en ligne.",
      subServices: [
        {
          id: "d1",
          title: "Stratégie digitale complète",
          slug: "strategie-digitale",
          href: "/services/digital/strategie-digitale",
          description:
            "Une approche globale orientée performance et retour sur investissement.",
        },
        {
          id: "d2",
          title: "Sites web & e-commerce",
          slug: "sites-ecommerce",
          href: "/services/digital/sites-web-ecommerce",
          description:
            "Des interfaces performantes et optimisées pour la conversion.",
        },
        {
          id: "d3",
          title: "SEO & campagnes digitales",
          slug: "seo-ads",
          href: "/services/digital/seo-acquisition",
          description:
            "Référencement naturel, Google Ads et Social Ads intégrés.",
        },
        {
          id: "d4",
          title: "Branding & identité visuelle",
          slug: "branding",
          href: "/services/digital/branding-identite",
          description:
            "Une image de marque cohérente, professionnelle et mémorable.",
        },
        {
          id: "d5",
          title: "Développement & automatisation",
          slug: "dev-automation",
          href: "/services/digital/developpement-automatisation",
          description:
            "Développement full-stack et outils IA pour simplifier votre croissance.",
        },
      ],
    },
  ];
}
