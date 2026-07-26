"use client";

import React from "react";
import { DigitalHero } from "./DigitalHero";
import { DigitalBento } from "./DigitalBento";
import { DigitalProcess } from "./DigitalProcess";
import { DigitalTechStack } from "./DigitalTechStack";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function DigitalClientPage() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900 overflow-hidden relative">
      {/* Global Background Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10">
        <DigitalHero />

        <DigitalTechStack />

        <DigitalBento />

        <DigitalProcess />

        {/* Final CTA Section */}
        <section className="relative py-24 border-t border-slate-200/60 glass-effect bg-white/60 backdrop-blur-sm overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-50 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 opacity-40 pointer-events-none" />

          <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Prêt à transformer votre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-indigo-600">
                présence
              </span>{" "}
              ?
            </h2>
            <p className="text-lg text-slate-500 mb-8 max-w-xl mx-auto">
              Lancez votre projet digital et obtenez un site performant,
              optimisé et qui convertit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group px-10 py-5 bg-accent-blue text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 flex items-center gap-2"
              >
                Parler à un expert{" "}
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
