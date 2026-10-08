import { getOffersByIds } from "./offers-catalog.js";

/*
 * Offres du catalogue rattachées à la prospection externalisée. Les prix
 * affichés sur la page service et dans sa FAQ sont lus ici plutôt que recopiés,
 * pour qu'ils ne puissent pas diverger de /offres.
 */
export const [GROWTH_STANDARD_OFFER, VENTE_RDV_OFFER] = getOffersByIds([
  "contact-growth-standard",
  "contact-vente-rdv",
]);

/** « /mois + 150 € … » → « par mois + 150 € … », pour une lecture en phrase. */
export const billingInSentence = (offer) => offer.billing.replace(/^\//, "par ");

export const TRANSACTIONAL_SERVICES = {
  externalisee: {
    path: "/services/prospection-commerciale-externalisee",
    title: "Prospection commerciale externalisée | Suzali Conseil",
    description:
      `Externalisez votre prospection B2B : équipe dédiée, appels, emails et LinkedIn, rendez-vous qualifiés dans votre agenda. Dès ${GROWTH_STANDARD_OFFER.price} par mois. Audit gratuit.`,
    eyebrow: "Force commerciale externalisée",
    h1: "Prospection commerciale externalisée",
    introduction:
      "Nous prenons en charge votre prospection B2B de bout en bout : ciblage des décideurs, appels, emails et messages LinkedIn, qualification, puis rendez-vous transmis à vos commerciaux avec leur compte rendu. Une équipe dédiée démarre en quelques jours, sans recrutement de votre côté.",
    suitableFor: [
      "PME qui veulent créer un pipeline sans recruter immédiatement",
      "Équipes commerciales qui manquent de temps pour prospecter",
      "Entreprises qui lancent une nouvelle offre ou un nouveau marché",
      "Dirigeants qui veulent tester un marché avant d'y affecter des commerciaux",
    ],
    deliverables: [
      "Ciblage ICP et fichier de contacts vérifié",
      "Scripts et séquences validés avec vous avant tout envoi",
      "Prospection par téléphone, email et LinkedIn",
      "Rendez-vous posés dans l'agenda, avec un briefing avant-vente",
      "Intégration à votre CRM et historique complet des échanges",
      "Reporting hebdomadaire et account manager dédié",
    ],
    process: [
      ["Cadrage", "Atelier d'onboarding : client idéal à partir de vos affaires signées, proposition de valeur, critères de qualification et passage de relais."],
      ["Préparation", "Fichier ciblé et vérifié, scripts d'appel, séquences email et LinkedIn, branchement à votre CRM. Campagnes actives sous 7 jours après validation."],
      ["Activation", "Appels, emails, messages et relances par notre équipe. Chaque rendez-vous est qualifié selon vos critères, puis posé dans l'agenda avec son compte rendu."],
      ["Pilotage", "Point hebdomadaire : contacts traités, conversations, objections, rendez-vous. Les messages et segments qui ne convertissent pas sont réécrits ou coupés."],
    ],
    // Les trois premières questions sont reprises par la FAQ de l'accueil
    // (index 0 et 1) et celle de /offres (index 0 et 2) : en garder l'ordre.
    faqs: [
      ["Comment démarre la mission ?", "Par un atelier d’onboarding qui fixe votre cible, votre proposition de valeur, les critères de qualification et le passage de relais à vos commerciaux. Les campagnes sont actives sous 7 jours une fois le ciblage et les messages validés avec vous."],
      ["Quels canaux sont utilisés ?", "Le dispositif associe téléphone, email et LinkedIn selon votre audience, vos données et les règles applicables. Le téléphone reste le canal le plus sûr pour qualifier un besoin ; l'email et LinkedIn ouvrent la porte et préparent l'appel."],
      ["Comment suivez-vous les résultats ?", "Vous recevez un reporting hebdomadaire sur les contacts traités, les conversations, les qualifications, les objections rencontrées et les rendez-vous obtenus. Un account manager dédié le commente avec vous et ajuste le dispositif."],
      ["Combien coûte la prospection commerciale externalisée ?", `Chez Suzali Conseil, l'offre Growth Standard coûte ${GROWTH_STANDARD_OFFER.price} ${billingInSentence(GROWTH_STANDARD_OFFER)}. Le forfait couvre l'équipe, le ciblage, les outils et le pilotage ; la part variable ne s'applique qu'aux rendez-vous validés et réellement honorés. Pour un besoin limité à la prise de rendez-vous téléphonique, la Vente au Rendez-Vous démarre à ${VENTE_RDV_OFFER.price} de ${VENTE_RDV_OFFER.billing}.`],
      ["Externaliser ou recruter un commercial en interne : que choisir ?", "Recruter coûte un salaire chargé, des outils, des données et plusieurs mois de recrutement puis de formation avant un rythme normal, que les résultats suivent ou non. Externaliser démarre en quelques jours avec une méthode et des outils déjà en place. L'interne reste préférable quand la vente demande une expertise produit très pointue dès le premier appel ; beaucoup d'entreprises externalisent pour lancer un marché, puis recrutent une fois le discours validé."],
      ["En combien de temps arrivent les premiers rendez-vous ?", "Les campagnes sont actives sous 7 jours après validation du ciblage et des messages. Les premiers rendez-vous qualifiés arrivent généralement dans les 30 jours suivant le lancement ; le rythme dépend ensuite de la longueur du cycle de vente de votre marché."],
      ["Est-ce que je garde la main sur le discours et sur les prospects ?", "Oui. Les scripts et séquences sont validés avec vous avant tout envoi, chaque échange est tracé dans le CRM et chaque rendez-vous arrive avec un compte rendu. Vos commerciaux mènent la vente ; notre équipe ouvre la porte et qualifie."],
      ["La prospection externalisée est-elle conforme au RGPD ?", "Oui, si elle respecte les règles de la prospection B2B. On peut contacter un professionnel au sujet de son activité, à condition de l'informer de l'origine de ses données et de respecter son droit d'opposition ; par email, le message doit concerner sa fonction et proposer une désinscription simple. Nos fichiers sont sourcés et les demandes d'opposition sont appliquées immédiatement."],
      ["Quelle différence avec l'outbound marketing ou la prise de rendez-vous ?", "La prospection externalisée désigne le mode de collaboration : une équipe extérieure prend en charge l'ensemble de la démarche. L'outbound marketing désigne les canaux digitaux (cold email, LinkedIn, ABM) et la prise de rendez-vous se concentre sur le remplissage de l'agenda, surtout par téléphone. La prospection externalisée combine les deux."],
    ],
    related: [
      ["/services/commercial", "Solutions de prospection commerciale"],
      ["/services/teleprospection-b2b", "Téléprospection B2B"],
      ["/services/outbound-marketing-b2b", "Outbound marketing B2B"],
      ["/services/prise-rendez-vous-b2b", "Prise de rendez-vous B2B"],
    ],
  },
  fichier: {
    path: "/services/fichier-prospection-b2b",
    title: "Fichier de prospection B2B qualifié | Suzali Conseil",
    description:
      "Obtenez un fichier de prospection B2B ciblé, vérifié et enrichi selon votre ICP, livré en CSV ou Excel et prêt à intégrer dans votre CRM.",
    eyebrow: "Data B2B exploitable",
    h1: "Fichier de prospection B2B qualifié",
    introduction:
      "Nous constituons une base de prospects alignée sur votre marché et vos critères de vente, avec des données structurées, vérifiées et directement exploitables par vos équipes.",
    suitableFor: [
      "Équipes qui préparent une campagne de prospection ciblée",
      "Entreprises qui doivent enrichir ou nettoyer leur base B2B",
      "Commerciaux qui veulent concentrer leurs efforts sur le bon ICP",
    ],
    deliverables: [
      "Critères ICP : secteur, taille, zone, fonction et signaux utiles",
      "Coordonnées professionnelles selon leur disponibilité",
      "Données d’entreprise et segmentation par priorité",
      "Contrôles de qualité et déduplication",
      "Livraison CSV ou Excel prête pour le CRM",
    ],
    process: [
      ["Ciblage", "Validation de votre marché, des fonctions visées et des exclusions."],
      ["Collecte", "Constitution et enrichissement de la base selon les champs convenus."],
      ["Contrôle", "Vérification, normalisation et suppression des doublons."],
      ["Livraison", "Remise du fichier et recommandations d’activation conformes à votre usage."],
    ],
    faqs: [
      ["Quels champs sont livrés ?", "La structure dépend du ciblage et peut inclure entreprise, secteur, taille, fonction, identité et coordonnées professionnelles disponibles."],
      ["Le fichier est-il compatible avec notre CRM ?", "Oui. La livraison en CSV ou Excel suit un format défini avec vous pour faciliter l’import et le mapping."],
      ["Comment prenez-vous en compte le RGPD ?", "Le cadrage porte sur un usage B2B pertinent, la minimisation des données et les bonnes pratiques d’information et d’opposition."],
    ],
    related: [
      ["/services/generation-leads-b2b", "Génération de leads B2B"],
      ["/services/campagnes-email-sms-b2b", "Campagnes email et SMS B2B"],
      ["/services/qualification-leads-b2b", "Qualification de leads B2B"],
      ["/offres", "Tarifs des fichiers B2B"],
    ],
  },
  qualification: {
    path: "/services/qualification-leads-b2b",
    title: "Qualification commerciale de leads B2B | Suzali Conseil",
    description:
      "Transformez vos contacts entrants ou existants en leads qualifiés grâce aux appels, au scoring commercial et à une transmission claire dans votre CRM.",
    eyebrow: "Scoring et passage de relais",
    h1: "Qualification de leads B2B",
    introduction:
      "Notre cellule contacte, relance et évalue vos leads selon des critères commerciaux définis ensemble afin que vos vendeurs se concentrent sur les opportunités exploitables.",
    suitableFor: [
      "Équipes marketing qui génèrent des leads à traiter rapidement",
      "Commerciaux qui disposent d’une base encore peu qualifiée",
      "Entreprises qui veulent fiabiliser leur passage marketing-vente",
    ],
    deliverables: [
      "Grille de qualification et scoring commercial",
      "Jusqu’à cinq tentatives d’appel selon l’offre choisie",
      "Collecte des besoins, contexte, calendrier et niveau d’intérêt",
      "Statut détaillé et notes de conversation",
      "Transmission CRM et priorisation des relances",
    ],
    process: [
      ["Critères", "Définition des informations nécessaires à une reprise commerciale."],
      ["Contact", "Appels et relances selon le rythme prévu pour chaque lead."],
      ["Qualification", "Évaluation structurée, notes et niveau de priorité."],
      ["Handoff", "Mise à jour du CRM et transmission aux commerciaux concernés."],
    ],
    faqs: [
      ["Quels leads pouvez-vous qualifier ?", "Nous pouvons traiter des leads entrants, des inscrits à un événement, une base CRM ou des contacts issus d’une campagne."],
      ["Combien de tentatives réalisez-vous ?", "Le catalogue prévoit jusqu’à cinq appels par lead sur dix jours pour l’offre de qualification concernée."],
      ["Que reçoit l’équipe commerciale ?", "Chaque lead est associé à un statut, des réponses utiles, des notes et une recommandation de prochaine action."],
    ],
    related: [
      ["/services/prise-rendez-vous-b2b", "Prise de rendez-vous B2B"],
      ["/services/teleprospection-b2b", "Téléprospection B2B"],
      ["/services/fichier-prospection-b2b", "Fichier de prospection B2B"],
      ["/offres", "Tarifs de qualification"],
    ],
  },
  campagnes: {
    path: "/services/campagnes-email-sms-b2b",
    title: "Campagnes email et SMS B2B multicanales | Suzali Conseil",
    description:
      "Activez vos prospects avec des campagnes email et SMS B2B segmentées, des séquences adaptées, des relances ciblées et un reporting clair.",
    eyebrow: "Activation multicanale",
    h1: "Campagnes email et SMS B2B",
    introduction:
      "Nous préparons et pilotons des séquences email et SMS cohérentes avec votre cible, votre offre et le niveau de maturité de chaque segment.",
    suitableFor: [
      "Entreprises qui veulent activer un fichier de prospects",
      "Équipes qui relancent des contacts engagés ou inactifs",
      "Lancements d’offres nécessitant une séquence mesurable",
    ],
    deliverables: [
      "Segmentation du fichier et plan de campagne",
      "Copywriting des messages et séquences de relance",
      "Paramétrage des envois et contrôle des liens",
      "Relance SMS des segments pertinents",
      "Reporting sur les envois, clics et réponses utiles",
    ],
    process: [
      ["Segmentation", "Répartition des contacts par cible, maturité et priorité."],
      ["Séquence", "Rédaction des messages, temporalité et appels à l’action."],
      ["Diffusion", "Paramétrage, contrôles et lancement progressif de la campagne."],
      ["Optimisation", "Lecture des signaux, relances ciblées et bilan des résultats."],
    ],
    faqs: [
      ["Pouvez-vous utiliser notre fichier ?", "Oui, après contrôle de sa structure, de sa pertinence et des conditions dans lesquelles il peut être activé."],
      ["Comment évitez-vous les messages génériques ?", "Les séquences sont adaptées aux segments, à leurs enjeux et à l’action attendue, sans surcharger les messages."],
      ["Quels résultats sont mesurés ?", "Le reporting suit les envois, ouvertures lorsque disponibles, clics, réponses, désabonnements et signaux transmis aux commerciaux."],
    ],
    related: [
      ["/services/outbound-marketing-b2b", "Outbound marketing B2B"],
      ["/services/fichier-prospection-b2b", "Fichier de prospection B2B"],
      ["/services/generation-leads-b2b", "Génération de leads B2B"],
      ["/offres", "Tarifs email et SMS"],
    ],
  },
};
