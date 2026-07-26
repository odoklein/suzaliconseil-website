import dotenv from "dotenv";
import postgres from "postgres";

dotenv.config({ path: ".env.local" });

const seoBySlug = {
  "strategie-outbound-b2b-reussir-sa-prospection-commerciale-momocs1c": [
    "Réussir sa stratégie outbound B2B",
    "Construisez une stratégie outbound B2B efficace : ciblage, messages et suivi pour générer des leads qualifiés sans disperser vos efforts.",
  ],
  "pourquoi-externaliser-sa-prospection-commerciale-b2b-mojth973": [
    "Externaliser sa prospection B2B",
    "Découvrez quand externaliser votre prospection B2B, quels résultats attendre et comment choisir un partenaire adapté à vos objectifs commerciaux.",
  ],
  "kpi-prospection-commerciale-mesurer-et-piloter-la-performance-mocznw1b": [
    "KPI de prospection commerciale B2B",
    "Les indicateurs essentiels pour mesurer votre prospection B2B, piloter vos campagnes et améliorer durablement la performance commerciale.",
  ],
  "prospection-commerciale-pme-les-strategies-incontournables-mmix31os": [
    "Prospection commerciale pour les PME",
    "Structurez une prospection adaptée aux PME : ciblage, canaux, suivi et méthodes concrètes pour générer davantage de rendez-vous qualifiés.",
  ],
  "boostez-vos-ventes-b2b-agence-generation-leads-paris-expert-mm4molzg": [
    "Choisir une agence de leads B2B",
    "Les critères utiles pour choisir une agence de génération de leads B2B et bâtir une prospection alignée avec vos objectifs de croissance.",
  ],
  "cold-emailing-b2b-france-la-strategie-gagnante-en-2024-mlywxerj": [
    "Cold emailing B2B : méthode et RGPD",
    "Préparez des campagnes de cold emailing B2B ciblées, utiles et conformes au RGPD pour engager les bons décideurs et générer des échanges.",
  ],
  "le-fichier-prospection-b2b-cle-de-voute-de-votre-croissance-mlunw2ai": [
    "Construire un fichier de prospection B2B",
    "Apprenez à constituer, enrichir et exploiter un fichier de prospection B2B fiable pour mieux cibler vos campagnes et vos commerciaux.",
  ],
  "generation-leads-b2b-industrie-strategies-d-impact-mlrokvm8": [
    "Génération de leads B2B dans l’industrie",
    "Les leviers de génération de leads B2B adaptés aux cycles de vente industriels : ciblage, contenus, prospection et qualification des contacts.",
  ],
  "5-strategies-efficaces-pour-automatiser-vos-workflows-de-prospection": [
    "Automatiser ses workflows de prospection",
    "Découvrez cinq stratégies pour automatiser vos tâches de prospection, fiabiliser le suivi des contacts et libérer du temps pour la vente.",
  ],
  "les-10-outils-numeriques-indispensables-pour-booster-la-performance-commerciale-de-votre-entreprise": [
    "10 outils pour la performance commerciale",
    "Les outils numériques à prioriser pour mieux organiser la prospection, le suivi client et le pilotage de votre performance commerciale.",
  ],
};

const automationArticle = `
<p>Automatiser la prospection ne consiste pas à envoyer davantage de messages sans contrôle. L’objectif est de supprimer les tâches répétitives, de fiabiliser le suivi et de permettre aux commerciaux de consacrer plus de temps aux conversations utiles. Une automatisation efficace repose donc sur un ciblage précis, des règles simples et une reprise humaine dès qu’un prospect manifeste un intérêt.</p>
<h2>1. Structurer les données avant d’automatiser</h2>
<p>Un workflow ne peut pas corriger une base mal préparée. Commencez par définir votre profil client idéal : secteur, taille d’entreprise, zone géographique, fonction visée et signaux qui rendent un compte prioritaire. Normalisez ensuite les champs du CRM, supprimez les doublons et vérifiez les coordonnées professionnelles disponibles. Cette étape limite les erreurs d’envoi et améliore la qualité des segments.</p>
<p>Pour une nouvelle campagne, un <a href="/services/fichier-prospection-b2b">fichier de prospection B2B qualifié</a> permet de partir sur une structure exploitable. Les données doivent être limitées à ce qui est réellement utile au ciblage et traitées selon les principes applicables au contexte B2B.</p>
<h2>2. Déclencher les séquences selon des événements clairs</h2>
<p>Une bonne automatisation démarre à partir d’un événement vérifiable : ajout d’un contact dans une liste, téléchargement d’une ressource, participation à un événement, réponse à un formulaire ou changement de statut dans le CRM. Chaque déclencheur doit correspondre à une intention et à une prochaine action définie.</p>
<p>Évitez de placer tous les contacts dans la même séquence. Un décideur qui découvre votre entreprise ne doit pas recevoir le même message qu’un prospect déjà contacté par un commercial. Prévoyez des branches selon la source, la fonction, le niveau de maturité et les interactions précédentes.</p>
<h2>3. Coordonner email, téléphone et tâches commerciales</h2>
<p>L’automatisation est plus utile lorsqu’elle coordonne les canaux au lieu de les empiler. Une première séquence email peut présenter un problème concret, puis créer une tâche d’appel si le contact répond ou manifeste un signal utile. Une relance SMS peut être pertinente après un accord explicite ou pour confirmer une action attendue, mais elle ne doit pas devenir systématique.</p>
<p>Les <a href="/services/campagnes-email-sms-b2b">campagnes email et SMS B2B</a> gagnent en efficacité lorsque la segmentation, le rythme et le passage de relais sont définis avant le lancement. Le téléphone reste essentiel pour comprendre le contexte, traiter les objections et qualifier l’opportunité.</p>
<h2>4. Automatiser la qualification sans déshumaniser</h2>
<p>Un score peut aider à ordonner les priorités, mais il ne remplace pas une conversation. Attribuez des points à quelques signaux réellement liés à votre cycle de vente : correspondance avec l’ICP, engagement récent, besoin identifié, calendrier ou capacité de décision. Documentez les règles pour que marketing et ventes interprètent le score de la même manière.</p>
<p>Dès qu’un seuil est atteint, le workflow peut assigner le lead, créer une tâche et transmettre le contexte disponible. Une <a href="/services/qualification-leads-b2b">qualification de leads B2B</a> par téléphone permet ensuite de confirmer les informations, d’écarter les faux positifs et de préparer une reprise commerciale propre.</p>
<h2>5. Mesurer et améliorer le workflow</h2>
<p>Suivez des indicateurs reliés à l’objectif commercial : taux de données valides, réponses utiles, conversations engagées, leads qualifiés, rendez-vous honorés et opportunités créées. Les taux d’ouverture sont moins fiables qu’auparavant et ne doivent pas être utilisés seuls pour prendre une décision.</p>
<p>Analysez aussi les motifs de refus, les désabonnements et les étapes où les contacts sortent de la séquence. Une hausse du volume avec une baisse des réponses pertinentes indique souvent un problème de ciblage ou de message. Testez une variable à la fois : segment, accroche, preuve, appel à l’action ou délai entre deux étapes.</p>
<h2>Préserver la conformité et l’expérience du prospect</h2>
<p>Chaque workflow doit intégrer l’information des personnes, la possibilité de s’opposer simplement et la suppression des contacts qui ne doivent plus être sollicités. Limitez la pression commerciale, respectez les préférences exprimées et conservez une trace des statuts utiles. La conformité n’est pas une étape finale : elle fait partie de la conception du parcours.</p>
<p>Enfin, prévoyez toujours une sortie immédiate lorsqu’un prospect répond, demande à ne plus être contacté ou entre en conversation avec un commercial. Rien n’abîme plus la confiance qu’une relance automatique envoyée après une réponse humaine.</p>
<h2>Mettre en place un premier workflow réaliste</h2>
<p>Commencez petit : un segment, une séquence courte, un propriétaire clairement identifié et un tableau de bord simple. Validez les messages avec les commerciaux, testez tous les scénarios et contrôlez les données créées dans le CRM. Après un premier cycle, corrigez les points de friction avant d’ajouter de nouveaux embranchements.</p>
<p>Formalisez aussi les responsabilités. Le marketing peut maintenir les segments et les contenus, tandis que l’équipe commerciale définit les critères de reprise et documente le résultat des conversations. Une personne doit contrôler les erreurs techniques, les contacts bloqués et les tâches restées sans propriétaire. Cette gouvernance légère évite qu’un workflow apparemment actif produise des données inutilisables.</p>
<p>Avant chaque évolution, comparez le gain attendu au coût de maintenance. Une règle simple, comprise par tous et vérifiée chaque semaine apporte souvent davantage qu’un scénario très sophistiqué. Conservez une documentation courte avec le déclencheur, les conditions, les actions, les sorties et le responsable. Lorsqu’une offre ou un processus change, vous pouvez ainsi identifier rapidement les automatisations à mettre à jour.</p>
<p>La qualité doit rester observable. Échantillonnez régulièrement les fiches créées, relisez des échanges et demandez aux commerciaux si les tâches générées arrivent au bon moment. Les données quantitatives indiquent où chercher ; les retours de terrain expliquent pourquoi une étape fonctionne ou bloque. Ce dialogue permet d’améliorer le système sans augmenter inutilement la fréquence des sollicitations.</p>
<p>Cette approche progressive produit un système plus robuste qu’une automatisation complexe lancée trop tôt. Si vous souhaitez cadrer le ciblage, les canaux et le passage de relais, découvrez notre accompagnement en <a href="/services/prospection-commerciale-externalisee">prospection commerciale externalisée</a> ou échangez avec notre équipe sur votre dispositif actuel.</p>
`;

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is required.");
}

const sql = postgres(process.env.DATABASE_URL, { max: 1 });

try {
  await sql.begin(async (transaction) => {
    await transaction`ALTER TABLE posts ADD COLUMN IF NOT EXISTS seo_title text`;
    await transaction`ALTER TABLE posts ADD COLUMN IF NOT EXISTS seo_description text`;
    await transaction`ALTER TABLE posts ADD COLUMN IF NOT EXISTS updated_at timestamp DEFAULT now()`;

    for (const [slug, [seoTitle, seoDescription]] of Object.entries(seoBySlug)) {
      await transaction`
        UPDATE posts
        SET seo_title = ${seoTitle},
            seo_description = ${seoDescription},
            updated_at = now()
        WHERE slug = ${slug}
      `;
    }

    await transaction`
      UPDATE posts
      SET content = ${automationArticle},
          excerpt = 'Cinq méthodes concrètes pour automatiser votre prospection sans perdre la qualité du ciblage, du suivi et des échanges commerciaux.',
          updated_at = now()
      WHERE slug = '5-strategies-efficaces-pour-automatiser-vos-workflows-de-prospection'
    `;

    await transaction`
      UPDATE posts
      SET published_at = NULL, updated_at = now()
      WHERE slug IN (
        '5-strategies-efficaces-pour-automatiser-vos-workflows-de-prospection-2',
        'comment-lautomatisation-des-processus-transforme-votre-suivi-client-en-2023',
        'comment-les-nouvelles-technologies-b2b-revolutionnent-le-monde-des-affaires-guide-pratique'
      )
    `;
  });
  console.log("SEO article migration completed.");
} finally {
  await sql.end();
}
