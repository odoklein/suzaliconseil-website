"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Linkedin,
  CheckCircle2,
  Zap,
  Target,
  BarChart3,
  TrendingUp,
  Search,
  Database,
  Layers,
  ShieldCheck,
  Users,
  Award,
  Clock,
  Sparkles,
  Filter,
  UserCheck,
  Megaphone,
} from "lucide-react";
import Button from "../../ui/Button";

export default function LeadGenClient() {
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
    <div className="min-h-screen bg-white">
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-[#0D332B] via-[#0F3D31] to-[#0D332B] text-white py-20 sm:py-28 md:py-40 overflow-hidden">
        {/* Large Target Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] scale-[2.5] sm:scale-[3] md:scale-[4] pointer-events-none rotate-12">
          <Target size={400} />
        </div>

        {/* Enhanced Geometric Decor */}
        <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-emerald-500/10 rounded-full -mr-32 sm:-mr-48 md:-mr-64 -mt-32 sm:-mt-48 md:-mt-64 border border-emerald-500/20"></div>
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[350px] md:w-[400px] h-[300px] sm:h-[350px] md:h-[400px] bg-[#B0FF5B]/5 rounded-full -ml-24 sm:-ml-32 md:-ml-40 -mb-24 sm:-mb-32 md:-mb-40 border border-[#B0FF5B]/10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto lg:mx-0"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-[#B0FF5B] text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-6 sm:mb-8"
            >
              <Zap size={12} className="sm:w-3.5 sm:h-3.5 animate-pulse" />
              <span className="hidden xs:inline">Pipeline </span>Croissance
              Garantie
            </motion.div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 sm:mb-8 leading-[1.1] sm:leading-[1.05] tracking-tight">
              Agence{" "}
              <span className="text-[#B0FF5B] drop-shadow-[0_0_15px_rgba(176,255,91,0.3)]">
                Génération de Leads
              </span>{" "}
              B2B Qualifiés France
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-50/90 mb-8 sm:mb-12 leading-relaxed max-w-3xl font-light">
              Remplissez votre{" "}
              <strong className="text-[#B0FF5B]">pipeline commercial</strong>{" "}
              avec des prospects B2B ultra-qualifiés et prêts à acheter. Nous
              déployons les meilleures stratégies de{" "}
              <strong>sourcing multicanal</strong>,{" "}
              <strong>qualification BANT</strong> et{" "}
              <strong>lead nurturing</strong> pour garantir votre ROI et
              accélérer votre croissance.
            </p>

            {/* Quick Stats in Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 border-t border-white/10 pt-8 sm:pt-10"
            >
              {[
                { label: "Leads générés clients", value: "15K+" },
                { label: "ROI moyen garanti", value: "3.5x" },
                { label: "Taux qualification", value: "85%" },
                { label: "Experts dédiés", value: "15+" },
              ].map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-[#B0FF5B] text-xl sm:text-2xl md:text-3xl font-bold font-heading">
                    {stat.value}
                  </div>
                  <div className="text-white/40 text-[9px] sm:text-[10px] uppercase font-bold tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12">
              <Button
                href="/contact"
                variant="primary"
                className="w-full sm:w-auto bg-[#B0FF5B] hover:bg-white text-[#0D332B] text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 rounded-2xl shadow-2xl shadow-emerald-950/50 transition-all duration-300 hover:scale-105 font-bold"
              >
                Obtenir un audit gratuit
              </Button>
              <Button
                href="#processus"
                variant="outline-light"
                className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-2xl border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                Découvrir notre méthode
              </Button>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-emerald-50/60"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B0FF5B]" />
                <span>Conformité RGPD</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#B0FF5B]" />
                <span>Certification qualité ISO</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#B0FF5B]" />
                <span>Leads sous 30 jours</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Solver Section - Enhanced */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-[0.02] pointer-events-none hidden md:block">
          <Search size={500} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.div
                variants={scaleVariants}
                className="inline-block mb-4 sm:mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                  <Megaphone className="w-4 h-4" />
                  Le Défi B2B Français
                </span>
              </motion.div>

              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0D332B] mb-6 sm:mb-8 leading-tight">
                Le Défi de la Génération de Leads B2B en France
              </h2>

              <p className="text-lg sm:text-xl text-slate-500 mb-6 sm:mb-8 font-light leading-relaxed">
                <strong className="text-slate-700">
                  60% du temps commercial
                </strong>{" "}
                est gaspillé en prospection non qualifiée. Nous transformons
                cette perte en{" "}
                <strong className="text-emerald-700">
                  opportunités commerciales concrètes
                </strong>{" "}
                grâce à notre méthodologie éprouvée de{" "}
                <strong>lead generation B2B</strong>.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    title: "Ciblage ICP Granulaire",
                    desc: "Définition précise de votre Ideal Customer Profile : secteur, taille, technologie, budget, signaux d'achat.",
                    icon: Target,
                  },
                  {
                    title: "Sourcing Multicanal Synchronisé",
                    desc: "Cold emailing, LinkedIn Sales Navigator, téléprospection et retargeting publicitaire orchestrés.",
                    icon: Layers,
                  },
                  {
                    title: "Qualification BANT Stricte",
                    desc: "Budget, Authority, Need, Timeline : seuls les prospects matures passent à votre équipe commerciale.",
                    icon: Filter,
                  },
                  {
                    title: "Garantie Résultats Contractuelle",
                    desc: "Objectifs de volume et qualité définis ensemble. Pas de résultats = remboursement ou prolongation gratuite.",
                    icon: ShieldCheck,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 hover:shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                      <item.icon size={20} className="text-emerald-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0D332B] mb-1 text-sm sm:text-base">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-snug">
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
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-4 sm:space-y-6 pt-8 sm:pt-12">
                  <motion.div
                    variants={scaleVariants}
                    className="bg-[#0D332B] p-6 sm:p-8 rounded-3xl text-white shadow-2xl hover:scale-105 transition-transform duration-300"
                  >
                    <Database
                      size={40}
                      className="text-[#B0FF5B] mb-4 sm:mb-6 w-8 h-8 sm:w-10 sm:h-10"
                    />
                    <h4 className="font-bold text-lg sm:text-xl mb-2">
                      Sourcing Data
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-50/60 leading-relaxed italic">
                      Base enrichie et vérifiée en temps réel via Sales
                      Intelligence.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={scaleVariants}
                    className="bg-emerald-50 p-6 sm:p-8 rounded-3xl border border-emerald-100 hover:scale-105 transition-transform duration-300"
                  >
                    <Layers
                      size={40}
                      className="text-emerald-700 mb-4 sm:mb-6 w-8 h-8 sm:w-10 sm:h-10"
                    />
                    <h4 className="font-bold text-[#0D332B] text-lg sm:text-xl mb-2">
                      Multi-Canal
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                      Email, LinkedIn et Téléphone combinés pour{" "}
                      <strong>3x plus d&apos;impact</strong>.
                    </p>
                  </motion.div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <motion.div
                    variants={scaleVariants}
                    className="bg-emerald-600 p-6 sm:p-8 rounded-3xl text-white shadow-xl shadow-emerald-500/30 hover:scale-105 transition-transform duration-300"
                  >
                    <Target
                      size={40}
                      className="text-white mb-4 sm:mb-6 w-8 h-8 sm:w-10 sm:h-10"
                    />
                    <h4 className="font-bold text-lg sm:text-xl mb-2">
                      Qualification
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-50/80 leading-relaxed uppercase tracking-tighter font-bold">
                      Zéro lead froid. Seuls les décideurs intéressés.
                    </p>
                  </motion.div>

                  <motion.div
                    variants={scaleVariants}
                    className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-lg hover:scale-105 transition-transform duration-300"
                  >
                    <TrendingUp
                      size={40}
                      className="text-emerald-700 mb-4 sm:mb-6 w-8 h-8 sm:w-10 sm:h-10"
                    />
                    <h4 className="font-bold text-[#0D332B] text-lg sm:text-xl mb-2">
                      ROI Boost
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                      Réduction{" "}
                      <strong className="text-emerald-700">massive</strong> de
                      votre CAC.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Method Section - Enhanced */}
      <section
        id="processus"
        className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-[#0D332B] via-[#0F3D31] to-[#0D332B] text-white relative overflow-hidden"
      >
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B0FF5B]/20 border border-[#B0FF5B]/30 text-[#B0FF5B] text-xs font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                Méthodologie Éprouvée
              </span>
            </motion.div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
              Notre Processus de Lead Generation en 5 Étapes
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-emerald-50/60 max-w-3xl mx-auto font-light leading-relaxed">
              Une méthodologie{" "}
              <strong className="text-[#B0FF5B]">data-driven</strong> pour
              transformer vos données en{" "}
              <strong className="text-[#B0FF5B]">contrats signés</strong>.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-4"
          >
            {[
              {
                step: "01",
                title: "ICP & Persona",
                icon: Target,
                desc: "Définition de votre client idéal et segmentation comportementale",
              },
              {
                step: "02",
                title: "Data Sourcing",
                icon: Database,
                desc: "Extraction et enrichissement de bases de données B2B qualifiées",
              },
              {
                step: "03",
                title: "Activation",
                icon: Zap,
                desc: "Lancement des campagnes multicanales synchronisées",
              },
              {
                step: "04",
                title: "Qualification",
                icon: UserCheck,
                desc: "Scoring BANT et validation de l'intérêt commercial",
              },
              {
                step: "05",
                title: "Closing Sync",
                icon: CheckCircle2,
                desc: "Transfert CRM et accompagnement de vos commerciaux",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-[#B0FF5B] hover:text-[#0D332B] transition-all duration-500 text-center"
              >
                <div className="text-3xl sm:text-4xl font-extrabold font-heading mb-4 sm:mb-6 opacity-20 group-hover:opacity-100 transition-opacity">
                  {step.step}
                </div>
                <step.icon
                  size={40}
                  className="mx-auto mb-4 sm:mb-6 text-[#B0FF5B] group-hover:text-[#0D332B] w-8 h-8 sm:w-10 sm:h-10"
                />
                <h4 className="font-bold text-base sm:text-lg uppercase tracking-wider mb-2 sm:mb-3">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm opacity-70 group-hover:opacity-100 leading-snug">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mt-12 sm:mt-16 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              {
                icon: Clock,
                title: "Déploiement Express",
                desc: "Premiers leads sous 14 jours",
                metric: "14j",
              },
              {
                icon: BarChart3,
                title: "Taux Conversion",
                desc: "Lead → Opportunité",
                metric: "35%",
              },
              {
                icon: Users,
                title: "Account Manager",
                desc: "Expert dédié à votre compte",
                metric: "1:1",
              },
              {
                icon: Award,
                title: "Satisfaction Client",
                desc: "Note moyenne clients",
                metric: "4.9/5",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <item.icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#B0FF5B] mx-auto mb-4" />
                <div className="text-2xl sm:text-3xl font-bold text-[#B0FF5B] mb-2">
                  {item.metric}
                </div>
                <h4 className="font-bold text-white mb-2 text-sm sm:text-base">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-emerald-50/50">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Final - Enhanced */}
      <section className="py-16 sm:py-20 md:py-32 lg:py-40 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
          <span className="text-[15vw] sm:text-[18vw] md:text-[25vw] font-extrabold font-heading text-[#0D332B] select-none uppercase">
            RESULTS
          </span>
        </div>

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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                Audit Gratuit
              </span>
            </motion.div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-[#0D332B] mb-6 sm:mb-10 leading-tight px-4">
              Prêt à Remplir Votre Pipeline Commercial ?
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-slate-500 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 italic">
              &ldquo;Depuis que nous travaillons avec Suzali, notre volume de
              rendez-vous qualifiés a bondi de{" "}
              <strong className="text-emerald-700">150%</strong>. Un partenaire
              stratégique indispensable.&rdquo;
            </p>
            <p className="text-sm text-slate-400 mb-8 sm:mb-12">
              — Directeur Commercial, SaaS B2B
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
              <Button
                href="/contact"
                variant="primary"
                className="w-full sm:w-auto bg-[#0D332B] text-[#B0FF5B] hover:bg-[#B0FF5B] hover:text-[#0D332B] px-10 sm:px-16 py-5 sm:py-6 text-lg sm:text-xl rounded-2xl shadow-2xl transition-all font-bold hover:scale-105 duration-300"
              >
                Démarrer mon audit gratuit
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-8 items-center opacity-40 grayscale px-4"
            >
              <div className="font-bold text-[#0D332B] text-xs sm:text-sm">
                TRUSTED BY 200+ B2B COMPANIES
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
