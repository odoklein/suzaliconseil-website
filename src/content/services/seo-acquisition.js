import { ARTICLES, SERVICES } from "../../lib/internal-links";

/*
 * Contenu éditorial long de /services/digital/seo-acquisition (rendu par ServiceLongForm).
 * Requêtes visées : agence acquisition digitale B2B, spécialiste / expert acquisition digitale,
 * agence acquisition Google, SEO et acquisition. Aucun chiffre, aucun résultat client.
 */
const link = ([href, text], label) => ({ href, text: label ?? text });

export const SEO_ACQUISITION_CONTENT = {
  sections: [
    {
      title: "L’acquisition digitale, appliquée au B2B",
      paragraphs: [
        "L’acquisition digitale regroupe tout ce qui amène des visiteurs qualifiés sur votre site, puis les transforme en demandes de contact : référencement naturel, publicité sur les moteurs de recherche et les réseaux sociaux, contenus, optimisation des pages. Elle se distingue de la prospection sortante, où c’est vous qui contactez les décideurs. Ici, ce sont des personnes qui cherchent déjà une solution qui vous trouvent.",
        "En B2B, trois particularités changent la manière de la piloter. Les volumes sont faibles : quelques demandes qualifiées valent souvent plus que des milliers de visites. Le cycle de décision est long et fait intervenir plusieurs personnes. Et la qualité d’un lead ne se juge pas dans l’outil publicitaire : elle se juge dans votre CRM, quand vos commerciaux l’ont traité. C’est pourquoi nous mesurons l’acquisition sur les demandes qualifiées, pas sur le trafic.",
        [
          "L’acquisition entrante et la prospection sortante se complètent. Notre article ",
          link(ARTICLES.outboundVsInbound),
          " explique quand privilégier l’une ou l’autre, et comment les combiner.",
        ],
      ],
    },
    {
      title: "Les six leviers, et comment nous les articulons",
      paragraphs: [
        "Un levier isolé donne rarement des résultats durables. Nous les choisissons et les ordonnons selon votre marché, la maturité de votre site et le temps dont vous disposez.",
      ],
      items: [
        {
          title: "SEO technique et sémantique",
          text: "L’audit du site (vitesse, structure, maillage interne, balisage) et le travail sur les requêtes réellement tapées par vos clients. C’est le levier le plus lent à produire des effets, mais l’un des plus durables : une page bien positionnée continue d’apporter des demandes sans coût par clic.",
        },
        {
          title: "Google Ads, pour être visible tout de suite",
          text: "Les campagnes sur le moteur de recherche placent votre offre devant des personnes qui cherchent exactement ce que vous vendez. Elles donnent des données rapides : quelles requêtes convertissent, quels messages fonctionnent. Ces enseignements nourrissent ensuite le référencement naturel.",
        },
        {
          title: "Publicité sur LinkedIn et Meta",
          text: "Utile pour atteindre une cible précise par fonction, secteur ou taille d’entreprise, et pour relancer les visiteurs qui n’ont pas encore pris contact. Elle convient surtout aux offres dont la cible est bien définie.",
        },
        {
          title: "Contenu éditorial",
          text: [
            "Articles, guides et études de cas répondent aux questions que se posent vos futurs clients avant d’acheter. C’est ce que nous faisons sur ce site avec les pages de ",
            link(SERVICES.generationLeads),
            " et nos articles. Chaque contenu vise une recherche précise, sans en dupliquer une autre.",
          ],
        },
        {
          title: "Popularité du site et e-réputation",
          text: "Des liens issus de sites crédibles, obtenus par des partenariats et des publications utiles, renforcent la confiance que les moteurs accordent à votre site. Nous écartons les pratiques qui visent à tromper les moteurs, car elles exposent le site à des sanctions.",
        },
        {
          title: "Optimisation de la conversion et analyse des données",
          text: "Mesurer les parcours (formulaires, pages d’atterrissage, appels) et corriger ce qui bloque. Améliorer le taux de conversion rend chaque visiteur plus rentable, quelle que soit la source.",
        },
      ],
    },
    {
      title: "SEO ou Google Ads : par où commencer ?",
      paragraphs: [
        "La question revient presque toujours, et la réponse dépend de votre urgence et de votre marché. Le référencement naturel demande du temps avant de produire, mais il s’inscrit dans la durée. La publicité produit des visites dès la mise en ligne, et s’arrête quand le budget s’arrête.",
        "Dans la plupart des cas B2B, l’approche la plus sûre combine les deux dans cet ordre : une base technique saine, des campagnes ciblées sur un petit nombre de requêtes à forte intention pour obtenir des demandes et des données rapidement, puis un effort éditorial et de référencement sur les requêtes qui ont prouvé leur valeur. Si votre marché est très concurrentiel sur les mots-clés publicitaires, l’effort peut se déplacer vers des requêtes plus précises, moins disputées.",
      ],
    },
    {
      title: "Notre méthode en quatre temps",
      items: [
        {
          title: "1. Audit et objectifs",
          text: "Nous analysons votre site, vos positions actuelles, vos campagnes et vos données de conversion. Nous fixons avec vous un objectif exprimé en demandes qualifiées, pas en visites, et nous définissons ce qu’est une demande qualifiée dans votre entreprise.",
        },
        {
          title: "2. Plan priorisé",
          text: "Nous classons les actions selon leur effet attendu et leur effort : corrections techniques, pages à créer ou à réécrire, campagnes à lancer, mesures à installer. Vous savez ce qui sera fait en premier, et pourquoi.",
        },
        {
          title: "3. Mise en œuvre",
          text: "Les corrections, les contenus et les campagnes sont réalisés par étapes, chaque étape étant mesurée avant la suivante. Les modifications du site se font avec vos équipes ou votre agence web si vous en avez une.",
        },
        {
          title: "4. Pilotage régulier",
          text: "Un point régulier présente les positions suivies, les demandes reçues, leur qualité vue par vos commerciaux et les ajustements décidés. Ce que vous apprenez de vos campagnes alimente le contenu, et inversement.",
        },
      ],
    },
    {
      title: "Ce que nous mesurons",
      paragraphs: [
        "Nous ne vendons pas des clics : nous suivons ce qui précède un chiffre d’affaires. Trois mesures reviennent à chaque point de pilotage.",
      ],
      items: [
        {
          title: "Les positions sur vos requêtes stratégiques",
          text: "Une courte liste de requêtes qui comptent pour votre activité, suivies dans le temps, plutôt qu’un classement global qui n’a pas de sens.",
        },
        {
          title: "Le coût par lead sur les campagnes payantes",
          text: "Le budget dépensé divisé par le nombre de demandes reçues, puis par le nombre de demandes jugées qualifiées par vos commerciaux. La seconde mesure est la seule qui compte vraiment.",
        },
        {
          title: "Les demandes entrantes et leur devenir",
          text: [
            "Formulaires, appels et prises de rendez-vous, rapprochés de ce qu’ils sont devenus dans votre CRM. Les principes de ce suivi sont décrits dans notre article ",
            link(ARTICLES.kpiProspection),
            ".",
          ],
        },
      ],
    },
    {
      title: "Comment choisir un spécialiste de l’acquisition digitale",
      paragraphs: [
        "Que vous cherchiez une agence, un expert indépendant ou un renfort pour votre équipe, quelques critères permettent de distinguer un partenaire sérieux, quel qu’il soit.",
      ],
      items: [
        {
          title: "Il connaît le B2B et ses cycles longs",
          text: "Demandez-lui comment il traite des volumes faibles et des décisions collectives. Une méthode pensée pour le grand public s’applique mal.",
        },
        {
          title: "Il commence par un audit, pas par une proposition standard",
          text: "Les premières semaines servent à comprendre votre marché, votre site et vos données avant de proposer des actions.",
        },
        {
          title: "Il formule des objectifs en demandes qualifiées",
          text: "Un objectif en visites ou en impressions ne dit rien de l’activité commerciale. Méfiez-vous des promesses de résultats chiffrés sans connaissance de votre marché.",
        },
        {
          title: "Il vous donne accès à vos données",
          text: "Vous devez rester propriétaire de vos comptes publicitaires et de vos outils de mesure, et pouvoir lire les rapports sans intermédiaire.",
        },
        {
          title: "Il sait travailler avec vos commerciaux",
          text: "L’acquisition n’a de valeur que si les demandes sont traitées. Un bon partenaire recueille le retour des commerciaux pour ajuster le ciblage.",
        },
      ],
    },
  ],

  faqTitle: "Acquisition digitale B2B : vos questions",
  faqs: [
    [
      "SEO ou Google Ads : lequel choisir en B2B ?",
      "Cela dépend de votre urgence et de votre marché. La publicité donne des demandes rapidement mais s’arrête avec le budget ; le référencement naturel est plus lent mais durable. Dans la plupart des cas, nous commençons par une base technique saine, puis une campagne ciblée qui fournit des données, puis un travail de référencement sur ce qui a fait ses preuves.",
    ],
    [
      "En combien de temps le référencement naturel produit-il des résultats ?",
      "Il n’existe pas de délai garanti : cela dépend de l’état du site, de la concurrence sur vos requêtes et du rythme de publication. Il faut compter plusieurs mois avant de voir un effet net sur les demandes. Méfiez-vous de tout prestataire qui promet une date précise de première page.",
    ],
    [
      "Quel budget publicitaire faut-il prévoir ?",
      "Il se définit à partir de la valeur d’un client pour vous et du nombre de demandes que vous voulez recevoir, pas l’inverse. Nous recommandons de démarrer par un budget de test limité sur peu de requêtes, de mesurer le coût par demande qualifiée, puis d’ajuster.",
    ],
    [
      "Faut-il refaire mon site avant de commencer ?",
      [
        "Pas forcément. L’audit indique si des corrections suffisent ou si une refonte est justifiée. Si c’est le cas, elle relève de notre offre ",
        link(SERVICES.sitesWeb),
        ".",
      ],
    ],
    [
      "Quelle différence entre acquisition digitale et prospection outbound ?",
      [
        "L’acquisition attire des visiteurs qui cherchent déjà une solution (référencement, publicité, contenus). La prospection outbound va chercher des décideurs ciblés par email, LinkedIn ou téléphone. Elles se combinent : voir ",
        link(SERVICES.outbound),
        ".",
      ],
    ],
    [
      "Comment mesurez-vous la qualité des demandes reçues ?",
      "Avec vos commerciaux. Nous rapprochons chaque demande de son devenir dans votre CRM (traitée, qualifiée, transformée en opportunité) et nous ajustons le ciblage et les messages en conséquence.",
    ],
    [
      "Travaillez-vous avec une équipe marketing existante ?",
      "Oui. Nous pouvons intervenir en renfort ou en pilotage, et nous nous coordonnons avec vos équipes ou votre agence web pour les modifications du site.",
    ],
  ],

  related: {
    services: [
      [...SERVICES.strategieDigitale, "Un audit et une feuille de route avant de choisir vos leviers."],
      [...SERVICES.sitesWeb, "Un site rapide et pensé pour convertir les visites en demandes."],
      [...SERVICES.generationLeads, "La prospection multicanale, en complément de l’acquisition entrante."],
      [...SERVICES.automatisation, "Relier vos formulaires, votre CRM et vos relances."],
      [...SERVICES.marketingExternalise, "Déléguer le référencement avec l’outbound et le contenu à une équipe dédiée."],
    ],
    articles: [
      [...ARTICLES.outboundVsInbound, "Quand privilégier l’entrant, le sortant, ou les deux."],
      [...ARTICLES.kpiProspection, "Les indicateurs utiles pour juger ce qui fonctionne."],
      [...ARTICLES.outilsNumeriques, "Les outils qui soutiennent la performance commerciale."],
    ],
  },
};
