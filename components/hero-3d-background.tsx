"use client"

import { useEffect, useRef, useState } from "react"

export default function Hero3DBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth * window.devicePixelRatio
    canvas.height = canvas.offsetHeight * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
    }> = []

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx + (mousePos.x - 0.5) * 0.5
        p.y += p.vy + (mousePos.y - 0.5) * 0.5

        // Wrap around edges
        if (p.x < 0) p.x = canvas.offsetWidth
        if (p.x > canvas.offsetWidth) p.x = 0
        if (p.y < 0) p.y = canvas.offsetHeight
        if (p.y > canvas.offsetHeight) p.y = 0

        // Draw glowing particles
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3)
        gradient.addColorStop(0, `rgba(0, 255, 200, ${p.opacity * 0.8})`)
        gradient.addColorStop(1, `rgba(0, 255, 200, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(p.x - p.radius * 3, p.y - p.radius * 3, p.radius * 6, p.radius * 6)
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animationId)
  }, [mousePos])

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
    </div>
  )
}
