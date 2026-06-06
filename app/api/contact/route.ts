import nodemailer from "nodemailer";
import { contact } from "../../content/portfolio";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

const adminEmail = process.env.CONTACT_TO_EMAIL ?? contact.email;

function readText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = readText(body.name);
    const email = readText(body.email);
    const message = readText(body.message);

    if (!name || !email || !message) {
      return Response.json(
        { error: "Please fill in your name, email, and message." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const smtpUser = process.env.SMTP_USER ?? contact.email;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpPass) {
      return Response.json(
        { error: "SMTP password is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST ?? "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT ?? 465),
      secure: (process.env.SMTP_SECURE ?? "true") === "true",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL ?? `"Portfolio Contact" <${smtpUser}>`,
      to: adminEmail,
      replyTo: email,
      subject: `New portfolio inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #1d1b17; line-height: 1.6;">
          <h2 style="margin: 0 0 16px;">New portfolio inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-line;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact form email failed:", error);

    return Response.json(
      { error: "Unable to send your message right now." },
      { status: 500 }
    );
  }
}
