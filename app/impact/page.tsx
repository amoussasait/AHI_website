"use client"

import { motion } from "framer-motion"
import PageLayout from "@/components/page-layout"
import SectionDividerAnimated from "@/components/section-divider-animated"
import { TrendingUp, Users, DollarSign, Building, GraduationCap, MapPin, Globe, FileDown, Briefcase, CheckCircle2, ArrowRight, Target, Zap } from "lucide-react"

export default function ImpactPage() {
  const pillars = [
    { icon: Zap, title: "Energy security" },
    { icon: Globe, title: "Data sovereignty" },
    { icon: Target, title: "Food production" },
    { icon: Briefcase, title: "Advanced technology and job creation" },
  ]

  const locationAdvantages = [
    "Access to approximately 4.5 million people within a 100-mile radius",
    "Proximity to two international airports and a regional airport",
    "Direct highway, rail, and fibre infrastructure connectivity",
    "Access to Alberta's emerging carbon sequestration and industrial hub zones",
  ]

  const constructionJobs = [
    { label: "Direct Construction Jobs", value: "~1,600" },
    { label: "Supply-Chain Jobs", value: "~1,400" },
    { label: "Induced Jobs", value: "~1,000" },
  ]

  const trainingPrograms = [
    "Energy infrastructure",
    "Data centre operations",
    "AI and digital systems",
    "Advanced manufacturing",
    "Sustainability and environmental systems",
  ]

  const infrastructureImprovements = [
    "Highway 2A expansion and traffic capacity improvements",
    "Regional fibre connectivity expansion",
    "Upgraded water and sewer infrastructure",
    "Expanded industrial utility corridors",
  ]

  const secondaryGrowth = [
    "New housing development",
    "Commercial and retail growth",
    "Logistics and transportation businesses",
    "Technology and service sector expansion",
  ]

  return (
    <PageLayout
      title="IMPACT"
      subtitle="Economic Impact & Regional Transformation"
    >
      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <p className="text-xl text-accent leading-relaxed text-center max-w-5xl mx-auto">
            The AI Hub of Innovation (AHI) represents a transformational infrastructure development designed to position Central Alberta as a global hub for energy, artificial intelligence infrastructure, and advanced industrial growth.
          </p>
          <p className="text-lg text-accent leading-relaxed text-center max-w-5xl mx-auto">
            The campus integrates energy infrastructure, digital infrastructure, agritech systems, and carbon innovation into a single ecosystem designed to power a new generation of industries while strengthening regional economic resilience.
          </p>
          <div className="bg-gradient-to-r from-primary/5 via-black/60 to-primary/5 border-2 border-primary/40 p-8 rounded-2xl">
            <p className="text-white font-semibold text-lg text-center">
              The project is being developed through partnerships between Energy Haven LP, Havenz Smart Communities, and Indigenous ownership groups, creating long-term economic opportunities for communities across Alberta.
            </p>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* A New Economic Engine */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">A New Economic Engine for Central Alberta</h2>
          <p className="text-xl text-accent mb-12 text-center max-w-4xl mx-auto">
            AHI is a multi-phase infrastructure development estimated at approximately <span className="text-primary font-bold">$7 billion</span> in total investment.
          </p>

          <div className="bg-gradient-to-br from-secondary via-black/95 to-black/90 rounded-2xl border-2 border-primary/40 p-12 mb-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">The project establishes a new industrial cluster centred around four pillars:</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1, type: "spring" }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center gap-4 p-6 bg-gradient-to-b from-primary/10 to-black/60 rounded-xl border-2 border-primary/30 hover:border-primary/60 transition-all"
                  >
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white font-bold text-lg">{pillar.title}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-card rounded-2xl border-2 border-primary/30 p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="w-12 h-12 text-primary" />
                <h3 className="text-2xl font-bold text-white">Strategic Location</h3>
              </div>
              <p className="text-accent mb-6 leading-relaxed">
                The campus is strategically located in Red Deer County, at the midpoint of Alberta's economic corridor between Calgary and Edmonton.
              </p>
              <p className="text-primary font-semibold mb-4">This location provides unique advantages:</p>
              <div className="space-y-3">
                {locationAdvantages.map((advantage, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-accent">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-black/80 rounded-2xl border-2 border-primary/40 p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <Building className="w-12 h-12 text-primary" />
                <h3 className="text-2xl font-bold text-white">Regional Positioning</h3>
              </div>
              <p className="text-white text-xl font-semibold mb-6 leading-relaxed">
                These factors position the region as a natural centre for next-generation industrial development.
              </p>
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
                <p className="text-accent italic">
                  The combination of strategic location, existing infrastructure, and regional connectivity creates a foundation for sustained economic growth across Central Alberta.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Economic Contribution */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">Economic Contribution</h2>
          <p className="text-xl text-accent mb-16 text-center max-w-4xl mx-auto">
            The development is expected to generate substantial economic activity across Alberta through both construction and long-term operations.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Construction Phase */}
            <div className="bg-gradient-to-br from-secondary to-black/90 rounded-2xl border-2 border-primary/40 p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-primary mb-4">Construction Phase (2025–2035)</h3>
              <div className="space-y-6 mb-8">
                {constructionJobs.map((job, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-5 bg-gradient-to-r from-primary/10 to-black/60 rounded-xl border-2 border-primary/30"
                  >
                    <span className="text-white font-semibold">{job.label}</span>
                    <span className="text-primary font-bold text-2xl">{job.value}</span>
                  </motion.div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/50 rounded-xl p-6 text-center">
                <p className="text-white text-sm font-semibold mb-2">Total employment supported during construction:</p>
                <p className="text-primary font-bold text-4xl">4,000+</p>
                <p className="text-accent text-sm mt-2">cumulative jobs over the development decade</p>
              </div>
            </div>

            {/* Operational Phase */}
            <div className="bg-gradient-to-br from-accent/10 to-black/90 rounded-2xl border-2 border-accent/40 p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-accent mb-4">Operational Phase (Post-2030)</h3>
              <p className="text-white text-lg mb-8 leading-relaxed">
                Once the campus reaches steady-state operations:
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-accent/10 to-black/60 rounded-xl border-2 border-accent/30">
                  <Users className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">250–400 on-site jobs</p>
                    <p className="text-accent text-sm">across energy, data infrastructure, and operations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-accent/10 to-black/60 rounded-xl border-2 border-accent/30">
                  <Briefcase className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold mb-1">400–600 additional jobs</p>
                    <p className="text-accent text-sm">across technology, logistics, and services</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-accent/20 to-primary/20 border-2 border-accent/50 rounded-xl p-6 text-center">
                <p className="text-white text-sm font-semibold mb-2">Total long-term employment impact:</p>
                <p className="text-accent font-bold text-4xl">700–1,000</p>
                <p className="text-accent text-sm mt-2">sustained regional jobs</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* GDP Contribution */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 via-black/90 to-primary/10 rounded-3xl border-2 border-primary/50 p-12 shadow-2xl"
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">GDP Contribution</h2>
          <p className="text-xl text-accent mb-12 text-center max-w-3xl mx-auto">
            The project is expected to generate significant economic output for the province.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/20 to-black/60 rounded-2xl border-2 border-primary/40 p-8 text-center">
              <TrendingUp className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-accent text-sm font-semibold mb-2">Total GDP Contribution to Alberta</p>
              <p className="text-primary font-bold text-5xl mb-2">$4.2B+</p>
              <p className="text-accent text-sm">Over project horizon</p>
            </div>
            <div className="bg-gradient-to-br from-accent/20 to-black/60 rounded-2xl border-2 border-accent/40 p-8 text-center">
              <DollarSign className="w-16 h-16 text-accent mx-auto mb-4" />
              <p className="text-accent text-sm font-semibold mb-2">Peak Annual Provincial GDP Increase</p>
              <p className="text-accent font-bold text-5xl mb-2">$250–300M</p>
              <p className="text-accent text-sm">Annual impact</p>
            </div>
          </div>
          <div className="mt-8 bg-black/40 border-l-4 border-primary p-6 rounded-r-xl">
            <p className="text-white text-center leading-relaxed">
              These contributions come from construction activity, operational spending, technology infrastructure, and regional supply chain growth.
            </p>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Government Revenue Impact */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">Government Revenue Impact</h2>
          <p className="text-xl text-accent mb-16 text-center max-w-4xl mx-auto">
            Large infrastructure developments generate significant fiscal contributions across all levels of government.
          </p>

          <div className="grid md:grid-cols-2 gap-10 mb-10">
            {/* Federal & Provincial */}
            <div className="bg-gradient-to-br from-secondary to-black/90 rounded-2xl border-2 border-primary/40 p-10 shadow-xl">
              <h3 className="text-3xl font-bold text-primary mb-6">Federal & Provincial Revenues</h3>
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/50 rounded-xl p-8 text-center mb-6">
                <p className="text-white text-4xl font-bold mb-2">$1.1–$1.4B</p>
                <p className="text-accent">in federal and provincial tax revenues over the project horizon</p>
              </div>
              <p className="text-white font-semibold mb-4">These revenues include:</p>
              <div className="grid grid-cols-2 gap-3">
                {["Personal income tax", "Corporate income tax", "CPP / EI payroll contributions", "GST on goods and services"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 bg-black/40 rounded-lg border border-primary/20">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-accent text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Municipal */}
            <div className="bg-gradient-to-br from-accent/10 to-black/90 rounded-2xl border-2 border-accent/40 p-10 shadow-xl">
              <h3 className="text-3xl font-bold text-accent mb-6">Municipal Revenues</h3>
              <p className="text-white mb-6 leading-relaxed">
                Municipal property taxes generated by the development are expected to grow significantly as the campus expands.
              </p>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-accent/20 to-primary/20 border-2 border-accent/50 rounded-xl p-6 text-center">
                  <p className="text-accent text-sm font-semibold mb-2">Annual Municipal Property Taxes (Full Build-Out)</p>
                  <p className="text-accent font-bold text-4xl mb-2">$30–40M</p>
                  <p className="text-accent text-sm">per year</p>
                </div>
                <div className="bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/50 rounded-xl p-6 text-center">
                  <p className="text-white text-sm font-semibold mb-2">Total Municipal Tax Revenue</p>
                  <p className="text-primary font-bold text-4xl mb-2">$250M+</p>
                  <p className="text-accent text-sm">over the first decade of operations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/40 rounded-2xl border-2 border-primary/30 p-8">
            <p className="text-white font-semibold mb-4 text-center">These revenues support:</p>
            <div className="grid md:grid-cols-4 gap-4">
              {["Roads and infrastructure", "Public services", "Regional economic development", "Education and workforce training initiatives"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-4 bg-gradient-to-r from-primary/10 to-black/60 rounded-xl border border-primary/20">
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-white text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Indigenous Ownership */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-5xl font-bold text-primary mb-6 text-center">Indigenous Ownership & Participation</h2>
        <p className="text-xl text-accent mb-10 text-center max-w-3xl mx-auto">
          The AHI project is structured to support meaningful Indigenous participation and long-term economic partnership.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-secondary via-black/95 to-black/90 rounded-3xl border-2 border-primary/50 p-12 shadow-2xl"
        >
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/50 rounded-2xl p-10 mb-10 text-center">
            <p className="text-white text-lg font-semibold mb-4">Ownership participation includes:</p>
            <p className="text-primary font-bold text-4xl mb-2">51% Indigenous ownership structure</p>
            <p className="text-accent text-lg">with the ability to increase participation to up to <span className="text-white font-bold">90% ownership</span></p>
          </div>

          <p className="text-white text-lg font-semibold mb-6 text-center">The project is designed to create long-term opportunities including:</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Indigenous employment across construction and operations",
              "Indigenous supplier participation",
              "Training and apprenticeship programs",
              "Long-term wealth generation for partner communities"
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-gradient-to-r from-primary/10 to-black/60 rounded-xl border-2 border-primary/30"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium text-lg">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Education & Workforce Development */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <GraduationCap className="w-16 h-16 text-primary" />
            <h2 className="text-5xl font-bold text-primary">Education & Workforce Development</h2>
          </div>
          <p className="text-xl text-accent mb-12 text-center max-w-4xl mx-auto">
            The project will support the development of new workforce training programs in partnership with regional educational institutions.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-card rounded-2xl border-2 border-primary/30 p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Training programs will focus on careers in:</h3>
              <div className="space-y-4">
                {trainingPrograms.map((program, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-5 bg-gradient-to-r from-primary/10 to-black/60 rounded-xl border-2 border-primary/30"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{idx + 1}</span>
                    </div>
                    <span className="text-white font-medium">{program}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-black/80 rounded-2xl border-2 border-primary/40 p-10 shadow-lg flex flex-col justify-center">
              <div className="bg-primary/10 border-l-4 border-primary p-8 rounded-r-xl mb-6">
                <p className="text-white text-xl font-semibold leading-relaxed">
                  Collaborations with local institutions such as Red Deer Polytechnic and regional trade schools will help prepare the next generation of workers for emerging industries.
                </p>
              </div>
              <div className="flex items-center gap-4 p-6 bg-black/40 rounded-xl border border-primary/20">
                <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
                <p className="text-accent">
                  Building a skilled workforce aligned with future industry demands
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Regional Infrastructure Development */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-secondary via-black/95 to-black/90 rounded-2xl border-2 border-primary/40 p-12 shadow-2xl"
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">Regional Infrastructure Development</h2>
          <p className="text-xl text-accent mb-12 text-center max-w-4xl mx-auto leading-relaxed">
            Major infrastructure projects often catalyse broader economic development. The AHI campus will support improvements and expansion of regional infrastructure including:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {infrastructureImprovements.map((improvement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-gradient-to-r from-primary/10 to-black/60 rounded-xl border-2 border-primary/30 hover:border-primary/60 transition-all"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white font-medium text-lg">{improvement}</span>
              </motion.div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/40 rounded-2xl p-8">
            <p className="text-white text-xl font-semibold text-center">
              These investments strengthen the long-term economic capacity of Central Alberta and support future business development.
            </p>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Catalysing Regional Growth */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-primary mb-6 text-center">Catalysing Regional Growth</h2>
          <p className="text-xl text-accent mb-12 text-center max-w-3xl mx-auto">
            Large infrastructure platforms attract secondary investment across surrounding regions.
          </p>
          <p className="text-lg text-white font-semibold mb-8 text-center">
            The AHI development is expected to stimulate:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {secondaryGrowth.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, type: "spring" }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all"></div>
                <div className="relative flex items-center gap-4 p-6 bg-card rounded-2xl border-2 border-primary/30 group-hover:border-primary/60 transition-all shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white font-semibold text-lg">{item}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-primary/5 border-l-4 border-primary p-8 rounded-r-2xl">
            <p className="text-accent text-lg text-center italic">
              These investments contribute to sustained long-term economic growth across the Red Deer and Blackfalds corridor.
            </p>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* National Model */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 via-black/90 to-accent/10 rounded-3xl border-2 border-primary/50 p-12 shadow-2xl text-center"
        >
          <Globe className="w-20 h-20 text-primary mx-auto mb-6" />
          <h2 className="text-5xl font-bold text-primary mb-6">A National Model for Industrial Innovation</h2>
          <p className="text-xl text-accent mb-8 max-w-4xl mx-auto leading-relaxed">
            The AI Hub of Innovation demonstrates how energy infrastructure, digital infrastructure, and sustainable industrial development can be integrated to support future economic growth.
          </p>
          <p className="text-lg text-white mb-6 max-w-3xl mx-auto">
            By combining energy generation, AI infrastructure, and advanced agriculture systems, the project provides a scalable model for regional development that supports:
          </p>
          <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {["Economic growth", "Energy reliability", "Technological innovation", "Environmental sustainability"].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-4 bg-gradient-to-b from-primary/20 to-black/60 rounded-xl border-2 border-primary/40"
              >
                <p className="text-white font-bold">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Looking Forward */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-secondary to-black/90 rounded-3xl border-2 border-primary/40 p-12 shadow-2xl"
        >
          <h2 className="text-5xl font-bold text-primary mb-8 text-center">Looking Forward</h2>
          <p className="text-xl text-accent mb-8 text-center max-w-3xl mx-auto">
            As development progresses, the AI Hub of Innovation will continue expanding its role as a centre for:
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {["AI infrastructure", "Advanced energy systems", "Agritech innovation", "Digital industrial development"].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 p-6 bg-gradient-to-r from-primary/10 to-black/60 rounded-xl border-2 border-primary/30"
              >
                <ArrowRight className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-white font-semibold text-lg">{item}</span>
              </motion.div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/50 rounded-2xl p-8">
            <p className="text-white text-2xl font-bold text-center">
              The project positions Central Alberta as a global example of how energy, technology, and community partnerships can work together to create long-term prosperity.
            </p>
          </div>
        </motion.div>
      </section>

      <SectionDividerAnimated />

      {/* Download Section */}
      <section className="max-w-5xl mx-auto px-4 py-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/20 via-black/90 to-accent/20 rounded-3xl border-2 border-primary/50 p-14 shadow-2xl text-center"
        >
          <FileDown className="w-20 h-20 text-primary mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-primary mb-6">Download the Economic Impact White Paper</h2>
          <p className="text-xl text-accent mb-10 max-w-2xl mx-auto">
            For a detailed analysis of economic modelling, fiscal projections, and methodology:
          </p>
          <button className="group px-10 py-5 bg-gradient-to-r from-primary to-accent text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 flex items-center gap-4 mx-auto">
            <FileDown className="w-6 h-6 group-hover:animate-bounce" />
            <span>Download the AHI Economic & Fiscal Impact White Paper</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </section>
    </PageLayout>
  )
}
