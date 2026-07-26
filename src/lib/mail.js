import nodemailer from "nodemailer";

/**
 * SMTP config for Mailcow at mail.suzaliconseil.com.
 * Set in .env.local:
 *   SMTP_HOST=mail.suzaliconseil.com
 *   SMTP_PORT=587
 *   SMTP_SECURE=false
 *   SMTP_USER=noreply@suzaliconseil.com  (or contact@ - full email)
 *   SMTP_PASS=your-app-password-or-mailbox-password
 *   MAIL_FROM_NAME=Suzali Conseil
 *   CONTACT_TO=contact@suzaliconseil.com
 *   CAREERS_TO=contact@suzaliconseil.com
 */
function getTransporter() {
  const host = process.env.SMTP_HOST || "mail.suzaliconseil.com";
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
    tls: {
      rejectUnauthorized: process.env.SMTP_INSECURE !== "true",
    },
  });
}

/**
 * Send an email from your domain (e.g. noreply@suzaliconseil.com).
 * If SMTP is not configured (SMTP_USER/SMTP_PASS), does nothing and returns.
 * @param {object} options - { to, subject, text, html?, replyTo?, attachments? }
 */
export async function sendMail(options) {
  const transporter = getTransporter();
  if (!transporter) return;

  const from = process.env.MAIL_FROM || process.env.SMTP_USER;
  const fromName = process.env.MAIL_FROM_NAME || "Suzali Conseil";

  await transporter.sendMail({
    from: fromName ? `"${fromName}" <${from}>` : from,
    to: options.to,
    subject: options.subject,
    text: options.text,
    html: options.html ?? options.text?.replace(/\n/g, "<br>"),
    replyTo: options.replyTo,
    attachments: options.attachments,
  });
}

export default sendMail;
