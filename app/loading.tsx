"use client"

import { motion } from "framer-motion"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background flex items-center justify-center">
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Animated loading spinner */}
        <motion.div
          className="w-16 h-16 rounded-full border-2 border-primary/30 border-t-primary"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        <motion.p
          className="text-lg text-muted-foreground"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          Loading AHI infrastructure...
        </motion.p>
      </motion.div>
    </div>
  )
}
