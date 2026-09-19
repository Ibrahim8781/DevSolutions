import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

{/* PLACEHOLDER LEGAL TEXT — have this reviewed by a lawyer before this site goes live */}

export const metadata: Metadata = {
  title: "Privacy Policy | DevSolutions",
  description: "Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="caption font-mono text-ink-mute mt-3">
            Effective date: [Effective Date]
          </p>
        </header>

        {/* Document Body */}
        <div className="pt-8 body-md text-ink-secondary leading-relaxed sm:leading-loose space-y-8">
          <p>
            [Company Legal Name] (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) operates this website. This policy explains what information we collect, how we use it, and your choices.
          </p>

          <section className="space-y-4">
            <h2 className="heading-md font-semibold text-ink">
              Information we collect
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-ink-secondary">
              <li>
                Information you provide directly, such as your name, email address, and message content when you submit the contact form or book a call.
              </li>
              <li>
                Basic usage data collected automatically (pages visited, approximate location from IP, browser/device type) via standard analytics tools.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="heading-md font-semibold text-ink">
              How we use it
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-ink-secondary">
              <li>To respond to inquiries and deliver services you&apos;ve requested.</li>
              <li>To improve this website and our services.</li>
              <li>We do not sell your personal information.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="heading-md font-semibold text-ink">
              Third parties
            </h2>
            <p>
              We may use third-party tools (such as scheduling, analytics, or CRM providers) to operate this site and deliver services. These providers only receive the information needed to perform their function.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-md font-semibold text-ink">
              Data retention
            </h2>
            <p>
              We retain information for as long as needed to provide services or as required by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-md font-semibold text-ink">
              Your rights
            </h2>
            <p>
              You can request access to, correction of, or deletion of your personal information by contacting us at [Contact Email].
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="heading-md font-semibold text-ink">
              Changes
            </h2>
            <p>
              We may update this policy from time to time. Continued use of the site after changes means you accept the updated policy.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-hairline">
            <h2 className="heading-sm font-semibold text-ink">
              Contact
            </h2>
            <p>
              Questions about this policy: [Contact Email]
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
