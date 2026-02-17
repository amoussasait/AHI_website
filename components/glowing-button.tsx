"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GlowingButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary"
}

export default function GlowingButton({ children, onClick, variant = "primary" }: GlowingButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative px-8 py-4 rounded-full font-semibold overflow-hidden group transition-all
        ${
          variant === "primary"
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "border border-primary/50 text-primary hover:border-primary hover:bg-primary/10"
        }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
        animate={{
          boxShadow: [
            "0 0 20px rgba(0, 255, 200, 0)",
            "0 0 40px rgba(0, 255, 200, 0.5)",
            "0 0 20px rgba(0, 255, 200, 0)",
          ],
        }}
        transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  )
}
