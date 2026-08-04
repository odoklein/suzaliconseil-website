"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  BarChart3,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Users,
  Calendar,
  Headphones,
  Zap,
  PhoneForwarded,
  Volume2,
  Award,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  MessageSquare,
} from "lucide-react";
import Button from "../../ui/Button";

export default function TeleprospectionClient() {
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

  const scaleVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-[100dvh] overflow-hidden bg-[#F6F7F4] text-[#0D332B]">
      {/* Hero Section - Enhanced */}
      <section className="relative overflow-hidden bg-[#F6F7F4] px-3 pb-10 pt-24 text-white sm:px-4 lg:px-5 lg:pb-14">
        <div className="pointer-events-none absolute bottom-10 right-0 top-24 hidden w-[48%] overflow-hidden rounded-[28px] lg:bottom-14 lg:block">
          <Image src="/images/hero-office.webp" alt="" fill priority sizes="48vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#0D332B_0%,rgba(13,51,43,0.9)_18%,rgba(13,51,43,0.12)_82%)]" />
        </div>
        {/* Large Phone Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] scale-[2.5] sm:scale-[3] md:scale-[4] pointer-events-none -rotate-12">
          <PhoneForwarded size={400} />
        </div>

        {/* Enhanced Geometric Decor */}
        <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-emerald-500/10 rounded-full -mr-32 sm:-mr-48 md:-mr-64 -mt-32 sm:-mt-48 md:-mt-64 border border-emerald-500/20"></div>
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[350px] md:w-[400px] h-[300px] sm:h-[350px] md:h-[400px] bg-[#B0FF5B]/5 rounded-full -ml-24 sm:-ml-32 md:-ml-40 -mb-24 sm:-mb-32 md:-mb-40 border border-[#B0FF5B]/10"></div>

        <div className="relative z-10 mx-auto max-w-[1600px] overflow-hidden rounded-[28px] border border-[#0D332B]/10 bg-[#0D332B]/92 px-6 py-14 shadow-[0_30px_80px_-48px_rgba(13,51,43,0.8)] sm:px-10 md:px-14 lg:min-h-[620px] lg:px-16 lg:py-16 xl:px-20">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[680px]"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-[#B0FF5B] text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-6 sm:mb-8"
            >
              <Zap size={12} className="sm:w-3.5 sm:h-3.5 animate-pulse" />
              <span className="hidden xs:inline">Performance </span>Téléphonique
            </motion.div>

            <h1 className="font-heading text-4xl font-bold leading-[1.02] tracking-[-0.048em] sm:text-5xl md:text-6xl xl:text-[4.3rem] mb-6 sm:mb-8">
              Agence{" "}
              <span className="text-[#B0FF5B] drop-shadow-[0_0_15px_rgba(176,255,91,0.3)]">
                Téléprospection
              </span>{" "}
              B2B & Prise de RDV France
            </h1>

            <p className="max-w-[62ch] text-base font-medium leading-relaxed text-[#DCE8E3] sm:text-lg mb-8 sm:mb-10">
              Transformez le téléphone en{" "}
              <strong className="text-[#B0FF5B]">
                levier de croissance immédiat
              </strong>
              . Nos <strong>Business Developers experts</strong> gèrent le
              passage de barrage, la détection d&apos;opportunités et la{" "}
              <strong>qualification BANT</strong> pour remplir l&apos;agenda de
              vos commerciaux avec des rendez-vous ultra-qualifiés.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12">
              <Button
                href="/contact"
                variant="primary"
                className="w-full sm:w-auto rounded-full bg-[#B0FF5B] px-7 py-3.5 text-sm font-bold text-[#0D332B] shadow-[0_18px_36px_-18px_rgba(176,255,91,0.7)] transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#C2FF80] active:translate-y-px"
              >
                Lancer ma campagne d&apos;appels
              </Button>
              <Button
                href="#methode"
                variant="outline-light"
                className="w-full sm:w-auto rounded-full border border-white/25 bg-white/8 px-7 py-3.5 text-sm font-bold text-white transition-[background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/14 active:translate-y-px"
              >
                Découvrir notre méthode
              </Button>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-emerald-50/60"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B0FF5B]" />
                <span>Conformité RGPD</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#B0FF5B]" />
                <span>50+ téléprospecteurs certifiés</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#B0FF5B]" />
                <span>Démarrage sous 7 jours</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Stats - Enhanced */}
      <section className="bg-[#F6F7F4] px-3 pb-10 sm:px-4 lg:px-5">
        <div className="mx-auto max-w-[1600px] rounded-[24px] border border-[#0D332B]/10 bg-white px-4 py-7 shadow-[0_22px_54px_-42px_rgba(13,51,43,0.55)] sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center"
          >
            {[
              { label: "Appels quotidiens", value: "5000+", icon: Phone },
              { label: "RDV fixés clients", value: "15K+", icon: Calendar },
              { label: "Taux de show-up", value: "92%", icon: UserCheck },
              { label: "Téléprospecteurs experts", value: "50+", icon: Users },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="space-y-2 border-r border-[#0D332B]/10 p-4 last:border-r-0"
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600 mx-auto mb-2" />
                <div className="text-[#0D332B] text-2xl sm:text-3xl md:text-4xl font-bold font-heading">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Section - Enhanced */}
      <section className="relative overflow-hidden bg-white py-20 text-[#0D332B] md:py-28">
        <div className="absolute right-0 top-0 opacity-[0.03] pointer-events-none -translate-y-1/4 hidden md:block">
          <Volume2 size={400} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <motion.div
              variants={scaleVariants}
              className="inline-block mb-4 sm:mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                <MessageSquare className="w-4 h-4" />
                Expertise Téléphonique
              </span>
            </motion.div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
              L&apos;Art de la Prospection Téléphonique B2B
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Externaliser votre <strong>téléprospection</strong> n&apos;est pas
              seulement une question d&apos;appels, c&apos;est une question
              d&apos;<strong>image de marque</strong> et de{" "}
              <strong>détection fine des besoins</strong>.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-[1.08fr_.92fr_1fr]"
          >
            {[
              {
                title: "Gain de Temps Radical",
                icon: Clock,
                desc: "Vos closers ne perdent plus de temps à qualifier. Ils entrent en scène uniquement sur des prospects chauds avec un besoin identifié et un budget validé.",
                color: "bg-emerald-50 text-emerald-700 border-emerald-100",
                metrics: { time: "70%", label: "Temps économisé" },
              },
              {
                title: "Expertise Passage de Barrage",
                icon: ShieldCheck,
                desc: "Nous maîtrisons l'art de contourner les filtres et secrétariats pour parler directement aux décideurs. Taux de contact direct : 80%.",
                color: "bg-[#0D332B] text-white border-[#0D332B]",
                metrics: { time: "80%", label: "Contact décideurs" },
              },
              {
                title: "Data Enrichment CRM",
                icon: BarChart3,
                desc: "Chaque appel enrichit votre CRM : noms, emails directs, projets en cours, technologies utilisées et organigramme décisionnel complet.",
                color: "bg-emerald-50 text-emerald-700 border-emerald-100",
                metrics: { time: "+15", label: "Champs enrichis" },
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  shadow: "0 25px 50px -12px rgba(13, 51, 43, 0.2)",
                }}
                className={`p-6 sm:p-8 lg:p-10 rounded-3xl shadow-sm flex flex-col ${item.color} border h-full transition-all duration-300`}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 sm:mb-8 ring-1 ring-black/5">
                  <item.icon size={28} className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  {item.title}
                </h3>
                <p
                  className={`${item.color.includes("text-white") ? "text-emerald-50/80" : "text-slate-600"} leading-relaxed flex-1 text-sm sm:text-base mb-6`}
                >
                  {item.desc}
                </p>

                {/* Metrics Badge */}
                <div className="pt-6 border-t border-current/10">
                  <div className="text-2xl sm:text-3xl font-bold mb-1">
                    {item.metrics.time}
                  </div>
                  <div className="text-xs uppercase tracking-wide opacity-60 font-bold">
                    {item.metrics.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section - Enhanced */}
      <section
        id="methode"
        className="overflow-hidden bg-[#F6F7F4] py-20 md:py-28"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="lg:w-1/2"
            >
              <motion.div
                variants={scaleVariants}
                className="inline-block mb-4 sm:mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                  <Target className="w-4 h-4" />
                  Méthodologie Qualité
                </span>
              </motion.div>

              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0D332B] mb-8 sm:mb-10 leading-tight">
                Une Méthode Centrée sur la Qualité
              </h2>

              <div className="space-y-6 sm:space-y-8">
                {[
                  {
                    id: "01",
                    title: "Ciblage & Persona",
                    text: "Identification fine de votre interlocuteur idéal : secteur d'activité, taille critique, tech-stack utilisé et signaux d'achat.",
                  },
                  {
                    id: "02",
                    title: "Scripts Dynamiques",
                    text: "Pas de lecture robotique. Un argumentaire fluide basé sur l'empathie, l'écoute active et la création de valeur immédiate.",
                  },
                  {
                    id: "03",
                    title: "Qualification BANT Stricte",
                    text: "Budget, Autorité, Besoin, Timeline. Un rendez-vous n'est fixé que si le prospect est mature et prêt à avancer.",
                  },
                  {
                    id: "04",
                    title: "Briefing de Passation",
                    text: "Vous recevez un résumé complet (contexte, besoins, objections levées) avant chaque rendez-vous fixé dans votre agenda.",
                  },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex gap-4 sm:gap-6 group p-4 sm:p-5 rounded-2xl hover:bg-emerald-50 transition-all duration-300"
                  >
                    <div className="text-3xl sm:text-4xl font-extrabold text-emerald-100 group-hover:text-[#B0FF5B] transition-colors font-heading leading-none flex-shrink-0">
                      {step.id}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg sm:text-xl text-[#0D332B] mb-2">
                        {step.title}
                      </h4>
                      <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-md">
                        {step.text}
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
              className="lg:w-1/2 relative w-full"
            >
              <div className="absolute inset-0 bg-[#0D332B]/5 rounded-[3rem] -rotate-3 scale-105 pointer-events-none hidden sm:block"></div>
              <div className="relative bg-white p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] shadow-2xl border border-slate-100">
                <div className="space-y-6 sm:space-y-8">
                  <motion.div
                    variants={scaleVariants}
                    className="flex items-center gap-4 sm:gap-6 p-5 sm:p-6 bg-emerald-50 rounded-2xl border border-emerald-100 hover:scale-105 transition-transform duration-300"
                  >
                    <Headphones
                      className="text-emerald-700 flex-shrink-0"
                      size={32}
                    />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#0D332B] uppercase tracking-wide">
                        Agents Dédiés
                      </div>
                      <div className="text-xs text-slate-500">
                        Formés à votre proposition de valeur unique
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={scaleVariants}
                    className="flex items-center gap-4 sm:gap-6 p-5 sm:p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:scale-105 transition-transform duration-300"
                  >
                    <Users className="text-[#0D332B] flex-shrink-0" size={32} />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#0D332B] uppercase tracking-wide">
                        Passage de Barrages
                      </div>
                      <div className="text-xs text-slate-500">
                        80% de taux de contact direct décideurs
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={scaleVariants}
                    className="flex items-center gap-4 sm:gap-6 p-5 sm:p-6 bg-[#B0FF5B]/10 rounded-2xl border border-[#B0FF5B]/20 hover:scale-105 transition-transform duration-300"
                  >
                    <Calendar
                      className="text-emerald-800 flex-shrink-0"
                      size={32}
                    />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#0D332B] uppercase tracking-wide">
                        Agenda Synchronisé
                      </div>
                      <div className="text-xs text-slate-500">
                        Briefing transmis automatiquement via votre CRM
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={scaleVariants}
                    className="flex items-center gap-4 sm:gap-6 p-5 sm:p-6 bg-emerald-600 text-white rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                  >
                    <TrendingUp className="flex-shrink-0" size={32} />
                    <div>
                      <div className="text-xs sm:text-sm font-bold uppercase tracking-wide">
                        Performance Tracking
                      </div>
                      <div className="text-xs text-emerald-50/80">
                        Dashboard temps réel : appels, contacts, RDV fixés
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA - Enhanced */}
      <section className="relative overflow-hidden bg-[#F6F7F4] px-3 py-10 sm:px-4 md:py-14 lg:px-5">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex items-center justify-center">
          <span className="text-[15vw] sm:text-[18vw] md:text-[25vw] font-extrabold font-heading text-white select-none uppercase">
            CALLS
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-[1500px] overflow-hidden rounded-[28px] bg-[#0D332B] px-6 py-16 text-center shadow-[0_30px_75px_-50px_rgba(13,51,43,0.85)] sm:px-10 sm:py-20 lg:px-20 lg:py-24">
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
                Démarrage Express
              </span>
            </motion.div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white mb-6 sm:mb-10 leading-tight px-4">
              Prêt à Multiplier par 3 <br className="hidden sm:block" />
              Vos Rendez-vous Qualifiés ?
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-emerald-50/70 mb-8 sm:mb-12 font-light max-w-2xl mx-auto px-4">
              Nos campagnes de{" "}
              <strong className="text-[#B0FF5B]">téléprospection B2B</strong>{" "}
              démarrent sous 7 jours. Expertise France garantie, conformité RGPD
              totale.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
              <Button
                href="/contact"
                variant="primary"
                className="w-full sm:w-auto bg-[#B0FF5B] hover:bg-white text-[#0D332B] px-10 sm:px-12 py-5 sm:py-6 text-lg sm:text-xl rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 font-bold"
              >
                Demander mon audit gratuit
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
                50+ téléprospecteurs formés
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B0FF5B]" />
                92% taux de show-up
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
