"use client";

import { motion } from "framer-motion";
import { Sparkles, Clock, ShieldCheck, Calendar } from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export default function ContactHero() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative w-full overflow-hidden pt-12 pb-14 sm:pt-16 sm:pb-20 border-b border-[#e3e8ee] bg-gradient-to-b from-[#f6f9fc] to-white">
      {/* Subtle Mesh Ambient Wash */}
      <div className="gradient-mesh-container opacity-50" aria-hidden="true">
        <div className="gradient-mesh-blob-1" />
        <div className="gradient-mesh-blob-2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Eyebrow */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#e3e8ee] shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#533afd]" />
            <span className="text-[12px] font-medium tracking-wide uppercase text-[#4434d4]">
              Direct Engagement & Scoping
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[54px] font-light text-[#0d253d] tracking-[-1.2px] leading-[1.08]"
          >
            Schedule a systems diagnostic or send us your scope.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl font-light text-[#273951] max-w-3xl mx-auto leading-relaxed"
          >
            Whether you are automating manual back-office tasks, deploying conversational voice agents, or engineering quantitative bots, speak directly with our systems architects.
          </motion.p>

          {/* SLA Trust Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-[#64748d]">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#533afd]" /> 24-Business-Hour SLA
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#533afd]" /> Mutual NDA Available
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#533afd]" /> Direct Architect Screen-Share
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
