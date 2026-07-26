"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  ShoppingCart,
  Layers,
  Layout,
  Rocket,
  ShieldCheck,
} from "lucide-react";

export default function SitesWebChallenges() {
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
            Votre site web est votre <br />
            <span className="text-indigo-600">meilleur commercial</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            53% des visiteurs quittent un site qui met plus de 3 secondes à
            charger.
            <br />
            <strong>
              Ne laissez pas la technique ruiner votre image de marque.
            </strong>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
          id="portfolio"
        >
          {[
            {
              title: "Sites Vitrine Premium",
              desc: "Design sur-mesure pour sublimer votre image de marque. Animations fluides, navigation intuitive et storytelling impactant.",
              icon: Monitor,
              tech: "WordPress / Next.js",
            },
            {
              title: "E-commerce Shopify & B2B",
              desc: "Boutiques performantes optimisées pour la conversion. Paiement sécurisé, gestion des stocks et UX sans friction.",
              icon: ShoppingCart,
              tech: "Shopify Plus / Woo",
            },
            {
              title: "Applications Web (SaaS)",
              desc: "Plateformes métiers complexes (Dashboard, CRM, Intranet) avec une interface utilisateur digne des meilleures startups.",
              icon: Layers,
              tech: "React / Node",
            },
            {
              title: "Refonte & Migration",
              desc: "Modernisation de sites existants sans perte de SEO. Migration de CMS et refonte graphique complète.",
              icon: Layout,
              tech: "SEO Preserve",
            },
            {
              title: "SEO Technique & Perf",
              desc: "Optimisation Core Web Vitals pour plaire à Google. Temps de chargement < 1s garanti.",
              icon: Rocket,
              tech: "LightHouse 100",
            },
            {
              title: "Maintenance & Sécurité",
              desc: "Surveillance 24/7, mises à jour de sécurité et sauvegardes quotidiennes. Dormez sur vos deux oreilles.",
              icon: ShieldCheck,
              tech: "SLA 99.9%",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-30">
                <span className="text-xs font-mono bg-indigo-50 px-2 py-1 rounded text-indigo-800 font-bold">
                  {item.tech}
                </span>
              </div>
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors"
              >
                <item.icon size={32} />
              </motion.div>
              <h3 className="font-bold text-2xl text-slate-900 mb-4">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6">{item.desc}</p>
              <div className="w-8 h-1 bg-indigo-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
