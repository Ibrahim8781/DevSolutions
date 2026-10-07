"use client";

import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import SectionHeader from "@/components/sections/SectionHeader";
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
      <div className="max-w-7xl 2xl:max-w-352 mx-auto px-5 sm:px-8 2xl:px-10">
        <div className="panel overflow-hidden grid grid-cols-1 lg:grid-cols-5">
          {/* Booking + direct email */}
          <div className="lg:col-span-2 p-7 sm:p-10 lg:border-r border-b lg:border-b-0 border-hairline">
            <SectionHeader
              eyebrow="Contact"
              title="Let's talk about your project."
              lead="The quickest way to start is a free 15-minute call. You'll get a fixed quote within 48 hours."
            />
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 w-full sm:w-auto">
              Book a free call
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="mt-10 border-t border-hairline pt-8">
              <p className="text-[14px] text-ink-mute">Or email us directly</p>
              <ul className="mt-4 space-y-4">
                {FOUNDERS.map((person) => (
                  <li key={person.email}>
                    <p className="text-[15px] font-medium text-ink">{person.name}</p>
                    <a
                      href={`mailto:${person.email}`}
                      className="mt-0.5 inline-flex items-center gap-2 text-[14px] text-ink-secondary hover:text-accent transition-colors break-all"
                    >
                      <Mail className="h-3.5 w-3.5 shrink-0" />
                      {person.email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Message form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 p-7 sm:p-10 space-y-5">
            <h3 className="text-h4">Send us a message</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[14px] text-ink-secondary">Your name</label>
                <input id="name" required value={form.name} onChange={update("name")} className="field" autoComplete="name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-[14px] text-ink-secondary">Email</label>
                <input id="email" type="email" required value={form.email} onChange={update("email")} className="field" autoComplete="email" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-[14px] text-ink-secondary">What do you need help with?</label>
              <select id="service" value={form.service} onChange={update("service")} className="field">
                <option value="">Not sure yet</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.label}>{s.label}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-[14px] text-ink-secondary">Tell us a bit more</label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={update("message")}
                className="field resize-y min-h-35"
                placeholder="e.g. We spend hours every week copying orders into a spreadsheet…"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
              <button type="submit" className="btn-secondary w-full sm:w-auto">
                Send message
              </button>
              <p className="text-[13px] text-ink-mute" aria-live="polite">
                {opened
                  ? "Your email app should now be open with your message ready to send."
                  : "Opens your email app with the message ready to send to both of us."}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
