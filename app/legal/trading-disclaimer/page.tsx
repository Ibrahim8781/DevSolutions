import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";

{/* PLACEHOLDER LEGAL TEXT — have this reviewed by a lawyer before this site goes live */}

export const metadata: Metadata = {
  title: "Trading Disclaimer | DevSolutions",
  description: "Trading Technologies Compliance Notice and regulatory disclaimers.",
};

export default function TradingDisclaimerPage() {
  return (
    <main className="w-full min-h-screen bg-canvas text-ink py-16 sm:py-24">
      {/* PLACEHOLDER LEGAL TEXT — have this reviewed by a lawyer before this site goes live */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-ink-mute hover:text-primary transition-colors duration-150"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
        </div>

        {/* Document Header */}
        <header className="pb-8 border-b border-hairline">
          <div className="mb-3">
            <span className="tag-category !text-xs !py-1 !px-3 font-mono">Compliance</span>
          </div>
          <h1 className="heading-lg sm:text-4xl font-display font-bold text-ink tracking-tight">
            Trading Technologies Compliance Notice
          </h1>
          <p className="caption font-mono text-ink-mute mt-3">
            Regulatory &amp; Operational Risk Disclosure
          </p>
        </header>

        {/* Document Body */}
        <div className="pt-8 body-md text-ink-secondary leading-relaxed sm:leading-loose space-y-8">
          <div className="flex items-start gap-4 p-5 rounded-xl bg-canvas-raised border border-hairline">
            <ShieldAlert className="w-5 h-5 text-primary shrink-0 mt-1" />
            <p className="body-md text-ink leading-relaxed">
              Trading bot content, strategy automation, and related technical services offered by [Company Legal Name] are engineered strictly for technical execution and operational efficiency.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="heading-md font-semibold text-ink">
              Important Disclosures
            </h2>
            <ul className="list-disc pl-5 space-y-3 text-ink-secondary">
              <li>
                <strong className="text-ink">[Company Legal Name]</strong> is not a registered financial advisor, broker-dealer, or investment advisor.
              </li>
              <li>
                Nothing on this website, or in any trading automation we build, constitutes financial, investment, or trading advice.
              </li>
              <li>
                Past performance of any automated trading strategy — whether backtested or live — does not guarantee future results.
              </li>
              <li>
                Trading involves risk, including the risk of loss of principal. You are solely responsible for your own trading decisions and strategy logic.
              </li>
              <li>
                Any strategy automation we build executes the logic you provide or approve — we do not design, recommend, or warrant the profitability of any trading strategy.
              </li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t border-hairline">
            <h2 className="heading-sm font-semibold text-ink">
              Contact
            </h2>
            <p>
              Questions about this notice: [Contact Email]
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
