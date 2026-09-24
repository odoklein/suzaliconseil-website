ALTER TABLE "posts" ADD COLUMN "target_keyword" text;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "meta_keywords" text;--> statement-breakpoint
ALTER TABLE "posts" ADD COLUMN "faq" jsonb;