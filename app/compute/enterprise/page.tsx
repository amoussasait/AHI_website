"use client"

import { motion } from "framer-motion"
import PageLayout from "@/components/page-layout"
import { Check, Zap, Server, Network, Shield, TrendingUp, Lock } from "lucide-react"
import Link from "next/link"
import DatacenterClusterView from "@/components/datacenter-cluster-view"
import Generator3D from "@/components/generator-3d"

export default function EnterprisePage() {
  return (
    <PageLayout title="Enterprise Cluster" subtitle="Private compute zones for HPC and AI workloads at scale">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-6">
            MOST POPULAR
          </div>
          <h2 className="text-4xl font-bold text-primary mb-4">5-10MW Dedicated Capacity</h2>
          <p className="text-2xl text-accent mb-6">Custom Pricing Available</p>
          <p className="text-lg text-accent max-w-3xl mx-auto mb-8">
            Perfect for mid-market enterprises and AI training teams requiring dedicated infrastructure with enterprise
            SLAs and private network isolation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex items-center gap-3 bg-card px-6 py-4 rounded-lg border border-primary/20">
            <Zap className="w-8 h-8 text-primary" />
            <div>
              <div className="font-bold text-primary">5-10MW</div>
              <div className="text-sm text-accent">Dedicated Power</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-card px-6 py-4 rounded-lg border border-primary/20">
            <Server className="w-8 h-8 text-primary" />
            <div>
              <div className="font-bold text-primary">2,500+</div>
              <div className="text-sm text-accent">GPU Slots</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-card px-6 py-4 rounded-lg border border-primary/20">
            <Shield className="w-8 h-8 text-primary" />
            <div>
              <div className="font-bold text-primary">99.99%</div>
              <div className="text-sm text-accent">Uptime SLA</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/80 transition-colors"
            >
              Request Custom Quote
            </motion.button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Enterprise-Grade Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Network,
              title: "Private Network Isolation",
              desc: "Dedicated network segments with sub-1ms latency and redundant fiber connections for mission-critical workloads.",
            },
            {
              icon: TrendingUp,
              title: "Advanced Load Balancing",
              desc: "Intelligent workload distribution across your dedicated cluster ensuring optimal performance and efficiency.",
            },
            {
              icon: Lock,
              title: "Enhanced Security",
              desc: "Private zones with physical and logical isolation, compliance-ready for regulated industries.",
            },
            {
              icon: Shield,
              title: "Dedicated Account Management",
              desc: "Your personal technical account manager ensuring smooth operations and rapid response times.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-card rounded-xl p-8 border border-primary/20"
            >
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-accent">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-primary/10 to-secondary rounded-2xl p-12 border border-primary/20">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Complete Infrastructure Package</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {[
              "5-10MW dedicated power capacity",
              "2,500+ GPU slots (full configurations)",
              "Redundant fiber with sub-1ms latency",
              "Private network isolation",
              "Advanced load balancing",
              "Dedicated account management",
              "99.99% uptime SLA guarantee",
              "24/7 white-glove support",
              "Custom cooling & power design",
              "Compliance & audit support",
              "Flexible capacity expansion",
              "Pay-as-you-scale pricing",
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-accent">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Generator */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-primary mb-4 text-center">Powered by On-Site Generation</h2>
        <p className="text-lg text-accent mb-12 text-center max-w-3xl mx-auto">
          Our CHP facility provides reliable, efficient power directly to your Enterprise Cluster. Explore the 3D model
          of our generator building.
        </p>
        <Generator3D />
      </section>

      {/* Cluster View */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-primary mb-4 text-center">Your Dedicated Clusters</h2>
        <p className="text-lg text-accent mb-12 text-center max-w-3xl mx-auto">
          Enterprise Clusters span 1-2 modular units on our campus, providing you with dedicated infrastructure and room
          to scale.
        </p>
        <DatacenterClusterView />
      </section>

      {/* Ideal Use Cases */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Ideal For</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "AI Training Teams",
              desc: "Large language models, computer vision, and deep learning workloads requiring sustained high-performance compute.",
            },
            {
              title: "Mid-Market Enterprises",
              desc: "Organizations scaling AI operations who need dedicated infrastructure without hyperscale investment.",
            },
            {
              title: "Research Institutions",
              desc: "Universities and labs conducting cutting-edge AI research requiring reliable, high-capacity infrastructure.",
            },
          ].map((useCase, idx) => (
            <div key={idx} className="bg-card rounded-xl p-6 border border-primary/20">
              <h3 className="text-lg font-bold text-primary mb-3">{useCase.title}</h3>
              <p className="text-accent">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-secondary via-primary/10 to-secondary rounded-2xl p-12 border border-primary/20 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Ready to Scale?</h2>
          <p className="text-lg text-accent mb-8">
            Contact our team to discuss your specific requirements and get a custom quote for your Enterprise Cluster.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/80 transition-colors"
              >
                Get Custom Quote
              </motion.button>
            </Link>
            <Link href="/compute/sovereign">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors"
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
