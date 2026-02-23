import PageLayout from "@/components/page-layout"

export const metadata = {
  title: "AI Infrastructure | AHI AI Hub of Innovation",
  description: "Enterprise-grade AI compute infrastructure with GPU clusters, high-performance networking, and sovereign data processing capabilities.",
}

export default function AIInfrastructurePage() {
  return (
    <PageLayout
      title="AI Infrastructure"
      subtitle="Purpose-built AI compute infrastructure delivering the performance, security, and scalability that enterprise AI workloads demand"
    >
      <section className="pt-8 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "GPU Compute Clusters",
                description: "High-density GPU infrastructure optimized for training and inference workloads, with the latest accelerator technology.",
              },
              {
                title: "High-Performance Networking",
                description: "Low-latency, high-bandwidth interconnects designed for distributed AI training at scale.",
              },
              {
                title: "Sovereign Data Processing",
                description: "All data remains within Canadian borders, meeting the strictest national security and compliance requirements.",
              },
              {
                title: "Managed AI Services",
                description: "End-to-end managed infrastructure so your team can focus on building models, not managing servers.",
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
