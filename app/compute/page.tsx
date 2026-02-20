"use client"

import type React from "react"
import { motion } from "framer-motion"
import PageLayout from "@/components/page-layout"
import { Check, ArrowRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import DenvrPartnership from "@/components/denvr-partnership"
import GridBottleneck from "@/components/grid-bottleneck"
import DatacenterBackground from "@/components/datacenter-background"

export default function ComputePage() {
  const [inquiryForm, setInquiryForm] = useState({ name: "", email: "", message: "" })

  const packages = [
    {
      name: "Starter Node",
      capacity: "1MW",
      price: "Starting at $150K/month",
      description: "Entry-level dedicated rackspace for AI startups and research labs",
      features: [
        "1MW dedicated power capacity",
        "250+ GPU slots (A100/H100 equivalent)",
        "Direct fiber connectivity (10Gbps+)",
        "Secure cooling & redundancy",
        "24/7 monitoring & support",
        "Pay-as-you-grow pricing",
      ],
      ideal: "Startups, Research Labs, ML Experiments",
      link: "/compute/starter-node",
    },
    {
      name: "Enterprise Cluster",
      capacity: "5-10MW",
      price: "Custom pricing",
      description: "Private compute zones for HPC and AI workloads at scale",
      features: [
        "5-10MW dedicated power capacity",
        "2,500+ GPU slots (full configurations)",
        "Redundant fiber with sub-1ms latency",
        "Private network isolation",
        "Advanced load balancing",
        "Dedicated account management",
        "SLA guarantees up to 99.99% uptime",
      ],
      ideal: "Mid-Market Enterprises, AI Training Teams",
      featured: true,
      link: "/compute/enterprise",
    },
    {
      name: "Sovereign Suite",
      capacity: "50MW+",
      price: "Custom deployment",
      description: "Custom modular halls for hyperscale or national AI projects",
      features: [
        "50MW+ scalable capacity",
        "10,000+ GPU slots (unlimited expansion)",
        "Dedicated fiber backbone",
        "White-glove project management",
        "Custom cooling & power design",
        "Hydrogen-ready infrastructure",
        "National security compliance ready",
      ],
      ideal: "Hyperscalers, Government, National Projects",
      link: "/compute/sovereign",
    },
  ]

  const handleInquiry = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Submitting inquiry form:", inquiryForm)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...inquiryForm,
          subject: "Compute Package Inquiry",
        }),
      })

      if (response.ok) {
        alert("Thank you! We'll be in touch shortly.")
        setInquiryForm({ name: "", email: "", message: "" })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Error submitting form. Please try again.")
    }
  }

  return (
    <PageLayout
      title="Flexible Compute. Infinite Scalability."
      subtitle="From startups to hyperscalers, find the perfect capacity for your AI workloads"
    >
      <DatacenterBackground />
      <GridBottleneck />

      {/* Package Cards */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 border transition-all ${
                pkg.featured
                  ? "bg-gradient-to-br from-primary/20 to-secondary border-primary/50 ring-2 ring-primary/30 scale-105"
                  : "bg-card border-primary/20 hover:border-primary/50"
              }`}
            >
              {pkg.featured && (
                <div className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold text-primary mb-2">{pkg.name}</h3>
              <p className="text-3xl font-bold text-accent mb-2">{pkg.capacity}</p>
              <p className="text-primary/80 font-semibold mb-4">{pkg.price}</p>
              <p className="text-accent mb-6">{pkg.description}</p>
              <p className="text-sm text-muted-foreground mb-6">Ideal for: {pkg.ideal}</p>

              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-accent">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href={pkg.link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                    pkg.featured
                      ? "bg-primary text-primary-foreground hover:bg-primary/80"
                      : "border border-primary text-primary hover:bg-primary/10"
                  }`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <DenvrPartnership />

      {/* Inquiry Form */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-secondary via-primary/10 to-secondary rounded-2xl p-12 border border-primary/20">
          <h2 className="text-3xl font-bold mb-8 text-primary">Request Custom Pricing</h2>
          <form onSubmit={handleInquiry} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-accent mb-2">Your Name</label>
                <input
                  type="text"
                  value={inquiryForm.name}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-primary/20 text-accent focus:outline-none focus:border-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-accent mb-2">Email Address</label>
                <input
                  type="email"
                  value={inquiryForm.email}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-primary/20 text-accent focus:outline-none focus:border-primary"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-accent mb-2">Your Inquiry</label>
              <textarea
                value={inquiryForm.message}
                onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-background border border-primary/20 text-accent focus:outline-none focus:border-primary resize-none"
                placeholder="Tell us about your compute needs, timeline, and requirements..."
                required
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/80 transition-colors"
            >
              Send Inquiry
            </motion.button>
          </form>
        </div>
      </section>

      {/* 2.5 MW Ready Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-primary">2.5 MW Ready: Secure, Scalable, and Sustainable</h2>
          <p className="text-xl text-accent">Immediately available capacity with enterprise-grade infrastructure</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "2.5 MW Capacity", desc: "Reliable, high-capacity power for immediate deployment" },
            { title: "Secure Environment", desc: "Industry-grade security for data, personnel, and assets" },
            { title: "Ready Infrastructure", desc: "Fully prepared land with essential facilities in place" },
            { title: "Stable Energy", desc: "On-site supply for uninterrupted operations" },
            { title: "Data Center Access", desc: "High-performance computing and storage facilities" },
            { title: "ESG Mandate", desc: "Built to meet sustainability and environmental standards" },
            { title: "Waterless Systems", desc: "Advanced, water-efficient technology for operations" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-card rounded-lg p-6 border border-primary/20 hover:border-primary/50 transition-all"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-accent">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
