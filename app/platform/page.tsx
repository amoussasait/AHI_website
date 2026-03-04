"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check, Download, ArrowRight } from "lucide-react"
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
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white">The AHI </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Platform
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl sm:text-3xl font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Integrated Sovereign AI Infrastructure
          </motion.h2>

          <motion.p
            className="text-xl text-white mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Powered by On-Site Prime Energy. Built to Scale to 1 GW.
          </motion.p>

          <motion.p
            className="text-lg text-accent mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Land. Entitlements. Prime Power Generation. Grid Interconnection. Modular AI Infrastructure. Delivered as a single, vertically integrated platform.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/contact">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center gap-2 justify-center">
                <Download className="w-5 h-5" />
                Download Platform Overview
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all flex items-center gap-2 justify-center">
                <ArrowRight className="w-5 h-5" />
                Engage With AHI
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <SectionDividerAnimated />

      {/* SECTION 2 - PLATFORM OVERVIEW */}
      <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Copy */}
            <motion.div
              className="flex flex-col justify-between h-full"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  A Fully Integrated Infrastructure Ecosystem
                </h2>
                <p className="text-lg text-accent mb-6">
                  AHI is not a standalone data centre.
                  <br />
                  It is a vertically integrated AI infrastructure platform designed to deliver secure, reliable, sovereign compute capacity.
                </p>

                <p className="text-lg font-semibold text-primary mb-4">The platform integrates:</p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Controlled industrial land",
                    "Permitted and constructed on-site prime power",
                    "138 kV grid interconnection",
                    "Battery and solar integration",
                    "Modular AI infrastructure deployment",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-accent">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-accent italic mb-8">
                  Every layer is engineered to work together — reducing execution risk, eliminating power uncertainty, and accelerating time to market.
                </p>

                <div className="border-t border-primary/20 pt-6 mb-8">
                  <h3 className="text-xl font-bold text-primary mb-4">Platform Advantages</h3>
                  <ul className="space-y-3">
                    {[
                      "Single point of accountability across all infrastructure layers",
                      "Streamlined permitting and regulatory coordination",
                      "Optimized energy dispatch and load management",
                      "Reduced development timelines and capital risk",
                      "Scalable architecture designed for 1 GW expansion",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-accent text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-black/40 rounded-xl border border-primary/20 p-6">
                  <p className="text-primary font-semibold mb-2">Purpose-Built For:</p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Sovereign AI Workloads",
                      "GPU Cloud Providers",
                      "Hyperscale Deployments",
                      "Industrial AI Applications",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-accent text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
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
        </div>
      </section>

      <SectionDividerAnimated />

      {/* SECTION 3 - LAND & ENTITLEMENTS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6 text-center">Controlled Campus Development</h2>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <ul className="space-y-4">
                  {[
                    { label: "119-acre master-planned innovation campus" },
                    { label: "Expandable to 500+ acres" },
                    { label: "Industrial zoning secured" },
                    { label: "Designed for high-density power users" },
                    { label: "Modular build strategy (Design Once, Build Many)" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-lg text-accent">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-lg text-accent">
                  The AHI campus is purpose-built to support energy-intensive AI and industrial operations with long-term expansion capacity.
                </p>
              </div>
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
      <section className="py-24 px-4 sm:px-6 lg:px-8">
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

            <p className="text-lg text-center text-primary italic">
              This architecture ensures excess generation capacity is always deployed ahead of load growth.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDividerAnimated />

      {/* SECTION 5 - NATROGEN™ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Copy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Powered by Natrogen™
              </h2>
              <p className="text-lg text-accent mb-6">
                Natrogen™ is AHI's proprietary AI-optimized transitional fuel platform.
              </p>
              <p className="text-lg text-accent mb-8">
                It dynamically optimizes blended fuel inputs — including natural gas, hydrogen, and renewable gas — to improve efficiency and reduce carbon intensity.
              </p>

              <h3 className="text-xl font-bold text-primary mb-4">Platform Advantages:</h3>
              <ul className="space-y-3 mb-6">
                {[
                  "Hydrogen-capable engines",
                  "Future CCUS integration pathway",
                  "AI-driven emissions optimization",
                  "ESG-aligned reporting capability",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-accent">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-accent italic">
                AHI is engineered to evolve with the energy transition while maintaining reliability and cost discipline.
              </p>
            </motion.div>

            {/* Right - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-xl overflow-hidden border border-primary/20">
                <Image
                  src="/images/natrogen-platform.png"
                  alt="Natrogen Platform"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDividerAnimated />

      {/* SECTION 6 - GRID INTERCONNECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
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
      <section className="py-24 px-4 sm:px-6 lg:px-8">
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
                <h3 className="text-2xl font-bold text-primary mb-6">Battery Storage</h3>
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
                <h3 className="text-2xl font-bold text-primary mb-6">Solar Generation</h3>
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
      <section className="py-24 px-4 sm:px-6 lg:px-8">
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
                  { label: "~6.5 MW IT load" },
                  { label: "4,096 GPU configuration" },
                  { label: "480V distribution" },
                  { label: "13.8 kV campus feed" },
                  { label: "Immersion cooling compatible" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-accent">{item.label}</span>
                  </div>
                ))}
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
      <section className="py-24 px-4 sm:px-6 lg:px-8">
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
                    <tr key={index} className="border-b border-primary/10">
                      <td className="px-6 py-4 text-accent">{row[0]}</td>
                      <td className="px-6 py-4 text-primary font-semibold">{row[1]}</td>
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
      <section className="py-24 px-4 sm:px-6 lg:px-8">
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
                { value: "250 MW", label: "Prime Power (Initial Build-Out)" },
                { value: "1 GW", label: "Pathline Expansion" },
                { value: "150 MW", label: "Grid Export" },
                { value: "11 MW", label: "Grid Import" },
                { value: "300 MW", label: "Battery Integration" },
                { value: "50 MW", label: "Solar" },
                { value: "44", label: "Modular AI Clusters" },
              ].map((metric) => (
                <div
                  key={metric.label}
                  className="bg-black/40 rounded-xl border border-primary/20 p-6 text-center"
                >
                  <p className="text-4xl lg:text-5xl font-bold text-primary mb-2">{metric.value}</p>
                  <p className="text-accent text-sm">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDividerAnimated />

      {/* SECTION 11 - CALL TO ACTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
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
