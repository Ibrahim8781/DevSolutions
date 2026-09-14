"use client";

import { useState } from "react";
import { Calendar, Send, CheckCircle2, ArrowRight, Shield, Video, Sparkles } from "lucide-react";

export default function ContactHub() {
  const bookingUrl = "https://cal.com/miharbi-damha-omxkej/15min";

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Growth & Automation (Automations, Integrations, AI Agents, Voice AI)",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setIsSubmitting(true);
    // Simulate interactive submission / CRM webhook post
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "Growth & Automation (Automations, Integrations, AI Agents, Voice AI)",
      message: "",
    });
    setIsSubmitted(false);
  };

  return (
    <section className="w-full py-16 sm:py-24 bg-white border-b border-[#e3e8ee]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Calendar Booking (Path A) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#f6f9fc] border border-[#e3e8ee] p-7 sm:p-9 flex flex-col justify-between shadow-[0_1px_3px_rgba(0,55,112,0.06)]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#533afd]/10 text-[#533afd] text-xs font-mono font-medium">
                <Calendar className="w-3.5 h-3.5" />
                PATH 01 · FAST TRACK
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-light text-[#0d253d] tracking-[-0.6px]">
                  Book a 15-minute diagnostic call
                </h2>
                <p className="text-[15px] font-light text-[#64748d] leading-relaxed">
                  Skip the email tag. Select an available slot directly on our systems architect&apos;s live calendar.
                </p>
              </div>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-start gap-3 text-[14px] font-light text-[#273951]">
                  <Video className="w-4 h-4 text-[#533afd] flex-shrink-0 mt-0.5" />
                  <span>Live 1-on-1 Google Meet screen-share with a technical architect.</span>
                </div>
                <div className="flex items-start gap-3 text-[14px] font-light text-[#273951]">
                  <Sparkles className="w-4 h-4 text-[#533afd] flex-shrink-0 mt-0.5" />
                  <span>Immediate ROI and automation viability diagnosis.</span>
                </div>
                <div className="flex items-start gap-3 text-[14px] font-light text-[#273951]">
                  <Shield className="w-4 h-4 text-[#533afd] flex-shrink-0 mt-0.5" />
                  <span>Strictly confidential. No sales pitch decks or junior reps.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#e3e8ee] space-y-3">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 text-sm font-normal text-white bg-[#533afd] hover:bg-[#4434d4] active:bg-[#2e2b8c] px-6 py-3.5 rounded-full transition-all shadow-sm hover:shadow-md min-h-[44px]"
              >
                <span>Select a time on Cal.com</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-center text-xs font-mono text-[#64748d]">
                Available globally • Instant confirmation
              </p>
            </div>
          </div>

          {/* Right Column: Short Inquiry Form (Path B) */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-[#e3e8ee] p-7 sm:p-10 shadow-[0_8px_24px_rgba(0,55,112,0.06)]">
            <div className="space-y-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f6f9fc] text-[#64748d] text-xs font-mono border border-[#e3e8ee]">
                PATH 02 · DETAILED SCOPE
              </div>
              <h2 className="text-2xl sm:text-3xl font-light text-[#0d253d] tracking-[-0.6px]">
                Send us your project details
              </h2>
              <p className="text-sm font-light text-[#64748d]">
                Have a written specification or complex requirements? Fill out the details below and we will reply within 24 business hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="rounded-xl bg-[#f6f9fc] border border-[#e3e8ee] p-8 text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-light text-[#0d253d]">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-sm font-light text-[#64748d] max-w-md mx-auto">
                    Thank you, {formData.name}. Our systems architect has received your scope for{" "}
                    <strong className="font-medium text-[#273951]">{formData.service}</strong> and will review your requirements within 24 hours.
                  </p>
                </div>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs font-medium text-[#533afd] hover:underline focus:outline-none"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                    {errorMessage}
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-[#0d253d] block">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-md border border-[#a8c3de] bg-white text-[#0d253d] text-sm focus:outline-none focus:ring-2 focus:ring-[#533afd]/20 focus:border-[#533afd] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-[#0d253d] block">
                      Work Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-md border border-[#a8c3de] bg-white text-[#0d253d] text-sm focus:outline-none focus:ring-2 focus:ring-[#533afd]/20 focus:border-[#533afd] transition-all"
                    />
                  </div>
                </div>

                {/* Company / Website */}
                <div className="space-y-1.5">
                  <label htmlFor="company" className="text-xs font-medium text-[#0d253d] block">
                    Company Name / Website
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="company.com"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-md border border-[#a8c3de] bg-white text-[#0d253d] text-sm focus:outline-none focus:ring-2 focus:ring-[#533afd]/20 focus:border-[#533afd] transition-all"
                  />
                </div>

                {/* Three-Pillar Service Dropdown */}
                <div className="space-y-1.5">
                  <label htmlFor="service" className="text-xs font-medium text-[#0d253d] block">
                    Primary Service of Interest <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-md border border-[#a8c3de] bg-white text-[#0d253d] text-sm focus:outline-none focus:ring-2 focus:ring-[#533afd]/20 focus:border-[#533afd] transition-all"
                  >
                    <option value="Growth & Automation (Automations, Integrations, AI Agents, Voice AI)">
                      Pillar 01: Growth & Automation (Automations, Integrations, AI Agents, Voice AI)
                    </option>
                    <option value="Marketing & Creative (SEO, Graphic Design/Video, Web Design/Branding)">
                      Pillar 02: Marketing & Creative (SEO, Graphic Design/Video, Web Design/Branding)
                    </option>
                    <option value="Trading Technologies (Trading Bots & Strategy Automation)">
                      Pillar 03: Trading Technologies (Trading Bots & Strategy Automation)
                    </option>
                    <option value="Full-Stack Custom Engagement (Multiple Pillars)">
                      Custom Multi-Pillar Engagement
                    </option>
                  </select>
                </div>

                {/* Project Scope / Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-[#0d253d] block">
                    Project Scope / Current Bottlenecks <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe what you want to automate, the software tools you currently use, or your strategy requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-md border border-[#a8c3de] bg-white text-[#0d253d] text-sm focus:outline-none focus:ring-2 focus:ring-[#533afd]/20 focus:border-[#533afd] transition-all leading-relaxed"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-normal text-white bg-[#533afd] hover:bg-[#4434d4] active:bg-[#2e2b8c] px-8 py-3.5 rounded-full transition-all shadow-sm min-h-[44px] disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send project inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
