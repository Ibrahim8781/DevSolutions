"use client";

import { useEffect, useRef } from "react";
import type { ServiceData } from "@/data/servicesData";

interface Props {
  services: ServiceData[];
  activeSlug: string | null;
  onSelect: (slug: string) => void;
}

export default function ServicesQuickIndex({ services, activeSlug, onSelect }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Keep the active pill in view inside the horizontally scrolling container
  useEffect(() => {
    if (!activeSlug || !containerRef.current) return;
    const activeBtn = containerRef.current.querySelector<HTMLElement>(
      `[data-slug="${activeSlug}"]`
    );
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
        block: "nearest",
      });
    }
  }, [activeSlug]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
      <div
        ref={containerRef}
        className="flex flex-nowrap items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth"
        role="navigation"
        aria-label="Quick jump to service section"
      >
        {services.map((service) => {
          const isActive = activeSlug === service.slug;
          return (
            <button
              key={service.slug}
              data-slug={service.slug}
              type="button"
              onClick={() => onSelect(service.slug)}
              aria-pressed={isActive}
              className={`
                shrink-0 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-[13px] leading-none font-medium
                border transition-all duration-150 whitespace-nowrap
                focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50
                ${
                  isActive
                    ? "bg-primary/10 text-primary border-primary font-semibold"
                    : "bg-canvas-raised text-ink-secondary hover:text-ink border-hairline hover:border-primary/50"
                }
              `}
            >
              {service.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}
