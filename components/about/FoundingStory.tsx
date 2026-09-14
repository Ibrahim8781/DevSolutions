import { Layers, Zap, Network, ArrowRight } from "lucide-react";

export default function FoundingStory() {
  const problems = [
    {
      title: "Marketing Agencies Live in a Silo",
      description:
        "They design aesthetically pleasing landing pages and run ad campaigns, but have zero technical understanding of backend databases, webhook payloads, or CRM data reconciliation.",
    },
    {
      title: "Traditional Dev Shops Over-Engineer",
      description:
        "They quote six-month timelines and six-figure budgets to build proprietary systems from scratch that take months to maintain, instead of leveraging resilient modern APIs.",
    },
    {
      title: "Automation Freelancers Build Fragile Zaps",
      description:
        "They connect apps with no schema validation, zero automated error retries, and no fallback queues — leaving operators stranded when a critical step silently fails.",
    },
  ];

  return (
    <section id="thesis" className="w-full py-20 sm:py-28 bg-white border-b border-[#e3e8ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#533afd]/10 text-[#533afd] text-xs font-mono font-medium">
            <Network className="w-3.5 h-3.5" />
            THE FOUNDING THESIS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-light text-[#0d253d] tracking-[-1px] leading-[1.1]">
            Why this particular mix of services sits under one roof
          </h2>
          <p className="text-base sm:text-lg font-light text-[#64748d] leading-relaxed">
            Every business operator faces the same recurring frustration: juggling five different specialized vendors who cannot make their tools communicate with one another.
          </p>
        </div>

        {/* 3 Silo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problems.map((prob, idx) => (
            <div
              key={prob.title}
              className="rounded-2xl bg-[#f6f9fc] border border-[#e3e8ee] p-7 sm:p-8 space-y-3 relative overflow-hidden"
            >
              <div className="text-xs font-mono text-[#ea2261] font-medium">
                FAILURE MODE 0{idx + 1}
              </div>
              <h3 className="text-xl font-light text-[#0d253d] tracking-[-0.2px]">
                {prob.title}
              </h3>
              <p className="text-[14px] font-light leading-relaxed text-[#64748d]">
                {prob.description}
              </p>
            </div>
          ))}
        </div>

        {/* The Synthesis Highlight Box */}
        <div className="rounded-2xl bg-[#1c1e54] text-white p-8 sm:p-12 relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#533afd]/30 to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-[#b9b9f9]">
              <Zap className="w-3.5 h-3.5 text-[#b9b9f9]" />
              THE DEVSOLUTIONS SYNTHESIS
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-[-0.6px] leading-tight">
              One unified technical engine: Backend Automation, Applied AI, Creative Growth, and Quantitative Execution.
            </h3>

            <p className="text-base sm:text-lg font-light text-[#a8c3de] leading-relaxed">
              We founded DevSolutions on a straightforward principle: when the engineers who build your website also build your lead qualification phone agents, your CRM routing pipelines, and your quantitative strategies, nothing gets lost in translation. Every piece of your operational stack connects seamlessly, and a single team remains accountable for your outcomes.
            </p>

            <div className="pt-2">
              <a
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#b9b9f9] transition-colors"
              >
                <span>Explore the three service pillars in detail</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
