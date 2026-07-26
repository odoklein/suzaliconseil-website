"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Workflow,
  BrainCircuit,
  Server,
  Database,
  ShieldCheck,
} from "lucide-react";

export default function DevSolutions() {
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
            Arrêtez de perdre du temps sur des <br />
            <span className="text-cyan-600">
              tâches à faible valeur ajoutée
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            Vos équipes passent 30% de leur temps à copier-coller des données ?
            Vos outils ne se parlent pas ?
            <br />
            <strong>
              L&apos;automatisation et l&apos;IA sont vos leviers de rentabilité
              immédiate.
            </strong>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="solutions-tech"
        >
          {[
            {
              title: "Développement SaaS & Web Apps",
              desc: "Création de plateformes robustes (CRM, ERP, Marketplace) parfaitement adaptées à vos règles métier. Scalabilité garantie.",
              icon: Code2,
              tech: "React / Node.js",
            },
            {
              title: "Automatisation (RPA) & Workflows",
              desc: "Connexion de vos outils (Salesforce, HubSpot, Stripe) pour automatiser la facturation, le reporting et l'onboarding client.",
              icon: Workflow,
              tech: "n8n / Make",
            },
            {
              title: "Intelligence Artificielle (GenAI)",
              desc: "Intégration de modèles LLM (GPT-4) pour analyser vos documents, générer du contenu ou assister votre support client.",
              icon: BrainCircuit,
              tech: "OpenAI / LangChain",
            },
            {
              title: "APIs & Microservices",
              desc: "Architecture moderne en microservices pour une agilité maximale. Développement d'API REST/GraphQL documentées.",
              icon: Server,
              tech: "Docker / K8s",
            },
            {
              title: "Scraping & Data Engineering",
              desc: "Extraction de données massives du web pour enrichir votre CRM ou surveiller la concurrence.",
              icon: Database,
              tech: "Python / Selenium",
            },
            {
              title: "Audit Technique & Sécurité",
              desc: "Analyse de code, tests de pénétration et mise en conformité RGPD de vos infrastructures.",
              icon: ShieldCheck,
              tech: "OWASP / ISO 27001",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-30">
                <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-500">
                  {item.tech}
                </span>
              </div>
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-16 h-16 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-8 group-hover:bg-cyan-600 group-hover:text-white transition-colors"
              >
                <item.icon size={32} />
              </motion.div>
              <h3 className="font-bold text-2xl text-slate-900 mb-4">
                {item.title}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-6">{item.desc}</p>
              <div className="w-8 h-1 bg-cyan-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
