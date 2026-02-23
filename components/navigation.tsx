"use client"

import { Menu, X, ChevronDown } from 'lucide-react'
import { useState } from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import Image from "next/image"

interface NavigationProps {
  scrolled?: boolean
}

interface SubMenuItem {
  label: string
  href: string
  subItems?: SubMenuItem[]
}

interface NavItem {
  label: string
  href: string
  subItems?: SubMenuItem[]
}

export default function Navigation({ scrolled = false }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)
  const [openMobileNestedSubmenu, setOpenMobileNestedSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Platform", href: "/platform" },
    { label: "Energy", href: "/energy" },
    { label: "AI Infrastructure", href: "/ai-infrastructure" },
    {
      label: "Cloud",
      href: "/cloud",
      subItems: [
        {
          label: "Compute",
          href: "/cloud/compute",
          subItems: [
            { label: "Starter Node", href: "/compute/starter-node" },
            { label: "Enterprise Cluster", href: "/compute/enterprise" },
            { label: "Sovereign Suite", href: "/compute/sovereign" },
          ]
        },
        { label: "Storage", href: "/cloud/storage" },
        { label: "Networking", href: "/cloud/networking" },
        { label: "Security", href: "/cloud/security" },
      ]
    },
    { label: "Location", href: "/location" },
    { label: "HavenzHub", href: "/havenzhub" },
    { label: "Partners", href: "/partners" },
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
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.subItems && setOpenDropdown(item.label)}
              onMouseLeave={() => item.subItems && setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={`text-sm transition-colors relative group flex items-center gap-1 py-2 ${
                  isActive(item.href) ? "text-primary font-semibold" : "text-accent hover:text-primary"
                }`}
              >
                {item.label}
                {item.subItems && <ChevronDown className="w-3 h-3" />}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>

              {/* Dropdown menu */}
              {item.subItems && openDropdown === item.label && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-56 bg-background/95 backdrop-blur-lg border border-primary/20 rounded-lg shadow-lg py-2">
                    {item.subItems.map((subItem) => (
                      <div key={subItem.label} className="relative group/sub">
                        <Link
                          href={subItem.href}
                          className={`block px-4 py-2 text-sm transition-colors flex items-center justify-between ${
                            isActive(subItem.href) ? "text-primary font-semibold bg-primary/10" : "text-accent hover:text-primary hover:bg-primary/5"
                          }`}
                        >
                          {subItem.label}
                          {subItem.subItems && <ChevronDown className="w-3 h-3 -rotate-90" />}
                        </Link>

                        {/* Nested dropdown for Compute */}
                        {subItem.subItems && (
                          <div className="absolute left-full top-0 pl-1">
                            <div className="w-56 bg-background/95 backdrop-blur-lg border border-primary/20 rounded-lg shadow-lg py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all">
                              {subItem.subItems.map((nestedItem) => (
                                <Link
                                  key={nestedItem.label}
                                  href={nestedItem.href}
                                  className={`block px-4 py-2 text-sm transition-colors ${
                                    isActive(nestedItem.href) ? "text-primary font-semibold bg-primary/10" : "text-accent hover:text-primary hover:bg-primary/5"
                                  }`}
                                >
                                  {nestedItem.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className={`block text-sm transition-colors flex-1 ${
                      isActive(item.href) ? "text-primary font-semibold" : "text-accent hover:text-primary"
                    }`}
                    onClick={() => !item.subItems && setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <button
                      onClick={() => setOpenMobileSubmenu(openMobileSubmenu === item.label ? null : item.label)}
                      className="p-2 text-accent hover:text-primary"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${openMobileSubmenu === item.label ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>

                {/* Mobile submenu */}
                {item.subItems && openMobileSubmenu === item.label && (
                  <div className="mt-2 ml-4 space-y-2 border-l-2 border-primary/20 pl-4">
                    {item.subItems.map((subItem) => (
                      <div key={subItem.label}>
                        <div className="flex items-center justify-between">
                          <Link
                            href={subItem.href}
                            className={`block text-sm transition-colors flex-1 ${
                              isActive(subItem.href) ? "text-primary font-semibold" : "text-accent hover:text-primary"
                            }`}
                            onClick={() => !subItem.subItems && setMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                          {subItem.subItems && (
                            <button
                              onClick={() => setOpenMobileNestedSubmenu(openMobileNestedSubmenu === subItem.label ? null : subItem.label)}
                              className="p-2 text-accent hover:text-primary"
                            >
                              <ChevronDown className={`w-4 h-4 transition-transform ${openMobileNestedSubmenu === subItem.label ? 'rotate-180' : ''}`} />
                            </button>
                          )}
                        </div>

                        {/* Nested mobile submenu for Compute */}
                        {subItem.subItems && openMobileNestedSubmenu === subItem.label && (
                          <div className="mt-2 ml-4 space-y-2 border-l-2 border-primary/20 pl-4">
                            {subItem.subItems.map((nestedItem) => (
                              <Link
                                key={nestedItem.label}
                                href={nestedItem.href}
                                className={`block text-sm transition-colors ${
                                  isActive(nestedItem.href) ? "text-primary font-semibold" : "text-accent hover:text-primary"
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {nestedItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
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
