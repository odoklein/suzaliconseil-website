"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  PenTool,
  Target,
  BookOpen,
  LayoutTemplate,
  Layers,
  Eye,
} from "lucide-react";

export default function BrandingServices() {
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
            Une marque forte vaut plus <br />
            qu&apos;un <span className="text-fuchsia-600">millier de mots</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            Dans un monde saturé d&apos;images, l&apos;indifférence est le pire
            des dangers.
            <br />
            <strong>
              Votre identité visuelle est votre premier levier de confiance.
            </strong>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="portfolio"
        >
          {[
            {
              title: "Identité Visuelle & Logo",
              desc: "Création de logotypes vectoriels uniques, pensés pour le digital et le print. Une signature visuelle qui ne ressemble à aucune autre.",
              icon: PenTool,
              concept: "Singularité",
            },
            {
              title: "Plateforme de Marque",
              desc: "Définition de votre ADN : Mission, Vision, Valeurs, Tonalité. Le socle stratégique indispensable avant tout design.",
              icon: Target,
              concept: "Sens",
            },
            {
              title: "Charte Graphique Complète",
              desc: "Règles d'utilisation, palettes couleurs, typographies, iconographie. Le manuel pour garantir la cohérence de votre marque partout.",
              icon: BookOpen,
              concept: "Cohérence",
            },
            {
              title: "Design System UI",
              desc: "Bibliothèque de composants atomiques pour vos produits digitaux (SaaS, App). Scalabilité et maintenabilité maximales.",
              icon: LayoutTemplate,
              concept: "Scalabilité",
            },
            {
              title: "Supports Marketing & Print",
              desc: "Déclinaison de votre identité sur tous les supports : cartes de visite, brochures, kakémonos, présentations investisseurs.",
              icon: Layers,
              concept: "Déclinaison",
            },
            {
              title: "Direction Artistique 360",
              desc: "Supervision globale de votre image. Shootings photo, vidéos, motion design. Nous gardons le cap esthétique.",
              icon: Eye,
              concept: "Vision",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-30">
                <span className="text-xs font-serif italic bg-fuchsia-50 px-3 py-1 rounded-full text-fuchsia-800">
                  {item.concept}
                </span>
              </div>
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 rounded-2xl bg-fuchsia-50 text-fuchsia-600 flex items-center justify-center mb-8 group-hover:bg-fuchsia-600 group-hover:text-white transition-colors"
              >
                <item.icon size={32} />
              </motion.div>
              <h3 className="font-bold text-2xl text-slate-900 mb-4">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6">{item.desc}</p>
              <div className="w-8 h-1 bg-fuchsia-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
