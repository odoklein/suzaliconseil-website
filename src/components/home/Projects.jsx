"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useBooking } from "../../context/BookingContext";
import MagneticButton from "../ui/MagneticButton";
import SectionHead from "./kit/SectionHead";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/*
 * On large screens with motion allowed, the section pins and vertical scroll
 * drives the project track sideways. Everywhere else it is a plain swipeable
 * row with scroll snapping, so nothing depends on the pinned mode.
 */
function usePinnedMode() {
  const [pinned, setPinned] = useState(false);
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPinned(wide.matches && !calm.matches);
    update();
    wide.addEventListener("change", update);
    calm.addEventListener("change", update);
    return () => {
      wide.removeEventListener("change", update);
      calm.removeEventListener("change", update);
    };
  }, []);
  return pinned;
}

function ProjectCard({ project }) {
  const Wrapper = project.link ? Link : "div";
  const wrapperProps = project.link ? { href: project.link } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex w-[82vw] shrink-0 snap-start flex-col outline-none focus-visible:ring-2 focus-visible:ring-[#B0FF5B] sm:w-[26rem] lg:w-[26rem]"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] lg:aspect-[16/10] bg-[#1A4D43]">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 26rem, 82vw"
            className={`object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              project.link ? "group-hover:scale-[1.03]" : ""
            }`}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-[#B9CBC4]">
            Visuel à venir
          </div>
        )}
        {project.link && (
          <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#F7FAF8] text-[#0D332B] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
            <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        )}
      </div>
      <div className="pt-6">
        {project.tags?.length > 0 && (
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.04em] text-[#8FB5AA]">
            {project.tags.join(" · ")}
          </p>
        )}
        <h3 className="font-heading text-2xl font-semibold tracking-[-0.035em] text-[#F7FAF8] md:text-[1.75rem]">
          {project.title}
        </h3>
        <p className="mt-3 max-w-[46ch] text-base leading-relaxed text-[#B9CBC4]">{project.description}</p>
      </div>
    </Wrapper>
  );
}

const Projects = ({ projects = [] }) => {
  const { openBooking } = useBooking();
  const pinned = usePinnedMode();
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);

  useIsoLayoutEffect(() => {
    if (!pinned || !trackRef.current) return;
    const measure = () => {
      const track = trackRef.current;
      const inner = track.parentElement.clientWidth - 64; // minus the px-8 gutters
      setDistance(Math.max(0, track.scrollWidth - inner));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [pinned, projects.length]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 160, damping: 34, mass: 0.35 });
  const x = useTransform(smooth, [0, 1], [0, -distance]);

  const header = (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
      <SectionHead
        tone="ink"
        size="md"
        className="lg:col-span-7"
        title={
          <>
            Nos collaborations qui font la différence
          </>
        }
      />
      <div className="lg:col-span-5 lg:pb-1">
        <p className="max-w-[46ch] text-base leading-relaxed text-[#B9CBC4] xl:text-lg">
          Découvrez comment notre équipe a accompagné des entreprises et
          organisations ambitieuses. Chaque projet incarne notre vision :
          écouter, concevoir, exécuter et optimiser.
        </p>
        <MagneticButton onClick={openBooking} variant="primary" className="mt-7">
          <span className="inline-flex items-center gap-2 whitespace-nowrap">
            Audit gratuit de prospection
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </span>
        </MagneticButton>
      </div>
    </div>
  );

  if (!pinned) {
    return (
      <section ref={sectionRef} className="overflow-hidden bg-[#0D332B] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{header}</div>
        <div className="mx-auto mt-14 max-w-7xl md:mt-16">
          <div className="flex snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto px-4 pb-4 sm:scroll-px-6 sm:px-6 lg:scroll-px-8 lg:px-8 [scrollbar-width:none]">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0D332B]"
      style={{ height: `calc(100vh - 72px + ${distance}px)` }}
    >
      <div className="sticky top-[72px] flex h-[calc(100vh-72px)] flex-col justify-center overflow-hidden py-8">
        <div className="mx-auto w-full max-w-7xl px-8">{header}</div>
        <div className="mx-auto mt-10 w-full max-w-7xl px-8">
          <motion.div ref={trackRef} className="flex w-max gap-8" style={{ x }}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
          <div className="mt-8 h-[3px] w-full overflow-hidden rounded-full bg-white/10" aria-hidden="true">
            <motion.div className="h-full origin-left bg-[#B0FF5B]" style={{ scaleX: smooth }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
