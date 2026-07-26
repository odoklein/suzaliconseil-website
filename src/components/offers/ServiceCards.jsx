"use client";

import Link from "next/link";
import {
  TrendingUp,
  Headphones,
  Monitor,
  Play,
  Zap,
  Target,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Headphones,
    watermark: Users,
    title: "Centre de Contact",
    description: "Externalisez vos appels et laissez-nous remplir vos agendas.",
    color: "teal",
    gradientFrom: "from-[#0D9488]",
    gradientTo: "to-[#14B8A6]",
    bgAccent: "bg-teal-50",
    videoLink: "#",
  },
  {
    icon: Monitor,
    watermark: Zap,
    title: "Solutions Digitales",
    description: "Créez une présence en ligne solide et optimisez vos process.",
    color: "teal",
    gradientFrom: "from-[#0D9488]",
    gradientTo: "to-[#14B8A6]",
    bgAccent: "bg-teal-50",
    videoLink: "#",
  },
];

const ServiceCards = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white pointer-events-none" />

      {/* Floating Orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-100 rounded-full blur-[100px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-100 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section Label */}
        <div className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-2 bg-[#0D332B]/5 text-[#0D332B] text-sm font-bold px-5 py-2 rounded-full">
            <Zap size={14} className="text-[#FF6A3D]" />
            Nos Services
          </span>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6 lg:gap-8">
          {services.map((service, idx) => {
            const Watermark = service.watermark;
            const isOrange = service.color === "orange";

            return (
              <div
                key={idx}
                className="group relative bg-white rounded-[32px] p-8 lg:p-10 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                {/* Card Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none ${service.bgAccent}`}
                />

                {/* Watermark Icon */}
                <div className="absolute -right-6 -bottom-6 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                  <Watermark size={160} strokeWidth={0.5} />
                </div>

                {/* Decorative Corner */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                >
                  <div
                    className={`absolute top-0 right-0 w-full h-full bg-gradient-to-bl ${service.gradientFrom} ${service.gradientTo} opacity-10 rounded-bl-[60px]`}
                  />
                </div>

                <div className="relative z-10">
                  {/* Color Dot with Glow */}
                  <div className="relative mb-8">
                    <div
                      className={`w-4 h-4 rounded-full ${isOrange ? "bg-[#FF6A3D]" : "bg-[#0D9488]"}`}
                    />
                    <div
                      className={`absolute inset-0 w-4 h-4 rounded-full blur-md ${isOrange ? "bg-[#FF6A3D]" : "bg-[#0D9488]"} opacity-50`}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-2xl lg:text-3xl text-[#0D332B] mb-4 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 leading-relaxed mb-8 text-base lg:text-lg min-h-[4.5rem]">
                    {service.description}
                  </p>

                  {/* Video Button */}
                  <Link
                    href={service.videoLink}
                    className={`inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 group/btn
                      ${
                        isOrange
                          ? "bg-[#FF6A3D] text-white hover:bg-[#E85A2D] shadow-lg shadow-[#FF6A3D]/25 hover:shadow-xl hover:shadow-[#FF6A3D]/30"
                          : "bg-[#0D9488] text-white hover:bg-[#0F766E] shadow-lg shadow-[#0D9488]/25 hover:shadow-xl hover:shadow-[#0D9488]/30"
                      }
                    `}
                  >
                    <Play size={14} fill="currentColor" />
                    Vidéo Explicative
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
