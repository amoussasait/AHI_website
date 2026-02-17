"use client"

import { motion } from "framer-motion"
import { Factory, Zap, TrendingDown } from "lucide-react"

export default function ScopeMandates() {
  const scopes = [
    {
      icon: Factory,
      number: "1",
      title: "Scope 1",
      description:
        "AHI reduces direct emissions through on-site combined heat and power, solar panels, and battery storage—with future-ready carbon capture integration.",
    },
    {
      icon: Zap,
      number: "2",
      title: "Scope 2",
      description:
        "We supply clean energy on-site through solar power and battery storage, with EV charging and hydrogen-ready systems—helping tenants avoid emissions from using external utilities or fuel-based transportation.",
    },
    {
      icon: TrendingDown,
      number: "3",
      title: "Scope 3",
      description:
        "By colocating logistics, AI computing, and advanced manufacturing, AHI helps tenants reduce supply chain emissions—cutting carbon from how products and people move to and from site.",
    },
  ]

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-secondary/50 to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">ESG Mandates</h2>
          <p className="text-xl text-accent max-w-3xl mx-auto">
            Transitioning to Ultra-Low Carbon and Net Zero Energy—Aligns With Scope 1, 2, 3 Mandates
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {scopes.map((scope, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-card rounded-2xl p-8 border border-primary/20 hover:border-primary/50 transition-all h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">{scope.number}</span>
                  </div>
                  <scope.icon className="w-8 h-8 text-primary mt-2" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{scope.title}</h3>
                <p className="text-accent leading-relaxed">{scope.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
