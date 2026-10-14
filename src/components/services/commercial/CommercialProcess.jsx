"use client";

import { Marker, MethodRail, SectionHead } from "../../kit";

const steps = [
  {
    title: "Immersion & Ciblage",
    description:
      "Nous analysons votre marché, affinons votre ICP (Ideal Customer Profile) et construisons des fichiers de prospection ultra-qualifiés.",
  },
  {
    title: "Setup Commercial",
    description:
      "Création des scripts de vente, configuration du CRM et mise en place des outils d'automation pour un lancement efficace.",
  },
  {
    title: "Chasse & Prospection",
    description:
      "Nos Business Developers contactent vos prospects (Appels, Emails, LinkedIn) pour décrocher des opportunités et qualifier les leads.",
  },
  {
    title: "Closing & Scale",
    description:
      "Transformation des leads en clients signés, analyse des KPI et montée en puissance des campagnes pour maximiser le CA.",
  },
];

export function CommercialProcess() {
  return (
    <section
      aria-labelledby="commercial-process-heading"
      className="border-t border-[#0D332B]/10 bg-[#F6F7F4] py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="h-fit lg:sticky lg:top-32 lg:col-span-5">
            <SectionHead
              size="md"
              title={
                <span id="commercial-process-heading">
                  Notre <Marker>méthode</Marker> de prospection B2B
                </span>
              }
              intro="Une approche structurée et éprouvée pour garantir des résultats concrets."
            />
          </div>
          <div className="lg:col-span-7">
            <MethodRail steps={steps} ground="bg-[#F6F7F4]" />
          </div>
        </div>
      </div>
    </section>
  );
}
