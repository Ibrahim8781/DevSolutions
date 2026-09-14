"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Award, Users } from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export default function AboutHero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const bookingUrl = "https://cal.com/miharbi-damha-omxkej/15min";

  return (
    <section className="relative w-full overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-24 border-b border-[#e3e8ee] bg-gradient-to-b from-[#f6f9fc] to-white">
      {/* Subtle Mesh Ambient Wash */}
      <div className="gradient-mesh-container opacity-50" aria-hidden="true">
        <div className="gradient-mesh-blob-1" />
        <div className="gradient-mesh-blob-3" />
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
              Our Thesis & Company
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[54px] font-light text-[#0d253d] tracking-[-1.2px] leading-[1.08]"
          >
            Built to give growing businesses engineering leverage without the payroll.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl font-light text-[#273951] max-w-3xl mx-auto leading-relaxed"
          >
            You shouldn&apos;t need a 5-person in-house engineering department or a bloated payroll just to automate your back office, route high-intent leads, and deploy intelligent agents.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-normal text-white bg-[#533afd] hover:bg-[#4434d4] active:bg-[#2e2b8c] px-6 py-3.5 rounded-full transition-all duration-150 shadow-sm hover:shadow-md min-h-[44px]"
            >
              Book a strategy call
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#thesis"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-light text-[#273951] hover:text-[#533afd] bg-white border border-[#e3e8ee] px-5 py-3.5 rounded-full transition-all min-h-[44px]"
            >
              Read our founding story
            </a>
          </motion.div>

          {/* Highlights */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-[#64748d]">
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[#533afd]" /> 100% Client IP Ownership
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#533afd]" /> Fixed-Scope Deliverables
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#533afd]" /> Direct Architect Access
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
