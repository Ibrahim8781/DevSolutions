"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers } from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export default function HeroSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const bookingUrl = "https://cal.com/miharbi-damha-omxkej/15min";

  return (
    <section className="relative z-10 w-full pt-10 pb-20 sm:pt-14 sm:pb-28 lg:pt-16 lg:pb-32 border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2">
            <span className="tag-category">
              Applied AI & Automation Studio
            </span>
          </div>

          {/* Headline & Subhead with tight local text legibility scrim */}
          <div className="relative inline-block w-full">
            <div
              className="pointer-events-none absolute -inset-x-6 -inset-y-4 rounded-3xl z-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(11, 11, 14, 0.90) 0%, rgba(11, 11, 14, 0.65) 60%, transparent 100%)",
              }}
              aria-hidden="true"
            />
            <div className="relative z-10 space-y-6">
              {/* Display-XXL Headline */}
              <h1 className="display-xxl text-ink text-balance">
                We build automations and AI agents that handle operations for businesses without in-house engineers.
              </h1>

              {/* Subhead in Body-LG */}
              <p className="body-lg text-ink-secondary max-w-2xl mx-auto">
                From connecting fragmented software tools to deploying autonomous agents, we take repetitive manual workflows off your plate.
              </p>
            </div>
          </div>

          {/* Two CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto gap-2"
            >
              <span>Book a strategy call</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#services"
              className="btn-secondary w-full sm:w-auto gap-2"
            >
              <Layers className="w-4 h-4 text-ink-secondary" />
              <span>See our services</span>
            </a>
          </div>

          {/* Quiet Trust Notes */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 caption text-ink-mute">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> 15-minute diagnostic call
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Direct technical builder
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-success" /> Fixed-scope proposal
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
