import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"
// import BreadcrumbNavigation from "@/components/breadcrumb-navigation"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "AHI Data Centre @ Havenz | Canada's Sovereign AI Compute Infrastructure",
  description:
    "Experience the future of AI compute. The AHI Data Centre at Havenz offers 10MW+ of hydrogen-ready, low-carbon AI data capacity — powered by clean energy, Indigenous partnership, and sovereign infrastructure.",
  generator: "Next.js",
  applicationName: "AHI Data Centre",
  referrer: "strict-origin-when-cross-origin",
  keywords: [
    "AI Compute",
    "Data Centre Canada",
    "Havenz Tech",
    "Denvr Dataworks",
    "Hydrogen Ready Data Center",
    "Sovereign AI",
    "ESG Infrastructure",
    "Red Deer Alberta",
    "Energy Haven",
    "Modular Data Centres",
    "Rolls-Royce MTU",
    "Clean Power AI",
  ],
  authors: [{ name: "Havenz Corp", url: "https://www.havenz.ai" }],
  creator: "Havenz Corp",
  publisher: "Havenz Corp",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.havenz.ai/datacentre",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.havenz.ai/datacentre",
    title: "AHI Data Centre @ Havenz",
    description:
      "10 MW of AI-Grade Power in 2,300 sq ft – scalable to 10,000+ sq ft. Canada's first hydrogen-ready AI data centre.",
    siteName: "Havenz",
    images: [
      {
        url: "https://www.havenz.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "AHI Data Centre - Sovereign AI Infrastructure",
        type: "image/png",
      },
      {
        url: "https://www.havenz.ai/og-image-square.png",
        width: 800,
        height: 800,
        alt: "AHI Data Centre - Sovereign AI Infrastructure",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@havenztech",
    creator: "@havenztech",
    title: "AHI Data Centre @ Havenz",
    description:
      "10 MW of AI-Grade Power in 2,300 sq ft – scalable to 10,000+ sq ft. Canada's first hydrogen-ready AI data centre.",
    images: ["https://www.havenz.ai/og-image.png"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  formatDetection: {
    email: false,
    telephone: false,
  },
  manifest: "/manifest.json",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Havenz Corp",
              url: "https://www.havenz.ai",
              logo: "https://www.havenz.ai/logo.png",
              description:
                "Canada's sovereign AI compute infrastructure powered by clean energy and Indigenous partnership.",
              sameAs: ["https://twitter.com/havenztech", "https://www.linkedin.com/company/havenz-corp"],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                email: "info@havenzcorp.com",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "AHI Data Centre @ Havenz",
              description: "Hydrogen-ready AI compute infrastructure in Red Deer, Alberta",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Red Deer",
                addressLocality: "Red Deer",
                addressRegion: "AB",
                postalCode: "T4N",
                addressCountry: "CA",
              },
              telephone: "+1-403-XXX-XXXX",
              email: "info@havenzcorp.com",
              url: "https://www.havenz.ai/datacentre",
              image: "https://www.havenz.ai/og-image.png",
              priceRange: "$$",
              areaServed: ["CA", "US"],
            }),
          }}
        />
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#00ffc8" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="AHI Data Centre" />
        <meta name="color-scheme" content="dark light" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
