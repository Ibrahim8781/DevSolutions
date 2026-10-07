import { Check, Mail, Zap } from "lucide-react";
import type { ServiceId } from "@/data/site";

// Illustrative, static mockups — not real client data.

function Frame({ caption, children }: { caption: string; children: React.ReactNode }) {
  return (
    <figure className="rounded-xl border border-hairline bg-canvas-raised p-3 sm:p-4">
      {children}
      <figcaption className="label-mono mt-3 px-1 text-[10px] text-ink-mute">{caption}</figcaption>
    </figure>
  );
}

function WebVisual() {
  return (
    <Frame caption="Example layout">
      <div className="relative rounded-lg border border-hairline bg-canvas overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-hairline">
          <span className="w-2.5 h-2.5 rounded-full bg-hairline-strong" />
          <span className="w-2.5 h-2.5 rounded-full bg-hairline-strong" />
          <span className="w-2.5 h-2.5 rounded-full bg-hairline-strong" />
          <span className="ml-3 flex-1 rounded bg-canvas-raised px-2.5 py-1 font-mono text-[11px] text-ink-mute">
            yourbusiness.com
          </span>
        </div>
        <div className="p-5 sm:p-7 space-y-5">
          <div className="flex items-center justify-between">
            <div className="h-3 w-16 rounded bg-ink/80" />
            <div className="flex gap-3">
              <div className="h-2 w-8 rounded bg-hairline-strong" />
              <div className="h-2 w-8 rounded bg-hairline-strong" />
              <div className="h-2 w-8 rounded bg-hairline-strong" />
            </div>
          </div>
          <div className="space-y-2.5 pt-3">
            <div className="h-5 w-4/5 rounded bg-ink/90" />
            <div className="h-5 w-3/5 rounded bg-ink/90" />
            <div className="h-2.5 w-2/3 rounded bg-hairline-strong mt-4" />
          </div>
          <div className="flex gap-2.5">
            <div className="h-8 w-28 rounded-md bg-action" />
            <div className="h-8 w-20 rounded-md border border-hairline-strong" />
          </div>
          <div className="grid grid-cols-3 gap-2.5 pt-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="h-16 rounded-md border border-hairline bg-canvas-raised" />
            ))}
          </div>
        </div>

        <div className="absolute right-3 bottom-3 sm:right-5 sm:bottom-5 flex items-center gap-3 rounded-lg border border-hairline-strong bg-canvas-raised px-3.5 py-2.5 shadow-xl shadow-black/40">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-soft text-accent">
            <Mail className="w-3.5 h-3.5" />
          </span>
          <span className="text-[13px] leading-tight">
            <span className="block font-semibold text-ink">New quote request</span>
            <span className="text-ink-mute">from your website · just now</span>
          </span>
        </div>
      </div>
    </Frame>
  );
}

function TradingVisual() {
  const line = "M0,118 L30,112 L55,121 L80,96 L105,102 L130,80 L155,88 L180,66 L205,72 L230,50 L255,58 L280,40 L305,47 L330,30 L360,36";

  return (
    <Frame caption="Illustrative backtest, not real results">
      <div className="rounded-lg border border-hairline bg-canvas p-4 sm:p-5">
        <div className="flex items-center justify-between font-mono text-[11px] text-ink-mute">
          <span>EURUSD · H1 · Your strategy</span>
          <span className="flex items-center gap-1.5 text-success">
            <span className="h-1.5 w-1.5 rounded-full bg-success" /> Running
          </span>
        </div>
        <svg viewBox="0 0 360 140" className="mt-4 w-full h-auto" role="img" aria-label="Example price chart with buy and sell points">
          {[30, 65, 100].map((y) => (
            <line key={y} x1="0" x2="360" y1={y} y2={y} stroke="var(--hairline)" strokeDasharray="3 5" />
          ))}
          <path d={line} fill="none" stroke="var(--ink-secondary)" strokeWidth="1.75" strokeLinejoin="round" />
          <circle cx="80" cy="96" r="5" fill="var(--accent)" />
          <text x="80" y="122" textAnchor="middle" className="fill-accent font-mono" fontSize="10">BUY</text>
          <circle cx="280" cy="40" r="5" fill="var(--action)" />
          <text x="280" y="22" textAnchor="middle" className="fill-action font-mono" fontSize="10">SELL</text>
          <line x1="0" x2="360" y1="128" y2="128" stroke="var(--danger)" strokeOpacity="0.5" strokeDasharray="2 4" />
          <text x="356" y="138" textAnchor="end" className="fill-danger font-mono" fontSize="9" opacity="0.8">stop-loss</text>
        </svg>
        <div className="mt-4 space-y-1.5 border-t border-hairline pt-3.5 font-mono text-[11px] sm:text-[12px]">
          <p className="text-ink-secondary"><span className="text-ink-mute">09:31</span> <span className="text-accent">BUY</span> 0.50 lot @ 1.0842 · SL 1.0822</p>
          <p className="text-ink-secondary"><span className="text-ink-mute">14:12</span> <span className="text-action">SELL</span> 0.50 lot @ 1.0871 · rule: take-profit</p>
          <p className="text-ink-mute">Daily loss cap 2% · within limit</p>
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
      <div className="rounded-lg border border-hairline bg-canvas p-4 sm:p-5">
        <div className="flex items-center gap-3 rounded-lg border border-accent/30 bg-accent-soft px-4 py-3">
          <Zap className="w-4 h-4 text-accent shrink-0" />
          <div className="text-[14px]">
            <p className="font-semibold text-ink">A new lead fills in your form</p>
            <p className="text-ink-mute text-[13px]">Everything below happens on its own</p>
          </div>
        </div>
        <ol className="relative mt-2 ml-[22px] border-l border-dashed border-hairline-strong">
          {steps.map((step) => (
            <li key={step.text} className="relative flex items-center justify-between gap-3 py-3 pl-6">
              <span className="absolute -left-[9px] flex h-[17px] w-[17px] items-center justify-center rounded-full border border-hairline-strong bg-canvas-raised">
                <Check className="w-2.5 h-2.5 text-success" />
              </span>
              <span className="text-[14px] text-ink-secondary">{step.text}</span>
              <span className="font-mono text-[11px] text-ink-mute">{step.time}</span>
            </li>
          ))}
        </ol>
        <p className="mt-1 border-t border-hairline pt-3.5 font-mono text-[11px] text-ink-mute">
          Time your team spent: <span className="text-accent">0 minutes</span>
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
