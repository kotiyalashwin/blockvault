import * as motion from "motion/react-client";
import { BookOpenCheck, FileUp, Link } from "lucide-react";

export default function WorkFlow() {
  return (
    <div className="h-screen flex overflow-hidden justify-cente flex-col border-t pt-10 space-y-8 items-center ">
      {/* <h1 className="text-3xl">WorkFlow</h1> */}
      <motion.div
        className="max-w-xl   h-[20vh] lg:max-w-6xl w-full p-8 flex gap-4 justify-start items-center"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1, borderColor: "orchid" }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <FileUp size={150} />
        </div>
        <div>
          <h1 className="text-xl md:text-3xl ">Upload Documents</h1>
          <p className="text-neutral-500 pt-4">
            Choose you documents that you wanna secure. Like
            resume,CV,insurances etc.
          </p>
        </div>
      </motion.div>
      <motion.div
        className=" max-w-xl  h-[20vh] lg:max-w-6xl w-full p-8 flex  justify-end gap-4"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div>
          <h1 className="text-xl md:text-3xl ">Get Documents OnChain</h1>
          <p className="text-neutral-500 pt-4">
            Our streamline system places hash of you document on{" "}
            <span className="tracking-widest text-orange-400">SOLANA</span>{" "}
            blockchain.
          </p>
        </div>
        <div>
          <Link size={100} />
        </div>
      </motion.div>
      <motion.div
        className=" max-w-xl lg:max-w-6xl h-[20vh] w-full p-8 gap-4 flex justify-start"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div>
          <BookOpenCheck size={100} />
        </div>
        <div>
          <h1 className="text-xl md:text-3xl ">Proof Of Document</h1>
          <p className="text-neutral-500 pt-4">
            A{" "}
            <span className="underline underline-offset-2 decoration-orange-400">
              TransactionHash
            </span>{" "}
            is assigned to your document. Transaction can be viewed on{" "}
            <a href="https://explorer.solana.com" className="text-orange-400">
              Solana Explorer
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
