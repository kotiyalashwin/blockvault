import * as motion from "motion/react-client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export const FaqSection = () => {
  return (
    <div className="h-screen flex overflow-hidden justify-center  pt-10 space-y-8  drop-shadow-2xl drop-shadow-orange-400 ">
      <div className="w-full max-w-7xl ">
        <div className="text-5xl text-center">
          <motion.span
            initial={{ filter: "blur(10px)" }}
            whileInView={{ filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.5 }}
            className="text-orange-400"
          >
            FAQs
          </motion.span>{" "}
          for BlockVault
        </div>

        <Accordion
          type="multiple"
          className="w-full max-w-2xl mx-auto p-4 flex flex-col space-y-8 mt-10"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>What is BlockVault?</AccordionTrigger>
            <AccordionContent>
              BlockVault is a decentralized platform that allows you to anchor,
              verify, and manage documents using the Solana blockchain. It
              ensures the authenticity and integrity of your documents, making
              them tamper-proof and verifiable.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              How does BlockVault verify documents?
            </AccordionTrigger>
            <AccordionContent>
              We generate a unique cryptographic hash of your document and
              anchor it on the Solana blockchain. This ensures that any
              tampering or modification can be easily detected by comparing the
              hash on the blockchain with the hash of your current document.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Is my document stored on the blockchain?
            </AccordionTrigger>
            <AccordionContent>
              No. For privacy and scalability, only the cryptographic hash of
              the document is stored on the blockchain. The document itself is
              stored securely in S3, and only its hash is anchored on-chain.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              How do I prove ownership of my document?
            </AccordionTrigger>
            <AccordionContent>
              When you anchor a document, BlockVault issues you a digital proof
              with a timestamp and a blockchain transaction ID. You can share
              this proof with anyone, and they can verify it independently on
              the Solana blockchain.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger>
              How much does it cost to use BlockVault?
            </AccordionTrigger>
            <AccordionContent>
              There{`&apos`}s a small fee for anchoring documents to cover
              Solana network fees and platform maintenance. Watching tutorials
              and verifying documents are free for users.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
