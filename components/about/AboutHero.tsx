export default function AboutHero() {
  return (
    <section className="w-full bg-canvas pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 border-b border-hairline">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div>
          <span className="tag-category">
            About
          </span>
        </div>

        {/* PLACEHOLDER COPY — replace before launch */}
        <h1 className="display-lg text-ink text-balance">
          A small studio, built to move like one.
        </h1>

        {/* PLACEHOLDER COPY — replace before launch */}
        <p className="body-lg text-ink-secondary max-w-2xl mx-auto leading-relaxed">
          DevSolutions is an early-stage applied AI and automation studio — you work directly with the people building your systems, not a layer of account management.
        </p>
      </div>
    </section>
  );
}
