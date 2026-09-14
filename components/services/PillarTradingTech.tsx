"use client";

import { TrendingUp, CheckCircle2, Play, ArrowRight, AlertTriangle, ShieldCheck, Terminal } from "lucide-react";

export default function PillarTradingTech() {
  const bookingUrl = "https://cal.com/miharbi-damha-omxkej/15min";

  const svc = {
    id: "trading-bots-strategy",
    number: "03.1",
    name: "Trading Bots + Strategy Automation",
    tagline: "Strategy automation for traders who don't want to babysit charts.",
    audience:
      "Active traders, algorithmic strategists, and private capital desks needing disciplined, automated execution without emotional interference or manual order latency.",
    icon: Terminal,
    included: [
      "Custom execution daemons connected to broker and exchange APIs (Interactive Brokers, Bybit, Tradovate, Binance)",
      "TradingView PineScript alert webhooks with sub-second limit/market order routing and nonce authentication",
      "Hard-coded risk controls: maximum daily drawdown breakers, dynamic trailing stops, and volatility circuit breakers",
      "Real-time execution telemetry, fill price slippage monitoring, and automated Discord/Telegram logs",
    ],
    stack: ["Python (AsyncIO)", "CCXT", "PineScript / TradingView", "Docker / AWS EC2"],
    mediaLabel: "Algorithmic Order Router & Circuit Breaker Engine",
  };

  const Icon = svc.icon;

  return (
    <section id="trading-technologies" className="w-full py-20 sm:py-28 bg-white border-b border-[#e3e8ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pillar Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9b6829]/10 text-[#9b6829] text-xs font-mono font-medium">
            <TrendingUp className="w-3.5 h-3.5" />
            PILLAR 03
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-light text-[#0d253d] tracking-[-1px] leading-[1.1]">
            Trading Technologies
          </h2>
          <p className="text-base sm:text-lg font-light text-[#64748d] leading-relaxed">
            Quantitative execution engines and automated strategy infrastructure built for disciplined algorithmic traders.
          </p>
        </div>

        {/* Expanded Trading Tech Sub-Service Card */}
        <div
          id={svc.id}
          className="rounded-2xl bg-white border border-[#e3e8ee] p-6 sm:p-10 shadow-[0_1px_3px_rgba(0,55,112,0.06)] hover:shadow-[0_8px_24px_rgba(0,55,112,0.08)] transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Capabilities & Scope */}
            <div className="lg:col-span-7 space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#9b6829]/10 text-[#9b6829] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono text-[#64748d]">SERVICE {svc.number}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-[#0d253d] tracking-[-0.6px]">
                  {svc.name}
                </h3>
                <p className="text-base font-normal text-[#9b6829] italic">
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
                      <CheckCircle2 className="w-4 h-4 text-[#9b6829] flex-shrink-0 mt-0.5" />
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

              {/* Mandatory Compliance Disclaimer Box */}
              <div className="mt-6 p-4 rounded-xl bg-amber-50/80 border border-amber-200/90 space-y-2">
                <div className="flex items-center gap-2 font-medium text-amber-900 text-xs tracking-wide uppercase">
                  <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  Mandatory Financial Compliance Notice
                </div>
                <p className="text-[13px] font-light leading-relaxed text-amber-950">
                  Trading bot development and automated strategy execution are technical tools engineered strictly for self-directed trade execution. DevSolutions is not an investment advisor, financial analyst, or broker-dealer. We do not manage capital, recommend assets, or provide investment advice. Past automated backtest or live strategy performance does not guarantee future financial results.
                </p>
              </div>

              {/* Action CTA */}
              <div className="pt-4">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-normal text-white bg-[#533afd] hover:bg-[#4434d4] active:bg-[#2e2b8c] px-5 py-2.5 rounded-full transition-all shadow-sm"
                >
                  <span>Discuss a trading bot architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: 16:9 Reserved Media Slot */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-xl border border-[#e3e8ee] p-2 bg-[#f6f9fc] shadow-sm">
                {/* Window Header Chrome */}
                <div className="flex items-center justify-between px-2 py-1.5 border-b border-[#e3e8ee] mb-2 text-[11px] font-mono text-[#64748d]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ea2261]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#9b6829]/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span>quant-router.daemon</span>
                </div>

                {/* 16:9 Media Box */}
                <div className="relative aspect-video w-full rounded-lg bg-[#0d253d] overflow-hidden flex flex-col items-center justify-center text-center p-4 group">
                  {/* Grid Lines */}
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage: "radial-gradient(circle at 1px 1px, #9b6829 1px, transparent 0)",
                      backgroundSize: "20px 20px",
                    }}
                  />

                  {/* Centered Mock Badge / Play */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#9b6829] text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform cursor-pointer">
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
      </div>
    </section>
  );
}
