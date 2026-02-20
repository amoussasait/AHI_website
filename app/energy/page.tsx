"use client"

import { motion } from "framer-motion"
import PageLayout from "@/components/page-layout"
import { Zap, Wind, Droplets, Leaf } from "lucide-react"
import DatacenterBackground from "@/components/datacenter-background"

export default function EnergyPage() {
  const systems = [
    {
      icon: Zap,
      name: "250MW Cogeneration",
      description:
        "Rolls-Royce MTU engines delivering 250MW thermal output with 10MW electrical generation for immediate deployment and 50MW+ scalability.",
      details: ["Hydrogen-ready fuel systems", "Real-time power management", "99.99% uptime SLA"],
    },
    {
      icon: Droplets,
      name: "100MW Battery Storage",
      description:
        "Advanced lithium-ion battery systems providing energy storage for load balancing, peak shaving, and emergency backup power.",
      details: ["4-hour sustained discharge", "Sub-second response time", "Cycle-optimized chemistry"],
    },
    {
      icon: Wind,
      name: "50MW Solar Integration",
      description:
        "Distributed solar arrays reducing daytime grid demand and contributing to ESG targets with real-time monitoring.",
      details: ["Smart inverter systems", "Dynamic load optimization", "15+ year performance warranty"],
    },
    {
      icon: Leaf,
      name: "Carbon Terminal",
      description:
        "Havenz Carbon Terminal captures and utilizes CO₂ from cogeneration, converting waste into valuable resources.",
      details: ["Direct air capture technology", "Emission offset certificates", "Circular economy contribution"],
    },
  ]

  return (
    <PageLayout
      title="Powering the Future with Clean Energy"
      subtitle="Advanced energy systems designed for sustainability and sovereign AI infrastructure"
    >
      <DatacenterBackground />
      {/* Energy Systems Overview */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {systems.map((system, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-card rounded-lg p-8 border border-primary/20 hover:border-primary/50 transition-all"
            >
              <system.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">{system.name}</h3>
              <p className="text-accent mb-6">{system.description}</p>
              <ul className="space-y-2">
                {system.details.map((detail, didx) => (
                  <li key={didx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hydrogen Roadmap */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-secondary via-primary/10 to-secondary rounded-2xl p-12 border border-primary/20"
        >
          <h2 className="text-3xl font-bold mb-8 text-primary">Hydrogen Transition Roadmap</h2>
          <div className="space-y-6">
            {[
              {
                phase: "Phase 1: 2024-2025",
                title: "Infrastructure Preparation",
                items: [
                  "Install hydrogen-compatible fuel injection systems",
                  "Establish hydrogen supply chain partnerships",
                  "Regulatory compliance and safety certification",
                ],
              },
              {
                phase: "Phase 2: 2025-2026",
                title: "Pilot Operations",
                items: [
                  "Commence 20% hydrogen blending trials",
                  "Performance monitoring and optimization",
                  "Scale to 50MW hydrogen-powered generation",
                ],
              },
              {
                phase: "Phase 3: 2026+",
                title: "Full Transition",
                items: [
                  "100% hydrogen fuel operation",
                  "Zero-carbon AI infrastructure",
                  "Export hydrogen surplus to grid",
                ],
              },
            ].map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{idx + 1}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-primary/80 font-semibold">{phase.phase}</p>
                  <h3 className="text-lg font-bold text-accent mb-3">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, iidx) => (
                      <li key={iidx} className="flex items-center gap-2 text-sm text-accent">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ESG Tracking */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">ESG Monitoring & Impact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              metric: "Real-Time Tracking",
              value: "IoT Sensor Network",
              description:
                "Continuous monitoring of energy consumption, emissions, and efficiency metrics via Havenz Smart Platform",
            },
            {
              metric: "Carbon Offset",
              value: "CO₂ Recovery",
              description:
                "Havenz Carbon Terminal captures industrial CO₂ for utilization in building materials and chemicals",
            },
            {
              metric: "Efficiency Score",
              value: "PUE 1.2",
              description:
                "Power Usage Effectiveness at or below 1.2, exceeding industry standards for data center efficiency",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-card rounded-lg p-8 border border-primary/20 text-center"
            >
              <p className="text-sm text-primary/80 mb-2">{item.metric}</p>
              <h3 className="text-2xl font-bold text-primary mb-4">{item.value}</h3>
              <p className="text-accent">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
