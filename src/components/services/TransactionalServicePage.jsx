import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "../ui/Breadcrumbs";
import { SITE_URL } from "../../lib/seo";

export default function TransactionalServicePage({ service }) {
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
    <main className="min-h-screen bg-[#F6F7F4] text-[#0D332B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="border-b border-[#0D332B]/10 bg-white pt-28">
        <div className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-24">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Commercial", href: "/services/commercial" },
              { label: service.h1, href: service.path },
            ]}
          />
          <p className="mt-10 text-sm font-bold uppercase tracking-[0.2em] text-[#C84B25]">
            {service.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
            {service.h1}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#416058] md:text-xl">
            {service.introduction}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-[#FF6A3D] px-6 py-3.5 font-bold text-white transition-colors hover:bg-[#D9522D]"
            >
              Parler de votre projet <ArrowRight size={18} />
            </Link>
            <Link
              href="/offres"
              className="inline-flex items-center rounded-xl border border-[#0D332B]/20 bg-white px-6 py-3.5 font-bold hover:border-[#0D332B]"
            >
              Consulter les offres
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <p className="text-sm font-bold text-[#C84B25]">Pour qui ?</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold">
            Un dispositif adapté à votre organisation
          </h2>
          <ul className="mt-7 space-y-4">
            {service.suitableFor.map((item) => (
              <li key={item} className="flex gap-3 leading-7 text-[#416058]">
                <CheckCircle2 className="mt-1 shrink-0 text-emerald-600" size={20} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-[#0D332B] p-8 text-white md:p-10">
          <p className="text-sm font-bold text-[#B0FF5B]">Livrables</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold">
            Ce que votre équipe reçoit
          </h2>
          <ul className="mt-7 space-y-4">
            {service.deliverables.map((item) => (
              <li key={item} className="flex gap-3 leading-7 text-white/80">
                <CheckCircle2 className="mt-1 shrink-0 text-[#B0FF5B]" size={20} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <p className="text-sm font-bold text-[#C84B25]">Méthode</p>
          <h2 className="mt-3 max-w-2xl font-heading text-3xl font-extrabold md:text-4xl">
            Un processus clair, du cadrage au passage de relais
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map(([title, description], index) => (
              <article key={title} className="rounded-2xl border border-[#0D332B]/10 p-6">
                <span className="text-sm font-extrabold text-[#FF6A3D]">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#416058]">{description}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-4xl leading-7 text-[#416058]">
            L’accompagnement est assuré à distance dans toute la France, notamment
            pour des entreprises situées à Paris, Lyon, Bordeaux, Nantes et dans
            les autres bassins économiques, sans prétendre disposer de bureaux locaux.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6 lg:py-24">
        <h2 className="font-heading text-3xl font-extrabold md:text-4xl">
          Questions fréquentes
        </h2>
        <div className="mt-8 divide-y divide-[#0D332B]/10 border-y border-[#0D332B]/10">
          {service.faqs.map(([question, answer]) => (
            <div key={question} className="py-6">
              <h3 className="text-lg font-extrabold">{question}</h3>
              <p className="mt-3 leading-7 text-[#416058]">{answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#0D332B]/10 bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="font-heading text-3xl font-extrabold">Services associés</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.related.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="flex items-center justify-between rounded-xl border border-[#0D332B]/10 p-5 font-bold transition-colors hover:border-[#FF6A3D] hover:text-[#C84B25]"
              >
                {label} <ArrowRight size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
