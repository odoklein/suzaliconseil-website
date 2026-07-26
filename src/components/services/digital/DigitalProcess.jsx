"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Audit & Vision",
    description:
      "Nous analysons votre existant et définissons ensemble les objectifs de votre croissance digitale.",
    icon: Search,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Stratégie Sur-Mesure",
    description:
      "Nous concevons une feuille de route unique, adaptée à votre marché et vos ressources.",
    icon: PenTool,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    id: 3,
    title: "Déploiement Agile",
    description:
      "Nos experts lancent les opérations (Dev, Ads, Contenu) avec des itérations rapides.",
    icon: Rocket,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    title: "Performance & Suivi",
    description:
      "Nous analysons les données en temps réel pour optimiser le ROI en continu.",
    icon: LineChart,
    color: "bg-emerald-100 text-emerald-600",
  },
];

export function DigitalProcess() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Notre Méthode <span className="text-blue-600">Reconnue</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Un processus structuré pour transformer vos ambitions en résultats
            concrets.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-12 left-0 w-full h-0.5 bg-slate-100 hidden md:block z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div
                className={`w-24 h-24 rounded-3xl ${step.color} flex items-center justify-center mb-6 shadow-lg shadow-slate-200/50 group-hover:scale-110 transition-transform duration-300 bg-white border-4 border-white relative z-10`}
              >
                <step.icon size={32} />
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow h-full relative z-20">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Étape 0{step.id}
                </span>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3 mt-2">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
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
