"use client"

import { motion } from "framer-motion"
import PageLayout from "@/components/page-layout"
import { Check, Zap, Server, Network, Shield } from "lucide-react"
import Link from "next/link"
import DatacenterClusterView from "@/components/datacenter-cluster-view"

export default function StarterNodePage() {
  return (
    <PageLayout
      title="Launch Your AI Journey Here"
      subtitle="Dedicated 1MW infrastructure designed for startups and research teams ready to scale"
    >
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Perfect for: Startups, Research Labs, ML Experiments
            </div>

            <h2 className="text-4xl font-bold text-primary mb-4">1MW Dedicated Capacity</h2>
            <p className="text-2xl text-accent mb-6">Starting at $150K/month</p>

            <p className="text-lg text-accent mb-8">
              Get started with dedicated AI compute infrastructure without massive upfront investment. Scale seamlessly
              as your models and business grow.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-primary/20">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-accent font-semibold">1MW Power</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-primary/20">
                <Server className="w-5 h-5 text-primary" />
                <span className="text-accent font-semibold">250+ GPU Slots</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-primary/20">
                <Network className="w-5 h-5 text-primary" />
                <span className="text-accent font-semibold">10Gbps+ Fiber</span>
              </div>
            </div>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/80 transition-colors"
              >
                Reserve Your Node
              </motion.button>
            </Link>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl font-bold text-primary mb-6">What's Included</h3>
            <div className="space-y-4">
              {[
                "1MW dedicated power capacity",
                "250+ GPU slots (A100/H100 equivalent)",
                "Direct fiber connectivity (10Gbps+)",
                "Liquid cooling & power redundancy",
                "24/7 monitoring & technical support",
                "Pay-as-you-grow pricing model",
                "Low-latency network access",
                "Secure isolated environment",
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-accent">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Technical Specifications</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Zap, label: "Power", value: "1MW", desc: "Dedicated capacity" },
            { icon: Server, label: "Compute", value: "250+", desc: "GPU slots" },
            { icon: Network, label: "Network", value: "10Gbps+", desc: "Direct fiber" },
            { icon: Shield, label: "Uptime", value: "99.9%", desc: "SLA guarantee" },
          ].map((spec, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card rounded-xl p-6 border border-primary/20 text-center"
            >
              <spec.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <div className="text-sm text-accent mb-2">{spec.label}</div>
              <div className="text-3xl font-bold text-primary mb-1">{spec.value}</div>
              <div className="text-xs text-accent">{spec.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cluster View */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-primary mb-4 text-center">Your Place in the Campus</h2>
        <p className="text-lg text-accent mb-12 text-center max-w-3xl mx-auto">
          Starter Nodes occupy individual racks within our modular clusters, giving you dedicated capacity while
          benefiting from shared infrastructure.
        </p>
        <DatacenterClusterView />
      </section>

      {/* Growth Path */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-secondary via-primary/10 to-secondary rounded-2xl p-12 border border-primary/20 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Built to Scale With You</h2>
          <p className="text-lg text-accent mb-8">
            Start small, grow big. Easily upgrade to Enterprise Cluster (5-10MW) or Sovereign Suite (50MW+) as your AI
            workloads expand. No migration hassles, seamless expansion.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/compute/enterprise">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                View Enterprise Cluster
              </motion.button>
            </Link>
            <Link href="/compute/sovereign">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                View Sovereign Suite
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
