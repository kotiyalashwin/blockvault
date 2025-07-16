import * as motion from "motion/react-client";
import { Instrument_Serif } from "next/font/google"; // Assuming these are used elsewhere or for consistency
import { ReactNode } from "react";

// Initialize fonts
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400" });


interface FeatureCardProps {
  number: string | number;
  title: string;
  description: string | ReactNode;
}


// Main Features Component
export default function Features() {
  return (
    // Main container for the Features section
    // Sets full screen height, centers content, applies background and text colors, and adds responsive padding
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-950 px-4 py-16 text-white md:px-8 ">
      {/* Main Heading */}
      {/* Animates in with opacity and slight Y-axis movement when in view */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.5 }} // Animates only once when 50% of the element is in view
        className={`${instrumentSerif.className} mb-16 text-center text-4xl leading-tight md:text-5xl drop-shadow-2xl drop-shadow-orange-400`}
      >
        A{" "}
        {/* Animated span for "SMARTER WAY" with blur and opacity effect */}
        <motion.span
          initial={{ filter: "blur(10px)", opacity: 0 }}
          whileInView={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-orange-400 "
        >
          Smarter Way
        </motion.span>{" "}
        TO SECURE YOUR DOCUMENTS
      </motion.h1>

      {/* Features List - Adjusted for alternating flow */}
      {/* Uses flex-col for stacking and increased gap for visual separation */}
      <div className="flex w-full flex-col items-center gap-24 md:max-w-6xl ">
        {/* Feature 1 Wrapper: Aligns card to the left on larger screens */}
        <motion.div
          initial={{ x: -100, opacity: 0 }} // Initial animation from left
          whileInView={{ x: 0, opacity: 1 }} // Animates to position
          transition={{ duration: 0.75, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex w-full justify-start" // Flex container to align the card
        >
          <FeatureCard
            number="1"
            title="SECURED"
            description="Tamper-free document protection using cryptographic hashes and digital signatures."
            // 'delay' and 'direction' props are now handled by the outer motion.div
          />
        </motion.div>

        {/* Feature 2 Wrapper: Aligns card to the right on larger screens */}
        <motion.div
          initial={{ x: 100, opacity: 0 }} // Initial animation from right
          whileInView={{ x: 0, opacity: 1 }} // Animates to position
          transition={{ duration: 0.75, delay: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex w-full justify-end" // Flex container to align the card
        >
          <FeatureCard
            number="2"
            title="ON-CHAIN"
            description={
              // Using a React Fragment for multi-part description with inline styling
              <>
                Leveraging{" "}
                <span className="font-bold tracking-widest underline decoration-orange-400 underline-offset-4 decoration-2">
                  SOLANA
                </span>{" "}
                for transparent and immutable transaction visibility.
              </>
            }
          />
        </motion.div>

        {/* Feature 3 Wrapper: Aligns card to the left on larger screens */}
        <motion.div
          initial={{ x: -100, opacity: 0 }} // Initial animation from left
          whileInView={{ x: 0, opacity: 1 }} // Animates to position
          transition={{ duration: 0.75, delay: 0.9 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex w-full justify-start" // Flex container to align the card
        >
          <FeatureCard
            number="3"
            title="VALIDITY"
            description="Effortlessly validate a document's authenticity by tracking its unique signer on the blockchain."
          />
        </motion.div>
      </div>
    </div>
  );
}

// Reusable Feature Card Component
// Props: number (e.g., "1"), title (e.g., "SECURED"), description (text or JSX)
const FeatureCard: React.FC<FeatureCardProps> = ({ number, title, description }) => {
  return (
    // Styling for the card: rounded corners, border, background, padding, shadow, and backdrop blur
    // Added responsive width classes to allow for alternating layout on larger screens
    <div
      className="relative flex w-full flex-col items-start rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 shadow-lg backdrop-blur-sm md:w-2/3 lg:w-1/2"
    >
      {/* Large background number as a subtle visual element */}
      {/* Uses gradient text clip for a faded, branded look */}
      <div className="absolute -top-4 -left-4 text-9xl font-extrabold text-transparent opacity-10 md:text-[10rem]">
        <span className="bg-gradient-to-br from-orange-500 to-amber-600 bg-clip-text">
          {number}
        </span>
      </div>

      {/* Feature Title */}
      {/* Positioned relatively to ensure it's above the background number */}
      <h2 className="relative z-10 mb-2 text-2xl font-bold uppercase tracking-wide text-orange-400">
        {title}
      </h2>

      {/* Feature Description */}
      {/* Positioned relatively to ensure it's above the background number */}
      <p className="relative z-10 text-base text-zinc-300">
        {description}
      </p>
    </div>
  );
};
