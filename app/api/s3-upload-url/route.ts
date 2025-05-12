import { PutObjectCommand } from "@aws-sdk/client-s3";
import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { s3Client } from "@/lib/s3";

//this returns a AWS-S3 presigned URL
export async function GET(req: NextRequest) {
  //if not a get req return
  const url = new URL(req.url);

  const filename = url.searchParams.get("filename");
  const mimetype = url.searchParams.get("mimetype");

  if (!filename) {
    return NextResponse.json({ error: "Filename Missing" }, { status: 400 });
  }

  try {
    //get the file extention like .txt/.pdf/.docx etc etc
    const [name, fileExt] = filename.split(".");
    const random = randomUUID();
    // console.log(random);

    //uniquely identify the file

    //TODO:
    //1. When introduce auth, create a foder for that user specifically
    //right now we are just uploading everything into the upload folder
    const key = `upload/${name}.${fileExt}`;

    //creates the upload command
    const upload = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME! as string,
      Key: key,
      ContentType: "application/octet-stream",
    });

    const signedURL = await getSignedUrl(s3Client, upload, { expiresIn: 60 });
    const fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

    return NextResponse.json({ signedURL: signedURL, fileUrl: fileUrl });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Something Went Wrong" },
      { status: 500 }
    );
  }
}
