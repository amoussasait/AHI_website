"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface ErrorBoundaryProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    console.error("[v0] Error boundary caught:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background flex items-center justify-center px-4">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/20 mb-6">
          <span className="text-3xl">⚠️</span>
        </div>

        <h1 className="text-4xl font-bold mb-4">Something Went Wrong</h1>
        <p className="text-lg text-muted-foreground mb-8">
          We encountered an unexpected error. Our team has been notified and we're working to fix it.
        </p>

        {error.digest && (
          <p className="text-sm text-muted-foreground mb-8 font-mono bg-secondary/50 p-4 rounded-lg">
            Error ID: {error.digest}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/80 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-3 rounded-full border border-primary/30 text-primary font-semibold hover:border-primary hover:bg-primary/10 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
