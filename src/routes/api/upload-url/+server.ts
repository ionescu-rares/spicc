// src/routes/api/upload-url/+server.ts
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { json } from "@sveltejs/kit";
import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from "$env/static/private";

const region = "eu-north-1";
const bucketName = "spicc";
const s3 = new S3Client({
  region,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  },
});
export async function POST({ request }) {
  const { fileName, fileType } = await request.json();

  const params = {
    Bucket: bucketName,
    Key: fileName,
    ContentType: fileType,
  };

  const command = new PutObjectCommand(params);

  try {
    const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });
    return json({ uploadUrl });
  } catch (error) {
    return json({ error: "Failed to generate upload URL" }, { status: 500 });
  }
}
