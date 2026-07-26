import Image from "next/image";
import { db } from "../lib/db";
import Hero from "../components/home/Hero";
import ServicesPoles from "../components/home/ServicesPoles";
import ProblemSolution from "../components/home/ProblemSolution";
import Results from "../components/home/Results";
import Projects from "../components/home/Projects";
import ClientsTrust from "../components/home/ClientsTrust";
import Method from "../components/home/Method";
import { createPageMetadata } from "../lib/seo";

export const metadata = createPageMetadata({
  title: "Agence de prospection B2B en France | Suzali Conseil",
  description: "Suzali Conseil accompagne les entreprises en prospection B2B, génération de leads et solutions digitales pour développer leur croissance en France.",
  path: "/",
});

export default async function Home() {
  const projectsData = await db.query.projects.findMany({
    orderBy: (projects, { desc }) => [desc(projects.createdAt)],
  });

  return (
    <>
      <Hero />
      <ServicesPoles />
      <ProblemSolution />
      <Results />
      <Projects projects={projectsData} />

      {/* Elevated Logo Section */}
      <section className="bg-white pt-16 md:pt-24 pb-0 relative overflow-hidden">
        {/* Background decor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-50 rounded-full blur-[120px] opacity-50 pointer-events-none" />
        <div className="container mx-auto px-4 max-w-7xl flex justify-center relative z-10">
          <Image
            src="/logos/Group-6896.svg"
            alt="Ils nous font confiance"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full max-w-4xl opacity-60 hover:opacity-100 transition-opacity duration-700 h-auto"
          />
        </div>
      </section>

      <ClientsTrust />
      <Method />
    </>
  );
}
