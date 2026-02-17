"use client"

import { motion } from "framer-motion"

export default function HolographicCTA({ children }) {
  return (
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(0, 255, 200, 0.1) 1px, transparent 1px),
            linear-gradient(-45deg, rgba(0, 255, 200, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">{children}</div>
    </div>
  )
}
