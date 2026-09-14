"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What happens immediately after I book a diagnostic call?",
      a: "You will receive an instant calendar confirmation with a Google Meet link. Our systems architect reviews your website and any notes provided ahead of time, ensuring we spend the full 15 minutes reviewing your operational bottlenecks rather than asking introductory questions.",
    },
    {
      q: "Do we need complete technical specifications before contacting you?",
      a: "No. The majority of our clients are non-technical operators who know where their team is losing hours, but not the exact API endpoints needed to fix it. Our diagnostic call maps the technical architecture for you.",
    },
    {
      q: "How do you handle Non-Disclosure Agreements (NDAs)?",
      a: "We routinely sign bilateral mutual NDAs before reviewing proprietary data schemas, trading strategies, or internal workflows. We can execute our standard mutual NDA in under two hours, or review your company's template.",
    },
    {
      q: "What are your typical deployment timelines?",
      a: "Targeted automations, tool integrations, and conversational voice agents typically go live in 7 to 14 days. Comprehensive web funnels and multi-agent reasoning systems run in structured 3 to 4-week delivery sprints.",
    },
    {
      q: "Can we hire DevSolutions for a single sprint instead of an ongoing retainer?",
      a: "Yes. Every engagement is available as a fixed-scope milestone build with defined acceptance criteria and zero mandatory recurring contracts. You own 100% of all assets upon handover.",
    },
  ];

  return (
    <section className="w-full py-20 sm:py-28 bg-[#f5e9d4]/60 border-b border-[#e3e8ee]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9b6829]/15 text-[#9b6829] text-xs font-mono font-medium">
            <HelpCircle className="w-3.5 h-3.5" />
            COMMERCIAL CLARITY
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-[#0d253d] tracking-[-0.8px]">
            Frequently Asked Questions
          </h2>
          <p className="text-base font-light text-[#273951] max-w-xl mx-auto">
            Everything you need to know about scheduling, confidentiality, and commercial scoping.
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
                  <div className="px-6 pb-5 pt-1 text-[14px] font-light leading-relaxed text-[#64748d] border-t border-[#f5e9d4]">
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
