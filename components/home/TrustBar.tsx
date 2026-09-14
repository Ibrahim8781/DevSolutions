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
    <section className="w-full border-y border-[#e3e8ee] bg-[#f6f9fc]/70 py-10 sm:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Row */}
        <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs uppercase font-medium tracking-wider text-[#64748d]">
            <CheckCircle2 className="w-4 h-4 text-[#533afd]" />
            <span>Operational Benchmark Metrics</span>
          </div>
          <div className="text-xs text-[#64748d] font-mono">
            [Production statistics · Client logos masked under mutual NDA]
          </div>
        </div>

        {/* Primary Row: 6 Metric Chips (The Hero Row of this section) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 py-2">
          {metrics.map((item, idx) => (
            <div
              key={`metric-hero-${idx}`}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#e3e8ee] shadow-[0_1px_3px_rgba(0,55,112,0.06)] hover:border-[#533afd]/30 transition-colors"
            >
              <span className="text-base sm:text-[17px] font-normal text-[#533afd] tabular-nums tnum tracking-tight">
                {item.value}
              </span>
              <span className="text-xs font-light text-[#273951]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Secondary Row: 8 Tech/Logo Names in Continuous Marquee with Gradient Mask */}
        <div className="mt-8 pt-6 border-t border-[#e3e8ee]/60">
          <div className="flex items-center justify-between mb-3 text-[11px] font-mono uppercase tracking-wider text-[#64748d]/80 px-2">
            <span>Supported Ecosystem & API Connectors</span>
            <span className="hidden sm:inline">Continuous Sync</span>
          </div>

          <div
            className="relative w-full overflow-hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <div className="animate-marquee flex items-center gap-8 sm:gap-12 py-1">
              {/* Set 1 */}
              {tools.map((tool, idx) => (
                <div
                  key={`tool-row1-${idx}`}
                  className="flex items-center gap-8 sm:gap-12 whitespace-nowrap"
                >
                  <span className="text-xs font-mono text-[#64748d] hover:text-[#0d253d] transition-colors">
                    {tool}
                  </span>
                  <span className="text-[#e3e8ee] text-xs select-none">•</span>
                </div>
              ))}

              {/* Set 2 (Seamless loop duplicate) */}
              {tools.map((tool, idx) => (
                <div
                  key={`tool-row2-${idx}`}
                  className="flex items-center gap-8 sm:gap-12 whitespace-nowrap"
                >
                  <span className="text-xs font-mono text-[#64748d] hover:text-[#0d253d] transition-colors">
                    {tool}
                  </span>
                  <span className="text-[#e3e8ee] text-xs select-none">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
