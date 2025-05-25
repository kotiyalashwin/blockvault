import * as motion from "motion/react-client";
import { Button } from "./ui/button";
import { Lock } from "lucide-react";
import Link from "next/link";
export const HeroSection = () => {
  return (
    <div>
      <div className="relative w-full h-screen flex items-center justify-center">
        <div className="absolute w-full inset-0 flex items-center justify-center opacity-10 text-neutral-500  pointer-events-none">
          <Lock absoluteStrokeWidth size={800} />{" "}
          {/* Use the Lucide Lock icon */}
        </div>
        <div className="max-w-7xl h-screen flex flex-col justify-center ">
          {/* <motion.div
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
          </motion.div> */}
          <motion.div
            initial={{ filter: "blur(10px)" }}
            animate={{ filter: "blur(0px)" }}
            transition={{ ease: "easeIn", duration: 0.25 }}
            className="h-full flex flex-col items-center justify-center gap-8"
          >
            <p className="border animate-pulse border-orange-400 rounded-lg px-2 py-1 bg-amber-600/20 text-orange-400">
              Please enable Devnet Mode in Wallets
            </p>
            <h1 className="text-neutral-400 text-center ">#securedocs</h1>
            <h1 className="text-5xl text-center ">
              Anchor Documents. Prove Authenticity.
            </h1>
            <p className="mt-8 text-lg text-neutral-300 text-center">
              Secure your most important files on the Solana blockchain.
            </p>
            <Button
              variant={"outline"}
              className="mt-4 text-orange-400 text-lg repeat-2"
            >
              <Link href="/upload">Secure now</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
