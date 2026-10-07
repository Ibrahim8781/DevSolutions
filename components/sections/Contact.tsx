"use client";

import { useState } from "react";
import { ArrowUpRight, CalendarDays, Mail, Send } from "lucide-react";
import Reveal from "@/components/Reveal";
import { BOOKING_URL, FOUNDERS, SERVICES } from "@/data/site";

// No form backend yet: submitting opens the visitor's email app with the
// enquiry pre-filled and addressed to both founders.
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [opened, setOpened] = useState(false);

  const update = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const to = FOUNDERS.map((f) => f.email).join(",");
    const subject = `New enquiry: ${form.service || "General"} (${form.name})`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nInterested in: ${form.service || "Not sure yet"}\n\n${form.message}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <p className="label-mono text-accent">Contact</p>
          <h2 className="display-section mt-5 text-ink text-balance">
            Tell us what you need. <span className="text-ink-mute">We&apos;ll tell you honestly if we can help.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Booking + direct email */}
          <Reveal className="lg:col-span-5 space-y-4">
            <div className="rounded-xl border border-action/40 bg-canvas-raised p-7 sm:p-8">
              <CalendarDays className="w-6 h-6 text-action" aria-hidden="true" />
              <h3 className="heading-lg mt-5 text-ink">Book a free 15-minute call</h3>
              <p className="mt-3 text-[16px] leading-relaxed text-ink-secondary">
                The fastest way to get started. Pick a time that suits you, tell us about your business, and get a
                fixed quote within 48 hours.
              </p>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-action mt-7 w-full sm:w-auto">
                Pick a time
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="rounded-xl border border-hairline p-7 sm:p-8">
              <p className="label-mono text-ink-mute">Or email us directly</p>
              <ul className="mt-5 space-y-4">
                {FOUNDERS.map((person) => (
                  <li key={person.email}>
                    <p className="font-semibold text-ink">{person.name}</p>
                    <a
                      href={`mailto:${person.email}`}
                      className="mt-1 inline-flex items-center gap-2 text-[15px] text-ink-secondary hover:text-accent transition-colors break-all"
                    >
                      <Mail className="w-4 h-4 shrink-0 text-accent" />
                      {person.email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Message form */}
          <Reveal className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="rounded-xl border border-hairline bg-canvas-raised p-7 sm:p-10 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[14px] font-semibold text-ink">Your name</label>
                  <input id="name" required value={form.name} onChange={update("name")} className="field" autoComplete="name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[14px] font-semibold text-ink">Email</label>
                  <input id="email" type="email" required value={form.email} onChange={update("email")} className="field" autoComplete="email" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-[14px] font-semibold text-ink">What do you need help with?</label>
                <select id="service" value={form.service} onChange={update("service")} className="field">
                  <option value="">Not sure yet</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.label}>{s.label}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[14px] font-semibold text-ink">Tell us a bit more</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  className="field resize-y min-h-[140px]"
                  placeholder="e.g. We spend hours every week copying orders into a spreadsheet…"
                />
              </div>

              <button type="submit" className="btn-ghost w-full !border-accent/50 hover:!border-accent">
                Send message
                <Send className="w-4 h-4" />
              </button>

              <p className="text-center text-[13px] text-ink-mute" aria-live="polite">
                {opened
                  ? "Your email app should now be open with your message ready to send."
                  : "This opens your email app with your message ready to send to both of us."}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
