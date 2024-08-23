import aws from "aws-sdk";
import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from "$env/static/private";
const region = "eu-central-1";
const bucketName = "travel-buddy-bucket";
const accessKeyId = AWS_ACCESS_KEY_ID;
const secretAccessKey = AWS_SECRET_ACCESS_KEY;
const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "v4",
});

export async function generateUploadURL(contentType: any) {
  const randomId = Math.floor(Math.random() * 10000 + 1);
  const imageName = randomId.toString();

  const params = {
    Bucket: bucketName,
    Key: imageName,
    Expires: 60,
    ContentType: contentType,
  };

  const uploadURL = await s3.getSignedUrlPromise("putObject", params);

  return uploadURL;
}
