"use client";

import axios from "axios";
import { FormEvent, useRef, useState, useTransition } from "react";
import { toast } from "sonner";

export default function FileForm() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState(false);
  const [presigned, setPresigned] = useState<string | null>(null);
  const filRef = useRef<HTMLInputElement | null>(null);

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
      const appURL = process.env.APP_BASE_API as string;
      console.log(appURL);

      //get presigned url
      const preSigned = await axios.get(
        `/api/s3-upload-url?filename=${file?.name}&mimetype=${file?.type}`
      );
      if (preSigned.status === 200) {
        setPresigned(preSigned.data.signedURL);
      } else {
        toast.error("Presigned URL not generated Refresh");
        return;
      }

      if (!presigned) {
        toast.error("Try Again");
        return;
      }

      //upload to s3
      const res = await axios.put(presigned, file, {
        headers: {
          ContentType: file.type, // Important: set the correct content type
        },
      });

      if (res.status === 200) {
        toast.success("Uploaded Successfully");
      } else {
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
    <div className="container">
      <form onSubmit={handleFileUpload}>
        <input type="file" ref={filRef} />
        <button disabled={isPending} type="submit">
          Upload
        </button>
        {error && <p className="text-red-400">Some Error Occured</p>}
      </form>
    </div>
    // </>
  );
}
