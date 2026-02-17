import PageLayout from "@/components/page-layout"

export const metadata = {
  title: "Cloud | AHI AI Hub of Innovation",
  description: "Sovereign cloud services built on Canadian infrastructure with enterprise-grade security, compliance, and performance.",
}

export default function CloudPage() {
  return (
    <PageLayout>
      <section className="pt-8 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            <span className="text-white">Sovereign </span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Cloud
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mb-12">
            Canadian sovereign cloud infrastructure delivering enterprise-grade performance with full data residency compliance.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Colocation",
                description: "Secure, high-density colocation with redundant power and cooling in a purpose-built facility.",
              },
              {
                title: "Bare Metal",
                description: "Dedicated bare metal servers with direct access to the latest GPU and CPU hardware.",
              },
              {
                title: "Private Cloud",
                description: "Fully managed private cloud environments tailored to your security and compliance needs.",
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
