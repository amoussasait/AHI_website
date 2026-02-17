"use client"

import { motion } from "framer-motion"

export default function SectionDividerAnimated() {
  return (
    <motion.div
      className="relative h-px bg-gradient-to-r from-transparent via-primary to-transparent my-24"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent blur-sm" />
    </motion.div>
  )
}
