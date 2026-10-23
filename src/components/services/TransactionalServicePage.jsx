import MagneticButton from "../ui/MagneticButton";
import { PageHero, ClosingCta, SectionHead, LedgerList, FaqList } from "../kit";
import CheckRows from "./commercial-b/CheckRows";
import { MethodSection } from "../kit";
import JsonLd from "../seo/JsonLd";
import { faqSchema, serviceSchema } from "../../lib/structured-data";
import ServiceLongForm, { Rich, plain } from "./ServiceLongForm";
import { LONG_FORMS } from "../../content/services/transactional-long-forms";

/*
 * Gabarit des pages services « transactionnelles » (fichier, qualification,
 * campagnes email et SMS) : le contenu vient de lib/transactional-services.js,
 * la mise en page suit la grammaire de l'accueil (DESIGN.md).
 */
const SERVICE_VISUALS = {
  "/services/prospection-commerciale-externalisee": {
    src: "/images/manager-prospection-externalisee.webp",
    alt: "Manager en costume dans un open space équipé de postes de travail",
    position: "center 35%",
  },
  "/services/fichier-prospection-b2b": {
    src: "/images/services-growth-system.webp",
    alt: "Composition architecturale représentant deux expertises qui convergent vers une trajectoire commune",
    position: "center",
  },
  "/services/qualification-leads-b2b": {
    src: "/images/hero-office.webp",
    alt: "Open space lumineux avec postes de travail et vue sur la ville",
    position: "center",
  },
  "/services/campagnes-email-sms-b2b": {
    src: "/images/actualites/dashboard-commercial.png",
    alt: "Dirigeant consultant un tableau de bord commercial avec pipeline et taux de conversion",
    position: "center",
  },
  "/services/marketing-b2b-externalise": {
    src: "/images/services-growth-system.webp",
    alt: "Composition architecturale représentant deux expertises qui convergent vers une trajectoire commune",
    position: "center",
  },
  "/services/agence-generation-de-leads-paris": {
    src: "/images/hero-office.webp",
    alt: "Open space lumineux avec postes de travail et vue sur la ville",
    position: "center",
  },
};

const DEFAULT_PARENT = { label: "Prospection commerciale", href: "/services/commercial" };
const DEFAULT_FOOTNOTE =
  "L’accompagnement est assuré à distance dans toute la France, notamment pour des entreprises situées à Paris, Lyon, Bordeaux, Nantes et dans les autres bassins économiques, sans prétendre disposer de bureaux locaux.";

export default function TransactionalServicePage({ service }) {
  const visual = SERVICE_VISUALS[service.path] ?? SERVICE_VISUALS["/services/prospection-commerciale-externalisee"];

  // Contenu éditorial long de la page (sections, questions en plus, articles liés), s'il existe.
  const extra = LONG_FORMS[service.path];
  const faqs = [...service.faqs, ...(extra?.faqs ?? [])];

  return (
    <main className="overflow-x-clip bg-[#F6F7F4] text-[#0D332B]">
      {/* FAQPage émis ici : FaqList est rendu plus bas avec jsonLd={false}. */}
      <JsonLd
        data={[
          serviceSchema({
            name: service.h1,
            description: service.description,
            path: service.path,
          }),
          faqSchema(
            faqs.map(([question, answer]) => ({ question, answer: plain(answer) })),
            service.path,
          ),
        ]}
      />

      <PageHero
        title={service.h1}
        intro={service.introduction}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          service.parent ?? DEFAULT_PARENT,
          { label: service.h1, href: service.path },
        ]}
        image={visual.src}
        imageAlt={visual.alt}
        imagePosition={visual.position}
        actions={
          <>
            <MagneticButton href="/contact" variant="primary" className="w-full whitespace-nowrap sm:w-auto">
              Parler de votre projet
            </MagneticButton>
            <MagneticButton href="/offres" variant="outline-light" className="w-full whitespace-nowrap sm:w-auto">
              Consulter les offres
            </MagneticButton>
          </>
        }
      />

      {/* Pour qui */}
      <section className="bg-[#F6F7F4] py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <SectionHead
            size="md"
            className="lg:col-span-5"
            title="Un dispositif adapté à votre organisation"
          />
          <CheckRows items={service.suitableFor} className="lg:col-span-7 lg:mt-3" />
        </div>
      </section>

      {/* Livrables */}
      <section className="relative overflow-hidden bg-[#0D332B] py-24 text-[#F7FAF8] md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead tone="ink" size="md" title="Ce que votre équipe reçoit" className="max-w-3xl" />
          <CheckRows tone="ink" columns={2} items={service.deliverables} className="mt-12 md:mt-16" />
        </div>
      </section>

      <MethodSection
        ground="bg-[#FCFDFC]"
        className="bg-[#FCFDFC]"
        title="Un processus clair, du cadrage au passage de relais"
        steps={service.process.map(([title, description]) => ({ title, description }))}
        footnote={service.footnote ?? DEFAULT_FOOTNOTE}
      />

      {extra && (
        <ServiceLongForm
          content={{ sections: extra.sections, related: { articles: extra.articles } }}
        />
      )}

      <FaqList
        jsonLd={false}
        items={faqs.map(([question, answer]) => ({
          question,
          answer: typeof answer === "string" ? answer : <Rich parts={answer} />,
          answerText: plain(answer),
        }))}
      />

      {/* Services associés */}
      <section className="border-t border-[#0D332B]/10 bg-[#FCFDFC] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHead size="md" title="Services associés" />
          <LedgerList
            className="mt-12 md:mt-16"
            items={service.related.map(([href, label]) => ({ href, title: label }))}
          />
        </div>
      </section>

      <ClosingCta
        primary={{ label: "Parler de votre projet", href: "/contact" }}
        secondary={{ label: "Consulter les offres", href: "/offres" }}
      />
    </main>
  );
}
