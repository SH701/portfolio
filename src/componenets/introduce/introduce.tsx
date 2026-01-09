"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/lib/motion";

import { useEffect, useState } from "react";
import About from "./about/about";

interface IntroProps {
  text: string;
}

const textVariant = {
  on: {
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.25,
    },
  },
};

export default function Introduce({ text }: IntroProps) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setStartTyping(true);
    }, 1000);
    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    if (startTyping && index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [startTyping, index, text]);

  return (
    <motion.div
      initial="init"
      animate="on"
      variants={textVariant}
      className="flex flex-col md:gap-3 gap-1.5 pt-10 md:pt-6 md:px-10 lg:h-screen"
    >
      <motion.div variants={FadeUp} className="mb-1">
        <span className="md:text-3xl text-orange-550 ">Frontend Developer</span>
      </motion.div>
      <motion.div variants={FadeUp}>
        <span className="md:text-6xl text-2xl font-medium">{displayText}</span>
        {index < text.length && <span className="md:text-6xl text-2xl">|</span>}
      </motion.div>
      <motion.div
        className="md:text-5xl md:pt-4  font-medium leading-tight"
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
