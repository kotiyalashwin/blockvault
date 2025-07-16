import * as motion from "motion/react-client";
import { Instrument_Serif } from "next/font/google";



// Load Google Font
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400" });

// ✅ FeatureCard component with outlined number
interface FeatureCardProps {
  number: string;
  title: string;
  description: React.ReactNode;
}
const FeatureCard = ({ number, title, description }: FeatureCardProps) => {
  return (
    <div className="relative w-full px-4 py-8 drop-shadow-2xl drop-shadow-orange-400 md:px-10 md:py-12 lg:w-[450px]">
      {/* Large background number with gradient + stroke */}
      <div
  className="absolute text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text"
  style={{
    top: "0.5rem",
    left: "1rem",
    WebkitTextStrokeWidth: "2px",
    WebkitTextStrokeColor: "#b86404",
    WebkitBackgroundClip: "text", 
   
    backgroundImage: "linear-gradient(to bottom, rgba(85,39,7,1) 5%, rgba(85,39,7,0) 100%)",
    maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
    WebkitMaskImage: "linear-gradient(to bottom, black 20%, transparent 100%)",
    maskSize: "100% 100%",
    maskRepeat: "no-repeat",
  }}
>
  {number}
</div>


      {/* Title */}
      <h2 className="absolute top-12 left-10 text-xl md:text-2xl font-bold uppercase text-white md:top-18">
        {title}
      </h2>

      {/* Description */}
      <p
        className="absolute top-20 md:top-28 left-10 w-[65%] md:w-[70%] text-sm md:text-base text-zinc-300"
        style={{
          textShadow: "2px 2px 6px rgba(0, 0, 0, 0.4)",
        }}
      >
        {description}
      </p>
    </div>
  );
};

// ✅ Main Features section
export default function Features() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-16 text-white md:px-8 mb-28">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.5 }}
        className={`${instrumentSerif.className} mb-16 text-center text-4xl leading-tight md:text-5xl drop-shadow-2xl drop-shadow-orange-400`}
      >
        A{" "}
        <motion.span
          initial={{ filter: "blur(10px)" }}
          whileInView={{ filter: "blur(0px)" }}
          transition={{ duration: 0.75, delay: 0.5 }}
          className="text-orange-400"
        >
          Smarter Way
        </motion.span>{" "}
        TO SECURE YOUR DOCUMENTS
      </motion.h1>

      {/* Features List */}
      <div className="flex w-full flex-col items-center gap-24 md:max-w-6xl">
        {/* Feature 1 - Left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex w-full justify-start"
        >
          <FeatureCard
            number="1"
            title="SECURED"
            description="Tamper-free document protection using hashes and signatures"
          />
        </motion.div>

        {/* Feature 2 - Right */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex w-full justify-end"
        >
          <FeatureCard
            number="2"
            title="ON-CHAIN"
            description={
              <>
                Using{" "}
                <span className="tracking-widest underline decoration-orange-400 underline-offset-2 decoration-2">
                  SOLANA
                </span>{" "}
                such that all transactions are visible.
              </>
            }
          />
        </motion.div>

        {/* Feature 3 - Left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.9 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex w-full justify-start"
        >
          <FeatureCard
            number="3"
            title="VALIDITY"
            description="Validate a document by tracking its signer"
          />
        </motion.div>
      </div>
    </div>
  );
}
