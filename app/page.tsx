import * as motion from "motion/react-client";

import { HeroSection } from "@/components/herosection";
import WorkFlow from "@/components/workflow";

export default function Home() {
  return (
    <>
      <div className=" relative w-full h-full">
        <div className="absolute w-full h-full inset-0 opacity-35 hero-bg Z-0 " />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, ease: "circIn", duration: 2 }}
          className="absolute inset-0 h-full w-full hero-gradient opacity-75 Z-10 "
        />
        <div className="relative s ">
          {/* Hero */}
          <HeroSection />
          {/* workflow */}
          <WorkFlow />
        </div>
      </div>
    </>
  );
}
