"use client"

import { motion } from "framer-motion"
import PageLayout from "@/components/page-layout"
import Image from "next/image"

export default function PartnersPage() {
  const partnerCategories = [
    {
      category: "Core Infrastructure",
      partners: [
        {
          name: "Havenz Tech Inc.",
          logo: "/images/havenz-20tech-horizontal-white.png",
          role: "Smart Infrastructure Platform",
          description:
            "Real-time monitoring, IoT sensors, ESG data tracking, and smart building management across the facility.",
          website: "https://www.havenz.ai",
        },
        {
          name: "Energy Haven",
          logo: "/images/energy-20haven-horizontal-white.png",
          role: "Clean Energy & Carbon Systems",
          description: "Cogeneration operations, hydrogen integration, CO₂ recovery, and carbon terminal management.",
          website: "https://www.energyhaven.ai",
        },
      ],
    },
    {
      category: "AI Compute & Services",
      partners: [
        {
          name: "Denvr Dataworks",
          logo: "/images/30705b-425e6232f0ed4fc69a41576ef6564764-mv2.png",
          role: "AI Compute & Data Services",
          description:
            "AI workload orchestration, enterprise compute services, model training, and inference management.",
          website: "https://www.denvr.com",
        },
      ],
    },
    {
      category: "Connectivity & IoT",
      partners: [
        {
          name: "TELUS",
          logo: "/images/telus-symbol.png",
          role: "IoT, Fiber, & Sensor Systems",
          description: "National fiber backbone, IoT connectivity, sensor networks, and telecom infrastructure.",
          website: "https://www.telus.com",
        },
        {
          name: "Samsung",
          logo: "/images/samsung-brand-logo-phone-symbol-white-design-south-korean-mobile-illustration-with-black-background-free-vector.jpg",
          role: "Smart Display & IoT Hardware",
          description: "Smart displays, IoT devices, monitoring hardware, and enterprise solutions.",
          website: "https://www.samsung.com/ca",
        },
      ],
    },
    {
      category: "Construction & Engineering",
      partners: [
        {
          name: "M3 Development Management",
          logo: "/images/10.avif",
          role: "Construction & Project Management",
          description: "Facility design, construction management, project coordination, and timeline delivery.",
          website: "https://www.m3dm.ca",
        },
        {
          name: "GGA Architecture",
          logo: "/images/gga-architecture-white.webp",
          role: "Design & Planning",
          description:
            "Architectural design, facility planning, infrastructure optimization, and regulatory compliance.",
          website: "https://gga-arch.com",
        },
        {
          name: "Full Spectrum Energy",
          logo: "/images/fsp-logo-2019-white.webp",
          role: "EPC & Operations",
          description: "Engineering, procurement, construction, and day-to-day facility operations management.",
          website: "https://www.fsproj.com/",
        },
      ],
    },
    {
      category: "Energy & Power Generation",
      partners: [
        {
          name: "Lionstooth Energy",
          logo: "/images/lte-logo-white.webp",
          role: "Power Generation & Regulatory",
          description: "Power generation expertise, regulatory compliance, permits, and utility coordination.",
          website: "https://www.energyhaven.ai",
        },
        {
          name: "Collicutt Energy Services",
          logo: "/images/ces--logo.png",
          role: "Energy Systems Integration",
          description: "Energy systems design, integration, and optimization for industrial-scale infrastructure.",
          website: "https://www.collicutt.com",
        },
      ],
    },
    {
      category: "Governance & Finance",
      partners: [
        {
          name: "Maurice Law LLP",
          logo: "/images/maurice-law-logo.jpeg",
          role: "Indigenous Legal & Governance",
          description: "Indigenous legal expertise, governance frameworks, and community partnership guidance.",
          website: "#",
        },
        {
          name: "Turning Stone Capital",
          logo: "/images/main-logo-white.webp",
          role: "Finance & First Nations Equity",
          description: "First Nations equity participation, community financing, and wealth creation initiatives.",
          website: "#",
        },
        {
          name: "Red Deer County",
          logo: "/images/images-removebg-preview.png",
          role: "Municipal Partnership",
          description: "Regional government support, zoning, and community development partnership.",
          website: "https://www.reddeer.ca",
        },
      ],
    },
    {
      category: "Real Estate & Development",
      partners: [
        {
          name: "Century 21",
          logo: "/images/century-21-logo-2018.png",
          role: "Real Estate Services",
          description: "Commercial real estate, property development, and land management services.",
          website: "https://www.century21.ca",
        },
      ],
    },
  ]

  return (
    <PageLayout
      title="Powering Innovation Across Canada"
      subtitle="A coalition of world-class partners committed to sovereign AI infrastructure"
    >
      {/* Partner Categories */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        {partnerCategories.map((cat, catIdx) => (
          <motion.div
            key={catIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: catIdx * 0.1 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-primary mb-8">{cat.category}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {cat.partners.map((partner, idx) => (
                <motion.a
                  key={idx}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="bg-card rounded-lg p-8 border border-primary/20 hover:border-primary/50 transition-all"
                >
                  <div className="h-16 mb-6 flex items-center">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={200}
                      height={64}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{partner.name}</h3>
                  <p className="text-sm text-primary/80 font-semibold mb-3">{partner.role}</p>
                  <p className="text-accent mb-4">{partner.description}</p>
                  <span className="text-xs text-primary hover:underline">Visit website →</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </section>

      {/* Coalition Strength */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-secondary via-primary/10 to-secondary rounded-2xl p-12 border border-primary/20"
        >
          <h2 className="text-3xl font-bold mb-6 text-primary">Together, We Build Tomorrow</h2>
          <p className="text-lg text-accent mb-8">
            This coalition represents decades of combined expertise in energy, technology, infrastructure, and
            Indigenous partnership. Each partner brings world-class capabilities, creating a comprehensive ecosystem for
            sovereign AI compute infrastructure.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "15+ Partners", desc: "Leading companies across energy, tech, and infrastructure" },
              { title: "500+ Combined Years", desc: "Of operational experience and technical expertise" },
              { title: "First Nations Focused", desc: "Indigenous governance and equity built from the start" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-2xl font-bold text-primary mb-2">{stat.title}</h3>
                <p className="text-accent">{stat.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </PageLayout>
  )
}
