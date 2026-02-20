"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"
import { Zap, Building2, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CloudComputePage() {
  const computeOptions = [
    {
      icon: Zap,
      title: "Starter Node",
      capacity: "Sub-1MW to 5MW",
      description: "Perfect for startups, research teams, and emerging AI workloads requiring flexibility without long-term commitment.",
      features: [
        "BYOC or managed GPU cloud",
        "NVIDIA B200 & H200 options",
        "Liquid immersion or liquid-to-chip cooling",
        "24/7 enterprise monitoring",
      ],
      href: "/compute/starter-node",
    },
    {
      icon: Building2,
      title: "Enterprise Cluster",
      capacity: "5MW to 50MW",
      description: "Production-scale environments designed for enterprise and industrial AI operations.",
      features: [
        "Dedicated power & cooling zones",
        "Custom networking & private interconnect",
        "Enterprise-grade SLAs",
        "Multi-year reserved pricing",
      ],
      href: "/compute/enterprise",
      highlighted: true,
    },
    {
      icon: Globe,
      title: "Sovereign Suite",
      capacity: "50MW to 250MW+",
      description: "Private large-scale deployments for hyperscale, government, and national AI programs.",
      features: [
        "Complete physical and network isolation",
        "Custom architecture & compliance support",
        "On-site operations & technical teams",
        "Expansion runway to 250MW+",
      ],
      href: "/compute/sovereign",
    },
  ]

  return (
    <PageLayout
      title="AI Compute Built for Scale"
      subtitle="From rapid prototyping to hyperscale production, sovereign GPU infrastructure tailored to your needs"
    >
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {computeOptions.map((option, idx) => {
            const Icon = option.icon
            return (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={option.highlighted ? "lg:scale-105" : ""}
              >
                <div
                  className={`relative h-full p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                    option.highlighted
                      ? "border-primary/50 bg-primary/10"
                      : "border-primary/20 bg-card/50 hover:border-primary/40"
                  }`}
                >
                  {option.highlighted && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 border border-primary/50 text-xs font-semibold text-primary">
                      Most Popular
                    </div>
                  )}

                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{option.title}</h3>
                  <p className="text-primary font-semibold text-lg mb-3">{option.capacity}</p>
                  <p className="text-accent mb-6">{option.description}</p>

                  <ul className="space-y-3 mb-8">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-accent">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href={option.href}>
                    <button
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                        option.highlighted
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "border border-primary/50 text-primary hover:bg-primary/10"
                      }`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>
    </PageLayout>
  )
}
