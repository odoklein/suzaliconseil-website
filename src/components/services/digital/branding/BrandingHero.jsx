"use client";

import MagneticButton from "../../../ui/MagneticButton";
import { PageHero } from "../../../kit";

const ATTRIBUTES = ["Élégance", "Cohérence", "Impact", "Intemporalité"];

export default function BrandingHero() {
  return (
    <PageHero
      title="Branding et identité visuelle B2B"
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Digital", href: "/services/digital" },
        { label: "Branding et identité visuelle", href: "/services/digital/branding-identite" },
      ]}
      intro={
        <p>
          Donnez à votre entreprise l&apos;image qu&apos;elle mérite.{" "}
          <strong>Logos, Chartes Graphiques, Plateforme de Marque.</strong> Nous
          sculptons des identités mémorables qui fédèrent et convertissent
          instantanément.
        </p>
      }
      actions={
        <>
          <MagneticButton href="/contact" variant="primary" className="w-full sm:w-auto">
            Auditer mon image de marque
          </MagneticButton>
          <MagneticButton href="#portfolio" variant="outline-light" className="w-full sm:w-auto">
            Explorer nos créations
          </MagneticButton>
        </>
      }
    >
      <ul
        className="hero-focus mt-12 flex max-w-[36rem] flex-wrap gap-x-6 gap-y-2 border-t border-white/12 pt-6 text-[15px] text-[#B9CBC4]"
        style={{ "--rise-delay": "620ms" }}
      >
        {ATTRIBUTES.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </PageHero>
  );
}
