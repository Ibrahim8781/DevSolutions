import { CheckCircle2, XCircle, MinusCircle, ShieldCheck } from "lucide-react";

export default function WhyUsComparison() {
  const comparisonData = [
    {
      metric: "Total Cost & Capital Efficiency",
      inHouse: "$250k–$400k+/yr for 2 mid-level developers plus benefits and recruiters.",
      agencies: "Multiple overlapping $3k–$6k/mo retainers with duplicate management fees.",
      devSolutions: "Fractional engagement model with transparent, fixed-scope milestone pricing.",
      highlight: true,
    },
    {
      metric: "Time to First Deployment",
      inHouse: "3 to 6 months lost to job postings, technical screens, and onboarding.",
      agencies: "4 to 8 weeks of conflicting vendor discovery calls and alignment meetings.",
      devSolutions: "7 to 14 days to deploy active, production-grade automations.",
      highlight: true,
    },
    {
      metric: "Operational & Management Drag",
      inHouse: "You must manage sprint standups, PR reviews, and technical blockers.",
      agencies: "You become the mediator when the web agency blames the automation consultant.",
      devSolutions: "Single accountable engineering partner with direct architect communication.",
      highlight: false,
    },
    {
      metric: "Cross-Functional Capabilities",
      inHouse: "Engineers rarely know conversion copywriting, video editing, or paid funnels.",
      agencies: "Designers refuse to touch databases; dev shops refuse to write marketing copy.",
      devSolutions: "Unified execution across backend APIs, AI agents, conversion design, and quant.",
      highlight: false,
    },
    {
      metric: "Intellectual Property & Portability",
      inHouse: "You own the code, but knowledge is locked inside employees' heads.",
      agencies: "Often locked into proprietary SaaS portals or custom CMS templates.",
      devSolutions: "100% client-owned code, workflows, and documentation on your own cloud.",
      highlight: true,
    },
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-[#f6f9fc]/80 border-b border-[#e3e8ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#533afd]/10 text-[#533afd] text-xs font-mono font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            STRATEGIC COMPARISON
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-light text-[#0d253d] tracking-[-1px] leading-[1.1]">
            Why DevSolutions vs. the common alternatives
          </h2>
          <p className="text-base sm:text-lg font-light text-[#64748d] leading-relaxed">
            Hiring full-time engineers is expensive and slow. Managing five separate boutique agencies is exhausting. Here is how our operational model compares:
          </p>
        </div>

        {/* 3 Column Comparison Cards (Mobile Stack, Desktop Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Option 1: In-House */}
          <div className="rounded-2xl bg-white border border-[#e3e8ee] p-7 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium">
                <MinusCircle className="w-3.5 h-3.5 text-slate-500" />
                ALTERNATIVE 01
              </div>
              <h3 className="text-2xl font-light text-[#0d253d]">
                Hiring In-House
              </h3>
              <p className="text-sm font-light text-[#64748d] leading-relaxed">
                Building an internal technical department from scratch.
              </p>

              <div className="pt-4 border-t border-[#e3e8ee] space-y-4 text-[13px] font-light text-[#273951]">
                <div>
                  <strong className="font-medium text-[#0d253d] block">Cost:</strong>
                  $250k–$400k+/yr for salary, recruiting fees, equity, and benefits.
                </div>
                <div>
                  <strong className="font-medium text-[#0d253d] block">Speed:</strong>
                  3 to 6 months of interviewing and onboarding lag before output.
                </div>
                <div>
                  <strong className="font-medium text-[#0d253d] block">Risk:</strong>
                  High dependency on individual employees; single point of failure if they leave.
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-[#e3e8ee] text-xs font-mono text-slate-500">
              High fixed payroll overhead
            </div>
          </div>

          {/* Option 2: 5 Separate Agencies */}
          <div className="rounded-2xl bg-white border border-[#e3e8ee] p-7 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-mono font-medium border border-amber-200">
                <XCircle className="w-3.5 h-3.5 text-amber-600" />
                ALTERNATIVE 02
              </div>
              <h3 className="text-2xl font-light text-[#0d253d]">
                Juggling 4–5 Agencies
              </h3>
              <p className="text-sm font-light text-[#64748d] leading-relaxed">
                Hiring a web shop, a growth agency, an automation freelancer, and a copywriter.
              </p>

              <div className="pt-4 border-t border-[#e3e8ee] space-y-4 text-[13px] font-light text-[#273951]">
                <div>
                  <strong className="font-medium text-[#0d253d] block">Cost:</strong>
                  Multiple overlapping $3k–$6k/mo retainers with duplicate account managers.
                </div>
                <div>
                  <strong className="font-medium text-[#0d253d] block">Speed:</strong>
                  Continuous delays while vendors debate whose API failed or whose scope it is.
                </div>
                <div>
                  <strong className="font-medium text-[#0d253d] block">Risk:</strong>
                  You become an unpaid project manager mediating between disconnected systems.
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-[#e3e8ee] text-xs font-mono text-amber-700">
              Fragmented accountability & silos
            </div>
          </div>

          {/* Option 3: DevSolutions (Featured) */}
          <div className="rounded-2xl bg-[#1c1e54] text-white border-2 border-[#533afd] p-7 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-[#533afd] text-white text-[11px] font-mono rounded-bl-lg font-medium">
              RECOMMENDED MODEL
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#533afd]/30 text-[#b9b9f9] text-xs font-mono font-medium border border-[#533afd]/50">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#b9b9f9]" />
                THE DEVSOLUTIONS MODEL
              </div>
              <h3 className="text-2xl font-light text-white">
                DevSolutions Partner
              </h3>
              <p className="text-sm font-light text-[#a8c3de] leading-relaxed">
                A unified technical growth and automation team working directly for you.
              </p>

              <div className="pt-4 border-t border-white/10 space-y-4 text-[13px] font-light text-[#a8c3de]">
                <div>
                  <strong className="font-medium text-white block">Cost:</strong>
                  Fractional investment with transparent milestone pricing and zero payroll tax.
                </div>
                <div>
                  <strong className="font-medium text-white block">Speed:</strong>
                  Live systems running in 7 to 14 days with structured sprint delivery.
                </div>
                <div>
                  <strong className="font-medium text-white block">Risk:</strong>
                  Deterministic engineering, robust error logging, and 100% client IP ownership.
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-[#b9b9f9]">
              Unified team · Zero operational drag
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
