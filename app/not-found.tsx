"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-6">
            <span className="text-5xl font-bold text-primary">404</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Page Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/80 transition-colors"
          >
            Back to Home
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="mailto:info@havenzcorp.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-primary/30 text-primary font-semibold hover:border-primary hover:bg-primary/10 transition-colors"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </div>
  )
}
