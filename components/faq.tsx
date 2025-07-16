import * as motion from "motion/react-client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"; 

import { Instrument_Serif, Source_Serif_4, Space_Mono } from "next/font/google";
import { Inter } from "next/font/google";

// Initialize fonts
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "700"],
});



const inter = Inter({ subsets: ["latin"] });

// Data for FAQ items
const faqItems = [
  {
    value: "item-1",
    trigger: "What is BlockVault?",
    content: "BlockVault is a platform to anchor documents and prove authenticity via blockchain.",
  },
  {
    value: "item-2",
    trigger: "How does BlockVault verify documents?",
    content:
      "We generate a unique cryptographic hash of your document and anchor it on the Solana blockchain. This ensures that any tampering or modification can be easily detected by comparing the hash on the blockchain with the hash of your current document.",
  },
  {
    value: "item-3", // Changed from item-4 for sequential order
    trigger: "Is my document stored on the blockchain?",
    content:
      "No. For privacy and scalability, only the cryptographic hash of the document is stored on the blockchain. The document itself is stored securely in S3, and only its hash is anchored on-chain.",
  },
  {
    value: "item-4", // Changed from item-5 for sequential order
    trigger: "How do I prove ownership of my document?",
    content:
      "When you anchor a document, BlockVault issues you a digital proof with a timestamp and a blockchain transaction ID. You can share this proof with anyone, and they can verify it independently on the Solana blockchain.",
  },
  {
    value: "item-5", // Changed from item-9 for sequential order
    trigger: "How much does it cost to use BlockVault?",
    content:
      "There's a small fee for anchoring documents to cover Solana network fees and platform maintenance. Watching tutorials and verifying documents are free for users.",
  },
];

export const FaqSection = () => {
  return (
    // Main container for the FAQ section
    // Sets minimum screen height, centers content, applies background and text colors, and adds responsive padding
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-16 text-white md:px-8">
      {/* Main Heading */}
      {/* Animates in with opacity and slight Y-axis movement when in view */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.5 }} // Animates only once when 50% of the element is in view
        className={`${instrumentSerif.className} mb-16 text-center text-4xl leading-tight md:text-5xl drop-shadow-2xl drop-shadow-orange-400`}
      >
        <motion.span
          initial={{ filter: "blur(10px)", opacity: 0 }}
          whileInView={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-orange-400"
        >
          FAQs
        </motion.span>{" "}
        for BlockVault
      </motion.h1>

      {/* Accordion Container */}
      {/* Uses max-width for better readability and centers it */}
      <Accordion
        type="multiple"
        className="w-full max-w-3xl space-y-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-lg backdrop-blur-sm md:p-8"
      >
        {faqItems.map((item, i) => (
          // Each AccordionItem wrapped in motion.div for individual animations
          <motion.div
            key={item.value}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * i }} // Staggered animation
            viewport={{ once: true, amount: 0.2 }}
          >
            <AccordionItem
              value={item.value}
              className="border-b border-zinc-700 last:border-b-0" // Adds subtle border between items
            >
              <AccordionTrigger
                className={`${sourceSerif4.className} text-left text-lg font-semibold text-zinc-200 hover:text-orange-400 [&[data-state=open]>svg]:rotate-180`} // Styles for trigger, including hover and open state
              >
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-2 text-base text-zinc-300">
                <p className={`${inter.className}`}>{item.content}</p>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  );
};
