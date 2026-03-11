"use client"

import { motion } from "framer-motion"
import PageLayout from "@/components/page-layout"
import SectionDividerAnimated from "@/components/section-divider-animated"
import {
  Cloud, Server, Building2, Shield, Cpu, Droplets, Zap, Network,
  Award, CheckCircle2, ArrowRight, TrendingUp, Gauge, Battery, Sun
} from "lucide-react"
import Link from "next/link"

export default function CloudPage() {
  const deploymentModels = [
    {
      icon: Cloud,
      title: "AI Cloud",
      description: "GPU-accelerated cloud compute designed for AI training, inference, and data processing.",
      idealFor: ["Startups", "ML teams", "Research groups", "AI developers"]
    },
    {
      icon: Server,
      title: "Dedicated AI Clusters",
      description: "Reserved GPU clusters deployed for organizations requiring dedicated compute capacity.",
      idealFor: ["Enterprise AI teams", "Hyperscalers", "Sovereign compute infrastructure"]
    },
    {
      icon: Building2,
      title: "Private AI Infrastructure",
      description: "Private compute deployments inside secure environments with dedicated infrastructure.",
      idealFor: ["Enterprise AI workloads", "Regulated industries", "Sensitive data environments"]
    },
    {
      icon: Server,
      title: "BYOC (Bring Your Own Compute)",
      description: "Organizations deploy their own GPU infrastructure inside AHI data centre environments.",
      idealFor: ["Hyperscalers", "AI infrastructure operators", "Sovereign compute platforms"]
    }
  ]

  const gpuArchitectures = [
    "NVIDIA H100",
    "NVIDIA H200",
    "NVIDIA B200",
    "NVIDIA B300"
  ]

  const clusterOptimizations = [
    "Large-scale training",
    "Inference at scale",
    "GPU cloud deployments"
  ]

  const coolingTechnologies = [
    { name: "Immersion Liquid Cooling", icon: Droplets },
    { name: "Direct-to-Chip Cooling", icon: Droplets },
    { name: "Ultra-Low Water Usage Cooling Systems", icon: Droplets }
  ]

  const hardwareBenefits = [
    "3–5 year manufacturer hardware warranty",
    "Enterprise-grade components",
    "Lifecycle support from OEM vendors",
    "Validated GPU cluster architecture"
  ]

  const networkFeatures = [
    "400Gb+ network connectivity",
    "Carrier neutral fibre providers",
    "Multiple fibre paths",
    "Redundant network architecture"
  ]

  const networkCapabilities = [
    "Distributed training",
    "High-speed data pipelines",
    "Global cloud connectivity"
  ]

  const powerPlatform = [
    { label: "Prime Power", value: "250 MW", description: "On-site generation", icon: Zap },
    { label: "Battery Storage", value: "300 MW", description: "Energy storage", icon: Battery },
    { label: "Solar Integration", value: "50 MW", description: "Renewable energy", icon: Sun },
    { label: "Grid Interconnection", value: "138 kV", description: "Transmission access", icon: Network }
  ]

  const keyAdvantages = [
    "AI-optimized infrastructure",
    "Scalable GPU clusters",
    "Advanced liquid cooling",
    "High-speed connectivity",
    "Dedicated energy infrastructure",
    "Modular expansion capability"
  ]

  return (
    <PageLayout
      title="AI CLOUD INFRASTRUCTURE"
      subtitle="Deploy and scale GPU workloads on high-performance AI infrastructure designed for training, inference, and enterprise compute"
    >
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-xl text-accent leading-relaxed text-center max-w-5xl mx-auto">
            The AI Hub of Innovation provides high-density compute infrastructure designed for modern AI workloads.
          </p>
          <p className="text-lg text-accent leading-relaxed text-center max-w-5xl mx-auto">
            Organizations can deploy workloads through multiple models including cloud compute, private clusters, or Bring-Your-Own-Compute (BYOC).
          </p>
          <p className="text-lg text-accent leading-relaxed text-center max-w-5xl mx-auto">
            Infrastructure is powered by dedicated energy systems, advanced cooling technologies, and high-speed connectivity designed for large-scale AI training and inference.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 flex items-center gap-3"
            >
              <Cloud className="w-6 h-6" />
              Deploy Compute
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 rounded-full border-2 border-primary text-primary font-bold text-lg hover:bg-primary/10 transition-all duration-300 flex items-center gap-3"
            >
              Contact AI Infrastructure Team
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Cloud Deployment Models */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-16 text-center">Cloud & Compute Deployment Models</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {deploymentModels.map((model, idx) => {
              const Icon = model.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-card to-black/80 rounded-2xl p-8 border-2 border-primary/30 hover:border-primary/60 transition-all shadow-xl"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{model.title}</h3>
                  <p className="text-accent mb-6 leading-relaxed">{model.description}</p>
                  <div className="border-t border-primary/20 pt-6">
                    <p className="text-primary font-semibold mb-4">Ideal for:</p>
                    <div className="space-y-2">
                      {model.idealFor.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-accent">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Example AI Cluster Deployment */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 via-black/90 to-accent/10 rounded-3xl border-2 border-primary/50 p-12 shadow-2xl"
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">Example AI Cluster Deployment</h2>
          <p className="text-xl text-accent mb-12 text-center max-w-3xl mx-auto">
            A typical AI Super Cluster deployment at AHI
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/20 to-black/60 rounded-2xl border-2 border-primary/40 p-8 text-center shadow-lg"
            >
              <Server className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-sm text-accent mb-2 uppercase tracking-wide">Cluster Size</p>
              <p className="text-4xl font-bold text-primary mb-2">1</p>
              <p className="text-accent text-sm">AI Super Cluster</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent/20 to-black/60 rounded-2xl border-2 border-accent/40 p-8 text-center shadow-lg"
            >
              <Cpu className="w-12 h-12 text-accent mx-auto mb-4" />
              <p className="text-sm text-accent mb-2 uppercase tracking-wide">GPU Count</p>
              <p className="text-4xl font-bold text-accent mb-2">4,096</p>
              <p className="text-accent text-sm">GPUs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/20 to-black/60 rounded-2xl border-2 border-primary/40 p-8 text-center shadow-lg"
            >
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <p className="text-sm text-accent mb-2 uppercase tracking-wide">Power Draw</p>
              <p className="text-4xl font-bold text-primary mb-2">6.5</p>
              <p className="text-accent text-sm">MW</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent/20 to-black/60 rounded-2xl border-2 border-accent/40 p-8 text-center shadow-lg"
            >
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
              <p className="text-sm text-accent mb-2 uppercase tracking-wide">Revenue Capacity</p>
              <p className="text-4xl font-bold text-accent mb-2">$50M</p>
              <p className="text-accent text-sm">Annual potential</p>
            </motion.div>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/40 rounded-2xl p-8">
            <p className="text-white font-bold text-center text-xl">
              This deployment model demonstrates the scale and economic viability of AI infrastructure at AHI
            </p>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* GPU Infrastructure */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">High Performance GPU Infrastructure</h2>
          <p className="text-xl text-accent mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            AHI infrastructure supports modern AI accelerator architectures used for training and inference.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div className="bg-gradient-to-br from-card to-black/80 rounded-2xl border-2 border-primary/30 p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-8">Supported architectures include:</h3>
              <div className="grid grid-cols-2 gap-4">
                {gpuArchitectures.map((arch, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-primary/10 to-black/60 p-6 rounded-xl border-2 border-primary/40 text-center hover:border-primary/70 transition-all"
                  >
                    <Cpu className="w-10 h-10 text-primary mx-auto mb-3" />
                    <p className="text-white font-bold">{arch}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-black/80 rounded-2xl border-2 border-primary/40 p-10 shadow-xl flex flex-col justify-center">
              <p className="text-white text-xl font-semibold mb-8 leading-relaxed">
                Clusters are deployed in <span className="text-primary font-bold">6–8 MW Modular Super Clusters</span>, designed for high-density AI workloads.
              </p>
              <div className="space-y-4">
                <p className="text-lg text-white font-semibold mb-4">Each cluster is optimized for:</p>
                {clusterOptimizations.map((opt, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-black/40 rounded-xl border border-primary/20">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-white font-medium">{opt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Infrastructure Designed for AI */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">Infrastructure Built for AI Workloads</h2>
          <p className="text-xl text-accent mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            AI clusters require infrastructure specifically designed for GPU density, cooling performance, and power reliability.
          </p>

          <div className="bg-gradient-to-br from-secondary via-black/95 to-black/90 rounded-3xl border-2 border-primary/50 p-12 shadow-2xl mb-12">
            <h3 className="text-3xl font-bold text-white mb-10 text-center">The AHI campus integrates:</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {coolingTechnologies.map((tech, idx) => {
                const Icon = tech.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-primary/10 to-black/60 p-8 rounded-2xl border-2 border-primary/30 hover:border-primary/60 transition-all text-center shadow-lg"
                  >
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-white font-bold">{tech.name}</p>
                  </motion.div>
                )
              })}
            </div>
            <p className="text-lg text-accent text-center mb-8 leading-relaxed">
              These technologies allow GPU clusters to operate at high density while maintaining industry-leading efficiency.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/50 rounded-3xl p-12 text-center shadow-2xl">
            <p className="text-accent text-sm font-semibold mb-4 uppercase tracking-wide">Typical System Efficiency</p>
            <p className="text-7xl font-bold text-primary mb-4">~1.03</p>
            <p className="text-2xl text-white font-bold">PUE</p>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Enterprise Hardware Reliability */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-secondary via-black/95 to-black/90 rounded-3xl border-2 border-primary/50 p-12 shadow-2xl"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Award className="w-16 h-16 text-primary" />
            <h2 className="text-5xl font-bold text-primary">Enterprise Hardware Standards</h2>
          </div>
          <p className="text-xl text-accent mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            All infrastructure deployed within the AHI environment operates using enterprise-grade hardware with full manufacturer support.
          </p>

          <h3 className="text-2xl font-bold text-white mb-8 text-center">Compute infrastructure benefits include:</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {hardwareBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-gradient-to-r from-primary/10 to-black/60 rounded-xl border-2 border-primary/30"
              >
                <Award className="w-8 h-8 text-primary flex-shrink-0" />
                <span className="text-white font-medium text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/50 rounded-2xl p-8">
            <p className="text-white font-bold text-xl text-center">
              This ensures long-term reliability for mission-critical AI workloads.
            </p>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Network Infrastructure */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Network className="w-16 h-16 text-primary" />
            <h2 className="text-5xl font-bold text-primary">High-Speed Connectivity</h2>
          </div>
          <p className="text-xl text-accent mb-16 text-center max-w-4xl mx-auto leading-relaxed">
            AI workloads require extremely high-bandwidth networking between clusters and external systems.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div className="bg-gradient-to-br from-card to-black/80 rounded-2xl border-2 border-primary/30 p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-8">AHI infrastructure provides:</h3>
              <div className="space-y-4">
                {networkFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary/10 to-black/60 rounded-xl border border-primary/20">
                    <Network className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-black/80 rounded-2xl border-2 border-primary/40 p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-8">This allows clusters to support:</h3>
              <div className="space-y-4">
                {networkCapabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-black/40 rounded-xl border border-primary/20">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium">{cap}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/50 rounded-xl p-6 text-center">
                <p className="text-primary text-3xl font-bold mb-2">400Gb+</p>
                <p className="text-white font-semibold">Network Connectivity</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Power Platform */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">Power Infrastructure for AI Compute</h2>
          <p className="text-xl text-accent mb-16 text-center max-w-4xl mx-auto leading-relaxed">
            The AHI campus integrates dedicated energy infrastructure designed specifically for AI workloads.
          </p>

          <h3 className="text-3xl font-bold text-white mb-10 text-center">Power platform includes:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {powerPlatform.map((power, idx) => {
              const Icon = power.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-card to-black/80 rounded-2xl p-8 border-2 border-primary/30 hover:border-primary/60 transition-all shadow-xl text-center"
                >
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <p className="text-sm text-primary font-bold mb-2 uppercase tracking-wide">{power.label}</p>
                  <p className="text-4xl font-bold text-white mb-2">{power.value}</p>
                  <p className="text-accent text-sm">{power.description}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="bg-gradient-to-br from-secondary to-black/90 rounded-2xl border-2 border-primary/40 p-10 shadow-xl">
            <p className="text-white text-2xl font-bold text-center leading-relaxed">
              This hybrid system ensures reliable power delivery for high-density GPU clusters.
            </p>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Why Deploy at AHI */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 via-black/90 to-accent/10 rounded-3xl border-2 border-primary/50 p-12 shadow-2xl"
        >
          <h2 className="text-5xl font-bold text-white mb-8 text-center">Why AI Workloads Deploy at AHI</h2>
          <p className="text-xl text-accent mb-12 text-center">Key advantages include:</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {keyAdvantages.map((advantage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-gradient-to-r from-primary/10 to-black/60 p-6 rounded-2xl border-2 border-primary/40 hover:border-primary/70 transition-all shadow-lg"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-white font-bold">{advantage}</span>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/40 rounded-2xl p-10">
            <p className="text-white font-bold text-center text-2xl">
              Together these systems create an environment designed specifically for large-scale AI infrastructure deployment.
            </p>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Final Call to Action */}
      <section className="max-w-5xl mx-auto px-4 py-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-secondary via-black/95 to-black/90 border-2 border-primary/50 rounded-3xl p-14 shadow-2xl text-center"
        >
          <Cloud className="w-20 h-20 text-primary mx-auto mb-6" />
          <h2 className="text-5xl font-bold text-primary mb-8">Deploy AI Infrastructure</h2>
          <p className="text-2xl text-accent mb-8 max-w-3xl mx-auto leading-relaxed">
            Deploy GPU workloads on infrastructure designed specifically for modern AI compute.
          </p>
          <p className="text-xl text-white mb-12 max-w-4xl mx-auto">
            Contact the AHI team to explore cloud compute, dedicated clusters, or BYOC deployments.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 px-12 py-5 bg-gradient-to-r from-primary to-accent text-white font-bold text-xl rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
          >
            Request Deployment Information
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </PageLayout>
  )
}
