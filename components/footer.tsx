"use client"

import { motion } from "framer-motion"
import { Linkedin, Youtube, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Pages",
      links: [
        { label: "Home", href: "/" },
        { label: "Platform", href: "/platform" },
        { label: "Energy", href: "/energy" },
        { label: "AI Infrastructure", href: "/ai-infrastructure" },
        { label: "Cloud", href: "/cloud" },
        { label: "Location", href: "/location" },
        { label: "HavenzHub", href: "/havenzhub" },
        { label: "Partners", href: "/partners" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "havenz.ai", href: "https://www.havenz.ai" },
        { label: "energyhaven.ai", href: "https://www.energyhaven.ai" },
        { label: "ahicampus.com", href: "https://www.ahicampus.com" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "Accessibility", href: "/accessibility-statement" },
      ],
    },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/havenz-smart-communities/?viewAsMember=true", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@havenzsmartcommunities", label: "YouTube" },
    { icon: Mail, href: "mailto:info@havenzcorp.com", label: "Email" },
  ]

  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-t border-primary/20">
      {/* Ambient data flow background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 255, 200, 0.3)" />
              <stop offset="100%" stopColor="rgba(12, 27, 51, 0.3)" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerGradient)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Top section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-primary/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center mb-4">
              <Image src="/images/ahi-ai-hub-of-innovation-horizontal-white.png" alt="AHI AI Hub of Innovation" width={180} height={45} className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm">
              Canada's first hydrogen-ready AI compute and data infrastructure campus.
            </p>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center sm:text-left text-sm text-muted-foreground">
            <p>© {currentYear} AHI Data Centre. All rights reserved.</p>
            <p className="mt-2">
              Contact: <span className="text-primary">info@havenzcorp.com</span>
            </p>
          </div>

          {/* Social icons */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, i) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:border-primary hover:bg-primary/10 transition-all"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0, 255, 200, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
