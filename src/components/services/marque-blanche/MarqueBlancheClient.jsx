"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Briefcase,
  TrendingUp,
  Handshake,
  CheckCircle2,
  UserPlus,
  BarChart3,
  Layers,
  Lock,
} from "lucide-react";
import Button from "../../ui/Button";

export default function MarqueBlancheClient() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0D332B] text-white py-24 md:py-40 overflow-hidden">
        {/* Large Shield Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] scale-[4] pointer-events-none rotate-12">
          <ShieldCheck size={400} />
        </div>

        {/* Geometric Decor */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full -mr-64 -mt-64 border border-emerald-500/20"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#B0FF5B]/5 rounded-full -ml-40 -mb-40 border border-[#B0FF5B]/10"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-[#B0FF5B] text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <Lock size={14} className="animate-pulse" /> Partenariat
              Confidentiel
            </div>
            <h1 className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl mb-8 leading-[1.05] tracking-tight">
              Vente en{" "}
              <span className="text-[#B0FF5B] drop-shadow-[0_0_15px_rgba(176,255,91,0.3)]">
                Marque Blanche
              </span>{" "}
              B2B Expert
            </h1>
            <p className="text-xl md:text-2xl text-emerald-50/90 mb-12 leading-relaxed max-w-3xl font-light">
              Déléguez votre closing à des professionnels de la vente. Nous
              agissons en votre nom, avec vos outils, pour transformer vos
              opportunités en contrats signés.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                href="/contact"
                variant="primary"
                className="bg-[#B0FF5B] hover:bg-white text-[#0D332B] text-lg px-12 py-5 rounded-2xl shadow-2xl"
              >
                Externaliser mes ventes
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Stats Section */}
      <section className="py-12 bg-[#0A2923] border-y border-emerald-900/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Closings effectués", value: "1000+" },
              { label: "Taux de transformation", value: "24%" },
              { label: "Chiffre d'affaires généré", value: "50M€+" },
              { label: "Partenaires actifs", value: "45+" },
            ].map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="text-[#B0FF5B] text-3xl md:text-4xl font-bold font-heading">
                  {stat.value}
                </div>
                <div className="text-emerald-50/50 text-sm font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden text-[#0D332B]">
        <div className="absolute left-0 bottom-0 opacity-[0.02] pointer-events-none translate-x-[-20%]">
          <Layers size={600} />
        </div>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <h2 className="font-heading font-bold text-4xl md:text-6xl mb-8 leading-tight">
                Votre Force de Vente Supplétive
              </h2>
              <p className="text-xl text-slate-500 mb-8 font-light leading-relaxed">
                Le &quot;White Label Selling&quot; vous permet de scaler vos
                ventes instantanément sans les coûts fixes d&apos;une équipe
                interne.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Transparence Totale",
                    desc: "Nous utilisons vos adresses emails, votre CRM et votre identité de marque.",
                  },
                  {
                    title: "Experts en Closing",
                    desc: "Nos commerciaux sont formés aux cycles de vente longs et complexes.",
                  },
                  {
                    title: "Scalabilité Immédiate",
                    desc: "Augmentez ou réduisez votre force de frappe selon votre saisonnalité.",
                  },
                  {
                    title: "Contrôle Qualité",
                    desc: "Enregistrements d'appels et reporting hebdomadaire détaillé.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                      <CheckCircle2
                        size={16}
                        className="text-emerald-700 font-bold"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="relative grid grid-cols-2 gap-6">
              {[
                {
                  label: "Invisible",
                  icon: Lock,
                  color: "bg-emerald-50 text-emerald-700",
                },
                {
                  label: "Performance",
                  icon: TrendingUp,
                  color:
                    "bg-emerald-600 text-white shadow-2xl shadow-emerald-500/30",
                },
                {
                  label: "Closing",
                  icon: Handshake,
                  color: "bg-[#0D332B] text-white",
                },
                {
                  label: "Reporting",
                  icon: BarChart3,
                  color: "bg-emerald-50 text-emerald-700",
                },
              ].map((box, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className={`${box.color} p-10 rounded-[2.5rem] flex flex-col items-center justify-center text-center aspect-square border border-emerald-100/10`}
                >
                  <box.icon size={48} strokeWidth={1.5} className="mb-6" />
                  <h4 className="font-bold text-xl uppercase tracking-widest">
                    {box.label}
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-[0.03] text-emerald-900 pointer-events-none translate-x-1/3">
          <Briefcase size={500} />
        </div>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="font-heading font-bold text-4xl md:text-6xl text-[#0D332B] mb-6">
              Nos Solutions de Vente Outsourcée
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light">
              Une approche sur mesure pour s&apos;intégrer parfaitement à vos
              processus de vente actuels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Closing Externalisé",
                icon: Handshake,
                desc: "Confiez-nous vos leads qualifiés. Nous gérons la négociation et le closing final pour transformer l&apos;opportunité en vente.",
                points: [
                  "Négociation expert B2B",
                  "Gestion des contrats",
                  "Closing haute performance",
                ],
              },
              {
                title: "Account Management",
                icon: Users,
                desc: "Fidélisez et développez votre portefeuille clients existant grâce à une gestion de compte proactive et orientée upselling.",
                points: [
                  "Suivi client régulier",
                  "Détection d&apos;opportunités",
                  "Réduction du churn",
                ],
              },
              {
                title: "Débordement Commercial",
                icon: UserPlus,
                desc: "Besoin de renfort ponctuel ? Nous absorbons vos pics d&apos;activité pour ne laisser passer aucune opportunité.",
                points: [
                  "Activation sous 48h",
                  "Formation accélérée",
                  "Flexibilité contractuelle",
                ],
              },
            ].map((canal, i) => (
              <motion.div
                key={i}
                whileHover={{
                  shadow: "0 25px 50px -12px rgba(13, 51, 43, 0.15)",
                }}
                className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-200 shadow-sm transition-all flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8">
                  <canal.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#0D332B]">
                  {canal.title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed flex-1">
                  {canal.desc}
                </p>
                <ul className="space-y-3 pt-6 border-t border-slate-100">
                  {canal.points.map((p, j) => (
                    <li
                      key={j}
                      className="text-xs text-emerald-800 font-bold flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B0FF5B]" />{" "}
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-40 bg-[#0D332B] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] whitespace-nowrap select-none pointer-events-none">
          <span className="text-[20vw] font-black uppercase font-heading text-white">
            PARTNERS
          </span>
        </div>

        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-4xl md:text-7xl text-white mb-10 leading-tight">
              Scalez votre vente <br /> sans limites.
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
              <Button
                href="/contact"
                variant="primary"
                className="bg-[#B0FF5B] hover:bg-white text-[#0D332B] px-12 py-6 text-xl rounded-2xl shadow-2xl"
              >
                Démarrer mon partenariat
              </Button>
            </div>
            <p className="text-emerald-50/50 mt-10 font-medium tracking-wide">
              Confidentialité garantie • Experts diplômés • Intégration CRM
              offerte
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
