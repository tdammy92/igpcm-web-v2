import Hero from "../../assets/images/heroicon.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const LandingHero = () => {
  return (
    <section className="max-w-full mt-3 mx-auto h-screen flex justify-center items-center bg-white relative">
      <div className="absolute inset-0 bg-green-200 opacity-20"></div>
      <div className="relative z-10 h-full flex justify-center items-center px-4 w-full">
        <div className="w-full md:flex h-[60%]">
          {/* Left Text Section */}
          <motion.div
            variants={fadeIn("right", 0.25)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-1/2 flex gap-8 flex-col items-center justify-center">
            <h1 className="text-xl font-semibold leading-relaxed text-green-800 text-center md:w-[70%]">
              At IGPCM We Train The Mind. Everyone experiences difficulty in
              different ways. Let IGPCM guide you in your path to achieving
              greatness.
            </h1>
            <button className="bg-green-900 w-40 h-10 rounded-lg shadow-black shadow-sm text-white hover:bg-green-800 md:max-w-xs">
              Register
            </button>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            variants={fadeIn("left", 1.25)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex mt-4 md:w-1/2 justify-center items-center">
            <img
              src={Hero}
              className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-md md:rounded-3xl object-contain"
              alt="A woman studying"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
