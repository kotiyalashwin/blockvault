"use client";

import axios from "axios";
import { FormEvent, useRef, useState, useTransition } from "react";
import { toast } from "sonner";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import { PT_Serif } from "next/font/google";
import { Inter } from "next/font/google";
import { Space_Mono } from "next/font/google";

const ptSerif = PT_Serif({ subsets: ["latin"], weight: ["400", "700"] });
const inter = Inter({ subsets: ["latin"] });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export default function FileForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [presigned, setPresigned] = useState<string>("");
  const filRef = useRef<HTMLInputElement | null>(null);
  const [redirectURL, setRedirectURL] = useState("");
  const router = useRouter();

  const handleFileUpload = async (e: FormEvent) => {
    e.preventDefault();
    setError(false);
    setIsLoading(true);
    try {
      const file = filRef.current?.files?.[0];
      //file checks
      if (!file) {
        toast.warning("Please select a file first");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        // Check if file size is greater than 5MB
        console.error("File size exceeds 5MB");
        return;
      }
      

      //get presigned url
      const preSigned = await axios.get(
        `/api/s3-upload-url?filename=${file?.name}&mimetype=${file?.type}`
      );
      if (preSigned.status === 200) {
        setPresigned(preSigned.data.signedURL);
      } else if (!presigned) {
        toast.error("Presigned URL not generated Refresh");
        return;
      }

      //upload to s3
      const res = await axios.put(presigned, file, {
        headers: {
          ContentType: file.type,
        },
      });

      if (res.status === 200) {
        const cdn = process.env.NEXT_PUBLIC_CDN!;
        toast.success("Uploaded Successfully");
        // console.log(`${cdn}/${file.name}`);
        setRedirectURL(`${cdn}/${file.name}`);
      } else {
        toast.error("Try again.");
        setError(true);
      }
      console.log(res);
    } catch (e) {
      console.log(e);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // <>
    <Card className="containers px-4 w-full">
      <CardHeader>
        <CardTitle className="underline decoration-orange-400 text-2xl text-center">
          What you want to secure?
        </CardTitle>
      </CardHeader>
      <form
        onSubmit={handleFileUpload}
        className="flex flex-col items-center gap-4"
      >
        <h2 className={`${ptSerif.className} text-2xl font-semibold mb-4`}>
          Upload Your Document
        </h2>
        <div className="flex flex-col gap-4">
          <Label className="w-full">Choose your file:</Label>
          <Input type="file" ref={filRef} />
        </div>
        <div className="flex gap-2">
          <Button disabled={isLoading} type="submit">
            {isLoading ? <Loader className="animate-spin" /> : "Upload"}
          </Button>
          {!error && presigned && redirectURL && (
            <Button
              onClick={() => {
                router.push(
                  `/onchain?fileurl=${encodeURIComponent(redirectURL)}`
                );
              }}
            >
              Put on Chain
            </Button>
          )}
        </div>
        {error && <p className="text-red-400">Some Error Occured</p>}
        <div className="mt-4">
          <span className={`${spaceMono.className} text-xs text-gray-500`}>
            File hash: 0x1234abcd...
          </span>
        </div>
      </form>
    </Card>
    // </>
  );
}
