"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap, ArrowLeftRight, Maximize2, Leaf } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 pt-20 overflow-hidden">

      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight px-2"
          variants={itemVariants}
        >
          <span className="text-white">{"Canada's Sovereign AI & Energy Campus"} </span>
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {"— Power Available 2026"}
          </span>
        </motion.h1>

        <motion.div className="mb-12 max-w-3xl mx-auto px-4" variants={itemVariants}>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-2">
            Prime, dispatchable, behind-the-meter power under construction in Alberta.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8">
            Initial capacity delivering in 2026.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl mx-auto">
            {[
              { icon: Zap, label: "250MW+ On-Site Prime Power" },
              { icon: ArrowLeftRight, label: "Grid Import & 150MW Export Capability" },
              { icon: Maximize2, label: "500+ Expandable Acres" },
              { icon: Leaf, label: "Indigenous-Aligned" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center gap-3 px-4 sm:px-6 lg:px-8 py-5 rounded-2xl border border-primary/30 bg-primary/5 backdrop-blur-sm hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 text-center"
              >
                <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm sm:text-base text-accent/90 font-semibold leading-snug">{label}</span>
              </div>
            ))}
          </div>
          <p className="text-base sm:text-lg text-muted-foreground mt-6 italic">
            {"Canada's Sovereign, AI-Ready Infrastructure Platform — Built for Hyperscale."}
          </p>
        </motion.div>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 px-4" variants={itemVariants}>
          <Link href="/contact" className="w-full sm:w-auto">
            <motion.button
              className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 200, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Tour
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
          <Link href="/compute" className="w-full sm:w-auto">
            <motion.button
              className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full border border-primary/50 text-primary font-semibold hover:border-primary hover:bg-primary/5 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Pricing
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 items-center justify-items-center max-w-5xl mx-auto"
          variants={itemVariants}
        >
          {[
            {
              logo: "/images/rolls-royce-mtu-white.png",
              name: "Rolls-Royce / MTU",
            },
            {
              logo: "/images/telus-symbol.png",
              name: "TELUS",
            },
            {
              logo: "/images/chandos-construction-white.png",
              name: "Chandos Construction",
            },
            {
              logo: "/images/30705b-425e6232f0ed4fc69a41576ef6564764-mv2.png",
              name: "Denvr Data Works",
            },
          ].map((partner) => (
            <div
              key={partner.name}
              className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 border border-primary/30 rounded-lg hover:border-primary/60 transition-all h-20 sm:h-24 md:h-28 w-full flex items-center justify-center"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="max-h-12 sm:max-h-14 md:max-h-16 max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  )
}
