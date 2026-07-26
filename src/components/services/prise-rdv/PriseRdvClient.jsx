"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle2,
  UserCheck,
  TrendingUp,
  Presentation,
  Coffee,
  HelpCircle,
  ArrowRight,
  Zap,
  Clock,
  LayoutDashboard,
  Target,
  Award,
  ShieldCheck,
  Sparkles,
  BarChart3,
  Users,
} from "lucide-react";
import Button from "../../ui/Button";

export default function PriseRdvClient() {
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
        {/* Large Calendar Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] scale-[2.5] sm:scale-[3] md:scale-[4] pointer-events-none rotate-6">
          <Calendar size={400} />
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
              <span className="hidden xs:inline">Efficacité </span>Commerciale
            </motion.div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 sm:mb-8 leading-[1.1] sm:leading-[1.05] tracking-tight">
              Agence{" "}
              <span className="text-[#B0FF5B] drop-shadow-[0_0_15px_rgba(176,255,91,0.3)]">
                Prise de Rendez-vous
              </span>{" "}
              B2B Qualifiés France
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-50/90 mb-8 sm:mb-12 leading-relaxed max-w-3xl font-light">
              Remplissez votre{" "}
              <strong className="text-[#B0FF5B]">agenda commercial</strong> avec
              des opportunités ultra-qualifiées. Nous identifions les{" "}
              <strong>décideurs B2B</strong>, validons leur intérêt et fixons
              des rendez-vous stratégiques pour vos équipes de vente.
              <strong>Qualification BANT stricte</strong>, synchronisation CRM
              et taux de show-up de 95%.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12">
              <Button
                href="/contact"
                variant="primary"
                className="w-full sm:w-auto bg-[#B0FF5B] hover:bg-white text-[#0D332B] text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 rounded-2xl shadow-2xl shadow-emerald-950/50 transition-all duration-300 hover:scale-105 font-bold"
              >
                Remplir mon agenda commercial
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
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-emerald-50/60"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B0FF5B]" />
                <span>Qualification BANT</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#B0FF5B]" />
                <span>95% show-up rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#B0FF5B]" />
                <span>Sync CRM automatique</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section - Enhanced */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 opacity-[0.02] pointer-events-none hidden md:block">
          <LayoutDashboard size={400} />
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
                <Users className="w-4 h-4" />
                Avantages Clés
              </span>
            </motion.div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0D332B] mb-4 sm:mb-6 leading-tight px-4">
              Un Agenda Maîtrisé, des Ventes Accélérées
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed px-4">
              Nous appliquons les{" "}
              <strong className="text-slate-700">
                critères de qualification les plus stricts
              </strong>{" "}
              pour vous garantir des échanges à{" "}
              <strong className="text-slate-700">haute valeur ajoutée</strong>.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              {
                title: "Décideurs Ciblés",
                icon: UserCheck,
                desc: "Nous identifions les interlocuteurs clés (C-Level, VP, Directeurs) ayant le pouvoir de signature et le budget décisionnel.",
                color: "bg-white text-[#0D332B] border-slate-100",
                metrics: { value: "C-Level", label: "Contacts directs" },
              },
              {
                title: "Qualification BANT",
                icon: Coffee,
                desc: "Budget, Autorité, Besoin, Timeline. Chaque rendez-vous est passé au crible de notre méthodologie de qualification stricte.",
                color: "bg-[#0D332B] text-white border-[#0D332B]",
                metrics: { value: "100%", label: "Qualifiés BANT" },
              },
              {
                title: "Sync Agenda & CRM",
                icon: Calendar,
                desc: "Nous gérons les créneaux directement dans votre calendrier (Google, Outlook) avec briefing complet transmis via votre CRM.",
                color: "bg-white text-[#0D332B] border-slate-100",
                metrics: { value: "Auto", label: "Synchronisation" },
              },
              {
                title: "ROI Garanti",
                icon: TrendingUp,
                desc: "Accélérez vos cycles de vente en vous concentrant uniquement sur le closing final. Vos commerciaux ne prospectent plus.",
                color: "bg-emerald-50 text-emerald-900 border-emerald-100",
                metrics: { value: "+50%", label: "Ventes closes" },
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  shadow: "0 25px 50px -12px rgba(13, 51, 43, 0.2)",
                }}
                className={`p-6 sm:p-8 rounded-3xl shadow-sm flex flex-col border ${item.color} h-full transition-all duration-300`}
              >
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-black/5 ${item.color.includes("text-[#0D332B]") ? "bg-emerald-50" : "bg-white/10"}`}
                >
                  <item.icon
                    size={28}
                    className="sm:w-8 sm:h-8"
                    strokeWidth={1.5}
                  />
                </div>
                <h4 className="font-bold text-lg sm:text-xl mb-3">
                  {item.title}
                </h4>
                <p
                  className={`text-sm sm:text-base leading-relaxed mb-6 flex-1 ${item.color.includes("text-white") ? "text-emerald-50/70" : "text-slate-500"}`}
                >
                  {item.desc}
                </p>

                {/* Metrics Badge */}
                <div className="pt-6 border-t border-current/10">
                  <div
                    className={`text-xl sm:text-2xl font-bold mb-1 ${item.color.includes("text-white") ? "text-[#B0FF5B]" : "text-emerald-700"}`}
                  >
                    {item.metrics.value}
                  </div>
                  <div className="text-[10px] uppercase font-bold opacity-60 tracking-wide">
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
        id="processus"
        className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white relative overflow-hidden"
      >
        <div className="absolute right-0 top-0 opacity-[0.03] pointer-events-none -rotate-12 hidden md:block">
          <Target size={500} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4 sm:mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                <BarChart3 className="w-4 h-4" />
                Méthodologie Éprouvée
              </span>
            </motion.div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0D332B] px-4">
              Notre Processus de Qualification en 4 Étapes
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  title: "Ciblage Stratégique ICP",
                  desc: "Définition précise du profil client idéal (Ideal Customer Profile) : secteur, taille, budget, technologie, signaux d'achat. Sourcing des contacts qualifiés via Sales Intelligence.",
                  icon: Target,
                },
                {
                  title: "Approche Multicanal Synchronisée",
                  desc: "Email personnalisé, LinkedIn Social Selling et téléphone orchestrés pour engager le prospect de manière non-intrusive et professionnelle.",
                  icon: Presentation,
                },
                {
                  title: "Audit de l'Intérêt & BANT",
                  desc: "Validation du besoin réel, de la maturité du projet et des critères BANT (Budget, Autorité, Need, Timeline) lors d'un pré-appel de qualification.",
                  icon: HelpCircle,
                },
                {
                  title: "Fixation RDV & Briefing Complet",
                  desc: "Le rendez-vous est posé dans votre agenda. Vous recevez un briefing détaillé sur le prospect : contexte, besoins, objections levées, opportunités identifiées.",
                  icon: CheckCircle2,
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 sm:gap-6 lg:gap-8 group p-4 sm:p-5 rounded-2xl hover:bg-emerald-50 transition-all duration-300"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0D332B] text-[#B0FF5B] rounded-2xl flex items-center justify-center font-black text-xl sm:text-2xl flex-shrink-0 shadow-lg shadow-emerald-950/20 group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-[#0D332B] flex items-center gap-3">
                      {step.title}{" "}
                      <ArrowRight className="w-5 h-5 text-[#B0FF5B] group-hover:translate-x-2 transition-transform" />
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-[#0D332B] to-[#0F3D31] rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 text-white flex flex-col justify-center shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-10">
                  <Calendar size={150} className="sm:w-[200px] sm:h-[200px]" />
                </div>
                <div className="relative z-10 space-y-6 sm:space-y-8 text-center">
                  <Clock
                    size={48}
                    className="sm:w-16 sm:h-16 mx-auto text-[#B0FF5B]"
                  />
                  <h4 className="text-2xl sm:text-3xl font-bold">
                    Zéro Perte de Temps
                  </h4>
                  <p className="text-emerald-50/80 text-base sm:text-lg lg:text-xl font-light leading-relaxed">
                    Un commercial passe en moyenne{" "}
                    <strong className="text-[#B0FF5B]">35% de son temps</strong>{" "}
                    à prospecter. Nous ramenons ce chiffre à{" "}
                    <strong className="text-[#B0FF5B]">0%</strong>.
                  </p>
                  <div className="pt-6 sm:pt-8 grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="p-4 sm:p-5 bg-white/5 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                      <div className="text-2xl sm:text-3xl font-bold text-[#B0FF5B]">
                        +50%
                      </div>
                      <div className="text-[10px] sm:text-xs uppercase font-bold text-white/50 tracking-wide">
                        Ventes closes
                      </div>
                    </div>
                    <div className="p-4 sm:p-5 bg-white/5 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                      <div className="text-2xl sm:text-3xl font-bold text-[#B0FF5B]">
                        -40%
                      </div>
                      <div className="text-[10px] sm:text-xs uppercase font-bold text-white/50 tracking-wide">
                        Cycle de vente
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-16 sm:py-20 md:py-32 lg:py-40 bg-gradient-to-br from-[#0D332B] via-[#0F3D31] to-[#0D332B] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex items-center justify-center">
          <span className="text-[15vw] sm:text-[18vw] md:text-[25vw] font-black font-heading text-white select-none uppercase">
            AGENDA
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B0FF5B]/20 border border-[#B0FF5B]/30 text-[#B0FF5B] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                Sans Engagement
              </span>
            </motion.div>

            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white mb-8 sm:mb-10 leading-tight px-4">
              Passez au Niveau Supérieur <br className="hidden sm:block" />
              de la Vente B2B
            </h2>

            <Button
              href="/contact"
              variant="primary"
              className="w-full sm:w-auto bg-[#B0FF5B] text-[#0D332B] hover:bg-white text-lg sm:text-xl px-12 sm:px-16 py-5 sm:py-6 rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 font-bold"
            >
              Démarrer ma prise de RDV
            </Button>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-emerald-50/40 mt-8 sm:mt-10 font-medium italic text-sm sm:text-base px-4"
            >
              Ciblage laser • Qualification BANT • Sync CRM • Paiement au
              résultat possible
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
