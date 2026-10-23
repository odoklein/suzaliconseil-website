"use client";

import { Marker, Reveal, SectionHead } from "../../../kit";

const offers = [
  {
    title: "Sites Vitrine Premium",
    desc: "Design sur-mesure pour sublimer votre image de marque. Animations fluides, navigation intuitive et storytelling impactant.",
    tech: "WordPress / Next.js",
  },
  {
    title: "E-commerce Shopify & B2B",
    desc: "Boutiques performantes optimisées pour la conversion. Paiement sécurisé, gestion des stocks et UX sans friction.",
    tech: "Shopify Plus / Woo",
  },
  {
    title: "Applications Web (SaaS)",
    desc: "Plateformes métiers complexes (Dashboard, CRM, Intranet) avec une interface utilisateur digne des meilleures startups.",
    tech: "React / Node",
  },
  {
    title: "Refonte & Migration",
    desc: "Modernisation de sites existants sans perte de SEO. Migration de CMS et refonte graphique complète.",
    tech: "SEO Preserve",
  },
  {
    title: "SEO Technique & Perf",
    desc: "Optimisation des Core Web Vitals : images, code et hébergement réglés pour un chargement rapide.",
    tech: "Lighthouse",
  },
  {
    title: "Maintenance & Sécurité",
    desc: "Surveillance continue, mises à jour de sécurité et sauvegardes quotidiennes. Dormez sur vos deux oreilles.",
    tech: "Supervision",
  },
];

export default function SitesWebChallenges() {
  return (
    <section className="bg-[#FCFDFC] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHead
            className="lg:col-span-7"
            title={
              <>
                Votre site web est votre meilleur <Marker>commercial</Marker>
              </>
            }
          />
          <Reveal
            as="p"
            delay={160}
            className="max-w-[46ch] text-lg leading-relaxed text-[#4E605B] lg:col-span-5 lg:pb-2"
          >
            Beaucoup de visiteurs quittent un site qui met trop de temps à
            s&apos;afficher.{" "}
            <strong className="font-semibold text-[#0D332B]">
              Ne laissez pas la technique ruiner votre image de marque.
            </strong>
          </Reveal>
        </div>

        <ul id="portfolio" className="mt-14 scroll-mt-28 border-t border-[#0D332B]/14 md:mt-20">
          {offers.map((item, i) => (
            <Reveal
              as="li"
              key={item.title}
              delay={Math.min(i, 5) * 60}
              className="grid gap-3 border-b border-[#0D332B]/14 px-1 py-7 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-baseline md:gap-10 md:px-3 md:py-9"
            >
              <h3 className="font-heading text-[1.35rem] font-semibold leading-tight tracking-[-0.03em] text-[#0D332B] md:text-[1.7rem]">
                {item.title}
              </h3>
              <div>
                <p className="max-w-[56ch] text-[15px] leading-relaxed text-[#4E605B] md:text-base">
                  {item.desc}
                </p>
                <p className="mt-3 font-mono text-[0.75rem] tracking-normal text-[#4E605B]/90">
                  {item.tech}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
