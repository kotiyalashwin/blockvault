// "use server";

import { createHash } from "crypto";

export const GenHash = async (fileUrl: string): Promise<string> => {
  try {
    const response = await fetch(`https://${fileUrl}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch file from S3: ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();
    const hash = createHash("sha256").update(Buffer.from(buffer)).digest("hex");
    console.log(hash);

    return hash;
  } catch (error) {
    console.error("Hashing error:", error);
    throw new Error("Unable to hash the document.");
  }
};

GenHash("d34b5soyv42wkv.cloudfront.net/Js-Certificate.pdf");
