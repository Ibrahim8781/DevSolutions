import { CheckCircle2, PhoneCall, FileText, Rocket, ArrowRight } from "lucide-react";

export default function ScopingPhilosophy() {
  const bookingUrl = "https://cal.com/miharbi-damha-omxkej/15min";

  const steps = [
    {
      step: "Phase 1",
      title: "15-Minute Diagnostic Call",
      description:
        "We audit your operational bottlenecks, examine tool subscriptions, and assess whether automation delivers a clear, positive return on investment before proposing an engagement.",
      icon: PhoneCall,
    },
    {
      step: "Phase 2",
      title: "Fixed-Scope Architecture Proposal",
      description:
        "Delivered within 48 hours: a concise technical blueprint detailing the exact integration endpoints, deliverable milestones, delivery timeline, and a single all-inclusive price.",
      icon: FileText,
    },
    {
      step: "Phase 3",
      title: "Sprint Execution & 100% IP Handover",
      description:
        "We build in rapid 7 to 14-day delivery sprints, test extensively in sandbox environments, onboard your team, and hand over full ownership of every asset.",
      icon: Rocket,
    },
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-[#f5e9d4]/60 border-b border-[#e3e8ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9b6829]/15 text-[#9b6829] text-xs font-mono font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" />
            ENGAGEMENT TRANSPARENCY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-light text-[#0d253d] tracking-[-1px] leading-[1.1]">
            How scoping and pricing work at a high level
          </h2>
          <p className="text-base sm:text-lg font-light text-[#273951] leading-relaxed">
            We operate with complete commercial clarity. No mysterious hourly billing, no surprise invoices, and no endless discovery phases.
          </p>
        </div>

        {/* 3 Steps on Cream Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl bg-white border border-[#e3e8ee] p-7 sm:p-8 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,55,112,0.06)]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-medium text-[#9b6829]">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#f5e9d4] flex items-center justify-center text-[#9b6829]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-light text-[#0d253d] tracking-[-0.2px]">
                    {item.title}
                  </h3>

                  <p className="text-[14px] font-light leading-relaxed text-[#64748d]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#f5e9d4] text-xs font-mono text-[#9b6829]">
                  Step {idx + 1} of 3
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#e3e8ee] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-medium text-[#0d253d]">
              Ready to scope your systems diagnostic?
            </h4>
            <p className="text-sm font-light text-[#64748d]">
              Book 15 minutes with our systems architect to evaluate your highest-ROI automation opportunities.
            </p>
          </div>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-normal text-white bg-[#533afd] hover:bg-[#4434d4] active:bg-[#2e2b8c] px-6 py-3 rounded-full transition-all shadow-sm flex-shrink-0"
          >
            <span>Book a strategy call</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
