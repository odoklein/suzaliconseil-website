"use client";

import React from "react";
import { CommercialHero } from "./CommercialHero";
import { CommercialServicesList } from "./CommercialServicesList";
import { CommercialProcess } from "./CommercialProcess";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CommercialClientPage() {
  return (
    <div className="bg-white min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      <CommercialHero />

      <CommercialServicesList />

      <CommercialProcess />

      {/* Final CTA Section */}
      <section className="relative py-24 bg-[#F8FAFC] border-t border-slate-200 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-lime-50 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 opacity-40 pointer-events-none" />

        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Prêt à faire décoller vos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D332B] to-emerald-600">
              ventes
            </span>{" "}
            ?
          </h2>
          <p className="text-lg text-slate-500 mb-8 max-w-xl mx-auto">
            Parlons de vos objectifs et construisons ensemble votre stratégie de
            croissance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group px-10 py-5 bg-emerald-700 text-white rounded-full font-bold text-lg hover:bg-emerald-900 transition-all duration-300 shadow-lg hover:shadow-emerald-900/25 hover:-translate-y-0.5 flex items-center gap-2"
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
  );
}
