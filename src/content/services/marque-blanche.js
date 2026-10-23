import { ARTICLES, SERVICES } from "../../lib/internal-links";

/*
 * Contenu éditorial long de /services/vente-marque-blanche (rendu par ServiceLongForm).
 * Requêtes visées : force de vente externalisée, vente en marque blanche, externaliser sa vente,
 * closing externalisé. S'appuie sur les engagements déjà publiés sur la page (équipe sous votre
 * marque, vos outils, account manager, reporting hebdomadaire, enregistrements d'appels).
 * Aucun chiffre, aucun prix, aucun résultat client.
 */
const link = ([href, text], label) => ({ href, text: label ?? text });

export const MARQUE_BLANCHE_CONTENT = {
  sections: [
    {
      title: "Ce que signifie vendre en marque blanche",
      paragraphs: [
        "Vendre en marque blanche, c’est confier à une équipe externe la conduite d’une partie de votre vente, tout en conservant votre identité face au client. Les commerciaux se présentent sous votre marque, utilisent vos outils (messagerie, CRM, scripts, conditions de vente) et suivent vos règles. Pour votre interlocuteur, il n’y a qu’une seule entreprise en face de lui : la vôtre.",
        "Cette approche diffère de la simple sous-traitance de prospection. Ici, l’équipe externe peut aller plus loin dans le cycle de vente : présenter l’offre, répondre aux objections, relancer les devis, négocier dans le cadre fixé, suivre le portefeuille. Elle s’intègre à votre organisation plutôt qu’elle ne travaille à côté.",
      ],
    },
    {
      title: "Ce que vous déléguez, ce qui reste chez vous",
      paragraphs: [
        "Déléguer ne veut pas dire lâcher le contrôle. La répartition est écrite avant le démarrage.",
      ],
      items: [
        {
          title: "Ce qui est délégué",
          text: "La prise en charge des opportunités que vous nous confiez : premiers échanges, présentation de l’offre, suivi des devis, relances, négociation dans le périmètre convenu, mise à jour du CRM après chaque échange.",
        },
        {
          title: "Ce qui reste chez vous",
          text: "La stratégie commerciale, les prix et les conditions, les remises autorisées, les engagements que l’on peut prendre au nom de l’entreprise. Au-delà du cadre écrit, la décision vous revient.",
        },
        {
          title: "Ce qui est partagé",
          text: "Le pipeline, les retours du terrain, l’évolution du discours. L’équipe externe fait remonter ce qu’elle entend des prospects, ce qui nourrit votre offre.",
        },
      ],
    },
    {
      title: "Quand cette approche est pertinente",
      paragraphs: [
        "Elle convient surtout quand vous avez des opportunités à traiter mais pas assez de capacité commerciale pour le faire au bon rythme.",
      ],
      items: [
        {
          title: "Vos leads s’accumulent plus vite que vous ne les traitez",
          text: [
            "Un renfort traite le flux sans que les contacts ne refroidissent. Si vos leads ne sont pas encore qualifiés, la ",
            link(SERVICES.qualification),
            " peut précéder cette étape.",
          ],
        },
        {
          title: "Votre activité est saisonnière",
          text: "Augmenter ou réduire la capacité selon les périodes évite de recruter pour un pic, puis de supporter un coût fixe pendant les creux.",
        },
        {
          title: "Vous lancez un marché ou une offre",
          text: "Une équipe en place rapidement permet de tester sans engager de recrutements longs.",
        },
        {
          title: "Votre portefeuille client demande un suivi",
          text: "Un suivi régulier des comptes existants détecte les occasions de développement et les signaux de départ avant qu’il ne soit tard.",
        },
      ],
      closing: [
        "À l’inverse, cette approche convient moins aux ventes qui reposent entièrement sur la relation personnelle du dirigeant, ou à celles qui exigent dès le premier contact une expertise technique très rare. Nous le disons au cadrage, car ce serait une perte de temps pour tout le monde.",
      ],
    },
    {
      title: "Une mise en place, étape par étape",
      items: [
        {
          title: "1. Immersion dans votre offre",
          text: "L’équipe apprend votre offre, vos clients types, vos arguments, vos objections récurrentes et les cas où il faut passer la main à un expert chez vous.",
        },
        {
          title: "2. Règles du jeu écrites",
          text: "Périmètre confié, remises et conditions autorisées, délais de réponse, situations qui remontent à vous, ton à employer. Rien ne se décide à l’oral.",
        },
        {
          title: "3. Accès à vos outils",
          text: "Messagerie, CRM, agenda, scripts : l’équipe travaille dans votre environnement, ce qui garde l’historique des échanges chez vous.",
        },
        {
          title: "4. Démarrage encadré",
          text: "Les premiers échanges sont suivis de près avec votre account manager : écoute d’enregistrements, ajustement du discours et des réponses avant de monter en charge.",
        },
        {
          title: "5. Pilotage régulier",
          text: "Un reporting hebdomadaire présente les échanges, les devis et les signatures. Un point régulier ajuste le périmètre, la capacité et le discours.",
        },
      ],
    },
    {
      title: "Transparence et responsabilité",
      paragraphs: [
        "Représenter une marque suppose de ne jamais tromper le client. Les commerciaux agissent en votre nom, avec votre accord, et ne prennent aucun engagement hors du cadre convenu. Leurs échanges sont consignés dans votre CRM, et les enregistrements d’appels servent au contrôle de qualité.",
        "La relation contractuelle reste celle de votre entreprise : c’est vous qui signez, vous qui livrez et vous qui répondez des promesses faites. D’où l’importance des règles écrites à l’étape précédente.",
      ],
    },
    {
      title: "Piloter une force de vente externalisée",
      paragraphs: [
        "Comme pour une équipe interne, le pilotage porte sur la progression du pipeline et la qualité des échanges, pas sur l’activité brute.",
      ],
      items: [
        {
          title: "Les opportunités reprises et leur avancement",
          text: "Combien d’opportunités ont été prises en charge, à quelle étape elles se trouvent, et depuis combien de temps.",
        },
        {
          title: "Le taux de passage entre étapes",
          text: "Présentation, devis, négociation, signature : l’étape où les opportunités s’arrêtent indique où agir.",
        },
        {
          title: "La qualité des échanges",
          text: "Écoute d’enregistrements, relecture des emails et retours de vos équipes : les chiffres seuls ne disent pas si le discours est juste.",
        },
        {
          title: "Les motifs de perte",
          text: [
            "Pourquoi une opportunité n’aboutit pas est l’information la plus utile pour votre offre. Les principes de suivi sont décrits dans notre article sur les ",
            link(ARTICLES.kpiProspection, "KPI de prospection"),
            ".",
          ],
        },
      ],
    },
    {
      title: "Interne, externalisé ou mixte",
      paragraphs: [
        [
          "Une force de vente externalisée n’exclut pas une équipe interne : beaucoup d’entreprises l’utilisent pour absorber un pic, lancer un marché ou valider un discours avant de recruter. Notre article ",
          link(ARTICLES.pourquoiExternaliser),
          " compare les options, et la page ",
          link(SERVICES.externalisee),
          " décrit le dispositif de prospection complet qui précède la vente.",
        ],
      ],
    },
  ],

  faqTitle: "Force de vente externalisée : vos questions",
  faqs: [
    [
      "Mes clients sauront-ils qu’une équipe externe intervient ?",
      "Les commerciaux se présentent sous votre marque et utilisent vos outils. La manière d’aborder ce point, notamment dans la relation contractuelle, est décidée avec vous : nous recommandons de ne jamais tromper un client sur l’identité de l’entreprise qui s’engage.",
    ],
    [
      "Où sont conservées les données et l’historique des échanges ?",
      "Dans votre CRM et vos outils : l’équipe y travaille directement, ce qui garde l’historique de chaque contact chez vous.",
    ],
    [
      "Peut-on augmenter ou réduire la capacité ?",
      "Oui, c’est l’un des intérêts de l’approche : la capacité s’ajuste à votre activité et à sa saisonnalité, dans les conditions fixées au contrat.",
    ],
    [
      "Les appels sont-ils enregistrés ?",
      "Les enregistrements d’appels font partie du contrôle de qualité. Leur usage respecte les règles d’information des personnes appelées.",
    ],
    [
      "Que faut-il pour démarrer ?",
      "Une offre claire, des opportunités à traiter, un accès à vos outils et une personne chez vous qui valide le discours et répond aux questions. Un audit gratuit permet de vérifier ces conditions avant tout engagement.",
    ],
    [
      "Où trouver les tarifs ?",
      [
        "Sur la page ",
        link(SERVICES.offres, "Offres et tarifs"),
        ", chaque offre affiche son prix et son mode de facturation.",
      ],
    ],
  ],

  related: {
    services: [
      [...SERVICES.externalisee, "Une équipe dédiée de la prospection au passage de relais."],
      [...SERVICES.teleprospection, "Les appels qui qualifient les besoins et ouvrent la discussion."],
      [...SERVICES.priseRdv, "Des rendez-vous qualifiés dans l’agenda de vos commerciaux."],
      [...SERVICES.qualification, "Trier vos leads avant de les confier à la vente."],
    ],
    articles: [
      [...ARTICLES.pourquoiExternaliser, "Externaliser ou recruter : l’arbitrage."],
      [...ARTICLES.guideExternalisee, "Le guide de la prospection commerciale externalisée."],
      [...ARTICLES.kpiProspection, "Piloter l’activité commerciale avec les bons indicateurs."],
    ],
  },
};
