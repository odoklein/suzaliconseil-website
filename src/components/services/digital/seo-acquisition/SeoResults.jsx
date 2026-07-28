"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SeoResults() {
  return (
    <section className="py-24 bg-[#0369a1] text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-300 font-bold text-sm mb-4"
          >
            RÉSULTATS PROUVÉS
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-heading font-bold text-4xl sm:text-5xl mb-6"
          >
            Nous ne vendons pas des clics,
            <br />
            nous vendons du{" "}
            <span className="text-sky-400">Chiffre d&apos;Affaires</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              value: "+240%",
              label: "Visibilité Organique",
              sub: "(Moyenne client 12 mois)",
            },
            {
              value: "-35%",
              label: "Coût par Lead (CPL)",
              sub: "(Optimisation Ads)",
            },
            {
              value: "Page 1",
              label: "Positionnement",
              sub: "(Mots-clés stratégiques)",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.2, type: "spring" }}
              className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.6 + i * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                className="text-5xl font-extrabold mb-2 text-sky-400"
              >
                {item.value}
              </motion.div>
              <div className="text-lg text-sky-100">{item.label}</div>
              <div className="text-sm text-slate-400 mt-2">{item.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
