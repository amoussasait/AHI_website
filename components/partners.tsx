"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const partnerCategories = {
  "Core Infrastructure": [
    {
      name: "Havenz Tech Inc.",
      logo: "/images/havenz-20tech-horizontal-white.png",
      role: "Smart Infrastructure Platform",
      desc: "Digital management systems and infrastructure orchestration enabling autonomous facility management and AI-driven operational optimization.",
      expertise: "Infrastructure AI",
    },
    {
      name: "Energy Haven",
      logo: "/images/energy-20haven-horizontal-white.png",
      role: "Energy Systems Innovator",
      desc: "Cogeneration, battery storage, and hydrogen innovation providing multi-modal power architecture and carbon-capture integration pathways.",
      expertise: "Energy Systems",
    },
    {
      name: "Denvr Dataworks",
      logo: "/images/30705b-425e6232f0ed4fc69a41576ef6564764-mv2.png",
      role: "Compute Platform Integration",
      desc: "Advanced AI compute platform integration and optimization ensuring peak performance and seamless workload deployment.",
      expertise: "AI Infrastructure",
    },
  ],
  "Connectivity & Services": [
    {
      name: "TELUS",
      logo: "/images/telus-symbol.png",
      role: "Tier-1 Connectivity Provider",
      desc: "Fiber networks, IoT sensors, and 5G infrastructure delivering redundant, ultra-low latency connectivity for enterprise workloads.",
      expertise: "Network Infrastructure",
    },
    {
      name: "Samsung",
      logo: "/images/samsung-brand-logo-phone-symbol-white-design-south-korean-mobile-illustration-with-black-background-free-vector.jpg",
      role: "Technology Innovation Partner",
      desc: "Smart display and next-generation technology collaboration advancing edge computing and visualization capabilities.",
      expertise: "Advanced Technology",
    },
  ],
  "Development & Engineering": [
    {
      name: "M3 Development",
      logo: "/images/10.avif",
      role: "Project Development Lead",
      desc: "Project development and construction management delivering world-class data centre facilities with enterprise standards.",
      expertise: "Construction & Development",
    },
    {
      name: "GGA Architecture",
      logo: "/images/gga-architecture-white.webp",
      role: "Design & Engineering Excellence",
      desc: "Facility design and engineering expertise creating optimized, resilient infrastructure for 1 GW+ scalability.",
      expertise: "Architectural Design",
    },
    {
      name: "Lionstooth Energy",
      logo: "/images/lte-logo-white.webp",
      role: "Advanced Power Solutions",
      desc: "Advanced power systems and energy delivery optimization ensuring reliable, efficient power infrastructure management.",
      expertise: "Power Systems",
    },
    {
      name: "Full Spectrum Energy",
      logo: "/images/fsp-logo-2019-white.webp",
      role: "Renewable Energy Integration",
      desc: "Renewable integration and energy management orchestration maximizing clean energy efficiency and sustainability.",
      expertise: "Renewable Energy",
    },
  ],
  "Governance & Finance": [
    {
      name: "Maurice Law LLP",
      logo: "/images/maurice-law-logo.jpeg",
      role: "Legal & Indigenous Governance",
      desc: "Indigenous partnership legal framework and governance expertise ensuring equitable, legally-sound First Nations collaboration.",
      expertise: "Legal & Governance",
    },
    {
      name: "Turning Stone Capital",
      logo: "/images/main-logo-white.webp",
      role: "Indigenous Financial Partnership",
      desc: "First Nations equity and financial partnership delivering meaningful Indigenous economic opportunity and ownership participation.",
      expertise: "Indigenous Finance",
    },
  ],
}

export default function Partners() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="partners" ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-white">Industry Leaders United for </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sovereign AI Innovation
            </span>
          </h2>
          <p className="text-lg text-accent max-w-2xl mx-auto leading-relaxed">
            A coalition of innovation leaders, energy pioneers, Indigenous partners, and technology visionaries building
            Canada's next generation AI infrastructure ecosystem.
          </p>
        </motion.div>

        {/* Partner categories with organized layout */}
        <div className="space-y-12">
          {Object.entries(partnerCategories).map((categoryEntry, categoryIndex) => {
            const [categoryName, partners] = categoryEntry
            return (
              <motion.div
                key={categoryName}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white">{categoryName}</h3>
                  <div className="mt-2 h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ staggerChildren: 0.05 }}
                >
                  {(partners as (typeof partnerCategories)["Core Infrastructure"]).map((partner, index) => (
                    <motion.div
                      key={index}
                      className="group relative"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Glow on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />

                      {/* Card */}
                      <div className="relative p-5 rounded-lg border border-primary/20 bg-card/50 backdrop-blur-sm group-hover:border-primary/50 transition-all duration-300">
                        {partner.logo && (
                          <div className="mb-4 h-12 flex items-center">
                            <Image
                              src={partner.logo || "/placeholder.svg"}
                              alt={partner.name}
                              width={160}
                              height={48}
                              className="max-h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                            />
                          </div>
                        )}

                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="flex-1">
                            <h4 className="font-semibold text-white group-hover:text-primary transition-colors text-sm mb-1">
                              {partner.name}
                            </h4>
                            <p className="text-xs text-primary font-medium">{partner.role}</p>
                          </div>
                          <motion.div
                            className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all"
                            whileHover={{ rotate: 90 }}
                          >
                            <span className="text-primary font-bold text-sm">→</span>
                          </motion.div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 leading-relaxed mb-3">{partner.desc}</p>
                        <Badge
                          variant="secondary"
                          className="text-xs py-0.5 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                        >
                          {partner.expertise}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Enhanced footer note */}
        <motion.div
          className="mt-16 p-6 rounded-xl border border-primary/20 bg-card/30 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-muted-foreground text-sm mb-3">
            An initiative by Havenz Tech, Energy Haven, and Denvr Dataworks—Building Canada's AI Future on the
            foundation of clean energy, Indigenous partnership, innovative technology, and sovereign innovation.
          </p>
          <p className="text-xs text-primary font-semibold">
            Together, we're creating infrastructure that powers innovation, prosperity, and environmental stewardship.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
