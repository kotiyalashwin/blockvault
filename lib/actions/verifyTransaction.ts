"use server";

import { prisma } from "@/lib/db";
type VerificationState =
  | { error: string; data?: undefined }
  | {
      data: { fileUrl: string; txHash: string | null; uploader: string | null };
      error?: undefined;
    };

export async function verifyTransaction(
  _prevState: VerificationState,
  formData: FormData
): Promise<VerificationState> {
  const txHash = formData.get("txHash")?.toString().trim();

  if (!txHash) {
    return { error: "Transaction hash is required." };
  }

  const details = await prisma.document.findFirst({
    where: { txhash: txHash },
    include: { user: true },
  });

  if (!details) {
    return { error: "No document found for this transaction." };
  }

  return {
    data: {
      // uploader: document.,
      // fileName: document.originalFileName,
      // uploadedAt: document.,
      uploader: details.user.name,
      fileUrl: details.fileurl,
      txHash: details.txhash,
    },
  };
}
