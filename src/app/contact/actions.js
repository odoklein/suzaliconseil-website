"use server";

import { db } from "../../lib/db";
import { contacts } from "../../db/schema";
import { sendMail } from "../../lib/mail";

export async function submitContact(formData) {
  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!fullName || !email || !message) {
    return {
      success: false,
      error: "Veuillez remplir tous les champs obligatoires.",
    };
  }

  try {
    await db.insert(contacts).values({
      fullName,
      email,
      subject,
      message,
    });

    const to = process.env.CONTACT_TO || process.env.SMTP_USER;
    if (to) {
      try {
        await sendMail({
          to,
          replyTo: email,
          subject: subject ? `[Contact] ${subject}` : `[Contact] Message de ${fullName}`,
          text: `Nom: ${fullName}\nEmail: ${email}\nSujet: ${subject || "-"}\n\nMessage:\n${message}`,
          html: `<p><strong>Nom:</strong> ${fullName}</p><p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p><p><strong>Sujet:</strong> ${subject || "-"}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br>")}</p>`,
        });
      } catch (mailError) {
        console.error("Failed to send contact notification email:", mailError);
      }
    }
    return { success: true, message: "Message envoyé avec succès !" };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      error: "Une erreur est survenue. Veuillez réessayer.",
    };
  }
}
