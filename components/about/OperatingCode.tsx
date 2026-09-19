import { UserCheck, Target, Code2, ShieldAlert } from "lucide-react";

export default function OperatingCode() {
  const principles = [
    {
      icon: UserCheck,
      title: "Direct ownership",
      /* PLACEHOLDER COPY — replace before launch */
      description: "The person who designs your system is the same person who builds and maintains it.",
    },
    {
      icon: Target,
      title: "Fixed scope, upfront",
      /* PLACEHOLDER COPY — replace before launch */
      description: "You know what you're getting and what it costs before work starts.",
    },
    {
      icon: Code2,
      title: "Working software over decks",
      /* PLACEHOLDER COPY — replace before launch */
      description: "Priority goes to something you can actually use, not a proposal deck.",
    },
    {
      icon: ShieldAlert,
      title: "Say what we don't know",
      /* PLACEHOLDER COPY — replace before launch */
      description: "If something's outside our scope, we say so instead of overselling it.",
    },
  ];

  return (
    <section className="w-full bg-canvas py-20 sm:py-28 border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16 space-y-4">
          <div>
            <span className="tag-category">
              Principles
            </span>
          </div>
          <h2 className="display-lg text-ink">
            Our operating code.
          </h2>
          <p className="body-lg text-ink-secondary">
            Four operating standards that govern how we build systems, communicate progress, and structure client engagements.
          </p>
        </div>

        {/* 4 Card-Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="card-feature bg-canvas-raised border border-hairline p-8 rounded-lg space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-md bg-canvas border border-hairline flex items-center justify-center text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="heading-sm text-ink leading-snug">
                    {item.title}
                  </h3>
                  {/* PLACEHOLDER COPY — replace before launch */}
                  <p className="body-sm text-ink-secondary leading-relaxed">
                    {item.description}
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
