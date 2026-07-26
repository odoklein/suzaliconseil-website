import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import postgres from "postgres";

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.error("DATABASE_URL is not defined.");
    process.exit(1);
  }

  const sql = postgres(connectionString);
  console.log("🔧 Updating offers table schema...");

  try {
    // Add category column if it doesn't exist
    await sql`
      DO $$ 
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='offers' AND column_name='category') THEN
          ALTER TABLE offers ADD COLUMN category TEXT DEFAULT 'growth';
        END IF;
      END $$;
    `;
    console.log("✅ Added category column to offers");

    console.log("🎉 Schema update complete!");
  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await sql.end();
  }
}

main();
