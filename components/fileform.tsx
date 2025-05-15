"use client";

import axios from "axios";
import { FormEvent, useRef, useState, useTransition } from "react";
import { toast } from "sonner";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function FileForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState(false);
  const [presigned, setPresigned] = useState<string>("");
  const filRef = useRef<HTMLInputElement | null>(null);
  const [redirectURL, setRedirectURL] = useState("");
  const router = useRouter();

  const handleFileUpload = async (e: FormEvent) => {
    e.preventDefault();
    setError(false);
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
      // const appURL = process.env.APP_BASE_API as string;

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
        <div className="flex flex-col gap-4">
          <Label className="w-full">Choose your file:</Label>
          <Input type="file" ref={filRef} />
        </div>
        <div className="flex gap-2">
          <Button disabled={isPending} type="submit">
            Upload
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
      </form>
    </Card>
    // </>
  );
}
