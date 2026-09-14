"use client";

import { Palette, CheckCircle2, Play, ArrowRight, Search, Film, Globe } from "lucide-react";

export default function PillarMarketingCreative() {
  const bookingUrl = "https://cal.com/miharbi-damha-omxkej/15min";

  const services = [
    {
      id: "seo",
      number: "02.1",
      name: "SEO",
      tagline: "Show up before your competitors do.",
      audience:
        "B2B firms and service providers invisible in organic search results, forced to overspend on rising pay-per-click ad auctions for inbound pipeline.",
      icon: Search,
      included: [
        "Rigorous technical audit resolving crawl errors, broken redirects, and index bloat",
        "Programmatic landing page architecture capturing high-intent long-tail commercial queries",
        "Semantic entity mapping, structured JSON-LD schema, and internal linking graphs",
        "Sub-second Core Web Vitals optimization directly benefiting search ranking algorithms",
      ],
      stack: ["Next.js SSG", "Ahrefs / Semrush", "Schema.org", "Google Search Console"],
      mediaLabel: "Programmatic SEO Architecture & SERP Ranking Grid",
    },
    {
      id: "graphic-design-video",
      number: "02.2",
      name: "Graphic Design + Video Editing",
      tagline: "Creative output on a subscription, not a project quote.",
      audience:
        "Growth teams requiring an ongoing velocity of high-performing ad creatives, polished product videos, and executive presentations without hiring in-house staff.",
      icon: Film,
      included: [
        "Weekly batches of conversion-tested paid social ad creative variations (Meta, LinkedIn)",
        "Short-form vertical video cutting with hook-optimized pacing, B-roll, and kinetic typography",
        "Investor slide decks, sales one-pagers, and gated lead magnet whitepapers",
        "Cohesive design system maintenance with accessible Figma component libraries",
      ],
      stack: ["Figma", "Adobe Premiere Pro", "After Effects", "DaVinci Resolve"],
      mediaLabel: "Creative Asset & Video Production Pipeline",
    },
    {
      id: "web-design-branding",
      number: "02.3",
      name: "Web Design + Branding + Lead Generation",
      tagline: "A site built to convert, not just to look nice.",
      audience:
        "Companies whose current web presence is a static brochure that fails to educate non-technical buyers or generate qualified inbound sales conversations.",
      icon: Globe,
      included: [
        "Modern Next.js web application architecture with tailored design tokens and animations",
        "Outcome-first copywriting and clear visual hierarchy engineered for B2B conversions",
        "Frictionless booking flows and qualification funnels embedded directly on the canvas",
        "Full-funnel analytics instrumentation tracking visitor drop-off and conversion attribution",
      ],
      stack: ["Next.js (App Router)", "Tailwind CSS", "TypeScript", "Framer Motion"],
      mediaLabel: "High-Conversion Web Experience & Funnel Architecture",
    },
  ];

  return (
    <section id="marketing-creative" className="w-full py-20 sm:py-28 bg-[#f6f9fc]/60 border-b border-[#e3e8ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pillar Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ea2261]/10 text-[#ea2261] text-xs font-mono font-medium">
            <Palette className="w-3.5 h-3.5" />
            PILLAR 02
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-light text-[#0d253d] tracking-[-1px] leading-[1.1]">
            Marketing & Creative
          </h2>
          <p className="text-base sm:text-lg font-light text-[#64748d] leading-relaxed">
            Turn attention into verified pipeline through compounding search visibility, high-cadence creative production, and conversion-engineered web design.
          </p>
        </div>

        {/* 3 Expanded Sub-Services */}
        <div className="space-y-16">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                id={svc.id}
                className="rounded-2xl bg-white border border-[#e3e8ee] p-6 sm:p-10 shadow-[0_1px_3px_rgba(0,55,112,0.06)] hover:shadow-[0_8px_24px_rgba(0,55,112,0.08)] transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Scope & Capabilities */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#ea2261]/10 text-[#ea2261] flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-mono text-[#64748d]">SERVICE {svc.number}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-light text-[#0d253d] tracking-[-0.6px]">
                        {svc.name}
                      </h3>
                      <p className="text-base font-normal text-[#ea2261] italic">
                        &ldquo;{svc.tagline}&rdquo;
                      </p>
                    </div>

                    {/* Who this is for */}
                    <div className="p-4 rounded-xl bg-[#f6f9fc] border border-[#e3e8ee]/80 space-y-1.5">
                      <div className="text-xs uppercase font-medium tracking-wider text-[#273951]">
                        Who this is for
                      </div>
                      <p className="text-[14px] font-light text-[#64748d] leading-relaxed">
                        {svc.audience}
                      </p>
                    </div>

                    {/* What's included */}
                    <div className="space-y-3">
                      <div className="text-xs uppercase font-medium tracking-wider text-[#273951]">
                        What&apos;s included in deployment
                      </div>
                      <ul className="space-y-2.5">
                        {svc.included.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-[14px] font-light text-[#273951]">
                            <CheckCircle2 className="w-4 h-4 text-[#ea2261] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Stack Tags */}
                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-[#64748d] mr-1">Stack:</span>
                      {svc.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-[#e3e8ee]/50 text-xs font-mono text-[#273951]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action CTA */}
                    <div className="pt-4">
                      <a
                        href={bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-normal text-white bg-[#533afd] hover:bg-[#4434d4] active:bg-[#2e2b8c] px-5 py-2.5 rounded-full transition-all shadow-sm"
                      >
                        <span>Book a call on {svc.name}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: 16:9 Reserved Media / Mockup Frame */}
                  <div className="lg:col-span-5 w-full">
                    <div className="rounded-xl border border-[#e3e8ee] p-2 bg-[#f6f9fc] shadow-sm">
                      {/* Window Header Chrome */}
                      <div className="flex items-center justify-between px-2 py-1.5 border-b border-[#e3e8ee] mb-2 text-[11px] font-mono text-[#64748d]">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ea2261]/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#9b6829]/60" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <span>preview-{svc.id}.sim</span>
                      </div>

                      {/* 16:9 Media Box */}
                      <div className="relative aspect-video w-full rounded-lg bg-[#0d253d] overflow-hidden flex flex-col items-center justify-center text-center p-4 group">
                        {/* Subtle Background Pattern */}
                        <div
                          className="absolute inset-0 opacity-15"
                          style={{
                            backgroundImage: "radial-gradient(circle at 1px 1px, #ea2261 1px, transparent 0)",
                            backgroundSize: "20px 20px",
                          }}
                        />

                        {/* Centered Mock Badge / Play */}
                        <div className="relative z-10 w-12 h-12 rounded-full bg-[#ea2261] text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform cursor-pointer">
                          <Play className="w-5 h-5 ml-0.5 fill-white" />
                        </div>
                        <div className="relative z-10 mt-3 text-xs font-light text-white">
                          {svc.mediaLabel}
                        </div>
                        <div className="relative z-10 mt-0.5 text-[10px] font-mono text-[#a8c3de]">
                          [Demo Video Slot • 16:9 Lazy Loaded]
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
