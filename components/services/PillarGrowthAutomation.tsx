"use client";

import { Cpu, CheckCircle2, Play, ArrowRight, Layers, Bot, PhoneCall, Workflow } from "lucide-react";

export default function PillarGrowthAutomation() {
  const bookingUrl = "https://cal.com/miharbi-damha-omxkej/15min";

  const services = [
    {
      id: "business-automations",
      number: "01.1",
      name: "Business Automations",
      tagline: "Stop doing by hand what software can do at 2am.",
      audience:
        "Operations leads, founders, and finance teams losing 15+ hours weekly to repetitive spreadsheet transfers, invoice chasing, and manual status updates.",
      icon: Workflow,
      included: [
        "End-to-end invoice & receipt ingestion, data extraction, and ERP filing",
        "Multi-channel lead routing, automated CRM enrichment, and territory dispatch",
        "Automated contract generation, e-signature dispatch, and counterparty tracking",
        "Self-healing database hygiene, deduplication, and anomaly alert notifications",
      ],
      stack: ["Python / Node.js", "PostgreSQL", "Make / Zapier", "Custom Webhooks"],
      mediaLabel: "Automated Reconciliation Pipeline",
    },
    {
      id: "integrations",
      number: "01.2",
      name: "Integrations",
      tagline: "Make every tool you already pay for talk to each other.",
      audience:
        "Companies whose SaaS stack operates in silos — where inventory, billing, support tickets, and CRM records don't talk to each other in real-time.",
      icon: Layers,
      included: [
        "Two-way synchronization between CRM (HubSpot/Salesforce) and back-office ERPs",
        "Payment gateway event listeners and automated accounting reconciliation (Stripe/QuickBooks)",
        "Custom REST & GraphQL middleware with enterprise error handling and retry queues",
        "High-throughput webhook ingestion layers designed for zero dropped events",
      ],
      stack: ["REST / GraphQL", "Redis Queues", "Stripe API", "AWS Lambda"],
      mediaLabel: "Bidirectional Data Mesh Topology",
    },
    {
      id: "ai-agents",
      number: "01.3",
      name: "AI Agents",
      tagline: "An agent that finishes the task, not just chats about it.",
      audience:
        "Knowledge teams and technical operators requiring autonomous systems that navigate databases, compile complex briefs, and complete multi-step tasks without human oversight.",
      icon: Bot,
      included: [
        "Autonomous reasoning loops equipped with native tool-calling and API execution",
        "Custom RAG vector search over internal SOPs, contracts, and proprietary databases",
        "Automated customer ticket triage, contextual drafting, and resolution execution",
        "Granular human-in-the-loop approvals with strict confidence score guardrails",
      ],
      stack: ["Anthropic / OpenAI", "Pinecone Vector DB", "LangGraph", "Tool Calling"],
      mediaLabel: "Autonomous Multi-Step Reasoning Engine",
    },
    {
      id: "chatbot-call-agents",
      number: "01.4",
      name: "ChatBot + Call Agents (Voice AI)",
      tagline: "Answer every call and every DM, at any hour.",
      audience:
        "Customer-facing businesses (healthcare clinics, trade contractors, real estate, agencies) losing deals due to missed telephone calls and delayed website replies.",
      icon: PhoneCall,
      included: [
        "Sub-800ms conversational voice agents handling natural inbound phone qualification",
        "Instant live calendar appointment booking directly into team calendars during calls",
        "Omnichannel response bots deployed across website chat, WhatsApp, and SMS",
        "Automated post-call summary generation, transcription logging, and CRM sync",
      ],
      stack: ["LiveKit / Deepgram", "ElevenLabs Voice", "Twilio SIP", "Cal.com Integration"],
      mediaLabel: "Telephony Voice Agent Dispatch Matrix",
    },
  ];

  return (
    <section id="growth-automation" className="w-full py-20 sm:py-28 bg-white border-b border-[#e3e8ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pillar Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#533afd]/10 text-[#533afd] text-xs font-mono font-medium">
            <Cpu className="w-3.5 h-3.5" />
            PILLAR 01
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-light text-[#0d253d] tracking-[-1px] leading-[1.1]">
            Growth & Automation
          </h2>
          <p className="text-base sm:text-lg font-light text-[#64748d] leading-relaxed">
            Eliminate operational drag by transforming fragmented manual tasks into continuous, automated digital infrastructure that works 24/7.
          </p>
        </div>

        {/* 4 Expanded Sub-Services */}
        <div className="space-y-16">
          {services.map((svc, index) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                id={svc.id}
                className="rounded-2xl bg-white border border-[#e3e8ee] p-6 sm:p-10 shadow-[0_1px_3px_rgba(0,55,112,0.06)] hover:shadow-[0_8px_24px_rgba(0,55,112,0.08)] transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Scope & Capabilities */}
                  <div className="lg:col-span-7 space-y-6">
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#533afd]/10 text-[#533afd] flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-mono text-[#64748d]">SERVICE {svc.number}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-light text-[#0d253d] tracking-[-0.6px]">
                        {svc.name}
                      </h3>
                      <p className="text-base font-normal text-[#533afd] italic">
                        &ldquo;{svc.tagline}&rdquo;
                      </p>
                    </div>

                    {/* Who this is for */}
                    <div className="p-4 rounded-xl bg-[#f6f9fc] border border-[#e3e8ee]/80 space-y-1.5">
                      <div className="text-xs uppercase font-medium tracking-wider text-[#273951]">
                        Who this is for
                      </div>
                      <p className="text-[14px] font-light text-[#64748d] leading-relaxed">
                        {svc.audience}
                      </p>
                    </div>

                    {/* What's included */}
                    <div className="space-y-3">
                      <div className="text-xs uppercase font-medium tracking-wider text-[#273951]">
                        What&apos;s included in deployment
                      </div>
                      <ul className="space-y-2.5">
                        {svc.included.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-[14px] font-light text-[#273951]">
                            <CheckCircle2 className="w-4 h-4 text-[#533afd] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Stack Tags */}
                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-[#64748d] mr-1">Stack:</span>
                      {svc.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-[#e3e8ee]/50 text-xs font-mono text-[#273951]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action CTA */}
                    <div className="pt-4">
                      <a
                        href={bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-normal text-white bg-[#533afd] hover:bg-[#4434d4] active:bg-[#2e2b8c] px-5 py-2.5 rounded-full transition-all shadow-sm"
                      >
                        <span>Book a call on {svc.name}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: 16:9 Reserved Media / Mockup Frame */}
                  <div className="lg:col-span-5 w-full">
                    <div className="rounded-xl border border-[#e3e8ee] p-2 bg-[#f6f9fc] shadow-sm">
                      {/* Window Header Chrome */}
                      <div className="flex items-center justify-between px-2 py-1.5 border-b border-[#e3e8ee] mb-2 text-[11px] font-mono text-[#64748d]">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#ea2261]/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#9b6829]/60" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <span>preview-{svc.id}.sim</span>
                      </div>

                      {/* 16:9 Media Box */}
                      <div className="relative aspect-video w-full rounded-lg bg-[#0d253d] overflow-hidden flex flex-col items-center justify-center text-center p-4 group">
                        {/* Blueprint decorative lines */}
                        <div
                          className="absolute inset-0 opacity-15"
                          style={{
                            backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
                            backgroundSize: "20px 20px",
                          }}
                        />

                        {/* Centered Mock Badge / Play */}
                        <div className="relative z-10 w-12 h-12 rounded-full bg-[#533afd] text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform cursor-pointer">
                          <Play className="w-5 h-5 ml-0.5 fill-white" />
                        </div>
                        <div className="relative z-10 mt-3 text-xs font-light text-white">
                          {svc.mediaLabel}
                        </div>
                        <div className="relative z-10 mt-0.5 text-[10px] font-mono text-[#a8c3de]">
                          [Demo Video Slot • 16:9 Lazy Loaded]
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
