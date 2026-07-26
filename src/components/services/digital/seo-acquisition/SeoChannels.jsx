"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  MousePointer2,
  Megaphone,
  BarChart3,
  Globe,
  PieChart,
} from "lucide-react";

export default function SeoChannels() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="canaux">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-slate-900 mb-6">
            Être visible n&apos;est pas une option,
            <br />
            c&apos;est une{" "}
            <span className="text-sky-600">nécessité vitale</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            93% des expériences en ligne commencent par un moteur de recherche.
            <br />
            <strong>
              Si vous n&apos;êtes pas en première page, vous n&apos;existez pas.
            </strong>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            {
              title: "SEO Technique & Sémantique",
              desc: "Audit complet : maillage interne, vitesse de chargement, cocons sémantiques. Nous rendons votre site irrésistible pour Google.",
              icon: Search,
              kpi: "Top 3 Google",
            },
            {
              title: "Google Ads (SEA) Haute Perf",
              desc: "Campagnes Search, Display et Shopping ultra-ciblées. Gestion des enchères et A/B testing quotidien pour réduire votre CPC.",
              icon: MousePointer2,
              kpi: "Leads Immédiats",
            },
            {
              title: "Social Ads (Meta & LinkedIn)",
              desc: "Ciblage démographique et comportemental précis. Retargeting dynamique pour convertir les visiteurs indécis.",
              icon: Megaphone,
              kpi: "Notoriété & Leads",
            },
            {
              title: "Content Marketing 2.0",
              desc: "Stratégie éditoriale qui positionne votre marque en leader d'opinion. Articles de blog, livres blancs, études de cas.",
              icon: BarChart3,
              kpi: "Autorité",
            },
            {
              title: "Netlinking & E-Réputation",
              desc: "Acquisition de backlinks de haute autorité (DA 50+) via des partenariats médias et presse digitale.",
              icon: Globe,
              kpi: "Confiance",
            },
            {
              title: "Conversion (CRO) & Data",
              desc: "Analyse des parcours utilisateurs (Heatmaps, GA4) pour transformer chaque visiteur en prospect qualifié.",
              icon: PieChart,
              kpi: "Conversion Max",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-30">
                <span className="text-xs font-mono bg-sky-50 px-2 py-1 rounded text-sky-800 font-bold">
                  {item.kpi}
                </span>
              </div>
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-8 group-hover:bg-sky-600 group-hover:text-white transition-colors"
              >
                <item.icon size={32} />
              </motion.div>
              <h3 className="font-bold text-2xl text-slate-900 mb-4">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6">{item.desc}</p>
              <div className="w-8 h-1 bg-sky-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
