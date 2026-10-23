import { ARTICLES, SERVICES } from "../../lib/internal-links";

/*
 * Contenu éditorial long de /services/teleprospection-b2b (rendu par ServiceLongForm).
 * Requêtes visées : agence de téléprospection B2B, téléprospection B2B, externaliser sa
 * téléprospection. Aucun chiffre qui ne soit déjà publié sur le site, aucun résultat client.
 */
const link = ([href, text], label) => ({ href, text: label ?? text });

export const TELEPROSPECTION_CONTENT = {
  sections: [
    {
      title: "La téléprospection B2B, aujourd’hui",
      paragraphs: [
        "La téléprospection B2B consiste à appeler des décideurs professionnels, choisis pour leur adéquation avec votre offre, afin de comprendre leur situation et, si elle s’y prête, de convenir d’un rendez-vous. Elle n’a rien à voir avec le démarchage de masse : un appel B2B efficace repose sur une cible étroite, une raison précise d’appeler et un interlocuteur qui a la parole pour décider.",
        "Le téléphone reste le canal le plus fiable pour qualifier un besoin. Un email peut ouvrir la porte ; seule une conversation permet de vérifier si le besoin existe, s’il est urgent, et qui d’autre participe à la décision. C’est pourquoi nous l’associons presque toujours à l’email et à LinkedIn plutôt que de l’utiliser seul.",
      ],
    },
    {
      title: "Ce qui se joue avant le premier appel",
      paragraphs: [
        "Sur le terrain, la qualité d’une campagne d’appels se décide en amont. Un appel réussi suppose trois préparations, que nous menons avec vous avant de décrocher.",
      ],
      items: [
        {
          title: "Une cible précise",
          text: [
            "Secteur, taille d’entreprise, fonction de l’interlocuteur, situation qui rend votre offre pertinente. Plus la cible est floue, plus il faut d’appels pour un résultat. La constitution du fichier est décrite sur la page ",
            link(SERVICES.fichier),
            ".",
          ],
        },
        {
          title: "Un script qui sert de trame, pas de texte à lire",
          text: "Il fixe l’accroche, les questions de qualification, les réponses aux objections courantes et la manière de proposer un rendez-vous. Il est validé avec vous avant le premier appel, puis ajusté au vu des vrais échanges.",
        },
        {
          title: "Des téléconseillers formés à votre offre",
          text: "Ils reçoivent un briefing sur votre activité, vos clients types et vos arguments, de façon à répondre aux questions de base sans improviser. Lorsqu’une question dépasse leur périmètre, ils le disent et proposent d’en parler avec vos commerciaux.",
        },
      ],
    },
    {
      title: "Le déroulé d’un appel",
      items: [
        {
          title: "1. L’accroche",
          text: "Quelques secondes pour dire qui appelle, pourquoi, et demander si le moment est bon. Une accroche claire et honnête vaut mieux qu’une formule habile.",
        },
        {
          title: "2. Les questions d’ouverture",
          text: "Comprendre la situation de l’interlocuteur avant de parler de l’offre : comment il traite aujourd’hui le sujet, ce qui le gêne, ce qui est prévu.",
        },
        {
          title: "3. La qualification",
          text: "Vérifier le besoin, l’échéance, le budget et le rôle de la personne dans la décision, selon les critères fixés avec vous au cadrage.",
        },
        {
          title: "4. La proposition de rendez-vous",
          text: "Si le besoin existe, proposer un créneau précis avec la bonne personne de votre équipe, plutôt qu’un vague « on se rappelle ».",
        },
        {
          title: "5. Le compte rendu",
          text: "Chaque appel est consigné dans le CRM : interlocuteur, besoin exprimé, objections entendues, suite convenue. Pour chaque rendez-vous posé, vos commerciaux reçoivent un brief écrit avant l’échange.",
        },
      ],
    },
    {
      title: "Les objections les plus courantes",
      paragraphs: [
        "Les objections font partie de l’appel, et les anticiper est la meilleure préparation. Voici celles qui reviennent le plus, et l’état d’esprit avec lequel nous les traitons.",
      ],
      items: [
        {
          title: "« Envoyez-moi un email »",
          text: "C’est parfois un moyen poli de clore l’appel, parfois une demande sincère. Nous demandons ce que la personne voudrait y trouver, et nous envoyons un message court sur ce point précis, avec une prochaine étape claire.",
        },
        {
          title: "« Je n’ai pas le temps »",
          text: "On ne le conteste pas. On propose un créneau plus tard, au moment qui convient, plutôt que d’insister.",
        },
        {
          title: "« Nous avons déjà un prestataire »",
          text: "Une raison d’échanger, pas une fin de non-recevoir : on cherche à comprendre ce qui fonctionne, ce qui pourrait l’être davantage, et à rester disponible.",
        },
        {
          title: "« Ce n’est pas le moment » ou « pas de budget »",
          text: "On demande quand la question se posera, et on note la date pour reprendre contact. Un « pas maintenant » bien consigné est un contact utile.",
        },
        {
          title: "« Ce n’est pas moi qui décide »",
          text: "On demande qui est la bonne personne et si l’interlocuteur peut faire la mise en relation. Un contact interne vaut souvent mieux qu’un appel direct à la direction.",
        },
      ],
      closing: [
        "Dans tous les cas, un refus clair est respecté et consigné : le contact n’est plus relancé.",
      ],
    },
    {
      title: "Téléphone, email, LinkedIn : les articuler",
      paragraphs: [
        [
          "Un appel à froid sans aucun contact préalable fonctionne moins bien qu’un appel précédé d’un message. Nous enchaînons donc les canaux : un email ou une invitation LinkedIn prépare le terrain, l’appel qualifie, une relance écrite résume l’échange. Le principe de cette séquence est détaillé dans notre article sur la ",
          link(ARTICLES.strategieOutbound, "stratégie outbound B2B"),
          ", et sur la page ",
          link(SERVICES.outbound),
          ".",
        ],
        "Dès qu’un contact répond ou demande à ne plus être contacté, les autres canaux s’arrêtent. Une relance automatique envoyée après une réponse humaine abîme la confiance plus qu’elle ne fait gagner de contacts.",
      ],
    },
    {
      title: "Mesurer une campagne d’appels",
      paragraphs: [
        "Le nombre d’appels passés ne mesure que l’activité. Pour savoir si une campagne fonctionne, suivez la chaîne complète.",
      ],
      items: [
        {
          title: "Les décideurs joints",
          text: "Part des appels qui aboutissent à une vraie conversation avec la bonne personne. Un taux faible pointe un problème de fichier ou d’horaires.",
        },
        {
          title: "Les conversations qualifiées",
          text: "Celles où le besoin, l’échéance et le rôle de l’interlocuteur ont pu être vérifiés selon vos critères.",
        },
        {
          title: "Les rendez-vous posés, puis tenus",
          text: "L’écart entre les deux mesure la solidité de la qualification et de la confirmation. Il se corrige.",
        },
        {
          title: "Les opportunités créées",
          text: [
            "Le résultat qui compte : ce que vos commerciaux ont transformé en opportunité. Nous revoyons ces chiffres chaque semaine avec vous ; les indicateurs sont décrits dans ",
            link(ARTICLES.kpiProspection),
            ".",
          ],
        },
      ],
    },
    {
      title: "Appels professionnels et conformité",
      paragraphs: [
        "Appeler un professionnel au sujet de son activité est possible, à condition de respecter son droit de refuser. Concrètement : se présenter clairement, indiquer la raison de l’appel, ne rappeler personne qui a demandé à ne plus l’être, et conserver l’origine des données utilisées. Les règles précises dépendent de la situation du destinataire ; pour un cas particulier, rapprochez-vous de votre conseil juridique ou des ressources de la CNIL.",
      ],
    },
  ],

  faqTitle: "Téléprospection B2B : vos questions",
  faqs: [
    [
      "Qui passe les appels ?",
      "Des téléconseillers formés à votre offre et à vos cibles, encadrés par un account manager dédié. Ils s’appuient sur un script validé avec vous et sur un brief écrit de votre activité.",
    ],
    [
      "Pouvons-nous valider le script avant le lancement ?",
      "Oui. Le script, comme les séquences, est validé avec vous avant le premier appel, puis ajusté au fil des échanges réels.",
    ],
    [
      "Combien de temps faut-il pour lancer une campagne ?",
      "Les appels démarrent sous 7 jours une fois le ciblage validé. Ce délai court du moment où nous disposons de la cible, du fichier et du script validés.",
    ],
    [
      "Quelle différence entre téléprospection et prise de rendez-vous ?",
      [
        "La téléprospection désigne le canal : l’appel. La prise de rendez-vous désigne le résultat recherché : un rendez-vous qualifié dans l’agenda de vos commerciaux. Les deux se recoupent ; voir la page ",
        link(SERVICES.priseRdv),
        ".",
      ],
    ],
    [
      "Reçoit-on un compte rendu des appels ?",
      "Oui. Les appels sont consignés dans le CRM, et un reporting hebdomadaire présente les contacts joints, les échanges, les objections rencontrées et les rendez-vous posés.",
    ],
    [
      "Faut-il avoir un fichier de prospects ?",
      [
        "Vous pouvez nous confier votre base, ou nous construisons un fichier ciblé : voir ",
        link(SERVICES.fichier),
        ".",
      ],
    ],
    [
      "Où voir les tarifs ?",
      [
        "Sur la page ",
        link(SERVICES.offres, "Offres et tarifs"),
        ", chaque offre affiche son prix et son mode de facturation.",
      ],
    ],
  ],

  related: {
    services: [
      [...SERVICES.priseRdv, "Des rendez-vous qualifiés posés dans l’agenda de vos commerciaux."],
      [...SERVICES.qualification, "Appeler et scorer vos leads existants pour les rendre exploitables."],
      [...SERVICES.generationLeads, "La prospection multicanale dans son ensemble."],
      [...SERVICES.marqueBlanche, "Une équipe qui représente votre marque jusqu’au closing."],
    ],
    articles: [
      [...ARTICLES.strategieOutbound, "Construire une séquence qui combine email, LinkedIn et téléphone."],
      [...ARTICLES.pourquoiExternaliser, "Quand externaliser plutôt que recruter."],
      [...ARTICLES.prospectionPme, "Adapter la prospection à la taille d’une PME."],
    ],
  },
};
