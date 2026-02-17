"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Flame, Battery, Sun, Wind, CheckCircle2 } from "lucide-react"

const infrastructure = [
  {
    label: "Cogeneration Engines",
    value: "250 MW",
    desc: "Rolls-Royce MTU hydrogen-capable",
    icon: Flame,
    benefit: "Baseload power independence",
    color: "#00FFC8",
  },
  {
    label: "Battery Storage",
    value: "100 MW",
    desc: "Grid stabilization & peak load",
    icon: Battery,
    benefit: "Peak demand management",
    color: "#0C1B33",
  },
  {
    label: "Solar Integration",
    value: "50 MW",
    desc: "Clean energy supplement",
    icon: Sun,
    benefit: "Renewable energy mix",
    color: "#C0C8D1",
  },
  {
    label: "Hydrogen Ready",
    value: "Future",
    desc: "Carbon-neutral transition path",
    icon: Wind,
    benefit: "Carbon-capture integration",
    color: "#00FFC8",
  },
]

export default function EnergyInfrastructure() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="energy" ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Multi-Modal Energy Powers </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Uninterrupted AI Compute
            </span>
          </h2>
          <p className="text-lg text-accent max-w-3xl mx-auto leading-relaxed">
            250 MW of proven cogeneration, 100 MW of battery resilience, and 50 MW of solar integration—enabling
            carbon-efficient, waterless AI compute with 99.99% uptime resilience. Hydrogen-ready infrastructure ensures
            long-term carbon-capture integration through Energy Haven and Havenz Carbon Terminal.
          </p>
        </motion.div>

        {/* Infrastructure grid with enhanced visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {infrastructure.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Glow background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Card */}
                <div className="relative p-6 rounded-xl border border-primary/30 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <motion.div
                      className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full"
                      animate={{ width: ["48px", "100%", "48px"] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    />
                  </div>
                  <h3 className="text-muted-foreground text-xs uppercase tracking-wider mb-2 font-semibold">
                    {item.label}
                  </h3>
                  <p className="text-3xl font-bold text-primary mb-3">{item.value}</p>
                  <p className="text-xs text-accent mb-3">{item.desc}</p>
                  <div className="flex items-start gap-2 pt-3 border-t border-primary/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-primary font-medium">{item.benefit}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Enhanced Timeline with stronger narrative */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white mb-3">Energy Infrastructure Roadmap</h3>
            <p className="text-accent text-sm max-w-2xl">
              Phased deployment of proven energy systems ensuring operational excellence at every stage while
              positioning AHI for carbon-neutral evolution.
            </p>
          </div>

          {[
            {
              year: "Phase 1",
              title: "Core Cogeneration Launch",
              desc: "Rolls-Royce MTU engines operational providing 250 MW baseload power—ensuring independent, reliable compute operations from day one.",
              status: "Operational",
            },
            {
              year: "Phase 2",
              title: "Solar Integration Deployment",
              desc: "50 MW solar array activation delivering clean energy supplement, reducing grid dependency and enhancing environmental leadership.",
              status: "Planned",
            },
            {
              year: "Phase 3",
              title: "Battery System Activation",
              desc: "100 MW energy storage launch enabling grid stabilization, peak load management, and emergency resilience for 99.99% uptime guarantee.",
              status: "Planned",
            },
            {
              year: "Phase 4",
              title: "Hydrogen Transition Readiness",
              desc: "Carbon-capture integration and hydrogen fuel conversion pathway—positioning AHI as Canada's long-term carbon-neutral AI infrastructure leader.",
              status: "Roadmap",
            },
          ].map((phase, i) => (
            <motion.div
              key={i}
              className="flex gap-6 items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              <div className="relative flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-sm font-bold text-primary-foreground">{i + 1}</span>
                </div>
                {i < 3 && <div className="w-1 h-12 bg-gradient-to-b from-primary to-secondary/30 mt-2" />}
              </div>
              <div className="pb-6">
                <p className="text-primary font-semibold text-sm">{phase.year}</p>
                <h4 className="text-xl font-bold text-white mb-2">{phase.title}</h4>
                <p className="text-muted-foreground leading-relaxed mb-3">{phase.desc}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      phase.status === "Operational"
                        ? "bg-green-500"
                        : phase.status === "Planned"
                          ? "bg-accent"
                          : "bg-muted-foreground"
                    }`}
                  />
                  <span className="text-xs font-semibold text-primary">{phase.status}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
