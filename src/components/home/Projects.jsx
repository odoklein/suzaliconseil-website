"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useBooking } from "../../context/BookingContext";
import AnimatedSection from "../ui/AnimatedSection";
import MagneticButton from "../ui/MagneticButton";

const Projects = ({ projects = [] }) => {
  const { openBooking } = useBooking();

  return (
    <section className="relative overflow-hidden bg-[#F6F7F4] py-20 md:py-28">
      {/* Background decor */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-[460px] w-[460px] translate-x-1/2 translate-y-1/2 rounded-full bg-[#E3FFC4] opacity-35 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          {/* Left Content (Sticky on large screens) */}
          <AnimatedSection className="mb-12 h-fit space-y-6 text-left md:space-y-7 lg:sticky lg:top-28 lg:col-span-5 lg:mb-0">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E3FFC4] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#315B2A] md:text-sm">
              Portfolio
            </span>
            <h2 className="font-heading text-4xl font-bold leading-[1.06] tracking-[-0.04em] text-[#0D332B] sm:text-5xl lg:text-6xl">
              Nos collaborations <br className="hidden sm:block" />
              qui font la{" "}
              <span className="underline decoration-[#B0FF5B] decoration-[8px] underline-offset-[-4px] [text-decoration-skip-ink:none]">
                différence
              </span>
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-[#52635F] md:text-lg">
              Découvrez comment notre équipe a accompagné des entreprises et
              organisations ambitieuses. Chaque projet incarne notre vision :
              écouter, concevoir, exécuter et optimiser.
            </p>
            <div>
              <MagneticButton
                onClick={openBooking}
                variant="primary"
                className="inline-flex items-center gap-2"
              >
                Audit gratuit de prospection
                <ArrowUpRight className="w-5 h-5" />
              </MagneticButton>
            </div>
          </AnimatedSection>

          {/* Right Content (Projects Grid) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {projects.map((project, idx) => (
                <AnimatedSection
                  key={project.id}
                  delay={Math.min(idx, 4) * 40}
                  {...(project.link
                    ? { as: Link, href: project.link }
                    : {})}
                  className={`group flex flex-col overflow-hidden rounded-[28px] border border-[#0D332B]/8 bg-[#FCFDFC] shadow-[0_24px_62px_-50px_rgba(13,51,43,0.65)] transition-[border-color,box-shadow,transform] duration-300 ${
                    project.link
                      ? "hover:-translate-y-1 hover:border-[#0D332B]/16 hover:shadow-[0_28px_68px_-48px_rgba(13,51,43,0.62)]"
                      : ""
                  }`}
                >
                  {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-[#DDE5E1] md:h-64">
                    {project.imageUrl ? (
                      <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className={`object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          project.link ? "group-hover:scale-[1.025]" : ""
                        }`}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-[#EEF1EF] font-medium text-[#71817C]">
                        No Image
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D332B]/18 via-transparent to-transparent" />

                    {/* Floating arrow — only where the card actually leads somewhere */}
                    {project.link && (
                      <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-[#FCFDFC]/90 opacity-0 backdrop-blur-sm transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <ArrowUpRight size={18} className="text-[#0D332B]" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags &&
                          project.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="rounded-full bg-[#E3FFC4] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#315B2A] md:px-3 md:text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                      </div>
                      <h3 className="mb-2 font-heading text-xl font-bold text-[#0D332B] transition-colors duration-300 group-hover:text-[#315B2A] md:mb-3 md:text-2xl">
                        {project.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#52635F] md:text-base">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
