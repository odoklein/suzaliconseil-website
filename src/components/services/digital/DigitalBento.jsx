import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  Compass,
  Palette,
  Search,
  Workflow,
} from "lucide-react";

const services = [
  {
    title: "Stratégie digitale",
    description:
      "Prioriser les canaux, les messages et les investissements autour d'objectifs business clairs.",
    href: "/services/digital/strategie-digitale",
    icon: Compass,
    className: "md:col-span-7",
    image: "/images/services-growth-system.webp",
    alt: "Une composition représentant un système de croissance connecté",
  },
  {
    title: "Sites web et e-commerce",
    description:
      "Créer des expériences rapides, accessibles et pensées pour guider chaque visiteur vers l'action.",
    href: "/services/digital/sites-web-ecommerce",
    icon: Code2,
    className: "md:col-span-5",
  },
  {
    title: "SEO et acquisition",
    description:
      "Développer une acquisition durable avec le référencement, le contenu et les campagnes ciblées.",
    href: "/services/digital/seo-acquisition",
    icon: Search,
    className: "md:col-span-4",
  },
  {
    title: "Branding et identité",
    description:
      "Clarifier votre positionnement et construire une identité cohérente à chaque point de contact.",
    href: "/services/digital/branding-identite",
    icon: Palette,
    className: "md:col-span-4",
    image: "/projects/zupdeco.jpg",
    alt: "Projet digital réalisé par Suzali Conseil",
  },
  {
    title: "Développement et automatisation",
    description:
      "Connecter vos outils et automatiser les tâches qui ralentissent vos équipes.",
    href: "/services/digital/developpement-automatisation",
    icon: Workflow,
    className: "md:col-span-4",
  },
];

export function DigitalBento() {
  return (
    <section id="expertises" className="scroll-mt-24 bg-[#F6F7F4] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1A4D43] sm:text-sm">
            Nos expertises
          </p>
          <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
            Les bons leviers, au bon moment.
          </h2>
          <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-[#52635F]">
            Chaque mission part de votre réalité commerciale, de vos outils et
            de la prochaine décision à faire avancer.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-12 md:gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.href}
                href={service.href}
                className={`group relative min-h-[300px] overflow-hidden rounded-[28px] border border-[#0D332B]/10 bg-[#FCFDFC] p-7 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#0D332B]/25 hover:shadow-[0_24px_60px_-44px_rgba(13,51,43,0.6)] sm:p-8 ${service.className}`}
              >
                {service.image ? (
                  <>
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 58vw"
                      className="object-cover transition-transform duration-700 ease-[var(--ease-premium)] group-hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,34,29,0.93)_0%,rgba(7,34,29,0.68)_48%,rgba(7,34,29,0.24)_100%)]"
                    />
                  </>
                ) : null}
                <div
                  className={`relative flex h-full min-h-[244px] flex-col ${service.image ? "text-[#F8FBF9]" : "text-[#0D332B]"}`}
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-[14px] ${service.image ? "bg-[#B0FF5B] text-[#0D332B]" : "bg-[#E3FFC4] text-[#0D332B]"}`}
                  >
                    <Icon size={21} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    size={19}
                    aria-hidden="true"
                    className={`absolute right-0 top-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 ${service.image ? "text-[#B0FF5B]" : "text-[#1A4D43]"}`}
                  />
                  <div className="mt-auto max-w-[34rem]">
                    <h3 className="text-2xl font-bold tracking-[-0.025em]">
                      {service.title}
                    </h3>
                    <p
                      className={`mt-3 max-w-[48ch] leading-relaxed ${service.image ? "text-[#E4ECE8]" : "text-[#52635F]"}`}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
