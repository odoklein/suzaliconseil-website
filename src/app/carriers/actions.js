"use server";

import { db } from "../../lib/db";
import { careerApplications } from "../../db/schema";
import { sendMail } from "../../lib/mail";

const MAX_CV_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_CV_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

export async function submitCareerApplication(formData) {
  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const position = formData.get("position");
  const linkedInUrl = formData.get("linkedInUrl");
  const message = formData.get("message");
  const cvFile = formData.get("cv") instanceof File ? formData.get("cv") : null;

  if (!fullName || !email || !position) {
    return {
      success: false,
      error: "Veuillez remplir tous les champs obligatoires (nom, email, poste).",
    };
  }

  let cvFileName = null;
  if (cvFile && cvFile.size > 0) {
    if (cvFile.size > MAX_CV_SIZE) {
      return { success: false, error: "Le CV ne doit pas dépasser 5 Mo." };
    }
    if (!ALLOWED_CV_TYPES.includes(cvFile.type)) {
      return { success: false, error: "Le CV doit être un PDF ou un document Word." };
    }
    cvFileName = cvFile.name;
    // Mock: we don't upload the file yet; only store the filename for frontend/DB
  }

  try {
    await db.insert(careerApplications).values({
      fullName,
      email,
      phone: phone || null,
      position,
      linkedInUrl: linkedInUrl || null,
      cvFileName: cvFileName || null,
      message: message || null,
    });

    const to = process.env.CAREERS_TO || process.env.CONTACT_TO || process.env.SMTP_USER;
    if (to) {
      const cvInfo = cvFileName ? `\nCV joint: ${cvFileName}` : "";
      await sendMail({
        to,
        replyTo: email,
        subject: `[Carrières] Candidature: ${position} - ${fullName}`,
        text: `Nom: ${fullName}\nEmail: ${email}\nTéléphone: ${phone || "-"}\nPoste: ${position}\nLinkedIn: ${linkedInUrl || "-"}${cvInfo}\n\nMessage:\n${message || "-"}`,
        html: `<p><strong>Nom:</strong> ${fullName}</p><p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p><p><strong>Téléphone:</strong> ${phone || "-"}</p><p><strong>Poste visé:</strong> ${position}</p><p><strong>LinkedIn:</strong> ${linkedInUrl ? `<a href="${linkedInUrl}">${linkedInUrl}</a>` : "-"}${cvFileName ? `</p><p><strong>CV joint:</strong> ${cvFileName}` : ""}</p><p><strong>Message:</strong></p><p>${(message || "-").replace(/\n/g, "<br>")}</p>`,
      });
    }
    return { success: true, message: "Candidature envoyée avec succès ! Nous vous recontacterons rapidement." };
  } catch (error) {
    console.error("Error submitting career application:", error);
    return {
      success: false,
      error: "Une erreur est survenue. Veuillez réessayer.",
    };
  }
}
