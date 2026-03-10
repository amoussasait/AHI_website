"use client"

/**
 * AHI Presentation Deck
 * Each .slide section = 1 page when exported to PDF
 */

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Check, Zap, Droplet, Building2, TrendingUp, Shield, Lock, Phone, Mail, User } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import DatacenterBackground from "@/components/datacenter-background"

export default function DeckPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <style jsx global>{`
        @media print {
          /* Page setup */
          @page {
            size: letter;
            margin: 0;
          }

          /* Slide page breaks */
          .slide {
            page-break-after: always;
            break-after: page;
            min-height: 100vh;
          }

          /* Hide navigation and footer */
          nav,
          footer,
          .no-print {
            display: none !important;
          }
        }

        @media screen {
          .slide {
            min-height: 100vh;
            padding: 4rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }
      `}</style>

      <main className="w-full overflow-hidden bg-gradient-to-b from-secondary via-background to-background">
        <div className="no-print">
          <DatacenterBackground />
        </div>
        <div className="no-print">
          <Navigation scrolled={scrolled} />
        </div>

        {/* SLIDE 1 - TITLE */}
        <section className="slide relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-12">
                <div className="bg-white/10 backdrop-blur-sm border border-primary/30 rounded-xl p-8 inline-block mb-8">
                  <Image
                    src="/images/ahi-ai-hub-of-innovation-horizontal-white.png"
                    alt="AHI - AI Hub of Innovation"
                    width={400}
                    height={120}
                    className="h-24 w-auto"
                  />
                </div>
              </div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Canada's Premier AI Infrastructure Platform
              </h2>

              <p className="text-2xl md:text-3xl text-primary mb-12 font-semibold">
                Sovereign AI Compute, Purpose-Built
              </p>

              <div className="space-y-4 text-lg text-accent mb-12">
                <p>Central Alberta | 119 Acres (Expandable to 500+ Acres)</p>
                <p>44 Dedicated Data Centre Halls | 300 MW Prime Power | 300 MW BESS | 50 MW Solar</p>
                <p>+ 250+ MW Redundant On-Site Generation Architecture, + 150 MW Grid Import / Export Interconnection</p>
              </div>

              <div className="text-sm text-muted-foreground">
                CONFIDENTIAL | March 2026
              </div>
            </motion.div>
          </div>
        </section>

        {/* SLIDE 2 - THE OPPORTUNITY */}
        <section className="slide relative">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <Image
                src="/images/ahi-ai-hub-of-innovation-horizontal-white.png"
                alt="AHI - AI Hub of Innovation"
                width={300}
                height={90}
                className="h-16 w-auto"
              />
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">The Opportunity</h2>
            <p className="text-2xl text-primary mb-12">
              Sovereign, Dedicated AI Infrastructure — Built for Control
            </p>

            <div className="space-y-8">
              {[
                {
                  title: "Your AI. Your Infrastructure. Your Jurisdiction.",
                  desc: "Dedicated Canadian compute capacity — no shared hyperscaler tenancy, no cross-border exposure.",
                },
                {
                  title: "Secure Power Behind the Fence",
                  desc: "On-site natural gas generation with battery redundancy — engineered independence from grid volatility and congestion risk.",
                },
                {
                  title: "Predictable 5–25 Year Capacity Agreements",
                  desc: "Lock in dedicated MW blocks with structured escalation and expansion rights — no hyperscaler repricing or allocation uncertainty.",
                },
                {
                  title: "Separate Halls. Separate Risk.",
                  desc: "Physically segmented compute environments — enterprise, public sector, regulated, or classified workloads fully isolated.",
                },
                {
                  title: "Built for Sovereign AI Strategy",
                  desc: "Aligned with federal and provincial data residency legislation, including PIPEDA, Alberta's PIPA, and Québec's Law 25, supporting evolving Canadian AI governance standards.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 rounded-xl border border-primary/20 bg-card/40 backdrop-blur-sm">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-accent">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-sm text-muted-foreground mt-12">
              CONFIDENTIAL | March 2026
            </div>
          </div>
        </section>

        {/* SLIDE 3 - PLATFORM OVERVIEW */}
        <section className="slide relative">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <Image
                src="/images/ahi-ai-hub-of-innovation-horizontal-white.png"
                alt="AHI - AI Hub of Innovation"
                width={300}
                height={90}
                className="h-16 w-auto"
              />
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">Platform Overview</h2>
            <p className="text-2xl text-primary mb-12">
              Central Alberta AI Energy Campus — Scalable, Multi-Layered Power Architecture
            </p>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              <div className="space-y-4">
                {[
                  "119-acre purpose-built campus in Central Alberta",
                  "Expandable to 500+ acres for long-term hyperscale growth",
                  "300 MW Prime On-Site Generation",
                  "300 MW Battery Energy Storage System (BESS)",
                  "50 MW Solar Integration",
                  "150 MW Grid Import / Export Interconnection",
                  "Multi-layered on-site redundancy architecture (up to 250+ MW additional capacity)",
                  "Phased deployment aligned with customer demand",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-accent text-lg">{item}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "300 MW", label: "Prime On-Site Generation" },
                  { value: "44 MSCs", label: "Independent Data Halls" },
                  { value: "119 Acres", label: "Expandable to 500+" },
                  { value: "20–24 Wks", label: "MSC Deployment" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-8 rounded-xl border border-primary/30 bg-card/50 backdrop-blur-sm text-center"
                  >
                    <p className="text-5xl font-bold text-primary mb-3">{stat.value}</p>
                    <p className="text-accent text-sm">{stat.label}</p>
                  </div>
                ))}

                <div className="col-span-2 p-8 rounded-xl border border-primary/30 bg-primary/10 backdrop-blur-sm text-center">
                  <p className="text-3xl font-bold text-primary mb-2">Multi-Layered Backup</p>
                  <p className="text-accent">Prime + BESS + Grid</p>
                </div>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              CONFIDENTIAL | March 2026
            </div>
          </div>
        </section>

        {/* SLIDE 4 - INFRASTRUCTURE PLATFORM OVERVIEW */}
        <section className="slide relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-8">Infrastructure Platform Overview</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Dedicated On-Site Power",
                  items: [
                    "6.5 MW Prime IT Capacity per MSC",
                    "25% Redundant Power Configuration (N+1)",
                    "Modular 2.5 MW Generation Systems",
                    "Up to Target 99.99%+ Availability",
                    "Zero Grid Dependency",
                    "First Power: October 2026",
                    "Behind the Fence Power Avoids Alberta Data Centre Levy Exposure (Up to 2%)",
                  ],
                },
                {
                  icon: Droplet,
                  title: "Advanced Cooling Architecture",
                  items: [
                    "Liquid Immersion Cooling (1.04 PUE)",
                    "(or) Direct-to-Chip Cooling Configuration",
                    "Compatible with NVIDIA H100, H200, B200, and B300 Platforms",
                    "Up to 5-Year Warranty Coverage",
                    "High-Density AI Infrastructure Ready",
                    "Waterless Closed-Loop System (Immersion)",
                    "ESG-Integrated Design",
                  ],
                },
              ].map((col, idx) => {
                const Icon = col.icon
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-xl border border-primary/20 bg-card/40 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-primary">{col.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {col.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-accent">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>

            <div className="text-sm text-muted-foreground mt-8">
              February 2026 | CONFIDENTIAL
            </div>
          </div>
        </section>

        {/* SLIDE 4B - INFRASTRUCTURE PLATFORM OVERVIEW (CONTINUED) */}
        <section className="slide relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold text-white mb-8">Infrastructure Platform Overview</h2>
            <p className="text-xl text-primary mb-8">(Continued)</p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Building2,
                  title: "Modular Super Cluster (per MSC)",
                  items: [
                    "Fully Integrated Modular Power, Mechanical, and Network Systems",
                    "512 Server Node – 4,096 GPU Deployment Per 6.5MW MSC",
                    "20-24 Weeks Delivery per MSC",
                    "Accelerated Deployment vs. Traditional Data Centre Builds",
                    "Critical Environment Services (CES): Mechanical, Electrical, Fluids Maintenance and Support with SLA",
                  ],
                },
                {
                  icon: TrendingUp,
                  title: "Strategic Capacity & Scale Assurance",
                  items: [
                    "1st MSC operational – October 2026",
                    "2nd MSC operational – December 2026",
                    "8+ MSC deployable in 2027",
                    "22+ MSC deployable in 2028",
                    "44 MSC deployed by 2029",
                    "Delivery of each MSC in 20–24 weeks per MSC",
                  ],
                },
              ].map((col, idx) => {
                const Icon = col.icon
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-xl border border-primary/20 bg-card/40 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-primary">{col.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {col.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-accent">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>

            <div className="text-sm text-muted-foreground mt-8">
              February 2026 | CONFIDENTIAL
            </div>
          </div>
        </section>

        {/* SLIDE 5 - MSC UNIT ECONOMICS */}
        <section className="slide relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">
              Single MSC Unit Economics — 6.5 MW | BYOC (Bring Your Own Compute) Ready
            </h2>

            <div className="grid grid-cols-4 gap-4 mb-6">
              {[
                { value: "6.5 MW", label: "IT Load Capacity" },
                { value: "4,096", label: "GPU Count Per MSC" },
                { value: "C$331/kW/mo", label: "Infrastructure Rate", sub: "(Land + Power + MSC + CES— Compute Not Included)" },
                { value: "C$525/mo", label: "GPU-Equivalent Rate Based on 4,096 GPUs per MSC" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-primary/30 bg-card/50 backdrop-blur-sm text-center"
                >
                  <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-accent text-xs mb-1">{stat.label}</p>
                  {stat.sub && <p className="text-xs text-muted-foreground">{stat.sub}</p>}
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-primary/20 bg-card/40 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-primary mb-4">MSC Unit Specifications</h3>
                <div className="space-y-2 text-xs">
                  {[
                    { label: "MSC Power", value: "6,500 kW (6.5 MW) – 4 MDC @ 1.6 MW / MDC" },
                    { label: "MSC PUE", value: "1.04" },
                    { label: "MSC Server Nodes", value: "512 High-Density AI Server Nodes – 128 Nodes per MDC" },
                    { label: "MSC GPU Count", value: "4,096 GPUs" },
                    {
                      label: "MSC Config - 4 MDC + 2 MPNU",
                      value: "8 Liquid Immersion Cooling Tanks / MDC up to 200 kW/tank",
                    },
                    {
                      label: "MSC Critical Environment Services (CES)",
                      value: "Mechanical, Electrical, LIC Fluid Maintenance and Support (SLAs)",
                    },
                    { label: "Reserved Backup Power (25%)", value: "1,625 kW (1.625 MW) – Dedicated Standby Per MSC" },
                    { label: "Total Power Envelope Per MSC", value: "8,125 kW (8.125 MW) – Prime + Reserved Standby" },
                    { label: "Contract Term", value: "Up to 25 years" },
                    {
                      label: "GPU Platform Compatibility",
                      value: "Supports NVIDIA H100 / H200 / B200 / B300 architectures — Up to 5-Year manufacturer-backed warranty",
                    },
                    { label: "Deployment Model", value: "BYOC (Customer-Supplied Compute Hardware)" },
                  ].map((spec, i) => (
                    <div key={i} className="flex justify-between gap-4 py-2 border-b border-primary/10">
                      <span className="text-accent font-semibold">{spec.label}</span>
                      <span className="text-white text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-6 rounded-xl border border-primary/30 bg-primary/10 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-primary mb-4">Pricing Summary $(CAD)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-accent font-semibold text-sm">C$331 / kW / month</span>
                      <span className="text-xs text-muted-foreground">All-In Rate (on 6,500 kW IT Load)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-accent font-semibold text-sm">C$2,151,500 / month</span>
                      <span className="text-xs text-muted-foreground">Monthly Commitment</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-accent font-semibold text-sm">C$25,818,000 / year</span>
                      <span className="text-xs text-muted-foreground">Annual Commitment</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl border border-primary/20 bg-card/40 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-primary mb-4">What's Included</h3>
                  <div className="space-y-2">
                    {[
                      "Utility-grade power delivery",
                      "Liquid Immersion Cooling infrastructure",
                      "Physical security & controlled access",
                      "Full facility management",
                      "Critical Environment Services (CES)",
                      "Fire detection & suppression systems",
                      "Access to Reserved Backup Power",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-accent text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-sm text-muted-foreground mt-6">
              February 2026 | CONFIDENTIAL
            </div>
          </div>
        </section>

        {/* SLIDE 6 - MARKET COMPARISON */}
        <section className="slide relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">
              Global AI / Data Centre Market Comparison
            </h2>
            <p className="text-lg text-accent mb-3">
              (Indicative Infrastructure Cost Ranges — USD/kW/month)
            </p>
            <p className="text-sm text-accent mb-6">
              Benchmark ranges reflect infrastructure lease / colocation equivalent before compute hardware cost.
            </p>

            <div className="grid lg:grid-cols-3 gap-6 mb-6">
              {/* Canadian Markets */}
              <div className="p-6 rounded-xl border border-primary/30 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-primary mb-4">Canadian Markets (CAD)</h3>
                <div className="space-y-2">
                  {[
                    { market: "AHI – Central Alberta", range: "C$331" },
                    { market: "Other Alberta (Grid-Based)", range: "C$320–C$420" },
                    { market: "Vancouver", range: "C$360–C$480" },
                    { market: "Toronto", range: "C$350–C$500" },
                    { market: "Montreal", range: "C$320–C$450" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`flex justify-between py-2 border-b border-primary/10 ${i === 0 ? "bg-primary/5 px-3 rounded-lg" : ""}`}
                    >
                      <span className="text-accent text-sm">{item.market}</span>
                      <span className={`font-semibold text-sm ${i === 0 ? "text-primary" : "text-white"}`}>{item.range}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* U.S. Markets */}
              <div className="p-6 rounded-xl border border-primary/30 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-primary mb-4">U.S. Markets (USD)</h3>
                <div className="space-y-2">
                  {[
                    { market: "Northern Virginia", range: "$400–$600+" },
                    { market: "Dallas / Texas", range: "$330–$520" },
                    { market: "Phoenix", range: "$360–$550" },
                    { market: "Chicago", range: "$350–$500" },
                    { market: "Silicon Valley", range: "$450–$650+" },
                    { market: "Atlanta", range: "$340–$480" },
                    { market: "Columbus", range: "$320–$460" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between py-3 border-b border-primary/10">
                      <span className="text-accent">{item.market}</span>
                      <span className="text-white font-semibold">{item.range}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Europe / Asia */}
              <div className="p-6 rounded-xl border border-primary/30 bg-card/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-primary mb-4">Europe / Asia (USD Equivalent)</h3>
                <div className="space-y-2">
                  {[
                    { market: "Frankfurt", range: "$450–$650" },
                    { market: "Amsterdam", range: "$420–$600" },
                    { market: "London", range: "$480–$700" },
                    { market: "Singapore", range: "$500–$750" },
                    { market: "Tokyo", range: "$450–$650" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between py-3 border-b border-primary/10">
                      <span className="text-accent">{item.market}</span>
                      <span className="text-white font-semibold">{item.range}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-primary/30 bg-primary/10 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-3">AHI Advantages vs Markets:</h3>
              <ul className="space-y-1 text-accent text-sm">
                <li>• Behind-the-fence power reduces exposure to merchant price spikes</li>
                <li>• Structured 5–25 year pricing (not hyperscaler repricing cycles)</li>
                <li>• Alberta Data Centre Levy mitigation potential via on-site generation & export</li>
                <li>• Reserved capacity — not oversubscribed shared cloud</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SLIDE 7 - SOVEREIGN AI CLOUD */}
        <section className="slide relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-4">
              Sovereign AI Cloud — 6.5 MW Dedicated MSC | Reserved, Canadian-Controlled Capacity
            </h2>

            <div className="grid grid-cols-4 gap-4 mb-6">
              {[
                { value: "6.5 MW", label: "Dedicated AI Cloud Block" },
                {
                  value: "4,096",
                  label: "GPU Count Per MSC",
                  sub: "H100 / H200 / B200 / B300 Compatible",
                },
                { value: "Private Data Centre Halls", label: "Dedicated or logically isolated hall configurations" },
                { value: "C$ Market", label: "Structured by GPU class, term, and capacity commitment" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-primary/30 bg-card/50 backdrop-blur-sm text-center"
                >
                  <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-accent text-xs mb-1">{stat.label}</p>
                  {stat.sub && <p className="text-xs text-muted-foreground">{stat.sub}</p>}
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border border-primary/20 bg-card/40 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-primary mb-4">MSC Unit Specifications</h3>
                <div className="space-y-2 text-xs">
                  {[
                    { label: "MSC Allocation", value: "6.5 MW Reserved Cloud Block" },
                    { label: "MSC PUE", value: "1.04" },
                    { label: "MSC Server Nodes", value: "512 High-Density AI Server Nodes – 128 Nodes per MDC" },
                    { label: "MSC GPU Count", value: "4,096 GPUs" },
                    {
                      label: "MSC Config - 4 MDC + 2 MPNU",
                      value: "8 Liquid Immersion Cooling Tanks / MDC up to 200 kW/tank",
                    },
                    {
                      label: "MSC Critical Environment Services (CES)",
                      value: "Mechanical, Electrical, LIC Fluid Maintenance and Support (SLAs)",
                    },
                    { label: "Reserved Backup Power (25%)", value: "1,625 kW (1.625 MW) – Dedicated Standby Per MSC" },
                    { label: "Total Power Envelope Per MSC", value: "8,125 kW (8.125 MW) – Prime + Reserved Standby" },
                    { label: "Contract Term", value: "Up to 25 years" },
                    {
                      label: "GPU Platform Compatibility",
                      value: "Supports NVIDIA H100 / H200 / B200 / B300 architectures — Up to 5-Year manufacturer-backed warranty",
                    },
                    { label: "Deployment Model", value: "Cloud Model: AHI-Managed Sovereign GPU Infrastructure" },
                  ].map((spec, i) => (
                    <div key={i} className="flex justify-between gap-4 py-2 border-b border-primary/10">
                      <span className="text-accent font-semibold">{spec.label}</span>
                      <span className="text-white text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-8 rounded-xl border border-primary/30 bg-primary/10 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-primary mb-6">Cloud Model: AHI-Managed Sovereign GPU Infrastructure</h3>
                  <ul className="space-y-3 text-accent mb-6">
                    <li>• Reserved GPU capacity per MSC (6.5 MW blocks)</li>
                    <li>• Long-term capacity agreements (5–25 years)</li>
                    <li>• Structured escalation aligned with term</li>
                    <li>• Private hall or segmented cloud options</li>
                    <li>• Volume-based pricing by GPU class</li>
                  </ul>
                  <p className="text-xl font-bold text-primary">$Market — Pricing available upon request</p>
                </div>

                <div className="p-8 rounded-xl border border-primary/20 bg-card/40 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-primary mb-6">What's Included</h3>
                  <div className="space-y-3">
                    {[
                      "Dedicated Behind-the-Fence Power",
                      "Real-Time Environmental & Power Monitoring",
                      "Managed Infrastructure Operations",
                      "Fire Detection & Suppression",
                      "Sovereign Network Architecture",
                      "SLA-Backed Performance Guarantees",
                      "Private, Segmented AI Hall",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-accent">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-accent italic mt-8">
              Designed for enterprise AI training, inference, and regulated workloads requiring sovereign deployment.
            </p>

            <div className="text-sm text-muted-foreground mt-8">
              February 2026 | CONFIDENTIAL
            </div>
          </div>
        </section>

        {/* SLIDE 8 - CAMPUS MASTER PLAN */}
        <section className="slide relative">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Image
                src="/images/ahi-ai-hub-of-innovation-horizontal-white.png"
                alt="AHI - AI Hub of Innovation"
                width={300}
                height={90}
                className="h-16 w-auto"
              />
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">Campus Master Plan</h2>
            <p className="text-2xl text-primary mb-16">Phased Build — 13 MW to 286 MW</p>

            <div className="space-y-8">
              {[
                {
                  phase: "Phase 1",
                  date: "Oct 2026",
                  capacity: "13 MW | 2 MSCs",
                  desc: "First tenants live, proving operational capability",
                  color: "primary",
                },
                {
                  phase: "Phase 2",
                  date: "2027",
                  capacity: "52 MW | 8 MSCs",
                  desc: "Campus expansion, additional on-site generation",
                  color: "primary",
                },
                {
                  phase: "Phase 3",
                  date: "2028",
                  capacity: "143 MW | 22 MSCs",
                  desc: "Mid-build milestone, diversified tenant base",
                  color: "primary",
                },
                {
                  phase: "Full Build",
                  date: "2029",
                  capacity: "300 MW | 44 MSCs",
                  desc: "Full campus operational — 119 acres fully deployed",
                  color: "accent",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`grid lg:grid-cols-3 gap-8 items-center p-8 rounded-xl border ${
                    item.color === "accent"
                      ? "border-accent/50 bg-accent/10"
                      : "border-primary/30 bg-card/40"
                  } backdrop-blur-sm`}
                >
                  <div className="text-center lg:text-left">
                    <p className={`text-3xl font-bold ${item.color === "accent" ? "text-accent" : "text-primary"} mb-2`}>
                      {item.phase}
                    </p>
                    <p className="text-accent">{item.date}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-white mb-2">{item.capacity}</p>
                  </div>
                  <div>
                    <p className="text-accent text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-sm text-muted-foreground mt-12">
              CONFIDENTIAL | March 2026
            </div>
          </div>
        </section>

        {/* SLIDE 9 - DEPLOYMENT TIMELINE */}
        <section className="slide relative">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <Image
                src="/images/ahi-ai-hub-of-innovation-horizontal-white.png"
                alt="AHI - AI Hub of Innovation"
                width={300}
                height={90}
                className="h-16 w-auto"
              />
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">Deployment Timeline</h2>
            <p className="text-2xl text-primary mb-16">20–24 Weeks from Contract to Live Compute</p>

            <div className="relative">
              <div className="absolute top-12 left-0 right-0 h-1 bg-primary/30" />

              <div className="grid grid-cols-6 gap-4">
                {[
                  {
                    title: "LOI / Contract",
                    week: "Week 0",
                    desc: "Commercial terms finalized, site allocation confirmed",
                  },
                  {
                    title: "Permits & Design",
                    week: "Weeks 1–4",
                    desc: "Municipal approvals, detailed engineering, procurement initiated",
                  },
                  {
                    title: "Manufacturing",
                    week: "Weeks 4–12",
                    desc: "MSC modules fabricated offsite, parallel infrastructure prep",
                  },
                  {
                    title: "Site Construction",
                    week: "Weeks 8–18",
                    desc: "Foundation, utility connections, on-site assembly",
                  },
                  {
                    title: "Commissioning",
                    week: "Weeks 18–22",
                    desc: "Power-on testing, cooling validation, network integration",
                  },
                  {
                    title: "Go Live",
                    week: "Weeks 22–24",
                    desc: "Tenant handover, compute deployment, SLA activation",
                  },
                ].map((step, idx) => (
                  <div key={idx} className="relative text-center">
                    <div className="relative z-10 mx-auto w-6 h-6 rounded-full bg-primary border-4 border-background mb-4" />
                    <div className="p-6 rounded-xl border border-primary/20 bg-card/50 backdrop-blur-sm h-full">
                      <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                      <p className="text-sm text-accent font-semibold mb-3">{step.week}</p>
                      <p className="text-xs text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-sm text-muted-foreground mt-16">
              CONFIDENTIAL | March 2026
            </div>
          </div>
        </section>

        {/* SLIDE 10 - REGULATORY ADVANTAGE */}
        <section className="slide relative">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <Image
                src="/images/ahi-ai-hub-of-innovation-horizontal-white.png"
                alt="AHI - AI Hub of Innovation"
                width={300}
                height={90}
                className="h-16 w-auto"
              />
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">Canadian Regulatory Advantage</h2>
            <p className="text-2xl text-primary mb-12">
              Built for Compliance. Engineered for Sovereignty. Structured for Cost Protection.
            </p>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                {[
                  "PIPEDA-compliant infrastructure with full Canadian data residency guarantees",
                  "Alignment with Alberta PIPA and Québec Law 25",
                  "Canadian Centre for Cyber Security (CCCS) alignment for critical infrastructure",
                  "Positioned as Canadian critical infrastructure — eligible for federal support programs",
                  "No cross-border data transfer requirements — all processing remains in Canada",
                  "Supports Government of Canada cloud-first and AI sovereignty strategies",
                  "Structured to mitigate Alberta Data Centre Levy exposure through on-site generation and grid export capability",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-6 rounded-xl border border-primary/20 bg-card/40 backdrop-blur-sm">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-accent text-lg">{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-center">
                <div className="p-12 rounded-2xl border-4 border-primary/50 bg-primary/10 backdrop-blur-sm text-center">
                  <p className="text-sm text-primary font-semibold mb-4 uppercase tracking-wider">
                    Data Sovereignty
                  </p>
                  <p className="text-8xl font-bold text-primary mb-4">100%</p>
                  <p className="text-xl text-accent font-semibold">
                    Canadian Data
                    <br />
                    Residency
                  </p>
                </div>
              </div>
            </div>

            <div className="text-sm text-muted-foreground mt-12">
              CONFIDENTIAL | March 2026
            </div>
          </div>
        </section>

        {/* SLIDE 11 - SECURITY & COMPLIANCE */}
        <section className="slide relative">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <Image
                src="/images/ahi-ai-hub-of-innovation-horizontal-white.png"
                alt="AHI - AI Hub of Innovation"
                width={300}
                height={90}
                className="h-16 w-auto"
              />
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">Security & Compliance</h2>
            <p className="text-2xl text-primary mb-12">Enterprise-Grade Protection, 24/7 Operations</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Physical Security",
                  desc: "Perimeter fencing, CCTV, controlled access points, biometric entry, 24/7 manned security",
                },
                {
                  icon: Zap,
                  title: "Critical Environmental Services",
                  desc: "Enterprise-grade, real-time environmental and power quality monitoring across all MSCs, ensuring operational integrity and uptime.",
                },
                {
                  icon: Shield,
                  title: "Fire Suppression",
                  desc: "Pre-action fire detection and suppression systems in all MDC halls and critical infrastructure",
                },
                {
                  icon: Lock,
                  title: "Access Control",
                  desc: "Role-based access, visitor management, escort requirements, audit logging",
                },
                {
                  icon: Check,
                  title: "Compliance Pathway",
                  desc: "SOC 2 Type II and ISO 27001 certification pathway — designed-in from Day 1",
                },
                {
                  icon: Shield,
                  title: "Incident Response",
                  desc: "24/7 NOC with documented incident response, escalation procedures, and SLA reporting",
                },
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-xl border border-primary/20 bg-card/50 backdrop-blur-sm"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-accent">{item.desc}</p>
                  </div>
                )
              })}
            </div>

            <div className="text-sm text-muted-foreground mt-12">
              CONFIDENTIAL | March 2026
            </div>
          </div>
        </section>

        {/* SLIDE 12 - TECHNICAL SPECIFICATIONS */}
        <section className="slide relative">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <Image
                src="/images/ahi-ai-hub-of-innovation-horizontal-white.png"
                alt="AHI - AI Hub of Innovation"
                width={300}
                height={90}
                className="h-16 w-auto"
              />
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">Technical Specifications</h2>
            <p className="text-2xl text-primary mb-12">MSC Unit — Detailed Specification Sheet</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "POWER",
                  specs: [
                    "IT Load per MSC: 6.5 MW",
                    "PUE: 1.04",
                    "Gross Power: ~6.74 MW",
                    "Backup Power: 25% of IT Load",
                    "Redundancy: N+1",
                    "Total Facility (Full Build): 300 MW On-Site Prime Power | 300 MW Battery Energy Storage | 50 MW Solar | Up to 250 MW Additional On-Site Backup Capacity | 150 MW Grid Export Interconnection with Import Capabilities",
                  ],
                },
                {
                  title: "PHYSICAL",
                  specs: [
                    'Dimensions: 277\'7" × 94\'10"',
                    "Footprint per MSC: 0.6 acres",
                    "Halls per MSC: 4 MDC Halls",
                    "Weight: Engineered foundation spec",
                  ],
                },
                {
                  title: "COOLING",
                  specs: [
                    "Type: Immersion Liquid Cooling",
                    "Capacity: Matched to 6.5 MW IT load",
                    "Redundancy: N+1 cooling loops",
                  ],
                },
                {
                  title: "COMPUTE (REF.)",
                  specs: [
                    "GPU: NVIDIA GB200 NVL72",
                    "Nodes: 512 per MSC",
                    "GPUs: 4,096 per MSC",
                    "Model: BYOC Flexible",
                    "Compatible with NVIDIA H100, H200, B200, and B300 Platforms — Up to 5-Year Warranty Coverage",
                  ],
                },
                {
                  title: "CONNECTIVITY",
                  specs: [
                    "Bandwidth: up to 400+ Gbps per MSC",
                    "Latency: Low-latency to Calgary/Edmonton/ US Markets",
                  ],
                },
                {
                  title: "SITE",
                  specs: [
                    "Acreage: 119 acres total, expandable to 500 acres",
                    "Zoning: Industrial — AI/Data Centre approved",
                    "Easements: 15m FortisAlberta",
                    "Permits: Municipal development permits in process",
                  ],
                },
              ].map((section, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-xl border border-primary/20 bg-card/50 backdrop-blur-sm"
                >
                  <h3 className="text-xl font-bold text-primary mb-6">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-sm text-accent">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-sm text-muted-foreground mt-12">
              CONFIDENTIAL | March 2026
            </div>
          </div>
        </section>

        {/* SLIDE 13 - CONTACT/CTA */}
        <section className="slide relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm border border-primary/30 rounded-xl p-8 inline-block mb-8">
              <Image
                src="/images/ahi-ai-hub-of-innovation-horizontal-white.png"
                alt="AHI - AI Hub of Innovation"
                width={400}
                height={120}
                className="h-24 w-auto mx-auto"
              />
            </div>

            <h2 className="text-6xl font-bold text-white mb-8">
              Ready to Secure Your
              <br />
              <span className="text-primary">Sovereign AI Infrastructure?</span>
            </h2>

            <p className="text-2xl text-accent mb-16">
              Let's discuss your capacity requirements and deployment timeline.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="p-8 rounded-xl border border-primary/30 bg-card/50 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <p className="text-primary font-semibold mb-2">Contact</p>
                <p className="text-xl text-white font-bold mb-1">Sheldon Croome</p>
                <p className="text-accent">Chief Partnerships Officer</p>
              </div>

              <div className="p-8 rounded-xl border border-primary/30 bg-card/50 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <p className="text-primary font-semibold mb-4">Email</p>
                <a
                  href="mailto:sheldon@havenzcorp.com"
                  className="text-xl text-white font-bold hover:text-primary transition-colors"
                >
                  sheldon@havenzcorp.com
                </a>
              </div>

              <div className="p-8 rounded-xl border border-primary/30 bg-card/50 backdrop-blur-sm">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <p className="text-primary font-semibold mb-4">Phone</p>
                <a
                  href="tel:+15879831139"
                  className="text-xl text-white font-bold hover:text-primary transition-colors"
                >
                  +1 (587) 983-1139
                </a>
              </div>
            </div>

            <div className="text-sm text-muted-foreground">
              CONFIDENTIAL — Alberta Hyperscale Infrastructure — March 2026
            </div>
          </div>
        </section>

        <div className="no-print">
          <Footer />
        </div>
      </main>
    </>
  )
}
