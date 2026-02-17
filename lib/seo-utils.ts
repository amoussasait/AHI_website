/**
 * SEO Utility Functions
 * Helper functions for generating meta tags and structured data
 */

export interface SEOConfig {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: string
  twitterHandle?: string
}

/**
 * Generate standard meta tags
 */
export function generateMetaTags(config: SEOConfig) {
  return {
    title: config.title,
    description: config.description,
    openGraph: {
      title: config.title,
      description: config.description,
      type: config.ogType || "website",
      images: config.ogImage
        ? [
            {
              url: config.ogImage,
              width: 1200,
              height: 630,
              alt: config.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      site: config.twitterHandle || "@havenztech",
      title: config.title,
      description: config.description,
      images: config.ogImage ? [config.ogImage] : undefined,
    },
  }
}

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Havenz Corp",
    url: "https://www.havenz.ai",
    logo: "https://www.havenz.ai/logo.png",
    description: "Canada's sovereign AI compute infrastructure powered by clean energy",
    sameAs: ["https://twitter.com/havenztech", "https://www.linkedin.com/company/havenz-corp"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "info@havenzcorp.com",
    },
  }
}

/**
 * Generate LocalBusiness schema
 */
export function generateLocalBusinessSchema() {
  return {
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
    email: "info@havenzcorp.com",
    url: "https://www.havenz.ai/datacentre",
    areaServed: ["CA", "US"],
  }
}
