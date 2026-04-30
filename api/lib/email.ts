import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = "onboarding@resend.dev"; // Using default resend domain for testing

export async function sendEmail(
  to: string,
  subject: string, 
  html: string
): Promise<void> {
  try {
    await resend.emails.send({ 
      from: FROM, 
      to: [to], 
      subject, 
      html 
    });
  } catch (error) {
    console.error("Email send failed:", error);
  }
}

export const EmailTemplates = {
  waitlistWelcome: (name: string, position: number) => `
    <div style="font-family: sans-serif; padding: 20px;">
      <h2>Welcome to Artha!</h2>
      <p>Hi ${name},</p>
      <p>You're successfully added to the waitlist. You are at position #${position}.</p>
      <p>We'll notify you when new investment opportunities go live.</p>
    </div>
  `,
  contactReceived: (name: string) => `
    <div style="font-family: sans-serif; padding: 20px;">
      <h2>We've received your message</h2>
      <p>Hi ${name},</p>
      <p>Thank you for reaching out. Our team will get back to you shortly.</p>
    </div>
  `
};
