"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function MobileNavigationEnhanced() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Platform", href: "/platform" },
    { label: "Energy", href: "/energy" },
    { label: "AI Infrastructure", href: "/ai-infrastructure" },
    { label: "Cloud", href: "/cloud" },
    { label: "Location", href: "/location" },
    { label: "HavenzHub", href: "/havenzhub" },
    { label: "Partners", href: "/partners" },
    { label: "Contact", href: "/contact" },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <button
        onClick={toggleMenu}
        className="md:hidden z-50 p-2 hover:bg-secondary rounded-lg transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed right-0 top-0 h-full w-64 bg-secondary z-40 md:hidden pt-20 px-6"
              role="navigation"
              aria-label="Mobile menu"
            >
              <ul className="space-y-4">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                  className="pt-4 border-t border-border"
                >
                  <a href="mailto:info@havenzcorp.com" className="text-primary font-semibold hover:underline">
                    Get in Touch
                  </a>
                </motion.li>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
