import { motion } from "framer-motion";
import { GiBullseye } from "react-icons/gi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { fadeIn } from "../variants";

const Missions = () => {
  return (
    <section className="bg-green-950 w-full h-3/5  py-36 flex justify-center items-center">
      <div className="w-full justify-center items-center  md:flex h-[100%] ">
        <motion.div
          variants={fadeIn("left", 1.25)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className=" md:w-1/2 flex flex-col items-center justify-center h-full">
          <div className="flex flex-col">
            <MdOutlineRemoveRedEye size={60} className="text-white" />
            <h1 className=" text-3xl font-semibold text-white mb-8">
              OUR VISION
            </h1>
          </div>
          <div className="text-white w-[60%] text-2xl text-center">
            We envisaged a world of tranquility and we are committed to raising
            a generation of peace builders for sustainable development
          </div>
        </motion.div>
        <motion.div variants={fadeIn("right", 1.25)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }} className=" md:w-1/2 flex flex-col items-center justify-center h-full">
          <div className="flex flex-col">
            <GiBullseye size={60} className="text-white" />
            <h1 className=" text-3xl font-semibold 8 text-white mb-8">
              OUR MISSION
            </h1>
          </div>
          <div className="text-white w-[60%] text-2xl text-center">
            To achieve peace through the instrumentality of minds shaping,
            inculcation of true values and development of attitudes of tolerance
            and accommodation of divergence of opinions and perceptions of
            people.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Missions;
