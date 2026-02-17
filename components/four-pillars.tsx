"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Leaf, Building2 } from "lucide-react"

export default function FourPillars() {
  const pillars = [
    {
      icon: Zap,
      number: "01",
      title: "Energy Sovereignty",
      description:
        "250MW+ onsite dispatchable generation with battery and solar integration.",
      footer:
        "Hydrogen-ready architecture provides a clear pathway to 100% hydrogen operation — protecting long-term ESG and regulatory resilience.",
      color: "from-cyan-500/20 to-teal-500/20",
      iconColor: "text-cyan-400",
    },
    {
      icon: Shield,
      number: "02",
      title: "Digital Sovereignty",
      description:
        "Canadian-controlled AI infrastructure with secure network architecture, physical hardening, and compliance-ready deployment for enterprise and national workloads.",
      footer: "",
      color: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: Leaf,
      number: "03",
      title: "Regenerative Heat & Food Systems",
      description:
        "Recovered thermal energy from onsite generation powers controlled-environment vertical agriculture — reducing waste heat, enhancing ESG performance, and strengthening regional food security.",
      footer:
        "This is infrastructure efficiency — not agriculture as an add-on.",
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400",
    },
    {
      icon: Building2,
      number: "04",
      title: "Smart Industrial Ecosystem",
      description:
        "A master-planned AI campus integrating compute, energy, cooling, and circular resource reuse — creating high-value employment and a template for next-generation smart industrial communities.",
      footer: "",
      color: "from-slate-500/20 to-gray-500/20",
      iconColor: "text-slate-400",
    },
  ]

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Built Within AI. Designed for Sovereign Infrastructure.
          </h2>
          <p className="text-xl text-accent max-w-3xl mx-auto">
            A fully integrated, AI-optimized campus combining energy, compute, heat recovery, and regenerative systems into one secure, scalable platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl p-8 border border-primary/20 bg-gradient-to-br ${pillar.color} backdrop-blur-sm hover:border-primary/50 transition-all group`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <pillar.icon className={`w-10 h-10 ${pillar.iconColor}`} />
                  <span className="text-3xl font-bold text-primary/25">{pillar.number}</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{pillar.title}</h3>
                <p className="text-accent leading-relaxed">{pillar.description}</p>
                {pillar.footer && (
                  <>
                    <div className="border-t border-primary/20 mt-4 mb-4" />
                    <p className="text-accent leading-relaxed">{pillar.footer}</p>
                  </>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
