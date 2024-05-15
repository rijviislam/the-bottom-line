import { motion } from "framer-motion";
import About from "../assets/about.svg";
export default function AboutUs() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <motion.img
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{
            duration: "2",
            delay: "1",
          }}
          src={About}
          className="lg:max-w-xl rounded-lg shadow-2xl"
        />
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{
            duration: "2",
            delay: "1",
          }}
        >
          <h1 className="text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 via-green-500 to-teal-400 bg-clip-text font-bold lg:text-4xl md:text-2xl text-xl">
            AboutUs
          </h1>
          <p className="py-6 text-sm font-medium">
            {" "}
            Welcome to TheBottom Line, your one-stop destination for inspiring
            content in five categories: travel, education, fitness, finance,
            photography, and technology. At TheBottom Line, we're dedicated to
            providing you with informative and engaging articles to enrich your
            life. Explore new destinations, learn something new, stay fit,
            manage your finances, capture beautiful moments, and stay updated
            with the latest in technology. Our team of experts is committed to
            delivering quality content that educates, motivates, and inspires.
            Join our community of readers who are passionate about growth and
            exploration. Welcome to TheBottom Line where inspiration meets
            knowledge!
          </p>
          <button className="btn btn-primary">Get in touch!</button>
        </motion.div>
      </div>
    </div>
  );
}
