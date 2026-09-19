import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

{/* PLACEHOLDER LEGAL TEXT — have this reviewed by a lawyer before this site goes live */}

export const metadata: Metadata = {
  title: "Terms of Service | DevSolutions",
  description: "Terms and conditions governing the use of this website and our services.",
};

export default function TermsOfServicePage() {
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
            <span className="tag-category !text-xs !py-1 !px-3 font-mono">Legal</span>
          </div>
          <h1 className="heading-lg sm:text-4xl font-display font-bold text-ink tracking-tight">
            Terms of Service
          </h1>
          <p className="caption font-mono text-ink-mute mt-3">
            Effective date: [Effective Date]
          </p>
        </header>

        {/* Document Body */}
        <div className="pt-8 body-md text-ink-secondary leading-relaxed sm:leading-loose space-y-8">
          <p>
            By using this website or engaging [Company Legal Name] for services, you agree to these terms.
          </p>

          <section className="space-y-3">
            <h2 className="heading-md font-semibold text-ink">
              Services
            </h2>
            <p>
              Services are provided on a project or engagement basis as agreed in writing (proposal, statement of work, or contract) between [Company Legal Name] and the client. These general terms apply in addition to, not in place of, any signed agreement.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-md font-semibold text-ink">
              Use of this website
            </h2>
            <p>
              You agree not to misuse this website, attempt to gain unauthorized access to it, or use it for unlawful purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-md font-semibold text-ink">
              Intellectual property
            </h2>
            <p>
              Content on this site (text, design, graphics) belongs to [Company Legal Name] unless otherwise noted, and may not be reproduced without permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-md font-semibold text-ink">
              No guarantee of results
            </h2>
            <p>
              While we work to deliver effective automations, integrations, and marketing outcomes, we do not guarantee specific business results, as these depend on factors outside our control.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-md font-semibold text-ink">
              Limitation of liability
            </h2>
            <p>
              To the extent permitted by law, [Company Legal Name] is not liable for indirect, incidental, or consequential damages arising from use of this site or our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-md font-semibold text-ink">
              Governing law
            </h2>
            <p>
              These terms are governed by the laws of [Jurisdiction — to be determined].
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-md font-semibold text-ink">
              Changes
            </h2>
            <p>
              We may update these terms from time to time; continued use of the site means you accept the current version.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-hairline">
            <h2 className="heading-sm font-semibold text-ink">
              Contact
            </h2>
            <p>
              Questions about these terms: [Contact Email]
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
