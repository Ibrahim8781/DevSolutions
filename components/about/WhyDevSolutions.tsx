import { Clock, Layers, Users } from "lucide-react";

export default function WhyDevSolutions() {
  const points = [
    {
      icon: Clock,
      title: "The engineering gap",
      /* PLACEHOLDER COPY — replace before launch */
      text: "Most small and mid-size businesses can't justify hiring a full in-house engineering team, but still lose hours every week to manual, repetitive work.",
    },
    {
      icon: Layers,
      title: "In-house standards",
      /* PLACEHOLDER COPY — replace before launch */
      text: "DevSolutions exists to close that gap — backend automation, applied AI, and creative execution, delivered the way an in-house team would deliver it.",
    },
    {
      icon: Users,
      title: "Zero headcount drag",
      /* PLACEHOLDER COPY — replace before launch */
      text: "Get custom software automations and autonomous workflows running your business without the overhead, recruitment, or ongoing payroll of an internal team.",
    },
  ];

  return (
    <section className="w-full bg-canvas-raised py-20 sm:py-28 border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16 space-y-4">
          <div>
            <span className="tag-category">
              Mission
            </span>
          </div>
          <h2 className="display-lg text-ink">
            Why DevSolutions exists.
          </h2>
          {/* PLACEHOLDER COPY — replace before launch */}
          <p className="body-lg text-ink-secondary leading-relaxed">
            Most small and mid-size businesses can&apos;t justify hiring a full in-house engineering team, but still lose hours every week to manual, repetitive work. DevSolutions exists to close that gap — backend automation, applied AI, and creative execution, delivered the way an in-house team would deliver it, without the in-house headcount.
          </p>
        </div>

        {/* 3 Card-Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((pt) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className="card-feature bg-canvas border border-hairline p-8 rounded-lg space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-md bg-canvas-raised border border-hairline flex items-center justify-center text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="heading-sm text-ink">
                    {pt.title}
                  </h3>
                  {/* PLACEHOLDER COPY — replace before launch */}
                  <p className="body-sm text-ink-secondary leading-relaxed">
                    {pt.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
