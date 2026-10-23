import { ARTICLES, SERVICES } from "../../lib/internal-links";

/*
 * Contenu éditorial long de /services/prise-rendez-vous-b2b (rendu par ServiceLongForm).
 * Requêtes visées : prise de rendez-vous B2B, rendez-vous qualifiés décideurs, prise de RDV
 * externalisée. Aucun chiffre qui ne soit déjà publié sur le site (10 RDV minimum par campagne),
 * aucun prix (les prix sont sur /offres), aucun résultat client.
 */
const link = ([href, text], label) => ({ href, text: label ?? text });

export const PRISE_RDV_CONTENT = {
  sections: [
    {
      title: "Qu’est-ce qu’un rendez-vous qualifié ?",
      paragraphs: [
        "Un rendez-vous B2B n’est pas qualifié parce qu’il est fixé : il l’est parce qu’il répond à des critères que vous avez écrits à l’avance. Sans eux, « rendez-vous obtenu » peut vouloir dire une simple politesse au téléphone, ou un décideur qui n’a ni besoin ni budget.",
        "Nous fixons ces critères avec vous avant la première prise de contact. Ils portent en général sur quatre points : un besoin identifié (ou un problème que votre offre résout), un interlocuteur qui a le pouvoir de décider ou d’influencer fortement la décision, une échéance compatible avec votre cycle de vente, et un budget ou une capacité à en débloquer un. C’est la logique de la méthode BANT, adaptée à votre vente.",
        [
          "Cette définition écrite est aussi ce qui permet de comparer des prestataires entre eux et de mesurer honnêtement un dispositif. Nous la reprenons dans notre article sur les ",
          link(ARTICLES.kpiProspection, "indicateurs de prospection"),
          ".",
        ],
      ],
    },
    {
      title: "Comment nous obtenons des rendez-vous",
      paragraphs: [
        "Un rendez-vous est le dernier maillon d’une chaîne de travail. Chaque étape a un livrable, et vous pouvez corriger avant que la suivante ne démarre.",
      ],
      items: [
        {
          title: "Ciblage et fichier",
          text: [
            "Le client idéal est défini avec vous (secteur, taille, fonction, signaux d’achat), puis le fichier de contacts est constitué ou nettoyé. Voir la page ",
            link(SERVICES.fichier),
            ".",
          ],
        },
        {
          title: "Approche multicanale",
          text: [
            "Email, LinkedIn et téléphone sont enchaînés dans une même séquence, avec des messages écrits pour chaque segment et validés avec vous. Le canal téléphonique est détaillé sur la page ",
            link(SERVICES.teleprospection),
            ".",
          ],
        },
        {
          title: "Qualification",
          text: "Quand un contact manifeste de l’intérêt, un appel de qualification vérifie vos critères. S’ils ne sont pas réunis, le contact n’est pas transmis : mieux vaut un rendez-vous de moins qu’un rendez-vous qui fait perdre du temps à vos commerciaux.",
        },
        {
          title: "Prise de rendez-vous et briefing",
          text: "Le rendez-vous est posé directement dans l’agenda de la bonne personne de votre équipe, accompagné d’un brief écrit sur l’interlocuteur et son contexte.",
        },
      ],
    },
    {
      title: "Ce que contient le briefing",
      paragraphs: [
        "Un rendez-vous réussi se prépare. Chaque rendez-vous posé arrive avec un brief écrit pour que votre commercial n’ait pas à tout redécouvrir au début de l’échange.",
      ],
      items: [
        {
          title: "L’interlocuteur et son entreprise",
          text: "Fonction, périmètre, contexte de l’entreprise et son activité, tels qu’ils ressortent de nos échanges.",
        },
        {
          title: "Le besoin exprimé",
          text: "Ce que la personne a dit avec ses propres mots, et ce qui l’a conduite à accepter l’échange.",
        },
        {
          title: "Les objections déjà levées",
          text: "Ce qui a été discuté et ce qui reste à traiter, pour éviter de refaire le même chemin.",
        },
        {
          title: "Les pistes à explorer",
          text: "Les opportunités identifiées et les questions utiles à poser pendant le rendez-vous.",
        },
      ],
    },
    {
      title: "Agenda et CRM synchronisés",
      paragraphs: [
        "Les créneaux sont gérés directement dans votre calendrier (Google ou Outlook), pour éviter les doubles réservations et les allers-retours par email. Le brief est transmis dans votre CRM, au même endroit que le reste de l’historique du contact : vos commerciaux n’ont pas un outil de plus à consulter.",
        "Avant de lancer, nous convenons avec vous des plages de disponibilité, du nombre de rendez-vous que votre équipe peut absorber par semaine, et de la personne qui reçoit chaque type de rendez-vous.",
      ],
    },
    {
      title: "Préparer votre équipe à recevoir les rendez-vous",
      paragraphs: [
        "Un dispositif de prise de rendez-vous ne produit des ventes que si les rendez-vous sont bien reçus. Trois habitudes font une vraie différence côté client.",
      ],
      items: [
        {
          title: "Lire le brief avant l’appel",
          text: "Quelques minutes de préparation changent la qualité de l’échange et montrent à l’interlocuteur qu’il a été écouté.",
        },
        {
          title: "Rendre compte vite",
          text: "Dire dans les jours qui suivent si le rendez-vous a eu lieu, ce qu’il est devenu, et pourquoi il n’a pas abouti le cas échéant. Ce retour sert à affiner les critères de qualification.",
        },
        {
          title: "Assurer la suite",
          text: "Un rendez-vous sans suite proposée dans les jours qui suivent perd l’essentiel de sa valeur. Le prochain pas doit être décidé pendant l’échange.",
        },
      ],
    },
    {
      title: "Mesurer les rendez-vous",
      paragraphs: [
        "Comptez les rendez-vous tenus plutôt que posés, puis suivez ce qu’ils deviennent. L’écart entre posés et tenus indique la qualité de la qualification et de la confirmation ; l’écart entre tenus et opportunités indique l’adéquation entre la cible et votre offre.",
        "Pour comparer deux dispositifs ou deux périodes, calculez le coût par rendez-vous tenu : le budget total du dispositif divisé par le nombre de rendez-vous réellement tenus, puis rapportez-le à la valeur moyenne d’une vente chez vous. Un rendez-vous peu coûteux mais rarement transformé coûte en réalité plus cher qu’un rendez-vous plus cher et bien qualifié.",
      ],
    },
  ],

  faqTitle: "Prise de rendez-vous B2B : vos questions",
  faqs: [
    [
      "Qui définit ce qu’est un rendez-vous qualifié ?",
      "Vous, avec nous, avant la première prise de contact. Les critères (besoin, interlocuteur, échéance, budget) sont écrits et adaptés à votre vente. Chaque rendez-vous est transmis avec les réponses obtenues à ces critères.",
    ],
    [
      "Comment les rendez-vous arrivent-ils dans nos agendas ?",
      "Directement dans votre calendrier Google ou Outlook, sur les plages que vous avez convenues avec nous, avec le brief associé dans votre CRM.",
    ],
    [
      "Y a-t-il un nombre minimum de rendez-vous ?",
      [
        "L’offre Vente au Rendez-Vous porte sur un minimum de 10 rendez-vous par campagne. Le détail des offres figure sur la page ",
        link(SERVICES.offres, "Offres et tarifs"),
        ".",
      ],
    ],
    [
      "Que se passe-t-il si un prospect ne vient pas au rendez-vous ?",
      "Un rendez-vous non tenu est signalé dans le reporting, et nous cherchons à le reprogrammer. Les conditions applicables à un rendez-vous non tenu dépendent de l’offre choisie ; elles sont précisées au cadrage.",
    ],
    [
      "Quelle différence avec la génération de leads ?",
      [
        "La génération de leads fournit des contacts intéressés ; la prise de rendez-vous va jusqu’à un échange fixé dans l’agenda de vos commerciaux, avec le brief. Voir la page ",
        link(SERVICES.generationLeads),
        ".",
      ],
    ],
    [
      "Peut-on interrompre ou ajuster une campagne ?",
      "Les messages, la cible et le rythme sont revus chaque semaine avec votre account manager. Si un segment ne produit pas de rendez-vous utiles, il est retiré ou retravaillé.",
    ],
  ],

  related: {
    services: [
      [...SERVICES.teleprospection, "Les appels qui qualifient et ouvrent la porte aux rendez-vous."],
      [...SERVICES.generationLeads, "Alimenter votre pipeline en leads qualifiés."],
      [...SERVICES.externalisee, "Déléguer toute la prospection à une équipe dédiée."],
      [...SERVICES.qualification, "Qualifier les leads que vous avez déjà."],
    ],
    articles: [
      [...ARTICLES.pourquoiExternaliser, "Pourquoi et quand externaliser la prospection."],
      [...ARTICLES.kpiProspection, "Mesurer la prospection : les indicateurs utiles."],
      [...ARTICLES.prospectionPme, "Structurer la prospection dans une PME."],
    ],
  },
};
