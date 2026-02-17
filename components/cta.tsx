"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
      </div>

      <motion.div
        className="relative max-w-4xl mx-auto text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Glowing border box */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 rounded-3xl blur-2xl opacity-40" />
          <div className="relative p-12 sm:p-16 rounded-3xl border border-primary/40 bg-gradient-to-b from-card/50 to-background/50 backdrop-blur-lg">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Power Secured. </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Future Delivered
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-accent mb-10 max-w-2xl mx-auto leading-relaxed">
              Join the Sovereign AI Movement. Reserve your compute infrastructure today and power Canada's next
              generation of artificial intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/compute">
                <motion.button
                  className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 255, 200, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Reserve Compute Space
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="px-8 py-4 rounded-full border border-primary/60 text-primary font-semibold hover:border-primary hover:bg-primary/10 transition-colors flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                  Contact Us
                </motion.button>
              </Link>
            </div>

            {/* Additional CTA note */}
            <p className="text-sm text-muted-foreground mt-8">
              Or reach out to discuss your enterprise compute requirements, connectivity needs, or partnership
              opportunities.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
