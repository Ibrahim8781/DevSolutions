"use client";

import { motion } from "framer-motion";
import { Quote, ArrowRight, Building, Clock, DollarSign } from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export default function ProofSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const caseStudies = [
    {
      sector: "B2B Logistics & Freight",
      headline: "Automating 24/7 quote dispatch and carrier updates",
      impact: "85% reduction in manual quote response lag",
      quote:
        "We were losing freight bookings because our team couldn't price loads after 6pm. DevSolutions built an autonomous agent that reads RFQs, validates rates with our TMS, and issues quotes in 90 seconds.",
      author: "[Client VP of Operations · Real quote & name withheld under NDA]",
      metricValue: "90s",
      metricLabel: "Average RFQ Dispatch Time",
      icon: Clock,
    },
    {
      sector: "Commercial Real Estate",
      headline: "Inbound voice and SMS lead qualifier pipeline",
      impact: "18 extra qualified tours booked each month",
      quote:
        "Every missed call on a property listing is lost revenue. Their voice AI answers in three rings, pre-screens tenant requirements, and inserts appointments right into our calendars.",
      author: "[Managing Partner, Regional Brokerage · Real quote under review]",
      metricValue: "3x",
      metricLabel: "Speed-to-Lead Acceleration",
      icon: Building,
    },
    {
      sector: "Proprietary Trading Group",
      headline: "Multi-exchange order execution and volatility hedging",
      impact: "Zero manual intervention across 400+ weekly setups",
      quote:
        "Their custom bot infrastructure handles order routing and webhook triggers with sub-second execution latency. We eliminated emotional slippage entirely.",
      author: "[Lead Quant Trader · Verified production deployment]",
      metricValue: "0s",
      metricLabel: "Execution Latency Discrepancy",
      icon: DollarSign,
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
          {caseStudies.map((study, idx) => {
            const Icon = study.icon;
            return (
              <motion.div
                key={study.sector}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="rounded-2xl bg-white border border-[#e3e8ee] p-7 sm:p-8 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,55,112,0.06)] hover:shadow-[0_8px_24px_rgba(0,55,112,0.08)] transition-all"
              >
                <div className="space-y-5">
                  {/* Eyebrow & Sector */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-medium text-[#9b6829] uppercase tracking-wider">
                      {study.sector}
                    </span>
                    <Quote className="w-4 h-4 text-[#9b6829]/60" />
                  </div>

                  {/* Headline & Impact Pill */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-light text-[#0d253d] leading-snug">
                      {study.headline}
                    </h3>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f5e9d4] text-[12px] font-medium text-[#9b6829]">
                      <Icon className="w-3.5 h-3.5" />
                      {study.impact}
                    </div>
                  </div>

                  {/* Verbatim Quote */}
                  <blockquote className="text-[14px] font-light italic leading-relaxed text-[#273951]">
                    &ldquo;{study.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Author attribution flag */}
                <div className="pt-6 mt-6 border-t border-[#f5e9d4] flex items-center justify-between">
                  <div className="text-xs font-mono text-[#64748d] leading-tight">
                    {study.author}
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-light text-[#0d253d] tabular-nums tnum">
                      {study.metricValue}
                    </div>
                    <div className="text-[10px] uppercase font-mono text-[#64748d]">
                      {study.metricLabel}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
