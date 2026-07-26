"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress({ theme }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      setProgress(Math.min(100, (scrollTop / docHeight) * 100));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[60]">
      <div
        className={`h-full transition-[width] duration-150 ease-out ${theme === "digital" ? "bg-sky-500" : "bg-emerald-500"}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
