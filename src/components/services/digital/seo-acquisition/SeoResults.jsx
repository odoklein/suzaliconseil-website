import { Reveal, SectionHead } from "../../../kit";

// What we report on with the client, not outcomes we promise.
const RESULTS = [
  { value: "Positions", label: "Vos mots-clés stratégiques", sub: "(Suivi de positionnement)" },
  { value: "CPL", label: "Coût par lead", sub: "(Campagnes Ads)" },
  { value: "Leads", label: "Demandes entrantes", sub: "(Formulaires et appels)" },
];

/* What we measure, as a hairline ledger of figures, ink on the light ground. */
export default function SeoResults() {
  return (
    <section className="border-t border-[#0D332B]/10 bg-[#FCFDFC] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          size="md"
          className="max-w-4xl"
          title="Nous ne vendons pas des clics, nous vendons du Chiffre d'Affaires"
        />

        <ul className="mt-16 grid border-t border-[#0D332B]/14 md:mt-20 md:grid-cols-3">
          {RESULTS.map((item, i) => (
            <Reveal
              as="li"
              key={item.label}
              delay={i * 70}
              className="border-b border-[#0D332B]/14 py-8 md:border-b-0 md:border-l md:px-8 md:py-10 md:first:border-l-0 md:first:pl-0"
            >
              <span className="block font-heading text-[clamp(2.6rem,4.6vw,3.8rem)] font-semibold leading-none tracking-[-0.05em] text-[#0D332B] tabular-nums">
                {item.value}
              </span>
              <span className="mt-5 block font-heading text-[1.3rem] font-semibold leading-tight tracking-[-0.03em] text-[#0D332B]">
                {item.label}
              </span>
              <span className="mt-2 block font-mono text-[0.75rem] tracking-normal text-[#4E605B]">
                {item.sub}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
