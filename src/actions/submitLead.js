"use server";

import { db } from "../lib/db";
import { leads } from "../db/schema";
import { sendMail } from "../lib/mail";

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export async function submitLead(formData) {
  const offerId = formData.get("offerId");
  const offerName = formData.get("offerName");
  const message = formData.get("message");

  const rawData = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    companyName: formData.get("companyName"),
    offerId: UUID_PATTERN.test(offerId || "") ? offerId : null,
    message: offerName
      ? [`Offre demandée: ${offerName}`, message].filter(Boolean).join("\n\n")
      : message,
  };

  if (!rawData.fullName || !rawData.email) {
    return {
      success: false,
      error: "Veuillez remplir tous les champs obligatoires.",
    };
  }

  try {
    await db.insert(leads).values({
      fullName: rawData.fullName,
      email: rawData.email,
      phone: rawData.phone,
      companyName: rawData.companyName,
      offerId: rawData.offerId,
      message: rawData.message,
    });

    const to = process.env.LEADS_TO || process.env.CONTACT_TO || process.env.SMTP_USER;
    if (to) {
      const subject = offerName
        ? `[Offre] ${offerName} — ${rawData.fullName}`
        : `[Offre] Nouvelle demande de ${rawData.fullName}`;
      const lines = [
        `Nom: ${rawData.fullName}`,
        `Email: ${rawData.email}`,
        `Téléphone: ${rawData.phone || "-"}`,
        `Société: ${rawData.companyName || "-"}`,
        "",
        rawData.message || "",
      ];
      try {
        await sendMail({
          to,
          replyTo: rawData.email,
          subject,
          text: lines.join("\n"),
        });
      } catch (mailError) {
        console.error("Failed to send lead notification email:", mailError);
      }
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to submit lead:", error);
    return {
      success: false,
      error: "Une erreur est survenue lors de l'envoi.",
    };
  }
}
