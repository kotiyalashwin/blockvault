import * as motion from "motion/react-client";
import { BookOpenCheck, FileUp, Link } from "lucide-react";

export default function WorkFlow() {
  return (
    <div className="h-screen flex overflow-hidden justify-center    pt-10 space-y-8  ">
      <div className="w-full max-w-3xl">
        <div className="flex flex-col min-h-screen justify-start">
          <h1 className="text-2xl text-center">
            A <span className="text-orange-400">SMARTER WAY</span> TO SECURE
            YOUR DOCUMENTS
          </h1>

          <div className="flex  flex-col justify-evenly  h-full ">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, borderColor: "orchid" }}
              transition={{ duration: 0.75 }}
              className="flex flex-row justify-start w-full px-10 mt-8 min-h-[150px] relative"
            >
              <div className="relative  w-full ">
                <div className="absolute md:text-9xl text-7xl text-transparent  font-bold bg-gradient-to-b from-35% from-[#F26B11]/45 to-[#401F0E]/45 bg-clip-text font-outline-2 [mask-image:linear-gradient(to_bottom,black,transparent)] [mask-size:100%_100%] [mask-repeat:no-repeat]">
                  1
                </div>
                <div
                  className="absolute inset-0 font-bold  top-12 left-10 md:top-18
               text-xl"
                >
                  SECURED
                </div>
                <p
                  className="absolute top-14 left-10 w-[50%]  text-sm mt-4 md:top-20 "
                  style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.4)" }}
                >
                  Tamper free document protection using hashes and signatures
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: +50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, borderColor: "orchid" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-row justify-end  w-full px-10 min-h-[150px] relative"
            >
              <div className="relative w-[160px] ">
                <div className="absolute md:text-9xl text-7xl text-transparent  font-bold bg-gradient-to-b from-35% from-[#F26B11]/45 to-[#401F0E]/45 bg-clip-text font-outline-2 [mask-image:linear-gradient(to_bottom,black,transparent)] [mask-size:100%_100%] [mask-repeat:no-repeat]">
                  2
                </div>
                <div
                  className="absolute inset-0 font-bold md:top-18  top-12 left-6
               text-xl"
                >
                  ON-CHAIN
                </div>
                <p
                  className="absolute top-14 left-6 md:top-20   text-sm mt-4 "
                  style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.4)" }}
                >
                  Using{" "}
                  <span className="tracking-widest underline decoration-orange-400 underline-offset-2 decoration-2">
                    SOLANA
                  </span>{" "}
                  such that all transctions are visible.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1, borderColor: "orchid" }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-row justify-start w-full px-10 mt-8 min-h-[150px] relative"
            >
              <div className="relative  w-full ">
                <div className="absolute md:text-9xl text-7xl text-transparent  font-bold bg-gradient-to-b from-35% from-[#F26B11]/45 to-[#401F0E]/45 bg-clip-text font-outline-2 [mask-image:linear-gradient(to_bottom,black,transparent)] [mask-size:100%_100%] [mask-repeat:no-repeat]">
                  3
                </div>
                <div
                  className="absolute inset-0 font-bold   top-12 left-6
                  md:top-18
               text-xl"
                >
                  VALIDITY
                </div>
                <p
                  className="absolute top-14 left-6 w-[50%]  text-sm mt-4 md:top-20 "
                  style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.4)" }}
                >
                  Validate a document by tracking its signer
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <h1 className="text-3xl">WorkFlow</h1> */}
      {/* <motion.div
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
      </motion.div> */}
    </div>
  );
}
