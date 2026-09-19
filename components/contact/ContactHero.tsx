export default function ContactHero() {
  return (
    <section className="w-full bg-canvas pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-hairline">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div>
          <span className="tag-category">
            Contact
          </span>
        </div>

        {/* PLACEHOLDER COPY — replace before launch */}
        <h1 className="display-lg text-ink text-balance">
          Let&apos;s talk about what&apos;s slowing you down.
        </h1>

        {/* PLACEHOLDER COPY — replace before launch */}
        <p className="body-lg text-ink-secondary max-w-2xl mx-auto leading-relaxed">
          Book a call directly, or send a quick message below.
        </p>
      </div>
    </section>
  );
}
