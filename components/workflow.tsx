import * as motion from "motion/react-client";
import { WorkingCard } from "./WorkingCard";
import { Instrument_Serif } from "next/font/google";


const instrumentSerif = Instrument_Serif({
  // variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
  weight: "400"
});

const workingCards = [
  {
    title: "Upload Your Document",
    description: "Securely upload PDFs or other files",
    flex: "start",
    delay: 0.5,
  },
  {
    title: "Anchor to the Blockchain",
    description:
      "A unique hash of your document is generated and anchored to the Solana blockchain, creating an immutable record.",
    flex: "end",
    delay: 1,
  },
  {
    title: "Receive a Verification Certificate",
    description:
      "Get a timestamped certificate containing the blockchain transaction ID—your proof of authenticity.",
    flex: "start",
    delay: 1.5,
  },
];

export const Workflow = () => {
  return (
    <div className="min-h-screen flex overflow-hidden justify-center  pt-10 space-y-8  drop-shadow-2xl drop-shadow-orange-400 ">
      <div className="w-full max-w-7xl ">
        <div className="flex flex-col min-h-screen justify-start ">
          <h1 className={`text-5xl text-center ${instrumentSerif.className}`}>
            HOW{" "}
            <motion.span
              initial={{ filter: "blur(10px)" }}
              whileInView={{ filter: "blur(0px)" }}
              transition={{ duration: 0.75, delay: 0.5 }}
              className="text-orange-400"
            >
              BlockVault
            </motion.span>{" "}
            WORKS
          </h1>
          <div className="mt-10 w-full flex flex-col gap-4 h-full relative ">
            <div className="absolute top-32 left-1/2 transform rounded-lg -translate-x-1/2 z-0 w-1 h-16 bg-black/30 overflow-hidden">
              <motion.div
                className="w-full h-8 bg-gradient-to-b from-transparent via-orange-400 to-transparent"
                initial={{ y: "-100%" }}
                whileInView={{ y: "calc(100% + 32px)" }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              />
            </div>

            <div className="absolute top-80 left-1/2 transform -translate-x-1/2 z-0 w-1 h-16 bg-black/30 overflow-hidden">
              <motion.div
                className="w-full h-8 bg-gradient-to-b from-transparent via-orange-400 to-transparent"
                initial={{ y: "-100%", opacity: 0 }}
                whileInView={{ opacity: 1, y: "calc(100% + 32px)" }}
                transition={{
                  duration: 2,
                  delay: 2,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              />
            </div>

            {workingCards.map((card, i) => (
              <div className="relative" key={i}>
                {/* Flow line animation for each step */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 z-0 w-1 h-16 bg-black/30 overflow-hidden"
                  style={{ top: "40px" }} // Adjust top spacing if needed to align with card
                >
                  <motion.div
                    className="w-full h-8 bg-gradient-to-b from-transparent via-orange-400 to-transparent"
                    initial={{ y: "-100%" }}
                    whileInView={{ y: "calc(100% + 32px)" }}
                    transition={{
                      duration: 2,
                      delay: 2,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* The actual card */}
                <WorkingCard
                  delay={card.delay}
                  title={card.title}
                  description={card.description}
                  flex={card.flex}
                />
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};
