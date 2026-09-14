"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Cpu, Palette, TrendingUp } from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export default function ServicesHero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const bookingUrl = "https://cal.com/miharbi-damha-omxkej/15min";

  const pillarTabs = [
    {
      id: "growth-automation",
      title: "Growth & Automation",
      count: "4 Services",
      icon: Cpu,
      color: "#533afd",
      bg: "bg-[#533afd]/10 text-[#533afd] hover:bg-[#533afd]/20",
    },
    {
      id: "marketing-creative",
      title: "Marketing & Creative",
      count: "3 Services",
      icon: Palette,
      color: "#ea2261",
      bg: "bg-[#ea2261]/10 text-[#ea2261] hover:bg-[#ea2261]/20",
    },
    {
      id: "trading-technologies",
      title: "Trading Technologies",
      count: "1 Service",
      icon: TrendingUp,
      color: "#9b6829",
      bg: "bg-[#9b6829]/10 text-[#9b6829] hover:bg-[#9b6829]/20",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-[#e3e8ee] bg-gradient-to-b from-[#f6f9fc] to-white">
      {/* Subtle Mesh Background Wash */}
      <div className="gradient-mesh-container opacity-60" aria-hidden="true">
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
              Capabilities Directory
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[54px] font-light text-[#0d253d] tracking-[-1.2px] leading-[1.08]"
          >
            Engineering the systems, revenue engines, and automated strategies that scale your business.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl font-light text-[#273951] max-w-3xl mx-auto leading-relaxed"
          >
            Our work is strictly organized around three specialized pillars. Every service can deploy as a standalone engagement or integrate as a unified operating system.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="pt-2 flex items-center justify-center"
          >
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm font-normal text-white bg-[#533afd] hover:bg-[#4434d4] active:bg-[#2e2b8c] px-6 py-3 rounded-full transition-all duration-150 shadow-sm hover:shadow-md"
            >
              Book a strategy call
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Interactive Quick-Jump Navigation Tabs */}
        <div className="mt-12 pt-8 border-t border-[#e3e8ee]/80 max-w-4xl mx-auto">
          <div className="text-center text-xs font-mono uppercase tracking-wider text-[#64748d] mb-4">
            Jump to pillar
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {pillarTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <a
                  key={tab.id}
                  href={`#${tab.id}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#e3e8ee] shadow-[0_1px_3px_rgba(0,55,112,0.06)] hover:border-[#533afd]/40 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`p-2 rounded-lg ${tab.bg}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-[#0d253d] group-hover:text-[#533afd] transition-colors">
                      {tab.title}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#64748d] group-hover:text-[#533afd]">
                    {tab.count} &darr;
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
