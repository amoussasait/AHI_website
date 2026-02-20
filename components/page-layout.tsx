"use client"

import type React from "react"
import Navigation from "./navigation"
import Footer from "./footer"
import DatacenterBackground from "./datacenter-background"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

interface PageLayoutProps {
  children: React.ReactNode
  title: string
  subtitle?: string
}

export default function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="w-full overflow-hidden bg-gradient-to-b from-secondary via-background to-background">
      <DatacenterBackground />
      <Navigation scrolled={scrolled} />

      {/* Page Header */}
      {title ? (
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-28 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {title}
          </h1>
          {subtitle && <p className="text-lg text-accent max-w-2xl">{subtitle}</p>}
        </div>
      ) : (
        <div className="pt-20" />
      )}

      {/* Page Content */}
      <div className="relative z-10">{children}</div>

      <Footer />
    </main>
  )
}
