"use client";

import { Search, Hammer, Rocket, LineChart } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Audit & Architecture",
      subtitle: "Day 1 to 5",
      description:
        "We dissect your existing software subscriptions, manual workflows, and communication silos to pinpoint where time and pipeline drop off.",
      icon: Search,
    },
    {
      step: "02",
      title: "Build & Integrate",
      subtitle: "Day 6 to 14",
      description:
        "We engineer custom automations, wire API integrations, and train specialized AI agents against your real business documentation and voice.",
      icon: Hammer,
    },
    {
      step: "03",
      title: "Launch & Guardrail",
      subtitle: "Day 15 to 20",
      description:
        "We run sandbox simulations, establish strict automated fallback procedures, onboard your staff, and deploy live with zero operational downtime.",
      icon: Rocket,
    },
    {
      step: "04",
      title: "Monitor & Optimize",
      subtitle: "Ongoing Iteration",
      description:
        "We continuously review exception logs, refine prompt accuracy, adapt to third-party API changes, and scale throughput as your demand expands.",
      icon: LineChart,
    },
  ];

  return (
    <section id="how-we-work" className="w-full py-20 sm:py-28 bg-[#f6f9fc] border-t border-[#e3e8ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18 space-y-3">
          <span className="text-xs font-medium uppercase tracking-wider text-[#533afd]">
            Delivery Lifecycle
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-light text-[#0d253d] tracking-[-0.96px] leading-[1.12]">
            How we work with you
          </h2>
          <p className="text-base sm:text-lg font-light text-[#64748d] leading-relaxed">
            A clear four-stage engagement designed to deliver functional systems in days, not months.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-2xl bg-white border border-[#e3e8ee] p-6 sm:p-7 shadow-[0_1px_3px_rgba(0,55,112,0.06)] flex flex-col justify-between hover:border-[#533afd]/40 transition-colors"
              >
                <div className="space-y-4">
                  {/* Step Eyebrow */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-[#b9b9f9]/50 text-[#4434d4]">
                      Step {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#f6f9fc] flex items-center justify-center text-[#533afd]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-light text-[#0d253d] tracking-[-0.2px]">
                      {item.title}
                    </h3>
                    <div className="text-xs font-medium text-[#64748d]">
                      {item.subtitle}
                    </div>
                  </div>

                  <p className="text-[14px] font-light text-[#64748d] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Progress Indicator */}
                <div className="pt-6 mt-4 border-t border-[#f6f9fc] flex items-center gap-2 text-xs font-mono text-[#64748d]">
                  <span>Phase {index + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
