"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Landmark, GraduationCap, Cloud, Building2, ArrowUpRight } from "lucide-react"

const reasons = [
  {
    icon: Landmark,
    title: "Government & National Workloads",
    description:
      "Secure, Canadian-controlled infrastructure for federal, provincial, defence, and regulated public sector environments requiring data residency and compliance assurance.",
    benefit: "Government-grade security",
  },
  {
    icon: GraduationCap,
    title: "Research & Innovation",
    description:
      "AI and HPC capacity supporting universities, research institutions, and advanced innovation programs across Canada.",
    benefit: "Scalable research clusters",
  },
  {
    icon: Cloud,
    title: "Cloud & Hyperscale",
    description:
      "Strategic Canadian footprint with rapid deployment capacity for hyperscalers and cloud operators securing long-term sovereign expansion.",
    benefit: "Expansion-ready capacity",
  },
  {
    icon: Building2,
    title: "Enterprise & SME",
    description:
      "Flexible infrastructure for large enterprise and small-to-medium businesses deploying AI, analytics, and digital transformation workloads.",
    benefit: "Right-sized deployment options",
  },
]

export default function WhyAHI() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Built for Canada — </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Positioned for Global AI Infrastructure
            </span>
          </h2>
          <p className="text-lg text-accent max-w-3xl mx-auto leading-relaxed">
            Purpose-built sovereign infrastructure supporting Canadian public and private workloads — and global AI operators securing trusted North American capacity.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div key={index} className="relative group" variants={itemVariants} whileHover={{ y: -5 }}>
                {/* Card background with glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                {/* Card */}
                <div className="relative p-8 rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm group-hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3 + index, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                    <p className="text-muted-foreground text-balance leading-relaxed text-sm mb-4">
                      {reason.description}
                    </p>
                  </div>

                  {/* Benefit badge */}
                  <div className="flex items-center gap-2 pt-4 border-t border-primary/10">
                    <ArrowUpRight className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span className="text-xs font-semibold text-primary">{reason.benefit}</span>
                  </div>

                  {/* Hover accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
