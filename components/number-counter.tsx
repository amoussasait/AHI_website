"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

interface NumberCounterProps {
  value: number
  suffix?: string
  duration?: number
}

export default function NumberCounter({ value, suffix = "", duration = 2 }: NumberCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })

  useEffect(() => {
    if (!inView) return

    let start = 0
    const increment = value / (duration * 100)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 10)

    return () => clearInterval(timer)
  }, [inView, value, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {count}
      {suffix}
    </motion.div>
  )
}
