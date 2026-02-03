import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Create transporter for sending emails
const createTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Ensure environment variables exist
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: "Email service not configured: missing EMAIL_USER or EMAIL_PASS. See EMAIL_SETUP.md." },
        { status: 500 },
      )
    }

    // Create email transporter
    const transporter = createTransporter()

    // Verify connection/auth with a quick check to surface precise errors
    try {
      await transporter.verify()
    } catch (verifyErr) {
      const msg = verifyErr instanceof Error ? verifyErr.message : "Unknown transport verification error"
      return NextResponse.json(
        { error: `Email transport verification failed: ${msg}` },
        { status: 500 },
      )
    }

    // Email content for you (notification)
    const notificationEmailOptions = {
      from: {
        name: "Portfolio Contact",
        address: process.env.EMAIL_USER as string,
      },
      to: "chandansh82@gmail.com",
      subject: `New Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>

          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h3 style="color: #1e293b; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #374151;">${message}</p>
          </div>

          <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af; font-size: 14px;">
              <strong>Reply to:</strong> ${email}
            </p>
          </div>
        </div>
      `,
    }

    // Auto-reply email for the sender
    const autoReplyOptions = {
      from: {
        name: "Ansh Pratap Chand",
        address: process.env.EMAIL_USER as string,
      },
      to: email,
      subject: "Thank you for contacting Ansh Pratap Chand",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Thank You for Reaching Out!
          </h2>
          
          <p style="color: #374151; line-height: 1.6;">Hi ${name},</p>
          
          <p style="color: #374151; line-height: 1.6;">
            Thank you for contacting me through my portfolio website. I've received your message and will get back to you as soon as possible.
          </p>

          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Your Message:</h3>
            <p style="color: #6b7280; font-style: italic;">"${message}"</p>
          </div>

          <p style="color: #374151; line-height: 1.6;">
            I typically respond within 24-48 hours. In the meantime, feel free to check out my projects on 
            <a href="https://github.com/anshpratap" style="color: #2563eb;">GitHub</a> or connect with me on 
            <a href="https://www.linkedin.com/in/ansh88/" style="color: #2563eb;">LinkedIn</a>.
          </p>

          <div style="margin-top: 30px; padding: 20px; background-color: #dbeafe; border-radius: 8px;">
            <p style="margin: 0; color: #1e40af;">
              <strong>Best regards,</strong><br>
              Ansh Pratap Chand<br>
              Full Stack Developer & ML Enthusiast<br>
              <a href="mailto:chandansh82@gmail.com" style="color: #2563eb;">chandansh82@gmail.com</a>
            </p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail({ ...notificationEmailOptions, replyTo: email }),
      transporter.sendMail(autoReplyOptions),
    ])

    // Log the submission
    console.log("Contact form submission processed:", {
      name,
      email,
      message: message.substring(0, 100) + "...",
      timestamp: new Date().toISOString(),
      status: "emails_sent",
    })

    return NextResponse.json(
      {
        message: "Message sent successfully! You'll receive a confirmation email shortly.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing contact form:", error)

    const base = error instanceof Error ? error.message : "Unknown error"

    // Check if it's an email-related error
    if (error instanceof Error && (error.message.includes("auth") || error.message.includes("login"))) {
      return NextResponse.json(
        {
          error: `Email service configuration error: ${base}. Ensure Gmail App Password is used.`,
        },
        { status: 500 },
      )
    }

    return NextResponse.json(
      {
        error: `Failed to send message: ${base}`,
      },
      { status: 500 },
    )
  }
}
