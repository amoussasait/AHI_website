"use client"

import { useEffect, useState } from "react"
import { trackPageView } from "@/lib/analytics"
import Hero from "@/components/hero"
import About from "@/components/about"
import WhyAHI from "@/components/why-ahi"
import ComputePackages from "@/components/compute-packages"
import EnergyInfrastructure from "@/components/energy-infrastructure"
import Location from "@/components/location"
import Partners from "@/components/partners"
import PartnerCarousel from "@/components/partner-carousel"
import CTA from "@/components/cta"
import HolographicCTA from "@/components/holographic-cta"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import SectionDividerAnimated from "@/components/section-divider-animated"
import DenvrPartnership from "@/components/denvr-partnership"
import FourPillars from "@/components/four-pillars"
import ConstructionProgress from "@/components/construction-progress"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    trackPageView("/")
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="w-full overflow-hidden bg-gradient-to-b from-secondary via-background to-background">
      <Navigation scrolled={scrolled} />
      <Hero />
      <SectionDividerAnimated />
      <About />
      <SectionDividerAnimated />
      <ConstructionProgress />
      <SectionDividerAnimated />
      <FourPillars />
      <SectionDividerAnimated />
      <WhyAHI />
      <SectionDividerAnimated />
      <ComputePackages />
      <SectionDividerAnimated />
      <DenvrPartnership />
      <SectionDividerAnimated />
      <EnergyInfrastructure />
      <SectionDividerAnimated />
      <Location />
      <SectionDividerAnimated />
      <Partners />
      <PartnerCarousel />
      <SectionDividerAnimated />
      <HolographicCTA>
        <CTA />
      </HolographicCTA>
      <Footer />
    </main>
  )
}
