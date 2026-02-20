"use client"
import PageLayout from "@/components/page-layout"
import { Zap, Droplet, Leaf, Users } from "lucide-react"
import FourPillars from "@/components/four-pillars"
import ScopeMandates from "@/components/scope-mandates"
import HeavyPowerUsers from "@/components/heavy-power-users"
import ConstructionProgress from "@/components/construction-progress"
import DatacenterBackground from "@/components/datacenter-background"

export default function AboutPage() {
  const specs = [
    {
      icon: Zap,
      label: "10MW Facility",
      detail: "Initial 10MW capacity in Red Deer, scalable to 1GW+",
    },
    {
      icon: Droplet,
      label: "Hydrogen-Ready",
      detail: "MTU Rolls-Royce engines prepared for hydrogen transition",
    },
    {
      icon: Leaf,
      label: "Clean Energy",
      detail: "Cogeneration system with 100% waste heat utilization",
    },
    {
      icon: Users,
      label: "Indigenous Partnership",
      detail: "First Nations equity and governance collaboration",
    },
  ]

  return (
    <PageLayout
      title="AI Compute Meets Clean Energy"
      subtitle="Canada's sovereign infrastructure powered by innovation and partnership"
    >
      <DatacenterBackground />
      {/* Facility Overview */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-primary">AHI Red Deer: The Foundation</h2>
            <p className="text-lg text-accent mb-4">
              The AHI Data Centre represents Canada's first sovereign AI compute infrastructure built on a foundation of
              clean energy, technical excellence, and Indigenous partnership.
            </p>
            <p className="text-lg text-accent mb-6">
              Located in Red Deer, Alberta, our 10MW facility features Rolls-Royce MTU cogeneration engines paired with
              hydrogen-ready integration, enabling seamless transition to green hydrogen as the technology matures.
            </p>
            <div className="space-y-3">
              <p className="text-accent">
                <span className="text-primary font-semibold">Initial Capacity:</span> 2,300 sq ft with 10MW power
              </p>
              <p className="text-accent">
                <span className="text-primary font-semibold">Expansion Path:</span> Scalable to 10,000+ sq ft and 1GW+
                capacity
              </p>
              <p className="text-accent">
                <span className="text-primary font-semibold">Ready Timeline:</span> 2.5 MW immediately available
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {specs.map((spec, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-secondary to-primary/10 rounded-lg p-6 border border-primary/20 hover:border-primary/50 transition-colors"
              >
                {spec.icon && <spec.icon className="w-8 h-8 text-primary mb-3" />}
                <h3 className="font-semibold text-accent mb-2">{spec.label}</h3>
                <p className="text-sm text-muted-foreground">{spec.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Progress */}
      <ConstructionProgress />

      {/* Four Pillars */}
      <FourPillars />

      {/* Scope Mandates */}
      <ScopeMandates />

      {/* Heavy Power Users */}
      <HeavyPowerUsers />

      {/* Technology & Infrastructure */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">Technology & Infrastructure</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Rolls-Royce MTU Engines",
              description:
                "Industrial-grade cogeneration engines delivering reliable 10MW+ output with hydrogen-ready fuel systems for future transition.",
            },
            {
              title: "Hydrogen-Ready Integration",
              description:
                "Purpose-built for seamless hydrogen fuel conversion, positioning AHI at the forefront of sustainable energy infrastructure.",
            },
            {
              title: "Waste Heat Recovery",
              description:
                "100% of cogeneration waste heat captured and utilized for space heating, reducing energy waste and maximizing efficiency.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-card rounded-lg p-8 border border-primary/20 hover:border-primary/50 transition-all"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">{item.title}</h3>
              <p className="text-accent">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* First Nations Partnership */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-secondary via-primary/10 to-secondary rounded-2xl p-12 border border-primary/20">
          <h2 className="text-3xl font-bold mb-6 text-primary">Indigenous Partnership & Governance</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-accent mb-4">Maurice Law LLP</h3>
              <p className="text-accent mb-4">
                Provides Indigenous legal expertise and governance frameworks ensuring respectful partnership with First
                Nations communities. Guides compliance with Indigenous rights and cultural considerations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-accent mb-4">Turning Stone Capital</h3>
              <p className="text-accent mb-4">
                Delivers First Nations equity participation and community benefit financing. Ensures wealth creation and
                economic opportunity for Indigenous stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center text-primary">Key Collaborators</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Denvr Dataworks",
              role: "AI Compute & Data Services",
              description:
                "Manages AI workload orchestration and provides enterprise-grade compute services for training, inference, and data processing.",
            },
            {
              name: "Energy Haven",
              role: "Clean Energy Systems",
              description:
                "Designs and operates the cogeneration and energy recovery systems, including hydrogen integration and carbon management.",
            },
            {
              name: "Havenz Tech Inc.",
              role: "Smart Infrastructure Platform",
              description:
                "Provides real-time IoT monitoring, ESG tracking, and smart building management across the data centre facility.",
            },
            {
              name: "Full Spectrum Energy",
              role: "Operations & Engineering",
              description:
                "Delivers EPC services and day-to-day operations management for reliable, 24/7 uptime and infrastructure maintenance.",
            },
          ].map((partner, idx) => (
            <div
              key={idx}
              className="bg-card rounded-lg p-8 border border-primary/20 hover:border-primary/50 transition-all"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">{partner.name}</h3>
              <p className="text-sm text-primary/80 mb-3 font-medium">{partner.role}</p>
              <p className="text-accent">{partner.description}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
