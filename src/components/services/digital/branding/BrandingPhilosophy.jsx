import { Check } from "lucide-react";
import { Marker, Reveal, SectionHead } from "../../../kit";

const GOALS = [
  "Augmenter la valeur perçue de votre offre",
  "Créer une préférence de marque instantanée",
  "Justifier un pricing premium",
  "Fédérer vos équipes autour d'une culture forte",
];

/* A charte page in miniature, drawn in the house palette: type, swatches, proportions. */
const SWATCHES = [
  { hex: "#0D332B", label: "Ink", dark: true },
  { hex: "#1A4D43", label: "Ink 2", dark: true },
  { hex: "#B0FF5B", label: "Signal" },
  { hex: "#F6F7F4", label: "Paper", ring: true },
];

function CharteSpecimen() {
  return (
    <div
      className="rounded-[22px] bg-[#0D332B] p-6 text-[#F7FAF8] shadow-[0_50px_90px_-40px_rgba(13,51,43,0.45)] sm:p-8 md:p-10"
      aria-hidden="true"
    >
      <div className="flex items-start justify-between gap-6 border-b border-white/12 pb-8">
        <span className="font-heading text-[clamp(4rem,9vw,6.5rem)] font-semibold leading-[0.85] tracking-[-0.05em]">
          Aa
        </span>
        <span className="pt-2 text-right font-mono text-[0.72rem] leading-relaxed tracking-normal text-[#B9CBC4]">
          Sora 600
          <br />
          −0.045em
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2 py-8 sm:gap-3">
        {SWATCHES.map((s) => (
          <div key={s.hex} className="min-w-0">
            <div
              className={`aspect-square rounded-[12px] ${s.ring || s.dark ? "ring-1 ring-white/14" : ""}`}
              style={{ backgroundColor: s.hex }}
            />
            <span className="mt-2 block truncate font-mono text-[0.68rem] tracking-normal text-[#B9CBC4]">
              {s.hex}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-end justify-between gap-6 border-t border-white/12 pt-8">
        <div className="flex h-12 items-end gap-1.5">
          {[48, 32, 20].map((h) => (
            <span key={h} className="w-2.5 rounded-[3px] bg-[#F7FAF8]" style={{ height: h }} />
          ))}
        </div>
        <span className="font-mono text-[0.72rem] tracking-normal text-[#B9CBC4]">12 · 8 · 5</span>
      </div>
    </div>
  );
}

export default function BrandingPhilosophy() {
  return (
    <section className="border-t border-[#0D332B]/10 bg-[#FCFDFC] py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-20 lg:px-8">
        <div className="lg:col-span-6">
          <SectionHead
            size="md"
            title={
              <>
                Le Design au service du <Marker>Business</Marker>
              </>
            }
            intro="Nous ne faisons pas du « joli ». Nous créons des outils visuels performants conçus pour :"
          />

          <ul className="mt-10 border-t border-[#0D332B]/14">
            {GOALS.map((goal, i) => (
              <Reveal
                as="li"
                key={goal}
                delay={i * 60}
                className="flex items-start gap-4 border-b border-[#0D332B]/14 py-5"
              >
                <Check
                  size={20}
                  strokeWidth={2.5}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[#0D332B]"
                />
                <span className="text-lg font-medium leading-snug text-[#0D332B]">{goal}</span>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal variant="focus" delay={120} className="lg:col-span-6">
          <CharteSpecimen />
        </Reveal>
      </div>
    </section>
  );
}
