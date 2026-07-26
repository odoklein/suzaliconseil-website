import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const bucket = process.env.S3_BUCKET_NAME;
const region = process.env.AWS_REGION || "eu-north-1";
const baseUrl = process.env.S3_BASE_URL;

if (!bucket) {
  throw new Error("S3_BUCKET_NAME is not set");
}

const s3 = new S3Client({
  region,
  credentials:
    process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY
      ? {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        }
      : undefined,
});

/**
 * Upload un buffer vers S3 et retourne l'URL publique.
 * @param {string} key - Clé S3 (ex: "actualites/2025/02/xxx.png")
 * @param {Buffer} body - Contenu binaire
 * @param {string} contentType - ex: "image/png"
 * @returns {Promise<string>} URL publique du fichier
 */
export async function uploadBuffer(key, body, contentType = "image/png") {
  await s3.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: body,
      ContentType: contentType,
    })
  );
  if (baseUrl) {
    const base = baseUrl.replace(/\/$/, "");
    return `${base}/${key.split("/").map(encodeURIComponent).join("/")}`;
  }
  return `https://${bucket}.s3.${region}.amazonaws.com/${encodeURIComponent(key)}`;
}
