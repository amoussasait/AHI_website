"use client"

import DatacenterBackground from "@/components/datacenter-background"

export default function AccessibilityStatement() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-secondary via-background to-background py-12 px-4">
      <DatacenterBackground />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary">Accessibility Statement</h1>

        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Commitment to Accessibility</h2>
            <p className="mb-4">
              The AHI Data Centre @ Havenz website is committed to ensuring digital accessibility for people with
              disabilities. We are continually improving user experience for everyone and applying relevant
              accessibility standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">WCAG 2.1 Compliance</h2>
            <p className="mb-4">
              This website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA success
              criteria set by the World Wide Web Consortium (W3C).
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Perceivable: Information and user interface components are perceivable</li>
              <li>Operable: Interface components are operable through keyboard and other means</li>
              <li>Understandable: Text and operations are understandable</li>
              <li>Robust: Compatible with current and future assistive technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Accessibility Features</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>High-contrast color schemes supporting dark mode</li>
              <li>Semantic HTML structure for screen reader compatibility</li>
              <li>Keyboard navigation support for all interactive elements</li>
              <li>Alt text for all images and visual content</li>
              <li>Proper heading hierarchy for document structure</li>
              <li>ARIA labels and roles for enhanced accessibility</li>
              <li>Focus indicators clearly visible on all interactive elements</li>
              <li>Respects prefers-reduced-motion for animated content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Accessibility Support</h2>
            <p className="mb-4">
              If you experience accessibility issues or have suggestions for improvement, please contact us:
            </p>
            <a href="mailto:accessibility@havenzcorp.com" className="text-primary hover:underline font-semibold">
              accessibility@havenzcorp.com
            </a>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground">
              We are committed to ensuring that embedded content from third-party services meets accessibility standards
              where possible. If you notice inaccessible embedded content, please notify us.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
