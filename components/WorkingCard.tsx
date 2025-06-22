import * as motion from "motion/react-client";

type WorkingCardProps = {
  title: string;
  description: string;
  flex: string;
  delay?: number;
};

export const WorkingCard = ({
  title,
  description,
  flex,
  delay,
}: WorkingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: delay ?? 0 }}
      className={`flex justify-${flex} px-8    `}
    >
      <div className=" p-8 w-[50%] max-w-3xl flex items-center flex-col gap-4 rounded-lg">
        <h1 className="text-2xl text-center">
          {" "}
          <span className="text-orange-400">#</span>
          {title}
        </h1>
        <p className="text-neutral-400 hidden md:block  text-center w-[65%]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
