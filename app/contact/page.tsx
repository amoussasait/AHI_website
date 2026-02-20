"use client"

import type React from "react"

import { motion } from "framer-motion"
import PageLayout from "@/components/page-layout"
import { Mail, Linkedin } from "lucide-react"
import { useState } from "react"
import DatacenterBackground from "@/components/datacenter-background"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Submitting contact form:", form)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          subject: "Contact Form Submission",
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setForm({ name: "", email: "", message: "" })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <PageLayout title="Get in Touch" subtitle="Let's discuss how AHI Data Centre can power your AI future">
      <DatacenterBackground />
      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary">Contact Information</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3">
                  <Mail className="w-6 h-6" />
                  Email
                </h3>
                <a
                  href="mailto:info@havenzcorp.com"
                  className="text-accent hover:text-primary transition-colors text-lg"
                >
                  info@havenzcorp.com
                </a>
                <p className="text-muted-foreground mt-2">Response within 24 hours</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-3">
                  <Linkedin className="w-6 h-6" />
                  LinkedIn
                </h3>
                <a
                  href="https://linkedin.com/company/havenz-corp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary transition-colors text-lg"
                >
                  Connect on LinkedIn
                </a>
                <p className="text-muted-foreground mt-2">Follow for updates and announcements</p>
              </div>

              <div className="bg-gradient-to-r from-secondary via-primary/10 to-secondary rounded-lg p-6 border border-primary/20">
                <h3 className="text-lg font-semibold text-primary mb-3">Services & Inquiries</h3>
                <ul className="space-y-2 text-accent">
                  <li>• Compute capacity requests</li>
                  <li>• Partnership opportunities</li>
                  <li>• Facility tours</li>
                  <li>• Technical specifications</li>
                  <li>• Pricing & contracts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-accent mb-2">Your Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-primary/20 text-accent focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-accent mb-2">Email Address</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-primary/20 text-accent focus:outline-none focus:border-primary transition-colors"
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-accent mb-2">Your Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-primary/20 text-accent focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your project, requirements, and timeline..."
                  required
                />
              </div>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-primary/10 border border-primary/50 text-primary text-sm"
                >
                  Message sent successfully! We'll be in touch shortly.
                </motion.div>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/80 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-primary/20 via-secondary to-primary/20 rounded-2xl p-12 border border-primary/30 text-center">
          <h2 className="text-4xl font-bold mb-4 text-primary">Power Secured. Future Delivered.</h2>
          <p className="text-xl text-accent mb-8">
            Join the sovereign AI movement. Contact us today to explore how AHI Data Centre can accelerate your AI
            transformation.
          </p>
          <motion.a
            href="mailto:info@havenzcorp.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/80 transition-colors"
          >
            Email Us Today
          </motion.a>
        </div>
      </section>
    </PageLayout>
  )
}
