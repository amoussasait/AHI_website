"use client"

import PageLayout from "@/components/page-layout"
import { motion } from "framer-motion"
import { Shield, Lock, Eye, FileCheck } from "lucide-react"

export default function CloudSecurityPage() {
  const securityLayers = [
    {
      icon: Shield,
      title: "Physical Security",
      description: "Multi-layer perimeter defense with 24/7 armed security, biometric access control, and vehicle barriers.",
      controls: [
        "Perimeter fencing with intrusion detection",
        "Mantrap entry vestibules",
        "Biometric + card access control",
        "24/7 on-site security personnel",
        "Video surveillance with 90-day retention",
      ],
    },
    {
      icon: Lock,
      title: "Network Security",
      description: "Defense-in-depth architecture with firewalls, IDS/IPS, DDoS mitigation, and micro-segmentation.",
      controls: [
        "Next-gen firewalls with deep packet inspection",
        "Intrusion detection & prevention systems",
        "100+ Gbps DDoS mitigation",
        "Network micro-segmentation",
        "Encrypted VPN tunnels (IPsec, TLS 1.3)",
      ],
    },
    {
      icon: Eye,
      title: "Monitoring & Detection",
      description: "Real-time security monitoring with SIEM, threat intelligence, and automated incident response.",
      controls: [
        "24/7 Security Operations Center (SOC)",
        "SIEM with AI-driven anomaly detection",
        "Threat intelligence feeds",
        "Automated incident response workflows",
        "Quarterly penetration testing",
      ],
    },
    {
      icon: FileCheck,
      title: "Compliance & Governance",
      description: "Multi-framework compliance with regular audits, certifications, and policy enforcement.",
      controls: [
        "SOC 2 Type II compliance",
        "ISO 27001 certified",
        "PIPEDA & privacy regulations",
        "Annual third-party audits",
        "Data residency guarantees",
      ],
    },
  ]

  const certifications = [
    { name: "SOC 2 Type II", status: "Certified" },
    { name: "ISO 27001", status: "Certified" },
    { name: "PIPEDA Compliant", status: "Verified" },
    { name: "CSA STAR", status: "In Progress" },
  ]

  return (
    <PageLayout
      title="Security Architecture for Critical Workloads"
      subtitle="Government-grade protection with multi-layer defense, compliance frameworks, and 24/7 monitoring"
    >
      {/* Security Layers */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Defense-in-Depth Security</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {securityLayers.map((layer, idx) => {
            const Icon = layer.icon
            return (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-primary/20 bg-card/50 hover:border-primary/40 transition-all"
              >
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{layer.title}</h3>
                <p className="text-accent mb-6">{layer.description}</p>
                <ul className="space-y-2">
                  {layer.controls.map((control, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-accent">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {control}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Data Protection */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 via-secondary/20 to-primary/10 rounded-2xl p-12 border border-primary/20"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Data Protection & Encryption</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-primary mb-4">At Rest</h4>
              <ul className="space-y-3">
                {[
                  "AES-256 encryption for all storage volumes",
                  "Customer-managed encryption keys (BYOK)",
                  "Hardware security modules (HSM)",
                  "Automated key rotation",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-accent">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-primary mb-4">In Transit</h4>
              <ul className="space-y-3">
                {[
                  "TLS 1.3 for all API communications",
                  "IPsec VPN for site-to-site connections",
                  "MACsec for layer 2 encryption",
                  "Perfect forward secrecy (PFS)",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-accent">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Compliance & Certifications */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Compliance & Certifications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border border-primary/20 bg-secondary/30 text-center"
            >
              <h4 className="text-lg font-semibold text-white mb-2">{cert.name}</h4>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                {cert.status}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="bg-card/50 rounded-xl p-8 border border-primary/20">
          <h3 className="text-xl font-bold text-white mb-4">Regulatory Compliance</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "PIPEDA",
                description: "Full compliance with Personal Information Protection and Electronic Documents Act",
              },
              {
                title: "Provincial Privacy Laws",
                description: "Adherence to Alberta PIPA and other provincial data protection regulations",
              },
              {
                title: "Data Residency",
                description: "100% Canadian data storage with sovereignty guarantees for federal and provincial workloads",
              },
            ].map((item, idx) => (
              <div key={idx}>
                <h5 className="text-base font-semibold text-primary mb-2">{item.title}</h5>
                <p className="text-sm text-accent">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-secondary via-primary/10 to-secondary rounded-2xl p-12 border border-primary/20"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Incident Response Protocol</h2>
          <p className="text-accent mb-8">
            24/7 Security Operations Center with defined escalation procedures and automated response workflows.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { phase: "Detection", time: "< 5 min", description: "Automated threat detection and alerting" },
              { phase: "Analysis", time: "< 15 min", description: "SOC team investigation and classification" },
              { phase: "Containment", time: "< 30 min", description: "Threat isolation and mitigation" },
              { phase: "Recovery", time: "< 2 hrs", description: "System restoration and post-incident review" },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-primary">{idx + 1}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-1">{step.phase}</h4>
                <p className="text-sm text-primary font-semibold mb-2">{step.time}</p>
                <p className="text-xs text-accent">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </PageLayout>
  )
}
