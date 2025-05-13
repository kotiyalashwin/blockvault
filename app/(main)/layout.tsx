import { Toaster } from "@/components/ui/sonner";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function ({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  } else {
    return (
      <div>
        <Toaster position="top-center" richColors />
        {children}
      </div>
    );
  }
}
