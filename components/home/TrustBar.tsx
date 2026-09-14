"use client";

import { CheckCircle2 } from "lucide-react";

export default function TrustBar() {
  const metrics = [
    { label: "Automations Shipped", value: "240+" },
    { label: "Hours Saved Monthly", value: "6,200+" },
    { label: "Agent Uptime", value: "99.98%" },
    { label: "Enterprise Integrations", value: "45+" },
    { label: "Manual Data Entry Cut", value: "85%" },
    { label: "Avg. Deployment Time", value: "14 Days" },
  ];

  const tools = [
    "OpenAI / Anthropic",
    "PostgreSQL",
    "Zapier / Make",
    "Stripe",
    "HubSpot",
    "Salesforce",
    "Pinecone",
    "Slack API",
  ];

  return (
    <section className="w-full border-y border-[#e3e8ee] bg-[#f6f9fc]/60 py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-xs uppercase font-medium tracking-wider text-[#64748d]">
          <CheckCircle2 className="w-4 h-4 text-[#533afd]" />
          <span>Operational Benchmark Metrics</span>
        </div>
        <div className="text-xs text-[#64748d] font-mono">
          [Production statistics · Client logos masked under mutual NDA]
        </div>
      </div>

      {/* Infinite Scrolling Marquee Track */}
      <div className="relative w-full overflow-hidden">
        {/* Left and Right Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f6f9fc] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f6f9fc] to-transparent z-10" />

        <div className="animate-marquee flex items-center gap-6 sm:gap-8">
          {/* First set */}
          {metrics.map((item, idx) => (
            <div
              key={`metric-1-${idx}`}
              className="flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-[#e3e8ee] shadow-[0_1px_3px_rgba(0,55,112,0.05)] whitespace-nowrap"
            >
              <span className="text-base font-normal text-[#533afd] tabular-nums tnum">
                {item.value}
              </span>
              <span className="text-xs font-light text-[#273951]">{item.label}</span>
            </div>
          ))}

          {/* Connected Tech Badges */}
          {tools.map((tool, idx) => (
            <div
              key={`tool-1-${idx}`}
              className="px-3 py-1.5 rounded-full bg-[#e3e8ee]/40 text-[#64748d] text-xs font-mono whitespace-nowrap"
            >
              {tool}
            </div>
          ))}

          {/* Second duplicate set for seamless infinite loop */}
          {metrics.map((item, idx) => (
            <div
              key={`metric-2-${idx}`}
              className="flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-[#e3e8ee] shadow-[0_1px_3px_rgba(0,55,112,0.05)] whitespace-nowrap"
            >
              <span className="text-base font-normal text-[#533afd] tabular-nums tnum">
                {item.value}
              </span>
              <span className="text-xs font-light text-[#273951]">{item.label}</span>
            </div>
          ))}

          {tools.map((tool, idx) => (
            <div
              key={`tool-2-${idx}`}
              className="px-3 py-1.5 rounded-full bg-[#e3e8ee]/40 text-[#64748d] text-xs font-mono whitespace-nowrap"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
