"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function EmptyPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the static HTML presentation with cache buster
    window.location.href = `/presentation.html?v=${Date.now()}`
  }, [])

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#141414",
      color: "#00ffc8",
      fontFamily: "monospace"
    }}>
      <div>Loading presentation...</div>
    </div>
  )
}
