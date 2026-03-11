"use client"

import { motion } from "framer-motion"
import PageLayout from "@/components/page-layout"
import SectionDividerAnimated from "@/components/section-divider-animated"
import {
  Server, Cpu, Gauge, Shield, Zap, Network, Eye, TrendingUp,
  CheckCircle2, Smartphone, Monitor, Cloud, Lock, BarChart3,
  Activity, Settings, Database, ArrowRight
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HavenzHubPage() {
  const keyFeatures = [
    {
      icon: Smartphone,
      title: "Multi-Device Access",
      description: "Access campus operations from mobile devices, wall displays, or centralized dashboards across any environment."
    },
    {
      icon: Shield,
      title: "Blockchain-Secured",
      description: "Enterprise-grade security with blockchain verification ensuring data integrity and operational transparency."
    },
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "Live operational data streams providing instant visibility into campus-wide infrastructure performance."
    },
    {
      icon: Cloud,
      title: "Cloud-Native Platform",
      description: "Fully cloud-based management system enabling remote access and seamless scalability across deployments."
    }
  ]

  const integrationCapabilities = [
    {
      icon: Gauge,
      title: "Environmental Monitoring",
      description: "Track temperature, humidity, air quality, and environmental conditions across all campus facilities."
    },
    {
      icon: Zap,
      title: "Energy Metering",
      description: "Real-time energy consumption tracking, generation monitoring, and efficiency analytics for all campus systems."
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Integrated security and access management for facilities, data halls, and restricted infrastructure zones."
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description: "Complete visibility into connectivity, bandwidth utilization, and network performance metrics."
    },
    {
      icon: Server,
      title: "Compute Infrastructure",
      description: "Monitor GPU clusters, server utilization, cooling systems, and data centre operational metrics."
    },
    {
      icon: Database,
      title: "Unified Data Pipeline",
      description: "All campus data streams flow through a single integrated platform for comprehensive operational intelligence."
    }
  ]

  const operationalFeatures = [
    "Anomaly detection and automated alerting",
    "Predictive maintenance scheduling",
    "ESG and sustainability reporting",
    "Utility data export and analysis",
    "Custom dashboard creation",
    "Multi-tenant access control"
  ]

  const targetSectors = [
    { icon: Zap, name: "Power Generation Facilities" },
    { icon: Server, name: "AI Data Centres" },
    { icon: TrendingUp, name: "Commercial Campuses" },
    { icon: Network, name: "Industrial Infrastructure" }
  ]

  return (
    <PageLayout
      title="HAVENZHUB"
      subtitle="The Operating System for Buildings That Think"
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
          <div className="bg-gradient-to-br from-primary/10 via-black/90 to-accent/10 rounded-3xl border-2 border-primary/50 p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-6 text-center">
              AI-Powered, Blockchain-Secured IoT Building Management System
            </h2>
            <p className="text-xl text-accent leading-relaxed text-center max-w-4xl mx-auto mb-8">
              HavenzHub transforms traditional buildings into intelligent, self-optimizing environments through advanced IoT integration, real-time analytics, and autonomous operational intelligence.
            </p>
            <p className="text-lg text-accent leading-relaxed text-center max-w-5xl mx-auto">
              Designed for AI campus deployments, power generation facilities, and industrial infrastructure, HavenzHub provides the unified platform required for modern, intelligent building operations.
            </p>
          </div>

          {/* HavenzHub Banner Image */}
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/havenzhub-banner-1.jpg"
              alt="HavenzHub Dashboard Interface"
              width={1920}
              height={1080}
              className="w-full h-auto bg-transparent"
              priority
            />
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Fast & Optimized Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">Fast & Optimized for Every Environment</h2>
          <p className="text-xl text-accent mb-16 text-center max-w-4xl mx-auto">
            Access campus operations from any device, anywhere. HavenzHub is built for speed, security, and seamless multi-platform deployment.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-card to-black/80 rounded-2xl p-8 border-2 border-primary/30 hover:border-primary/60 transition-all shadow-xl text-center"
                >
                  <Icon className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-accent leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Device compatibility showcase with mobile image */}
          <div className="mt-16 bg-gradient-to-r from-secondary/30 to-black/80 rounded-2xl border-2 border-primary/40 p-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="text-center">
                  <Smartphone className="w-20 h-20 text-primary mx-auto mb-4" />
                  <p className="text-white font-bold text-lg mb-2">Mobile</p>
                  <p className="text-accent text-sm">iOS & Android apps</p>
                </div>
                <div className="text-center">
                  <Monitor className="w-20 h-20 text-primary mx-auto mb-4" />
                  <p className="text-white font-bold text-lg mb-2">Wall Displays</p>
                  <p className="text-accent text-sm">Knox-secured devices</p>
                </div>
                <div className="text-center">
                  <Settings className="w-20 h-20 text-primary mx-auto mb-4" />
                  <p className="text-white font-bold text-lg mb-2">Dashboards</p>
                  <p className="text-accent text-sm">Web-based control centers</p>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/havenz-mobile-s.jpg"
                  alt="HavenzHub Mobile Interface"
                  width={400}
                  height={800}
                  className="w-auto h-auto max-h-[600px] rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* System Integration */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">Modular Architecture, Unified Intelligence</h2>
          <p className="text-xl text-accent mb-16 text-center max-w-5xl mx-auto">
            HavenzHub integrates every building system into a single intelligent platform. From environmental controls to energy management, all campus operations flow through one unified data pipeline.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationCapabilities.map((capability, idx) => {
              const Icon = capability.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-secondary via-black/95 to-black/90 rounded-2xl p-8 border-2 border-primary/30 hover:border-primary/60 transition-all shadow-xl"
                >
                  <Icon className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                  <p className="text-accent leading-relaxed">{capability.description}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Architecture diagram placeholder */}
          <div className="mt-16 bg-gradient-to-br from-primary/10 to-black/80 rounded-3xl border-2 border-primary/50 p-12 text-center">
            <Network className="w-24 h-24 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Unified Data Pipeline</h3>
            <p className="text-xl text-accent max-w-3xl mx-auto">
              All campus systems connect through HavenzHub's modular architecture, creating a single source of truth for operational intelligence and autonomous building management.
            </p>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Real-Time Operations */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-secondary via-black/95 to-black/90 rounded-3xl border-2 border-primary/50 p-12 shadow-2xl"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Eye className="w-16 h-16 text-primary" />
            <h2 className="text-5xl font-bold text-primary">Real-Time Operational Intelligence</h2>
          </div>
          <p className="text-xl text-accent mb-12 text-center max-w-4xl mx-auto">
            HavenzHub continuously monitors campus operations, detects anomalies, and provides actionable insights for facility management, energy optimization, and sustainability reporting.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-card to-black/80 rounded-2xl border-2 border-primary/30 p-10 shadow-xl">
              <Activity className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-white mb-8">Platform Capabilities</h3>
              <div className="space-y-4">
                {operationalFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/10 to-black/60 rounded-xl border border-primary/20">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-black/80 rounded-2xl border-2 border-primary/40 p-10 shadow-xl flex flex-col justify-center">
              <BarChart3 className="w-20 h-20 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-6 text-center">ESG & Sustainability Reporting</h3>
              <p className="text-accent text-lg leading-relaxed text-center mb-6">
                Export comprehensive utility data, carbon metrics, and operational efficiency reports for ESG compliance and sustainability initiatives.
              </p>
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/50 rounded-xl p-6 text-center">
                <p className="text-white font-bold text-lg">
                  Automated data pipelines for regulatory compliance and investor reporting
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Deployment & Sectors */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">Deployed at AHI Red Deer</h2>
          <p className="text-xl text-accent mb-16 text-center max-w-5xl mx-auto">
            HavenzHub is actively deployed at the AI Hub of Innovation campus in Red Deer, Alberta, managing the operational intelligence for next-generation AI infrastructure.
          </p>

          <div className="bg-gradient-to-br from-secondary to-black/90 rounded-3xl border-2 border-primary/40 p-12 shadow-2xl mb-12">
            <h3 className="text-3xl font-bold text-white mb-10 text-center">Target Deployment Sectors</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {targetSectors.map((sector, idx) => {
                const Icon = sector.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-primary/10 to-black/60 p-8 rounded-2xl border-2 border-primary/40 text-center hover:border-primary/70 transition-all shadow-lg"
                  >
                    <Icon className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-white font-bold text-lg">{sector.name}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/40 rounded-2xl p-10 text-center">
            <p className="text-accent text-sm font-semibold mb-3 uppercase tracking-wide">Platform Status</p>
            <p className="text-4xl font-bold text-primary mb-4">Active Deployment</p>
            <p className="text-white text-xl">
              Live at AHI Red Deer campus, with continuous feature expansion and optimization
            </p>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Platform Benefits */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 via-black/90 to-accent/10 rounded-3xl border-2 border-primary/50 p-12 shadow-2xl"
        >
          <h2 className="text-5xl font-bold text-white mb-8 text-center">The Future of Intelligent Building Operations</h2>
          <p className="text-2xl text-accent mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            HavenzHub represents the next generation of building management systems—designed for AI infrastructure, powered by autonomous intelligence, and secured by blockchain verification.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {[
              { icon: Cpu, title: "AI-Powered", description: "Autonomous optimization and predictive analytics" },
              { icon: Shield, title: "Blockchain-Secured", description: "Immutable operational data verification" },
              { icon: Cloud, title: "Cloud-Native", description: "Infinite scalability and global accessibility" }
            ].map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-card to-black/80 rounded-2xl p-8 border-2 border-primary/30 text-center"
                >
                  <Icon className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-accent">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/40 rounded-2xl p-8">
            <p className="text-white font-bold text-center text-2xl">
              Transform your infrastructure into an intelligent, self-optimizing environment with HavenzHub
            </p>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 py-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-secondary via-black/95 to-black/90 border-2 border-primary/50 rounded-3xl p-14 shadow-2xl text-center"
        >
          <Server className="w-20 h-20 text-primary mx-auto mb-6" />
          <h2 className="text-5xl font-bold text-primary mb-8">Learn More About HavenzHub</h2>
          <p className="text-2xl text-accent mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover how HavenzHub can transform your facility operations with intelligent automation and real-time operational intelligence.
          </p>
          <p className="text-xl text-white mb-12 max-w-4xl mx-auto">
            Contact the AHI team to explore HavenzHub deployment options for your infrastructure.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 px-12 py-5 bg-gradient-to-r from-primary to-accent text-white font-bold text-xl rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </PageLayout>
  )
}
