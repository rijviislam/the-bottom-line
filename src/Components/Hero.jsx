import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div className="flex flex-col w-full items-center lg:py-20 border-b border-gray-400 py-5">
      <motion.h2
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{
          duration: "2",
          delay: "1",
        }}
        className="text-transparent bg-gradient-to-r from-teal-400 via-indigo-500 to-pink-400 via-red-500 to-orange-400 bg-clip-text font-bold lg:text-7xl md:text-5xl text-3xl"
      >
        TheBottom Line
      </motion.h2>
      <motion.p
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{
          duration: "2",
          delay: "1",
        }}
        className="lg:text-xl text-xs my-10"
      >
        Story form the community powering the internet's visuals.
      </motion.p>
    </div>
  );
}
