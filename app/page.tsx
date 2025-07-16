import * as motion from "motion/react-client";

import { HeroSection } from "@/components/herosection";
import { Workflow } from "@/components/workflow";
import Features from "@/components/features";
import { FaqSection } from "@/components/faq";
import Link from "next/link";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export default function Home() {
  return (
    <>
      <div className=" relative w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute w-full h-full inset-0  hero-bg Z-0 "
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, ease: "circIn", duration: 2 }}
          className="absolute inset-0 h-full w-full hero-gradient opacity-75 Z-10 "
        />
        <div className="relative">
          {/* Hero */}
          <HeroSection />
          {/* workflow */}
          <Features />
          <Workflow />
          <FaqSection />
        </div>
      </div>
      <div className={`sticky inset-0 text-center text-sm ${spaceMono.className} opacity-60 bg-black/30 py-4`}>
        Built by{" "}
        <Link
          target="_blank"
          className="underline text-orange-400"
          href={"https://x.com/ashwinntwt"}
        >
          <span>Ashwin </span>
        </Link>
        
      </div>
    </>
  );
}
