import { motion } from "framer-motion";
import { FadeUp } from "@/lib/motion";

import About from "../about/about";

const textVariant = {
  on: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.25,
    },
  },
};

export default function Introduce() {
  return (
    <motion.div
      initial="init"
      animate="on"
      variants={textVariant}
      className="flex flex-col gap-3 pt-10 sm:px-10 "
    >
      <motion.div variants={FadeUp} className="mb-1">
        <span className="text-3xl text-orange-550 ">Frontend Developer</span>
      </motion.div>
      <motion.div variants={FadeUp}>
        <span className="lg:text-6xl   text-4xl font-bold">
          안녕하세요, 김수환입니다.
        </span>
      </motion.div>
      <motion.div
        className="lg:text-5xl pt-4 sm:text-4xl text-2xl font-bold leading-tight"
        variants={FadeUp}
      >
        <span>
          기술적인 문제 해결을 통해 <br />
          <span className="text-orange-500">더 나은 사용자 경험</span>을 만드는
          것을 목표로 합니다.
        </span>
      </motion.div>

      <About />
    </motion.div>
  );
}
