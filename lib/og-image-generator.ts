/**
 * Open Graph Image Generation Configuration
 * For production, these URLs should point to your CDN or Vercel Blob storage
 */

export const ogImageConfig = {
  default: {
    url: "https://www.havenz.ai/og-image.png",
    width: 1200,
    height: 630,
    alt: "AHI Data Centre @ Havenz - Canada's Sovereign AI Compute Infrastructure",
  },
  square: {
    url: "https://www.havenz.ai/og-image-square.png",
    width: 800,
    height: 800,
    alt: "AHI Data Centre @ Havenz - Sovereign AI Infrastructure",
  },
  social: {
    twitter: "https://www.havenz.ai/og-image-twitter.png",
    linkedin: "https://www.havenz.ai/og-image-linkedin.png",
  },
}

/**
 * Generate OG image URL with dynamic content
 * To be used with Vercel OG Image Generation or similar service
 */
export function generateOGImage(title: string, description?: string) {
  const params = new URLSearchParams({
    title,
    ...(description && { description }),
  })

  return `https://www.havenz.ai/api/og?${params.toString()}`
}
