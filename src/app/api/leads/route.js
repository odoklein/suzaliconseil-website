import { db } from "../../../lib/db";
import { leads } from "../../../db/schema";
import { NextResponse } from "next/server";

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, companyName, offerId, offerName, message } =
      body;

    // Basic validation
    if (!fullName || !email) {
      return NextResponse.json(
        { error: "Name and Email are required" },
        { status: 400 },
      );
    }

    // Insert into database
    const newLead = await db
      .insert(leads)
      .values({
        fullName,
        email,
        phone,
        companyName,
        offerId: UUID_PATTERN.test(offerId || "") ? offerId : null,
        message: offerName
          ? [`Offre demandée: ${offerName}`, message].filter(Boolean).join("\n\n")
          : message,
      })
      .returning();

    return NextResponse.json({ success: true, lead: newLead[0] });
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
