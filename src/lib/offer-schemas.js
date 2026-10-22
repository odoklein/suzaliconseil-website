import { SITE_URL } from "./seo";
import { GROWTH_STANDARD, VENTE_AU_RDV } from "./offer-terms";

/*
 * JSON-LD Offer des deux offres à prix par rendez-vous. Chaque offre a son
 * propre Offer, avec ses propres composantes de prix (priceSpecification) :
 * on ne fond jamais Growth Standard et Vente au Rendez-Vous en un seul prix.
 *
 * Règle : n'utiliser ces builders QUE sur une page dont le texte visible affiche
 * exactement ces montants (aujourd'hui : /services/prospection-commerciale-externalisee).
 */
const spec = (price, extra) => ({
  "@type": "UnitPriceSpecification",
  price: String(price),
  priceCurrency: "EUR",
  ...extra,
});

export function growthStandardOffer() {
  return {
    "@type": "Offer",
    name: GROWTH_STANDARD.name,
    url: `${SITE_URL}/offres`,
    priceCurrency: "EUR",
    price: String(GROWTH_STANDARD.amounts.monthly),
    description: `Offre ${GROWTH_STANDARD.name} : ${GROWTH_STANDARD.line}.`,
    priceSpecification: [
      spec(GROWTH_STANDARD.amounts.monthly, {
        name: "Abonnement mensuel",
        billingDuration: "P1M",
      }),
      spec(GROWTH_STANDARD.amounts.perRdv, {
        name: "Part variable",
        unitText: GROWTH_STANDARD.perRdvLabel,
      }),
    ],
  };
}

export function venteAuRdvOffer() {
  return {
    "@type": "Offer",
    name: VENTE_AU_RDV.name,
    url: `${SITE_URL}/offres`,
    priceCurrency: "EUR",
    price: String(VENTE_AU_RDV.amounts.setup),
    description: `Offre ${VENTE_AU_RDV.name} : ${VENTE_AU_RDV.line}.`,
    priceSpecification: [
      spec(VENTE_AU_RDV.amounts.setup, { name: "Mise en place (paiement unique)" }),
      spec(VENTE_AU_RDV.amounts.perRdv, { name: "Par rendez-vous", unitText: "par rendez-vous" }),
    ],
  };
}
