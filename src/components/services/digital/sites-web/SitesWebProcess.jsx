"use client";

import { Reveal } from "../../../kit";
import { DigitalProcess } from "../DigitalProcess";

const steps = [
  {
    title: "UX Workshop & Maquettage",
    description:
      "Définition des user flows et maquettes Figma haute-fidélité validées avec vous.",
  },
  {
    title: "Développement Front & Back",
    description:
      "Intégration pixel-perfect responsive et développement des fonctionnalités.",
  },
  {
    title: "Recette & Optimisation",
    description: "Tests sur différents terminaux, optimisation SEO et temps de chargement.",
  },
  {
    title: "Formation & Mise en Ligne",
    description:
      "Nous vous formons à l'admin (CMS) et assurons un lancement sans bug.",
  },
];

export default function SitesWebProcess() {
  return (
    <DigitalProcess
      title="Design d'Exception, Code Robuste"
      intro="Pas de templates tout faits. Nous créons des sites uniques qui reflètent votre ADN."
      steps={steps}
      aside={
        <Reveal delay={220} className="mt-10 flex items-baseline gap-4 border-t border-[#0D332B]/14 pt-6">
          <span className="font-heading text-3xl font-semibold tabular-nums tracking-[-0.045em] text-[#0D332B]">
            SEO
          </span>
          <span className="text-[15px] text-[#4E605B]">et performance intégrés dès la conception</span>
        </Reveal>
      }
    />
  );
}
