"use client"

import { motion } from "framer-motion"
import { Server, Wheat, Factory, Truck, Car, Wind, GraduationCap } from "lucide-react"

export default function HeavyPowerUsers() {
  const industries = [
    {
      icon: Server,
      category: "High-Density Power Users",
      examples: ["AI & HPC Data Centres", "Research & Simulation Facilities", "Digital Labs, VFX & Rendering Studios"],
    },
    {
      icon: Wheat,
      category: "Agri, Food & Biotech",
      examples: ["Vertical Farms & Controlled Environment Agriculture", "Biopharma, Beverage & Agri-food Processors"],
    },
    {
      icon: Factory,
      category: "Industrial & Manufacturing",
      examples: ["Advanced Manufacturing Facilities", "Modular Housing & Prefab Construction Plants"],
    },
    {
      icon: Truck,
      category: "Logistics & Distribution",
      examples: ["Cold Storage & Temperature-Controlled Logistics"],
    },
    {
      icon: Car,
      category: "Mobility & Infrastructure",
      examples: ["EV Charging Hubs & Mobility Stations"],
    },
    {
      icon: Wind,
      category: "Next-Gen Energy",
      examples: ["Carbon Capture & Hydrogen Production"],
    },
    {
      icon: GraduationCap,
      category: "Education & Public Sector",
      examples: ["Universities, Colleges & Institutional Campuses"],
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Purpose-Built for Heavy Power Users</h2>
          <p className="text-xl text-accent max-w-3xl mx-auto">
            From 2MW to 300MW+: Flexible infrastructure for diverse high-energy industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all"
            >
              <industry.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-primary mb-4">{industry.category}</h3>
              <ul className="space-y-2">
                {industry.examples.map((example, eidx) => (
                  <li key={eidx} className="flex items-start gap-2 text-sm text-accent">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                    {example}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
