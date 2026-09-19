export default function ServicesHero() {
  return (
    <section
      id="services-hero"
      className="w-full bg-canvas pt-14 pb-16 sm:pt-18 sm:pb-20 lg:pt-20 lg:pb-24 border-b border-hairline relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div>
            <span className="tag-category">Capabilities</span>
          </div>

          <h1 className="display-lg text-ink text-balance">
            Services built to deliver clear operational results.
          </h1>

          <p className="body-lg text-ink-secondary max-w-2xl mx-auto leading-relaxed">
            A flat suite of 8 core services. Every service is delivered as a peer with transparent scopes and direct technical ownership.
          </p>
        </div>
      </div>
    </section>
  );
}
