import PageLayout from "@/components/page-layout"
import DatacenterBackground from "@/components/datacenter-background"

export const metadata = {
  title: "HavenzHub | AHI AI Hub of Innovation",
  description: "HavenzHub is the operational nerve centre of the AHI campus, connecting tenants, partners, and infrastructure through a unified platform.",
}

export default function HavenzHubPage() {
  return (
    <PageLayout>
      <DatacenterBackground />
      <section className="pt-8 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              HavenzHub
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-12">
            The operational nerve centre of the AHI campus, connecting tenants, partners, and infrastructure through a unified intelligent platform.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Tenant Portal",
                description: "Real-time monitoring, resource management, and billing for all campus tenants.",
              },
              {
                title: "Energy Dashboard",
                description: "Live energy generation, consumption, and carbon offset tracking across the campus.",
              },
              {
                title: "Partner Ecosystem",
                description: "Collaboration tools and shared resources connecting all AHI partners and stakeholders.",
              },
              {
                title: "Smart Campus Operations",
                description: "AI-driven facility management, security, and environmental monitoring.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-xl border border-primary/20 bg-card/50 hover:border-primary/40 transition-all"
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
