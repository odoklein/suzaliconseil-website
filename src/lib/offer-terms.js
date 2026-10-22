import { getOffersByIds } from "./offers-catalog.js";
import { OFFER_PRICING } from "./offers-pricing-meta.js";

/*
 * Les deux offres à prix par rendez-vous du catalogue, lues dans le catalogue
 * (la source de /offres) plutôt que recopiées : une page, un FAQ ou un JSON-LD
 * ne peut plus afficher un prix qui diverge de /offres.
 *
 * Règle éditoriale pour les pages qui utilisent ce module (/offres, page
 * prospection externalisée) : tout prix affiché nomme son offre, et les deux
 * offres ne se mélangent jamais sur une même ligne.
 *
 * Exception décidée par le manager (22/10/2026) : l'accueil, la page prise de RDV
 * et la page téléprospection gardent l'accroche commerciale « 150 € par RDV » telle
 * qu'elle est sur main. Ces trois pages n'utilisent donc PAS ce module et n'ont
 * aucun Offer JSON-LD (un Offer dont le prix ne correspond pas au texte visible
 * est interdit).
 *
 *   Growth Standard       1 590 € par mois + 150 € par RDV validé et honoré
 *   Vente au Rendez-Vous  599 € de mise en place + 55 € par RDV
 *
 * Il n'existe PAS d'offre « 150 € par rendez-vous » seule : ces 150 € sont la
 * part variable de Growth Standard, qui s'ajoute à l'abonnement mensuel.
 */
const [growth, vente] = getOffersByIds(["contact-growth-standard", "contact-vente-rdv"]);
const growthPricing = OFFER_PRICING["contact-growth-standard"];
const ventePricing = OFFER_PRICING["contact-vente-rdv"];

export const GROWTH_STANDARD = {
  id: growth.id,
  name: growth.name,
  href: growth.serviceHref,
  monthly: growth.price, // « 1 590 € »
  perRdv: `${growthPricing.usage.amount} €`, // « 150 € »
  perRdvLabel: growthPricing.usage.label, // « par RDV validé et honoré »
  line: `${growth.price} par mois + ${growthPricing.usage.amount} € ${growthPricing.usage.label}`,
  amounts: { monthly: growthPricing.amount, perRdv: growthPricing.usage.amount },
};

export const VENTE_AU_RDV = {
  id: vente.id,
  name: vente.name,
  href: vente.serviceHref,
  setup: vente.price, // « 599 € »
  perRdv: `${ventePricing.usage.amount} €`, // « 55 € »
  line: `${vente.price} de mise en place + ${ventePricing.usage.amount} € par RDV`,
  amounts: { setup: ventePricing.amount, perRdv: ventePricing.usage.amount },
};
