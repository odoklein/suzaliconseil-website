/**
 * Date de dernière modification du contenu des pages statiques, pour <lastmod> dans
 * sitemap.xml (format AAAA-MM-JJ).
 *
 * RÈGLE : cette date est la dernière modification RÉELLE du contenu visible ou des
 * métadonnées de la page (texte, titre, description, titres, prix, maillage, données
 * structurées), à mettre à jour À LA MAIN dans le commit qui change la page. Ce n'est
 * JAMAIS la date du build ni du jour : une date qui change sans changement de contenu
 * est un signal que Google apprend à ignorer pour tout le site.
 *
 * Une page sans entrée ici n'a simplement pas de <lastmod> (jamais une date inventée).
 *
 * Valeurs initiales : le 22/10/2026, B7/B8 a modifié le contenu visible et les métadonnées
 * de CHAQUE page listée (titre et description uniques, fil d'Ariane visible, données
 * structurées dans le HTML ; accueil : nouveau H1). /actualites est à part : sa date suit
 * l'article publié le plus récent (voir sitemap.js).
 */
export const STATIC_LASTMOD = {
  "/": "2026-10-22",
  "/services": "2026-10-23",
  "/services/commercial": "2026-10-23",
  "/services/prospection-commerciale-externalisee": "2026-10-22",
  "/services/generation-leads-b2b": "2026-10-23",
  "/services/agence-generation-de-leads-paris": "2026-10-23",
  "/services/marketing-b2b-externalise": "2026-10-23",
  "/services/teleprospection-b2b": "2026-10-23",
  "/services/prise-rendez-vous-b2b": "2026-10-23",
  "/services/outbound-marketing-b2b": "2026-10-22",
  "/services/vente-marque-blanche": "2026-10-23",
  "/services/fichier-prospection-b2b": "2026-10-23",
  "/services/qualification-leads-b2b": "2026-10-23",
  "/services/campagnes-email-sms-b2b": "2026-10-23",
  "/services/digital": "2026-10-23",
  "/services/digital/strategie-digitale": "2026-10-23",
  "/services/digital/sites-web-ecommerce": "2026-10-23",
  "/services/digital/seo-acquisition": "2026-10-23",
  "/services/digital/branding-identite": "2026-10-23",
  "/services/digital/developpement-automatisation": "2026-10-23",
  "/offres": "2026-10-22",
  "/etudes-de-cas": "2026-10-22",
  "/equipe": "2026-10-22",
  "/actualites": "2026-10-22",
  "/contact": "2026-10-22",
  "/carriers": "2026-10-22",
};

/** Date plus récente entre deux valeurs (chaînes AAAA-MM-JJ ou Date), sous forme de Date. */
export function latestDate(...values) {
  const times = values
    .filter(Boolean)
    .map((value) => new Date(value))
    .filter((date) => !Number.isNaN(date.getTime()));
  return times.length ? new Date(Math.max(...times.map((date) => date.getTime()))) : null;
}
