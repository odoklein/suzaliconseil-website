import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ParallaxImage, Reveal, SectionHead } from "../../kit";

const services = [
  {
    title: "Stratégie digitale",
    description:
      "Prioriser les canaux, les messages et les investissements autour d'objectifs business clairs.",
    href: "/services/digital/strategie-digitale",
  },
  {
    title: "Sites web et e-commerce",
    description:
      "Créer des expériences rapides, accessibles et pensées pour guider chaque visiteur vers l'action.",
    href: "/services/digital/sites-web-ecommerce",
  },
  {
    title: "SEO et acquisition",
    description:
      "Développer une acquisition durable avec le référencement, le contenu et les campagnes ciblées.",
    href: "/services/digital/seo-acquisition",
  },
  {
    title: "Branding et identité",
    description:
      "Clarifier votre positionnement et construire une identité cohérente à chaque point de contact.",
    href: "/services/digital/branding-identite",
  },
  {
    title: "Développement et automatisation",
    description:
      "Connecter vos outils et automatiser les tâches qui ralentissent vos équipes.",
    href: "/services/digital/developpement-automatisation",
  },
];

/*
 * The five expertises as an editorial spread: one image held on the left,
 * the services as ledger rows on the right (each row links to its page).
 */
export function DigitalBento() {
  return (
    <section id="expertises" className="scroll-mt-24 bg-[#FCFDFC] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHead className="lg:col-span-7" title="Les bons leviers, au bon moment." />
          <Reveal
            as="p"
            delay={160}
            className="max-w-[46ch] text-lg leading-relaxed text-[#4E605B] lg:col-span-5 lg:pb-2"
          >
            Chaque mission part de votre réalité commerciale, de vos outils et
            de la prochaine décision à faire avancer.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 md:mt-20 lg:grid-cols-12 lg:gap-16">
          <Reveal variant="focus" className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <ParallaxImage
                src="/images/services-growth-system.webp"
                alt="Une composition représentant un système de croissance connecté"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="aspect-[4/3] rounded-[18px] bg-[#1A4D43] shadow-[0_50px_90px_-40px_rgba(13,51,43,0.35)] lg:aspect-[4/5]"
              />
            </div>
          </Reveal>

          <ul className="border-t border-[#0D332B]/14 lg:col-span-7">
            {services.map((service, i) => (
              <Reveal as="li" key={service.href} delay={Math.min(i, 5) * 60}>
                <Link
                  href={service.href}
                  className="ledger-row group flex items-start justify-between gap-6 border-b border-[#0D332B]/14 px-1 py-7 outline-none focus-visible:ring-2 focus-visible:ring-[#0D332B] md:px-3 md:py-9"
                >
                  <div className="min-w-0">
                    <h3 className="font-heading text-[1.4rem] font-semibold leading-tight tracking-[-0.03em] text-[#0D332B] md:text-[1.75rem]">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-[#4E605B] md:text-base">
                      {service.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={22}
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-[#0D332B] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
