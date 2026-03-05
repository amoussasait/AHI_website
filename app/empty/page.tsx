"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import DatacenterBackground from "@/components/datacenter-background"

export default function EmptyPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="w-full min-h-screen overflow-hidden bg-gradient-to-b from-secondary via-background to-background">
      <DatacenterBackground />
      <Navigation scrolled={scrolled} />

      {/* Empty content area */}
      <div className="min-h-screen" />

      <Footer />
    </main>
  )
}
