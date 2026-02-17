"use client"

import { useRef } from "react"

export default function DataFlowOverlay() {
  const containerRef = useRef<HTMLDivElement>(null)


  return (
    <>
      <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Small floating particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`flow-${i}`}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-data 4s linear infinite`,
              animationDelay: `${i * 0.25}s`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float-data {
          0% {
            transform: translate(0, -10vh) translateX(-50%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(0, 110vh) translateX(-50%);
            opacity: 0;
          }
        }
        
      `}</style>
    </>
  )
}
