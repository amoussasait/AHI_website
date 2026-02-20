"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Zap, Building2, Gauge, Layers, Droplets, Network, BatteryFull, ArrowLeftRight, Droplet, Shield } from "lucide-react"
import Image from "next/image"

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  }

  const cards = [
    {
      icon: Zap,
      title: "ENERGY PLATFORM",
      headline: "250MW+ Prime Power",
      description:
        "On-site generation with grid-connected import/export capability. Up to 300MW battery storage, 50MW solar integration, and dedicated backup systems engineered for mission-critical AI operations.",
      footer: "Structured expansion pathway to 1GW.",
    },
    {
      icon: Building2,
      title: "AI CAMPUS",
      headline: "Up to 44 Data Halls",
      description:
        "Modular 6–8MW deployments or fully customized hyperscale builds.",
      footer:
        "Flexible campus architecture aligned to enterprise AI, sovereign workloads, and global hyperscale requirements.",
    },
    {
      icon: Droplets,
      title: "COOLING ARCHITECTURE",
      headline: "Immersion | Liquid-to-Chip",
      description:
        "High-density cooling platforms supporting full immersion and direct liquid-to-chip configurations — built for next-generation GPU clusters and extreme-density AI workloads.",
      footer:
        "Engineered to meet the highest performance requirements of modern data centres.",
    },
    {
      icon: Gauge,
      title: "PERFORMANCE DESIGN",
      headline: "PUE 1.03 | Waterless & Ultra-Low Water",
      description:
        "High-efficiency infrastructure designed for waterless operation or ultra-low water configurations, depending on deployment architecture.",
      footer:
        "Eliminates traditional cooling tower dependency while optimizing resilience, energy performance, and ESG alignment across both power and compute systems.",
    },
    {
      icon: Layers,
      title: "DEPLOYMENT FLEXIBILITY",
      headline: "Cloud | BYOC | Hyperscale",
      description:
        "Managed GPU cloud services, Bring Your Own Compute environments, secure sovereign deployments, and full-campus hyperscale infrastructure.",
      footer:
        "Designed to scale with demand and long-term infrastructure commitments.",
    },
    {
      icon: Network,
      title: "NETWORK INFRASTRUCTURE",
      headline: "Diverse Fiber | 400G+",
      description:
        "Carrier-neutral network architecture leveraging multiple upstream providers, DWDM backbone scalability to 400G and 800G+, and protected dual-path configurations delivering up to 99.99% availability with sub-15ms regional latency.",
      footer: "DWDM — Dense Wavelength Division Multiplexing.",
    },
  ]

  const chartItems = [
    "250MW+ On-Site Prime Power",
    "300MW Battery Storage",
    "150MW Grid Import / Export",
    "Immersion & Liquid-to-Chip Cooling",
    "Dual-Path Fiber | 400G+ Scalable",
    "PUE 1.03 Performance",
    "Waterless / Ultra-Low Water Design",
    "N+1 Redundant Architecture",
  ]

  return (
    <section id="about" ref={ref} className="relative pt-10 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              <span className="text-white">AI Infrastructure Built for </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {"Scale, Security & Sovereignty"}
              </span>
            </h2>
            <p className="text-lg text-accent max-w-4xl mx-auto leading-relaxed mb-2">
              {"AHI delivers an integrated AI infrastructure platform powered by 250MW+ on-site prime energy, waterless high-density architecture, and flexible deployment models \u2014 Cloud, BYOC, and hyperscale."}
            </p>
            <p className="text-lg text-primary font-semibold">
              Power delivery begins 2026.
            </p>
            <p className="text-base text-muted-foreground mt-2">
              Built for enterprise AI, sovereign workloads, and global hyperscalers demanding secure, scalable infrastructure.
            </p>
          </motion.div>

          {/* 6 cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {cards.map((card, i) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.title}
                  className="group p-6 rounded-xl border border-primary/20 bg-secondary/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  variants={itemVariants}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                      {card.title}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{card.headline}</h3>
                  <p className="text-accent/80 leading-relaxed mb-3">{card.description}</p>
                  <div className="border-t border-primary/20 mt-3 mb-4" />
                  <p className="text-accent/80 leading-relaxed">{card.footer}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Divider */}
          <motion.div
            className="relative h-px bg-gradient-to-r from-transparent via-primary to-transparent my-16"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-sm" />
          </motion.div>

          {/* AI Compute capabilities */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white text-center mb-3">AI Compute</h3>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Integrated energy and infrastructure capabilities powering next-generation AI workloads.
            </p>
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
              {/* Left: capability items in single column */}
              <div className="flex flex-col gap-3.5 flex-1 min-w-0 lg:max-w-[50%]">
                {(() => {
                  const items = [
                    { icon: Zap,           stat: "250MW+",    label: "250MW+ On-Site Prime Power" },
                    { icon: BatteryFull,   stat: "300MW",     label: "300MW Battery Storage" },
                    { icon: ArrowLeftRight,stat: "150MW",     label: "150MW Grid Import / Export" },
                    { icon: Droplets,      stat: "Cooling",   label: "Immersion & Liquid-to-Chip Cooling" },
                    { icon: Network,       stat: "400G+",     label: "Dual-Path Fiber | 400G+ Scalable" },
                    { icon: Gauge,         stat: "1.03",      label: "PUE 1.03 Performance" },
                    { icon: Droplet,       stat: "Waterless", label: "Waterless / Ultra-Low Water Design" },
                    { icon: Shield,        stat: "N+1",       label: "N+1 Redundant Architecture" },
                  ]
                  return items.map((item, i) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={item.label}
                        className="relative group flex items-center gap-4 px-5 py-4 rounded-xl border border-primary/20 bg-secondary/40 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 min-h-[90px]"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.3 + i * 0.07 }}
                      >
                        <Icon className="w-6 h-6 text-primary shrink-0" />
                        <span className="text-xl font-bold text-primary w-24 shrink-0">{item.stat}</span>
                        <span className="text-base text-white font-medium leading-snug">{item.label}</span>
                        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    )
                  })
                })()}
              </div>
              {/* Right: architecture diagram */}
              <div className="flex-1 overflow-hidden">
                <Image
                  src="/images/ahi-ecosystem-architecture.png"
                  alt="AHI Ecosystem Architecture"
                  width={800}
                  height={980}
                  className="w-full h-full object-contain object-top lg:translate-y-[-40px] lg:translate-x-[30px]"
                  style={{ mixBlendMode: "screen", maxHeight: "100%" }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
