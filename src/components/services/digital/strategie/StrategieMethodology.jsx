"use client";

import React from "react";
import { Compass, BarChart4, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function StrategieMethodology() {
  return (
    <section id="methodologie" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] bg-[#0f172a] p-12 text-white relative overflow-hidden shadow-2xl flex flex-col">
              <div className="absolute top-0 right-0 p-12 opacity-[0.05] pointer-events-none">
                <Compass size={400} />
              </div>

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-10 shadow-lg shadow-blue-900/50"
                >
                  <BarChart4 size={40} className="text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-6">
                  Pilotage par la Data
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-12">
                  L&apos;intuition ne suffit plus. Notre méthodologie{" "}
                  <span className="text-white font-bold">Data-Marketing</span>{" "}
                  garantit que chaque euro investi sert vos objectifs de marge
                  et de volume.
                </p>

                <div className="space-y-6">
                  {[
                    "Alignement Sales/Marketing",
                    "Optimisation Taux Conversion",
                    "Automatisation Processus",
                  ].map((text, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10"
                    >
                      <span className="font-medium text-blue-200">{text}</span>
                      <CheckCircle2 className="text-emerald-400" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-6">
              MÉTHODOLOGIE PROPRIÉTAIRE
            </div>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-slate-900 mb-8 leading-tight">
              De l&apos;Audit à la{" "}
              <span className="text-blue-600">Performance</span>
            </h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Notre approche structure votre transformation en 4 étapes clés,
              garantissant sécurité et rapidité d&apos;exécution.
            </p>

            <div className="space-y-10">
              {[
                {
                  step: "01",
                  title: "Audit de Maturité & Concurrentiel",
                  desc: "Analyse technique, UX, SEO et positionnement marché. Où êtes-vous vs vos concurrents ?",
                },
                {
                  step: "02",
                  title: "Définition du Cap Stratégique",
                  desc: "Choix des leviers (Acquisition, Fidélisation, Branding) et définition des KPIs critiques.",
                },
                {
                  step: "03",
                  title: "Roadmap de Transformation",
                  desc: "Planification des chantiers techniques et marketing. Budgétisation précise et priorisation.",
                },
                {
                  step: "04",
                  title: "Exécution & Accompagnement",
                  desc: "Pilotage des agences ou de vos équipes internes. Reporting mensuel et ajustements.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-blue-100 text-blue-600 font-bold flex items-center justify-center text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
