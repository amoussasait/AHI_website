"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"
import { HardDrive, Database, Archive, Layers } from "lucide-react"

export default function CloudStoragePage() {
  const storageTypes = [
    {
      icon: HardDrive,
      title: "High-Performance Block Storage",
      description: "Ultra-low latency NVMe storage for AI training workloads and real-time inference applications.",
      specs: [
        "Sub-millisecond latency",
        "Up to 1M IOPS per volume",
        "Auto-scaling capacity",
        "Snapshot & cloning support",
      ],
    },
    {
      icon: Database,
      title: "Object Storage",
      description: "Massively scalable storage for AI datasets, model archives, and unstructured data with S3-compatible API.",
      specs: [
        "Unlimited scalability",
        "99.999999999% durability",
        "Lifecycle management",
        "Multi-region replication",
      ],
    },
    {
      icon: Archive,
      title: "Archive Storage",
      description: "Cost-optimized long-term storage for regulatory compliance, backup retention, and data lake archives.",
      specs: [
        "Ultra-low cost per TB",
        "Automated tiering",
        "Compliance retention policies",
        "Rapid retrieval options",
      ],
    },
    {
      icon: Layers,
      title: "Distributed File Systems",
      description: "Parallel file systems optimized for HPC and AI workloads requiring shared high-throughput access.",
      specs: [
        "POSIX-compliant",
        "100+ GB/s throughput",
        "Lustre & GPFS support",
        "Multi-node parallel access",
      ],
    },
  ]

  const features = [
    {
      title: "Sovereign Data Residency",
      description: "All data stored within Canadian borders with full compliance to federal and provincial regulations.",
    },
    {
      title: "Enterprise-Grade Redundancy",
      description: "Multi-site replication with automated failover ensuring 99.99% availability SLAs.",
    },
    {
      title: "Encryption at Rest & In-Transit",
      description: "AES-256 encryption with customer-managed keys and TLS 1.3 for all data transfers.",
    },
    {
      title: "Performance Monitoring",
      description: "Real-time IOPS, throughput, and latency monitoring with customizable alerting.",
    },
  ]

  return (
    <PageLayout
      title="Storage Solutions Built for Data Sovereignty"
      subtitle="High-performance, scalable storage with Canadian data residency and enterprise-grade reliability"
    >
      {/* Storage Types */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Storage Options</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {storageTypes.map((type, idx) => {
            const Icon = type.icon
            return (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-primary/20 bg-card/50 hover:border-primary/40 transition-all"
              >
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                <p className="text-accent mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-accent">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Key Features */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Enterprise Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-primary/20 bg-secondary/30 text-center"
            >
              <h4 className="text-lg font-semibold text-primary mb-3">{feature.title}</h4>
              <p className="text-sm text-accent">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 via-secondary/20 to-primary/10 rounded-2xl p-12 border border-primary/20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Built for AI Workloads</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Model Training",
                description: "High-throughput storage for petabyte-scale datasets with parallel access for distributed training.",
              },
              {
                title: "Inference Serving",
                description: "Low-latency model storage with instant retrieval for real-time AI inference applications.",
              },
              {
                title: "Data Lakes",
                description: "Scalable object storage for unstructured data collection, ETL pipelines, and analytics workflows.",
              },
            ].map((useCase, idx) => (
              <div key={idx} className="text-center">
                <h4 className="text-lg font-bold text-primary mb-3">{useCase.title}</h4>
                <p className="text-sm text-accent">{useCase.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </PageLayout>
  )
}
