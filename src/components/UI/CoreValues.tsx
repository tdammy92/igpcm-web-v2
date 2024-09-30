import { motion } from "framer-motion";
import {
  FaBalanceScale,
  FaHandsHelping,
  FaHandshake,
  FaUsers,
  FaUserTie,
  FaPeace,
} from "react-icons/fa";
import { fadeIn } from "../../variants";

const CoreValues = () => {
  return (
    <section className="bg-white w-full py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-green-950">
        CORE VALUES (T-A-L-E-N-T)
      </h2>

      <div className="grid md:grid-cols-2 gap-8 w-[90%] mx-auto">
        <motion.div
          variants={fadeIn("left", 2.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaBalanceScale className="text-green-900 text-4xl" />
          <div>
            <h3 className="text-2xl font-bold text-green-900 mb-2">
              TOLERANCE
            </h3>
            <p className="text-gray-600">
              We believe people should be given the opportunity to express their
              feelings and such expressions, viewpoints, and opinions be
              tolerated no matter how provocative they seem.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 2.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaHandshake className="text-green-900 text-4xl" />
          <div>
            <h3 className="text-2xl font-bold text-green-900 mb-2">
              AMICABILITY
            </h3>
            <p className="text-gray-600">
              We know that settling people’s differences in a friendly,
              objective, and committed manner ensures peace.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 2.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaUserTie className="text-green-900 text-4xl" />
          <div>
            <h3 className="text-2xl font-bold text-green-900 mb-2">
              LEADERSHIP
            </h3>
            <p className="text-gray-600">
              We demonstrate strategic, leading, and superior decisions and
              arguments that influence people to agree with certain courses of
              action.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 2.5)}
          initial="right"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaUsers className="text-green-900 text-5xl" />
          <div>
            <h3 className="text-2xl font-bold text-green-900 mb-2">
              EQUALITY/EQUITY
            </h3>
            <p className="text-gray-600">
              We believe that all people have certain desires and values and
              should be treated fairly and justly, irrespective of their social,
              cultural, political, religious, and economic differences.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 2.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaHandsHelping className="text-green-900 text-4xl" />
          <div>
            <h3 className="text-2xl font-bold text-green-900 mb-2">
              NEUTRALITY
            </h3>
            <p className="text-gray-600">
              We take and maintain a posture of non-alignment while
              participating in conflict resolution.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 2.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <FaPeace className="text-green-900 text-4xl" />
          <div>
            <h3 className="text-2xl font-bold text-green-900 mb-2">
              TRANQUILITY
            </h3>
            <p className="text-gray-600">
              We believe in peace, we pursue peace, and we achieve peace for
              development to thrive.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
