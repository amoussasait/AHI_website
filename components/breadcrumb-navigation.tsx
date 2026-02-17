"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function BreadcrumbNavigation() {
  const pathname = usePathname()

  // Define breadcrumb structure
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Data Centre", href: "/datacentre" },
  ]

  // Filter to current path
  const currentBreadcrumbs = pathname === "/" ? [breadcrumbs[0]] : breadcrumbs

  return (
    <nav
      aria-label="Breadcrumb"
      className="py-4 px-4 md:px-8 max-w-7xl mx-auto"
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      <ol className="flex items-center gap-2 text-sm text-muted-foreground">
        {currentBreadcrumbs.map((crumb, index) => (
          <li key={crumb.href} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            {index > 0 && <ChevronRight className="inline w-4 h-4 mx-1" />}
            {index === currentBreadcrumbs.length - 1 ? (
              <span itemProp="name" className="text-foreground font-medium">
                {crumb.label}
              </span>
            ) : (
              <Link href={crumb.href} itemProp="item" className="hover:text-primary transition-colors">
                <span itemProp="name">{crumb.label}</span>
              </Link>
            )}
            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  )
}
