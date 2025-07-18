"use client";

import { verifyTransaction } from "@/lib/actions/verifyTransaction";
import Link from "next/link";
import { useActionState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle,
  Download,
  Search,
  X,
} from "lucide-react";

export default function VerifyPage() {
  const initialState = { error: "", data: undefined };
  const [state, formAction] = useActionState(verifyTransaction, initialState);

  return (
    <div>
      <div className="absolute w-full h-screen opacity-15 inset-0 hero-bg z-0 " />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="absolute top-4 right-4 z-20">
          <Link href="/" passHref>
            <Button variant="ghost" size="icon" aria-label="Close">
              <X className="h-6 w-6" />
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-orange-400/20 text-orange-500">
              Transaction Verification Tool
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-50 mb-4">
            Verify Documents. Prove Authenticity.
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Enter a transaction hash to retrieve and verify document details
            stored on the blockchain
          </p>
        </div>

        <Card className="max-w-2xl mx-auto mb-8 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-gray-200 dark:border-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-gray-50 flex items-center gap-2">
              <Search className="h-5 w-5 text-orange-400" />
              Transaction Lookup
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Enter the Solana transaction hash to fetch document details.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="flex gap-2">
              <Input
                type="text"
                name="txHash"
                placeholder="Enter Solana Transaction Hash..."
                className="bg-white/50 dark:bg-black/50 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-50 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-orange-400 focus:ring-orange-400"
                required
              />
              <Button
                type="submit"
                className="bg-orange-400 hover:bg-orange-500 text-white min-w-[120px] shadow-lg"
              >
                <Search className="h-4 w-4 mr-2" />
                Verify
              </Button>
            </form>
          </CardContent>
        </Card>

        {(state?.error || state?.data) && (
          <div className="max-w-2xl mx-auto">
            {state?.error && (
              <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-500/30 text-red-800 dark:text-red-400 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Verification Failed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{state.error}</p>
                </CardContent>
              </Card>
            )}

            {state?.data && (
              <Card className="bg-white/80 dark:bg-black/80 backdrop-blur-sm border-gray-200 dark:border-gray-800 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-600 dark:text-green-500">
                    <CheckCircle className="h-5 w-5" />
                    Verification Successful
                  </CardTitle>
                  <CardDescription>
                    Document details retrieved from the blockchain.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-700 dark:text-gray-300 text-sm mb-1">
                      Uploader
                    </p>
                    <p className="font-mono text-xl text-orange-400 p-2 rounded-md break-all">
                      <strong>{state.data.uploader}</strong>
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 dark:text-gray-300 text-sm mb-1">
                      Transaction Hash
                    </p>
                    <p className="font-mono text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded-md break-all">
                      {state.data.txHash}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <Button
                      asChild
                      className="bg-orange-400 hover:bg-orange-500 text-white"
                    >
                      <Link
                        href={`https://${state.data.fileUrl}`}
                        target="_blank"
                        className="inline-flex items-center"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Document
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant={"outline"}
                      className="border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-50"
                    >
                      <Link
                        href={`https://explorer.solana.com/tx/${state.data.txHash}?cluster=devnet`}
                        target="_blank"
                        className="inline-flex items-center"
                      >
                        View on Explorer
                        <ArrowUpRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
        <div className="text-center mt-16">
          <p className="text-gray-500">
            Built by{" "}
            <Link href={"https://x.com/ashwinntwt"}>
              <span className="text-orange-400 font-semibold">ASHWIN</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
