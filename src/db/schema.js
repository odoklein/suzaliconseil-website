import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

// 0. Clients (for portal – companies we do SDR/meetings for)
export const clients = pgTable("clients", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  email: text("email").notNull(),
  portalToken: text("portal_token").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

// 1. Offers (Packages/Services)
export const offers = pgTable("offers", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(), // e.g., "Pack Standard", "Custom"
  price: text("price"), // e.g. "990€"
  category: text("category").notNull().default("growth"),
  description: text("description"),
  features: text("features").array(),
  createdAt: timestamp("created_at").defaultNow(),
});

// 2. Leads (Offer Requests)
export const leads = pgTable("leads", {
  id: uuid("id").defaultRandom().primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  companyName: text("company_name"),
  offerId: uuid("offer_id").references(() => offers.id), // Link to chosen offer
  message: text("message"), // Optional note
  status: text("status").default("new"), // new, contacted, closed
  createdAt: timestamp("created_at").defaultNow(),
});

// 3. Contacts (General Inquiries)
export const contacts = pgTable("contacts", {
  id: uuid("id").defaultRandom().primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  status: text("status").default("new"),
  createdAt: timestamp("created_at").defaultNow(),
});

// 4. Projects (Collaborations/Portfolio)
export const projects = pgTable("projects", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  tags: text("tags").array(),
  link: text("link"),
  createdAt: timestamp("created_at").defaultNow(),
});

// 5. Career Applications (Recruitment)
export const careerApplications = pgTable("career_applications", {
  id: uuid("id").defaultRandom().primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  position: text("position").notNull(),
  linkedInUrl: text("linked_in_url"),
  cvFileName: text("cv_file_name"),
  message: text("message"),
  status: text("status").default("new"),
  createdAt: timestamp("created_at").defaultNow(),
});

// 6. SDR contacts (prospects contacted by SDR, per client)
export const sdrContacts = pgTable("sdr_contacts", {
  id: uuid("id").defaultRandom().primaryKey(),
  clientId: uuid("client_id").notNull().references(() => clients.id, { onDelete: "cascade" }),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  status: text("status").notNull().default("contacted"), // contacted, meeting_scheduled, qualified, closed_won, closed_lost
  contactedAt: timestamp("contacted_at").defaultNow(),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
});

// 7. Meetings (booked meetings, per client)
export const meetings = pgTable("meetings", {
  id: uuid("id").defaultRandom().primaryKey(),
  clientId: uuid("client_id").notNull().references(() => clients.id, { onDelete: "cascade" }),
  sdrContactId: uuid("sdr_contact_id").references(() => sdrContacts.id, { onDelete: "set null" }),
  title: text("title").notNull(),
  scheduledAt: timestamp("scheduled_at").notNull(),
  status: text("status").notNull().default("scheduled"), // scheduled, completed, cancelled, no_show
  meetingUrl: text("meeting_url"),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
});

// 8. Posts (Actualities / Blog)
export const posts = pgTable("posts", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull(),
  excerpt: text("excerpt"),
  seoTitle: text("seo_title"),
  seoDescription: text("seo_description"),
  content: text("content").notNull(),
  coverImageUrl: text("cover_image_url"),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
  source: text("source").default("manual"), // "manual" | "auto"
  topic: text("topic").default("commercial"), // "commercial" | "digital" (from Gemini when auto-generated)
});

// 9. Content generator settings (singleton for cron + admin)
export const contentGeneratorSettings = pgTable("content_generator_settings", {
  id: uuid("id").defaultRandom().primaryKey(),
  frequencyPerWeek: text("frequency_per_week").notNull().default("3"), // "2" | "3" | "4"
  tone: text("tone").notNull().default("expert"), // "expert" | "accessible" | "professional"
  autoPublish: text("auto_publish").notNull().default("true"), // "true" | "false"
  lastRunAt: timestamp("last_run_at"),
  updatedAt: timestamp("updated_at").defaultNow(),
});
