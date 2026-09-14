"use client";

import { motion } from "framer-motion";
import { Play, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export default function HeroSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const bookingUrl = "https://cal.com/miharbi-damha-omxkej/15min";

  const headline = "We build the automation, AI, and growth systems that run your business without more headcount.";

  return (
    <section className="relative w-full overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28">
      {/* Gradient Mesh Backdrop */}
      <div className="gradient-mesh-container" aria-hidden="true">
        <div className="gradient-mesh-blob-1" />
        <div className="gradient-mesh-blob-2" />
        <div className="gradient-mesh-blob-3" />
        <div className="gradient-mesh-blob-4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Eyebrow tag */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#b9b9f9]/50 border border-[#4434d4]/15 backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#533afd]" />
            <span className="text-[12px] font-medium tracking-wide uppercase text-[#4434d4]">
              Applied AI & Custom Automation Agency
            </span>
          </motion.div>

          {/* Flagship Headline Entrance */}
          <motion.h1
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[56px] font-light text-[#0d253d] tracking-[-1.4px] leading-[1.05] text-balance font-sans"
          >
            {headline}
          </motion.h1>

          {/* Subtitle / Lead Paragraph */}
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-lg sm:text-xl font-light text-[#273951] max-w-2xl mx-auto leading-relaxed"
          >
            Replace repetitive manual work, connect fragmented software tools, and deploy autonomous agents that resolve tasks around the clock.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-normal text-white bg-[#533afd] hover:bg-[#4434d4] active:bg-[#2e2b8c] px-6 py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.99] min-h-[44px]"
            >
              Book a strategy call
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#pillars"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-base font-light text-[#273951] hover:text-[#533afd] bg-white/80 hover:bg-white border border-[#e3e8ee] px-5 py-3.5 rounded-full transition-all duration-200 min-h-[44px]"
            >
              Explore service pillars
            </a>
          </motion.div>

          <div className="pt-2 flex items-center justify-center gap-6 text-xs text-[#64748d]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#533afd]" /> 15-minute diagnostic
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#533afd]" /> Direct technical architect
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> No commitment required
            </span>
          </div>
        </div>

        {/* Reserved 16:9 AI Demo Video / Product Mockup Slot */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="mt-14 sm:mt-18 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl p-2 sm:p-3 bg-white/70 border border-[#e3e8ee] shadow-[0_8px_24px_rgba(0,55,112,0.08),0_2px_6px_rgba(0,55,112,0.04)] backdrop-blur-md">
            {/* Window Chrome Header */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-[#e3e8ee] mb-2">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ea2261]/80" />
                <div className="w-3 h-3 rounded-full bg-[#9b6829]/60" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs font-mono text-[#64748d]">devsolutions-orchestrator.engine</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#b9b9f9]/40 text-[#4434d4]">
                  Demo Video Slot (16:9)
                </span>
              </div>
            </div>

            {/* 16:9 Reserved Media Container */}
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-[#0d253d] flex items-center justify-center group shadow-inner">
              {/* Background ambient dashboard graphic simulation */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1c1e54] via-[#0d253d] to-[#12192c] opacity-90" />
              
              {/* Subtle Grid Pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
                  backgroundSize: "28px 28px",
                }}
              />

              {/* Faux UI Panels previewing automation orchestration */}
              <div className="absolute inset-4 sm:inset-8 grid grid-cols-12 gap-3 sm:gap-4 opacity-40 pointer-events-none">
                <div className="col-span-4 rounded-lg bg-white/5 border border-white/10 p-3 sm:p-4 space-y-2">
                  <div className="h-3 w-16 bg-white/20 rounded" />
                  <div className="h-2 w-full bg-white/10 rounded" />
                  <div className="h-2 w-3/4 bg-white/10 rounded" />
                  <div className="pt-2 space-y-1.5">
                    <div className="h-2 w-5/6 bg-[#533afd]/40 rounded" />
                    <div className="h-2 w-4/6 bg-[#533afd]/30 rounded" />
                  </div>
                </div>
                <div className="col-span-8 rounded-lg bg-white/5 border border-white/10 p-3 sm:p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="h-3 w-28 bg-white/20 rounded" />
                    <div className="h-3 w-12 bg-emerald-400/40 rounded-full" />
                  </div>
                  <div className="h-16 w-full bg-white/5 rounded border border-white/5 flex items-end p-2 gap-1.5">
                    <div className="h-4 w-1/8 bg-[#533afd]/50 rounded-t" />
                    <div className="h-8 w-1/8 bg-[#533afd]/50 rounded-t" />
                    <div className="h-6 w-1/8 bg-[#533afd]/50 rounded-t" />
                    <div className="h-12 w-1/8 bg-[#665efd] rounded-t" />
                    <div className="h-10 w-1/8 bg-[#665efd] rounded-t" />
                    <div className="h-14 w-1/8 bg-[#665efd] rounded-t" />
                  </div>
                </div>
              </div>

              {/* Center Play / Poster Overlay */}
              <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#533afd] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(83,58,253,0.5)] transition-transform duration-300 group-hover:scale-105 cursor-pointer">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1 fill-white" />
                </div>
                <h3 className="mt-4 text-base sm:text-lg font-light text-white tracking-wide">
                  See DevSolutions in Action
                </h3>
                <p className="mt-1 text-xs sm:text-sm font-light text-[#a8c3de] max-w-sm">
                  [AI-Generated Demo Video Preview — Lazy loaded, no sound autoplay]
                </p>
              </div>

              {/* Status bar */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-[#a8c3de]/70">
                <span>00:00 / 01:30</span>
                <span>1080p HD • Autonomous Dispatch</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
