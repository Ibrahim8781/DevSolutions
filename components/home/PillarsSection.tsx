"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Cpu, Palette, TrendingUp, ArrowUpRight, AlertTriangle } from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

interface PillarData {
  id: string;
  pillarNumber: string;
  title: string;
  lead: string;
  icon: typeof Cpu;
  accentColor: string;
  tag: string;
  services: {
    name: string;
    description: string;
  }[];
  disclaimer?: string;
}

const pillars: PillarData[] = [
  {
    id: "growth-automation",
    pillarNumber: "01",
    title: "Growth & Automation",
    lead: "Build autonomous backend systems and intelligent agents that eliminate operational drag.",
    icon: Cpu,
    accentColor: "#533afd",
    tag: "Autonomous Operations",
    services: [
      {
        name: "Business Automations",
        description: "Stop doing by hand what software can do at 2am.",
      },
      {
        name: "Integrations",
        description: "Make every tool you already pay for talk to each other.",
      },
      {
        name: "AI Agents",
        description: "An agent that finishes the task, not just chats about it.",
      },
      {
        name: "ChatBot + Call Agents (Voice AI)",
        description: "Answer every call and every DM, at any hour.",
      },
    ],
  },
  {
    id: "marketing-creative",
    pillarNumber: "02",
    title: "Marketing & Creative",
    lead: "High-velocity visual assets, organic discovery, and conversion-engineered web experiences.",
    icon: Palette,
    accentColor: "#ea2261",
    tag: "Revenue Engines",
    services: [
      {
        name: "SEO",
        description: "Show up before your competitors do.",
      },
      {
        name: "Graphic Design + Video Editing",
        description: "Creative output on a subscription, not a project quote.",
      },
      {
        name: "Web Design + Branding + Lead Gen",
        description: "A site built to convert, not just to look nice.",
      },
    ],
  },
  {
    id: "trading-technologies",
    pillarNumber: "03",
    title: "Trading Technologies",
    lead: "Custom algorithmic execution bots, webhook automation, and disciplined quantitative setups.",
    icon: TrendingUp,
    accentColor: "#9b6829",
    tag: "Quant Automation",
    services: [
      {
        name: "Trading Bots & Strategy Automation",
        description: "Strategy automation for traders who don't want to babysit charts.",
      },
    ],
    disclaimer:
      "Important Notice: Trading bot development and automated strategy execution are technical tools provided for self-directed traders. DevSolutions does not provide investment or financial advice. Past automated performance does not guarantee future financial results.",
  },
];

function PillarCard({ pillar }: { pillar: PillarData }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -6; // max 6 deg
    const rotY = ((x - centerX) / centerX) * 6;
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const Icon = pillar.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: prefersReducedMotion
          ? "none"
          : `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className="relative flex flex-col justify-between rounded-2xl bg-white border border-[#e3e8ee] p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,55,112,0.08)] hover:shadow-[0_8px_24px_rgba(0,55,112,0.12)] transition-shadow duration-300"
    >
      <div className="space-y-6">
        {/* Top Header Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm"
              style={{ backgroundColor: pillar.accentColor }}
            >
              <Icon className="w-5 h-5" />
            </div>
            <span className="text-xs font-mono tracking-wider text-[#64748d]">
              PILLAR {pillar.pillarNumber}
            </span>
          </div>

          <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#f6f9fc] text-[#273951] border border-[#e3e8ee]">
            {pillar.tag}
          </span>
        </div>

        {/* Title & Description */}
        <div className="space-y-2">
          <h3 className="text-2xl font-light text-[#0d253d] tracking-[-0.6px]">
            {pillar.title}
          </h3>
          <p className="text-[15px] font-light leading-relaxed text-[#64748d]">
            {pillar.lead}
          </p>
        </div>

        {/* Sub-services Breakdown */}
        <div className="pt-2 border-t border-[#e3e8ee] space-y-4">
          <h4 className="text-xs uppercase tracking-wider font-medium text-[#273951]">
            Included Capabilities
          </h4>
          <div className="space-y-3">
            {pillar.services.map((svc) => (
              <div
                key={svc.name}
                className="p-3 rounded-lg bg-[#f6f9fc]/80 border border-[#e3e8ee]/80 space-y-1 hover:bg-white hover:border-[#533afd]/30 transition-all duration-150"
              >
                <div className="text-[14px] font-medium text-[#0d253d]">
                  {svc.name}
                </div>
                <p className="text-[13px] font-light text-[#64748d] leading-snug">
                  &ldquo;{svc.description}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mandatory Financial Disclaimer for Pillar 3 */}
        {pillar.disclaimer && (
          <div className="mt-4 p-3.5 rounded-lg bg-amber-50/70 border border-amber-200/80 text-[12px] leading-relaxed text-amber-900 space-y-1">
            <div className="flex items-center gap-1.5 font-medium text-amber-800">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
              Compliance Note
            </div>
            <p className="font-light">{pillar.disclaimer}</p>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="pt-8 mt-6 border-t border-[#e3e8ee]">
        <Link
          href={`/services#${pillar.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[#533afd] hover:text-[#4434d4] group"
        >
          <span>Explore {pillar.title} in detail</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}

export default function PillarsSection() {
  return (
    <section id="pillars" className="w-full py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-medium tracking-wider text-[#533afd]">
            Core Service Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-light text-[#0d253d] tracking-[-0.96px] leading-[1.12]">
            Three specialized pillars. One cohesive execution team.
          </h2>
          <p className="text-base sm:text-lg font-light text-[#64748d] leading-relaxed">
            Instead of hiring fragmented vendors or managing internal dev overhead, partner with a full-stack growth and automation engine.
          </p>
        </div>

        {/* Pillars 3-up Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
