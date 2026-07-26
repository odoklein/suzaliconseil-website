"use client";

import React from "react";
import { Monitor } from "lucide-react";
import { motion } from "framer-motion";

export default function SitesWebProcess() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 font-bold text-sm mb-2">
              NOTRE PROCESSUS CRÉATIF
            </div>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-slate-900 leading-tight">
              Design d&apos;Exception,
              <br />
              Code Robuste
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Pas de templates tout faits. Nous créons des sites uniques qui
              reflètent votre ADN.
            </p>

            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "UX Workshop & Maquettage",
                  txt: "Définition des user flows et maquettes Figma haute-fidélité validées avec vous.",
                },
                {
                  step: 2,
                  title: "Développement Front & Back",
                  txt: "Intégration pixel-perfect responsive et développement des fonctionnalités.",
                },
                {
                  step: 3,
                  title: "Recette & Optimisation",
                  txt: "Tests sur +50 terminaux, optimisation SEO et temps de chargement.",
                },
                {
                  step: 4,
                  title: "Formation & Mise en Ligne",
                  txt: "Nous vous formons à l'admin (CMS) et assurons un lancement sans bug.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 font-bold flex items-center justify-center text-lg border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-500">{item.txt}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative perspective-1000"
          >
            <motion.div
              whileHover={{ rotateY: 5, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="aspect-[4/5] rounded-[2.5rem] bg-gradient-to-br from-indigo-900 to-slate-900 p-10 relative overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-6"
              >
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-white/20 rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-white/20 rounded w-1/2 animate-pulse"></div>
                  <div className="h-32 bg-white/10 rounded w-full mt-4 border border-white/5 flex items-center justify-center">
                    <Monitor size={48} className="text-white/30" />
                  </div>
                </div>
              </motion.div>

              <div className="absolute bottom-10 left-10 right-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                  className="text-4xl font-black text-white mb-2"
                >
                  100%
                </motion.div>
                <div className="text-indigo-300 font-medium">
                  Score SEO & Performance
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
