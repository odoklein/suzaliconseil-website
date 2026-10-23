import { ARTICLES, SERVICES } from "../../lib/internal-links";

/*
 * Contenu éditorial long de /services/commercial, page pivot du pôle « prospection commerciale ».
 * Rôle : aider à choisir le bon service selon sa situation (maillage vers chaque page service) et
 * répondre aux questions générales sur la prospection B2B. Aucun chiffre, aucun résultat client.
 */
const link = ([href, text], label) => ({ href, text: label ?? text });

export const COMMERCIAL_CONTENT = {
  sections: [
    {
      title: "Ce que recouvre la prospection commerciale B2B",
      paragraphs: [
        "La prospection commerciale B2B regroupe les actions qui permettent à une entreprise de trouver de nouveaux clients professionnels : identifier les entreprises et les décideurs concernés, les contacter, comprendre leur besoin, puis passer le relais à l’équipe commerciale qui conclut. C’est une chaîne, et sa solidité est celle de son maillon le plus faible.",
        "Quand la prospection « ne marche pas », la cause se trouve presque toujours à une étape précise : une cible trop large, un fichier de mauvaise qualité, des messages génériques, une qualification qui laisse passer des contacts peu mûrs, ou des rendez-vous mal reçus côté commercial. Nos services correspondent à ces étapes, et vous pouvez en choisir une seule ou l’ensemble.",
      ],
    },
    {
      title: "Quel service pour quel besoin ?",
      paragraphs: [
        "Plutôt que de présenter une liste de prestations, voici comment choisir selon votre situation de départ.",
      ],
      items: [
        {
          title: "Vous n’avez pas de contacts à appeler",
          text: [
            "Vous avez besoin d’un fichier ciblé, vérifié et prêt à l’emploi. Voir ",
            link(SERVICES.fichier),
            ".",
          ],
        },
        {
          title: "Vous avez des contacts, mais peu de réponses",
          text: [
            "Le problème vient souvent des messages et des canaux. Les ",
            link(SERVICES.campagnes, "campagnes email et SMS"),
            " et l’",
            link(SERVICES.outbound),
            " travaillent les séquences, le ciblage et les relances.",
          ],
        },
        {
          title: "Vous avez des leads, mais ils sont inégaux",
          text: [
            "Un travail de ",
            link(SERVICES.qualification, "qualification"),
            " (appels, scoring selon vos critères) trie les contacts pour ne transmettre que ceux qui sont mûrs.",
          ],
        },
        {
          title: "Vous voulez des rendez-vous dans l’agenda de vos commerciaux",
          text: [
            "La ",
            link(SERVICES.priseRdv, "prise de rendez-vous B2B"),
            " mène la démarche jusqu’à un échange fixé et briefé, appuyée par la ",
            link(SERVICES.teleprospection, "téléprospection"),
            " pour la qualification.",
          ],
        },
        {
          title: "Vous voulez un dispositif complet, de bout en bout",
          text: [
            "La ",
            link(SERVICES.externalisee),
            " confie à une équipe dédiée le ciblage, les contacts, la qualification et le passage de relais.",
          ],
        },
        {
          title: "Vous voulez aussi déléguer la vente",
          text: [
            "Une ",
            link(SERVICES.marqueBlanche),
            " représente votre marque auprès des prospects, jusqu’aux étapes de closing.",
          ],
        },
      ],
      closing: [
        [
          "Vous hésitez entre plusieurs ? Notre page ",
          link(SERVICES.generationLeads),
          " décrit l’ensemble de la chaîne, et un audit gratuit de votre prospection actuelle permet de repérer l’étape à traiter en priorité.",
        ],
      ],
    },
    {
      title: "Un parcours de prospection, de la donnée au rendez-vous",
      items: [
        {
          title: "1. Cible et critères",
          text: "Définir le client idéal et écrire ce qu’est un lead qualifié pour votre entreprise. Cette étape évite la plupart des désaccords ultérieurs.",
        },
        {
          title: "2. Données",
          text: "Construire ou nettoyer le fichier de contacts : ciblé, vérifié, dédoublonné, avec l’origine des données conservée.",
        },
        {
          title: "3. Messages et séquences",
          text: "Rédiger des messages adaptés à chaque segment et choisir l’enchaînement des canaux (email, LinkedIn, téléphone, SMS).",
        },
        {
          title: "4. Contact et suivi",
          text: "Lancer les séquences, suivre chaque réponse dans le CRM, relancer au bon moment, arrêter dès qu’un contact répond ou refuse.",
        },
        {
          title: "5. Qualification et passage de relais",
          text: "Vérifier le besoin, l’échéance et le rôle de l’interlocuteur, puis transmettre à vos commerciaux avec un brief écrit.",
        },
        {
          title: "6. Mesure et ajustement",
          text: [
            "Suivre ce qui compte (leads qualifiés, rendez-vous tenus, opportunités) et corriger chaque semaine. Voir notre article sur les ",
            link(ARTICLES.kpiProspection, "KPI de prospection"),
            ".",
          ],
        },
      ],
    },
    {
      title: "Interne, externalisé ou mixte ?",
      paragraphs: [
        "Il n’y a pas de bonne réponse universelle. Prospecter en interne donne le contrôle total et une connaissance fine du produit, mais demande du recrutement, de la formation, des outils et du temps avant d’atteindre un rythme régulier. Externaliser permet de démarrer vite avec une méthode et des outils déjà en place, au prix d’une période d’apprentissage de votre offre par l’équipe externe.",
        [
          "Beaucoup d’entreprises choisissent un dispositif mixte : une équipe externe lance le marché et valide le discours, puis l’entreprise internalise tout ou partie quand la méthode est éprouvée. Nous détaillons cet arbitrage dans l’article ",
          link(ARTICLES.pourquoiExternaliser),
          " et dans le ",
          link(ARTICLES.guideExternalisee, "guide de la prospection commerciale externalisée"),
          ".",
        ],
      ],
    },
    {
      title: "Les erreurs qui coûtent le plus cher",
      items: [
        {
          title: "Une cible trop large",
          text: "Plus la cible est floue, plus il faut de contacts pour un résultat, et plus les messages sont génériques.",
        },
        {
          title: "Du volume avant la qualité des données",
          text: "Un fichier non vérifié fait perdre du temps aux appelants et abîme l’image de l’expéditeur.",
        },
        {
          title: "Un message identique pour tout le monde",
          text: "Un décideur dans l’industrie et un dirigeant de PME de services n’ont pas les mêmes problèmes. Un message qui parle de leur situation est lu ; un message générique est ignoré.",
        },
        {
          title: "Aucune définition du lead qualifié",
          text: "Sans critères écrits, marketing et ventes ne parlent pas de la même chose, et personne ne peut dire si le dispositif fonctionne.",
        },
        {
          title: "Relancer quelqu’un qui a déjà répondu",
          text: "Une relance automatique envoyée après une réponse humaine, ou après un refus, coûte de la confiance.",
        },
        {
          title: "Ne pas traiter les leads à temps",
          text: "Un contact intéressé qui n’est rappelé qu’au bout de plusieurs jours est souvent un contact perdu.",
        },
      ],
    },
  ],

  faqTitle: "Prospection commerciale B2B : vos questions",
  faqs: [
    [
      "Par où commencer quand on ne prospecte pas encore ?",
      "Par la cible et les critères : qui voulez-vous convaincre, et à quoi reconnaîtrez-vous un contact qui mérite un rendez-vous ? Un audit de votre situation permet de choisir ensuite entre le fichier, les campagnes, la qualification ou un dispositif complet.",
    ],
    [
      "Quels canaux utiliser en prospection B2B ?",
      "Un enchaînement d’email, de LinkedIn et de téléphone donne en général les résultats les plus réguliers : l’écrit ouvre, le téléphone qualifie. Le SMS sert aux rappels et aux confirmations. La part de chaque canal dépend de votre cible.",
    ],
    [
      "Combien de temps avant de voir des résultats ?",
      "Les campagnes peuvent démarrer sous 7 jours une fois le ciblage et les messages validés. Le rythme des premiers leads et rendez-vous dépend ensuite de votre marché, de la longueur de votre cycle de vente et de la précision de la cible.",
    ],
    [
      "Peut-on combiner plusieurs services ?",
      "Oui, c’est même courant : par exemple un fichier ciblé, des campagnes email et LinkedIn, puis des appels de qualification et la prise de rendez-vous. Les services s’emboîtent selon la chaîne décrite plus haut.",
    ],
    [
      "Comment éviter de nuire à son image en prospectant ?",
      "En ciblant avec précision, en écrivant des messages en rapport avec la fonction du destinataire, en limitant le nombre de relances, en offrant toujours une manière simple de se désinscrire et en arrêtant tout contact dès qu’il le demande.",
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
      [...ARTICLES.prospectionPme, "Structurer la prospection quand on est une PME."],
      [...ARTICLES.kpiProspection, "Les indicateurs pour piloter la prospection."],
      [...ARTICLES.coldEmailing, "Réussir ses campagnes d’emails de prospection."],
    ],
  },
};
