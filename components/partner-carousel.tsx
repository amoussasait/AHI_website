"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

const partners = [
  {
    name: "Havenz Tech",
    logo: "/images/havenz-20tech-horizontal-white.png",
    color: "from-primary",
  },
  {
    name: "Energy Haven",
    logo: "/images/energy-20haven-horizontal-white.png",
    color: "from-blue-500",
  },
  {
    name: "Denvr Dataworks",
    logo: "/images/30705b-425e6232f0ed4fc69a41576ef6564764-mv2.png",
    color: "from-cyan-400",
  },
  {
    name: "TELUS",
    logo: "/images/telus-symbol.png",
    color: "from-purple-500",
  },
  {
    name: "Samsung",
    logo: "/images/samsung-brand-logo-phone-symbol-white-design-south-korean-mobile-illustration-with-black-background-free-vector.jpg",
    color: "from-blue-400",
  },
  { name: "M3 Development", logo: "/images/10.avif", color: "from-indigo-500" },
  { name: "GGA Architecture", logo: "/images/gga-architecture-white.webp", color: "from-teal-500" },
  { name: "Lionstooth Energy", logo: "/images/lte-logo-white.webp", color: "from-orange-500" },
  { name: "Full Spectrum Energy", logo: "/images/fsp-logo-2019-white.webp", color: "from-yellow-500" },
  { name: "Maurice Law", logo: "/images/maurice-law-logo.jpeg", color: "from-green-500" },
  { name: "Turning Stone Capital", logo: "/images/main-logo-white.webp", color: "from-rose-500" },
]

export default function PartnerCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="relative py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          className="text-2xl font-bold text-center mb-12 text-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Powering Innovation Across Canada
        </motion.h3>

        <div className="relative">
          <div className="flex gap-8 justify-center flex-wrap">
            {partners.map((partner, idx) => (
              <motion.div
                key={partner.name}
                className="flex-shrink-0"
                onHoverStart={() => setHoveredIndex(idx)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.1 }}
              >
                <div
                  className={`relative p-4 rounded-xl border border-primary/30 backdrop-blur-sm
                    ${hoveredIndex === idx ? "border-primary/80 bg-primary/10" : "bg-card/40 hover:bg-card/60"} 
                    transition-all duration-300`}
                >
                  {hoveredIndex === idx && (
                    <motion.div
                      layoutId="cardGlow"
                      className={`absolute inset-0 rounded-xl bg-gradient-to-br ${partner.color} to-transparent opacity-20 blur-xl`}
                    />
                  )}

                  <div className="relative z-10 text-center">
                    {partner.logo ? (
                      <div className="w-32 h-12 mx-auto mb-2 flex items-center justify-center">
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          width={128}
                          height={48}
                          className="max-h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-12 h-12 mx-auto rounded-lg flex items-center justify-center font-bold text-sm mb-2
                        bg-gradient-to-br ${partner.color} to-transparent text-white`}
                      >
                        {partner.name
                          .split(" ")
                          .map((w) => w[0])
                          .join("")}
                      </div>
                    )}
                    <p className="text-xs font-semibold text-foreground whitespace-nowrap">{partner.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
