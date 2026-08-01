/**
 * Études de cas — données statiques.
 *
 * `metier` place le cas dans le diptyque :
 *   "commercial" → territoire gauche
 *   "tech"       → territoire droit
 *   "couture"    → bande pleine largeur, le cas a mobilisé les deux métiers
 *
 * Aucune métrique n'est publiée : ces projets n'ont pas de résultats mesurés
 * en base, et un chiffre non mesuré ne s'invente pas. La preuve passe par le
 * contexte, la démarche et les livrables.
 *
 * `aValider: true` marque un cas décrit au niveau du secteur faute de client
 * nommable. À remplacer par la raison sociale réelle une fois l'accord obtenu.
 */
export const CASE_STUDIES = [
  {
    id: "editeur-rh",
    client: "Éditeur de logiciel RH",
    clientLabel: "Éditeur de logiciel RH",
    sector: "SaaS · Ressources humaines",
    metier: "commercial",
    aValider: true,
    summary:
      "Une équipe de prospection externalisée montée de zéro pour ouvrir le marché des PME multi-sites.",
    contexte:
      "L'éditeur vendait par bouche-à-oreille et par son réseau de partenaires. Aucune démarche sortante structurée, aucun fichier de prospection exploitable, et une équipe interne trop occupée par le support pour décrocher son téléphone.",
    demarche: [
      "Cadrage du client idéal et construction d'un fichier de prospection qualifié",
      "Rédaction des séquences téléphone, email et LinkedIn dans la voix de l'éditeur",
      "Prospection opérée par une équipe dédiée, pilotée dans SuzaLink CRM",
      "Points hebdomadaires de calibrage sur les objections rencontrées",
    ],
    livrables: [
      "Fichier de prospection segmenté et vérifié",
      "Scripts d'appel et séquences multicanales",
      "Agenda de rendez-vous alimenté en continu",
      "Tableau de bord de suivi partagé",
    ],
    canaux: ["Téléphone", "Email", "LinkedIn"],
    image: null,
  },
  {
    id: "conseil-energie",
    client: "Cabinet de conseil en transition énergétique",
    clientLabel: "Cabinet de conseil en transition énergétique",
    sector: "Conseil · Énergie",
    metier: "commercial",
    aValider: true,
    summary:
      "Prise de rendez-vous qualifiés auprès de directions industrielles difficiles à joindre.",
    contexte:
      "Un cycle de vente long, des interlocuteurs protégés par plusieurs barrages, et des consultants dont le temps facturable ne pouvait pas partir en prospection. Le cabinet avait besoin de rendez-vous déjà qualifiés, pas de contacts bruts.",
    demarche: [
      "Définition des critères de qualification avec les consultants",
      "Ciblage des sites industriels et identification des décideurs",
      "Passage de barrages et qualification en amont du rendez-vous",
      "Transmission du compte rendu au consultant avant chaque entretien",
    ],
    livrables: [
      "Rendez-vous qualifiés posés directement dans les agendas",
      "Compte rendu de qualification par rendez-vous",
      "Historique complet des échanges dans SuzaLink CRM",
    ],
    canaux: ["Téléphone", "Email"],
    image: null,
  },
  {
    id: "investissement-locatif",
    client: "Investissement Locatif",
    clientLabel: "Investissement Locatif",
    sector: "Immobilier · Investissement",
    metier: "couture",
    aValider: false,
    summary:
      "Une campagne de téléprospection et le tunnel de réservation en ligne qui la reçoit, construits ensemble.",
    contexte:
      "Les investisseurs contactés par téléphone se perdaient entre l'appel et la prise de rendez-vous. La campagne sortante et l'outil de réservation étaient tenus par deux prestataires différents, et personne ne voyait le parcours en entier.",
    demarche: [
      "Reprise de la campagne de téléprospection auprès des investisseurs",
      "Conception du tunnel de réservation en ligne dans la continuité de l'appel",
      "Intégration des deux bouts : ce que dit le conseiller, ce que voit l'investisseur",
      "Suivi unifié des rendez-vous, de l'appel à la confirmation",
    ],
    livrables: [
      "Campagne de téléprospection opérée",
      "Tunnel de réservation en ligne",
      "Parcours continu entre l'appel et la réservation",
    ],
    canaux: ["Téléphone", "Web"],
    metiers: ["Prospection commerciale", "Développement web"],
    image: "/projects/investissementLocatif.png",
  },
  {
    id: "zupdeco",
    client: "ZupDeCo",
    clientLabel: "ZupDeCo",
    sector: "Association · Éducation",
    metier: "couture",
    aValider: false,
    summary:
      "L'automatisation des rappels de sessions, branchée sur le CRM qui suit élèves et tuteurs.",
    contexte:
      "Les sessions de tutorat se manquaient faute de rappel. Prévenir chaque élève et chaque tuteur à la main ne tenait pas à l'échelle de l'association, et les absences n'étaient visibles qu'après coup.",
    demarche: [
      "Cartographie des moments où un rappel change la présence",
      "Développement d'un système d'envoi automatique de SMS",
      "Branchement direct sur le CRM qui porte élèves et tuteurs",
      "Reprise des données de suivi pour que les absences remontent",
    ],
    livrables: [
      "Système d'envoi automatique de SMS de rappel",
      "Connexion au CRM existant",
      "Suivi des sessions et des présences",
    ],
    canaux: ["SMS", "CRM"],
    metiers: ["Automatisation", "Opérations"],
    image: "/projects/zupdeco.jpg",
  },
  {
    id: "ekozali",
    client: "Ekozali Fondation",
    clientLabel: "Ekozali Fondation",
    sector: "Fondation · Impact social",
    metier: "tech",
    aValider: false,
    summary:
      "Un portail de dons doublé d'un tableau de bord qui rend l'impact des projets lisible.",
    contexte:
      "La fondation collectait des dons sans pouvoir montrer ce qu'ils devenaient. Les donateurs demandaient des comptes, les rapports se fabriquaient à la main, et rien ne reliait une contribution à un projet financé.",
    demarche: [
      "Conception du parcours de don, de la découverte au reçu",
      "Développement du portail et de l'espace donateur",
      "Construction du tableau de bord de suivi des projets",
      "Mise en production et reprise des contenus existants",
    ],
    livrables: [
      "Portail de dons",
      "Tableau de bord de suivi d'impact",
      "Espace de gestion pour la fondation",
    ],
    canaux: ["Web", "Dashboard"],
    image: "/projects/ekozaliFondation.png",
  },
  {
    id: "mobiservice",
    client: "MobiService",
    clientLabel: "MobiService",
    sector: "Mobilité · Transport de personnes",
    metier: "tech",
    aValider: false,
    summary:
      "Une plateforme de réservation qui tient les chauffeurs d'un côté et les clients de l'autre.",
    contexte:
      "Les réservations arrivaient par téléphone et par messages, l'affectation des chauffeurs se faisait de tête, et le client n'avait aucun moyen de savoir où en était sa course.",
    demarche: [
      "Modélisation des deux faces du métier : chauffeurs et clients",
      "Développement de la plateforme de réservation",
      "Espace client avec suivi de course en temps réel",
      "Outils d'affectation et de supervision côté exploitation",
    ],
    livrables: [
      "Plateforme de réservation",
      "Espace client et suivi temps réel",
      "Gestion des chauffeurs et des affectations",
    ],
    canaux: ["Web", "Temps réel"],
    image: "/projects/mobiService.png",
  },
  {
    id: "neotrace",
    client: "NeoTrace",
    clientLabel: "NeoTrace",
    sector: "Logistique · Livraison",
    metier: "tech",
    aValider: false,
    summary:
      "Un tableau de bord de tracking colis où l'anomalie se voit avant que le client n'appelle.",
    contexte:
      "Les entreprises clientes découvraient les retards par leurs propres destinataires. L'information de livraison existait, éparpillée, mais aucune vue ne la rassemblait ni ne signalait ce qui dérapait.",
    demarche: [
      "Consolidation des états de livraison dans une vue unique",
      "Développement du tableau de bord connecté",
      "Système d'alertes automatiques sur les anomalies",
      "Mise en production et accompagnement des équipes",
    ],
    livrables: [
      "Tableau de bord de tracking temps réel",
      "Alertes automatiques",
      "Vue consolidée par entreprise cliente",
    ],
    canaux: ["Dashboard", "Temps réel"],
    image: "/projects/neotrace.png",
  },
];

export const COMMERCIAL_CASES = CASE_STUDIES.filter(
  (c) => c.metier === "commercial",
);
export const TECH_CASES = CASE_STUDIES.filter((c) => c.metier === "tech");
export const COUTURE_CASES = CASE_STUDIES.filter((c) => c.metier === "couture");
