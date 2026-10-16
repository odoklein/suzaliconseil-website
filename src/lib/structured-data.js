import { SITE_NAME, SITE_URL } from "./seo.js";

/*
 * Données structurées schema.org partagées. Chaque nœud vit dans le HTML
 * serveur (voir components/seo/JsonLd.jsx) et les pages renvoient vers
 * l'organisation par son @id plutôt que de la redéclarer.
 *
 * Toutes les coordonnées ci-dessous sont celles déjà publiées sur le site
 * (mentions légales, page contact, pied de page). Ne rien ajouter qui n'y
 * figure pas.
 */

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const PROFESSIONAL_SERVICE_ID = `${SITE_URL}/#professional-service`;

const LOGO = {
  "@type": "ImageObject",
  url: `${SITE_URL}/icon.svg`,
  width: 192,
  height: 192,
};

const LINKEDIN_URL = "https://www.linkedin.com/company/suzali-conseil";
const TELEPHONE = "+33757902479";
const EMAIL = "contact@suzaliconseil.com";

// Siège social (mentions légales). Aucune agence locale n'est revendiquée.
const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "10 rue de la Paix",
  postalCode: "75002",
  addressLocality: "Paris",
  addressRegion: "Île-de-France",
  addressCountry: "FR",
};

const AREA_SERVED = { "@type": "Country", name: "France" };

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    legalName: SITE_NAME,
    url: SITE_URL,
    logo: LOGO,
    image: LOGO,
    email: EMAIL,
    telephone: TELEPHONE,
    address: ADDRESS,
    foundingDate: "2025",
    founder: {
      "@type": "Person",
      name: "Hichem Hammouche",
      jobTitle: "Président",
      sameAs: ["https://www.linkedin.com/in/hichem-hammouche-ba957238/"],
    },
    sameAs: [LINKEDIN_URL],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: TELEPHONE,
      email: EMAIL,
      contactType: "customer service",
      areaServed: AREA_SERVED,
      availableLanguage: "fr",
    },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "fr-FR",
  };
}

/** Page d'accueil : l'agence décrite comme prestataire de services B2B. */
export function professionalServiceSchema({ description }) {
  return {
    "@type": "ProfessionalService",
    "@id": PROFESSIONAL_SERVICE_ID,
    name: SITE_NAME,
    description,
    url: SITE_URL,
    logo: LOGO,
    image: LOGO,
    email: EMAIL,
    telephone: TELEPHONE,
    address: ADDRESS,
    areaServed: AREA_SERVED,
    sameAs: [LINKEDIN_URL],
    parentOrganization: { "@id": ORGANIZATION_ID },
    // TODO SUZALI: horaires d'ouverture (openingHoursSpecification) et
    // fourchette de prix (priceRange) à fournir si vous souhaitez les afficher.
  };
}

/**
 * Une page service. `name` reprend le H1, `serviceType` l'intention
 * principale (le mot-clé de la page).
 */
export function serviceSchema({ name, description, path, serviceType, offers }) {
  const url = `${SITE_URL}${path}`;
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    serviceType: serviceType || name,
    description,
    url,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: AREA_SERVED,
    availableLanguage: "fr",
    ...(offers ? { offers } : {}),
  };
}

/** FAQPage : à n'émettre que si les mêmes questions sont visibles sur la page. */
export function faqSchema(items, path) {
  return {
    "@type": "FAQPage",
    ...(path ? { "@id": `${SITE_URL}${path}#faq` } : {}),
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

/** Fil d'Ariane : `items` sans l'accueil, qui est ajouté en tête. */
export function breadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.label,
        item: `${SITE_URL}${item.href}`,
      })),
    ],
  };
}

const toIso = (value) => (value ? new Date(value).toISOString() : undefined);

/**
 * Article de blog. L'auteur est l'organisation : les articles ne sont pas
 * signés par une personne (TODO SUZALI si un auteur nominatif doit apparaître).
 */
export function blogPostingSchema({ url, headline, description, image, datePublished, dateModified, section, wordCount }) {
  return {
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    // Google tronque au-delà de 110 caractères.
    headline: headline.length > 110 ? `${headline.slice(0, 107).trimEnd()}…` : headline,
    description,
    image: [image],
    datePublished: toIso(datePublished),
    dateModified: toIso(dateModified || datePublished),
    author: { "@type": "Organization", "@id": ORGANIZATION_ID, name: SITE_NAME, url: SITE_URL },
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "fr-FR",
    ...(section ? { articleSection: section } : {}),
    ...(wordCount ? { wordCount } : {}),
  };
}

/** Un ou plusieurs nœuds -> document JSON-LD autonome. */
export function jsonLdDocument(nodes) {
  const list = (Array.isArray(nodes) ? nodes : [nodes]).filter(Boolean);
  return list.length === 1
    ? { "@context": "https://schema.org", ...list[0] }
    : { "@context": "https://schema.org", "@graph": list };
}
