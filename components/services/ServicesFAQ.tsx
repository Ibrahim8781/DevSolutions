"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How are service engagements scoped and priced?",
      a: "We work on fixed-scope deliverables and transparent monthly retainers — never open-ended hourly billing. Following a 15-minute diagnostic call, we provide a written architecture proposal specifying exact deliverables, timeline, and an all-inclusive project price.",
    },
    {
      q: "Who owns the automations, bots, and intellectual property?",
      a: "You own 100% of everything we build. All source code, API keys, webhook handlers, workflow blueprints, and accounts are configured under your organization's infrastructure. We believe in zero vendor lock-in.",
    },
    {
      q: "What does a typical implementation timeline look like?",
      a: "Standard automations, webhook integrations, and phone/chat voice agents generally deploy within 7 to 14 days. Comprehensive web development funnels or complex multi-agent reasoning engines run in structured 3 to 4-week delivery sprints.",
    },
    {
      q: "Can we combine services across multiple pillars?",
      a: "Yes. In fact, that is where clients see the highest ROI. For example, our Marketing & Creative team builds your conversion site (Pillar 2), which immediately routes leads into an autonomous AI telephone responder and CRM pipeline built by our Growth & Automation team (Pillar 1).",
    },
    {
      q: "What happens if a third-party software API changes after launch?",
      a: "All our builds are engineered with centralized configuration layers and exception logging. We include a 30-day post-launch monitoring warranty to handle any edge cases, and provide ongoing iteration support retainers for continuous maintenance.",
    },
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-[#f6f9fc] border-t border-[#e3e8ee]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-14">
          <span className="text-xs font-mono font-medium uppercase tracking-wider text-[#533afd]">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-[#0d253d] tracking-[-0.8px]">
            Engagement & Delivery Details
          </h2>
          <p className="text-base font-light text-[#64748d] max-w-xl mx-auto">
            Practical answers regarding project scoping, intellectual property, timelines, and ongoing operations.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className="rounded-xl bg-white border border-[#e3e8ee] overflow-hidden shadow-[0_1px_3px_rgba(0,55,112,0.04)] transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] sm:text-base font-medium text-[#0d253d] pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#64748d] transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-[#533afd]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-[14px] font-light leading-relaxed text-[#64748d] border-t border-[#f6f9fc]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
