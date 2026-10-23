import { ARTICLES, SERVICES } from "../../lib/internal-links";

/*
 * Contenu éditorial long des cinq pages du pôle digital (rendu par ServiceLongForm) :
 * /services/digital, /strategie-digitale, /sites-web-ecommerce, /branding-identite,
 * /developpement-automatisation. Aucun chiffre, aucun prix, aucun résultat client, aucun
 * engagement qui ne figure déjà sur les pages. Le contenu explique la discipline et la méthode.
 */
const link = ([href, text], label) => ({ href, text: label ?? text });

/* ------------------------------------------------------------------ hub digital */
export const DIGITAL_CONTENT = {
  sections: [
    {
      title: "Ce que recouvre le marketing digital B2B",
      paragraphs: [
        "Le marketing digital B2B réunit tout ce qui permet à une entreprise d’être trouvée, comprise et choisie en ligne par des acheteurs professionnels : sa stratégie, son site, sa visibilité dans les moteurs de recherche et les réseaux, son image de marque et les outils qui relient ces éléments à ses ventes. Il ne se juge pas à la beauté d’un site ou au nombre de visites, mais à sa capacité à produire des demandes que vos commerciaux peuvent traiter.",
        "En B2B, les volumes sont faibles, les cycles longs et les décisions collectives. Un projet digital doit donc partir de la réalité commerciale : qui achète, comment il cherche, ce qui le rassure, et ce que deviennent les demandes une fois reçues.",
      ],
    },
    {
      title: "Quel service pour quel besoin ?",
      items: [
        {
          title: "Vous ne savez pas par où commencer",
          text: [
            "Un audit et une feuille de route priorisée permettent de choisir les chantiers dans le bon ordre. Voir la ",
            link(SERVICES.strategieDigitale, "stratégie marketing digitale"),
            ".",
          ],
        },
        {
          title: "Votre site ne génère pas de demandes, ou n’inspire pas confiance",
          text: [
            "La création ou la refonte d’un site pensé pour convertir fait l’objet de la page ",
            link(SERVICES.sitesWeb),
            ".",
          ],
        },
        {
          title: "Vous voulez attirer des prospects qui cherchent déjà une solution",
          text: [
            "Référencement naturel, campagnes ciblées et contenus relèvent de ",
            link(SERVICES.seoAcquisition, "SEO et acquisition digitale"),
            ".",
          ],
        },
        {
          title: "Votre marque est peu lisible ou incohérente",
          text: [
            "Positionnement, identité visuelle et charte sont traités dans ",
            link(SERVICES.branding),
            ".",
          ],
        },
        {
          title: "Vos outils ne se parlent pas et vos équipes ressaisissent les mêmes données",
          text: [
            "Connexions entre outils, automatisations et développements sur mesure : voir ",
            link(SERVICES.automatisation),
            ".",
          ],
        },
      ],
    },
    {
      title: "Comment ces services s’articulent",
      paragraphs: [
        "Les cinq services peuvent s’acheter séparément, mais ils s’enchaînent naturellement. Un positionnement clair rend un site plus convaincant. Un site qui convertit rend l’acquisition plus rentable. Des automatisations bien branchées garantissent que chaque demande arrive au bon commercial, vite.",
        "L’ordre dépend de votre situation. Lancer des campagnes publicitaires vers un site qui ne convertit pas revient à payer pour des visites perdues : mieux vaut corriger le site d’abord. Refaire un site sans savoir ce que cherchent vos clients conduit à une jolie vitrine que personne ne trouve. C’est le rôle de l’audit de départ de trancher.",
        [
          "Le digital travaille aussi en tandem avec la prospection : acquisition entrante d’un côté, ",
          link(SERVICES.generationLeads, "génération de leads"),
          " sortante de l’autre. Notre article ",
          link(ARTICLES.outboundVsInbound),
          " explique comment les combiner.",
        ],
      ],
    },
    {
      title: "Notre méthode en quatre temps",
      items: [
        {
          title: "Cadrer",
          text: "Nous partons de votre objectif, de vos contraintes et de ce qui existe déjà : site, outils, contenus, équipes, historique des demandes.",
        },
        {
          title: "Concevoir",
          text: "Les priorités deviennent des parcours, des messages, des outils et des livrables précis, validés avec vous avant le développement.",
        },
        {
          title: "Déployer",
          text: "Un premier périmètre utile est mis en ligne rapidement, ce qui permet de mesurer ce qui compte avant d’étendre.",
        },
        {
          title: "Améliorer",
          text: "Nous suivons les retours et les données pour faire évoluer le dispositif avec vous, au rythme de vos équipes.",
        },
      ],
    },
    {
      title: "Les erreurs qui coûtent le plus cher",
      items: [
        {
          title: "Refondre le site avant de savoir ce qui ne marche pas",
          text: "Une refonte sans diagnostic reproduit souvent les défauts de l’ancien site avec un meilleur design.",
        },
        {
          title: "Acheter du trafic vers un site qui ne convertit pas",
          text: "Chaque visite payée vers une page qui ne donne pas envie de prendre contact est une dépense perdue.",
        },
        {
          title: "Empiler les outils sans les relier",
          text: "Des outils qui ne se parlent pas obligent vos équipes à ressaisir les données, avec des erreurs et du temps perdu à la clé.",
        },
        {
          title: "Mesurer des indicateurs sans lien avec la vente",
          text: "Visites, impressions et abonnés flattent les rapports. Seules les demandes qualifiées et leur devenir disent si l’investissement sert l’entreprise.",
        },
        {
          title: "Publier du contenu sans intention de recherche",
          text: "Un article qui ne répond à aucune question précise de vos clients n’a presque aucune chance d’être trouvé.",
        },
        {
          title: "Ne pas écouter les commerciaux",
          text: "Ce sont eux qui savent si les demandes sont bonnes. Un dispositif digital coupé de leurs retours se trompe de cible sans le savoir.",
        },
      ],
    },
    {
      title: "Ce que nous attendons de vous",
      paragraphs: [
        "Un projet digital réussit quand l’entreprise s’y implique. Concrètement : un interlocuteur qui connaît vos clients et peut trancher, l’accès à vos outils et à vos données de départ, des contenus et des retours dans des délais raisonnables, et vos commerciaux pour dire si les demandes reçues sont de bonne qualité. Sans ce retour, un dispositif digital optimise des chiffres qui ne disent rien de la vente.",
      ],
    },
  ],

  faqTitle: "Agence digitale B2B : vos questions",
  faqs: [
    [
      "Par où commencer un projet digital ?",
      "Par un état des lieux : site, positions, campagnes, outils et surtout ce que deviennent les demandes reçues. Il indique si le premier chantier est le site, l’acquisition, la marque ou les outils.",
    ],
    [
      "Faut-il refaire son site avant de faire du référencement ou de la publicité ?",
      "Pas forcément. Si le site est sain, des corrections suffisent. S’il convertit mal ou charge lentement, il vaut mieux le traiter avant d’acheter du trafic.",
    ],
    [
      "Travaillez-vous avec nos équipes ou prestataires existants ?",
      "Oui. Nous pouvons piloter ou compléter vos équipes et vos prestataires, en nous coordonnant avec eux pour les modifications du site, des campagnes et des outils.",
    ],
    [
      "Quelle différence entre une agence digitale et une agence de prospection ?",
      [
        "L’agence digitale travaille ce qui attire et convainc en ligne (site, visibilité, marque, outils). L’agence de prospection va chercher des décideurs précis par email, LinkedIn et téléphone. Nous proposons les deux : voir ",
        link(SERVICES.commercial, "prospection commerciale B2B"),
        ".",
      ],
    ],
    [
      "Où trouver les tarifs ?",
      [
        "Chaque offre affiche son prix et son mode de facturation sur la page ",
        link(SERVICES.offres, "Offres et tarifs"),
        ".",
      ],
    ],
  ],
  related: {
    articles: [
      [...ARTICLES.outilsNumeriques, "Les outils qui soutiennent la performance commerciale."],
      [...ARTICLES.outboundVsInbound, "Entrant, sortant : comment choisir et combiner."],
      [...ARTICLES.automatiserWorkflows, "Automatiser sans perdre la qualité des échanges."],
    ],
  },
};

/* ------------------------------------------------------------ stratégie digitale */
export const STRATEGIE_DIGITALE_CONTENT = {
  sections: [
    {
      title: "Ce qu’est une stratégie marketing digitale B2B",
      paragraphs: [
        "Une stratégie marketing digitale fixe ce que vous cherchez à obtenir en ligne, auprès de qui, avec quels moyens et dans quel ordre. Elle ne se réduit ni à un calendrier de publications ni à un budget publicitaire : elle relie vos objectifs commerciaux aux actions qui y contribuent, et elle écarte celles qui n’y contribuent pas.",
        "En B2B, une bonne stratégie répond à quatre questions. Qui sont les acheteurs, et comment cherchent-ils ? Qu’est-ce qui les convainc ? Quels leviers (référencement, publicité, contenus, relations) sont les plus adaptés à notre marché et à nos moyens ? Et comment saurons-nous que cela fonctionne ?",
      ],
    },
    {
      title: "À quoi ressemble un audit digital",
      paragraphs: [
        "L’audit est le point de départ : il établit ce qui existe, ce qui fonctionne et ce qui freine. Nous l’abordons par six angles.",
      ],
      items: [
        {
          title: "Le site : technique et parcours",
          text: "Vitesse, structure, balisage, lisibilité sur mobile, clarté du message et des parcours vers le contact.",
        },
        {
          title: "La visibilité : référencement et campagnes",
          text: "Positions sur les requêtes qui comptent, pages qui captent la demande, campagnes en cours et leur cohérence avec le site.",
        },
        {
          title: "La conversion",
          text: "Formulaires, pages d’atterrissage, prise de rendez-vous : où les visiteurs abandonnent et pourquoi.",
        },
        {
          title: "Les données et la mesure",
          text: "Ce qui est mesuré, ce qui ne l’est pas, et si la mesure est fiable. Une demande doit pouvoir être suivie jusqu’au CRM.",
        },
        {
          title: "Le positionnement et la concurrence",
          text: "Ce que disent vos concurrents, ce qui vous distingue réellement, et si votre message est compris en quelques secondes.",
        },
        {
          title: "Les outils et l’organisation",
          text: "Les outils en place, les tâches répétitives, la manière dont marketing et ventes se transmettent les demandes.",
        },
      ],
    },
    {
      title: "De l’audit à la feuille de route",
      paragraphs: [
        "Un audit qui ne débouche pas sur des décisions est un rapport de plus. La feuille de route classe les actions selon deux critères : l’effet attendu sur vos objectifs et l’effort nécessaire. On y distingue les gains rapides, réalisables vite et sans grand investissement, des chantiers de fond qui demandent du temps et un budget.",
        "Chaque action reçoit un responsable, un calendrier et un indicateur de réussite. Le budget est réparti par chantier, afin que vous sachiez ce que coûte chaque décision et ce qu’elle doit apporter. La feuille de route est un document de travail : elle se révise au fil des résultats.",
      ],
    },
    {
      title: "Choisir ses objectifs et ses indicateurs",
      paragraphs: [
        "Partez de l’objectif commercial et remontez vers les indicateurs, et non l’inverse. Si l’objectif est d’obtenir davantage de demandes de devis qualifiées, suivez le nombre de demandes jugées qualifiées par vos commerciaux, leur coût d’acquisition et leur taux de transformation. Évitez les indicateurs flatteurs qui ne disent rien de la vente : visites, impressions, abonnés.",
        [
          "Pour la prospection, les mêmes principes s’appliquent : voir notre article sur les ",
          link(ARTICLES.kpiProspection, "KPI de prospection commerciale"),
          ".",
        ],
      ],
    },
    {
      title: "Aligner marketing et ventes",
      paragraphs: [
        "La plupart des dispositifs digitaux échouent à la jonction entre marketing et ventes : le marketing remet des demandes que les commerciaux jugent faibles, et personne ne tranche. L’alignement passe par trois décisions : une définition écrite d’une demande qualifiée, un délai de traitement convenu, et un retour régulier des commerciaux sur la qualité de ce qu’ils reçoivent.",
        [
          "Quand la qualité des demandes pose problème, un travail de ",
          link(SERVICES.qualification, "qualification"),
          " ou de ",
          link(SERVICES.generationLeads, "génération de leads"),
          " peut compléter le dispositif digital.",
        ],
      ],
    },
    {
      title: "Quand faire appel à un accompagnement externe",
      items: [
        {
          title: "Vous n’avez pas de responsable digital",
          text: "Une direction digitale externalisée apporte une vision d’ensemble sans le coût d’un recrutement à temps plein.",
        },
        {
          title: "Vous avez plusieurs prestataires sans pilote",
          text: "Agence web, agence de publicité, freelance de contenu : quelqu’un doit tenir le cap commun et vérifier que les actions se renforcent.",
        },
        {
          title: "Vos résultats stagnent sans que vous sachiez pourquoi",
          text: "Un regard extérieur sur les données et le parcours révèle souvent des freins que l’habitude rend invisibles.",
        },
        {
          title: "Vous préparez une refonte ou un lancement",
          text: "Mieux vaut décider des priorités avant d’engager un budget de développement ou de campagne.",
        },
      ],
    },
  ],

  faqTitle: "Stratégie digitale : vos questions",
  faqs: [
    [
      "Que contient la feuille de route que vous livrez ?",
      "Une liste d’actions classées par effet attendu et effort, avec un responsable, un calendrier, un indicateur de réussite et un budget par chantier. Elle distingue les gains rapides des chantiers de fond.",
    ],
    [
      "Pouvez-vous piloter nos prestataires existants ?",
      "Oui, c’est un cas fréquent : nous coordonnons vos agences et vos équipes internes autour d’objectifs communs et suivons les résultats avec vous.",
    ],
    [
      "Le diagnostic est-il gratuit ?",
      "Oui, un premier diagnostic est offert avant tout engagement. Il indique les grandes priorités ; un audit approfondi donne lieu à une proposition distincte.",
    ],
    [
      "Faut-il avoir un budget publicitaire pour commencer ?",
      [
        "Non. Beaucoup de gains viennent du site, du contenu et des outils, avant toute dépense de campagne. Le sujet est détaillé sur la page ",
        link(SERVICES.seoAcquisition),
        ".",
      ],
    ],
    [
      "En quoi la stratégie digitale se distingue-t-elle de la prospection commerciale ?",
      [
        "La stratégie digitale concerne ce qui attire et convainc en ligne. La prospection va chercher des décideurs précis. Les deux se préparent ensemble : voir ",
        link(SERVICES.commercial),
        ".",
      ],
    ],
  ],
  related: {
    services: [
      [...SERVICES.seoAcquisition, "Mettre en œuvre le volet acquisition de la feuille de route."],
      [...SERVICES.sitesWeb, "Créer ou refondre un site pensé pour convertir."],
      [...SERVICES.automatisation, "Relier les outils et automatiser les tâches répétitives."],
    ],
    articles: [
      [...ARTICLES.outilsNumeriques, "Les outils numériques qui soutiennent la performance commerciale."],
      [...ARTICLES.kpiProspection, "Choisir des indicateurs qui servent la vente."],
    ],
  },
};

/* ------------------------------------------------------------- sites web / e-commerce */
export const SITES_WEB_CONTENT = {
  sections: [
    {
      title: "Un site B2B sert d’abord à convaincre et à convertir",
      paragraphs: [
        "Pour un acheteur professionnel, le site est souvent le premier contact avec votre entreprise, et parfois le seul avant qu’il ne décide de vous écrire ou de passer à un concurrent. Il doit répondre à trois questions en quelques secondes : que faites-vous, pour qui, et pourquoi vous faire confiance ? Puis offrir un chemin évident vers la prise de contact.",
        "Un site B2B performant n’est donc pas celui qui impressionne le plus, mais celui qui rend la décision facile : message clair, pages organisées autour de ce que cherchent vos clients, preuves crédibles et démarches simples.",
      ],
    },
    {
      title: "Ce qui compose un bon site B2B",
      items: [
        {
          title: "Un message clair dès le haut de page",
          text: "Ce que vous vendez, à qui, avec quel bénéfice, dit sans jargon. Si un visiteur ne le comprend pas en quelques secondes, il repart.",
        },
        {
          title: "Une page par intention",
          text: "Chaque service ou sujet a sa page, qui répond à une recherche précise. Cette structure aide les visiteurs comme les moteurs de recherche.",
        },
        {
          title: "Des preuves vérifiables",
          text: "Cas clients réels, méthode décrite, mentions légales et coordonnées claires. Une promesse sans preuve pèse peu ; une preuve inventée coûte cher.",
        },
        {
          title: "Des démarches simples",
          text: "Formulaires courts, prise de rendez-vous directe, numéro visible. Chaque champ en trop fait perdre des demandes.",
        },
        {
          title: "Rapidité et accessibilité",
          text: "Un site rapide, lisible sur mobile et utilisable par tous convertit mieux et se positionne mieux. Les indicateurs de performance de Google (Core Web Vitals) sont travaillés dès la maquette.",
        },
        {
          title: "Une mesure branchée sur vos ventes",
          text: "Suivi des formulaires, des appels et des prises de rendez-vous, rattachés à leur source, pour savoir quelles pages produisent des demandes.",
        },
      ],
    },
    {
      title: "Site vitrine, e-commerce ou application : quel projet ?",
      items: [
        {
          title: "Le site vitrine",
          text: "Il présente votre offre, vos références et votre démarche, et génère des demandes de contact. C’est le projet le plus courant en B2B de services.",
        },
        {
          title: "Le site e-commerce B2B",
          text: "Il prend en charge des commandes, avec ses spécificités : tarifs par client, devis, achats récurrents, paiement à terme, gestion des stocks. Il se justifie quand vos clients commandent régulièrement des produits référencés.",
        },
        {
          title: "L’application web",
          text: "Un espace client, un outil métier ou une plateforme qui n’existe pas sous forme de produit du marché. Elle relève de notre offre de développement sur mesure.",
        },
        {
          title: "La refonte d’un site existant",
          text: "Moderniser le design ou la technologie sans perdre le référencement acquis, ce qui demande un soin particulier, décrit plus bas.",
        },
      ],
    },
    {
      title: "Refondre un site sans perdre son référencement",
      paragraphs: [
        "Une refonte mal préparée peut effacer des années de positions dans les moteurs de recherche. Quelques précautions permettent de l’éviter.",
      ],
      items: [
        {
          title: "Cartographier l’existant",
          text: "Lister les pages qui reçoivent des visites et des demandes, et les requêtes sur lesquelles elles se positionnent.",
        },
        {
          title: "Conserver ou rediriger chaque adresse",
          text: [
            "Chaque ancienne adresse qui change reçoit une redirection permanente vers la nouvelle. Aucune page utile ne doit disparaître sans remplaçant. Les principes de suivi sont proches de ceux de l’",
            link(SERVICES.seoAcquisition, "acquisition et du référencement"),
            ".",
          ],
        },
        {
          title: "Reprendre les contenus et les balises",
          text: "Titres, descriptions, structure des titres et textes qui fonctionnent sont repris, puis améliorés, plutôt que réécrits à zéro.",
        },
        {
          title: "Tester avant la mise en ligne, surveiller après",
          text: "Contrôle des redirections, de la vitesse et de l’indexation avant le lancement, puis suivi des positions et des erreurs dans les semaines qui suivent.",
        },
      ],
    },
    {
      title: "Les étapes d’un projet de site",
      items: [
        {
          title: "1. Atelier UX et maquettes",
          text: "Définition des parcours utilisateurs et des maquettes, validées avec vous avant le développement.",
        },
        {
          title: "2. Développement",
          text: "Intégration responsive et réalisation des fonctionnalités, sur un socle technique maintenable.",
        },
        {
          title: "3. Recette et optimisation",
          text: "Tests sur différents appareils, optimisation de la vitesse et du référencement technique, correction des défauts.",
        },
        {
          title: "4. Formation et mise en ligne",
          text: "Nous vous formons à l’administration du site (CMS) et accompagnons le lancement.",
        },
      ],
    },
    {
      title: "Ce que nous attendons de vous",
      paragraphs: [
        "Les contenus (textes, visuels, références) sont ce qui retarde le plus souvent un site. Prévoir à l’avance une personne qui fournit et valide, et réunir très tôt les accès (nom de domaine, hébergement, outils de mesure), fait gagner des semaines.",
      ],
    },
  ],

  faqTitle: "Création de site : vos questions",
  faqs: [
    [
      "Combien de temps faut-il pour créer un site ?",
      "Cela dépend du périmètre (nombre de pages, fonctionnalités, e-commerce) et de la rapidité de vos retours sur les maquettes et les contenus. Nous annonçons un calendrier précis après l’atelier de cadrage, jamais avant.",
    ],
    [
      "Pourrai-je modifier mon site moi-même ?",
      "Oui. Nous vous formons à l’administration du site et vous remettons les accès, de sorte que vous puissiez modifier les textes et les pages courantes sans dépendre de nous.",
    ],
    [
      "Que devient mon référencement lors d’une refonte ?",
      "Il est préservé par une préparation soignée : cartographie des pages qui comptent, redirections de chaque adresse modifiée, reprise des contenus et des balises, tests avant la mise en ligne et suivi après.",
    ],
    [
      "Quelles sont les particularités d’un site e-commerce B2B ?",
      "Tarifs spécifiques par client, devis, commandes récurrentes, paiement différé, règles de livraison par client. Elles influencent le choix de la solution technique dès le départ.",
    ],
    [
      "Proposez-vous la maintenance et la sécurité ?",
      "Oui : surveillance, mises à jour de sécurité et sauvegardes font partie des prestations de maintenance que nous proposons après la mise en ligne.",
    ],
  ],
  related: {
    services: [
      [...SERVICES.seoAcquisition, "Faire venir les visiteurs qui cherchent déjà votre offre."],
      [...SERVICES.strategieDigitale, "Définir les priorités avant d’engager un budget."],
      [...SERVICES.branding, "Une identité cohérente sur le site et tous les supports."],
      [...SERVICES.automatisation, "Relier le site à votre CRM et vos outils."],
    ],
    articles: [
      [...ARTICLES.outilsNumeriques, "Les outils numériques qui servent la performance commerciale."],
      [...ARTICLES.outboundVsInbound, "Entrant ou sortant : où le site s’inscrit."],
    ],
  },
};

/* ----------------------------------------------------------------- branding */
export const BRANDING_CONTENT = {
  sections: [
    {
      title: "Ce qu’est une identité de marque B2B",
      paragraphs: [
        "Une marque B2B n’est pas seulement un logo. C’est l’ensemble de ce qui permet à un acheteur professionnel de comprendre qui vous êtes, ce qui vous distingue et pourquoi vous faire confiance : un positionnement, une manière de parler, une identité visuelle et la cohérence entre tous ces éléments sur chaque support.",
        "Dans un achat B2B, où le risque pèse sur la personne qui choisit, une marque claire et cohérente rassure. Elle ne remplace pas la qualité de l’offre, mais elle évite qu’une bonne offre soit mal perçue parce que sa présentation est confuse ou disparate.",
      ],
    },
    {
      title: "La plateforme de marque avant le logo",
      paragraphs: [
        "On commence rarement par le dessin. Avant tout travail graphique, une plateforme de marque fixe le socle stratégique : à qui vous parlez, pourquoi vous existez, ce que vous promettez, ce qui vous distingue et sur quel ton vous vous exprimez.",
      ],
      items: [
        {
          title: "La mission et la vision",
          text: "Ce que l’entreprise fait pour ses clients et le cap qu’elle se donne.",
        },
        {
          title: "Les valeurs",
          text: "Quelques principes réellement appliqués, qui guident les choix et se reconnaissent dans les actes plutôt que dans les mots.",
        },
        {
          title: "La promesse et la cible",
          text: "Ce que vous proposez, à quel type d’acheteur, et la différence que vous apportez par rapport aux alternatives.",
        },
        {
          title: "La tonalité",
          text: "La manière de s’exprimer à l’écrit et à l’oral : sobre, pédagogue, direct. Elle guide les contenus et les messages de prospection.",
        },
      ],
    },
    {
      title: "Ce que contient une identité visuelle complète",
      items: [
        {
          title: "Logotype et déclinaisons",
          text: "Un logo pensé pour l’écran comme pour le papier, avec ses versions (couleur, monochrome, réduite) et ses règles de protection.",
        },
        {
          title: "Charte graphique",
          text: "Palette de couleurs, typographies, iconographie, mise en page : le manuel qui garantit la cohérence, y compris quand plusieurs personnes créent des supports.",
        },
        {
          title: "Supports marketing et print",
          text: "Cartes de visite, brochures, présentations commerciales, signatures d’email, déclinés selon la charte.",
        },
        {
          title: "Composants pour les produits digitaux",
          text: "Pour les entreprises qui ont un produit en ligne : une bibliothèque de composants d’interface cohérente avec la marque.",
        },
        {
          title: "Direction artistique",
          text: "La supervision de l’image dans la durée : photographies, vidéos, animations, afin que la marque garde son cap dans les nouveaux supports.",
        },
      ],
    },
    {
      title: "Quand faut-il repenser sa marque ?",
      paragraphs: [
        "Une identité de marque n’a pas à changer souvent : sa constance fait partie de sa valeur. Quelques situations justifient pourtant de s’y pencher.",
      ],
      items: [
        {
          title: "Votre activité a évolué",
          text: "L’entreprise propose aujourd’hui autre chose, ou s’adresse à d’autres clients, que ce que son image laisse entendre.",
        },
        {
          title: "Vous changez de taille ou de marché",
          text: "Passer d’une clientèle locale à des comptes plus importants, ou de nouveaux pays, demande une image à la hauteur des attentes de ces acheteurs.",
        },
        {
          title: "Vos supports ne se ressemblent plus",
          text: "Au fil des années et des prestataires, site, présentations et documents ont dérivé : l’ensemble paraît disparate.",
        },
        {
          title: "Vous fusionnez ou vous vous rapprochez d’un autre acteur",
          text: "Une opération de ce type est l’occasion de clarifier ce que la nouvelle entité représente.",
        },
        {
          title: "Votre marque est difficile à distinguer",
          text: "Si vos clients vous confondent avec un concurrent, ou ne retiennent pas votre nom, un travail de positionnement peut l’éviter.",
        },
      ],
    },
    {
      title: "Marque et acquisition : un même sujet",
      paragraphs: [
        [
          "Une identité cohérente rend le reste plus efficace. Le site, les emails de prospection, les présentations commerciales et les publications se reconnaissent entre eux, ce qui renforce la confiance d’un contact qui vous croise à plusieurs reprises. Ce travail de cohérence se retrouve dans la ",
          link(SERVICES.sitesWeb, "création du site"),
          " et dans les ",
          link(SERVICES.campagnes, "campagnes de prospection"),
          ".",
        ],
      ],
    },
    {
      title: "Notre démarche",
      items: [
        {
          title: "1. État des lieux",
          text: "Analyse de votre image actuelle, de vos supports et de la manière dont vos concurrents se présentent, pour repérer ce qui vous distingue vraiment.",
        },
        {
          title: "2. Atelier de positionnement",
          text: "Travail avec vous sur la plateforme de marque, à partir de ce que disent vos clients et vos équipes.",
        },
        {
          title: "3. Pistes créatives",
          text: "Présentation d’orientations argumentées, avec leurs raisons, pour décider sur des critères et pas seulement sur un goût.",
        },
        {
          title: "4. Affinage et livraison",
          text: "Mise au point de la piste retenue, puis remise des fichiers et de la charte, avec leurs règles d’usage.",
        },
        {
          title: "5. Déploiement",
          text: "Aide à l’application de la nouvelle identité sur vos supports prioritaires, pour que le changement soit visible et cohérent.",
        },
      ],
    },
    {
      title: "Les erreurs à éviter",
      items: [
        {
          title: "Commencer par le logo",
          text: "Sans positionnement clair, un logo n’a rien à exprimer et se choisit sur un goût personnel.",
        },
        {
          title: "Copier les codes du secteur",
          text: "Se fondre dans la masse est rarement un avantage quand l’acheteur compare plusieurs fournisseurs.",
        },
        {
          title: "Multiplier les couleurs et les styles",
          text: "Une identité simple et stricte se retient et se reproduit plus facilement qu’une identité riche mais flottante.",
        },
        {
          title: "Ne pas documenter",
          text: "Sans règles écrites, la cohérence se perd dès que plusieurs personnes ou prestataires créent des supports.",
        },
      ],
    },
  ],

  faqTitle: "Branding B2B : vos questions",
  faqs: [
    [
      "Faut-il une plateforme de marque pour simplement changer de logo ?",
      "Ce n’est pas obligatoire, mais c’est recommandé : un logo qui ne s’appuie pas sur un positionnement clair se choisit sur un goût et vieillit mal. Une plateforme de marque courte suffit souvent.",
    ],
    [
      "Puis-je conserver mon logo actuel ?",
      "Oui. Un audit de l’existant indique si le logo mérite d’être gardé et modernisé, ou s’il doit être remplacé. Conserver ce qui fonctionne est une décision légitime.",
    ],
    [
      "Que recevrai-je à la fin de la mission ?",
      "Les fichiers du logo dans ses déclinaisons, la charte graphique avec ses règles d’usage, et les supports convenus au départ (par exemple cartes de visite ou présentation commerciale).",
    ],
    [
      "Comment le branding s’articule-t-il avec le site web ?",
      [
        "L’identité est conçue pour fonctionner à l’écran comme sur papier, et sert de base à la création du site. Voir la page ",
        link(SERVICES.sitesWeb),
        ".",
      ],
    ],
    [
      "Où trouver les tarifs ?",
      [
        "Chaque offre affiche son prix et son mode de facturation sur la page ",
        link(SERVICES.offres, "Offres et tarifs"),
        ".",
      ],
    ],
  ],
  related: {
    services: [
      [...SERVICES.sitesWeb, "Un site qui applique votre identité et convertit."],
      [...SERVICES.strategieDigitale, "Replacer la marque dans une stratégie d’ensemble."],
      [...SERVICES.seoAcquisition, "Faire connaître votre marque aux acheteurs qui cherchent."],
    ],
    articles: [
      [...ARTICLES.outilsNumeriques, "Les outils qui soutiennent l’image et la performance."],
      [...ARTICLES.prospectionPme, "Une image cohérente dans la prospection d’une PME."],
    ],
  },
};

/* ---------------------------------------------------- développement et automatisation */
export const AUTOMATISATION_CONTENT = {
  sections: [
    {
      title: "Automatiser, mais pour quoi faire ?",
      paragraphs: [
        "Automatiser, c’est confier à un outil les tâches répétitives, prévisibles et sans jugement : recopier une donnée d’un logiciel à un autre, envoyer un rappel, produire un rapport, router une demande vers la bonne personne. L’objectif n’est pas de supprimer le travail humain, mais de le recentrer sur ce qui demande du jugement et de la relation.",
        "Une bonne automatisation fait gagner du temps, réduit les erreurs de saisie et accélère les réponses. Une mauvaise automatise un processus déjà confus et rend les erreurs plus rapides. C’est pourquoi la première étape est toujours de comprendre le processus tel qu’il fonctionne vraiment.",
      ],
    },
    {
      title: "Les automatisations qui rendent le plus service en B2B",
      items: [
        {
          title: "Capter et router les demandes",
          text: "Un formulaire, un appel ou un email crée automatiquement une fiche dans le CRM, avec sa source, et alerte le bon commercial.",
        },
        {
          title: "Relancer au bon moment",
          text: "Rappels de suivi, relances après un devis, messages de confirmation : l’outil n’oublie pas, et s’arrête quand le contact répond.",
        },
        {
          title: "Enrichir et mettre à jour les fiches",
          text: "Compléter automatiquement les informations d’entreprise et signaler les contacts dont les données semblent périmées.",
        },
        {
          title: "Produire les rapports",
          text: "Un tableau de bord alimenté par vos outils évite la compilation manuelle et donne une image à jour de l’activité.",
        },
        {
          title: "Fluidifier la facturation et l’accueil des nouveaux clients",
          text: "Du devis signé à la facture et à l’ouverture de compte, relier les étapes évite les ressaisies et les oublis.",
        },
        {
          title: "Trier les demandes entrantes",
          text: "Classer les messages par type et par urgence pour que les équipes traitent d’abord ce qui compte.",
        },
      ],
    },
    {
      title: "L’intelligence artificielle générative : où elle aide, où il faut de la prudence",
      paragraphs: [
        "Les modèles de langage savent résumer un document, rédiger un premier jet, classer des messages ou assister un service client. Ils font gagner du temps sur ces tâches, à condition d’être encadrés.",
        "Trois précautions s’imposent. Le résultat peut contenir des erreurs : une relecture humaine reste nécessaire dès qu’il engage l’entreprise. Les données confiées au modèle peuvent transiter par un fournisseur : les informations sensibles ou personnelles demandent un choix de solution adapté et le respect du RGPD. Enfin, l’IA doit servir un usage précis et mesurable, pas être ajoutée pour elle-même.",
      ],
    },
    {
      title: "Développement sur mesure ou outil du marché ?",
      paragraphs: [
        "Un outil existant est généralement plus rapide à mettre en place et moins coûteux au départ. Le développement sur mesure se justifie quand votre processus est spécifique, quand les outils du marché ne peuvent pas être branchés ensemble de façon satisfaisante, ou quand leurs abonnements et leurs limites coûtent plus cher que la construction d’une solution adaptée.",
        "Le bon choix se fait en comparant trois choses : l’adéquation au processus réel, le coût sur la durée (abonnements, maintenance, évolutions) et la dépendance à un fournisseur. Nous commençons presque toujours par regarder ce que les outils existants permettent avant de proposer du développement.",
      ],
    },
    {
      title: "Notre approche d’un projet",
      items: [
        {
          title: "1. Cartographier le processus",
          text: "Qui fait quoi, avec quels outils, où se perd le temps, où naissent les erreurs. Cette cartographie décide des priorités.",
        },
        {
          title: "2. Choisir un cas pilote",
          text: "Un périmètre limité, utile et mesurable, pour prouver la valeur avant d’étendre.",
        },
        {
          title: "3. Prototyper et tester",
          text: "Une première version est essayée avec vos équipes sur des cas réels, puis corrigée.",
        },
        {
          title: "4. Déployer et documenter",
          text: "Mise en service avec une documentation technique, des tests automatisés et des sauvegardes, pour que la solution reste maintenable et compréhensible.",
        },
        {
          title: "5. Mesurer et faire évoluer",
          text: "Temps gagné, erreurs évitées, adoption par les équipes : ce qui ne produit pas d’effet est ajusté ou arrêté.",
        },
      ],
    },
    {
      title: "Sécurité et données",
      paragraphs: [
        [
          "Une automatisation manipule souvent des données de clients et de prospects. Les accès sont limités à ce qui est nécessaire, les sauvegardes sont prévues, et la conformité au RGPD fait partie du cadrage. Les bonnes pratiques de sécurité applicative (celles de l’OWASP) sont appliquées au développement. Notre article sur les ",
          link(ARTICLES.automatiserWorkflows, "workflows de prospection"),
          " illustre ces principes dans le cas de la prospection.",
        ],
      ],
    },
  ],

  faqTitle: "Automatisation et développement : vos questions",
  faqs: [
    [
      "Par quelle tâche commencer ?",
      "Par une tâche fréquente, simple et bien définie, dont le gain se mesure facilement : par exemple le routage des demandes entrantes vers le CRM, ou un rapport hebdomadaire compilé à la main. Un premier succès rapide donne la confiance pour étendre.",
    ],
    [
      "L’IA va-t-elle remplacer mes équipes ?",
      "Nous l’utilisons pour assister, pas pour remplacer : elle prépare, trie et résume, et vos équipes décident et gardent la relation. Les tâches qui engagent l’entreprise gardent une validation humaine.",
    ],
    [
      "Mes données seront-elles envoyées à un tiers ?",
      "Cela dépend de la solution retenue. Lorsqu’un modèle est fourni par un tiers, les données qui lui sont confiées transitent par ce fournisseur. Le cadrage précise quelles données sont concernées, avec quelles protections, et il écarte toute donnée sensible qui n’a pas à y figurer.",
    ],
    [
      "Pouvez-vous connecter nos outils actuels ?",
      "Oui, c’est un cas fréquent : CRM, facturation, outils de paiement et d’emailing peuvent être reliés entre eux par des connexions ou des interfaces de programmation (API).",
    ],
    [
      "Qui maintient la solution après la livraison ?",
      "La documentation et les tests livrés permettent à une autre équipe de reprendre le travail. Nous pouvons aussi assurer la maintenance et l’évolution, dans les conditions précisées au cadrage.",
    ],
  ],
  related: {
    services: [
      [...SERVICES.strategieDigitale, "Prioriser les chantiers avant d’automatiser."],
      [...SERVICES.sitesWeb, "Brancher le site sur votre CRM et vos outils."],
      [...SERVICES.campagnes, "Automatiser les séquences d’emails et de relances."],
    ],
    articles: [
      [...ARTICLES.automatiserWorkflows, "Cinq approches pour automatiser une prospection."],
      [...ARTICLES.outilsNumeriques, "Les outils numériques à connaître."],
    ],
  },
};
