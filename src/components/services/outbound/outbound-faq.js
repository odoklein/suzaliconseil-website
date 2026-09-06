/**
 * FAQ de la page outbound, partagée entre le rendu visible (OutboundClient) et
 * le JSON-LD FAQPage émis côté serveur (page.jsx), pour que les deux ne
 * divergent pas.
 *
 * Les questions reprennent des requêtes réellement observées dans la Search
 * Console sur 28 j : « agence outbound » (85 impressions, position 41,35),
 * « agence prospection outbound », « solution prospection outbound b2b »,
 * « agence outbound paris » (position 20), « kpis prospection commerciale
 * b2b », et l'intention tarifaire de l'article supprimé « combien coûte la
 * génération de leads B2B » (position 9,72), désormais redirigé vers /offres.
 *
 * Les réponses ne reprennent que des engagements déjà affichés sur le site
 * (déploiement sous 7 jours, premiers leads sous 30 jours, conformité RGPD) :
 * aucune promesse nouvelle n'est introduite ici.
 */
export const OUTBOUND_FAQ = [
  {
    question: "Qu'est-ce qu'une agence outbound marketing B2B ?",
    answer:
      "Une agence outbound va chercher vos clients au lieu de les attendre. Là où l'inbound mise sur du contenu qui attire des prospects déjà en recherche, l'outbound identifie vos comptes cibles, contacte directement les décideurs et provoque la conversation. Concrètement, Suzali Conseil construit votre fichier de comptes cibles, rédige les séquences, opère les campagnes cold email et LinkedIn, puis transmet à vos commerciaux des rendez-vous qualifiés plutôt que des contacts tièdes.",
  },
  {
    question:
      "Quelle différence entre outbound marketing et prospection commerciale externalisée ?",
    answer:
      "L'outbound marketing désigne les canaux : cold email, LinkedIn, ABM, téléphone. La prospection commerciale externalisée désigne le mode de collaboration : vous confiez l'exécution à une équipe extérieure plutôt qu'à des SDR internes. Les deux se recouvrent souvent, mais on peut faire de l'outbound en interne, comme on peut externaliser une prospection purement téléphonique. Si votre besoin porte d'abord sur le modèle d'équipe, notre page prospection commerciale externalisée décrit cet accompagnement.",
  },
  {
    question: "Combien coûte une campagne d'outbound marketing B2B ?",
    answer:
      "Le budget dépend du nombre de comptes ciblés, du nombre de canaux activés et du niveau de personnalisation attendu : une séquence cold email sur un marché large ne mobilise pas les mêmes moyens qu'une campagne ABM sur cinquante comptes stratégiques. Nos formules et leurs périmètres sont détaillés sur la page offres, et l'audit initial est gratuit — il sert précisément à chiffrer votre cas avant tout engagement.",
  },
  {
    question:
      "En combien de temps obtient-on les premiers rendez-vous qualifiés ?",
    answer:
      "Les campagnes sont actives sous 7 jours après validation du ciblage et des messages. Les premiers rendez-vous qualifiés arrivent généralement dans les 30 jours suivant le lancement. Le délai réel dépend surtout de la longueur du cycle de vente de votre marché : un logiciel vendu 500 € par mois ne se décide pas au même rythme qu'un contrat industriel à six chiffres.",
  },
  {
    question: "Le cold emailing B2B est-il conforme au RGPD ?",
    answer:
      "Oui, à conditions. En B2B, la prospection par email vers une adresse professionnelle est possible sans consentement préalable, à condition que le message soit en rapport avec la fonction de la personne contactée, que l'expéditeur soit clairement identifiable et qu'un moyen d'opposition simple soit proposé dans chaque envoi. Nos campagnes sont construites sur ces trois règles : sourcing documenté, identité d'expéditeur réelle, désinscription en un clic honorée immédiatement.",
  },
  {
    question:
      "Quels indicateurs suivez-vous pour piloter une campagne outbound ?",
    answer:
      "Nous pilotons sur quatre niveaux : la délivrabilité (taux d'inbox placement, réputation du domaine), l'engagement (ouvertures, clics, taux d'acceptation LinkedIn), la conversation (taux de réponse, part de réponses positives) et le résultat commercial (rendez-vous qualifiés obtenus, opportunités ouvertes, pipeline généré). Seul le dernier niveau compte vraiment ; les trois premiers servent à diagnostiquer quand il décroche.",
  },
  {
    question:
      "Intervenez-vous à Paris et en Île-de-France ?",
    answer:
      "Oui. Nous accompagnons des entreprises à Paris et en Île-de-France comme partout en France : les campagnes outbound s'opèrent à distance, et les points de pilotage se tiennent en visioconférence ou en présentiel selon votre préférence. Le ciblage géographique de vos comptes, lui, se paramètre librement — région parisienne, national ou international.",
  },
];
