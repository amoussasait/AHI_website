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
      stat: "1.03 PUE",
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Powered by Denvr Dataworks</h2>
          <p className="text-xl text-accent max-w-3xl mx-auto mb-4">
            AI-native modular infrastructure engineered for hyperscale, enterprise, and sovereign-scale compute.
          </p>
          <p className="text-lg text-accent/80 max-w-4xl mx-auto">
            AHI partners with Denvr Dataworks — a platform backed by 14+ GW of hyperscale deployments and 200+ years of combined data center engineering experience — to deliver purpose-built AI infrastructure optimized for modern GPU workloads.
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
      </div>
    </section>
  )
}
