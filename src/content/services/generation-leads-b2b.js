import { ARTICLES, SERVICES } from "../../lib/internal-links";

/*
 * Contenu éditorial long de /services/generation-leads-b2b (rendu par ServiceLongForm).
 * Règles : aucun chiffre qui ne soit déjà publié sur le site, aucun résultat client,
 * aucune critique de concurrent. Ce qui n'est pas une méthode ou une définition reste
 * qualitatif (« souvent », « selon votre marché »).
 */
const link = ([href, text], label) => ({ href, text: label ?? text });

export const GENERATION_LEADS_CONTENT = {
  sections: [
    {
      title: "Ce que recouvre la génération de leads B2B",
      paragraphs: [
        "La génération de leads B2B regroupe toutes les actions qui permettent d’identifier des décideurs susceptibles d’avoir besoin de votre offre, de les contacter, puis de transmettre à vos commerciaux ceux qui montrent un intérêt réel. Elle ne se réduit pas à la collecte de contacts : un nom et une adresse email ne font pas un lead.",
        "Pour que marketing, prospection et ventes parlent de la même chose, nous distinguons quatre niveaux. Un contact est une personne identifiée dans une base. Un lead est un contact qui a manifesté un intérêt, par une réponse, un échange ou une demande. Un lead qualifié est un lead dont le besoin, le rôle dans la décision, l’échéance et le budget ont été vérifiés selon des critères écrits à l’avance. Une opportunité est un lead qualifié que votre équipe accepte de suivre dans son pipeline.",
        "Ces définitions évitent un désaccord classique : des leads jugés nombreux d’un côté, inexploitables de l’autre. C’est pourquoi le premier travail, avant tout envoi, consiste à écrire avec vous ce qu’est un lead qualifié dans votre entreprise.",
      ],
    },
    {
      title: "Les canaux, et quand les utiliser",
      paragraphs: [
        "Aucun canal ne suffit seul. Chacun a un rôle, et c’est leur enchaînement dans une même séquence qui donne des résultats réguliers.",
      ],
      items: [
        {
          title: "L’email, pour toucher large avec un message adapté",
          text: [
            "Le cold emailing permet de joindre beaucoup de décideurs avec un message écrit pour leur fonction. Il ouvre la conversation mais qualifie mal : une réponse brève ne dit pas si le besoin existe. Nous détaillons la méthode dans notre article sur le ",
            link(ARTICLES.coldEmailing, "cold emailing B2B"),
            ".",
          ],
        },
        {
          title: "LinkedIn, pour confirmer et personnaliser",
          text: "Utile pour vérifier le poste, personnaliser l’approche et créer un premier point de contact avant ou après un email. Il demande des messages courts, sobres et un rythme raisonnable.",
        },
        {
          title: "Le téléphone, pour comprendre le besoin",
          text: [
            "C’est le canal le plus fiable pour saisir un besoin, lever une objection et vérifier l’échéance et la place de l’interlocuteur dans la décision. C’est lui qui transforme une réponse en lead qualifié, comme nous le décrivons sur la page ",
            link(SERVICES.teleprospection),
            ".",
          ],
        },
        {
          title: "Le SMS, pour rappeler et confirmer",
          text: "Réservé aux rappels et aux confirmations, auprès de contacts qui ont déjà échangé avec vous et dans le respect de leur accord. Il complète les autres canaux, il n’ouvre pas la relation.",
        },
        {
          title: "Le contenu et le référencement, pour les prospects qui cherchent déjà",
          text: [
            "Articles, guides et pages de service attirent des visiteurs qui cherchent déjà une solution. Ce levier est plus lent mais durable, et il alimente les mêmes séquences. Il relève de notre offre ",
            link(SERVICES.seoAcquisition),
            ".",
          ],
        },
      ],
      closing: [
        "Une règle de bon sens s’impose dans toute séquence multicanale : dès qu’un contact répond, l’envoi automatique s’arrête et une personne reprend l’échange.",
      ],
    },
    {
      title: "Notre méthode, étape par étape",
      paragraphs: [
        "La méthode tient en cinq étapes. Chacune produit un livrable que vous pouvez relire et corriger avant de passer à la suivante.",
      ],
      items: [
        {
          title: "1. Cadrage et client idéal",
          text: "Nous définissons avec vous le client idéal : secteur, taille d’entreprise, fonction du décideur, situation qui déclenche un achat. Nous partons de vos affaires déjà gagnées, car elles disent mieux que des hypothèses qui achète vraiment. Nous écrivons aussi les critères qui font d’un contact un lead qualifié.",
        },
        {
          title: "2. Données ciblées",
          text: [
            "Nous constituons ou nettoyons le fichier de contacts : ciblé sur votre client idéal, vérifié, dédoublonné, avec l’origine des données conservée pour pouvoir en informer les personnes contactées. Si vous avez déjà une base, nous l’utilisons ; sinon, notre offre ",
            link(SERVICES.fichier),
            " la construit.",
          ],
        },
        {
          title: "3. Messages et séquences",
          text: "Nous rédigeons les messages et le script d’appel pour chaque segment, puis vous les validez avant tout envoi. Un message générique est un message ignoré : chaque segment reçoit des arguments qui parlent de sa situation.",
        },
        {
          title: "4. Activation et suivi",
          text: "Les séquences démarrent, chaque réponse est suivie contact par contact dans SuzaLink CRM, et un point hebdomadaire permet d’ajuster. Les messages et segments qui ne produisent pas de réponse utile sont réécrits ou retirés plutôt que laissés tourner.",
        },
        {
          title: "5. Qualification et passage de relais",
          text: [
            "Les contacts intéressés sont appelés et qualifiés selon vos critères. Le lead est transmis à vos commerciaux avec sa fiche : contexte, besoin exprimé, interlocuteur, prochaine étape convenue. Pour les contacts déjà dans votre base, la page ",
            link(SERVICES.qualification),
            " décrit ce même travail de qualification.",
          ],
        },
      ],
    },
    {
      title: "Dans quels cas faire appel à nous",
      paragraphs: [
        "La génération de leads externalisée convient surtout dans cinq situations.",
      ],
      items: [
        {
          title: "Vous n’avez pas encore de prospection structurée",
          text: "Le dirigeant ou un commercial prospecte entre deux rendez-vous, et le rythme est irrégulier. Un dispositif dédié donne une cadence que l’agenda commercial ne permet pas.",
        },
        {
          title: "Vous lancez une offre ou un nouveau marché",
          text: "Tester un marché avant d’y affecter des commerciaux permet de valider le discours et la cible à moindre risque.",
        },
        {
          title: "Votre équipe manque de temps pour prospecter",
          text: "Quand les commerciaux passent plus de temps à chercher des contacts qu’à vendre, déléguer la recherche et la première approche leur rend du temps de vente.",
        },
        {
          title: "Votre base de contacts dort",
          text: "Réactiver d’anciens contacts avec un message pertinent est souvent plus rapide que d’en chercher de nouveaux.",
        },
        {
          title: "Vous hésitez avant de recruter",
          text: [
            "Avant d’embaucher un commercial sédentaire, mesurer ce que rapporte un dispositif externalisé aide à décider. Notre article ",
            link(ARTICLES.pourquoiExternaliser),
            " détaille cet arbitrage.",
          ],
        },
      ],
      closing: [
        "À l’inverse, un dispositif de génération de leads donne peu de résultats si l’offre n’est pas encore claire ou si personne ne peut traiter rapidement les leads transmis. Nous le disons au cadrage plutôt que de lancer une campagne qui ne pourrait pas aboutir.",
      ],
    },
    {
      title: "Mesurer la génération de leads",
      paragraphs: [
        "Mesurez ce qui compte pour votre chiffre d’affaires plutôt que des indicateurs flatteurs. Le taux d’ouverture d’un email, par exemple, est devenu peu fiable et ne dit rien du besoin du destinataire.",
      ],
      items: [
        {
          title: "Les leads qualifiés transmis",
          text: "Le nombre de leads répondant à vos critères écrits, et non le nombre de contacts touchés.",
        },
        {
          title: "Le passage d’une étape à l’autre",
          text: "Réponse, lead, rendez-vous, opportunité : le taux de passage entre deux étapes indique où le dispositif se bloque.",
        },
        {
          title: "Le coût par lead qualifié",
          text: "Le budget total du dispositif divisé par le nombre de leads qualifiés, à comparer ensuite au coût par opportunité et à la valeur d’une vente chez vous.",
        },
        {
          title: "Le délai de traitement par vos commerciaux",
          text: "Un lead traité tard perd de sa valeur. Ce délai se mesure aussi côté client, et il compte autant que la qualité du lead.",
        },
        {
          title: "Le retour de vos commerciaux",
          text: "Leur appréciation de la qualité des leads reçus corrige les critères de qualification au fil des semaines.",
        },
      ],
      closing: [
        ["Nous détaillons ces indicateurs dans l’article ", link(ARTICLES.kpiProspection), "."],
      ],
    },
    {
      title: "Prospection B2B et RGPD",
      paragraphs: [
        "En B2B, contacter un professionnel au sujet de son activité est possible, à condition de l’informer de l’origine de ses données et de respecter son droit d’opposition. Concrètement : des données sourcées, un message en rapport avec la fonction du destinataire, une possibilité de se désinscrire simplement à chaque envoi, et la prise en compte immédiate de toute opposition.",
        "Les règles diffèrent selon le canal (email, téléphone, SMS) et selon la situation du destinataire. Pour un cas précis, rapprochez-vous de votre conseil juridique ou des ressources de la CNIL ; nous adaptons la méthode à vos contraintes.",
      ],
    },
  ],

  faqTitle: "Génération de leads B2B : vos questions",
  faqs: [
    [
      "Quelle différence entre un lead, un lead qualifié et un rendez-vous ?",
      "Un lead est un contact qui a manifesté un intérêt. Un lead qualifié est un lead dont le besoin, l’échéance, le budget et le rôle dans la décision ont été vérifiés selon vos critères. Un rendez-vous est l’étape suivante : un échange fixé avec vos commerciaux. Tous les leads ne débouchent pas sur un rendez-vous, et c’est normal.",
    ],
    [
      "En combien de temps une campagne démarre-t-elle ?",
      "Les campagnes sont actives sous 7 jours une fois le ciblage et les messages validés avec vous. Le point hebdomadaire sert ensuite à ajuster le ciblage, les messages et les canaux.",
    ],
    [
      "Dois-je fournir un fichier de prospects ?",
      [
        "Ce n’est pas obligatoire. Vous pouvez nous confier votre base de contacts ; sinon nous construisons un fichier ciblé sur votre client idéal. Cette prestation est décrite sur la page ",
        link(SERVICES.fichier),
        ".",
      ],
    ],
    [
      "Qui décide de ce qu’est un lead qualifié ?",
      "Vous, avec nous, au cadrage. Les critères sont écrits avant le premier envoi (budget, autorité, besoin, échéance, adaptés à votre vente) et chaque lead est transmis avec les réponses obtenues à ces critères.",
    ],
    [
      "Génération de leads externalisée ou équipe interne ?",
      [
        "L’externalisation permet de démarrer vite, sans recruter, avec une méthode et des outils déjà en place. L’interne reste préférable quand la vente demande une expertise produit très pointue dès le premier contact. Beaucoup d’entreprises externalisent pour valider un marché, puis recrutent. Voir ",
        link(SERVICES.externalisee),
        ".",
      ],
    ],
    [
      "Que se passe-t-il si un contact refuse ou demande à ne plus être contacté ?",
      "Il est retiré de la séquence, sa demande est enregistrée et appliquée immédiatement, et aucune relance ne suit.",
    ],
    [
      "Où trouver les tarifs ?",
      [
        "Chaque offre affiche son prix et son mode de facturation sur la page ",
        link(SERVICES.offres, "Offres et tarifs"),
        ". Un audit gratuit de votre prospection actuelle permet de cadrer le besoin avant de choisir.",
      ],
    ],
  ],

  related: {
    services: [
      [...SERVICES.qualification, "Appels et scoring pour transformer vos contacts en leads exploitables."],
      [...SERVICES.fichier, "Un fichier ciblé, vérifié et prêt à intégrer dans votre CRM."],
      [...SERVICES.priseRdv, "Des rendez-vous qualifiés posés dans l’agenda de vos commerciaux."],
      [...SERVICES.outbound, "Cold email, LinkedIn et prospection multicanale opérés pour vous."],
      [...SERVICES.leadsParis, "La même démarche appliquée aux entreprises de Paris et d’Île-de-France."],
    ],
    articles: [
      [...ARTICLES.choisirAgenceLeads, "Les critères utiles pour choisir un prestataire de génération de leads."],
      [...ARTICLES.leadsIndustrie, "Adapter la génération de leads aux cycles de vente industriels."],
      [...ARTICLES.kpiProspection, "Les indicateurs à suivre pour piloter la prospection."],
    ],
  },
};
