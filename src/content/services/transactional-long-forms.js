import { ARTICLES, SERVICES } from "../../lib/internal-links";

/*
 * Contenu éditorial long des trois pages « transactionnelles » (fichier, qualification, campagnes),
 * rendu par TransactionalServicePage en plus de leur contenu de base (lib/transactional-services.js).
 * Chaque entrée : { sections, faqs (ajoutées à celles de la page), articles (maillage) }.
 * Règles : aucun chiffre non publié sur le site, aucun résultat client, aucun prix (voir /offres).
 */
const link = ([href, text], label) => ({ href, text: label ?? text });

export const LONG_FORMS = {
  /* --------------------------------------------------------- marketing externalisé */
  "/services/marketing-b2b-externalise": {
    sections: [
      {
        title: "Ce que recouvre le marketing B2B",
        paragraphs: [
          "Le marketing B2B regroupe tout ce qui amène des entreprises à vous connaître, à vous faire confiance puis à vous contacter : définir à qui vous vous adressez et ce que vous promettez, aller chercher activement les bons interlocuteurs, publier du contenu qui répond à leurs questions, être trouvé quand ils cherchent, et suivre ce qui se passe ensuite dans le CRM.",
          "Les cycles de vente B2B sont plus longs et font intervenir plusieurs personnes. Le marketing sert donc moins à déclencher un achat immédiat qu’à rester présent et crédible tout au long de la réflexion, jusqu’au moment où un rendez-vous a du sens.",
        ],
      },
      {
        title: "Pourquoi l’externaliser",
        paragraphs: [
          "Constituer un service marketing complet suppose plusieurs métiers : stratégie, rédaction, référencement, emailing, prospection, outils et mesure. Peu de PME peuvent recruter toutes ces compétences, et une seule personne les couvre rarement toutes.",
        ],
        items: [
          {
            title: "Un démarrage rapide",
            text: "L’équipe, les outils et les méthodes sont déjà en place. Vous évitez les mois de recrutement et de montée en compétence.",
          },
          {
            title: "Des compétences complémentaires",
            text: "Vous accédez à des profils différents sans les salarier tous : stratégie, outbound, contenu, référencement, automatisation.",
          },
          {
            title: "Un coût plus lisible",
            text: "Vous savez ce qui est dépensé et ce que cela produit, sans salaires, outils et abonnements dispersés entre plusieurs lignes budgétaires.",
          },
          {
            title: "Une souplesse de périmètre",
            text: "Vous pouvez commencer par un seul canal, ajouter ou arrêter une action selon les résultats, ou confier un dispositif complet.",
          },
        ],
        closing: [
          [
            "L’arbitrage entre interne et externe dépend de votre situation. Pour la prospection, nous l’avons détaillé dans l’article ",
            link(ARTICLES.pourquoiExternaliser, "pourquoi externaliser sa prospection commerciale B2B"),
            ".",
          ],
        ],
      },
      {
        title: "Les leviers que nous pouvons prendre en charge",
        paragraphs: [
          "Chaque levier a sa page dédiée. Voici comment ils s’articulent dans un dispositif de marketing B2B.",
        ],
        items: [
          {
            title: "Stratégie et positionnement",
            text: [
              "Clarifier cible, promesse et messages avant d’investir dans des canaux. C’est le travail de la ",
              link(SERVICES.strategieDigitale, "stratégie marketing digitale B2B"),
              ", qui fixe les priorités et les indicateurs.",
            ],
          },
          {
            title: "Prospection outbound",
            text: [
              "Aller chercher les bons décideurs par email, LinkedIn et téléphone avec des séquences adaptées à chaque segment. Voir l’",
              link(SERVICES.outbound, "outbound marketing B2B"),
              " et les ",
              link(SERVICES.campagnes, "campagnes email et SMS"),
              ".",
            ],
          },
          {
            title: "Contenu et référencement naturel",
            text: [
              "Publier des contenus qui répondent aux questions de vos acheteurs et sont trouvés sur Google. Voir le ",
              link(SERVICES.seoAcquisition, "SEO et l’acquisition digitale B2B"),
              ".",
            ],
          },
          {
            title: "Automatisation et suivi",
            text: [
              "Relier les outils, déclencher les relances au bon moment et garder l’historique de chaque échange dans le CRM. Voir le ",
              link(SERVICES.automatisation, "développement et l’automatisation"),
              ".",
            ],
          },
          {
            title: "Qualification et rendez-vous",
            text: [
              "Transformer l’intérêt en rendez-vous exploitables, avec un brief pour le commercial. Voir la ",
              link(SERVICES.priseRdv, "prise de rendez-vous B2B"),
              " et la ",
              link(SERVICES.qualification, "qualification de leads"),
              ".",
            ],
          },
        ],
      },
      {
        title: "Un dispositif, du cadrage au pilotage",
        items: [
          {
            title: "1. Objectifs et indicateurs",
            text: "Nous fixons avec vous ce qui sera mesuré : leads qualifiés, rendez-vous tenus, opportunités, plutôt que seulement des visites ou des impressions.",
          },
          {
            title: "2. Priorités par canal",
            text: "Nous choisissons les canaux selon votre cible et votre cycle de vente, pas selon la mode. Mieux vaut un canal bien exécuté que cinq effleurés.",
          },
          {
            title: "3. Production validée",
            text: "Messages, contenus et campagnes sont rédigés par l’équipe puis soumis à votre relecture avant diffusion.",
          },
          {
            title: "4. Lecture hebdomadaire",
            text: "Un point chaque semaine sur ce qui a été fait, ce qui a répondu et ce qui change. Les décisions sont écrites, pas seulement discutées.",
          },
        ],
      },
      {
        title: "Les erreurs que nous aidons à éviter",
        items: [
          {
            title: "Faire du contenu sans lien avec les ventes",
            text: "Un article ou une publication doit répondre à une question que vos prospects se posent réellement, et mener vers une action.",
          },
          {
            title: "Multiplier les canaux sans tenir la durée",
            text: "Le marketing B2B produit surtout par la régularité. Mieux vaut un rythme tenable qu’un lancement spectaculaire suivi d’un arrêt.",
          },
          {
            title: "Séparer marketing et commercial",
            text: "Si les deux équipes n’ont pas la même définition d’un lead qualifié, chacune juge l’autre sur de mauvais critères. Nous la fixons ensemble dès le début.",
          },
          {
            title: "Ne mesurer que ce qui est facile à mesurer",
            text: [
              "Les clics et les visites rassurent mais ne disent rien des ventes. Voir notre article sur les ",
              link(ARTICLES.kpiProspection, "KPI de prospection commerciale"),
              ".",
            ],
          },
        ],
      },
    ],
    faqs: [
      ["Peut-on externaliser seulement une partie du marketing ?", "Oui. Beaucoup d’entreprises commencent par un seul levier, par exemple la prospection outbound ou le référencement, puis élargissent le périmètre quand les premiers résultats arrivent."],
      ["Travaillez-vous avec une équipe marketing existante ?", "Oui. L’équipe externe peut renforcer une équipe interne sur un domaine précis (outbound, SEO, automatisation) ou prendre en charge ce qui n’est pas couvert, en s’alignant sur vos outils et vos priorités."],
      [
        "Marketing externalisé ou agence de génération de leads : quelle différence ?",
        [
          "Une agence de ",
          link(SERVICES.generationLeads, "génération de leads B2B"),
          " se concentre sur l’obtention de contacts et de rendez-vous qualifiés. Le marketing externalisé inclut aussi le positionnement, le contenu et le référencement qui nourrissent cette génération sur la durée.",
        ],
      ],
      ["Le référencement naturel est-il inclus ?", "Il peut l’être, selon le périmètre choisi. Le référencement est un levier de moyen terme : il travaille en parallèle de l’outbound, qui produit des échanges plus rapidement."],
    ],
    articles: [
      [...ARTICLES.strategieOutbound, "Structurer une démarche outbound B2B."],
      [...ARTICLES.outboundVsInbound, "Choisir entre outbound et inbound selon votre situation."],
      [...ARTICLES.automatiserWorkflows, "Automatiser les tâches répétitives de la prospection."],
    ],
  },

  /* ------------------------------------------------------------------- Paris */
  "/services/agence-generation-de-leads-paris": {
    sections: [
      {
        title: "Une agence de génération de leads à Paris : ce que cela change",
        paragraphs: [
          "La génération de leads B2B se fait en grande partie à distance : email, LinkedIn et téléphone n’ont pas de frontière. Ce qui compte, pour une cible parisienne ou francilienne, c’est de bien connaître la zone : où se trouvent les entreprises, qui décide, comment sont organisés les sièges et les établissements.",
          "Être établi à Paris apporte aussi une proximité pratique : les points de pilotage peuvent se tenir en présentiel si vous le préférez, et l’équipe travaille dans le même fuseau et les mêmes horaires que vos décideurs.",
        ],
      },
      {
        title: "Cibler Paris et l’Île-de-France avec précision",
        paragraphs: [
          "« Paris » recouvre des réalités très différentes selon votre offre. Nous paramétrons la zone selon votre marché plutôt que de viser largement.",
        ],
        items: [
          {
            title: "Par zone géographique",
            text: "Paris intra-muros, départements de la petite et de la grande couronne, ou pôles d’activité précis comme La Défense, la Plaine Saint-Denis ou Paris-Saclay, selon la présence de votre cible.",
          },
          {
            title: "Par secteur et taille",
            text: "Services, industrie, numérique, santé, immobilier d’entreprise… La taille de l’entreprise et son secteur changent le décideur à contacter et le message à tenir.",
          },
          {
            title: "Par fonction",
            text: "Le décideur n’est pas le même selon que vous vendez à une direction générale, financière, RH ou informatique. Nous ciblons la fonction, pas seulement l’entreprise.",
          },
          {
            title: "Siège ou établissement",
            text: "Beaucoup d’entreprises ont leur siège à Paris et leurs décisions d’achat ailleurs, ou l’inverse. Nous vérifions où se prend réellement la décision avant de contacter.",
          },
        ],
      },
      {
        title: "Notre méthode de génération de leads",
        paragraphs: [
          [
            "La méthode est celle de notre offre de ",
            link(SERVICES.generationLeads, "génération de leads B2B"),
            ", appliquée à votre zone.",
          ],
        ],
        items: [
          {
            title: "1. Cadrage",
            text: "Votre client idéal à partir de vos meilleures affaires, votre proposition de valeur, et la définition écrite d’un lead qualifié.",
          },
          {
            title: "2. Fichier ciblé",
            text: [
              "Construction ou nettoyage d’une base d’entreprises et de décideurs de la zone, vérifiée avant utilisation. Voir le ",
              link(SERVICES.fichier),
              ".",
            ],
          },
          {
            title: "3. Séquences multicanales",
            text: "Email, LinkedIn et appels enchaînés dans une même séquence, avec des messages adaptés à chaque segment et des relances limitées.",
          },
          {
            title: "4. Qualification",
            text: [
              "Les réponses sont qualifiées selon vos critères (besoin, échéance, rôle de l’interlocuteur). Voir la ",
              link(SERVICES.qualification),
              ".",
            ],
          },
          {
            title: "5. Rendez-vous",
            text: [
              "Les leads mûrs sont transformés en rendez-vous dans l’agenda de vos commerciaux, avec un brief écrit. Voir la ",
              link(SERVICES.priseRdv),
              ".",
            ],
          },
        ],
      },
      {
        title: "Pour quels profils d’entreprises ?",
        items: [
          {
            title: "Les entreprises qui vendent à des entreprises parisiennes",
            text: "Éditeurs, cabinets, prestataires de services : quand la cible est concentrée, une démarche locale bien ciblée évite de disperser l’effort sur tout le territoire.",
          },
          {
            title: "Les entreprises parisiennes qui veulent un partenaire proche",
            text: "Si vous préférez rencontrer l’équipe qui prospecte en votre nom, la proximité simplifie le cadrage et les points réguliers.",
          },
          {
            title: "Les entreprises qui testent la région avant de recruter",
            text: "Une équipe externe permet de valider l’intérêt du marché parisien avant d’y affecter des commerciaux à plein temps.",
          },
        ],
        closing: [
          [
            "Vous ciblez toute la France ? Notre page ",
            link(SERVICES.externalisee),
            " décrit le dispositif complet, quelle que soit la zone.",
          ],
        ],
      },
      {
        title: "Les erreurs courantes en prospection locale",
        items: [
          {
            title: "Viser « Paris » sans critères",
            text: "Une zone géographique seule ne fait pas une cible. Sans secteur, taille et fonction, les messages restent génériques.",
          },
          {
            title: "Négliger la qualité des données",
            text: "Les décideurs changent de poste et d’entreprise. Un fichier non revérifié fait perdre du temps aux appelants et abîme la réputation d’envoi.",
          },
          {
            title: "Mesurer le volume plutôt que la qualité",
            text: [
              "Nombre de contacts traités et nombre de rendez-vous tenus ne disent pas la même chose. Voir notre article sur la ",
              link(ARTICLES.agenceLeadsParis, "génération de leads B2B à Paris"),
              " et sur les ",
              link(ARTICLES.kpiProspection, "KPI de prospection"),
              ".",
            ],
          },
        ],
      },
    ],
    faqs: [
      ["Combien de temps pour lancer une campagne à Paris ?", "Les campagnes peuvent démarrer sous 7 jours une fois le ciblage et les messages validés avec vous. Le rythme des premiers rendez-vous dépend ensuite de votre cible et de la longueur de votre cycle de vente."],
      ["Pouvons-nous nous rencontrer ?", "Oui. Les points de pilotage se tiennent en visioconférence ou en présentiel selon votre préférence, à Paris."],
      [
        "Quelle est la différence entre génération de leads et prospection externalisée ?",
        [
          "La génération de leads vise à produire des contacts qualifiés ; la ",
          link(SERVICES.externalisee, "prospection commerciale externalisée"),
          " désigne le mode de collaboration : une équipe extérieure prend en charge la démarche de bout en bout, jusqu’aux rendez-vous.",
        ],
      ],
      ["Respectez-vous le RGPD ?", "Oui. Les contacts sont des professionnels sollicités au sujet de leur fonction, leur origine est conservée, et toute demande d’opposition est appliquée immédiatement."],
    ],
    articles: [
      [...ARTICLES.agenceLeadsParis, "Notre analyse de la génération de leads B2B à Paris."],
      [...ARTICLES.choisirAgenceLeads, "Les critères pour choisir une agence de génération de leads."],
      [...ARTICLES.kpiProspection, "Les indicateurs pour piloter la prospection."],
    ],
  },

  /* ------------------------------------------------------------------ fichier */
  "/services/fichier-prospection-b2b": {
    sections: [
      {
        title: "À quoi sert un fichier de prospection B2B",
        paragraphs: [
          "Un fichier de prospection est la liste des entreprises et des décideurs que vous allez contacter. C’est la matière première de toute campagne : si la liste est mal ciblée, incomplète ou périmée, le meilleur message du monde ne trouvera pas son lecteur. Un fichier ne se mesure donc pas à sa taille, mais à la proportion de contacts qui correspondent vraiment à votre client idéal et qu’on peut effectivement joindre.",
          "Il se distingue de votre base CRM, qui contient l’historique de vos relations : clients, anciens prospects, contacts de salons. Le fichier de prospection sert à aller vers des entreprises que vous ne connaissez pas encore, ou à enrichir et nettoyer ce que vous avez déjà.",
        ],
      },
      {
        title: "Ce qui fait la qualité d’un fichier",
        paragraphs: [
          "Six critères permettent de juger un fichier avant de lancer une campagne. Nous les contrôlons avant toute livraison.",
        ],
        items: [
          {
            title: "Le ciblage",
            text: "Les entreprises et les fonctions correspondent aux critères de votre client idéal : secteur, taille, zone, fonction, et signaux utiles comme un recrutement ou une levée de fonds. Les exclusions sont appliquées : clients actuels, concurrents, contacts ayant déjà refusé.",
          },
          {
            title: "L’exactitude",
            text: "Les noms, fonctions et coordonnées sont vérifiés. Une adresse invalide fait rebondir un message et abîme la réputation d’envoi ; un mauvais numéro fait perdre du temps à l’appelant.",
          },
          {
            title: "La complétude",
            text: "Les champs convenus au cadrage sont renseignés : entreprise, secteur, taille, fonction, identité et coordonnées professionnelles disponibles. Un champ manquant est signalé, pas inventé.",
          },
          {
            title: "La fraîcheur",
            text: "Les professionnels changent de poste et d’entreprise régulièrement : un fichier ancien perd de sa valeur. Il se revérifie avant chaque campagne importante.",
          },
          {
            title: "L’unicité",
            text: "Chaque contact apparaît une seule fois, y compris quand il figure aussi dans votre CRM. Les doublons font contacter deux fois la même personne, ce qui agace et nuit à votre image.",
          },
          {
            title: "La conformité",
            text: "Le fichier doit pouvoir servir à une prospection B2B légitime : données professionnelles pertinentes pour la fonction visée, origine des données conservée, possibilité de gérer les oppositions.",
          },
        ],
      },
      {
        title: "Les sources de données, et leurs limites",
        paragraphs: [
          "Aucune source n’est parfaite. Un fichier de qualité croise en général plusieurs sources, chacune apportant ce que les autres n’ont pas.",
        ],
        items: [
          {
            title: "Votre propre base",
            text: "Anciens prospects, contacts de salons, demandes entrantes : ce sont souvent les contacts les plus réceptifs, mais leurs informations vieillissent vite.",
          },
          {
            title: "Les registres publics d’entreprises",
            text: "Ils fournissent des informations fiables sur l’existence, l’activité, la taille et la localisation d’une entreprise, mais pas ses décideurs.",
          },
          {
            title: "Les sites d’entreprise et les réseaux professionnels",
            text: "Utiles pour identifier les fonctions et les décideurs, ils demandent un contrôle et une mise à jour, car l’information publiée n’est pas toujours à jour.",
          },
          {
            title: "Les bases commerciales de données B2B",
            text: "Elles permettent de gagner du temps sur de gros volumes, avec une qualité très variable d’un éditeur à l’autre : un échantillon se vérifie avant d’être adopté.",
          },
        ],
      },
      {
        title: "Comment nous construisons votre fichier",
        items: [
          {
            title: "1. Ciblage",
            text: "Validation de votre marché, des fonctions visées et des exclusions, à partir de ce que vous savez de vos meilleurs clients.",
          },
          {
            title: "2. Collecte et enrichissement",
            text: "Constitution de la base selon les champs convenus, avec l’origine de chaque donnée conservée.",
          },
          {
            title: "3. Contrôle",
            text: "Vérification, normalisation des formats et suppression des doublons, y compris par rapport à votre CRM.",
          },
          {
            title: "4. Livraison",
            text: [
              "Remise du fichier en CSV ou Excel, dans un format défini avec vous pour l’import dans votre CRM, accompagnée de recommandations d’activation conformes à votre usage. Le fichier alimente ensuite vos ",
              link(SERVICES.campagnes, "campagnes email et SMS"),
              " ou vos appels de ",
              link(SERVICES.teleprospection, "téléprospection"),
              ".",
            ],
          },
        ],
      },
      {
        title: "Bien utiliser son fichier",
        paragraphs: [
          "Un bon fichier peut être mal exploité. Quelques règles évitent de gaspiller son potentiel.",
        ],
        items: [
          {
            title: "Segmenter avant de contacter",
            text: "Découpez le fichier par fonction, secteur ou taille pour adapter les messages. Un seul message pour tout le fichier est un message générique.",
          },
          {
            title: "Contacter par vagues",
            text: "Commencez par un échantillon, mesurez les réponses et les retours, corrigez, puis étendez. Cela protège la réputation d’envoi et révèle vite les défauts de ciblage.",
          },
          {
            title: "Tenir à jour",
            text: "Enregistrez les désinscriptions, les oppositions, les adresses invalides et les changements de poste, de façon à ne jamais recontacter quelqu’un qui l’a refusé.",
          },
        ],
        closing: [
          [
            "Notre article sur le ",
            link(ARTICLES.fichierProspection, "fichier de prospection B2B"),
            " approfondit ces points.",
          ],
        ],
      },
      {
        title: "Fichiers B2B et RGPD",
        paragraphs: [
          "En B2B, contacter un professionnel au sujet de son activité est possible, à condition de l’informer de l’origine de ses données et de respecter son droit d’opposition. Un fichier utilisable est donc un fichier dont on sait d’où viennent les données, qui se limite à ce qui est utile pour la fonction visée et qui permet de traiter les demandes de désinscription. Pour un cas particulier, rapprochez-vous de votre conseil juridique ou des ressources de la CNIL.",
        ],
      },
    ],
    faqs: [
      [
        "Comment sont gérés les contacts qui ne doivent pas être sollicités ?",
        "Les exclusions sont définies au ciblage : clients actuels, concurrents, contacts ayant déjà refusé ou demandé à ne plus être contactés. Elles sont appliquées avant la livraison et conservées pour les campagnes suivantes.",
      ],
      [
        "À quelle fréquence faut-il mettre à jour un fichier ?",
        "Il n’y a pas de règle unique : les professionnels changent de poste ou d’entreprise régulièrement, donc plus un fichier est ancien, moins il est fiable. Il se revérifie avant chaque campagne importante.",
      ],
      [
        "Que doit contenir un bon cahier des charges ?",
        "Les critères du client idéal (secteur, taille, zone, fonction), les champs attendus, le volume visé, les exclusions et le format de livraison. Plus ces éléments sont précis, plus le fichier est exploitable.",
      ],
      [
        "Quelle différence avec un service de génération de leads ?",
        [
          "Le fichier fournit la liste des contacts à joindre. La génération de leads va plus loin : elle contacte ces personnes, qualifie les réponses et vous transmet les leads intéressés. Voir ",
          link(SERVICES.generationLeads),
          ".",
        ],
      ],
    ],
    articles: [
      [...ARTICLES.fichierProspection, "Comment constituer, enrichir et exploiter un fichier fiable."],
      [...ARTICLES.coldEmailing, "Bien activer un fichier par email."],
    ],
  },

  /* ------------------------------------------------------------ qualification */
  "/services/qualification-leads-b2b": {
    sections: [
      {
        title: "Pourquoi qualifier vos leads",
        paragraphs: [
          "Tous les leads ne se valent pas. Un visiteur qui télécharge un document, un inscrit à un webinaire, un contact de salon ou une demande de devis n’expriment pas le même niveau d’intention. Sans tri, vos commerciaux passent du temps sur des contacts qui n’achèteront pas, et les leads mûrs attendent.",
          "La qualification consiste à contacter chaque lead, à comprendre sa situation et à décider, selon des critères écrits à l’avance, s’il mérite d’être repris par un commercial maintenant, plus tard ou pas du tout. Elle protège le temps des vendeurs et améliore la relation entre marketing et ventes : les deux équipes parlent enfin des mêmes leads.",
        ],
      },
      {
        title: "Les critères de qualification",
        paragraphs: [
          "Nous construisons avec vous une grille écrite. Elle s’appuie le plus souvent sur la méthode BANT, adaptée à votre vente.",
        ],
        items: [
          {
            title: "Besoin",
            text: "Quel problème le lead cherche-t-il à résoudre, et dans quel contexte ? Un besoin décrit avec ses mots vaut mieux qu’une case cochée.",
          },
          {
            title: "Autorité",
            text: "Quel est le rôle de la personne dans la décision : décideur, prescripteur, utilisateur ? Qui d’autre intervient ?",
          },
          {
            title: "Budget",
            text: "Existe-t-il une capacité à financer le projet, ou un processus pour la débloquer ? Il ne s’agit pas toujours d’un montant précis.",
          },
          {
            title: "Échéance",
            text: "Quand le projet doit-il avancer, et qu’est-ce qui rythme la décision ? Un projet « un jour peut-être » se traite autrement qu’un projet daté.",
          },
          {
            title: "Critères propres à votre activité",
            text: "Taille d’entreprise, secteur, outil actuel, zone géographique : tout ce qui, chez vous, fait la différence entre un bon et un mauvais client.",
          },
        ],
        closing: [
          "Chaque critère reçoit un niveau (rempli, partiel, absent), et l’ensemble donne un score ou un statut qui décide de la suite. Ce scoring doit rester lisible : vos commerciaux doivent comprendre pourquoi un lead a été classé ainsi.",
        ],
      },
      {
        title: "Le déroulé d’une qualification",
        items: [
          {
            title: "1. Réception des leads",
            text: "Import des leads depuis votre CRM, vos formulaires ou une campagne, avec la source et le contexte de chaque contact.",
          },
          {
            title: "2. Premier contact rapide",
            text: "Un lead intéressé perd de sa chaleur avec le temps : le premier appel doit intervenir vite, sur la base de ce que le contact a fait (téléchargement, demande, inscription).",
          },
          {
            title: "3. Appels et relances",
            text: "Plusieurs tentatives à des moments différents, jusqu’à cinq selon l’offre choisie, avec des messages écrits de relance quand le contact reste injoignable.",
          },
          {
            title: "4. Échange de qualification",
            text: "Questions ouvertes sur la situation, puis vérification des critères. Les réponses sont consignées avec les mots du contact.",
          },
          {
            title: "5. Statut et transmission",
            text: "Le lead reçoit un statut, des notes et une recommandation de prochaine action, puis il est transmis dans votre CRM aux commerciaux concernés.",
          },
        ],
      },
      {
        title: "Les statuts possibles d’un lead",
        paragraphs: [
          "À l’issue de la qualification, chaque lead est rangé dans une catégorie claire. Elles sont définies avec vous, mais on retrouve généralement les suivantes.",
        ],
        items: [
          {
            title: "Qualifié",
            text: "Les critères sont réunis : le lead est prêt à être repris par un commercial, avec ses notes.",
          },
          {
            title: "À recontacter",
            text: "Un intérêt existe mais le moment n’est pas venu. Une date de reprise de contact est notée.",
          },
          {
            title: "Non joignable",
            text: "Le lead n’a pas répondu après les tentatives prévues. Il peut rejoindre une relance par écrit.",
          },
          {
            title: "Non qualifié",
            text: "Pas de besoin, hors cible ou sans pouvoir de décision. Le motif est consigné, ce qui aide à corriger le ciblage en amont.",
          },
          {
            title: "Opposition",
            text: "Le contact demande à ne plus être sollicité : sa demande est enregistrée et appliquée, et il n’est plus relancé.",
          },
        ],
      },
      {
        title: "Réussir le passage de relais marketing–ventes",
        paragraphs: [
          "La qualification ne vaut que si vos commerciaux reprennent les leads rapidement et dans de bonnes conditions. Trois pratiques font la différence.",
        ],
        items: [
          {
            title: "Convenir d’un délai de reprise",
            text: "Fixez ensemble le temps maximal entre la transmission d’un lead qualifié et le premier contact commercial. Sans cet engagement, la qualité du travail amont se perd.",
          },
          {
            title: "Organiser le retour des commerciaux",
            text: "Dites-nous ce que sont devenus les leads : transformés, perdus, et pourquoi. Ce retour permet d’ajuster la grille de qualification au fil du temps.",
          },
          {
            title: "Revoir la grille régulièrement",
            text: [
              "Une grille n’est pas figée : elle évolue avec votre offre et votre marché. Les indicateurs utiles sont décrits dans ",
              link(ARTICLES.kpiProspection),
              ".",
            ],
          },
        ],
      },
      {
        title: "Mesurer la qualification",
        paragraphs: [
          "Suivez la part des leads effectivement joints, la part de ceux qui sont qualifiés, et surtout ce que vos commerciaux en font. Un taux de qualification élevé qui ne débouche sur aucune vente indique une grille trop souple ; un taux très bas indique plutôt une grille trop stricte ou un ciblage amont à revoir. Le délai entre la réception du lead et le premier contact se mesure aussi : c’est l’un des leviers les plus simples à améliorer.",
        ],
      },
    ],
    faqs: [
      [
        "Que devient un lead non qualifié ?",
        "Il n’est pas transmis aux commerciaux. Selon les règles convenues, il est écarté ou conservé pour une relance plus tard, et le motif de non-qualification est consigné pour affiner le ciblage.",
      ],
      [
        "Qui définit la grille de qualification ?",
        "Vous et nous, au cadrage. La grille est écrite avant le premier appel et adaptée à votre vente ; elle peut évoluer ensuite selon les retours de vos commerciaux.",
      ],
      [
        "Quelle différence avec la prise de rendez-vous ?",
        [
          "La qualification trie des leads existants et vous les transmet avec un statut. La prise de rendez-vous va jusqu’à un échange fixé dans l’agenda de vos commerciaux. Voir ",
          link(SERVICES.priseRdv),
          ".",
        ],
      ],
      [
        "Peut-on qualifier des leads issus d’un événement ou d’un webinaire ?",
        "Oui. Des inscrits à un événement, des visiteurs d’un salon, des demandes entrantes ou une base CRM peuvent être traités ; le contexte de chaque contact est utilisé pour ouvrir l’échange.",
      ],
    ],
    articles: [
      [...ARTICLES.kpiProspection, "Les indicateurs qui disent si la qualification fonctionne."],
      [...ARTICLES.choisirAgenceLeads, "Choisir un prestataire de génération de leads."],
    ],
  },

  /* ---------------------------------------------------------------- campagnes */
  "/services/campagnes-email-sms-b2b": {
    sections: [
      {
        title: "Une campagne B2B n’est pas un envoi",
        paragraphs: [
          "Une campagne email et SMS B2B est une séquence pensée pour une cible précise : un segment, un objectif, des messages qui s’enchaînent, des relances et un arrêt dès que le contact répond. L’envoi n’est que la partie visible. Ce qui détermine le résultat se joue avant (qui reçoit quoi) et après (quoi faire de chaque réponse).",
          [
            "Une campagne s’appuie sur un fichier de qualité, décrit sur la page ",
            link(SERVICES.fichier),
            ", et elle débouche sur des leads que l’on qualifie ou sur des appels de ",
            link(SERVICES.teleprospection),
            ".",
          ],
        ],
      },
      {
        title: "Segmenter pour que chaque message parle à quelqu’un",
        paragraphs: [
          "Un message identique pour tout le fichier est un message ignoré. La segmentation donne à chaque groupe un message qui parle de sa situation.",
        ],
        items: [
          {
            title: "Par fonction",
            text: "Un directeur commercial, un directeur financier et un dirigeant de PME n’ont pas les mêmes préoccupations, donc pas les mêmes arguments.",
          },
          {
            title: "Par secteur et taille d’entreprise",
            text: "Un exemple parlant pour une entreprise industrielle ne l’est pas pour un cabinet de services.",
          },
          {
            title: "Par maturité",
            text: "Un contact qui a déjà échangé avec vous ne reçoit pas le même message qu’un contact qui vous découvre.",
          },
          {
            title: "Par historique d’interactions",
            text: "Ceux qui ont cliqué, répondu ou ouvert à plusieurs reprises sont relancés autrement que ceux qui n’ont pas réagi.",
          },
        ],
      },
      {
        title: "Anatomie d’un email de prospection",
        paragraphs: [
          [
            "Un email de prospection efficace est court, précis et honnête. Nous détaillons des exemples dans notre article sur le ",
            link(ARTICLES.coldEmailing, "cold emailing B2B"),
            ". Voici les éléments qui comptent.",
          ],
        ],
        items: [
          {
            title: "L’objet",
            text: "Clair, en rapport avec la fonction du destinataire, sans effet d’annonce ni formule trompeuse.",
          },
          {
            title: "La première phrase",
            text: "Elle dit pourquoi vous écrivez à cette personne en particulier. C’est elle qui décide si la suite sera lue.",
          },
          {
            title: "Le corps du message",
            text: "Un seul problème, une manière d’y répondre, et une raison de vous croire qui s’appuie sur des faits que vous pouvez montrer.",
          },
          {
            title: "L’appel à l’action",
            text: "Une seule demande, simple : une question à laquelle répondre, ou un créneau à proposer.",
          },
          {
            title: "La signature et la désinscription",
            text: "L’expéditeur est clairement identifié et le moyen de ne plus recevoir de message est visible et simple.",
          },
        ],
      },
      {
        title: "Une séquence type, et ses règles",
        paragraphs: [
          "Une séquence typique comporte un premier message, deux ou trois relances et un dernier message de clôture, espacés de quelques jours. Chaque relance apporte un angle nouveau (un exemple, une question, une ressource) au lieu de répéter le premier message.",
          "Trois règles s’appliquent à toute séquence : elle s’arrête dès que le contact répond, elle s’arrête s’il demande à ne plus être contacté, et le rythme reste raisonnable. Une relance envoyée à quelqu’un qui a déjà répondu abîme la confiance plus qu’elle ne produit de rendez-vous.",
        ],
      },
      {
        title: "Le rôle du SMS",
        paragraphs: [
          "Le SMS est un canal intrusif : il se réserve aux rappels et aux confirmations, auprès de contacts qui ont déjà échangé avec vous et dans le respect de leur accord. Il complète l’email, par exemple pour rappeler un rendez-vous ou relancer un contact qui a manifesté un intérêt, mais il n’ouvre pas la relation. Les messages sont courts, envoyés à des heures raisonnables, et offrent toujours un moyen simple de refuser les envois suivants.",
        ],
      },
      {
        title: "Délivrabilité et réputation d’envoi",
        paragraphs: [
          "Un message qui n’arrive pas dans la boîte de réception n’existe pas. La réputation d’envoi se construit et se protège avec quelques précautions.",
        ],
        items: [
          {
            title: "Authentifier le domaine d’envoi",
            text: "Les protocoles d’authentification de l’expéditeur (SPF, DKIM, DMARC) prouvent que les messages proviennent bien de vous et rassurent les messageries.",
          },
          {
            title: "Protéger le domaine principal",
            text: "Beaucoup d’entreprises envoient leurs campagnes depuis un domaine dédié, proche du leur, pour ne pas exposer le domaine de leurs communications courantes.",
          },
          {
            title: "Monter en charge progressivement",
            text: "Un lancement progressif laisse aux messageries le temps de connaître l’expéditeur et révèle les problèmes avant qu’ils ne touchent tout le fichier.",
          },
          {
            title: "Garder une liste propre",
            text: "Retirer les adresses invalides, les désinscrits et les contacts qui ne réagissent jamais améliore la réputation d’envoi.",
          },
          {
            title: "Soigner le contenu",
            text: "Peu de liens, pas de pièces jointes lourdes, un texte simple et contrôlé : les liens sont vérifiés avant l’envoi.",
          },
        ],
      },
      {
        title: "Mesurer ce qui compte",
        paragraphs: [
          "Le taux d’ouverture est devenu peu fiable, car de nombreux outils de messagerie chargent automatiquement les images. Suivez plutôt les réponses utiles, les clics, les désabonnements et les signalements, ainsi que la suite donnée par vos commerciaux. Une campagne qui produit beaucoup de réponses mais aucun lead exploitable se corrige au niveau du ciblage ou du message ; une campagne qui produit peu de réponses mais de bonnes conversations est souvent sur la bonne voie.",
          [
            "Les indicateurs de prospection sont détaillés dans notre article sur les ",
            link(ARTICLES.kpiProspection, "KPI de prospection commerciale"),
            ".",
          ],
        ],
      },
      {
        title: "Emails B2B et RGPD",
        paragraphs: [
          "En B2B, la prospection par email vers une adresse professionnelle est possible sans consentement préalable, à condition que le message soit en rapport avec la fonction de la personne contactée, que l’expéditeur soit clairement identifiable et qu’un moyen d’opposition simple soit proposé dans chaque envoi. Les demandes d’opposition sont prises en compte immédiatement. Les règles diffèrent pour le SMS et pour les destinataires qui ne sont pas des professionnels : pour un cas précis, rapprochez-vous de votre conseil juridique ou de la CNIL.",
        ],
      },
    ],
    faqs: [
      [
        "Combien de messages comporte une séquence ?",
        "En général un premier message, deux ou trois relances et un dernier message de clôture, espacés de quelques jours. La longueur dépend de la cible et de la réaction des premiers contacts ; la séquence s’arrête dès qu’un contact répond.",
      ],
      [
        "Faut-il un domaine d’envoi dédié ?",
        "C’est une pratique courante pour protéger la réputation du domaine principal de l’entreprise. Nous le recommandons lorsque le volume ou la sensibilité de votre messagerie le justifient, et nous en discutons au cadrage.",
      ],
      [
        "Pourquoi mes emails arrivent-ils en courrier indésirable ?",
        "Les causes les plus fréquentes sont un domaine non authentifié, une liste contenant des adresses invalides, un volume trop brusque, un contenu trop chargé en liens ou en images, ou des signalements de destinataires. L’authentification du domaine et le lancement progressif en traitent la plupart.",
      ],
      [
        "Les campagnes sont-elles adaptées à chaque segment ?",
        "Oui. Les messages sont écrits pour chaque segment, avec ses enjeux et l’action attendue, plutôt qu’un message unique pour tout le fichier.",
      ],
    ],
    articles: [
      [...ARTICLES.coldEmailing, "Construire une campagne qui obtient des réponses utiles."],
      [...ARTICLES.automatiserWorkflows, "Automatiser les relances sans perdre en qualité."],
    ],
  },
};
