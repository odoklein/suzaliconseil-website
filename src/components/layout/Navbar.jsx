"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import MegaMenu from "./MegaMenu";
import { useBooking } from "../../context/BookingContext";

/* One source of truth: the desktop bar and the mobile panel read the same list,
   so a new route can never appear in one and not the other. */
const NAV_LINKS = [
  { href: "/offres", label: "Offres" },
  { href: "/etudes-de-cas", label: "Études de cas" },
  { href: "/equipe", label: "Équipe" },
  { href: "/carriers", label: "Carrières" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
];

const MEGA_MENU_ID = "nav-services-panel";
const MOBILE_PANEL_ID = "nav-mobile-panel";

/* Hovering out of the trigger toward the panel crosses a few dead pixels;
   closing on a delay lets the pointer make the trip. */
const HOVER_INTENT_MS = 140;

export default function Navbar({ services }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { openBooking } = useBooking();

  const servicesTriggerRef = useRef(null);
  const servicesWrapRef = useRef(null);
  const mobileToggleRef = useRef(null);
  const closeTimer = useRef(null);

  const isCurrent = (href) =>
    pathname === href || pathname?.startsWith(`${href}/`);
  const isServicesSection = pathname?.startsWith("/services");

  const openServices = useCallback(() => {
    clearTimeout(closeTimer.current);
    setIsServicesOpen(true);
  }, []);

  const closeServices = useCallback(() => {
    clearTimeout(closeTimer.current);
    setIsServicesOpen(false);
  }, []);

  const scheduleCloseServices = useCallback(() => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(
      () => setIsServicesOpen(false),
      HOVER_INTENT_MS,
    );
  }, []);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  // Route change closes whatever is open.
  useEffect(() => {
    closeServices();
    setIsMobileMenuOpen(false);
  }, [pathname, closeServices]);

  // Glass state. rAF-throttled and only writes on an actual state flip.
  useEffect(() => {
    let frame = 0;
    let last = window.scrollY > 20;
    setIsScrolled(last);

    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const next = window.scrollY > 20;
        if (next !== last) {
          last = next;
          setIsScrolled(next);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Escape closes the open surface and hands focus back to its trigger.
  useEffect(() => {
    if (!isServicesOpen && !isMobileMenuOpen) return;

    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      if (isServicesOpen) {
        closeServices();
        servicesTriggerRef.current?.focus();
      }
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        mobileToggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isServicesOpen, isMobileMenuOpen, closeServices]);

  // Pointer down outside the services group closes it — replaces the
  // full-viewport invisible div that used to swallow clicks on the page.
  useEffect(() => {
    if (!isServicesOpen) return;

    const onPointerDown = (event) => {
      if (!servicesWrapRef.current?.contains(event.target)) closeServices();
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [isServicesOpen, closeServices]);

  // The mega menu grows from the trigger, not from the middle of the screen.
  useEffect(() => {
    if (!isServicesOpen) return;
    const rect = servicesTriggerRef.current?.getBoundingClientRect();
    if (rect) {
      document.documentElement.style.setProperty(
        "--dropdown-origin-x",
        `${Math.round(rect.left + rect.width / 2)}px`,
      );
    }
  }, [isServicesOpen]);

  // Lock the page behind the mobile panel so scrolling past its end doesn't
  // chain to the document underneath.
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isMobileMenuOpen]);

  // Tabbing past the last link in the panel closes it.
  const handleServicesBlur = (event) => {
    if (!servicesWrapRef.current?.contains(event.relatedTarget)) {
      closeServices();
    }
  };

  return (
    <>
      <a href="#main" className="skip-link">
        Aller au contenu
      </a>

      <header
        className={`navbar-shell fixed w-full z-40 ${
          isScrolled ? "is-scrolled" : ""
        } ${isServicesOpen || isMobileMenuOpen ? "is-open" : ""}`}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              aria-label="Suzali Conseil — accueil"
              className="nav-focus flex items-center gap-2 group"
            >
              <Image
                src="/assets/greenlogo.svg"
                alt="Suzali Conseil"
                width={180}
                height={50}
                priority
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </Link>

            {/* Desktop navigation */}
            <nav
              aria-label="Navigation principale"
              className="hidden lg:flex items-center gap-8"
            >
              <div
                ref={servicesWrapRef}
                className="relative h-20 flex items-center"
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
                onBlur={handleServicesBlur}
              >
                <button
                  ref={servicesTriggerRef}
                  type="button"
                  aria-expanded={isServicesOpen}
                  aria-controls={MEGA_MENU_ID}
                  aria-current={isServicesSection ? "page" : undefined}
                  data-open={isServicesOpen}
                  onClick={() =>
                    isServicesOpen ? closeServices() : openServices()
                  }
                  className={`nav-link-premium nav-focus flex items-center gap-1 text-[15px] uppercase tracking-wide font-heading ${
                    isServicesOpen
                      ? "text-[var(--color-primary-main)]"
                      : "text-[var(--color-primary-dark)] hover:text-[var(--color-primary-main)]"
                  }`}
                >
                  Services
                  <ChevronDown
                    size={14}
                    aria-hidden="true"
                    className={`transition-transform duration-[var(--dropdown-open-dur)] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <MegaMenu
                  id={MEGA_MENU_ID}
                  services={services}
                  isOpen={isServicesOpen}
                  onClose={closeServices}
                />
              </div>

              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isCurrent(link.href) ? "page" : undefined}
                  className="nav-link-premium nav-focus text-[15px] text-[var(--color-primary-dark)] hover:text-[var(--color-primary-main)] uppercase tracking-wide font-heading"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA & mobile toggle */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={openBooking}
                className="nav-cta nav-focus hidden lg:inline-flex items-center gap-2 bg-[var(--color-primary-dark)] hover:bg-[var(--color-primary-main)] text-white hover:text-[var(--color-accent-lime)] px-6 py-2.5 rounded-full font-medium text-sm transition-[background-color,color,transform,box-shadow] duration-[var(--dropdown-open-dur)] ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_6px_20px_-8px_rgba(13,51,43,0.6)] hover:shadow-[0_12px_28px_-10px_rgba(13,51,43,0.65)] hover:-translate-y-0.5 group/cta overflow-hidden relative"
              >
                <span className="relative z-10">Planifier un appel</span>
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="relative z-10 transition-transform duration-[var(--dropdown-open-dur)] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:translate-x-1"
                />
                <span className="nav-cta-sweep" aria-hidden="true" />
              </button>

              <button
                ref={mobileToggleRef}
                type="button"
                aria-label={
                  isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"
                }
                aria-expanded={isMobileMenuOpen}
                aria-controls={MOBILE_PANEL_ID}
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                className="nav-focus lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full text-[var(--color-primary-dark)] hover:bg-[var(--color-primary-dark)]/5 transition-colors"
              >
                <span
                  className="t-icon-swap"
                  data-state={isMobileMenuOpen ? "b" : "a"}
                >
                  <Menu className="t-icon" data-icon="a" size={24} />
                  <X className="t-icon" data-icon="b" size={24} />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile panel */}
        <div
          id={MOBILE_PANEL_ID}
          className={`nav-mobile-panel t-stagger lg:hidden absolute top-full left-0 w-full bg-white/97 backdrop-blur-xl border-t border-[var(--color-primary-dark)]/8 overflow-hidden ${
            isMobileMenuOpen ? "is-open is-shown" : ""
          }`}
          style={{ height: "calc(100dvh - var(--nav-h))" }}
        >
          <nav
            aria-label="Navigation mobile"
            className="p-6 pb-16 flex flex-col gap-6 overflow-y-auto overscroll-contain h-full"
          >
            <div className="t-stagger-line" style={{ "--i": 0 }}>
              <h2 className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-[0.14em] mb-3">
                Services
              </h2>
              <ul className="flex flex-col pl-4 border-l border-[var(--color-primary-dark)]/15">
                {services.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services/${service.slug}`}
                      aria-current={
                        isCurrent(`/services/${service.slug}`)
                          ? "page"
                          : undefined
                      }
                      className="nav-focus flex items-center min-h-11 py-1 font-medium text-[15px] text-[var(--color-text-muted)] hover:text-[var(--color-primary-main)] aria-[current=page]:text-[var(--color-primary-dark)] aria-[current=page]:font-semibold transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <hr className="border-[var(--color-primary-dark)]/10" />

            <ul className="flex flex-col">
              {NAV_LINKS.map((link, index) => (
                <li
                  key={link.href}
                  className="t-stagger-line"
                  style={{ "--i": index + 1 }}
                >
                  <Link
                    href={link.href}
                    aria-current={isCurrent(link.href) ? "page" : undefined}
                    className="nav-focus flex items-center min-h-14 text-lg font-bold text-[var(--color-primary-dark)] uppercase tracking-wide font-heading hover:text-[var(--color-primary-main)] aria-[current=page]:text-[var(--color-primary-main)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openBooking();
              }}
              className="nav-focus t-stagger-line mt-auto flex items-center justify-center gap-2 w-full bg-[var(--color-primary-dark)] text-white min-h-14 rounded-full font-bold shadow-[0_10px_30px_-12px_rgba(13,51,43,0.7)] active:scale-[0.99] transition-transform"
              style={{ "--i": NAV_LINKS.length + 1 }}
            >
              Planifier un appel
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
