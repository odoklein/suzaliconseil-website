"use client";

import React from "react";
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
    <div className="min-h-screen bg-white">
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-[#0D332B] via-[#0F3D31] to-[#0D332B] text-white py-20 sm:py-28 md:py-40 overflow-hidden">
        {/* Watermark Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] scale-[2.5] sm:scale-[3] md:scale-[3.5] pointer-events-none rotate-12">
          <Rocket size={400} />
        </div>

        {/* Enhanced Geometric Decor */}
        <div className="absolute top-0 right-0 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-emerald-500/10 rounded-full -mr-32 sm:-mr-48 md:-mr-64 -mt-32 sm:-mt-48 md:-mt-64 border border-emerald-500/20"></div>
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[350px] md:w-[400px] h-[300px] sm:h-[350px] md:h-[400px] bg-[#B0FF5B]/5 rounded-full -ml-24 sm:-ml-32 md:-ml-48 -mb-24 sm:-mb-32 md:-mb-48 border border-[#B0FF5B]/10"></div>

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
              <span className="hidden xs:inline">Stratégie de </span>Croissance
              Proactive
            </motion.div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 sm:mb-8 leading-[1.1] sm:leading-[1.05] tracking-tight">
              Agence{" "}
              <span className="text-[#B0FF5B] drop-shadow-[0_0_15px_rgba(176,255,91,0.3)]">
                Outbound Marketing
              </span>{" "}
              B2B & Prospection Digitale
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-50/90 mb-8 sm:mb-12 leading-relaxed max-w-3xl font-light">
              Passez de l&apos;attente passive à la{" "}
              <strong className="text-[#B0FF5B]">conquête systématique</strong>.
              Nous combinons <strong>Sales Intelligence</strong>, automatisation
              marketing avancée, <strong>Account-Based Marketing (ABM)</strong>{" "}
              et copywriting persuasif pour remplir votre pipeline de{" "}
              <strong>leads B2B qualifiés</strong> et maximiser votre ROI
              commercial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12">
              <Button
                href="/contact"
                variant="primary"
                className="w-full sm:w-auto bg-[#B0FF5B] hover:bg-white text-[#0D332B] text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-2xl shadow-2xl shadow-emerald-950/50 transition-all duration-300 hover:scale-105"
              >
                Lancer ma stratégie outbound
              </Button>
              <Button
                href="#canaux"
                variant="outline-light"
                className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-2xl border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                Explorer nos leviers
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
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-r from-[#0A2923] via-[#0D332B] to-[#0A2923] border-y border-emerald-900/50">
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
                className="space-y-2 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
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
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Background Watermark */}
        <div className="absolute right-0 bottom-0 opacity-[0.02] text-[#0D332B] pointer-events-none translate-x-1/4 translate-y-1/4 hidden md:block">
          <BarChart size={600} />
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
                  <Target className="w-4 h-4" />
                  Méthodologie Éprouvée
                </span>
              </motion.div>

              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0D332B] mb-6 sm:mb-8 leading-tight">
                L&apos;Outbound Marketing B2B : La Prospection Commerciale
                Intelligente
              </h2>

              <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                Le <strong>marketing entrant (inbound)</strong> est saturé. Pour
                dominer votre marché, vous devez maîtriser l&apos;
                <strong>outbound marketing</strong> : ciblage précis via{" "}
                <strong>Account-Based Marketing (ABM)</strong>, prospection
                multi-canal synchronisée et messages hyper-personnalisés grâce à
                la <strong>Sales Intelligence</strong>.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
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
              className="relative grid grid-cols-2 gap-4 sm:gap-6"
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
                  whileHover={{ y: -10, scale: 1.05 }}
                  className={`${box.color} p-6 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[2.5rem] flex flex-col items-center justify-center text-center aspect-square border border-emerald-100/10 cursor-pointer transition-all duration-300`}
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
      <section
        id="canaux"
        className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden"
      >
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
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <motion.div
              variants={scaleVariants}
              className="inline-block mb-4 sm:mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                <Rocket className="w-4 h-4" />
                Leviers d&apos;Acquisition
              </span>
            </motion.div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0D332B] mb-4 sm:mb-6">
              Nos Canaux d&apos;Activation Outbound Marketing
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
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
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
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
                whileHover={{
                  y: -10,
                  shadow: "0 25px 50px -12px rgba(13, 51, 43, 0.2)",
                }}
                className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                  <canal.icon size={32} className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>

                <div className="mb-2">
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                    {canal.subtitle}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#0D332B] group-hover:text-emerald-700 transition-colors">
                  {canal.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-6 sm:mb-8 leading-relaxed flex-1">
                  {canal.desc}
                </p>

                {/* Metrics */}
                <div className="mb-6 sm:mb-8 p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100">
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

                <ul className="space-y-2 sm:space-y-3 pt-6 border-t border-slate-100">
                  {canal.points.map((p, j) => (
                    <li
                      key={j}
                      className="text-xs sm:text-sm text-emerald-800 font-semibold flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B0FF5B] mt-1.5 flex-shrink-0" />
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
            className="mt-12 sm:mt-16 lg:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
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
                className="text-center p-6 rounded-2xl bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-md transition-all duration-300"
              >
                <item.icon className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-600 mx-auto mb-4" />
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
          <span className="text-[15vw] sm:text-[18vw] md:text-[20vw] font-black uppercase font-heading text-white">
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
