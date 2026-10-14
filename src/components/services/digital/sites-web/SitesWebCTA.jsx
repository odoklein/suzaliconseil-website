"use client";

import { ClosingCta } from "../../../kit";

export default function SitesWebCTA() {
  return (
    <ClosingCta
      title="Prêt à avoir un site qui vend ?"
      intro="Demandez votre devis gratuit dès aujourd'hui. Réponse sous 24h ouvrées avec une estimation précise."
      primary={{ label: "Lancer mon projet web", href: "/contact" }}
      slotLabel="Devis gratuit"
      slotMeta="Réponse sous 24h"
    />
  );
}
