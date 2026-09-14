import { Target, Unlock, Cog, FileCheck2, HeartHandshake } from "lucide-react";

export default function OperatingValues() {
  const values = [
    {
      number: "01",
      title: "Outcome First, Mechanism Second",
      description:
        "We measure our success by manual hours eliminated, pipeline velocity accelerated, and operational errors prevented — never by how complex our code looks.",
      icon: Target,
      accent: "#533afd",
    },
    {
      number: "02",
      title: "Zero Vendor Lock-In",
      description:
        "Every line of code, cloud database, webhook listener, and AI prompt lives inside your organization's infrastructure. You own 100% of your assets from day one.",
      icon: Unlock,
      accent: "#ea2261",
    },
    {
      number: "03",
      title: "Deterministic Production Engineering",
      description:
        "We build systems engineered for real-world chaos: automated error alerts, retry queues, schema validation, and safe fallback procedures to guarantee continuous uptime.",
      icon: Cog,
      accent: "#9b6829",
    },
    {
      number: "04",
      title: "Transparent, Milestone-Based Scoping",
      description:
        "No open-ended billable hours or ambiguous retainers. Every project is scoped with precise deliverables, test benchmarks, and an all-inclusive fixed price.",
      icon: FileCheck2,
      accent: "#533afd",
    },
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-white border-b border-[#e3e8ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#533afd]/10 text-[#533afd] text-xs font-mono font-medium">
            <HeartHandshake className="w-3.5 h-3.5" />
            OPERATING CODE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-light text-[#0d253d] tracking-[-1px] leading-[1.1]">
            Our core operating principles
          </h2>
          <p className="text-base sm:text-lg font-light text-[#64748d] leading-relaxed">
            How we make technical decisions, protect our clients&apos; interests, and deliver reliable software without corporate overhead.
          </p>
        </div>

        {/* 4 Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className="rounded-2xl bg-[#f6f9fc] border border-[#e3e8ee] p-8 space-y-4 hover:border-[#533afd]/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm"
                    style={{ backgroundColor: val.accent }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-medium text-[#64748d]">
                    PRINCIPLE {val.number}
                  </span>
                </div>

                <h3 className="text-2xl font-light text-[#0d253d] tracking-[-0.3px]">
                  {val.title}
                </h3>

                <p className="text-[15px] font-light leading-relaxed text-[#64748d]">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
