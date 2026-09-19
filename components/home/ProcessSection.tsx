"use client";

import { useState, useEffect, useRef } from "react";
import { Search, Hammer, Rocket, LineChart } from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export default function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Audit & Architecture",
      timing: "Day 1 to 5",
      description:
        "We review your current software subscriptions, manual workflows, and communication bottlenecks to identify exactly what can be automated.",
      icon: Search,
    },
    {
      step: "02",
      title: "Build & Integrate",
      timing: "Day 6 to 14",
      description:
        "We build custom automations, wire API connections, and train task-specific AI agents against your internal data and requirements.",
      icon: Hammer,
    },
    {
      step: "03",
      title: "Launch & Guardrail",
      timing: "Day 15 to 20",
      description:
        "We run sandbox tests, configure automated fallback safety checks, train your team, and deploy with zero downtime.",
      icon: Rocket,
    },
    {
      step: "04",
      title: "Monitor & Optimize",
      timing: "Ongoing Iteration",
      description:
        "We inspect execution logs, maintain API compatibility, and refine agent accuracy as your operational volume increases.",
      icon: LineChart,
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [lineProgress, setLineProgress] = useState(0); // 0 to 100
  const [litStages, setLitStages] = useState<number[]>([]);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setLineProgress(100);
      setLitStages([0, 1, 2, 3]);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;

          // Start drawing the timeline line
          setLineProgress(100);

          // Staggered node lighting sequence (~1.4s total, staggered ~400ms)
          setLitStages((prev) => [...prev, 0]);

          const t1 = setTimeout(() => {
            setLitStages((prev) => [...prev, 1]);
          }, 450);

          const t2 = setTimeout(() => {
            setLitStages((prev) => [...prev, 2]);
          }, 900);

          const t3 = setTimeout(() => {
            setLitStages((prev) => [...prev, 3]);
          }, 1350);

          return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
          };
        }
      },
      { threshold: 0.2 }
    );

    const currentEl = sectionRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="how-we-work"
      className="w-full py-20 sm:py-28 border-b border-hairline relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with tight local scrim */}
        <div className="max-w-3xl mb-14 sm:mb-18 relative">
          <div
            className="pointer-events-none absolute -inset-x-6 -inset-y-4 rounded-2xl z-0"
            style={{
              background: "radial-gradient(ellipse at center, rgba(11, 11, 14, 0.88) 0%, rgba(11, 11, 14, 0.5) 70%, transparent 100%)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 space-y-4">
            <div>
              <span className="tag-category">
                Process
              </span>
            </div>
            <h2 className="display-lg text-ink">
              How we work with you.
            </h2>
            <p className="body-lg text-ink-secondary">
              A clear four-stage engagement model structured to deliver production-ready systems without unnecessary delays.
            </p>
          </div>
        </div>

        {/* Desktop Horizontal Connected Timeline Tracker (hidden on mobile) */}
        <div className="hidden lg:block relative mb-12" aria-hidden="true">
          {/* Base track */}
          <div className="absolute top-1/2 left-[12.5%] right-[12.5%] h-[2px] bg-hairline -translate-y-1/2 z-0" />

          {/* Animated drawing line */}
          <div
            className="absolute top-1/2 left-[12.5%] h-[2px] bg-primary -translate-y-1/2 z-0 origin-left"
            style={{
              width: `${(lineProgress * 0.75).toFixed(1)}%`,
              transition: prefersReducedMotion ? "none" : "width 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />

          {/* 4 Stage Nodes */}
          <div className="grid grid-cols-4 relative z-10">
            {steps.map((item, idx) => {
              const isLit = litStages.includes(idx);
              return (
                <div key={`timeline-node-${item.step}`} className="flex flex-col items-center">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border-2"
                    style={{
                      backgroundColor: isLit ? "var(--primary-soft)" : "var(--canvas)",
                      borderColor: isLit ? "var(--primary)" : "var(--hairline)",
                      boxShadow: isLit ? "0 0 12px rgba(255, 106, 26, 0.35)" : "none",
                    }}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full transition-colors duration-300"
                      style={{
                        backgroundColor: isLit ? "var(--primary)" : "var(--hairline)",
                      }}
                    />
                  </div>
                  <span
                    className="caption font-mono mt-2 transition-colors duration-300 font-semibold"
                    style={{
                      color: isLit ? "var(--primary)" : "var(--ink-mute)",
                    }}
                  >
                    Stage {item.step}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4-Step Cards Grid with Mobile Vertical Timeline Line */}
        <div className="relative">
          {/* Mobile Vertical Connecting Line (<lg) */}
          <div className="lg:hidden absolute top-6 bottom-6 left-6 w-[2px] bg-hairline z-0" aria-hidden="true">
            <div
              className="w-full bg-primary origin-top"
              style={{
                height: `${lineProgress}%`,
                transition: prefersReducedMotion ? "none" : "height 1.4s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const isLit = litStages.includes(index);

              return (
                <div
                  key={item.step}
                  className="card-feature flex flex-col justify-between space-y-6 transition-all duration-300"
                  style={{
                    borderColor: isLit ? "rgba(255, 106, 26, 0.3)" : "var(--hairline)",
                  }}
                >
                  <div className="space-y-4">
                    {/* Top Step Counter & Icon with Mobile Node */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {/* Mobile Node Dot (<lg) */}
                        <div
                          className="lg:hidden w-5 h-5 rounded-full flex items-center justify-center border transition-all duration-300 flex-shrink-0"
                          style={{
                            backgroundColor: isLit ? "var(--primary-soft)" : "var(--canvas)",
                            borderColor: isLit ? "var(--primary)" : "var(--hairline)",
                          }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{
                              backgroundColor: isLit ? "var(--primary)" : "var(--hairline)",
                            }}
                          />
                        </div>

                        <span
                          className="font-display text-2xl font-bold transition-colors duration-300"
                          style={{
                            color: isLit ? "var(--primary)" : "var(--ink-mute)",
                          }}
                        >
                          {item.step}
                        </span>
                      </div>

                      <div
                        className="w-9 h-9 rounded-md border flex items-center justify-center transition-all duration-300"
                        style={{
                          backgroundColor: isLit ? "var(--primary-soft)" : "var(--canvas)",
                          borderColor: isLit ? "var(--primary)" : "var(--hairline)",
                          color: isLit ? "var(--primary)" : "var(--ink-mute)",
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title & Timing */}
                    <div>
                      <h3 className="heading-sm text-ink leading-snug">
                        {item.title}
                      </h3>
                      <div className="caption text-ink-mute font-mono mt-1">
                        {item.timing}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="body-sm text-ink-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-hairline caption text-ink-mute">
                    Stage {item.step} of 04
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
