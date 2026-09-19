"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, Calendar, Sparkles, Check } from "lucide-react";

export default function ContactSection() {
  const bookingUrl = "https://cal.com/miharbi-damha-omxkej/15min";
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  {/* TODO: wire this form to Formspree/HubSpot/CRM once the person provides connection details — currently a no-op placeholder */}
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulated local submission to demonstrate interactive UI states
    setTimeout(() => {
      setFormState("success");
      setFormData({ name: "", email: "", message: "" });
    }, 500);
  };

  const handleReset = () => {
    setFormState("idle");
  };

  return (
    <section className="w-full bg-canvas-raised py-16 sm:py-24 border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left Column: "Book a call" path */}
          <div className="space-y-8">
            <div className="card-feature bg-canvas border border-hairline p-8 sm:p-10 rounded-xl space-y-6">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-md bg-canvas-raised border border-hairline flex items-center justify-center text-primary">
                  <Calendar className="w-5 h-5" />
                </div>
                <h2 className="heading-md text-ink">
                  Book a strategy call
                </h2>
                <p className="body-md text-ink-secondary leading-relaxed">
                  Schedule a 15-minute diagnostic session directly on our calendar. We review your current workflows and identify where automations or AI agents create immediate leverage.
                </p>
              </div>

              {/* Primary Cal.com CTA */}
              <div>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto gap-2 text-[15px]"
                >
                  <span>Book a call on Cal.com</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust Row Restyled */}
              <div className="pt-6 border-t border-hairline space-y-3">
                <div className="flex items-center gap-2.5 text-sm text-ink-secondary">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>15-minute diagnostic call with zero pushy sales pitch</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-ink-secondary">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Direct conversation with the technical builder</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-ink-secondary">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Fixed-scope proposal delivered within 48 hours</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Info Block */}
            <div className="card-feature bg-canvas border border-hairline p-6 sm:p-8 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-md bg-canvas-raised border border-hairline flex items-center justify-center text-primary flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="heading-sm text-ink">Direct Email</h3>
                  {/* TODO: replace with real contact email */}
                  <p className="caption text-ink-mute">hello@devsolutions.example</p>
                </div>
              </div>

              {/* TODO: replace with real contact email */}
              <a
                href="mailto:hello@devsolutions.example"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
              >
                <span>Send an Email &rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="card-feature bg-canvas border border-hairline p-8 sm:p-10 rounded-xl space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 caption font-mono uppercase text-primary">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Quick Inquiry</span>
              </div>
              <h2 className="heading-md text-ink">Send a message</h2>
              <p className="body-sm text-ink-secondary">
                Prefer to write? Drop your details and project notes below. We review inquiries directly and respond within one business day.
              </p>
            </div>

            {formState === "success" ? (
              <div className="py-8 space-y-6 text-center animate-in fade-in duration-200">
                <div className="w-12 h-12 rounded-full bg-success/15 text-success border border-success/30 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <div className="space-y-2 max-w-md mx-auto">
                  <h3 className="heading-sm text-ink">Message received</h3>
                  <p className="body-sm text-ink-secondary">
                    Thank you for reaching out. We have received your note and will review your technical requirements within one business day.
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn-secondary text-sm !py-2.5 !px-5"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="caption font-semibold text-ink block">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="text-input"
                    placeholder="e.g. Alex Morgan"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="caption font-semibold text-ink block">
                    Work Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="text-input"
                    placeholder="e.g. alex@company.com"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="caption font-semibold text-ink block">
                    Project or Workflow Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="text-input resize-y min-h-[110px]"
                    placeholder="Describe the repetitive workflows, tools, or AI capabilities you want to build..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="btn-primary w-full gap-2 text-base !py-3.5"
                  >
                    {formState === "submitting" ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send message</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-2 text-center caption text-ink-mute">
                  <span>Direct technical review &bull; 24-hour turnaround</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
