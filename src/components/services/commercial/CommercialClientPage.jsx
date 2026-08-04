"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "../../ui/AnimatedSection";
import { CommercialHero } from "./CommercialHero";
import { CommercialProcess } from "./CommercialProcess";
import { CommercialServicesList } from "./CommercialServicesList";

export function CommercialClientPage() {
  return (
    <main className="min-h-[100dvh] w-full max-w-[100vw] overflow-hidden bg-[#F6F7F4] text-[#0D332B] selection:bg-[#D9FFAF] selection:text-[#0D332B]">
      <CommercialHero />
      <CommercialServicesList />
      <CommercialProcess />

      <section
        aria-labelledby="commercial-cta-heading"
        className="bg-[#F6F7F4] px-3 pb-20 pt-10 sm:px-4 lg:px-5 lg:pb-28 lg:pt-14"
      >
        <AnimatedSection className="relative mx-auto min-h-[520px] max-w-[1500px] overflow-hidden rounded-[28px] border border-[#0D332B]/10 bg-[#0D332B] shadow-[0_30px_75px_-50px_rgba(13,51,43,0.85)]">
          <Image
            src="/images/pricing-b2b-strategy.png"
            alt="Une équipe prépare une stratégie de prospection commerciale B2B"
            fill
            sizes="(max-width: 1500px) 100vw, 1500px"
            className="object-cover object-center"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,34,29,0.96)_0%,rgba(7,34,29,0.88)_38%,rgba(7,34,29,0.34)_72%,rgba(7,34,29,0.16)_100%)]"
            aria-hidden="true"
          />

          <div className="relative flex min-h-[520px] items-end px-6 py-12 sm:px-10 sm:py-14 md:items-center md:px-14 lg:px-20">
            <div className="max-w-[640px] text-[#F7FAF8]">
              <h2
                id="commercial-cta-heading"
                className="font-heading text-4xl font-bold leading-[1.03] tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem]"
              >
                Prêt à faire décoller vos ventes ?
              </h2>
              <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-[#DCE8E3]">
                Parlons de vos objectifs et construisons ensemble votre
                stratégie de croissance.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#B0FF5B] px-7 py-3.5 text-sm font-bold text-[#0D332B] transition-[background-color,transform,box-shadow] duration-300 ease-[var(--ease-premium)] hover:-translate-y-0.5 hover:bg-[#C2FF80] hover:shadow-[0_18px_36px_-18px_rgba(176,255,91,0.7)] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B0FF5B]"
              >
                Parler à un expert
                <ArrowRight
                  size={18}
                  strokeWidth={1.9}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <div
            className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/12"
            aria-hidden="true"
          />
        </AnimatedSection>
      </section>
    </main>
  );
}
