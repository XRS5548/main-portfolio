import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, message } = body

  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 })
  }

  try {
    // ✅ Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // ✅ Define mail options
    const mailOptions = {
      from: `"R-V49X Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `New Message from ${name} via R-V49X`,
      html: `
        <div style="font-family:Arial, sans-serif; padding:16px;">
          <h2 style="color:#007bff;">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background:#f7f7f7; padding:10px; border-radius:6px;">${message}</p>
          <br/>
          <p style="font-size:12px; color:#888;">— Sent from R-V49X Portfolio</p>
        </div>
      `,
    }

    // ✅ Send the email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'Message sent successfully 🚀' })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json(
      { message: 'Failed to send email ❌', error },
      { status: 500 }
    )
  }
}
