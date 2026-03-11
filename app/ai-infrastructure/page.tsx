"use client"

import { motion } from "framer-motion"
import PageLayout from "@/components/page-layout"
import SectionDividerAnimated from "@/components/section-divider-animated"
import {
  Cpu, Cloud, Building2, Droplets, Zap, Network, Shield, Server,
  CheckCircle2, ArrowRight, ArrowDown, Gauge, Award, Wifi, TrendingUp
} from "lucide-react"

export default function AIInfrastructurePage() {
  const deploymentModels = [
    {
      icon: Server,
      title: "BYOC Infrastructure",
      subtitle: "Bring Your Own Compute",
      description: "Customers deploy their own GPU clusters inside AHI infrastructure",
      items: ["Private AI Clusters", "Dedicated AI environments for enterprise workloads"]
    },
    {
      icon: Building2,
      title: "Enterprise AI",
      subtitle: "Dedicated Infrastructure",
      description: "Purpose-built environments for enterprise AI training and inference",
      items: ["Custom deployment models", "Dedicated security & compliance"]
    },
    {
      icon: Cloud,
      title: "AI Cloud Platforms",
      subtitle: "GPU Cloud Providers",
      description: "GPU cloud providers deploy clusters and offer AI compute services",
      items: ["Shared GPU infrastructure", "Scalable AI compute access"]
    }
  ]

  const clusterSpecs = [
    { category: "Cluster Size", specification: "6–8 MW Modules" },
    { category: "Deployment Model", specification: "BYOC or Cloud" },
    { category: "Cooling", specification: "Immersion / Direct-to-Chip" },
    { category: "Network", specification: "400Gb+ Fibre" },
    { category: "GPU Support", specification: "NVIDIA H100 / H200 / B200 / B300" },
    { category: "Infrastructure Efficiency", specification: "PUE ~1.03" },
    { category: "Warranty", specification: "3–5 Year Manufacturer Support" }
  ]

  const architectureLayers = [
    {
      title: "AI Compute Layer",
      items: ["AI Super Clusters (6–8 MW Modules)", "GPU Infrastructure", "BYOC + Cloud Deployments"],
      color: "primary"
    },
    {
      title: "Cooling Layer",
      items: ["Immersion Liquid Cooling", "Direct-to-Chip Cooling", "Ultra-Low Water Usage"],
      color: "accent"
    },
    {
      title: "Network Layer",
      items: ["Carrier Neutral Fibre", "400Gb+ Connectivity", "Multi-Path Redundancy"],
      color: "primary"
    },
    {
      title: "Energy Platform",
      items: ["250 MW Prime Power", "300 MW Battery Storage", "50 MW Solar Integration"],
      color: "accent"
    },
    {
      title: "Grid Interconnection",
      items: ["138 kV Transmission", "150 MW Export", "Up to 150 MW Import"],
      color: "primary"
    }
  ]

  const coolingFeatures = [
    {
      icon: Droplets,
      title: "Immersion Liquid Cooling",
      description: "Fully immersive cooling environments designed for high-density GPU clusters."
    },
    {
      icon: Droplets,
      title: "Direct-to-Chip Cooling",
      description: "Advanced liquid cooling systems designed to remove heat directly from compute components."
    }
  ]

  const coolingBenefits = [
    "Higher compute density",
    "Reduced thermal constraints",
    "Improved infrastructure efficiency",
    "Waterless or ultra-low-water cooling environments"
  ]

  const efficiencyMetrics = [
    { label: "PUE Target", value: "~1.03", description: "For high-density AI deployments" },
    { label: "Thermal Management", value: "Optimized", description: "Advanced airflow systems" },
    { label: "Cooling Tech", value: "Advanced", description: "Liquid cooling architectures" },
    { label: "Energy Systems", value: "Integrated", description: "Campus-scale microgrid" }
  ]

  const connectivityFeatures = [
    "High-bandwidth AI cluster networking",
    "Interconnection with major cloud providers",
    "Redundant fibre routes",
    "Ultra-low latency data transfer",
    "400 Gb+ connectivity environments"
  ]

  const gpuPlatforms = [
    "NVIDIA H100 / H200",
    "NVIDIA B200 / B300 architectures",
    "Next-generation accelerator platforms"
  ]

  const deploymentTypes = [
    {
      icon: TrendingUp,
      title: "Hyperscale AI Infrastructure",
      description: "Large-scale AI clusters deployed by hyperscale operators."
    },
    {
      icon: Building2,
      title: "Enterprise AI Environments",
      description: "Dedicated infrastructure for enterprise AI training and inference."
    },
    {
      icon: Shield,
      title: "Sovereign AI Deployments",
      description: "AI infrastructure environments designed for national or regulated compute requirements."
    }
  ]

  const platformBenefits = [
    "Scalable energy infrastructure",
    "Advanced cooling environments",
    "Carrier-neutral connectivity",
    "Modular compute deployment",
    "Campus-scale expansion capability"
  ]

  return (
    <PageLayout
      title="AI INFRASTRUCTURE"
      subtitle="High-Density Infrastructure for AI Compute"
    >
      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-xl text-accent leading-relaxed text-center max-w-5xl mx-auto">
            The AI Hub of Innovation (AHI) provides purpose-built infrastructure for next-generation AI compute, hyperscale training clusters, and sovereign AI deployments.
          </p>
          <div className="bg-gradient-to-r from-primary/5 via-black/60 to-primary/5 border-2 border-primary/40 p-10 rounded-2xl shadow-2xl">
            <p className="text-white font-bold text-xl mb-6 text-center">
              The campus supports a vendor-agnostic deployment model, enabling organizations to deploy:
            </p>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {["AI training clusters", "Enterprise AI infrastructure", "GPU cloud platforms", "Sovereign AI environments"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl border border-primary/30">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-accent font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-lg text-accent leading-relaxed text-center max-w-5xl mx-auto">
            AHI provides the power, cooling, connectivity, and physical infrastructure, allowing operators to deploy AI compute environments without legacy data centre constraints.
          </p>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* AI Campus Capacity Pathline */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-12 text-center">AI Campus Capacity</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="flex-1 text-center bg-gradient-to-br from-yellow-500/10 to-black/80 rounded-2xl border-2 border-yellow-500/40 p-10 shadow-2xl"
            >
              <p className="text-sm text-yellow-500 font-bold mb-3 uppercase tracking-wide">Initial Deployment</p>
              <p className="text-6xl font-bold text-yellow-500 mb-3">10 MW</p>
              <p className="text-accent font-semibold">October 2026</p>
            </motion.div>

            <ArrowRight className="w-12 h-12 text-primary hidden md:block" />
            <ArrowDown className="w-12 h-12 text-primary md:hidden" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1 text-center bg-gradient-to-br from-accent/10 to-black/80 rounded-2xl border-2 border-accent/40 p-10 shadow-2xl"
            >
              <p className="text-sm text-accent font-bold mb-3 uppercase tracking-wide">Expansion Phase</p>
              <p className="text-5xl font-bold text-accent mb-3">40–120 MW</p>
              <p className="text-accent font-semibold">Modular Scaling</p>
            </motion.div>

            <ArrowRight className="w-12 h-12 text-primary hidden md:block" />
            <ArrowDown className="w-12 h-12 text-primary md:hidden" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="flex-1 text-center bg-gradient-to-br from-primary/10 to-black/80 rounded-2xl border-2 border-primary/40 p-10 shadow-2xl"
            >
              <p className="text-sm text-primary font-bold mb-3 uppercase tracking-wide">Campus Pathline</p>
              <p className="text-5xl font-bold text-primary mb-3">240+ MW</p>
              <p className="text-accent font-semibold">AI Infrastructure</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Deployment Models */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">Flexible Deployment Models</h2>
          <p className="text-xl text-accent mb-16 text-center max-w-4xl mx-auto">
            AHI provides the infrastructure platform. Operators deploy the compute.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                  <h3 className="text-2xl font-bold text-white mb-2">{model.title}</h3>
                  <p className="text-primary font-semibold text-sm mb-4">{model.subtitle}</p>
                  <p className="text-accent mb-6 leading-relaxed">{model.description}</p>
                  <div className="space-y-3">
                    {model.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm">
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-accent">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="bg-primary/5 border-2 border-primary/40 rounded-2xl p-8 text-center">
            <p className="text-white font-bold text-xl">
              AHI provides the infrastructure platform. Operators deploy the compute.
            </p>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* AI Cluster Specification Table */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-secondary via-black/95 to-black/90 rounded-3xl border-2 border-primary/50 p-12 shadow-2xl"
        >
          <h2 className="text-5xl font-bold text-primary mb-12 text-center">AI Super Cluster Infrastructure</h2>
          <div className="space-y-3">
            {clusterSpecs.map((spec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 p-5 bg-gradient-to-r from-primary/10 to-black/60 rounded-xl border-2 border-primary/30 hover:border-primary/50 transition-all"
              >
                <span className="text-white font-bold">{spec.category}</span>
                <span className="text-primary font-semibold">{spec.specification}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* AI Infrastructure Architecture */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">AI Infrastructure Architecture</h2>
          <p className="text-xl text-accent mb-16 text-center max-w-4xl mx-auto">
            Full-stack infrastructure designed for modern AI compute deployments
          </p>

          <div className="space-y-6">
            {architectureLayers.map((layer, idx) => (
              <div key={idx}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br ${
                    layer.color === "primary" ? "from-primary/10 to-black/80" : "from-accent/10 to-black/80"
                  } rounded-2xl border-2 ${
                    layer.color === "primary" ? "border-primary/40" : "border-accent/40"
                  } p-8 shadow-xl`}
                >
                  <h3 className={`text-2xl font-bold mb-6 ${
                    layer.color === "primary" ? "text-primary" : "text-accent"
                  }`}>
                    {layer.title}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {layer.items.map((item, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-3 p-4 bg-black/40 rounded-xl border ${
                          layer.color === "primary" ? "border-primary/20" : "border-accent/20"
                        }`}
                      >
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${
                          layer.color === "primary" ? "text-primary" : "text-accent"
                        }`} />
                        <span className="text-white font-medium text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                {idx < architectureLayers.length - 1 && (
                  <div className="flex justify-center py-4">
                    <ArrowDown className="w-8 h-8 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Modular AI Super Clusters */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">Modular AI Super Clusters</h2>
          <p className="text-xl text-accent mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            The campus is designed around modular AI compute clusters, allowing operators to deploy infrastructure in scalable blocks.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div className="bg-gradient-to-br from-card to-black/80 rounded-2xl border-2 border-primary/30 p-10 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <Server className="w-12 h-12 text-primary" />
                <h3 className="text-2xl font-bold text-white">Typical AI Cluster Configuration</h3>
              </div>
              <div className="space-y-4">
                {[
                  "6–8 MW per AI cluster",
                  "High-density GPU deployments",
                  "Immersion or direct-to-chip cooling",
                  "Scalable modular architecture"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary/10 to-black/60 rounded-xl border border-primary/20">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-black/80 rounded-2xl border-2 border-primary/40 p-10 shadow-xl flex flex-col justify-center">
              <p className="text-white text-xl font-semibold mb-6 leading-relaxed">
                Each cluster is engineered for high-density GPU infrastructure and supports modern accelerator architectures.
              </p>
              <p className="text-accent text-lg leading-relaxed mb-6">
                Clusters can be deployed independently or combined into larger AI infrastructure environments.
              </p>
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
                <p className="text-accent italic">
                  This architecture enables rapid expansion of compute capacity while maintaining predictable infrastructure scaling.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* BYOC - Bring Your Own Compute */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-secondary via-black/95 to-black/90 rounded-3xl border-2 border-primary/50 p-12 shadow-2xl"
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">BYOC – Bring Your Own Compute</h2>
          <p className="text-xl text-accent mb-10 text-center max-w-3xl mx-auto">
            AHI supports a BYOC (Bring Your Own Compute) deployment model.
          </p>
          <p className="text-lg text-white mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            This allows hyperscalers, enterprises, and AI operators to deploy their own GPU clusters within the campus infrastructure.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">The campus provides:</h3>
              <div className="space-y-4">
                {[
                  "Powered infrastructure",
                  "Cooling environments",
                  "Fibre connectivity",
                  "Physical security",
                  "Campus-scale energy systems"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/10 to-black/60 rounded-xl border-2 border-primary/30">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/50 rounded-2xl p-8">
                <p className="text-white text-xl font-bold text-center leading-relaxed">
                  Customers deploy and manage their own compute hardware while leveraging AHI's infrastructure platform.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* AI Cloud Infrastructure */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">AI Cloud Infrastructure</h2>
          <p className="text-xl text-accent mb-12 text-center max-w-5xl mx-auto leading-relaxed">
            In addition to BYOC deployments, the campus supports AI cloud infrastructure operators providing GPU compute services.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-card rounded-2xl border-2 border-primary/30 p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">These platforms enable organizations to access AI compute capacity through:</h3>
              <div className="space-y-4">
                {[
                  "GPU cloud services",
                  "AI training infrastructure",
                  "Inference clusters",
                  "Enterprise AI environments"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary/10 to-black/60 rounded-xl border border-primary/20">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-black/80 rounded-2xl border-2 border-primary/40 p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">This structure supports a range of deployment models including:</h3>
              <div className="space-y-4">
                {[
                  "Private AI clusters",
                  "Managed AI cloud services",
                  "Sovereign AI compute environments"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-black/40 rounded-xl border border-primary/20">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Cooling Architecture */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">Cooling Architecture</h2>
          <p className="text-xl text-accent mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            High-density GPU environments require advanced cooling systems. The AHI campus supports multiple cooling architectures designed for modern AI infrastructure.
          </p>

          <h3 className="text-3xl font-bold text-white mb-10 text-center">Supported Cooling Systems</h3>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            {coolingFeatures.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-card to-black/80 rounded-2xl p-10 border-2 border-primary/30 hover:border-primary/60 transition-all shadow-xl"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">{feature.title}</h4>
                  <p className="text-accent leading-relaxed text-lg">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="bg-gradient-to-br from-secondary to-black/90 rounded-2xl border-2 border-primary/40 p-10 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">These cooling systems enable:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {coolingBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4 p-5 bg-gradient-to-r from-primary/10 to-black/60 rounded-xl border-2 border-primary/30">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Infrastructure Efficiency */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">Infrastructure Efficiency</h2>
          <p className="text-xl text-accent mb-16 text-center max-w-4xl mx-auto">
            The AHI AI infrastructure platform is engineered for high operational efficiency.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {efficiencyMetrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-card to-black/80 rounded-2xl p-8 border-2 border-primary/30 hover:border-primary/60 transition-all shadow-xl text-center"
              >
                <Gauge className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-sm text-primary font-bold mb-2 uppercase tracking-wide">{metric.label}</p>
                <p className="text-4xl font-bold text-white mb-3">{metric.value}</p>
                <p className="text-accent text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-primary/5 border-l-4 border-primary p-8 rounded-r-2xl">
            <p className="text-white text-xl font-semibold text-center">
              These efficiencies help reduce infrastructure overhead while supporting large-scale compute environments.
            </p>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Manufacturer Warranty & Lifecycle Support */}
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
            <h2 className="text-5xl font-bold text-primary">Manufacturer Warranty & Lifecycle Support</h2>
          </div>
          <p className="text-xl text-accent mb-12 text-center max-w-3xl mx-auto">
            AI hardware deployments require predictable lifecycle support.
          </p>
          <p className="text-lg text-white mb-10 text-center max-w-4xl mx-auto">
            The AHI infrastructure platform supports manufacturer-backed hardware deployments with extended lifecycle management.
          </p>

          <h3 className="text-2xl font-bold text-white mb-8 text-center">Typical hardware deployments include:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "3–5 year manufacturer warranties",
              "Vendor lifecycle support programs",
              "Certified cooling environments",
              "Infrastructure compatibility with modern accelerator hardware"
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-gradient-to-r from-primary/10 to-black/60 rounded-xl border-2 border-primary/30"
              >
                <Award className="w-8 h-8 text-primary flex-shrink-0" />
                <span className="text-white font-medium text-lg">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/50 rounded-2xl p-8">
            <p className="text-white font-bold text-xl text-center">
              This ensures long-term stability for AI compute environments.
            </p>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Fibre & Connectivity */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Wifi className="w-16 h-16 text-primary" />
            <h2 className="text-5xl font-bold text-primary">Fibre & Connectivity</h2>
          </div>
          <p className="text-xl text-accent mb-12 text-center max-w-4xl mx-auto">
            AI clusters require high-capacity network infrastructure.
          </p>
          <p className="text-lg text-white mb-16 text-center max-w-5xl mx-auto leading-relaxed">
            The AHI campus provides carrier-neutral fibre connectivity with multiple network paths.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div className="bg-gradient-to-br from-card to-black/80 rounded-2xl border-2 border-primary/30 p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-8">Connectivity infrastructure supports:</h3>
              <div className="space-y-4">
                {connectivityFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary/10 to-black/60 rounded-xl border border-primary/20">
                    <Network className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-black/80 rounded-2xl border-2 border-primary/40 p-10 shadow-xl flex flex-col justify-center">
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/50 rounded-2xl p-10 text-center">
                <Network className="w-20 h-20 text-primary mx-auto mb-6" />
                <p className="text-white text-2xl font-bold mb-4">400 Gb+ Connectivity</p>
                <p className="text-accent text-lg">
                  Network architecture supports environments suitable for AI training clusters.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Designed for Modern AI Architectures */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-secondary to-black/90 rounded-3xl border-2 border-primary/40 p-12 shadow-2xl"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Cpu className="w-16 h-16 text-primary" />
            <h2 className="text-5xl font-bold text-primary">Designed for Modern AI Architectures</h2>
          </div>
          <p className="text-xl text-accent mb-12 text-center max-w-4xl mx-auto">
            The AHI infrastructure platform is designed to support modern AI accelerator environments including:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {gpuPlatforms.map((platform, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/10 to-black/60 p-8 rounded-2xl border-2 border-primary/40 text-center hover:border-primary/70 transition-all shadow-lg"
              >
                <Cpu className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-white font-bold text-lg">{platform}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-r-2xl">
            <p className="text-white text-xl font-semibold text-center">
              Infrastructure design allows operators to deploy new hardware generations without major facility modifications.
            </p>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Deployment Flexibility */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">Deployment Flexibility</h2>
          <p className="text-xl text-accent mb-16 text-center max-w-4xl mx-auto">
            AI infrastructure requirements vary between organizations. The campus supports multiple deployment structures including:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {deploymentTypes.map((type, idx) => {
              const Icon = type.icon
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
                  <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-accent leading-relaxed">{type.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Infrastructure Built for AI */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 via-black/90 to-accent/10 rounded-3xl border-2 border-primary/50 p-12 shadow-2xl"
        >
          <h2 className="text-5xl font-bold text-white mb-8 text-center">Infrastructure Built for AI</h2>
          <p className="text-xl text-accent mb-12 text-center max-w-5xl mx-auto leading-relaxed">
            The AI Hub of Innovation combines energy infrastructure, modular compute environments, and high-performance connectivity to create a platform designed for the next generation of AI infrastructure.
          </p>

          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Organizations deploying compute infrastructure at AHI gain access to:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {platformBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-gradient-to-r from-primary/10 to-black/60 p-6 rounded-2xl border-2 border-primary/40 hover:border-primary/70 transition-all shadow-lg"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-white font-bold">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/40 rounded-2xl p-10">
            <p className="text-white font-bold text-center text-2xl">
              Together these elements create a purpose-built environment for large-scale AI compute deployment.
            </p>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Strategic Advantage */}
      <section className="max-w-6xl mx-auto px-4 py-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-secondary to-black/90 rounded-3xl border-2 border-primary/40 p-14 shadow-2xl"
        >
          <h2 className="text-5xl font-bold text-primary mb-8 text-center">Strategic Advantage</h2>
          <p className="text-2xl text-accent mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            AI infrastructure deployment is increasingly constrained by power availability, cooling capacity, and land availability.
          </p>
          <p className="text-xl text-white mb-12 text-center max-w-5xl mx-auto leading-relaxed">
            AHI addresses these constraints through an integrated campus designed to support long-term expansion of AI infrastructure.
          </p>
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/50 rounded-2xl p-10">
            <p className="text-white font-bold text-center text-3xl leading-relaxed">
              The result is a scalable environment capable of supporting modern AI compute deployments at industrial scale.
            </p>
          </div>
        </motion.div>
      </section>
    </PageLayout>
  )
}
