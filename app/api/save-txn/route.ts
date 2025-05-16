import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { tr } from "motion/react-client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    const { fileurl, txHash } = await req.json();
    console.log(fileurl, txHash);
    await prisma.document.create({
      data: {
        fileurl: fileurl as string,
        txhash: txHash as string,
        onchain: true,
        userid: session?.user.id as string,
      },
    });
    return NextResponse.json({ message: "Transaction saved successfully" });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Failed to save transaction" },
      { status: 500 }
    );
  }
}
