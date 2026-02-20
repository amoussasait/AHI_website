"use client"

import { motion } from "framer-motion"
import PageLayout from "@/components/page-layout"
import { Check, Zap, Server, Network, Shield, Globe, Lock, Building } from "lucide-react"
import Link from "next/link"
import DatacenterClusterView from "@/components/datacenter-cluster-view"
import Generator3D from "@/components/generator-3d"
import DatacenterBackground from "@/components/datacenter-background"

export default function SovereignPage() {
  return (
    <PageLayout title="Sovereign Suite" subtitle="Custom modular halls for hyperscale and national AI projects">
      <DatacenterBackground />
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent text-background px-4 py-2 rounded-full text-sm font-bold mb-6">
            HYPERSCALE READY
          </div>
          <h2 className="text-5xl font-bold text-primary mb-4">50MW+ Scalable Capacity</h2>
          <p className="text-2xl text-accent mb-6">Custom Deployment & Pricing</p>
          <p className="text-xl text-accent max-w-4xl mx-auto mb-8">
            Purpose-built for government, defense, and hyperscale enterprises requiring complete sovereignty, unlimited
            expansion, and national security compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Zap, label: "50MW+", sublabel: "Scalable to 1GW" },
            { icon: Server, label: "10,000+", sublabel: "GPU Slots" },
            { icon: Globe, label: "Unlimited", sublabel: "Expansion" },
            { icon: Shield, label: "100%", sublabel: "Sovereign" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-card rounded-xl p-6 border border-primary/20 text-center">
              <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">{stat.label}</div>
              <div className="text-sm text-accent">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-10 py-5 rounded-lg font-bold text-xl hover:bg-primary/80 transition-colors"
            >
              Request Sovereign Deployment
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Key Features */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Sovereign-Grade Infrastructure</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Lock,
              title: "Complete Data Sovereignty",
              desc: "Full control over your data with physical and logical isolation. Perfect for national security, defense, and government workloads.",
            },
            {
              icon: Building,
              title: "Custom Modular Halls",
              desc: "Purpose-designed facilities built to your exact specifications with unlimited expansion capability.",
            },
            {
              icon: Network,
              title: "Dedicated Fiber Backbone",
              desc: "Private fiber infrastructure connecting your facilities with redundant, high-bandwidth connectivity.",
            },
            {
              icon: Zap,
              title: "Hydrogen-Ready Power",
              desc: "Future-proof infrastructure designed for clean hydrogen power integration and net-zero operations.",
            },
            {
              icon: Shield,
              title: "White-Glove Management",
              desc: "Dedicated project team managing every aspect of deployment, operations, and ongoing support.",
            },
            {
              icon: Globe,
              title: "National Security Ready",
              desc: "Compliance-ready for government, defense, and critical infrastructure requirements.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card rounded-xl p-8 border border-primary/20"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-accent">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Complete Package */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-primary/10 to-secondary rounded-2xl p-12 border border-primary/20">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Comprehensive Sovereign Package</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-5">
            {[
              "50MW+ scalable power capacity",
              "10,000+ GPU slots with unlimited expansion",
              "Dedicated fiber backbone infrastructure",
              "Custom modular hall design",
              "White-glove project management",
              "24/7/365 sovereign operations center",
              "Custom cooling & power engineering",
              "Hydrogen-ready infrastructure",
              "National security compliance support",
              "Dedicated technical leadership",
              "Flexible deployment timeline",
              "Complete data sovereignty guarantee",
              "Private network isolation",
              "On-site engineering team",
              "Government & defense ready",
              "Unlimited scaling roadmap",
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-accent font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Generator */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-primary mb-4 text-center">Dedicated Power Generation</h2>
        <p className="text-lg text-accent mb-12 text-center max-w-3xl mx-auto">
          Sovereign Suites include dedicated power generation facilities ensuring complete energy independence and
          reliability.
        </p>
        <Generator3D />
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {[
            { label: "Generation Capacity", value: "250MW" },
            { label: "Battery Storage", value: "100MW" },
            { label: "Solar Power", value: "50MW" },
            { label: "Hydrogen Ready", value: "Yes" },
          ].map((spec, idx) => (
            <div key={idx} className="bg-card rounded-lg p-6 border border-primary/20 text-center">
              <div className="text-2xl font-bold text-primary mb-1">{spec.value}</div>
              <div className="text-sm text-accent">{spec.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Cluster Campus View */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-primary mb-4 text-center">Your Sovereign Campus</h2>
        <p className="text-lg text-accent mb-12 text-center max-w-3xl mx-auto">
          Sovereign Suites can span multiple clusters or the entire 460MW campus, providing unmatched scalability for
          national AI initiatives.
        </p>
        <DatacenterClusterView />
        <div className="mt-8 bg-card rounded-xl p-8 border border-primary/20">
          <h3 className="text-xl font-bold text-primary mb-4">Scalability Path</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Phase 1</div>
              <div className="text-sm text-accent mb-1">50-100MW</div>
              <div className="text-xs text-accent">Initial deployment</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Phase 2</div>
              <div className="text-sm text-accent mb-1">100-460MW</div>
              <div className="text-xs text-accent">Campus expansion</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Phase 3</div>
              <div className="text-sm text-accent mb-1">Up to 1GW</div>
              <div className="text-xs text-accent">Multi-site network</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Built For</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Government & Defense",
              desc: "National AI initiatives, defense applications, and sovereign compute requirements with full security compliance.",
            },
            {
              title: "Hyperscale Enterprises",
              desc: "Large-scale AI training, foundation models, and compute-intensive workloads requiring massive capacity.",
            },
            {
              title: "National Projects",
              desc: "Country-wide AI infrastructure, research consortiums, and strategic technology initiatives.",
            },
          ].map((useCase, idx) => (
            <div key={idx} className="bg-card rounded-xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-4">{useCase.title}</h3>
              <p className="text-accent text-lg">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-secondary via-primary/10 to-secondary rounded-2xl p-16 border border-primary/20 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">Shape Canada's Sovereign AI Future</h2>
          <p className="text-xl text-accent mb-10 max-w-3xl mx-auto">
            Partner with us to deploy sovereign-grade AI infrastructure that supports national priorities, economic
            growth, and technological independence.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-primary text-primary-foreground px-12 py-5 rounded-lg font-bold text-xl hover:bg-primary/80 transition-colors"
            >
              Discuss Sovereign Deployment
            </motion.button>
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}
