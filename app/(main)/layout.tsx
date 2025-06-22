import { Toaster } from "@/components/ui/sonner";
import { auth, signOut } from "@/lib/auth";
import { DoorOpen, LogOut } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    console.log("No session");
    redirect("/signin");
  }

  return (
    <div>
      <Toaster position="top-center" richColors />
      <div className="absolute max-w-3xl w-full z-10 mt-8">
        <ul className="flex justify-center space-x-4 underline decoration-orange-400 underline-offset-4">
          <li>
            <Link
              className="hover:bg-white/25  p-2  rounded-2xl transition-all ease-in-out"
              href={"/documents"}
            >
              My Documents
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-white/25  p-2  rounded-2xl transition-all ease-in-out"
              href={"/upload"}
            >
              Anchor Document
            </Link>
          </li>
          <li className="hover:bg-white/25 px-2 rounded-2xl transition-all ease-in-out">
            <form>
              <button
                className="flex items-center gap-2 cursor-pointer"
                formAction={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                LogOut <LogOut />
              </button>
            </form>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
}
