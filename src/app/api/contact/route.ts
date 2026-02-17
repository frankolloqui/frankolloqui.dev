import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Here you would integrate with an email service like:
    // - Nodemailer
    // - SendGrid
    // - Resend
    // - AWS SES
    // - etc.

    // For now, just log it and return success
    console.log("Contact form submission:", { name, email, message });

    // TODO: Implement actual email sending service
    // Example with Resend:
    // const response = await resend.emails.send({
    //   from: "contact@frankolloqui.dev",
    //   to: email,
    //   replyTo: email,
    //   subject: `New message from ${name}`,
    //   html: `<p>${message}</p>`,
    // });

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
