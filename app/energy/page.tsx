"use client"

import { motion } from "framer-motion"
import PageLayout from "@/components/page-layout"
import SectionDividerAnimated from "@/components/section-divider-animated"
import { Zap, Battery, Sun, Network, Shield, TrendingUp, Check, CheckCircle2, Activity, Settings, ArrowRight, Cpu } from "lucide-react"

export default function EnergyPage() {
  const keyQuestions = [
    "Can you deliver power today",
    "How much power pathline exists",
    "How reliable it is",
    "What grid access exists",
    "How it scales for AI compute",
  ]

  const platformComponents = [
    {
      icon: Zap,
      title: "Prime Power Generation",
      capacity: "Up to 250 MW",
      description:
        "On-site generation capacity delivered through modular Rolls-Royce MTU reciprocating engine systems. These hydrogen-ready engines provide dispatchable power suitable for high-reliability compute environments.",
    },
    {
      icon: Battery,
      title: "Battery Energy Storage",
      capacity: "Up to 300 MW",
      description:
        "Battery energy storage systems (BESS) integrated into the campus microgrid supporting grid stabilization, peak load management, energy arbitrage, and resilience for AI infrastructure operations.",
    },
    {
      icon: Sun,
      title: "Solar Generation",
      capacity: "Up to 50 MW",
      description:
        "Solar generation capacity integrated to supplement the campus energy supply and reduce carbon intensity.",
    },
    {
      icon: Network,
      title: "Transmission Interconnection",
      capacity: "138 kV",
      description:
        "Dedicated transmission interconnection to Alberta's power grid. Stage 3 AESO interconnection process with GUOC posted. 150 MW export / 11 MW import capability, expandable to 150 MW import (subject to approvals).",
    },
  ]

  const microgridCapabilities = [
    "High-reliability power delivery",
    "Intelligent energy dispatch",
    "Battery-supported load balancing",
    "Grid market participation",
    "Dynamic load management for AI workloads",
  ]

  const reliabilityFeatures = [
    {
      icon: Shield,
      title: "Redundant Generation Capacity",
      description: "Multiple layers of power redundancy ensure continuous operation",
    },
    {
      icon: Battery,
      title: "Battery-Backed Energy Storage",
      description: "Utility-scale storage for load smoothing and emergency backup",
    },
    {
      icon: Network,
      title: "Transmission Grid Interconnection",
      description: "138 kV connection providing import/export flexibility",
    },
    {
      icon: Activity,
      title: "Intelligent Microgrid Management",
      description: "Real-time load balancing and dynamic power routing",
    },
    {
      icon: Settings,
      title: "Modular Generation Scaling",
      description: "Expandable capacity aligned with infrastructure growth",
    },
  ]

  const hyperscalerPower = [
    "Initial 10 MW operational October 2026",
    "Scalable expansion toward 240+ MW generation capacity",
    "Integrated 300 MW battery storage platform",
    "50 MW renewable solar integration",
  ]

  const hybridBenefits = [
    "Operational redundancy",
    "Flexible power scaling",
    "Energy market participation",
    "Integration of renewable resources",
    "Load management for high-density compute clusters",
  ]

  const strategicAdvantages = [
    "Scalable on-site generation",
    "Transmission interconnection access",
    "Integrated energy storage systems",
    "Renewable generation capability",
    "Campus microgrid architecture",
  ]

  return (
    <PageLayout
      title="ENERGY"
      subtitle="Scalable Power Infrastructure for AI Compute"
    >
      {/* Key Questions Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-secondary via-black/95 to-black/90 rounded-3xl border-2 border-primary/50 p-12 shadow-2xl overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,200,0.3),transparent_50%)]"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-center text-3xl font-bold text-primary mb-4">Critical Infrastructure Questions</h3>
            <p className="text-center text-accent mb-12 max-w-2xl mx-auto">
              Key considerations for enterprise AI infrastructure deployment
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {keyQuestions.map((question, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100"></div>
                  <div className="relative flex flex-col items-center text-center gap-4 p-6 bg-gradient-to-b from-black/60 to-black/80 rounded-2xl border-2 border-primary/30 group-hover:border-primary/60 transition-all shadow-lg">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white text-base font-bold leading-tight min-h-[3rem] flex items-center">
                      {question}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Overview Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-xl text-accent leading-relaxed text-center">
            The AI Hub of Innovation (AHI) campus is supported by a purpose-built energy platform designed specifically for high-density AI infrastructure, hyperscale data centres, and sovereign compute deployments.
          </p>
          <div className="bg-gradient-to-r from-primary/5 via-black/60 to-primary/5 border-2 border-primary/40 p-10 rounded-2xl shadow-2xl">
            <p className="text-white font-bold text-2xl mb-6 text-center">
              Power availability is the primary constraint for AI infrastructure globally.
            </p>
            <p className="text-accent text-lg leading-relaxed text-center max-w-4xl mx-auto">
              AHI addresses this challenge through an integrated energy platform combining on-site prime power generation, utility-scale battery storage, renewable generation integration, and dedicated transmission interconnection.
            </p>
          </div>
          <p className="text-lg text-accent leading-relaxed text-center">
            This architecture enables reliable, scalable power delivery aligned with the rapid expansion of AI compute infrastructure.
          </p>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Energy Platform Overview */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-bold text-primary mb-6">Energy Platform Overview</h2>
          <p className="text-xl text-accent max-w-4xl mx-auto leading-relaxed">
            AHI operates a campus-scale microgrid architecture designed to deliver reliable energy for high-performance computing environments. The platform integrates multiple energy sources to provide flexibility, reliability, and scalability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {platformComponents.map((component, idx) => {
            const Icon = component.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-card to-black/80 rounded-2xl p-8 border-2 border-primary/30 hover:border-primary/60 transition-all shadow-xl hover:shadow-primary/20"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary via-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{component.title}</h3>
                    <div className="inline-block px-4 py-1 bg-primary/20 border border-primary/40 rounded-full">
                      <p className="text-primary font-bold text-sm">{component.capacity}</p>
                    </div>
                  </div>
                </div>
                <p className="text-accent leading-relaxed text-base">{component.description}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      <SectionDividerAnimated />

      {/* AI Campus Microgrid Architecture */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-secondary via-black/95 to-black/90 rounded-2xl border-2 border-primary/40 p-12 shadow-2xl"
        >
          <h2 className="text-4xl font-bold text-primary mb-6 text-center">AI Campus Microgrid Architecture</h2>
          <p className="text-xl text-accent mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            AHI operates as an integrated energy microgrid, allowing the campus to dynamically balance generation, storage, renewable energy, and grid participation.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {microgridCapabilities.map((capability, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-gradient-to-r from-primary/10 to-black/60 p-5 rounded-xl border-2 border-primary/30 hover:border-primary/60 transition-all"
              >
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-white font-medium">{capability}</span>
              </motion.div>
            ))}
          </div>
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
            <p className="text-accent text-lg italic text-center">
              The microgrid platform supports large-scale AI compute deployments requiring consistent power availability.
            </p>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Phased Energy Deployment */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">Phased Energy Deployment</h2>
          <p className="text-xl text-accent mb-16 text-center max-w-3xl mx-auto">
            The AHI energy platform expands alongside campus infrastructure growth.
          </p>

          <div className="space-y-6">
            {[
              {
                phase: "Phase 1",
                title: "Prime Power Deployment",
                description:
                  "Initial 10 MW of on-site generation operational by October 2026. This first phase establishes the foundation of the campus microgrid and supports the initial deployment of AI infrastructure. Generation capacity will scale toward 240+ MW of prime power deployment year over year over 3–5 years through modular engine installations.",
                status: "Under Construction",
                color: "yellow",
              },
              {
                phase: "Phase 2",
                title: "Battery Storage Deployment",
                description:
                  "Deployment of utility-scale battery energy storage systems integrated into the campus microgrid. Battery infrastructure enhances reliability while enabling grid services and energy optimization.",
                status: "Planned",
                color: "accent",
              },
              {
                phase: "Phase 3",
                title: "Solar Integration",
                description:
                  "Installation of 50 MW solar generation capacity integrated with the campus energy platform. Solar generation supplements power supply while supporting long-term carbon reduction objectives.",
                status: "Planned",
                color: "accent",
              },
              {
                phase: "Phase 4",
                title: "Hydrogen Readiness and Carbon Reduction",
                description:
                  "The energy platform is designed to support hydrogen-ready generation systems and potential carbon capture technologies, enabling progressive reduction of greenhouse gas emissions while maintaining reliable energy supply.",
                status: "Long-Term Development",
                color: "blue",
              },
            ].map((phase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-8 bg-gradient-to-r from-card to-black/80 p-8 rounded-2xl border-2 border-primary/30 hover:border-primary/50 transition-all shadow-lg"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary via-primary to-accent flex items-center justify-center shadow-xl">
                    <span className="text-white font-bold text-2xl">{idx + 1}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-primary font-bold mb-2 tracking-wide uppercase">{phase.phase}</p>
                  <h3 className="text-3xl font-bold text-white mb-4">{phase.title}</h3>
                  <p className="text-accent leading-relaxed text-lg mb-6">{phase.description}</p>
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border-2 border-primary/40">
                    <span
                      className={`w-3 h-3 rounded-full ${
                        phase.color === "yellow"
                          ? "bg-yellow-500"
                          : phase.color === "blue"
                            ? "bg-blue-400"
                            : "bg-accent"
                      }`}
                    />
                    <span className="text-sm font-bold text-primary">{phase.status}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Reliability for AI Infrastructure */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">Reliability for AI Infrastructure</h2>
          <p className="text-xl text-accent mb-16 max-w-4xl mx-auto text-center leading-relaxed">
            AI training clusters and high-performance computing environments require continuous power delivery and operational resilience. AHI's power platform provides multiple layers of reliability.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reliabilityFeatures.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-card to-black/80 p-8 rounded-2xl border-2 border-primary/30 hover:border-primary/60 transition-all shadow-lg hover:shadow-primary/20"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-accent leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-r-2xl">
              <p className="text-white font-semibold text-xl text-center italic">
                This architecture supports mission-critical infrastructure uptime requirements for AI compute operations.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Power for Hyperscalers */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">Power for Hyperscalers</h2>
          <p className="text-xl text-accent mb-12 text-center max-w-5xl mx-auto leading-relaxed">
            The AHI energy platform is designed specifically to support large-scale AI infrastructure deployments. Unlike conventional data centre developments dependent solely on grid availability, AHI provides a hybrid energy environment combining on-site generation with transmission grid access.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            {/* Dedicated AI Infrastructure Power */}
            <div className="bg-gradient-to-br from-primary/10 via-black/80 to-black/90 rounded-2xl border-2 border-primary/40 p-10 shadow-xl hover:shadow-primary/20 transition-all">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Dedicated AI Infrastructure Power</h3>
              </div>
              <p className="text-accent mb-8 text-lg leading-relaxed">
                The campus supports modular AI data centre deployments powered through a scalable energy platform.
              </p>
              <div className="space-y-4">
                {hyperscalerPower.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-black/40 rounded-xl border border-primary/20">
                    <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-primary/5 border-l-4 border-primary rounded-r-xl">
                <p className="text-accent italic">
                  This structure allows hyperscale operators to deploy compute infrastructure while energy capacity scales alongside demand.
                </p>
              </div>
            </div>

            {/* Hybrid Grid + On-Site Architecture */}
            <div className="bg-gradient-to-br from-accent/10 via-black/80 to-black/90 rounded-2xl border-2 border-accent/40 p-10 shadow-xl hover:shadow-accent/20 transition-all">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Hybrid Grid + On-Site Architecture</h3>
              </div>
              <p className="text-accent mb-8 text-lg leading-relaxed">
                The AHI energy platform operates as a hybrid microgrid environment, combining generation, storage, and transmission access.
              </p>
              <div className="space-y-4">
                {hybridBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-black/40 rounded-xl border border-accent/20">
                    <Check className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/5 via-black/60 to-primary/5 border-2 border-primary/30 rounded-2xl p-10 shadow-xl">
            <h3 className="text-3xl font-bold text-primary mb-6 text-center">AI Infrastructure Deployment Pathline</h3>
            <p className="text-accent leading-relaxed text-lg text-center max-w-4xl mx-auto">
              The campus energy platform supports predictable power growth aligned with AI infrastructure deployment. Operators can deploy compute infrastructure within the early phases of the campus while generation capacity continues expanding toward the full energy platform build-out. This model allows for long-term infrastructure scaling without the constraints commonly associated with grid-dependent sites.
            </p>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Strategic Energy Advantage */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 via-black/90 to-accent/10 rounded-3xl border-2 border-primary/50 p-12 shadow-2xl"
        >
          <h2 className="text-5xl font-bold text-white mb-6 text-center">Strategic Energy Advantage</h2>
          <p className="text-xl text-accent mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            The AHI energy platform provides a unique environment for AI infrastructure development through the combination of:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {strategicAdvantages.map((advantage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05, type: "spring" }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-gradient-to-r from-primary/10 to-black/60 p-6 rounded-2xl border-2 border-primary/40 hover:border-primary/70 transition-all shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-bold text-lg">{advantage}</span>
              </motion.div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/40 rounded-2xl p-8">
            <p className="text-white font-bold text-center text-2xl">
              Together these systems create an energy platform designed to support next-generation AI compute infrastructure.
            </p>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Future Energy Pathline */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-secondary to-black/90 rounded-3xl border-2 border-primary/40 p-12 shadow-2xl"
        >
          <h2 className="text-5xl font-bold text-primary mb-8">Future Energy Pathline</h2>
          <p className="text-2xl text-accent leading-relaxed max-w-4xl mx-auto font-medium">
            The long-term energy roadmap for the campus targets up to 250 MW of generation capacity supported by integrated storage and renewable energy systems. This scalable energy pathline enables the campus to support large-scale AI infrastructure deployments as the ecosystem grows.
          </p>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Energy Built for AI */}
      <section className="max-w-7xl mx-auto px-4 py-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-secondary via-black/95 to-black/90 border-2 border-primary/50 rounded-3xl p-14 shadow-2xl"
        >
          <h2 className="text-5xl font-bold text-primary mb-8 text-center">Energy Built for AI</h2>
          <p className="text-2xl text-accent mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            AI infrastructure requires power environments capable of supporting high-density GPU clusters and continuous training workloads.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              "Hyperscale AI data centres",
              "Sovereign AI cloud deployments",
              "Enterprise AI training clusters",
              "High-performance computing environments",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/10 to-black/60 p-6 rounded-2xl border-2 border-primary/30 hover:border-primary/60 transition-all text-center shadow-lg"
              >
                <p className="text-white font-bold text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
          <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-r-2xl">
            <p className="text-accent text-center text-xl leading-relaxed font-medium">
              By combining generation, storage, renewable integration, and transmission access, AHI provides a scalable energy platform designed for the next generation of AI infrastructure.
            </p>
          </div>
        </motion.div>
      </section>
    </PageLayout>
  )
}
