"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check, Cpu, Zap, Droplets, Server, Battery, Sun, TrendingUp, ArrowUpRight, X, Shield, Cloud, Maximize2, Building2, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import SectionDividerAnimated from "@/components/section-divider-animated"
import DatacenterBackground from "@/components/datacenter-background"
import { useState, useEffect } from "react"

export default function PlatformPage() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [scrolled, setScrolled] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState("")

  // Power infrastructure images
  const powerImages = Array.from({ length: 6 }, (_, i) => `/images/image_${i + 1}.png`)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="w-full overflow-hidden bg-gradient-to-b from-secondary via-background to-background">
      <DatacenterBackground />
      <Navigation scrolled={scrolled} />
      {/* SECTION 1 - HERO */}
      <section className="relative w-full flex items-center justify-center px-4 pt-32 pb-6 overflow-hidden">
        <motion.div
          className="relative z-10 max-w-6xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white">The AHI </span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Platform
            </span>
          </motion.h1>

          <motion.div
            className="mb-8 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl text-primary font-bold mb-4">
              Integrated Sovereign AI Infrastructure
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6">
              Powered by On-Site Prime Energy. Built to Scale to 1 GW.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Land. Entitlements. Prime Power Generation. Grid Interconnection. Modular AI Infrastructure. Delivered as a single, vertically integrated platform.
            </p>

            <div className="flex justify-center">
              <Link href="/contact">
                <motion.button
                  className="px-8 py-3 rounded-full bg-primary text-background font-bold hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Engage With AHI
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* SECTION 2 - PLATFORM OVERVIEW */}
      <section ref={ref} className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              A Fully Integrated Infrastructure Ecosystem
            </h2>
            <p className="text-lg text-accent max-w-3xl mx-auto">
              AHI is not a standalone data centre. It is a vertically integrated AI infrastructure platform designed to deliver secure, reliable, sovereign compute capacity.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Copy */}
            <motion.div
              className="flex flex-col justify-between h-full"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <p className="text-lg font-semibold text-primary mb-8">The platform integrates:</p>
                <ul className="space-y-8 mb-10">
                  {[
                    {
                      title: "Controlled Industrial Land",
                      desc: "119-acre master-planned campus with expansion capability to 500+ acres.",
                    },
                    {
                      title: "Permitted On-Site Prime Power",
                      desc: "Up to 250 MW+ of behind-the-meter natural gas generation with hydrogen-ready engines.",
                    },
                    {
                      title: "138 kV Grid Interconnection",
                      desc: "Secured interconnection with 150 MW export and 11 MW import capacity.",
                    },
                    {
                      title: "Battery and Solar Integration",
                      desc: "300 MW BESS and 50 MW solar for renewable integration and grid balancing.",
                    },
                    {
                      title: "Modular AI Infrastructure",
                      desc: "Up to 44 MSCs deployable in 20-24 weeks, each delivering 6.5 MW IT load.",
                    },
                    {
                      title: "Advanced Networking",
                      desc: "Enterprise fiber connectivity with low-latency routes to major hubs.",
                    },
                    {
                      title: "Smart Campus Management",
                      desc: "Real-time monitoring powered by Havenz Tech IoT platform.",
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-accent font-bold text-lg mb-2">{item.title}</p>
                        <p className="text-accent/80 text-base leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
                  <p className="text-accent italic text-lg leading-relaxed">
                    Every layer is engineered to work together — reducing execution risk, eliminating power uncertainty, and accelerating time to market.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right - Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-xl overflow-hidden border border-primary/20">
                <Image
                  src="/images/platform-stack-diagram.png"
                  alt="AHI Platform Stack"
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>

          {/* Platform Advantages - Full Width Below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20"
          >
            <div className="border-t border-primary/20 pt-12">
              <h3 className="text-3xl font-bold text-primary mb-8 text-center">Platform Advantages</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Single Point of Accountability",
                    desc: "Unified management across all infrastructure layers eliminates coordination challenges.",
                  },
                  {
                    title: "Streamlined Permitting",
                    desc: "Consolidated regulatory coordination reduces bureaucratic delays and accelerates deployment.",
                  },
                  {
                    title: "Optimized Energy Dispatch",
                    desc: "Intelligent load management maximizes efficiency and minimizes operational costs.",
                  },
                  {
                    title: "Reduced Development Risk",
                    desc: "Pre-permitted infrastructure and proven modular design minimize capital exposure.",
                  },
                  {
                    title: "1 GW Scalable Architecture",
                    desc: "Purpose-built pathline for hyperscale expansion without redesign or re-permitting.",
                  },
                  {
                    title: "Sovereign Infrastructure Control",
                    desc: "Canadian-owned and operated platform ensuring data sovereignty and regulatory compliance.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-card/30 rounded-xl border border-primary/20 p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <h4 className="text-accent font-bold text-lg">{item.title}</h4>
                    </div>
                    <p className="text-accent/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Purpose-Built For - Full Width Below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12"
          >
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-xl border border-primary/30 p-12">
              <h3 className="text-3xl font-bold text-primary mb-8 text-center">Purpose-Built For</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {[
                  { title: "Sovereign AI Workloads", desc: "Canadian data residency with full regulatory compliance", icon: Shield },
                  { title: "GPU Cloud Providers", desc: "Dedicated capacity with predictable long-term pricing", icon: Cloud },
                  { title: "Hyperscale Deployments", desc: "Multi-MW blocks with rapid deployment capability", icon: Maximize2 },
                  { title: "Industrial AI Applications", desc: "Enterprise-grade reliability for mission-critical systems", icon: Building2 },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-accent font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-accent/70 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDividerAnimated />

      {/* SECTION 3 - LAND & ENTITLEMENTS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4 text-center">Controlled Campus Development</h2>
            <p className="text-lg text-accent text-center mb-8 max-w-4xl mx-auto">
              The AHI campus is purpose-built to support energy-intensive AI and industrial operations with long-term expansion capacity.
            </p>

            <div className="grid md:grid-cols-2 gap-32 mb-8 max-w-6xl mx-auto">
              <ul className="space-y-4">
                {[
                  { label: "119-acre master-planned innovation campus" },
                  { label: "Expandable to 500+ acres" },
                  { label: "Industrial zoning secured" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-accent">{item.label}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {[
                  { label: "Designed for high-density power users" },
                  { label: "Modular build strategy (Design Once, Build Many)" },
                  { label: "Strategic location in Central Alberta" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-accent">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Aerial Image */}
            <div className="relative rounded-xl overflow-hidden border border-primary/20">
              <Image
                src="/images/campus-aerial.png"
                alt="AHI Campus Aerial View"
                width={1600}
                height={900}
                className="w-full h-auto"
              />
              <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-sm px-6 py-3 rounded-lg border border-primary/30">
                <p className="text-primary font-semibold text-lg">Expandable to 1 GW Infrastructure Capacity</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDividerAnimated />

      {/* SECTION 4 - ON-SITE PRIME POWER */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-4 text-center">
              250 MW+ On-Site Prime Power
            </h2>
            <p className="text-2xl text-primary mb-6 text-center">
              300MW Battery | 50MW Solar | 250+MW On-Site Backup
            </p>
            <p className="text-xl text-accent mb-12 text-center italic">
              Expandable to 1 GW
            </p>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { metric: "99.99%", label: "uptime" },
                { metric: "N+1", label: "redundancy" },
                { metric: "Industrial", label: "grade reliability" },
                { metric: "Grid", label: "optionality" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-6 rounded-xl bg-black/40 border border-primary/20 text-center"
                >
                  <p className="text-3xl font-bold text-primary mb-2">{item.metric}</p>
                  <p className="text-accent">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Power Architecture Details */}
            <div className="bg-black/40 rounded-xl border border-primary/20 p-8 mb-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Key Metrics:</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Up to 250 MW+ prime power (Phase build-out)",
                  "Pathline to 1 GW",
                  "Modular 10 MW engine architecture",
                  "Hydrogen-ready reciprocating engines",
                  "Integrated heat recovery",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-accent">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-lg text-center text-primary italic mb-12">
              This architecture ensures excess generation capacity is always deployed ahead of load growth.
            </p>

            {/* Image Slideshow */}
            <div className="relative max-w-7xl mx-auto">
              <div className="relative rounded-xl overflow-hidden border border-primary/20 bg-black/40">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setModalImage(powerImages[currentSlide])
                    setIsModalOpen(true)
                  }}
                >
                  <Image
                    src={powerImages[currentSlide]}
                    alt={`Power Infrastructure ${currentSlide + 1}`}
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>

                {/* Previous Button */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev === 0 ? powerImages.length - 1 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-all border border-primary/30"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 text-primary" />
                </button>

                {/* Next Button */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev === powerImages.length - 1 ? 0 : prev + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-all border border-primary/30"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 text-primary" />
                </button>

                {/* Slide Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/60 border border-primary/30">
                  <p className="text-primary text-sm font-semibold">
                    {currentSlide + 1} / {powerImages.length}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-all border border-primary/30"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-primary" />
          </button>
          <div className="relative max-w-7xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={modalImage}
              alt="Power Infrastructure"
              width={1600}
              height={1200}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      )}

      <SectionDividerAnimated />

      {/* SECTION 5 - NATROGEN™ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              Powered by Natrogen™
            </h2>

            <div className="max-w-3xl mx-auto mb-10">
              <p className="text-xl text-accent mb-4 leading-relaxed">
                Natrogen™ is AHI's proprietary AI-optimized transitional fuel platform.
              </p>
              <p className="text-lg text-accent/90 leading-relaxed">
                It dynamically optimizes blended fuel inputs — including natural gas, hydrogen, and renewable gas — to improve efficiency and reduce carbon intensity.
              </p>
            </div>

            <div className="bg-card/30 rounded-xl border border-primary/20 p-8 mb-8">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">Platform Advantages</h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto">
                {[
                  "Hydrogen-capable engines",
                  "Future CCUS integration pathway",
                  "AI-driven emissions optimization",
                  "ESG-aligned reporting capability",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-accent text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg text-accent/90 italic text-center max-w-3xl mx-auto">
              AHI is engineered to evolve with the energy transition while maintaining reliability and cost discipline.
            </p>
          </motion.div>

          {/* Image - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl overflow-hidden border border-primary/20">
              <Image
                src="/images/natrogen-platform.png"
                alt="Natrogen Platform"
                width={1600}
                height={900}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDividerAnimated />

      {/* SECTION 6 - GRID INTERCONNECTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6 text-center">
              138 kV Transmission Interconnection
            </h2>
            <p className="text-lg text-accent mb-8 text-center">
              AHI is interconnected to Alberta's transmission network through a 138 kV connection.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-black/40 rounded-xl border border-primary/20 p-6">
                <h3 className="text-xl font-bold text-primary mb-4">Capacity:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-accent">150 MW export capability</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-accent">11 MW import capability</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/40 rounded-xl border border-primary/20 p-6">
                <h3 className="text-xl font-bold text-primary mb-4">This structure provides:</h3>
                <ul className="space-y-3">
                  {[
                    "Export monetization",
                    "Import redundancy",
                    "Market participation",
                    "Ancillary service optimization via battery integration",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-accent">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-center text-primary font-semibold text-lg">
              Grid interconnection is secured — reducing development risk and accelerating deployment.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDividerAnimated />

      {/* SECTION 7 - BATTERY + SOLAR */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6 text-center">
              Integrated Storage & Renewable Integration
            </h2>
            <p className="text-lg text-accent mb-12 text-center max-w-3xl mx-auto">
              AHI integrates energy storage and solar generation to enhance reliability and grid optimization.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Battery Storage */}
              <div className="bg-black/40 rounded-xl border border-primary/20 p-8">
                <motion.div
                  className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Battery className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">Battery Storage</h3>
                <ul className="space-y-4">
                  {[
                    "Up to 300 MW capacity",
                    "Ancillary services participation",
                    "Load balancing & arbitrage",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-accent text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solar Generation */}
              <div className="bg-black/40 rounded-xl border border-primary/20 p-8">
                <motion.div
                  className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Sun className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">Solar Generation</h3>
                <ul className="space-y-4">
                  {[
                    "Up to 50 MW campus solar",
                    "ESG enhancement",
                    "Reduced daytime marginal cost",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-accent text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-center text-accent mt-8 italic">
              Storage and solar are integrated into the campus dispatch strategy.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDividerAnimated />

      {/* SECTION 8 - MODULAR AI INFRASTRUCTURE */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6 text-center">
              Scalable AI Infrastructure
            </h2>
            <p className="text-lg text-accent mb-12 text-center">
              AHI supports modular AI deployment across up to 44 MSC clusters.
            </p>

            <div className="bg-black/40 rounded-xl border border-primary/20 p-8 mb-12">
              <h3 className="text-2xl font-bold text-primary mb-6">Reference Module:</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: "~6.5 MW IT load", icon: Zap },
                  { label: "4,096 GPU configuration", icon: Cpu },
                  { label: "480V distribution", icon: Zap },
                  { label: "13.8 kV campus feed", icon: Zap },
                  { label: "Immersion cooling compatible", icon: Droplets },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-accent pt-2">{item.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Deployment Models:</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* BYOC */}
              <div className="bg-black/40 rounded-xl border border-primary/20 p-8">
                <h4 className="text-xl font-bold text-white mb-4">Bring Your Own Compute (BYOC)</h4>
                <p className="text-accent">
                  For GPU fleet owners and AI enterprises requiring sovereign control.
                </p>
              </div>

              {/* Managed Cloud */}
              <div className="bg-black/40 rounded-xl border border-primary/20 p-8">
                <h4 className="text-xl font-bold text-white mb-4">Managed AI Cloud</h4>
                <p className="text-accent mb-4">
                  Delivered in partnership with Denvr DataWorks.
                </p>
                <p className="text-primary font-semibold">
                  Enterprise pricing available upon request.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDividerAnimated />

      {/* SECTION 9 - WHY AHI WINS */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              A New Infrastructure Model
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-black/40 rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-black/60">
                    <th className="px-6 py-4 text-left font-bold text-accent border-b-2 border-primary/30">
                      Traditional Data Centre
                    </th>
                    <th className="px-6 py-4 text-left font-bold text-primary border-b-2 border-primary/30">
                      AHI Platform
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Grid-dependent", "On-site prime power"],
                    ["Utility interconnection delays", "Interconnection secured"],
                    ["Exposure to power volatility", "Behind-the-meter generation"],
                    ["Limited expansion flexibility", "1 GW scalable pathline"],
                    ["No integrated heat recovery", "CHP integration"],
                    ["No energy market participation", "Export & battery monetization"],
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-primary/10 hover:bg-primary/5 transition-colors">
                      <td className="px-6 py-4 text-accent">
                        <div className="flex items-center gap-3">
                          <X className="w-5 h-5 text-red-400/60 flex-shrink-0" />
                          <span>{row[0]}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-primary font-semibold">
                        <div className="flex items-center gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{row[1]}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-center text-white font-semibold text-lg mt-8">
              AHI is built as infrastructure — not speculative real estate.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDividerAnimated />

      {/* SECTION 10 - METRICS SNAPSHOT */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-16 text-center">Platform Metrics</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "250 MW", label: "Prime Power (Initial Build-Out)", icon: Zap },
                { value: "1 GW", label: "Pathline Expansion", icon: TrendingUp },
                { value: "150 MW", label: "Grid Export", icon: ArrowUpRight },
                { value: "11 MW", label: "Grid Import", icon: Zap },
                { value: "300 MW", label: "Battery Integration", icon: Battery },
                { value: "50 MW", label: "Solar", icon: Sun },
                { value: "44", label: "Modular AI Clusters", icon: Server },
              ].map((metric) => {
                const Icon = metric.icon
                return (
                  <div
                    key={metric.label}
                    className="bg-black/40 rounded-xl border border-primary/20 p-6 text-center hover:border-primary/50 transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-4xl lg:text-5xl font-bold text-primary mb-2">{metric.value}</p>
                    <p className="text-accent text-sm">{metric.label}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDividerAnimated />

      {/* SECTION 11 - CALL TO ACTION */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">Build With AHI</h2>
            <p className="text-xl text-accent mb-8">
              AHI is a long-term infrastructure platform engineered for:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {[
                "Sovereign AI",
                "Industrial AI",
                "Advanced manufacturing",
                "Energy-intensive compute",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-center gap-3 p-4 border border-primary/30 rounded-lg"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-accent text-lg">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-lg text-accent mb-12">
              Partner with AHI to deploy secure, scalable infrastructure in Western Canada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all">
                  Schedule Executive Briefing
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all">
                  Request Technical Overview
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
