"use client";

import MagneticButton from "../../../ui/MagneticButton";
import { PageHero } from "../../../kit";

const KPIS = [
  { value: "6 leviers", label: "Du SEO technique à la conversion" },
  { value: "SEO + Ads", label: "Organique et payant pilotés ensemble" },
  { value: "Audit", label: "Gratuit, avant tout engagement" },
];

export default function SeoHero() {
  return (
    <PageHero
      title="Agence d'acquisition digitale B2B : SEO et Google Ads"
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Digital", href: "/services/digital" },
        { label: "Acquisition digitale et SEO", href: "/services/digital/seo-acquisition" },
      ]}
      intro={
        <p>
          Fini le trafic inutile. Nous ciblons vos clients idéaux par{" "}
          <strong>SEO technique</strong>, <strong>Google Ads (SEA)</strong> et{" "}
          <strong>Social Ads</strong>. Objectif unique&nbsp;:{" "}
          <strong>Maximiser votre ROI chaque mois.</strong>
        </p>
      }
      actions={
        <>
          <MagneticButton href="/contact" variant="primary" className="w-full sm:w-auto">
            Lancer mon audit d&apos;acquisition
          </MagneticButton>
          <MagneticButton href="#canaux" variant="outline-light" className="w-full sm:w-auto">
            Nos leviers de performance
          </MagneticButton>
        </>
      }
    >
      <dl
        className="hero-focus mt-12 grid max-w-[36rem] grid-cols-3 gap-4 border-t border-white/12 pt-6"
        style={{ "--rise-delay": "620ms" }}
      >
        {KPIS.map((kpi) => (
          <div key={kpi.label} className="flex min-w-0 flex-col-reverse">
            <dt className="mt-2 text-sm text-[#B9CBC4]">{kpi.label}</dt>
            <dd className="font-heading text-[1.6rem] font-semibold leading-none tracking-[-0.04em] text-[#F7FAF8] tabular-nums md:text-[1.9rem]">
              {kpi.value}
            </dd>
          </div>
        ))}
      </dl>
    </PageHero>
  );
}
