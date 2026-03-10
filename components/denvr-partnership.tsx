"use client"

import { motion } from "framer-motion"
import { Clock, Droplets, Zap, MapPin } from "lucide-react"
import Image from "next/image"

export default function DenvrPartnership() {
  const advantages = [
    {
      icon: Clock,
      stat: "6 Months",
      title: "400% Faster Deployment",
      description:
        "Material AI compute capacity online in as little as 6 months — versus 24+ months for traditional data center builds.",
    },
    {
      icon: Droplets,
      stat: "Zero / Ultra-Low Water",
      title: "AI-Native Liquid Cooling",
      description:
        "Full Liquid Immersion or Direct-to-Chip cooling engineered for high-density GPU environments with preserved manufacturer warranties.",
    },
    {
      icon: Zap,
      stat: "1.04 PUE",
      title: "High-Density Efficiency",
      description:
        "Advanced liquid cooling and integrated power optimization deliver industry-leading efficiency for AI workloads.",
    },
    {
      icon: MapPin,
      stat: "90% Smaller Footprint",
      title: "Modular AI Design",
      description:
        "Modular architecture requires significantly less land per MW than traditional air-cooled facilities — enabling dense, scalable deployments.",
    },
  ]

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <Image
              src="/images/30705b-425e6232f0ed4fc69a41576ef6564764-mv2.png"
              alt="Denvr Dataworks"
              width={200}
              height={64}
              className="h-16 w-auto opacity-90"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">AI Infrastructure Platform</h2>
          <p className="text-xl text-accent max-w-5xl mx-auto mb-4">
            Delivered through a network of leading infrastructure and cloud partners including Denvr DataWorks and other hyperscale, enterprise, and sovereign compute providers.
          </p>
          <p className="text-lg text-accent/80 max-w-6xl mx-auto mb-6">
            AHI partners with leading infrastructure, cloud, and AI compute operators to deploy high-performance data centre environments on the campus. Strategic partners such as Denvr DataWorks bring modular AI infrastructure and operational expertise, enabling hyperscale, enterprise, and sovereign compute deployments tailored to modern GPU workloads.
          </p>
          <p className="text-lg text-primary font-semibold max-w-6xl mx-auto">
            AHI provides the land, power, connectivity, and infrastructure platform enabling multiple AI infrastructure operators to deploy on the campus.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all flex flex-col"
            >
              <advantage.icon className="w-10 h-10 text-primary mb-4" />
              <div className="text-2xl font-bold text-primary mb-1">{advantage.stat}</div>
              <h3 className="text-base font-semibold text-white mb-3">{advantage.title}</h3>
              <div className="border-t border-primary/20 pt-3 mt-auto">
                <p className="text-sm text-accent leading-relaxed">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl font-bold text-white mb-3">Strategic Infrastructure Partners</h3>
          <p className="text-lg text-accent">
            Denvr DataWorks | Cloud Providers | HPC Operators | Enterprise AI Platforms
          </p>
        </motion.div>
      </div>
    </section>
  )
}
