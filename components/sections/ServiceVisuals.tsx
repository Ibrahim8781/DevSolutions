import { Check, Mail, Zap } from "lucide-react";
import type { ServiceId } from "@/data/site";

// Illustrative, static mockups — not real client data.

function Frame({ caption, children }: { caption: string; children: React.ReactNode }) {
  return (
    <figure>
      <div className="rounded-xl border border-hairline bg-[#0A0F18] overflow-hidden">{children}</div>
      <figcaption className="mt-3 text-center font-mono text-[11px] text-ink-mute">{caption}</figcaption>
    </figure>
  );
}

function WebVisual() {
  return (
    <Frame caption="Example layout">
      <div className="relative">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-hairline">
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="ml-3 flex-1 rounded-md bg-white/4 px-3 py-1 font-mono text-[11px] text-ink-mute">
            yourbusiness.com
          </span>
        </div>
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="h-2.5 w-14 rounded-full bg-white/70" />
            <div className="flex gap-3">
              <div className="h-1.5 w-8 rounded-full bg-white/15" />
              <div className="h-1.5 w-8 rounded-full bg-white/15" />
              <div className="h-1.5 w-8 rounded-full bg-white/15" />
            </div>
          </div>
          <div className="space-y-2.5 pt-4">
            <div className="h-4 w-4/5 rounded-full bg-white/85" />
            <div className="h-4 w-3/5 rounded-full bg-white/85" />
            <div className="h-2 w-2/3 rounded-full bg-white/15 mt-4" />
          </div>
          <div className="flex gap-2.5">
            <div className="h-8 w-28 rounded-full bg-white/90" />
            <div className="h-8 w-20 rounded-full border border-white/15" />
          </div>
          <div className="grid grid-cols-3 gap-2.5 pt-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-16 rounded-lg border border-hairline bg-white/2" />
            ))}
          </div>
        </div>

        <div className="absolute right-4 bottom-4 sm:right-6 sm:bottom-6 flex items-center gap-3 rounded-xl border border-hairline-strong bg-[#0F1520] px-3.5 py-2.5 shadow-2xl shadow-black/60">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-accent">
            <Mail className="w-4 h-4" />
          </span>
          <span className="text-[13px] leading-tight">
            <span className="block font-medium text-ink">New quote request</span>
            <span className="text-ink-mute">from your website · just now</span>
          </span>
        </div>
      </div>
    </Frame>
  );
}

function TradingVisual() {
  const line =
    "M0,118 L30,112 L55,121 L80,96 L105,102 L130,80 L155,88 L180,66 L205,72 L230,50 L255,58 L280,40 L305,47 L330,30 L360,36";

  return (
    <Frame caption="Illustrative backtest, not real results">
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between font-mono text-[11px] text-ink-mute">
          <span>EURUSD · H1 · Your strategy</span>
          <span className="flex items-center gap-1.5 text-success">
            <span className="h-1.5 w-1.5 rounded-full bg-success" /> Running
          </span>
        </div>
        <svg viewBox="0 0 360 140" className="mt-5 w-full h-auto" role="img" aria-label="Example price chart with buy and sell points">
          <defs>
            <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.18" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[30, 65, 100].map((y) => (
            <line key={y} x1="0" x2="360" y1={y} y2={y} stroke="var(--hairline)" />
          ))}
          <path d={`${line} L360,140 L0,140 Z`} fill="url(#area)" />
          <path d={line} fill="none" stroke="var(--accent)" strokeWidth="1.75" strokeLinejoin="round" />
          <circle cx="80" cy="96" r="4.5" fill="var(--canvas)" stroke="var(--accent)" strokeWidth="2" />
          <text x="80" y="120" textAnchor="middle" className="fill-ink-secondary font-mono" fontSize="9">BUY</text>
          <circle cx="280" cy="40" r="4.5" fill="var(--canvas)" stroke="var(--ink)" strokeWidth="2" />
          <text x="280" y="24" textAnchor="middle" className="fill-ink-secondary font-mono" fontSize="9">SELL</text>
        </svg>
        <div className="mt-5 space-y-2 border-t border-hairline pt-4 font-mono text-[11px] sm:text-[12px] text-ink-secondary">
          <p className="flex justify-between gap-4"><span><span className="text-ink-mute">09:31</span>  BUY 0.50 @ 1.0842</span><span className="text-ink-mute">SL 1.0822</span></p>
          <p className="flex justify-between gap-4"><span><span className="text-ink-mute">14:12</span>  SELL 0.50 @ 1.0871</span><span className="text-ink-mute">take-profit</span></p>
          <p className="flex justify-between gap-4 text-ink-mute"><span>Daily loss cap 2%</span><span className="text-success">within limit</span></p>
        </div>
      </div>
    </Frame>
  );
}

function AutomationVisual() {
  const steps = [
    { text: "Added to your CRM", time: "0.4s" },
    { text: "Welcome email sent", time: "1.1s" },
    { text: "Team notified on Slack", time: "1.3s" },
    { text: "Follow-up booked for Thursday", time: "1.6s" },
  ];

  return (
    <Frame caption="Example automation">
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-3 rounded-lg border border-accent/25 bg-accent-soft px-4 py-3">
          <Zap className="w-4 h-4 text-accent shrink-0" />
          <div>
            <p className="text-[14px] font-medium text-ink">A new lead fills in your form</p>
            <p className="text-[12px] text-ink-mute">Everything below happens on its own</p>
          </div>
        </div>
        <ol className="relative mt-2 ml-[22px] border-l border-dashed border-hairline-strong">
          {steps.map((step) => (
            <li key={step.text} className="relative flex items-center justify-between gap-3 py-3 pl-6">
              <span className="absolute -left-[9px] flex h-[17px] w-[17px] items-center justify-center rounded-full border border-hairline-strong bg-[#0A0F18]">
                <Check className="w-2.5 h-2.5 text-success" />
              </span>
              <span className="text-[14px] text-ink-secondary">{step.text}</span>
              <span className="font-mono text-[11px] text-ink-mute">{step.time}</span>
            </li>
          ))}
        </ol>
        <p className="mt-1 flex justify-between border-t border-hairline pt-4 font-mono text-[11px] text-ink-mute">
          <span>Time your team spent</span>
          <span className="text-accent">0 minutes</span>
        </p>
      </div>
    </Frame>
  );
}

export default function ServiceVisual({ id }: { id: ServiceId }) {
  if (id === "web") return <WebVisual />;
  if (id === "trading") return <TradingVisual />;
  return <AutomationVisual />;
}
