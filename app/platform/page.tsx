import PageLayout from "@/components/page-layout"

export const metadata = {
  title: "Platform | AHI AI Hub of Innovation",
  description: "AHI's sovereign AI and energy platform delivering behind-the-meter power and hyperscale infrastructure in Alberta, Canada.",
}

export default function PlatformPage() {
  return (
    <PageLayout>
      <section className="pt-8 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            <span className="text-white">The AHI </span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Platform
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-12">
            {"Canada's sovereign AI-ready infrastructure platform, purpose-built for hyperscale compute, clean energy generation, and next-generation data centre operations."}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Behind-the-Meter Power",
                description: "250MW+ of on-site prime power with grid connectivity for import and export redundancy.",
              },
              {
                title: "Hyperscale Ready",
                description: "Up to 500+ acres of expansion capacity designed for the largest AI and cloud workloads.",
              },
              {
                title: "Fibre Connectivity",
                description: "Multiple diverse fibre routes ensuring low-latency, high-bandwidth connectivity.",
              },
              {
                title: "Indigenous Partnerships",
                description: "Built on meaningful partnerships with First Nations communities, ensuring equitable opportunity.",
              },
              {
                title: "Sovereign Infrastructure",
                description: "Canadian-owned and operated, meeting national security and data sovereignty requirements.",
              },
              {
                title: "Scalable Architecture",
                description: "Modular design enabling rapid scaling from initial capacity to full campus buildout.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-primary/20 bg-card/50 hover:border-primary/40 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
