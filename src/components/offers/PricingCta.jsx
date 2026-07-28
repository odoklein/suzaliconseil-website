import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/* Dark closing band — the previous page simply stopped after the last card. */
const PricingCta = () => {
  return (
    <section className="relative overflow-hidden bg-[#0D332B] py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B0FF5B] opacity-[0.07] blur-[150px]" />
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-[0.02]" />

      <div className="relative mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="font-heading text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] text-white md:text-5xl">
          Un doute sur l&apos;offre <br className="hidden sm:block" />
          la plus adaptée ?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/60 md:text-lg">
          Décrivez votre cible et votre objectif. Nous vous indiquons le
          dispositif pertinent et son budget, sans engagement.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#B0FF5B] px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-[#0D332B] transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_8px_30px_rgba(176,255,91,0.25)] sm:w-auto"
          >
            Parler à un expert
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
          <Link
            href="/services/commercial"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-white transition-all hover:-translate-y-0.5 hover:border-[#B0FF5B] hover:text-[#B0FF5B] sm:w-auto"
          >
            Voir nos services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingCta;
