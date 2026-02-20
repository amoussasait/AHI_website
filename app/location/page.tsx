"use client"

import { motion } from "framer-motion"
import PageLayout from "@/components/page-layout"
import { MapPin, Navigation, Wifi, Zap } from "lucide-react"
import DatacenterBackground from "@/components/datacenter-background"

export default function LocationPage() {
  return (
    <PageLayout
      title="Strategically Located at the Heart of Alberta's Innovation Corridor"
      subtitle="Red Deer: The Gateway to North American AI Infrastructure"
    >
      <DatacenterBackground />
      {/* Strategic Position */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Red Deer: North America's Optimal AI Gateway</h2>
            <p className="text-lg text-accent mb-6">
              Positioned in the heart of Alberta's innovation corridor, Red Deer offers unmatched proximity to major
              population centers, fiber networks, and energy infrastructure.
            </p>

            <div className="space-y-4">
              {[
                { label: "From Calgary", value: "90 minutes" },
                { label: "From Edmonton", value: "110 minutes" },
                { label: "Trans-Canada Access", value: "Direct QEII/2A Hwy" },
                { label: "International Airport", value: "YYJ: 90 min domestic hub" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex justify-between items-center py-3 border-b border-primary/20"
                >
                  <span className="text-accent">{item.label}</span>
                  <span className="text-primary font-semibold">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: MapPin, label: "Geographic Hub", desc: "Central Alberta location" },
              { icon: Navigation, label: "Highway Network", desc: "QEII & Route 2A access" },
              { icon: Wifi, label: "Fiber Backbone", desc: "Multiple carrier routes" },
              { icon: Zap, label: "Power Corridor", desc: "Direct utility connections" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card rounded-lg p-6 border border-primary/20 text-center"
              >
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-accent mb-1">{item.label}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Connectivity */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">World-Class Connectivity</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Multi-Carrier Fiber",
              items: [
                "TELUS national backbone",
                "Alternative carrier routes",
                "10Gbps+ redundant paths",
                "Sub-1ms regional latency",
              ],
            },
            {
              title: "Network Infrastructure",
              items: [
                "Direct fiber to major hubs",
                "Diverse routing options",
                "99.99% availability SLA",
                "Future 100Gbps ready",
              ],
            },
            {
              title: "Strategic Access",
              items: [
                "Proximity to US border",
                "Canadian data sovereignty",
                "Regulatory compliance",
                "Expansion-ready capacity",
              ],
            },
          ].map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-card rounded-lg p-8 border border-primary/20"
            >
              <h3 className="text-xl font-bold text-primary mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, iidx) => (
                  <li key={iidx} className="flex items-center gap-3 text-accent">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Accessibility */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-secondary via-primary/10 to-secondary rounded-2xl p-12 border border-primary/20"
        >
          <h2 className="text-3xl font-bold mb-8 text-primary">Logistics & Accessibility</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-accent mb-4">Ground Transportation</h3>
              <ul className="space-y-3 text-accent">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Direct highway access via QE II and Route 2A for equipment delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Logistics partners for international container import/export</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Ample staging areas for equipment assembly and testing</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-accent mb-4">Air & Personnel</h3>
              <ul className="space-y-3 text-accent">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Regional airport (90 min) with major carrier connections</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Accommodation options for on-site teams and visiting engineers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>Local talent pool and contractor relationships in place</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </PageLayout>
  )
}
