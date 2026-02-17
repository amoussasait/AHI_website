"use client"

import { Menu, X } from 'lucide-react'
import { useState } from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import Image from "next/image"

interface NavigationProps {
  scrolled?: boolean
}

export default function Navigation({ scrolled = false }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
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

  const isActive = (href: string) => pathname === href

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-primary/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/ahi-ai-hub-of-innovation-horizontal-white.png" 
              alt="AHI AI Hub of Innovation" 
              width={200} 
              height={50} 
              className="h-10 w-auto" 
            />
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className={`text-sm transition-colors relative group ${
                  isActive(item.href) ? "text-primary font-semibold" : "text-accent hover:text-primary"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div>
          <Link
            href="/contact"
            className="hidden sm:inline-block px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/80 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-accent" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-primary/20">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`block text-sm transition-colors ${
                  isActive(item.href) ? "text-primary font-semibold" : "text-accent hover:text-primary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-sm text-center hover:bg-primary/80 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
