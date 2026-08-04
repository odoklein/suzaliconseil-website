"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Rocket,
  Target,
  Mail,
  Linkedin,
  MousePointer2,
  BarChart,
  MessagesSquare,
  CheckCircle2,
  Zap,
  Globe,
  PieChart,
  Network,
  TrendingUp,
  Users,
  Award,
  Shield,
  Clock,
  Sparkles,
} from "lucide-react";
import Button from "../../ui/Button";

export default function OutboundClient() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
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

  const scaleVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-[#F6F7F4]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F6F7F4] px-3 pb-6 pt-24 sm:px-4 sm:pb-8 lg:px-5">
        {/* Watermark Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] scale-[2.5] sm:scale-[3] md:scale-[3.5] pointer-events-none rotate-12">
          <Rocket size={400} />
        </div>

        {/* Enhanced Geometric Decor */}
        <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-emerald-500/10 rounded-full -mr-32 sm:-mr-48 md:-mr-64 -mt-32 sm:-mt-48 md:-mt-64 border border-emerald-500/20"></div>
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[350px] md:w-[400px] h-[300px] sm:h-[350px] md:h-[400px] bg-[#B0FF5B]/5 rounded-full -ml-24 sm:-ml-32 md:-ml-48 -mb-24 sm:-mb-32 md:-mb-48 border border-[#B0FF5B]/10"></div>

        <div className="relative z-10 mx-auto grid max-w-[1600px] overflow-hidden rounded-[28px] border border-[#0D332B]/10 bg-[#0D332B] shadow-[0_30px_80px_-48px_rgba(13,51,43,0.8)] lg:min-h-[650px] lg:grid-cols-[1.06fr_0.94fr]">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex min-w-0 flex-col items-start justify-center px-6 py-14 sm:px-10 md:px-14 lg:px-16 lg:py-16 xl:px-20"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#C8FF90] sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.16em]"
            >
              <Zap size={12} className="sm:w-3.5 sm:h-3.5 animate-pulse" />
              <span className="hidden xs:inline">Stratégie de </span>Croissance
              Proactive
            </motion.div>

            <h1 className="mt-6 max-w-[670px] font-heading text-[2.55rem] font-bold leading-[1.03] tracking-[-0.048em] text-[#F7FAF8] sm:text-5xl md:text-6xl xl:text-[4.25rem]">
              Agence{" "}
              <span className="text-[#B0FF5B]">
                Outbound Marketing
              </span>{" "}
              B2B & Prospection Digitale
            </h1>

            <p className="mb-8 mt-6 max-w-[62ch] text-base font-medium leading-relaxed text-[#DCE8E3] sm:mb-9 sm:text-lg">
              Passez de l&apos;attente passive à la{" "}
              <strong className="text-[#B0FF5B]">conquête systématique</strong>.
              Nous combinons <strong>Sales Intelligence</strong>, automatisation
              marketing avancée, <strong>Account-Based Marketing (ABM)</strong>{" "}
              et copywriting persuasif pour remplir votre pipeline de{" "}
              <strong>leads B2B qualifiés</strong> et maximiser votre ROI
              commercial.
            </p>

            <div className="mb-8 flex flex-col gap-3 sm:mb-9 sm:flex-row sm:items-center">
              <Button
                href="/contact"
                variant="primary"
                className="w-full rounded-full bg-[#B0FF5B] px-6 py-3.5 text-sm font-bold text-[#0D332B] shadow-[0_18px_36px_-18px_rgba(176,255,91,0.7)] transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#C2FF80] active:translate-y-px sm:w-auto"
              >
                Lancer ma stratégie outbound
              </Button>
              <Button
                href="#canaux"
                variant="outline-light"
                className="w-full rounded-full border border-white/25 bg-white/8 px-6 py-3.5 text-sm font-bold text-white transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/14 active:translate-y-px sm:w-auto"
              >
                Explorer nos leviers
              </Button>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-medium text-[#DCE8E3]/75 sm:text-sm"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#B0FF5B]" />
                <span>Certifié RGPD</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#B0FF5B]" />
                <span>+200 clients satisfaits</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#B0FF5B]" />
                <span>Résultats sous 90 jours</span>
              </div>
            </motion.div>
            </motion.div>
          <div className="relative min-h-[360px] overflow-hidden border-t border-white/10 bg-[#DDE5E1] sm:min-h-[460px] lg:min-h-full lg:border-l lg:border-t-0">
            <Image
              src="/images/equipeprospection.png"
              alt="L'équipe de prospection commerciale de Suzali Conseil dans ses bureaux"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover object-[center_42%]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(7,34,29,0.35)_100%)]" />
          </div>
          <div className="pointer-events-none absolute inset-[1px] rounded-[27px] border border-white/10" aria-hidden="true" />
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="border-y border-[#0D332B]/10 bg-[#0D332B] py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center"
          >
            {[
              {
                label: "Pipeline généré clients",
                value: "30M€+",
                icon: TrendingUp,
              },
              { label: "Taux de réponse moyen", value: "18%", icon: BarChart },
              { label: "Emails prospection envoyés", value: "1M+", icon: Mail },
              {
                label: "Entreprises B2B accompagnées",
                value: "200+",
                icon: Users,
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="space-y-2 border-l border-white/12 px-4 first:border-l-0 sm:px-6"
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#B0FF5B] mx-auto mb-2" />
                <div className="text-[#B0FF5B] text-2xl sm:text-3xl md:text-4xl font-bold font-heading">
                  {stat.value}
                </div>
                <div className="text-emerald-50/50 text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-wide px-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section - Enhanced */}
      <section className="relative overflow-hidden bg-[#F6F7F4] py-16 sm:py-20 md:py-24 lg:py-32">
        {/* Background Watermark */}
        <div className="absolute right-0 bottom-0 opacity-[0.02] text-[#0D332B] pointer-events-none translate-x-1/4 translate-y-1/4 hidden md:block">
          <BarChart size={600} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.div
                variants={scaleVariants}
                className="mb-4 inline-block sm:mb-6"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-[#E1F0D0] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#24573F]">
                  <Target className="w-4 h-4" />
                  Méthodologie Éprouvée
                </span>
              </motion.div>

              <h2 className="mb-6 font-heading text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-[#0D332B] sm:text-4xl md:text-5xl lg:text-6xl sm:mb-8">
                L&apos;Outbound Marketing B2B : La Prospection Commerciale
                Intelligente
              </h2>

              <p className="mb-6 text-lg leading-relaxed text-[#416058] sm:mb-8 sm:text-xl">
                Le <strong>marketing entrant (inbound)</strong> est saturé. Pour
                dominer votre marché, vous devez maîtriser l&apos;
                <strong>outbound marketing</strong> : ciblage précis via{" "}
                <strong>Account-Based Marketing (ABM)</strong>, prospection
                multi-canal synchronisée et messages hyper-personnalisés grâce à
                la <strong>Sales Intelligence</strong>.
              </p>

              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {[
                  {
                    title: "Ciblage Laser B2B",
                    desc: "Sourcing décideurs par secteur d'activité, taille entreprise, technologie utilisée et signaux d'achat.",
                    icon: Target,
                  },
                  {
                    title: "Personnalisation IA",
                    desc: "Variables dynamiques et copywriting adaptatif pour chaque prospect via Sales Intelligence avancée.",
                    icon: Sparkles,
                  },
                  {
                    title: "Délivrabilité Premium",
                    desc: "Warm-up domaines, rotation IP, monitoring SMTP quotidien pour maximiser l'inbox placement.",
                    icon: Shield,
                  },
                  {
                    title: "Analytics Temps Réel",
                    desc: "KPIs transparents : taux ouverture, clics, réponses positives et opportunités commerciales générées.",
                    icon: BarChart,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="group flex gap-3 rounded-2xl border border-[#0D332B]/10 bg-white p-4 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#85C947]/70 hover:shadow-[0_18px_36px_-28px_rgba(13,51,43,0.55)] sm:gap-4 sm:p-5"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#EAF2E5] transition-colors duration-300 group-hover:bg-[#D9EDC5] sm:h-12 sm:w-12">
                      <item.icon size={20} className="text-[#1A6D48]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0D332B] mb-1 text-sm sm:text-base">
                        {item.title}
                      </h4>
                      <p className="text-xs leading-snug text-[#587069] sm:text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="relative grid grid-cols-2 gap-3 sm:gap-4"
            >
              {[
                {
                  label: "Scalable",
                  icon: Globe,
                  color: "bg-emerald-50 text-emerald-700",
                  desc: "Croissance illimitée",
                },
                {
                  label: "Précis",
                  icon: Target,
                  color:
                    "bg-emerald-600 text-white shadow-2xl shadow-emerald-500/30",
                  desc: "Ciblage ABM",
                },
                {
                  label: "Direct",
                  icon: MessagesSquare,
                  color: "bg-[#0D332B] text-white",
                  desc: "Contact décideurs",
                },
                {
                  label: "ROI-Focused",
                  icon: PieChart,
                  color: "bg-emerald-50 text-emerald-700",
                  desc: "Performance mesurée",
                },
              ].map((box, i) => (
                <motion.div
                  key={i}
                  variants={scaleVariants}
                  whileHover={{ y: -6 }}
                  className={`${box.color} flex aspect-square flex-col items-center justify-center rounded-[22px] border border-emerald-100/10 p-6 text-center shadow-[0_18px_36px_-30px_rgba(13,51,43,0.45)] transition-transform duration-300 sm:p-8 lg:p-10`}
                >
                  <box.icon
                    size={40}
                    strokeWidth={1.5}
                    className="mb-3 sm:mb-6 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                  />
                  <h4 className="font-bold text-base sm:text-lg lg:text-xl uppercase tracking-widest mb-1 sm:mb-2">
                    {box.label}
                  </h4>
                  <p className="text-[10px] sm:text-xs opacity-70 font-medium">
                    {box.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Channels Section - Enhanced */}
      <section id="canaux" className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-32">
        {/* Network Watermark */}
        <div className="absolute left-0 top-0 opacity-[0.03] text-emerald-900 pointer-events-none -translate-x-1/3 hidden lg:block">
          <Network size={500} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="mb-12 max-w-3xl sm:mb-16 lg:mb-20"
          >
            <motion.div
              variants={scaleVariants}
              className="inline-block mb-4 sm:mb-6"
            >
                <span className="inline-flex items-center gap-2 rounded-full bg-[#EAF2E5] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#24573F]">
                <Rocket className="w-4 h-4" />
                Leviers d&apos;Acquisition
              </span>
            </motion.div>

            <h2 className="mb-4 font-heading text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-[#0D332B] sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
              Nos Canaux d&apos;Activation Outbound Marketing
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-[#416058] sm:text-lg md:text-xl">
              Nous déployons les meilleurs leviers de{" "}
              <strong>Growth Hacking B2B</strong> et de{" "}
              <strong>prospection digitale</strong> pour créer un système
              d&apos;acquisition client prévisible et scalable.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6"
          >
            {[
              {
                title: "Cold Emailing 2.0",
                subtitle: "Prospection Email Automatisée",
                icon: Mail,
                desc: "Dépassez la simple prospection par email. Nous créons des campagnes d'emailing de masse personnalisées avec un copywriting persuasif qui génère des réponses et des rendez-vous qualifiés.",
                points: [
                  "Spintax & Variables dynamiques personnalisées",
                  "Séquences de relances automatiques intelligentes",
                  "Tracking premium et optimisation anti-spam",
                  "A/B testing objets et contenus",
                ],
                metrics: { open: "35-45%", response: "5-8%" },
              },
              {
                title: "LinkedIn Automation",
                subtitle: "Social Selling B2B",
                icon: Linkedin,
                desc: "Transformez LinkedIn en machine de prospection commerciale. Séquences InMail ciblées, connection requests personnalisées et nurturing automatisé pour engager vos prospects B2B.",
                points: [
                  "Optimisation profil Sales Navigator",
                  "Sourcing décideurs Sales Navigator",
                  "Séquences multi-touchpoints synchronisées",
                  "Social Selling Score optimization",
                ],
                metrics: { accept: "30-40%", response: "10-15%" },
              },
              {
                title: "Account-Based Marketing",
                subtitle: "Stratégie ABM Premium",
                icon: MousePointer2,
                desc: "Le service premium pour les cycles de vente complexes. Nous ciblons spécifiquement vos comptes stratégiques avec du contenu personnalisé et un suivi multi-canal orchestré.",
                points: [
                  "IP-Tracking & Retargeting publicitaire",
                  "Contenu personnalisé par compte cible",
                  "Alignement Marketing-Sales parfait",
                  "Intent data & buying signals",
                ],
                metrics: { conversion: "3-5x", deal: "+40%" },
              },
            ].map((canal, i) => (
              <motion.article
                key={i}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className={`group flex h-full flex-col rounded-[22px] border border-[#0D332B]/10 bg-[#F6F7F4] p-6 transition-[transform,border-color,box-shadow] duration-300 hover:border-[#85C947]/70 hover:shadow-[0_24px_48px_-34px_rgba(13,51,43,0.5)] sm:p-8 lg:p-10 ${i === 0 ? "lg:col-span-7" : i === 1 ? "lg:col-span-5" : "sm:col-span-2 lg:col-span-12"}`}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#DCEFC7] text-[#1A6D48] transition-transform duration-300 group-hover:scale-105 sm:mb-8 sm:h-16 sm:w-16">
                  <canal.icon size={32} className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>

                <div className="mb-2">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#1A6D48]">
                    {canal.subtitle}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#0D332B] transition-colors group-hover:text-[#1A6D48] sm:mb-4 sm:text-2xl">
                  {canal.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-[#416058] sm:mb-8 sm:text-base">
                  {canal.desc}
                </p>

                {/* Metrics */}
                <div className="mb-6 rounded-2xl border border-[#0D332B]/10 bg-white p-4 sm:mb-8">
                  <div className="text-xs font-bold text-emerald-900 mb-2 uppercase tracking-wide">
                    Performances moyennes :
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs">
                    {Object.entries(canal.metrics).map(([key, value]) => (
                      <div key={key} className="flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span className="text-slate-600">
                          {key === "open"
                            ? "Ouverture"
                            : key === "response"
                              ? "Réponse"
                              : key === "accept"
                                ? "Acceptation"
                                : key === "conversion"
                                  ? "Conversion"
                                  : "Deal size"}
                          :{" "}
                          <strong className="text-emerald-700">{value}</strong>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <ul className="space-y-2 border-t border-[#0D332B]/10 pt-6 sm:space-y-3">
                  {canal.points.map((p, j) => (
                    <li
                      key={j}
                      className="text-xs sm:text-sm text-emerald-800 font-semibold flex items-start gap-2"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1A6D48]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>

          {/* Additional Value Props */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
          >
            {[
              {
                icon: Clock,
                title: "Déploiement Rapide",
                desc: "Campagnes actives sous 7 jours",
              },
              {
                icon: Shield,
                title: "Conformité RGPD",
                desc: "100% conforme réglementation",
              },
              {
                icon: TrendingUp,
                title: "ROI Garanti",
                desc: "Objectifs contractualisés",
              },
              {
                icon: Users,
                title: "Account Manager",
                desc: "Expert dédié à votre compte",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="border-l border-[#0D332B]/15 p-4 first:border-l-0 sm:p-6"
              >
                <item.icon className="mb-4 h-10 w-10 text-[#1A6D48] sm:h-12 sm:w-12" />
                <h4 className="font-bold text-[#0D332B] mb-2 text-sm sm:text-base">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-16 sm:py-20 md:py-32 lg:py-40 bg-gradient-to-br from-[#0D332B] via-[#0F3D31] to-[#0D332B] relative overflow-hidden">
        {/* Animated Background Text Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] whitespace-nowrap select-none pointer-events-none">
          <span className="text-[15vw] sm:text-[18vw] md:text-[20vw] font-extrabold uppercase font-heading text-white">
            LEAD GEN
          </span>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#B0FF5B]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6 sm:mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B0FF5B]/20 border border-[#B0FF5B]/30 text-[#B0FF5B] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                Offre Limitée
              </span>
            </motion.div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white mb-6 sm:mb-10 leading-tight px-4">
              Passez de la Défense <br className="hidden sm:block" /> à
              l&apos;Attaque Commerciale
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-emerald-50/80 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              Audit gratuit de votre stratégie outbound actuelle + Plan
              d&apos;action personnalisé pour générer vos premiers leads
              qualifiés sous 30 jours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
              <Button
                href="/contact"
                variant="primary"
                className="w-full sm:w-auto bg-[#B0FF5B] hover:bg-white text-[#0D332B] px-10 sm:px-12 py-5 sm:py-6 text-lg sm:text-xl rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 font-bold"
              >
                Démarrer mon audit outbound gratuit
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-emerald-50/50 font-medium tracking-wide px-4"
            >
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B0FF5B]" />
                Accompagnement 100% sur mesure
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B0FF5B]" />
                Résultats garantis sous 90 jours
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B0FF5B]" />
                Sans engagement
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
