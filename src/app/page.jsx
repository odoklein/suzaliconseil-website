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

// La marque passe en tête du title : la requête « suzali » sortait en position
// 2,47 sur 32 impressions avec 0 clic, le nom de marque arrivant après la
// coupure du SERP. La description mentionne des livrables concrets plutôt que
// « accompagne les entreprises ».
export const metadata = createPageMetadata({
  title: "Suzali Conseil — Agence de prospection B2B en France",
  description: "Suzali Conseil, agence de prospection B2B : leads qualifiés, prise de rendez-vous décideurs et acquisition digitale pour votre croissance en France.",
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
