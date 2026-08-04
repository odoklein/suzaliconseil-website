"use client";

import React from "react";
import Image from "next/image";
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
    <div className="min-h-screen bg-[#F6F7F4]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F6F7F4] px-3 pb-6 pt-24 sm:px-4 sm:pb-8 lg:px-5">
        {/* Large Shield Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] scale-[4] pointer-events-none rotate-12">
          <ShieldCheck size={400} />
        </div>

        {/* Geometric Decor */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full -mr-64 -mt-64 border border-emerald-500/20"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#B0FF5B]/5 rounded-full -ml-40 -mb-40 border border-[#B0FF5B]/10"></div>

        <div className="relative z-10 mx-auto grid max-w-[1600px] overflow-hidden rounded-[28px] border border-[#0D332B]/10 bg-[#0D332B] shadow-[0_30px_80px_-48px_rgba(13,51,43,0.8)] lg:min-h-[650px] lg:grid-cols-[1.04fr_0.96fr]">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex min-w-0 flex-col items-start justify-center px-6 py-14 sm:px-10 md:px-14 lg:px-16 lg:py-16 xl:px-20"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#C8FF90]">
              <Lock size={14} className="animate-pulse" /> Partenariat
              Confidentiel
            </div>
            <h1 className="mt-6 max-w-[650px] font-heading text-[2.55rem] font-bold leading-[1.03] tracking-[-0.048em] text-[#F7FAF8] sm:text-5xl md:text-6xl xl:text-[4.25rem]">
              Vente en{" "}
              <span className="text-[#B0FF5B]">
                Marque Blanche
              </span>{" "}
              B2B Expert
            </h1>
            <p className="mb-8 mt-6 max-w-[62ch] text-base font-medium leading-relaxed text-[#DCE8E3] sm:mb-9 sm:text-lg">
              Déléguez votre closing à des professionnels de la vente. Nous
              agissons en votre nom, avec vos outils, pour transformer vos
              opportunités en contrats signés.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href="/contact"
                variant="primary"
                className="w-full rounded-full bg-[#B0FF5B] px-6 py-3.5 text-sm font-bold text-[#0D332B] shadow-[0_18px_36px_-18px_rgba(176,255,91,0.7)] transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#C2FF80] active:translate-y-px sm:w-auto"
              >
                Externaliser mes ventes
              </Button>
            </div>
          </motion.div>
          <div className="relative min-h-[360px] overflow-hidden border-t border-white/10 bg-[#DDE5E1] sm:min-h-[460px] lg:min-h-full lg:border-l lg:border-t-0">
            <Image
              src="/images/equipeprospection.png"
              alt="L'équipe de prospection commerciale de Suzali Conseil dans ses bureaux"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover object-[center_42%]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(7,34,29,0.35)_100%)]" />
          </div>
          <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/10" aria-hidden="true" />
        </div>
      </section>

      {/* Trust & Stats Section */}
      <section className="border-y border-[#0D332B]/10 bg-[#0D332B] py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Closings effectués", value: "1000+" },
              { label: "Taux de transformation", value: "24%" },
              { label: "Chiffre d'affaires généré", value: "50M€+" },
              { label: "Partenaires actifs", value: "45+" },
            ].map((stat, i) => (
              <div key={i} className="space-y-1 border-l border-white/12 px-4 first:border-l-0 sm:px-6">
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
      <section className="relative overflow-hidden bg-[#F6F7F4] py-16 text-[#0D332B] sm:py-20 md:py-24 lg:py-32">
        <div className="absolute left-0 bottom-0 opacity-[0.02] pointer-events-none translate-x-[-20%]">
          <Layers size={600} />
        </div>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <h2 className="mb-6 font-heading text-3xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-4xl md:text-5xl lg:text-6xl sm:mb-8">
                Votre Force de Vente Supplétive
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-[#416058] sm:text-xl">
                Le &quot;White Label Selling&quot; vous permet de scaler vos
                ventes instantanément sans les coûts fixes d&apos;une équipe
                interne.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
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
                    className="group flex gap-3 rounded-2xl border border-[#0D332B]/10 bg-white p-4 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#85C947]/70 hover:shadow-[0_18px_36px_-28px_rgba(13,51,43,0.55)] sm:gap-4 sm:p-5"
                  >
                    <div className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#E1F0D0]">
                      <CheckCircle2
                        size={16}
                        className="text-emerald-700 font-bold"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-sm leading-snug text-[#587069]">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
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
                  whileHover={{ y: -6 }}
                  className={`${box.color} flex aspect-square flex-col items-center justify-center rounded-[22px] border border-emerald-100/10 p-6 text-center shadow-[0_18px_36px_-30px_rgba(13,51,43,0.45)] transition-transform duration-300 sm:p-8 lg:p-10`}
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
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="absolute right-0 top-0 opacity-[0.03] text-emerald-900 pointer-events-none translate-x-1/3">
          <Briefcase size={500} />
        </div>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-12 max-w-3xl sm:mb-16 lg:mb-20">
            <h2 className="mb-4 font-heading text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-[#0D332B] sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
              Nos Solutions de Vente Outsourcée
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-[#416058] sm:text-xl">
              Une approche sur mesure pour s&apos;intégrer parfaitement à vos
              processus de vente actuels.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12 lg:gap-6">
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
                whileHover={{ y: -6 }}
                className={`flex h-full flex-col rounded-[22px] border border-[#0D332B]/10 bg-[#F6F7F4] p-6 transition-[transform,border-color,box-shadow] duration-300 hover:border-[#85C947]/70 hover:shadow-[0_24px_48px_-34px_rgba(13,51,43,0.5)] sm:p-8 lg:p-10 ${i === 0 ? "lg:col-span-7" : i === 1 ? "lg:col-span-5" : "md:col-span-2 lg:col-span-12"}`}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#DCEFC7] text-[#1A6D48] sm:mb-8">
                  <canal.icon size={32} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#0D332B]">
                  {canal.title}
                </h3>
                <p className="mb-8 flex-1 leading-relaxed text-[#416058]">
                  {canal.desc}
                </p>
                <ul className="space-y-3 border-t border-[#0D332B]/10 pt-6">
                  {canal.points.map((p, j) => (
                    <li
                      key={j}
                      className="text-xs text-emerald-800 font-bold flex items-center gap-2"
                    >
                      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#1A6D48]" />
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
          <span className="text-[20vw] font-extrabold uppercase font-heading text-white">
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
