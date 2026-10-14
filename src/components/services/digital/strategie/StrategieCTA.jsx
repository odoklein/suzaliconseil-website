"use client";

import { ClosingCta } from "../../../kit";

export default function StrategieCTA() {
  return (
    <ClosingCta
      title="Ne laissez pas le hasard décider de votre avenir digital"
      intro={
        <>
          Discutez avec un Directeur Conseil senior (pas un commercial) de vos
          enjeux de croissance. Diagnostic flash offert.
        </>
      }
      primary={{ label: "Réserver mon échange stratégique", href: "/contact" }}
      secondary={{ label: "Nous appeler", href: "tel:+33757902479" }}
      slotLabel="Échange stratégique"
      slotMeta="Diagnostic offert"
    />
  );
}
