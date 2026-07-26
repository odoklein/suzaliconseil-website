import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { OFFER_CATEGORIES } from "../../lib/offers-catalog.js";

const offers = pgTable("offers", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  price: text("price"),
  category: text("category"),
  description: text("description"),
  features: text("features").array(),
  createdAt: timestamp("created_at").defaultNow(),
});

const leads = pgTable("leads", {
  id: uuid("id").defaultRandom().primaryKey(),
  offerId: uuid("offer_id"),
});

const allOffers = OFFER_CATEGORIES.flatMap((category) =>
  category.sections.flatMap((section) =>
    section.offers.map((offer) => ({
      category: category.id,
      name: offer.name,
      price: [offer.price, offer.billing].filter(Boolean).join(" "),
      description: offer.subscription
        ? `${offer.description} ${offer.subscription}.`
        : offer.description,
      features: offer.features,
    })),
  ),
);

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.error("DATABASE_URL is not defined.");
    process.exit(1);
  }

  const client = postgres(connectionString);
  const db = drizzle(client);

  console.log(`Seeding ${allOffers.length} current offers...`);

  try {
    await db
      .update(leads)
      .set({ offerId: null })
      .catch(() =>
        console.log("Leads table unavailable or empty, proceeding..."),
      );

    await db.delete(offers);
    await db.insert(offers).values(allOffers);
    console.log(`Successfully seeded ${allOffers.length} offers.`);
  } catch (error) {
    console.error("Error seeding offers:", error);
  } finally {
    await client.end();
  }
}

main();
