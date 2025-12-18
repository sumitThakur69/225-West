import { NextResponse } from 'next/server'
import { createClient } from '@sanity/client'
import { resend } from '@/lib/resend'
import { ContactFormEmail } from '@/emails/ContactFormEmail'
import { render } from '@react-email/render' // ADD THIS LINE

const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_API_TOKEN!,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const rateMap = new Map<string, number>()

function rateLimit(ip: string) {
  const now = Date.now()
  const last = rateMap.get(ip) || 0
  if (now - last < 60_000) return false
  rateMap.set(ip, now)
  return true
}

function validate(data: any) {
  if (!data.firstName || !data.lastName || !data.email || !data.message)
    return 'All required fields must be filled'

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return 'Invalid email address'

  return null
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get('x-forwarded-for') ??
      req.headers.get('x-real-ip') ??
      'unknown'

    if (!rateLimit(ip))
      return NextResponse.json(
        { success: false, message: 'Too many requests. Try later.' },
        { status: 429 }
      )

    const data = await req.json()
    const error = validate(data)
    if (error)
      return NextResponse.json({ success: false, message: error }, { status: 400 })

    const doc = {
      _type: 'contactSubmission',
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      email: data.email.toLowerCase(),
      eventType: data.eventType || 'General',
      message: data.message.trim(),
      subscribed: Boolean(data.subscribed),
      status: 'new',
    }

    const saved = await sanity.create(doc)

    // Render email HTML
    const emailHtml = await render(ContactFormEmail(doc))

    // Send email (fire-and-forget with better error logging)
    resend.emails.send({
      from: 'The Seed Hub <onboarding@resend.dev>',
      to: [process.env.ADMIN_EMAIL!],
      replyTo: data.email,
      subject: `New Inquiry – ${doc.firstName} ${doc.lastName}`,
      html: emailHtml,
    }).catch((err) => {
      console.error('Failed to send email:', err)
    })


    return NextResponse.json({
      success: true,
      message: 'Thanks for your message!',
      submissionId: saved._id,
    })
  } catch (err) {
    console.error(err)
    return NextResponse.json(
      { success: false, message: 'Server error. Please try again.' },
      { status: 500 }
    )
  }
}