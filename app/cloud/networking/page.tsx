"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"
import { Network, Wifi, Globe, Zap } from "lucide-react"

export default function CloudNetworkingPage() {
  const capabilities = [
    {
      icon: Network,
      title: "Dual-Path Fiber Architecture",
      description: "Redundant fiber paths with automatic failover delivering up to 99.99% network availability.",
      features: [
        "Multiple upstream providers",
        "Protected dual-path routing",
        "Sub-15ms regional latency",
        "Carrier-neutral connectivity",
      ],
    },
    {
      icon: Zap,
      title: "400G+ Scalable Backbone",
      description: "DWDM infrastructure supporting 400G and 800G+ connections with seamless capacity expansion.",
      features: [
        "Dense Wavelength Division Multiplexing",
        "Non-blocking architecture",
        "Auto-scaling bandwidth",
        "Software-defined networking",
      ],
    },
    {
      icon: Wifi,
      title: "Private Interconnect",
      description: "Dedicated low-latency connections to major cloud providers and peering exchanges.",
      features: [
        "Direct AWS, Azure, GCP connections",
        "Private peering arrangements",
        "Sub-1ms cross-connect latency",
        "Dedicated VLAN provisioning",
      ],
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "International connectivity through Tier 1 carriers with optimized routing to North America, Europe, and Asia.",
      features: [
        "Multi-carrier BGP routing",
        "Global CDN integration",
        "DDoS mitigation at edge",
        "IPv4 & IPv6 dual-stack",
      ],
    },
  ]

  const performance = [
    {
      metric: "Network Uptime",
      value: "99.99%",
      description: "SLA-backed availability with automatic failover and redundant paths",
    },
    {
      metric: "Regional Latency",
      value: "< 15ms",
      description: "Low-latency connections to major Canadian metros and US border cities",
    },
    {
      metric: "Backbone Capacity",
      value: "400G+",
      description: "Scalable DWDM infrastructure supporting 800G+ future expansion",
    },
    {
      metric: "DDoS Protection",
      value: "100+ Gbps",
      description: "Always-on mitigation with automatic attack detection and response",
    },
  ]

  return (
    <PageLayout
      title="Enterprise Networking for AI at Scale"
      subtitle="Low-latency, high-bandwidth connectivity with carrier-neutral access and redundant architecture"
    >
      {/* Network Capabilities */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Network Infrastructure</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((capability, idx) => {
            const Icon = capability.icon
            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-primary/20 bg-card/50 hover:border-primary/40 transition-all"
              >
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-accent mb-6">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-accent">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Network Performance</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {performance.map((item, idx) => (
            <motion.div
              key={item.metric}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl border border-primary/20 bg-secondary/30 text-center"
            >
              <p className="text-sm text-primary/80 mb-2">{item.metric}</p>
              <h3 className="text-3xl font-bold text-primary mb-4">{item.value}</h3>
              <p className="text-sm text-accent">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Network Services */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 via-secondary/20 to-primary/10 rounded-2xl p-12 border border-primary/20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Additional Network Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Load Balancing",
                description: "Global and local load balancing with health checks, SSL offloading, and auto-scaling.",
              },
              {
                title: "VPN & SD-WAN",
                description: "Secure site-to-site VPN and SD-WAN integration for hybrid cloud architectures.",
              },
              {
                title: "Network Monitoring",
                description: "Real-time visibility into bandwidth utilization, latency, packet loss, and anomaly detection.",
              },
              {
                title: "Custom Routing",
                description: "BGP peering, route filtering, and custom traffic engineering for optimized data flows.",
              },
            ].map((service, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 border border-primary flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{idx + 1}</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{service.title}</h4>
                  <p className="text-sm text-accent">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </PageLayout>
  )
}
