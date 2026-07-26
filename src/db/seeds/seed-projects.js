import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

// Inline schema for projects
const projects = pgTable("projects", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  tags: text("tags").array(),
  link: text("link"),
  createdAt: timestamp("created_at").defaultNow(),
});

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.error("DATABASE_URL is not defined.");
    process.exit(1);
  }

  const client = postgres(connectionString);
  const db = drizzle(client);

  console.log("🌱 Seeding projects...");

  const allProjects = [
    {
      title: "Portail de dons & impact social",
      description:
        "Site dynamique avec tableau de bord pour suivre l’impact des projets.",
      imageUrl: "/projects/ekozaliFondation.png",
      tags: ["Dashboard", "Web"],
    },
    {
      title: "Gestion chauffeurs & clients",
      description:
        "Plateforme de réservation avec espace client et suivi en temps réel.",
      imageUrl: "/projects/mobiService.png",
      tags: ["Plateforme", "Suivi"],
    },
    {
      title: "Automatisation des SMS",
      description:
        "Mise en place d’un système d’envoi automatique de SMS pour rappeler les sessions aux élèves et tuteurs, relié directement au CRM.",
      imageUrl: "/projects/zupdeco.jpg",
      tags: ["Automation", "CRM"],
    },
    {
      title: "Génération de rendez-vous en ligne",
      description:
        "Campagne de téléprospection et tunnel de réservation en ligne intégrés pour les investisseurs.",
      imageUrl: "/projects/investissementLocatif.png",
      tags: ["Acquisition", "Conversion"],
    },
    {
      title: "Logiciel de tracking colis",
      description:
        "Développement d’un tableau de bord connecté permettant aux entreprises de suivre l’état de leurs livraisons en temps réel, avec alertes automatiques.",
      imageUrl: "/projects/neotrace.png",
      tags: ["Logistique", "Temps réel"],
    },
  ];

  try {
    await db.delete(projects);
    await db.insert(projects).values(allProjects);
    console.log(`✅ Successfully seeded ${allProjects.length} projects!`);
  } catch (error) {
    console.error("❌ Error seeding projects:", error);
  } finally {
    await client.end();
  }
}

main();
