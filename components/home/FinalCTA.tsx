"use client";

import { useState, useRef } from "react";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export default function FinalCTA() {
  const bookingUrl = "https://cal.com/miharbi-damha-omxkej/15min";
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    // Limit translation distance to 10px
    setPosition({ x: x * 0.25, y: y * 0.25 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <section className="w-full py-20 sm:py-28 bg-[#1c1e54] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#533afd]/20 to-[#ea2261]/10 blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
          <Calendar className="w-3.5 h-3.5 text-[#b9b9f9]" />
          <span className="text-[12px] font-medium tracking-wide uppercase text-[#b9b9f9]">
            Direct Technical Scoping
          </span>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-light tracking-[-1.2px] leading-[1.08]">
            Ready to automate the work that slows your team down?
          </h2>
          <p className="text-lg sm:text-xl font-light text-[#a8c3de] leading-relaxed">
            Book a 15-minute diagnostic call. We will review your current systems, map immediate automation ROI, and outline a concrete deployment roadmap.
          </p>
        </div>

        {/* Magnetic Button */}
        <div className="pt-2 flex flex-col items-center justify-center gap-4">
          <a
            ref={buttonRef}
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: prefersReducedMotion
                ? "none"
                : `translate(${position.x}px, ${position.y}px)`,
              transition: "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
            className="inline-flex items-center justify-center gap-2.5 text-base font-normal text-white bg-[#533afd] hover:bg-[#4434d4] active:bg-[#2e2b8c] px-8 py-4 rounded-full shadow-[0_8px_24px_rgba(83,58,253,0.4)] hover:shadow-[0_12px_32px_rgba(83,58,253,0.6)] min-h-[48px]"
          >
            <span>Book a strategy call</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#a8c3de] pt-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#b9b9f9]" /> Zero pitch deck fluff
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#b9b9f9]" /> Live screen-share architecture review
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-[#b9b9f9]" /> Fixed-scope proposal within 48h
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
