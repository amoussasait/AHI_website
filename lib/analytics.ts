export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, eventData)
  }
}

export const trackPageView = (path: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID || "", {
      page_path: path,
    })
  }
}

export const trackConversion = (value: number, currency = "CAD") => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "purchase", {
      value,
      currency,
    })
  }
}
