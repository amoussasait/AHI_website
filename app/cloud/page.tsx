"use client"

import PageLayout from "@/components/page-layout"
import { Server, Database, Network, Shield } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CloudPage() {
  const services = [
    {
      icon: Server,
      title: "Compute",
      description: "Scalable GPU and CPU infrastructure for AI workloads, from startups to hyperscale deployments.",
      href: "/cloud/compute",
    },
    {
      icon: Database,
      title: "Storage",
      description: "High-performance storage solutions with sovereign data residency and enterprise-grade redundancy.",
      href: "/cloud/storage",
    },
    {
      icon: Network,
      title: "Networking",
      description: "Low-latency connectivity with multi-carrier access and 400G+ scalable backbone infrastructure.",
      href: "/cloud/networking",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Government-grade security with compliance frameworks, physical hardening, and 24/7 monitoring.",
      href: "/cloud/security",
    },
  ]

  return (
    <PageLayout
      title="Canadian Cloud Infrastructure You Can Trust"
      subtitle="Sovereign cloud services with full data residency, enterprise security, and high-performance computing"
    >
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={service.href}>
                  <div className="group h-full p-8 rounded-2xl border border-primary/20 bg-card/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-pointer">
                    <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-accent leading-relaxed">{service.description}</p>
                    <div className="mt-6 flex items-center text-primary text-sm font-semibold">
                      Explore {service.title}
                      <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>
    </PageLayout>
  )
}
