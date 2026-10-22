"use client";

import { ArrowRight } from "lucide-react";
import { PageHero } from "../../../kit";
import MagneticButton from "../../../ui/MagneticButton";

const proofs = [
  { title: "Core Web Vitals", desc: "Travaillés dès la maquette" },
  { title: "SEO Natif", desc: "Structure Opti." },
  { title: "Mobile First", desc: "UX Responsive" },
];

export default function SitesWebHero() {
  return (
    <PageHero
      title="Création de sites web et e-commerce B2B"
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Digital", href: "/services/digital" },
        { label: "Sites web et e-commerce", href: "/services/digital/sites-web-ecommerce" },
      ]}
      intro={
        <p>
          Des expériences digitales d&apos;exception, conçues pour dominer
          Google et convertir vos visiteurs.
          <strong> Next.js, Shopify, React.</strong> Sans compromis sur le
          design ni la vitesse.
        </p>
      }
      actions={
        <>
          <MagneticButton href="/contact" variant="primary" className="w-full sm:w-auto">
            <span className="inline-flex items-center gap-2 whitespace-nowrap">
              Calculer le prix de mon site
              <ArrowRight size={18} aria-hidden="true" />
            </span>
          </MagneticButton>
          <MagneticButton href="#portfolio" variant="outline-light" className="w-full sm:w-auto">
            Voir nos réalisations
          </MagneticButton>
        </>
      }
    >
      <ul
        className="hero-focus mt-12 grid max-w-[40rem] border-t border-white/12 sm:grid-cols-3"
        style={{ "--rise-delay": "620ms" }}
      >
        {proofs.map((item) => (
          <li key={item.title} className="border-b border-white/12 py-4 pr-4 sm:border-b-0 sm:py-5">
            <span className="block text-base font-semibold tracking-[-0.02em] text-[#F7FAF8]">
              {item.title}
            </span>
            <span className="mt-1 block font-mono text-[0.72rem] tracking-normal text-[#B9CBC4]">
              {item.desc}
            </span>
          </li>
        ))}
      </ul>
    </PageHero>
  );
}
