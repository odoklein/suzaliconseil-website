# Suzali Migration - WordPress to Next.js

Modern Next.js application for Suzali Conseil, migrated from WordPress.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: PostgreSQL (Supabase)
- **ORM**: Drizzle ORM

## Getting Started

### Prerequisites

- Node.js 20+
- Docker Desktop (for local Supabase)

### Installation

```bash
npm install
```

### Local Development

1. Start Supabase:

```bash
npx supabase start
```

2. Apply database schema:

```bash
npx drizzle-kit push
```

3. Seed database with content:

```bash
npx tsx scripts/seed.ts
```

4. Start development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
└── db/
    ├── schema.ts     # Database schema
    └── seeds/        # Seed data from WordPress
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run db:push` - Apply database schema to Neon
- `npm run db:migrate-posts` - Import posts from Supabase to Neon
- `npm run s3:migrate-images` - Upload post cover images to S3 and update URLs in Neon
- `npx tsx scripts/export-wp.ts` - Re-export content from WordPress
- `npx tsx scripts/seed.ts` - Seed database

## Design System

### Colors

- Primary (Red): `#C10723`
- Secondary (Dark): `#191919`
- Surface: `#F3F5F2`

### Typography

- Body: Helvetica, Arial
- Headings: Bebas Neue (uppercase)

## S3 Image Migration

To migrate local `public/assets/images` files to S3:

1. **Set up AWS credentials** in `.env.local`:
   ```
   AWS_ACCESS_KEY_ID=your_access_key
   AWS_SECRET_ACCESS_KEY=your_secret_key
   AWS_REGION=us-east-1
   S3_BUCKET_NAME=your-bucket-name
   S3_BASE_URL=https://your-bucket.s3.amazonaws.com  # Optional, auto-generated if not set
   S3_PREFIX=assets/images/  # Optional, default: "assets/images/"
   ```

2. **Place your images** in `public/assets/images/` directory

3. **Run the migration**:
   ```bash
   npm run s3:migrate-images
   ```

   The script will:
   - Upload all image files from `public/assets/images/` to S3
   - Update any posts that reference `/assets/images/` in their `cover_image_url` to point to S3 URLs
   - Skip images already in S3 (idempotent)

## Documentation

See [MIGRATION_REPORT.md](./MIGRATION_REPORT.md) for detailed migration documentation.

## License

Private - Suzali Conseil
