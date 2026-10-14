import MagneticButton from "../ui/MagneticButton";
import { PageHero, ClosingCta, SectionHead, LedgerList, FaqList } from "../kit";
import CheckRows from "./commercial-b/CheckRows";
import { MethodSection } from "../kit";
import { SITE_URL } from "../../lib/seo";

/*
 * Gabarit des pages services « transactionnelles » (fichier, qualification,
 * campagnes email et SMS) : le contenu vient de lib/transactional-services.js,
 * la mise en page suit la grammaire de l'accueil (DESIGN.md).
 */
const SERVICE_VISUALS = {
  "/services/prospection-commerciale-externalisee": {
    src: "/images/manager-prospection-externalisee.webp",
    position: "center 35%",
  },
  "/services/fichier-prospection-b2b": {
    src: "/images/services-growth-system.webp",
    position: "center",
  },
  "/services/qualification-leads-b2b": {
    src: "/images/hero-office.webp",
    position: "center",
  },
  "/services/campagnes-email-sms-b2b": {
    src: "/images/actualites/dashboard-commercial.png",
    position: "center",
  },
};

export default function TransactionalServicePage({ service }) {
  const visual = SERVICE_VISUALS[service.path] ?? SERVICE_VISUALS["/services/prospection-commerciale-externalisee"];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.h1,
    description: service.description,
    url: `${SITE_URL}${service.path}`,
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Suzali Conseil",
    },
    areaServed: { "@type": "Country", name: "France" },
    serviceType: service.h1,
  };

  return (
    <main className="overflow-x-clip bg-[#F6F7F4] text-[#0D332B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* FAQPage émis ici : FaqList est rendu plus bas avec jsonLd={false}. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        title={service.h1}
        intro={service.introduction}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Commercial", href: "/services/commercial" },
          { label: service.h1, href: service.path },
        ]}
        image={visual.src}
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
        footnote="L’accompagnement est assuré à distance dans toute la France, notamment pour des entreprises situées à Paris, Lyon, Bordeaux, Nantes et dans les autres bassins économiques, sans prétendre disposer de bureaux locaux."
      />

      <FaqList
        jsonLd={false}
        items={service.faqs.map(([question, answer]) => ({ question, answer }))}
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
