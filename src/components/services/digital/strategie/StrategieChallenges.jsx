"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Map, Briefcase } from "lucide-react";

export default function StrategieChallenges() {
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
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-slate-900 mb-6">
            Le digital n&apos;est plus une option, <br />
            c&apos;est une{" "}
            <span className="text-blue-600">bataille de vitesse</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            La plupart des entreprises échouent leur transformation car elles
            isolent les leviers (un site par ci, du SEO par là).
            <br />
            <strong>Sans vision unifiée, vous brûlez votre budget.</strong>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Diagnostic & Audit 360",
              desc: "Nous identifions précisément vos freins à la croissance (dette technique, UX défaillante, acquisition coûteuse) pour les éliminer.",
              icon: Search,
              key: "Clarté",
            },
            {
              title: "Feuille de Route Opérationnelle",
              desc: "Pas de slides inutiles. Un plan d'action priorisé (Quick Wins vs Projets de Fond) aligné sur vos objectifs business.",
              icon: Map,
              key: "Direction",
            },
            {
              title: "Direction Digitale Externalisée",
              desc: "Nos experts seniors pilotent votre transformation. Nous devenons votre Chief Digital Officer (CDO) à la demande.",
              icon: Briefcase,
              key: "Pilotage",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 relative group"
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors"
              >
                <item.icon size={32} />
              </motion.div>
              <h3 className="font-bold text-2xl text-slate-900 mb-4">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-8">{item.desc}</p>
              <div className="text-xs font-bold text-blue-600 uppercase tracking-widest border-t border-slate-100 pt-6">
                Objectif : {item.key}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
