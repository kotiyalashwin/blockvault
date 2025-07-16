import * as motion from "motion/react-client";
import { Button } from "./ui/button";
import { Lock } from "lucide-react";
import Link from "next/link";
import { Barlow, Instrument_Serif, Inter, PT_Serif, Source_Serif_4, Space_Mono } from "next/font/google";



const inter = Inter({
  // variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"], // Add weights as needed
});

const ptSerif = PT_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"], // Add weights as needed
});

const barlow = Barlow({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400" });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const HeroSection = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      {/* Background Lock Icon */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-5">
        <Lock
          absoluteStrokeWidth
          size={800}
          className="animate-pulse text-zinc-400/10"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center p-8 text-center">
        {/* Top Banner */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 rounded-full border border-orange-500 bg-orange-400/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-400"
        >
          Please enable Devnet Mode in Wallets
        </motion.p>

        {/* Logo/Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-zinc-500"
        >
          BlockVault
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className={`${instrumentSerif.className} text-5xl font-normal leading-tight md:text-7xl`}
        >
          Anchor Documents.
          <br />
          Prove Authenticity.
        </motion.h1>

        {/* Sub-heading/Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 max-w-xl text-lg text-zinc-400 md:text-xl"
        >
          Secure your most important files on the Solana blockchain.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5, type: "spring" }}
          className="mt-12"
        >
          <Button className="group relative rounded-full border-2 border-orange-500 bg-gradient-to-r from-orange-500/20 to-amber-500/20 px-8 py-3 text-lg font-bold text-orange-400 transition-all duration-300 hover:from-orange-500/30 hover:to-amber-500/30 hover:shadow-[0_0_20px_rgba(251,146,60,0.5)]">
            <Link
              href="/upload"
              className={`${spaceMono.className} relative z-10 transition-colors duration-300 group-hover:text-orange-300`}
            >
              Secure Now
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};