import { Check } from "lucide-react";
import { Reveal, SectionHead } from "../../../kit";

const STANDARDS = [
  "Architecture Hexagonale / Clean Architecture",
  "Tests Automatisés (Unitaires, E2E) systématiques",
  "Documentation technique exhaustive (Swagger/OpenAPI)",
  "Hébergement supervisé, sauvegardes automatiques",
];

const FIGURES = [
  { value: "TDD", label: "Tests écrits avec le code" },
  { value: "CI/CD", label: "Chaque mise en production automatisée" },
];

export default function DevMethodology() {
  return (
    <section className="border-t border-[#0D332B]/10 bg-[#FCFDFC] py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-20 lg:px-8">
        <div className="lg:col-span-7">
          <SectionHead
            size="md"
            title="L'Excellence du Code Made in France"
            intro="Pas de code « spaghetti ». Nous appliquons les standards les plus stricts de l'industrie (Clean Code, TDD, CI/CD) pour garantir des produits maintenables et évolutifs."
          />

          <ul className="mt-10 border-t border-[#0D332B]/14">
            {STANDARDS.map((item, i) => (
              <Reveal
                as="li"
                key={item}
                delay={i * 60}
                className="flex items-start gap-4 border-b border-[#0D332B]/14 py-5"
              >
                <Check
                  size={20}
                  strokeWidth={2.5}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[#0D332B]"
                />
                <span className="text-lg font-medium leading-snug text-[#0D332B]">{item}</span>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* The one ink panel of the page: the two outcomes, white on ink. */}
        <Reveal variant="focus" delay={120} className="lg:col-span-5">
          <dl className="rounded-[22px] bg-[#0D332B] px-7 py-4 text-[#F7FAF8] shadow-[0_50px_90px_-40px_rgba(13,51,43,0.45)] sm:px-10">
            {FIGURES.map((f) => (
              <div
                key={f.label}
                className="flex flex-col-reverse border-b border-white/12 py-8 last:border-b-0"
              >
                <dt className="mt-3 text-lg text-[#B9CBC4]">{f.label}</dt>
                <dd className="font-heading text-[clamp(3rem,5vw,4.2rem)] font-semibold leading-none tracking-[-0.05em] tabular-nums">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
