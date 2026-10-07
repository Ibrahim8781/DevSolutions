import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { BRAND, FOUNDERS } from "@/data/site";

// PLACEHOLDER LEGAL TEXT — have this reviewed by a lawyer before this site goes live.

export const metadata: Metadata = {
  title: `Trading Disclaimer | ${BRAND.name}`,
  description: `Risk disclosure for trading bots and trading software built by ${BRAND.name}.`,
};

export default function TradingDisclaimerPage() {
  return (
    <main className="flex-1 w-full py-16 sm:py-24">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 font-mono text-[12px] text-ink-mute hover:text-accent transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to home
        </Link>

        <header className="mt-10 border-b border-hairline pb-8">
          <p className="eyebrow">Legal</p>
          <h1 className="text-h2 mt-5">Trading Disclaimer</h1>
        </header>

        <div className="pt-8 space-y-8 text-[16px] leading-relaxed text-ink-secondary">
          <div className="flex items-start gap-4 rounded-xl panel p-5">
            <ShieldAlert className="w-5 h-5 shrink-0 mt-1 text-warning" />
            <p className="text-ink">
              {BRAND.name} builds trading software, such as trading bots, Expert Advisors for MetaTrader 5 and
              TradingView automations, that follows rules provided or approved by the client. We are software
              developers, not financial advisors.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-h4">Important disclosures</h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>{BRAND.name} is not a registered financial advisor, broker-dealer or investment advisor.</li>
              <li>
                Nothing on this website, or in any software we build, is financial, investment, tax or trading advice,
                or a recommendation to buy or sell any asset.
              </li>
              <li>
                No trading bot or strategy is guaranteed to make a profit or avoid losses. Past performance, including
                backtests, simulations and live results, does not predict future results.
              </li>
              <li>
                Trading forex, crypto, stocks and other markets carries a high risk of loss, and you may lose more than
                you invest. Only trade with money you can afford to lose.
              </li>
              <li>
                Any bot we build executes the strategy logic you provide or approve. You remain solely responsible for
                your trading decisions, account settings and results.
              </li>
              <li>
                Software can fail because of bugs, broker or exchange outages, internet problems or market conditions.
                Always monitor live trading.
              </li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-hairline pt-6">
            <h2 className="text-h4">Questions</h2>
            <p>
              Contact us at{" "}
              {FOUNDERS.map((f, i) => (
                <span key={f.email}>
                  {i > 0 && " or "}
                  <a href={`mailto:${f.email}`} className="text-accent hover:underline">{f.email}</a>
                </span>
              ))}
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
