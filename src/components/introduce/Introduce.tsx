import { motion } from "framer-motion";
import { FadeUp } from "@/lib/motion";

import About from "./about/About";

const textVariant = {
  on: {
    transition: {
      delayChildren: 0.25,
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
      className="flex flex-col md:gap-3 gap-1.5 pt-10 md:pt-6 md:px-10 lg:h-screen"
    >
      <motion.div variants={FadeUp} className="mb-1">
        <span className="lg:text-3xl md:text-2xl text-orange-550 ">
          Frontend Developer
        </span>
      </motion.div>
      <motion.div variants={FadeUp}>
        <span className="lg:text-6xl md:text-3xl text-2xl font-medium">
          안녕하세요, 김수환입니다
        </span>
      </motion.div>
      <motion.div
        className="lg:text-5xl md:text-2xl lg:pt-4  font-medium leading-tight"
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
