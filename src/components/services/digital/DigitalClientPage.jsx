"use client";

import Link from "next/link";
import { ArrowRight, Route } from "lucide-react";
import { DigitalBento } from "./DigitalBento";
import { DigitalHero } from "./DigitalHero";
import { DigitalProcess } from "./DigitalProcess";
import { DigitalTechStack } from "./DigitalTechStack";

export function DigitalClientPage() {
  return (
    <main className="min-h-[100dvh] w-full max-w-[100vw] overflow-hidden bg-[#F6F7F4] text-[#0D332B]">
      <DigitalHero />
      <DigitalTechStack />
      <DigitalBento />
      <DigitalProcess />

      <section className="bg-[#F6F7F4] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 rounded-[28px] bg-[#E3FFC4] p-7 shadow-[0_28px_70px_-48px_rgba(13,51,43,0.75)] sm:p-10 lg:grid-cols-[1fr_auto] lg:p-14">
            <div>
              <Route size={25} strokeWidth={1.6} aria-hidden="true" />
              <h2 className="mt-5 max-w-[18ch] text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
                Donnez une direction claire à votre prochain projet digital.
              </h2>
              <p className="mt-4 max-w-[58ch] leading-relaxed text-[#40524E]">
                Découvrez les formats d&apos;accompagnement adaptés à votre objectif,
                à votre équipe et à votre niveau de maturité.
              </p>
            </div>
            <Link
              href="/offres"
              className="group inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#0D332B] px-6 py-3 text-sm font-bold text-[#F8FBF9] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#1A4D43] active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D332B]"
            >
              Voir les offres
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
