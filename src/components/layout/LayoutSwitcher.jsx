"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SmoothScroll from "./SmoothScroll";

export default function LayoutSwitcher({ children, services }) {
  const pathname = usePathname();
  const isPortal = pathname?.startsWith("/portal");

  if (isPortal) {
    return <>{children}</>;
  }

  return (
    <>
      <SmoothScroll />
      <Navbar services={services} />
      <main id="main" className="min-h-[100dvh] pt-[72px]">
        {children}
      </main>
      <Footer />
    </>
  );
}
