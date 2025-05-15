"use client";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";
export const HeroSection = () => {
  const router = useRouter();
  return (
    <div>
      <div className="relative w-full h-screen flex items-center justify-center">
        <div className="absolute w-full inset-0 flex items-center justify-center opacity-10 text-neutral-500  pointer-events-none">
          <Lock absoluteStrokeWidth size={800} />{" "}
          {/* Use the Lucide Lock icon */}
        </div>
        <div className="max-w-7xl h-screen flex flex-col justify-evenly ">
          <motion.div
            initial={{ y: 10, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 1 }}
            className="  flex justify-center mt-4 "
          >
            <div className=" flex justify-evenly  py-4 w-[55%] rounded-2xl">
              <p>Home</p>
              <p>About</p>
              <p>Info</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ filter: "blur(10px)" }}
            animate={{ filter: "blur(0px)" }}
            transition={{ ease: "easeIn", duration: 0.25 }}
            className="container h-full flex flex-col items-center justify-center"
          >
            <h1 className="text-neutral-400 text-center ">#securedocs</h1>
            <h1 className="text-5xl text-center tracking-widest">
              Proof of Documents.
            </h1>
            <p className="mt-8 text-lg text-neutral-300">
              Get you documents on{" "}
              <span className="tracking-widest">SOLANA</span> blockchain
            </p>
            <Button
              onClick={() => {
                router.push("/upload");
              }}
              variant={"outline"}
              className="mt-4 text-orange-400 text-lg repeat-2"
            >
              Secure now
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
