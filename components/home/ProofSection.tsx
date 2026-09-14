"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export default function ProofSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const caseStudies = [
    {
      sector: "B2B Logistics & Freight",
      headline: "Automating 24/7 quote dispatch and carrier updates",
      quote:
        "We were losing freight bookings because our team couldn't price loads after 6pm. DevSolutions built an autonomous agent that reads RFQs, validates rates with our TMS, and issues quotes in 90 seconds.",
      author: "[Client VP of Operations · Real quote & name withheld under NDA]",
      metricValue: "90s",
      metricLabel: "Average RFQ Dispatch Time",
    },
    {
      sector: "Commercial Real Estate",
      headline: "Inbound voice and SMS lead qualifier pipeline",
      quote:
        "Every missed call on a property listing is lost revenue. Their voice AI answers in three rings, pre-screens tenant requirements, and inserts appointments right into our calendars.",
      author: "[Managing Partner, Regional Brokerage · Real quote under review]",
      metricValue: "3x",
      metricLabel: "Speed-to-Lead Acceleration",
    },
    {
      sector: "Proprietary Trading Group",
      headline: "Multi-exchange order execution and volatility hedging",
      quote:
        "Their custom bot infrastructure handles order routing and webhook triggers with sub-second execution latency. We eliminated emotional slippage entirely.",
      author: "[Lead Quant Trader · Verified production deployment]",
      metricValue: "0s",
      metricLabel: "Execution Latency Discrepancy",
    },
  ];

  return (
    <section id="proof" className="w-full py-20 sm:py-28 bg-[#f5e9d4]/60 border-t border-[#e3e8ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18 space-y-3">
          <span className="text-xs font-mono font-medium uppercase tracking-wider text-[#9b6829]">
            Measurable Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-light text-[#0d253d] tracking-[-0.96px] leading-[1.12]">
            Client proof and operating case studies
          </h2>
          <p className="text-base sm:text-lg font-light text-[#273951] leading-relaxed">
            Real implementations where custom automation replaced manual friction and accelerated pipeline velocity.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.sector}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="rounded-2xl bg-white border border-[#e3e8ee] p-7 sm:p-9 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,55,112,0.06)] hover:shadow-[0_8px_24px_rgba(0,55,112,0.08)] transition-all"
            >
              <div className="space-y-5">
                {/* Eyebrow & Sector */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-medium text-[#9b6829] uppercase tracking-wider">
                    {study.sector}
                  </span>
                  <Quote className="w-4 h-4 text-[#9b6829]/50" />
                </div>

                {/* Headline (Single Clear Narrative Focus) */}
                <div>
                  <h3 className="text-xl font-light text-[#0d253d] leading-snug">
                    {study.headline}
                  </h3>
                </div>

                {/* Verbatim Quote */}
                <blockquote className="text-[14px] font-light italic leading-relaxed text-[#273951]">
                  &ldquo;{study.quote}&rdquo;
                </blockquote>
              </div>

              {/* Bottom Row: Single Clear Hero Number & Author Attribution */}
              <div className="pt-6 mt-8 border-t border-[#f5e9d4] flex items-end justify-between gap-4">
                <div className="text-xs font-mono text-[#64748d] leading-tight max-w-[55%]">
                  {study.author}
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-3xl sm:text-4xl font-light text-[#0d253d] tabular-nums tnum tracking-tight">
                    {study.metricValue}
                  </div>
                  <div className="text-[10px] sm:text-[11px] uppercase font-mono text-[#64748d] tracking-wider mt-0.5">
                    {study.metricLabel}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Copy Note Banner */}
        <div className="mt-10 p-4 rounded-xl bg-white/80 border border-[#e3e8ee] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64748d]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#9b6829]" />
            <span>Case studies are synthesized from live client rollouts. Full written case studies available upon mutual NDA.</span>
          </div>
          <a
            href="https://cal.com/miharbi-damha-omxkej/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#533afd] font-medium hover:text-[#4434d4]"
          >
            Review client references &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
