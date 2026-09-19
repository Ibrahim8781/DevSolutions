"use client";

import { useState, useEffect, useCallback } from "react";
import { servicesData } from "@/data/servicesData";
import ServicesAmbientCanvas from "@/components/services/ServicesAmbientCanvas";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesQuickIndex from "@/components/services/ServicesQuickIndex";
import ServicesExpandableList from "@/components/services/ServicesExpandableList";
import FinalCTA from "@/components/home/FinalCTA";

// Clear nav (72px) + sticky quick-index (~50px) + spacing buffer (~14px)
const SCROLL_OFFSET = 136;

export default function ServicesPageClient() {
  const [activeSlug, setActiveSlug] = useState<string | null>("business-automations");

  // ── Handle URL hash on first load ──────────────────────────────────────
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const match = servicesData.find(
      (s) => s.slug === hash || s.aliases?.includes(hash)
    );
    if (!match) return;
    setActiveSlug(match.slug);
    const timer = setTimeout(() => {
      const el = document.getElementById(match.slug);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
        window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      }
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  // ── IntersectionObserver: highlight pill of active section on scroll ──
  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topVisible = visible.reduce((prev, curr) =>
            curr.boundingClientRect.top < prev.boundingClientRect.top ? curr : prev
          );
          setActiveSlug(topVisible.target.id);
        }
      },
      {
        rootMargin: "-15% 0px -60% 0px",
        threshold: [0, 0.1, 0.5],
      }
    );

    servicesData.forEach((s) => {
      const el = document.getElementById(s.slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // ── handleScrollTo: smooth scroll to selected section ───────────────────
  const handleScrollTo = useCallback((slug: string) => {
    setActiveSlug(slug);
    try {
      window.history.pushState(null, "", `#${slug}`);
    } catch {
      /* nothing */
    }
    const el = document.getElementById(slug);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  }, []);

  return (
    <main className="flex-1 flex flex-col w-full relative">
      {/* Tuned ambient canvas (fixed, behind everything) */}
      <ServicesAmbientCanvas />

      {/* Hero */}
      <ServicesHero />

      {/* Quick-index pill row — sticky below site nav (top-18 = 72px) */}
      <div className="sticky top-18 z-40 bg-canvas/95 backdrop-blur-md border-b border-hairline w-full">
        <ServicesQuickIndex
          services={servicesData}
          activeSlug={activeSlug}
          onSelect={handleScrollTo}
        />
      </div>

      {/* Full service sections — always fully visible, grouped with category dividers */}
      <ServicesExpandableList services={servicesData} />

      {/* Closing CTA band (full-bleed background, container-constrained content) */}
      <FinalCTA />
    </main>
  );
}
