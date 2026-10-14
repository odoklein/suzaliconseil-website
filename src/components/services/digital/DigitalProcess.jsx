import { MethodSection } from "../../kit";

const hubSteps = [
  {
    title: "Cadrer",
    description:
      "Nous partons de votre objectif, de vos contraintes et de ce qui existe déjà.",
  },
  {
    title: "Concevoir",
    description:
      "Nous traduisons les priorités en parcours, messages, outils et livrables concrets.",
  },
  {
    title: "Déployer",
    description:
      "Un premier périmètre utile permet d'avancer rapidement et de mesurer ce qui compte.",
  },
  {
    title: "Améliorer",
    description:
      "Nous suivons les retours et les données pour faire évoluer le dispositif avec vous.",
  },
];

/*
 * DigitalProcess - the method chapter for the digital pages (kit
 * MethodSection). Defaults to the digital hub's method; sub-pages pass their
 * own steps, and `aside` renders under the heading.
 */
export function DigitalProcess({
  id,
  title = "Une méthode qui garde le cap.",
  intro = "Un projet digital devient utile lorsqu'il avance avec les équipes, les contraintes opérationnelles et les objectifs de vente.",
  steps = hubSteps,
  aside,
  className = "bg-[#F6F7F4]",
}) {
  const ground = className.match(/bg-\[#[0-9A-Fa-f]{6}\]/)?.[0] ?? "bg-[#F6F7F4]";
  return (
    <MethodSection id={id} title={title} intro={intro} steps={steps} className={className} ground={ground}>
      {aside}
    </MethodSection>
  );
}
