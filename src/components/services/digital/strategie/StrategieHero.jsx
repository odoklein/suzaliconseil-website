"use client";

import { ArrowRight } from "lucide-react";
import { PageHero } from "../../../kit";
import MagneticButton from "../../../ui/MagneticButton";

const stats = [
  { label: "Diagnostic", value: "Offert", desc: "Avant tout engagement" },
  { label: "Méthode", value: "4 étapes", desc: "Du diagnostic au pilotage" },
  { label: "Pôles", value: "2", desc: "Commercial et digital" },
  { label: "Expertise", value: "360°", desc: "Tech, Mkg, Sales" },
];

export default function StrategieHero() {
  return (
    <PageHero
      title="Conseil en Stratégie Digitale & Transformation Numérique"
      intro={
        <p>
          Nous aidons les PME et ETI à <strong>sécuriser leur croissance</strong>{" "}
          par le digital. Audit de performance, roadmap stratégique et pilotage
          ROIste. Ne laissez pas vos concurrents prendre l&apos;avantage
          technologique.
        </p>
      }
      actions={
        <>
          <MagneticButton href="/contact" variant="primary" className="w-full sm:w-auto">
            <span className="inline-flex items-center gap-2 whitespace-nowrap">
              Auditer ma maturité digitale
              <ArrowRight size={18} aria-hidden="true" />
            </span>
          </MagneticButton>
          <MagneticButton href="#methodologie" variant="outline-light" className="w-full sm:w-auto">
            Découvrir notre méthode
          </MagneticButton>
        </>
      }
    >
      {/* The figures, kept quiet: a hairline ledger, not a stat wall. */}
      <dl
        className="hero-focus mt-12 grid max-w-[44rem] grid-cols-2 border-t border-white/12 md:grid-cols-4"
        style={{ "--rise-delay": "620ms" }}
      >
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col border-b border-white/12 py-5 pr-4 md:border-b-0">
            <dt className="order-2 mt-1 text-sm font-semibold text-[#CFDDD7]">{stat.label}</dt>
            <dd className="order-1 font-heading text-2xl font-semibold tabular-nums tracking-[-0.04em] text-[#F7FAF8]">
              {stat.value}
            </dd>
            <dd className="order-3 mt-0.5 font-mono text-[0.72rem] tracking-normal text-[#B9CBC4]">{stat.desc}</dd>
          </div>
        ))}
      </dl>
    </PageHero>
  );
}
