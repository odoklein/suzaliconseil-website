import { db } from "../lib/db";
import Hero from "../components/home/Hero";
import ClientLogos from "../components/home/ClientLogos";
import ServicesPoles from "../components/home/ServicesPoles";
import ProblemSolution from "../components/home/ProblemSolution";
import Method from "../components/home/Method";
import Results from "../components/home/Results";
import ClientsTrust from "../components/home/ClientsTrust";
import Projects from "../components/home/Projects";
import Pricing from "../components/home/Pricing";
import Faq from "../components/home/Faq";
import { createPageMetadata } from "../lib/seo";
import { professionalServiceSchema } from "../lib/structured-data";
import JsonLd from "../components/seo/JsonLd";

// Mot-clé en tête, marque en fin (règle commune à tout le site). À 52
// caractères, « Suzali Conseil » reste avant la coupure du SERP : c'était la
// raison de l'ancien ordre (requête « suzali », position 2,47, 0 clic).
// La description garde la marque en premier mot pour les requêtes de marque.
const DESCRIPTION =
  "Suzali Conseil, agence de prospection B2B : génération de leads, rendez-vous qualifiés avec vos décideurs et acquisition digitale. Réservez un appel.";

export const metadata = createPageMetadata({
  title: "Agence de prospection B2B en France | Suzali Conseil",
  description: DESCRIPTION,
  path: "/",
});

export default async function Home() {
  let projectsData = [];
  try {
    projectsData = await db.query.projects.findMany({
      orderBy: (projects, { desc }) => [desc(projects.createdAt)],
    });
  } catch (error) {
    console.error("Failed to load projects:", error);
  }

  /*
   * Narrative order: hook → proof → offer → problem → method → results →
   * clients → work → price → objections → CTA.
   * Section backgrounds alternate (dark / light / #F8FAFC) so the page keeps
   * a visual rhythm instead of running as one long white block.
   */
  return (
    <>
      <JsonLd data={professionalServiceSchema({ description: DESCRIPTION })} />
      <Hero />
      <ClientLogos />
      <ServicesPoles />
      <ProblemSolution />
      <Method />
      <Results />
      <ClientsTrust />
      <Projects projects={projectsData} />
      <Pricing />
      <Faq />
    </>
  );
}
