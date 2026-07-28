"use client";

import React from "react";
import { CheckCircle2, Bot } from "lucide-react";
import { motion } from "framer-motion";

export default function DevMethodology() {
  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden text-white">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold text-sm mb-6">
              NOTRE ADN TECHNIQUE
            </div>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-8 leading-tight">
              L&apos;Excellence du Code <br />
              <span className="text-cyan-400">Made in France</span>
            </h2>
            <p className="text-lg text-slate-400 mb-12 leading-relaxed">
              Pas de code &quot;spaghetti&quot;. Nous appliquons les standards
              les plus stricts de l&apos;industrie (Clean Code, TDD, CI/CD) pour
              garantir des produits maintenables et évolutifs.
            </p>

            <ul className="space-y-6">
              {[
                "Architecture Hexagonale / Clean Architecture",
                "Tests Automatisés (Unitaires, E2E) systématiques",
                "Documentation technique exhaustive (Swagger/OpenAPI)",
                "Hébergement Haute Disponibilité (SLA 99.9%)",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2 className="text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-300 text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-white/10 p-12 relative overflow-hidden backdrop-blur-sm shadow-2xl">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <Bot size={200} className="text-cyan-500/20" />
                <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
              </motion.div>

              <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-6xl font-extrabold text-white mb-2"
                >
                  30%
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-xl text-cyan-400 font-medium mb-8"
                >
                  Gain de Productivité Moyen
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-6xl font-extrabold text-white mb-2"
                >
                  -50%
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-xl text-cyan-400 font-medium"
                >
                  Coûts Opérationnels
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
