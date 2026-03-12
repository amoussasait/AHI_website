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
    <section className="relative min-h-screen w-full flex items-center justify-center px-3 sm:px-4 pt-16 sm:pt-20 overflow-hidden">

      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance leading-tight px-4 sm:px-2"
          variants={itemVariants}
        >
          <span className="text-white">{"Canada's Sovereign AI & Energy Campus"} </span>
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {"— Power Available 2026"}
          </span>
        </motion.h1>

        <motion.div className="mb-8 sm:mb-12 max-w-3xl mx-auto px-4" variants={itemVariants}>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-2">
            Prime, dispatchable, behind-the-meter power under construction in Alberta.
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8">
            Initial capacity delivering in 2026.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full max-w-5xl mx-auto">
            {[
              { icon: Zap, label: "250MW+ On-Site Prime Power" },
              { icon: ArrowLeftRight, label: "Grid Import & 150MW Export Capability" },
              { icon: Maximize2, label: "500+ Expandable Acres" },
              { icon: Leaf, label: "Indigenous-Aligned" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-start gap-2 sm:gap-3 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 rounded-2xl border border-primary/30 bg-primary/5 backdrop-blur-sm hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 text-center h-full min-h-[100px] sm:min-h-[120px]"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary/15 flex items-center justify-center">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <span className="text-xs sm:text-sm md:text-base text-accent/90 font-semibold leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground italic text-center w-full px-4 max-w-4xl mx-auto leading-relaxed" variants={itemVariants}>
          {"Up to 300MW Battery Storage | 50MW Solar Generation | 44 Data Centre Halls | 180,000+ GPU Capacity"}
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 mt-6 sm:mt-8" variants={itemVariants}>
          <Link href="/contact" className="w-full sm:w-auto">
            <motion.button
              className="w-full sm:w-auto px-8 sm:px-10 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-base sm:text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 200, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Tour
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
          <Link href="/compute" className="w-full sm:w-auto">
            <motion.button
              className="w-full sm:w-auto px-8 sm:px-10 py-4 rounded-full border border-primary/50 text-primary font-semibold text-base sm:text-lg hover:border-primary hover:bg-primary/5 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reserve AI Capacity
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 items-center justify-items-center max-w-5xl mx-auto px-4"
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
              logo: "/images/m3_logo.png",
              name: "M3",
            },
          ].map((partner) => (
            <div
              key={partner.name}
              className="px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 border border-primary/30 rounded-lg hover:border-primary/60 transition-all h-16 sm:h-20 md:h-24 w-full flex items-center justify-center"
            >
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="max-h-10 sm:max-h-12 md:max-h-14 max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
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
