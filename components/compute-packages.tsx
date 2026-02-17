"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check, TrendingUp } from "lucide-react"
import Link from "next/link"

const packages = [
  {
    name: "Flexible Deployment",
    power: "Sub-1MW to 5MW",
    subtitle: "Ideal for startups, research teams, and emerging AI workloads.",
    tagline: "Designed for flexibility without long-term overcommitment.",
    features: [
      "Bring Your Own Compute (BYOC) or managed GPU cloud",
      "NVIDIA B200 & H200 options",
      "Liquid Immersion or Liquid-to-Chip cooling",
      "Shared or semi-dedicated infrastructure",
      "24/7 enterprise monitoring & support",
      "Seamless path to larger capacity tiers",
    ],
    highlighted: false,
  },
  {
    name: "Dedicated AI Infrastructure",
    power: "5MW to 50MW",
    subtitle: "Production-scale environments for enterprise and industrial AI.",
    tagline: "Built for sustained, high-density AI operations.",
    features: [
      "BYOC or managed AI cloud deployment",
      "Dedicated power & cooling zones",
      "Custom networking & private interconnect",
      "Enterprise-grade SLAs",
      "Advanced monitoring & analytics",
      "Multi-year reserved pricing options",
    ],
    highlighted: true,
  },
  {
    name: "Sovereign-Scale AI Campus",
    power: "50MW to 250MW+",
    subtitle: "Private large-scale deployments for hyperscale, government, and national AI programs.",
    tagline: "Engineered for national, hyperscale, and mission-critical AI infrastructure.",
    features: [
      "Dedicated modular capacity",
      "Complete physical and network isolation",
      "Custom architecture & compliance support",
      "On-site operations & technical teams",
      "Long-term energy-backed reliability",
      "Expansion runway to 250MW+",
    ],
    highlighted: false,
  },
]

export default function ComputePackages() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="compute" ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Flexible AI Compute. </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Enterprise-Ready.
            </span>
          </h2>
          <p className="text-lg text-accent max-w-3xl mx-auto">
            AI infrastructure designed for startups, enterprise, hyperscale, and sovereign workloads — with flexible cooling, transparent pricing, and scalable deployment options.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                pkg.highlighted ? "lg:scale-105 lg:z-10" : ""
              }`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {pkg.highlighted && (
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/50 via-transparent to-secondary/50 rounded-2xl opacity-50 blur-xl" />
              )}

              <div
                className={`relative p-8 rounded-2xl border backdrop-blur-sm h-full flex flex-col ${
                  pkg.highlighted ? "border-primary/50 bg-primary/10" : "border-primary/20 bg-card/50"
                }`}
              >
                {pkg.highlighted && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 border border-primary/50 text-xs font-semibold text-primary flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Most Popular
                  </div>
                )}

                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-primary font-semibold text-lg mb-3">{pkg.power}</p>
                  <p className="text-accent text-sm leading-relaxed">{pkg.subtitle}</p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <span className="text-accent text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Tagline */}
                <div className="border-t border-primary/20 pt-4 mb-6">
                  <p className="text-sm text-primary font-medium italic">{pkg.tagline}</p>
                </div>

                <Link href="/compute">
                  <motion.button
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      pkg.highlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "border border-primary/50 text-primary hover:bg-primary/10"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
