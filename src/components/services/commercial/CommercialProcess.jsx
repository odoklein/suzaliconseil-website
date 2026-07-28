"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, FileCog, Megaphone, Trophy } from "lucide-react";

export function CommercialProcess() {
  const steps = [
    {
      number: "01",
      title: "Immersion & Ciblage",
      description:
        "Nous analysons votre marché, affinons votre ICP (Ideal Customer Profile) et construisons des fichiers de prospection ultra-qualifiés.",
      icon: Target,
    },
    {
      number: "02",
      title: "Setup Commercial",
      description:
        "Création des scripts de vente, configuration du CRM et mise en place des outils d'automation pour un lancement efficace.",
      icon: FileCog,
    },
    {
      number: "03",
      title: "Chasse & Prospection",
      description:
        "Nos Business Developers contactent vos prospects (Appels, Emails, LinkedIn) pour décrocher des opportunités et qualifier les leads.",
      icon: Megaphone,
    },
    {
      number: "04",
      title: "Closing & Scale",
      description:
        "Transformation des leads en clients signés, analyse des KPI et montée en puissance des campagnes pour maximiser le CA.",
      icon: Trophy,
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[0%] left-[0%] w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Notre Méthode de{" "}
            <span className="text-emerald-400">Prospection B2B</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Une approche structurée et éprouvée pour garantir des résultats
            concrets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              {/* Connector Line (Desktop) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-slate-800 -z-10">
                  <div className="absolute inset-0 bg-emerald-500/30 w-0 group-hover:w-full transition-all duration-700 ease-out origin-left" />
                </div>
              )}

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:bg-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 h-full">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-extrabold text-slate-700 group-hover:text-emerald-500/20 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <step.icon size={24} />
                  </div>
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
