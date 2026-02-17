"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface ScrollParallaxSectionProps {
  children: React.ReactNode
  offset?: number
}

export default function ScrollParallaxSection({ children, offset = 50 }: ScrollParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, offset])

  return (
    <motion.div ref={ref} style={{ y }} className="relative">
      {children}
    </motion.div>
  )
}
