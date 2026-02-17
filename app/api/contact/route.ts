import { type NextRequest, NextResponse } from "next/server"

interface ContactFormData {
  name: string
  email: string
  company?: string
  message: string
}

// Simple validation function
function validateContactData(data: unknown): data is ContactFormData {
  if (typeof data !== "object" || data === null) return false

  const obj = data as Record<string, unknown>
  return (
    typeof obj.name === "string" &&
    typeof obj.email === "string" &&
    (obj.company === undefined || typeof obj.company === "string") &&
    typeof obj.message === "string" &&
    obj.name.length > 0 &&
    obj.email.length > 0 &&
    obj.message.length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(obj.email)
  )
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate request data
    if (!validateContactData(data)) {
      return NextResponse.json({ error: "Invalid request data" }, { status: 400 })
    }

    // TODO: Integrate with email service (SendGrid, Mailgun, etc.)
    console.log("[v0] Contact form submission:", data)

    // Placeholder: In production, send to your email service
    // Example: await sendEmail(data)

    return NextResponse.json({ message: "Your message has been received. We'll be in touch soon!" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function OPTIONS(request: NextRequest) {
  return NextResponse.json(
    { message: "OK" },
    {
      headers: {
        "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_SITE_URL || "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    },
  )
}
