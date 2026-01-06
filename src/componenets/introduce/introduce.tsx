"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp } from "@/lib/motion";
import GithubIcon from "../etc/githubicon";
import { FileText } from "lucide-react";

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
      className="flex flex-col gap-6 pt-24 sm:px-10"
    >
      <motion.div className="text-teal-300 text-2xl" variants={FadeUp}>
        안녕하세요. 웹 개발자
      </motion.div>
      <motion.div
        className="lg:text-6xl pt-5 text-white opacity-80 text-4xl font-bold"
        variants={FadeUp}
      >
        김수환입니다.
      </motion.div>
      <motion.div
        className="lg:text-6xl pt-4 sm:text-4xl text-2xl font-bold leading-tight"
        variants={FadeUp}
      >
        저는 끊임없는 도전을 즐기며,
        <br />웹 개발의 매력에 빠져 있습니다.
      </motion.div>
      <motion.p className="pt-5 text-lg lg:text-xl" variants={FadeUp}>
        사용자에게 먼저 다가갈 수 있는 웹사이트의 프론트엔드 부분을 담당하고
        있습니다.
      </motion.p>
      <motion.div className="flex flex-row gap-3 pt-5" variants={FadeUp}>
        <Link href="https://github.com/SH701">
          <GithubIcon className="size-10 text-teal-300 mt-3" />
        </Link>
        <Link href="https://www.notion.so/2e07903c541c80b09a88f535f72907c9">
          <FileText className="size-10 text-teal-300 hover:-translate-y-1 hover:text-teal-300 cursor-pointer duration-300 mt-3" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
