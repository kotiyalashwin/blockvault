import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import Wallet from "@/components/Wallet";

import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { notFound } from "next/navigation";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const url = (await searchParams).fileurl;
  if (!url) {
    notFound();
  }
  // console.log(hash);
  return (
    <div>
      <div className="absolute w-full h-screen inset-0 opacity-35 hero-bg Z-0 " />
      <div className=" h-screen relative">
        <div className="flex justify-center h-full items-center">
          <div className="w-full max-w-3xl">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Sign your document</CardTitle>
                <CardDescription>
                  Your document :{" "}
                  <a
                    className="hover:underline"
                    href={`https://${url}`}
                  >{`https://${url}`}</a>
                </CardDescription>
                <CardContent>
                  <Dialog>
                    <DialogTrigger className="mt-4" asChild>
                      <Button variant="outline">What we do?</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-orange-400">
                          BlockVault
                        </DialogTitle>
                        <DialogDescription className="text-neutral-400">
                          Know what happens under the hood
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex items-start flex-col space-x-2">
                        <li>Create a hash of file </li>
                        <li>Create a transaction with hash</li>
                        <li>User signs transaction with their wallet</li>
                        <li>
                          Permanent store on{" "}
                          <span className="tracking-widest text-orange-400">
                            SOLANA
                          </span>{" "}
                          blockchain
                        </li>
                      </div>
                      <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                          <Button type="button" variant="secondary">
                            Close
                          </Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Wallet url={url} />
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
