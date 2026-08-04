import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  CircleCheck,
  Plus,
} from "lucide-react";
import Breadcrumbs from "../ui/Breadcrumbs";
import { SITE_URL } from "../../lib/seo";

const SERVICE_VISUALS = {
  "/services/prospection-commerciale-externalisee": {
    src: "/images/equipeprospection.png",
    position: "object-center",
  },
  "/services/fichier-prospection-b2b": {
    src: "/images/services-growth-system.webp",
    position: "object-center",
  },
  "/services/qualification-leads-b2b": {
    src: "/images/hero-office.webp",
    position: "object-center",
  },
  "/services/campagnes-email-sms-b2b": {
    src: "/images/actualites/dashboard-commercial.png",
    position: "object-center",
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
    <main className="overflow-hidden bg-[#F6F7F4] text-[#0D332B]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative pt-24 sm:pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Commercial", href: "/services/commercial" },
              { label: service.h1, href: service.path },
            ]}
          />
        </div>

        <div className="mx-auto mt-6 max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-[28px] bg-[#0D332B] shadow-[0_28px_68px_-44px_rgba(13,51,43,0.7)] lg:grid-cols-[1.03fr_0.97fr]">
            <div className="flex min-h-[520px] flex-col justify-center px-6 py-14 text-white sm:px-10 md:px-14 lg:min-h-[590px] lg:px-16 lg:py-16">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#B0FF5B]">
                {service.eyebrow}
              </p>
              <h1 className="mt-5 max-w-[12ch] font-heading text-4xl font-extrabold leading-[1.03] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                {service.h1}
              </h1>
              <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-white/76 sm:text-lg">
                {service.introduction}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-[#B0FF5B] px-5 py-3 text-sm font-bold text-[#0D332B] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#D2FF9A] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Parler de votre projet
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="/offres"
                  className="inline-flex min-h-12 items-center rounded-full border border-white/30 px-5 py-3 text-sm font-bold text-white transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10 active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Consulter les offres
                </Link>
              </div>
            </div>

            <div className="relative min-h-[300px] overflow-hidden lg:min-h-full">
              <Image
                src={visual.src}
                alt=""
                fill
                priority
                sizes="(max-width: 1023px) 100vw, 50vw"
                className={`object-cover ${visual.position}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D332B]/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0D332B]/28 lg:via-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 lg:px-8">
        <div className="rounded-[24px] border border-[#0D332B]/12 bg-white p-7 shadow-[0_18px_48px_-40px_rgba(13,51,43,0.55)] sm:p-9">
          <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-[#E3FFC4] text-[#0D332B]">
            <CircleCheck size={22} strokeWidth={1.7} aria-hidden="true" />
          </span>
          <p className="mt-7 text-sm font-bold text-[#3F7D33]">Pour qui ?</p>
          <h2 className="mt-3 max-w-[13ch] font-heading text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-4xl">
            Un dispositif adapté à votre organisation
          </h2>
          <ul className="mt-8 space-y-5">
            {service.suitableFor.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] leading-7 text-[#52635F] sm:text-base">
                <CheckCircle2 className="mt-1 shrink-0 text-[#3F7D33]" size={19} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative overflow-hidden rounded-[24px] bg-[#DDECE4] p-7 sm:p-9 lg:p-11">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#B0FF5B]/45 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <p className="text-sm font-bold text-[#3F7D33]">Livrables</p>
            <h2 className="mt-3 max-w-[13ch] font-heading text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-4xl">
              Ce que votre équipe reçoit
            </h2>
            <ul className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-7 text-[#314640] sm:text-base">
                  <CheckCircle2 className="mt-1 shrink-0 text-[#3F7D33]" size={19} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold text-[#3F7D33]">Méthode</p>
          <h2 className="mt-3 max-w-2xl font-heading text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-4xl">
            Un processus clair, du cadrage au passage de relais
          </h2>

          <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {service.process.map(([title, description], index) => (
              <li
                key={title}
                className="group border-[#0D332B]/16 bg-[#F6F7F4] p-6 first:rounded-tl-[20px] last:rounded-br-[20px] md:p-7 lg:border-l lg:bg-transparent lg:first:rounded-none lg:last:rounded-none lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-[13px] bg-[#E3FFC4] text-sm font-extrabold text-[#0D332B]">
                  0{index + 1}
                </span>
                <h3 className="mt-8 text-xl font-extrabold tracking-[-0.02em]">{title}</h3>
                <p className="mt-3 max-w-[29ch] text-sm leading-6 text-[#52635F]">{description}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 max-w-4xl leading-7 text-[#52635F]">
            L’accompagnement est assuré à distance dans toute la France, notamment
            pour des entreprises situées à Paris, Lyon, Bordeaux, Nantes et dans
            les autres bassins économiques, sans prétendre disposer de bureaux locaux.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-heading text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-4xl">
            Questions fréquentes
          </h2>
        </div>
        <div className="border-t border-[#0D332B]/16">
          {service.faqs.map(([question, answer]) => (
            <details key={question} className="group border-b border-[#0D332B]/14 py-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 text-lg font-extrabold leading-snug marker:content-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D332B]">
                <h3>{question}</h3>
                <Plus
                  size={20}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 transition-transform duration-300 group-open:rotate-45"
                />
              </summary>
              <p className="max-w-[66ch] pt-4 leading-7 text-[#52635F]">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-[#EAF2EE] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-4xl">Services associés</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {service.related.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="group flex min-h-20 items-center justify-between gap-5 rounded-[18px] bg-white px-5 py-5 font-bold text-[#173D35] shadow-[0_14px_34px_-30px_rgba(13,51,43,0.58)] transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#E3FFC4] hover:shadow-[0_18px_34px_-28px_rgba(13,51,43,0.68)] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D332B]"
              >
                <span>{label}</span>
                <ArrowUpRight
                  size={20}
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
