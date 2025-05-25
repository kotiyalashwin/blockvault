import * as motion from "motion/react-client";

export default function Features() {
  return (
    <div className="h-screen flex overflow-hidden justify-center pt-10 space-y-8  ">
      <div className="w-full max-w-3xl drop-shadow-2xl drop-shadow-orange-400 ">
        <div className="flex flex-col min-h-screen justify-start ">
          <h1 className="text-5xl text-center ">
            A{" "}
            <motion.span
              initial={{ filter: "blur(10px)" }}
              whileInView={{ filter: "blur(0px)" }}
              transition={{ duration: 0.75 }}
              className="text-orange-400"
            >
              SMARTER WAY
            </motion.span>{" "}
            TO SECURE YOUR DOCUMENTS
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
              className="flex flex-row justify-start w-full px-10 mt-8 min-h-[150px] relative "
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
    </div>
  );
}
