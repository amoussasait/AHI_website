"use client"

export default function HolographicCTA({ children }) {
  return (
    <div className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">{children}</div>
    </div>
  )
}
