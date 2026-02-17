export default function ConstructionProgress() {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-2 pb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-primary">Building the Future</h2>
        <p className="text-xl font-semibold text-white mb-4">First Power. First AI Cluster. 2026.</p>
        <p className="text-lg text-accent max-w-3xl mx-auto mb-4">
          {"AHI's sovereign AI campus comes online in Western Canada in 2026 — delivering secure, high-density compute with long-term expansion capacity."}
        </p>
        <p className="text-lg text-accent max-w-3xl mx-auto">
          Now advancing strategic partnerships with cloud and hyperscale operators securing prime footprint in Canada's next-generation AI infrastructure hub.
        </p>
      </div>

      <div className="relative w-full rounded-2xl overflow-hidden border border-primary/20 shadow-2xl">
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/A3gIOQ4Lsvk"
            title="AHI Data Centre Construction Progress"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      <div className="relative h-px bg-gradient-to-r from-transparent via-primary to-transparent mt-16 mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-sm" />
      </div>

      <h3 className="text-3xl font-bold text-white text-center mb-10">6 Strategic Site Pillars</h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            number: "01",
            title: "Active Construction",
            description: "First power and initial AI cluster delivering 2026.",
            footer: "Civil, structural, and energy infrastructure underway.",
          },
          {
            number: "02",
            title: "Secured Long-Lead Infrastructure",
            description: "Prime generation, switchgear, transformers, and AI infrastructure equipment secured.",
            footer: "Reducing deployment risk and schedule uncertainty.",
          },
          {
            number: "03",
            title: "Power at Scale",
            description: "On-site generation, grid interconnection, and export capability engineered for long-term expansion and reliability.",
            footer: "",
          },
          {
            number: "04",
            title: "Strategic Canadian Location",
            description: "Access to 4.5M+ population within a 100-mile radius.",
            footer: "Direct connectivity to Calgary & Edmonton International Airports and major highway corridors.",
          },
          {
            number: "05",
            title: "Carrier-Grade Connectivity",
            description: "Dual-path fibre architecture with scalable 400G+ backbone, multi-carrier access, and low-latency regional routing.",
            footer: "",
          },
          {
            number: "06",
            title: "BSI-Zoned Hyperscale Campus",
            description: "Designated Business Service Industrial (BSI) zoning with a fully completed master plan supporting up to 44 modular data halls (6–8MW each).",
            footer: "Purpose-built for rapid deployment, high-density compute, and long-term campus expansion.",
          },
        ].map((card) => (
          <div key={card.number} className="bg-gradient-to-br from-secondary to-primary/10 rounded-lg p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300">
            <div className="text-3xl font-bold text-primary/30 mb-3">{card.number}</div>
            <h3 className="text-xl font-semibold text-primary mb-3">{card.title}</h3>
            <p className="text-accent leading-relaxed">{card.description}</p>
            {card.footer && (
              <>
                <div className="border-t border-primary/20 mt-3 mb-4" />
                <p className="text-accent leading-relaxed">{card.footer}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
