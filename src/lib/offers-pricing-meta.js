import { ALL_OFFERS, getOffersByIds } from "./offers-catalog";

/*
 * Pricing metadata, kept separate from the catalogue so the displayed
 * price/billing strings stay the single source of truth for what the user
 * reads, while this file describes how each amount BEHAVES.
 *
 * cadence:
 *   "one-shot" — paid once (setup, projet, volume de contacts, pack SMS)
 *   "monthly"  — récurrent
 *   "usage"    — facturé à l'unité obtenue (RDV, lead)
 *   "quote"    — sur devis, aucun montant ferme
 *
 * usage: an offer can carry BOTH a fixed amount and a usage component
 *        (ex. 599 € setup + 55 € par RDV).
 */
export const OFFER_PRICING = {
  "contact-growth-standard": {
    amount: 1590,
    cadence: "monthly",
    usage: { amount: 150, label: "par RDV validé et honoré" },
  },
  "contact-vente-rdv": {
    amount: 599,
    cadence: "one-shot",
    usage: { amount: 55, label: "par RDV" },
  },
  "contact-qualification-leads": {
    amount: 7,
    cadence: "usage",
    unitLabel: "par lead qualifié",
  },
  "file-custom": { amount: null, cadence: "quote" },
  "file-starter-500": { amount: 290, cadence: "one-shot" },
  "file-pro-2000": { amount: 890, cadence: "one-shot" },
  "sms-starter-1000": { amount: 90, cadence: "one-shot" },
  "sms-standard-2000": { amount: 180, cadence: "one-shot" },
  "sms-pro-5000": { amount: 450, cadence: "one-shot" },
  "email-strategy": { amount: 500, cadence: "one-shot" },
  "full-campaign-pack": { amount: 890, cadence: "monthly" },
  "digital-site-vitrine": { amount: 1200, cadence: "one-shot" },
  "digital-site-avance": { amount: 3500, cadence: "one-shot" },
  "digital-ecommerce": { amount: null, cadence: "quote" },
  "digital-chatbot-ia": { amount: null, cadence: "quote" },
  "digital-migration-crm": { amount: null, cadence: "quote" },
  "digital-landing-page": { amount: 850, cadence: "one-shot" },
  "digital-identite-visuelle": { amount: null, cadence: "quote" },
};

export const getPricing = (offerId) =>
  OFFER_PRICING[offerId] || { amount: null, cadence: "quote" };

/** Short chip shown on each card so the six pricing units stay legible. */
export const CADENCE_LABEL = {
  "one-shot": "Paiement unique",
  monthly: "Abonnement",
  usage: "À l'usage",
  quote: "Sur devis",
};

export const formatEuros = (value) =>
  `${new Intl.NumberFormat("fr-FR").format(value)} €`;

/**
 * Builds an estimate from selected offer ids.
 *
 * Amounts are deliberately NOT summed into one number: a coût par lead and a
 * mensualité are not the same currency of commitment, and collapsing them
 * would produce a figure nobody could act on. The estimate is grouped by
 * cadence instead, which is how the quote itself is structured.
 */
export const buildEstimate = (offerIds) => {
  const offers = getOffersByIds(offerIds);

  const estimate = {
    oneShot: 0,
    monthly: 0,
    usage: [],
    quoteCount: 0,
    offers,
  };

  offers.forEach((offer) => {
    const pricing = getPricing(offer.id);

    if (pricing.cadence === "one-shot" && pricing.amount) {
      estimate.oneShot += pricing.amount;
    } else if (pricing.cadence === "monthly" && pricing.amount) {
      estimate.monthly += pricing.amount;
    } else if (pricing.cadence === "usage" && pricing.amount) {
      estimate.usage.push({
        amount: pricing.amount,
        label: pricing.unitLabel || "à l'unité",
        offerName: offer.name,
      });
    } else if (pricing.cadence === "quote") {
      estimate.quoteCount += 1;
    }

    if (pricing.usage) {
      estimate.usage.push({
        amount: pricing.usage.amount,
        label: pricing.usage.label,
        offerName: offer.name,
      });
    }
  });

  return estimate;
};

/* -------------------------------------------------------------------------- */
/* PARCOURS — three recommended routes assembled from real catalogue offers.  */
/* Prices are read from the catalogue, never restated here.                   */
/* -------------------------------------------------------------------------- */

export const PARCOURS = [
  {
    id: "demarrage",
    name: "Démarrage",
    objective: "Tester une cible",
    tagline:
      "Valider un marché et remplir une première base avant d'engager une campagne complète.",
    offerIds: ["file-starter-500", "contact-qualification-leads"],
    primaryHref: "/services/fichier-prospection-b2b",
  },
  {
    id: "croissance",
    name: "Croissance",
    objective: "Remplir votre agenda",
    tagline:
      "Obtenir des rendez-vous qualifiés avec un volume de contacts suffisant pour tenir la cadence.",
    offerIds: ["contact-vente-rdv", "file-pro-2000"],
    primaryHref: "/services/prise-rendez-vous-b2b",
    highlight: true,
    tag: "Le plus choisi",
  },
  {
    id: "acceleration",
    name: "Accélération",
    objective: "Piloter votre acquisition",
    tagline:
      "Confier l'ensemble du dispositif à une équipe dédiée, du ciblage au reporting.",
    offerIds: ["contact-growth-standard", "full-campaign-pack"],
    primaryHref: "/services/prospection-commerciale-externalisee",
  },
];

/** Resolves a parcours to its offers + entry price, straight from the catalogue. */
export const resolveParcours = (parcours) => {
  const offers = getOffersByIds(parcours.offerIds);
  const entry = offers.find((offer) => getPricing(offer.id).amount);

  return {
    ...parcours,
    offers,
    entryPrice: entry ? entry.price : "Sur devis",
    entryBilling: entry ? entry.billing : "",
  };
};

export const ALL_OFFER_IDS = ALL_OFFERS.map((offer) => offer.id);
