"use client"

import { motion } from "framer-motion"
import PageLayout from "@/components/page-layout"
import SectionDividerAnimated from "@/components/section-divider-animated"
import {
  MapPin, Building2, Zap, Network, Truck, Globe, CheckCircle2,
  ArrowRight, Server, TrendingUp, Radio, Map, Plane
} from "lucide-react"
import Link from "next/link"

export default function LocationPage() {
  const locationAdvantages = [
    "Central Alberta access",
    "Industrial-zoned development land",
    "Proximity to major urban markets",
    "Scalable power and transmission infrastructure",
    "Access to Western Canada's fibre and transportation networks"
  ]

  const centralLocationBenefits = [
    "Regional workforce access",
    "Customer and partner proximity",
    "Logistics efficiency",
    "Long-term campus scalability"
  ]

  const transportationAdvantages = [
    "Access to Highway 2 / QEII corridor",
    "Regional industrial road access",
    "Proximity to Calgary International Airport",
    "Proximity to Edmonton International Airport",
    "Access to regional rail and logistics infrastructure"
  ]

  const expansionCapabilities = [
    "Large-format AI infrastructure deployment",
    "Phased cluster development",
    "Integrated energy and digital infrastructure",
    "Expansion-ready industrial land"
  ]

  const powerAdvantages = [
    "On-site prime power generation",
    "Battery storage deployment",
    "Renewable integration",
    "Transmission interconnection access",
    "Long-term AI campus expansion"
  ]

  const connectivityFeatures = [
    "Multiple fibre paths",
    "Carrier-neutral network integration",
    "High-capacity cloud and AI connectivity",
    "Low-latency access to regional and national markets"
  ]

  const ecosystemSupport = [
    "AI infrastructure",
    "Advanced energy systems",
    "Agritech and industrial users",
    "Sovereign and enterprise compute deployments"
  ]

  const locationMetrics = [
    {
      icon: MapPin,
      title: "Red Deer County, Alberta",
      description: "Central Alberta industrial location"
    },
    {
      icon: Map,
      title: "Between Calgary and Edmonton",
      description: "Access to Alberta's primary economic corridor"
    },
    {
      icon: Building2,
      title: "Industrial Development Land",
      description: "Expansion-ready campus environment"
    },
    {
      icon: TrendingUp,
      title: "Power + Fibre + Logistics",
      description: "Integrated infrastructure platform"
    }
  ]

  return (
    <PageLayout
      title="STRATEGIC LOCATION FOR AI INFRASTRUCTURE"
      subtitle="Located in Central Alberta, the AI Hub of Innovation is positioned within one of Western Canada's most strategic corridors for power, connectivity, industrial development, and long-term hyperscale expansion"
    >
      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-xl text-accent leading-relaxed text-center max-w-5xl mx-auto">
            The AI Hub of Innovation is located in Red Deer County, Alberta, at the midpoint between Calgary and Edmonton.
          </p>
          <p className="text-lg text-accent leading-relaxed text-center max-w-5xl mx-auto">
            This location provides direct access to major transportation corridors, regional labour, utility infrastructure, and one of Canada's strongest industrial growth regions.
          </p>

          <div className="bg-gradient-to-r from-primary/5 via-black/60 to-primary/5 border-2 border-primary/40 p-10 rounded-2xl shadow-2xl">
            <p className="text-white font-bold text-xl mb-6 text-center">
              AHI's location supports the development of large-scale AI infrastructure through a combination of:
            </p>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {locationAdvantages.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl border border-primary/30">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-accent font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Why This Location Matters */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">Why This Location Matters</h2>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div className="bg-gradient-to-br from-card to-black/80 rounded-2xl border-2 border-primary/30 p-10 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="w-12 h-12 text-primary" />
                <h3 className="text-3xl font-bold text-white">Positioned Between Calgary and Edmonton</h3>
              </div>
              <p className="text-accent mb-6 text-lg leading-relaxed">
                The AHI campus sits in the centre of Alberta's primary economic corridor, providing access to two major metropolitan markets while benefiting from lower land intensity and greater development flexibility than core urban sites.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-black/80 rounded-2xl border-2 border-primary/40 p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-8">This central location supports:</h3>
              <div className="space-y-4">
                {centralLocationBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/10 to-black/60 rounded-xl border-2 border-primary/30">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-white font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Strategic Access */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Truck className="w-16 h-16 text-primary" />
            <h2 className="text-5xl font-bold text-primary">Strategic Access</h2>
          </div>
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Connected to Major Transportation Corridors</h3>
          <p className="text-xl text-accent mb-16 text-center max-w-5xl mx-auto leading-relaxed">
            The campus benefits from direct access to key transportation infrastructure, supporting construction, operations, equipment delivery, and long-term industrial logistics.
          </p>

          <div className="bg-gradient-to-br from-secondary via-black/95 to-black/90 rounded-3xl border-2 border-primary/50 p-12 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-10 text-center">Location advantages include:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {transportationAdvantages.map((advantage, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 bg-gradient-to-r from-primary/10 to-black/60 rounded-xl border-2 border-primary/30"
                >
                  <Truck className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <span className="text-white font-medium text-lg">{advantage}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Industrial Development Platform */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Building2 className="w-16 h-16 text-primary" />
            <h2 className="text-5xl font-bold text-primary">Industrial Development Platform</h2>
          </div>
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Built for Large-Scale Expansion</h3>
          <p className="text-xl text-accent mb-12 text-center max-w-5xl mx-auto leading-relaxed">
            Unlike constrained urban data centre locations, AHI provides a campus-scale development environment capable of supporting modular and phased expansion.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div className="bg-gradient-to-br from-card to-black/80 rounded-2xl border-2 border-primary/30 p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-8">The location enables:</h3>
              <div className="space-y-4">
                {expansionCapabilities.map((capability, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary/10 to-black/60 rounded-xl border border-primary/20">
                    <Server className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-black/80 rounded-2xl border-2 border-primary/40 p-10 shadow-xl flex flex-col justify-center">
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/50 rounded-2xl p-8 mb-6">
                <p className="text-white text-xl font-bold text-center leading-relaxed">
                  This gives hyperscalers, cloud operators, and enterprise users the ability to deploy within a scalable environment purpose-built for long-term growth.
                </p>
              </div>
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
                <p className="text-accent italic text-center">
                  Campus-scale expansion capability without urban constraints
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Power + Location Advantage */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-secondary via-black/95 to-black/90 rounded-3xl border-2 border-primary/50 p-12 shadow-2xl"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Zap className="w-16 h-16 text-primary" />
            <h2 className="text-5xl font-bold text-primary">Power + Location Advantage</h2>
          </div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Location Aligned with Energy Infrastructure</h3>
          <p className="text-xl text-accent mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            The value of the AHI site is not just geographic — it is infrastructural.
          </p>

          <div className="bg-primary/5 border-2 border-primary/40 rounded-2xl p-10 mb-10">
            <p className="text-white font-bold text-xl mb-8 text-center">
              The campus has been selected and advanced to support:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {powerAdvantages.map((advantage, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-5 bg-gradient-to-r from-primary/10 to-black/60 rounded-xl border-2 border-primary/30"
                >
                  <Zap className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-white font-medium">{advantage}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/50 rounded-2xl p-8">
            <p className="text-white font-bold text-center text-2xl leading-relaxed">
              This allows AHI to combine strategic land positioning with purpose-built energy infrastructure, creating a differentiated location for high-density AI compute.
            </p>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Fibre + Connectivity */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Network className="w-16 h-16 text-primary" />
            <h2 className="text-5xl font-bold text-primary">Fibre + Connectivity</h2>
          </div>
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Positioned for High-Speed Digital Infrastructure</h3>
          <p className="text-xl text-accent mb-12 text-center max-w-5xl mx-auto leading-relaxed">
            The campus location supports long-term fibre and connectivity expansion required for modern AI workloads.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-card to-black/80 rounded-2xl border-2 border-primary/30 p-10 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-8">This includes the ability to support:</h3>
              <div className="space-y-4">
                {connectivityFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-r from-primary/10 to-black/60 rounded-xl border border-primary/20">
                    <Radio className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-black/80 rounded-2xl border-2 border-primary/40 p-10 shadow-xl flex flex-col justify-center">
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/50 rounded-2xl p-10 text-center mb-6">
                <Network className="w-20 h-20 text-primary mx-auto mb-6" />
                <p className="text-white text-2xl font-bold mb-4">Digital Reach</p>
                <p className="text-accent text-lg">
                  For cloud and AI operators, location is not only about land — it is about digital reach. AHI is positioned to support both.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Regional Ecosystem */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-secondary via-black/95 to-black/90 rounded-3xl border-2 border-primary/50 p-12 shadow-2xl"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <Globe className="w-16 h-16 text-primary" />
            <h2 className="text-5xl font-bold text-primary">Regional Ecosystem</h2>
          </div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Located Within a Growing Innovation Corridor</h3>
          <p className="text-xl text-accent mb-12 text-center max-w-5xl mx-auto leading-relaxed">
            Red Deer County and Central Alberta continue to grow as a regional hub for energy, agriculture, logistics, technology, and industrial development.
          </p>

          <div className="bg-primary/5 border-2 border-primary/40 rounded-2xl p-10 mb-10">
            <p className="text-white font-bold text-xl mb-8 text-center">
              AHI is positioned within this broader ecosystem to support:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ecosystemSupport.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-primary/10 to-black/60 p-6 rounded-2xl border-2 border-primary/40 text-center hover:border-primary/70 transition-all shadow-lg"
                >
                  <TrendingUp className="w-10 h-10 text-primary mx-auto mb-4" />
                  <p className="text-white font-bold">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/50 rounded-2xl p-8">
            <p className="text-white font-bold text-center text-2xl leading-relaxed">
              This creates a location that is not isolated, but integrated into a broader economic and industrial growth region.
            </p>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Strategic Location Highlights (Metrics) */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-16 text-center">Strategic Location Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locationMetrics.map((metric, idx) => {
              const Icon = metric.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-card to-black/80 rounded-2xl p-8 border-2 border-primary/30 hover:border-primary/60 transition-all shadow-xl text-center"
                >
                  <Icon className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-white mb-3">{metric.title}</h3>
                  <p className="text-accent">{metric.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Video Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-secondary via-black/95 to-black/90 rounded-3xl border-2 border-primary/50 p-12 shadow-2xl"
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">AHI Location Overview</h2>
          <p className="text-xl text-accent mb-12 text-center max-w-3xl mx-auto">
            See the AHI campus location and surrounding infrastructure context.
          </p>

          <div className="aspect-video rounded-2xl overflow-hidden border-2 border-primary/40 shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/E5WzBx0o7gY"
              title="AHI Location Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 py-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 via-black/90 to-accent/10 border-2 border-primary/50 rounded-3xl p-14 shadow-2xl text-center"
        >
          <MapPin className="w-20 h-20 text-primary mx-auto mb-6" />
          <h2 className="text-5xl font-bold text-primary mb-8">Build in a Location Designed for Scale</h2>
          <p className="text-2xl text-accent mb-8 max-w-4xl mx-auto leading-relaxed">
            The AI Hub of Innovation combines strategic geography, industrial land, scalable power infrastructure, and long-term campus expansion capability in one location.
          </p>
          <p className="text-xl text-white mb-12 max-w-5xl mx-auto">
            For hyperscalers, cloud operators, and enterprise AI users, location is a core part of infrastructure strategy. AHI is designed to deliver that advantage.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 px-12 py-5 bg-gradient-to-r from-primary to-accent text-white font-bold text-xl rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </PageLayout>
  )
}
