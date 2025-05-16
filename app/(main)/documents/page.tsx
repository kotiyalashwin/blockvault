// app/dashboard/DocumentsList.tsx
import { prisma } from "@/lib/db";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Adjust this import path to your shadcn ui table components
import { auth } from "@/lib/auth";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { File, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { p } from "motion/react-client";

export default async function DocumentsList() {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return <p>Please log in to see your documents.</p>;
  }

  const documents = await prisma.document.findMany({
    where: { userid: userId },
    select: {
      fileurl: true,
      txhash: true,
      onchain: true,
    },
  });

  return (
    <div>
      <div className="absolute w-full h-screen inset-0 opacity-35 hero-bg Z-0 " />
      <div className=" h-screen relative">
        <div className="flex justify-center h-full items-center">
          <div className="w-full max-w-7xl">
            <Card>
              <CardTitle className="text-center text-xl text-orange-400">
                Documents on BlockVault{" "}
              </CardTitle>
              <CardContent>
                {documents.length === 0 ? (
                  <p className="text-center">No documents </p>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>File URL</TableHead>
                        <TableHead>Transaction Hash</TableHead>
                        <TableHead>On Chain</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {documents.map(({ fileurl, txhash, onchain }, idx) => (
                        <TableRow key={idx} className="group">
                          <TableCell className="font-medium border-l-2 border-transparent group-hover:border-orange-400 transition-colors py-4">
                            <a
                              href={`https://${fileurl}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center"
                            >
                              <File />
                              {fileurl}
                            </a>
                          </TableCell>
                          <TableCell className="border-transparent group-hover:border-orange-400 transition-colors py-4">
                            {txhash ? (
                              <a
                                href={`https://explorer.solana.com/tx/${txhash}?cluster=devnet`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                <Link2 />
                                {`${txhash.slice(0, 6)}...${txhash.slice(-4)} `}
                              </a>
                            ) : (
                              "Not anchored yet"
                            )}
                          </TableCell>
                          <TableCell className="border-r-2 border-transparent items-center gap-4 group-hover:border-orange-400 transition-colors py-4 flex">
                            <div
                              className={`rounded-lg py-2 w-full text-center ${
                                onchain
                                  ? "text-green-200 border bg-green-200/10 border-green-600"
                                  : "text-red-200 bg-red-200/10 border border-red-400"
                              }`}
                            >
                              {onchain ? "True" : "False"}
                            </div>
                            {onchain ? (
                              ""
                            ) : (
                              <>
                                <Button>
                                  <Link href={`/upload/${fileurl}`}>
                                    Add on Chain
                                  </Link>
                                </Button>
                              </>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
