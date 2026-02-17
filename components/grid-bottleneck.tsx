"use client"

import { motion } from "framer-motion"
import { AlertTriangle, CheckCircle2, TrendingUp } from "lucide-react"

export default function GridBottleneck() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 rounded-full px-4 py-2 mb-6 border border-amber-500/20">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-bold text-amber-500">Critical Grid Constraint</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Alberta Grid Bottleneck Creates Urgent Demand
          </h2>
          <p className="text-xl text-accent max-w-3xl mx-auto">
            Self-powered campuses are now essential for data center development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-red-500/20"
          >
            <h3 className="text-2xl font-bold text-red-500 mb-6">The Challenge</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="text-accent">
                    <span className="font-bold">1,200 MW</span> of new grid connections available in 2027/2028
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="text-accent">
                    <span className="font-bold">16,000+ MW</span> of data center demand from 29 applications
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="text-accent">
                    <span className="font-bold">Massive shortfall</span> creating urgent need for self-powered solutions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-green-500/20"
          >
            <h3 className="text-2xl font-bold text-green-500 mb-6">AHI's Advantage</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-accent">
                  <span className="font-bold">Full regulatory approvals</span> with construction-ready status
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-accent">
                  <span className="font-bold">Scalable onsite generation</span> up to 1GW+ capacity
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-accent">
                  <span className="font-bold">Independent of grid constraints</span> with 250MW CHP + 100MW battery +
                  50MW solar
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20 text-center"
        >
          <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-primary mb-4">
            Positioned as Alberta's Preferred Power-Independent Solution
          </h3>
          <p className="text-accent max-w-2xl mx-auto">
            While competitors wait for limited grid capacity, AHI delivers immediate, scalable power through our
            self-sufficient energy infrastructure—making us the solution for power-constrained AI projects.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
