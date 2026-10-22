import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "./kit/Reveal";
import Marker from "./kit/Marker";
import SectionHead from "./kit/SectionHead";

const commercialTags = [
  ["Génération de leads B2B", "/services/generation-leads-b2b"],
  ["Téléprospection", "/services/teleprospection-b2b"],
  ["Prise de rendez-vous qualifiés", "/services/prise-rendez-vous-b2b"],
  ["Prospection commerciale", "/services/prospection-commerciale-externalisee"],
  ["Outbound marketing", "/services/outbound-marketing-b2b"],
  ["Cold emailing", "/services/campagnes-email-sms-b2b"],
];

const digitalTags = [
  ["E-commerce", "/services/digital/sites-web-ecommerce"],
  ["Stratégie digitale", "/services/digital/strategie-digitale"],
  ["Google Ads & Social Ads", "/services/digital/seo-acquisition"],
  ["Automatisation", "/services/digital/developpement-automatisation"],
  ["Référencement naturel (SEO)", "/services/digital/seo-acquisition"],
  ["IA Personnalisée", "/services/digital/developpement-automatisation"],
];

const allExpertises = [
  ["Agence de prospection B2B", "/services/commercial"],
  ["Prospection externalisée", "/services/prospection-commerciale-externalisee"],
  ["Génération de leads", "/services/generation-leads-b2b"],
  ["Téléprospection B2B", "/services/teleprospection-b2b"],
  ["Prise de rendez-vous", "/services/prise-rendez-vous-b2b"],
  ["Qualification de leads", "/services/qualification-leads-b2b"],
  ["Fichier de prospection B2B", "/services/fichier-prospection-b2b"],
  ["Campagnes email et SMS", "/services/campagnes-email-sms-b2b"],
  ["Outbound marketing B2B", "/services/outbound-marketing-b2b"],
  ["Force de vente externalisée", "/services/vente-marque-blanche"],
];

function Pole({ tone, title, line, tags, href, cta, className, delay }) {
  const onInk = tone === "ink";
  return (
    <Reveal
      variant="focus"
      delay={delay}
      className={`flex min-h-[560px] flex-col rounded-[22px] p-7 md:p-10 ${
        onInk ? "bg-[#0D332B] text-[#F7FAF8]" : "bg-[#F6F7F4] text-[#0D332B] ring-1 ring-[#0D332B]/12"
      } ${className}`}
    >
      <h3 className="font-heading text-[clamp(3rem,6.4vw,6rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
        {title}
      </h3>
      <p
        className={`mt-5 max-w-[26ch] text-lg leading-snug md:text-2xl ${
          onInk ? "text-[#CFDDD7]" : "text-[#2C4640]"
        }`}
      >
        {line}
      </p>

      <ul className={`mt-auto pt-12 ${onInk ? "border-white/12" : "border-[#0D332B]/14"}`}>
        {tags.map(([label, to]) => (
          <li key={label + to}>
            <Link
              href={to}
              className={`ledger-row group flex items-center justify-between gap-4 border-t px-1 py-3.5 text-base font-semibold tracking-[-0.015em] outline-none md:text-[17px] ${
                onInk
                  ? "on-ink border-white/12 focus-visible:ring-2 focus-visible:ring-[#B0FF5B]"
                  : "border-[#0D332B]/14 focus-visible:ring-2 focus-visible:ring-[#0D332B]"
              }`}
            >
              {label}
              <ArrowUpRight
                size={18}
                aria-hidden="true"
                className={`shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                  onInk ? "text-[#B0FF5B]" : "text-[#0D332B]"
                }`}
              />
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={`group/btn mt-8 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full px-7 py-3 text-sm font-semibold tracking-[-0.01em] transition-colors duration-300 sm:w-auto sm:self-start ${
          onInk
            ? "bg-[#B0FF5B] text-[#0D332B] hover:bg-[#C8FF8D]"
            : "bg-[#0D332B] text-[#F7FAF8] hover:bg-[#1A4D43]"
        }`}
      >
        {cta}
        <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover/btn:translate-x-1" />
      </Link>
    </Reveal>
  );
}

const ServicesPoles = () => {
  return (
    <section className="bg-[#FCFDFC] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHead
            className="lg:col-span-8"
            title={
              <>
                Nos Services B2B pour Générer des Leads <Marker>Qualifiés</Marker>
              </>
            }
          />
          <Reveal
            as="p"
            delay={160}
            className="max-w-[46ch] text-lg leading-relaxed text-[#4E605B] lg:col-span-4 lg:pb-2"
          >
            Prospection commerciale, téléprospection et outbound marketing : des
            solutions complètes pour remplir votre pipeline commercial en
            France.
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-12 lg:gap-5">
          <Pole
            tone="ink"
            title="Commercial"
            line="Une croissance mesurable, du digital à la vente."
            tags={commercialTags}
            href="/services/commercial"
            cta="Nos solutions de prospection B2B"
            className="md:col-span-7"
            delay={0}
          />
          <Pole
            tone="signal"
            title="Digital"
            line="Créez une présence digitale qui attire, engage et convertit."
            tags={digitalTags}
            href="/services/digital"
            cta="Notre agence digitale B2B"
            className="md:col-span-5"
            delay={120}
          />
        </div>

        <div className="mt-20 grid gap-8 border-t border-[#0D332B]/12 pt-10 md:mt-24 lg:grid-cols-12">
          <h3 className="font-heading text-2xl font-semibold tracking-[-0.035em] text-[#0D332B] lg:col-span-4">
            Toutes nos expertises en détail
          </h3>
          <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {allExpertises.map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="ledger-row group flex items-center justify-between gap-4 border-b border-[#0D332B]/12 px-1 py-3.5 text-[15px] font-semibold tracking-[-0.015em] text-[#0D332B] outline-none focus-visible:ring-2 focus-visible:ring-[#0D332B]"
                >
                  {label}
                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="shrink-0 text-[#4E8D38] transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServicesPoles;
