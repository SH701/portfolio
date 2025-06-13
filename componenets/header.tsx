"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FadeDown } from "../data/motion";

const headerVariants = {
  on: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Header() {
  const [isHide, setIsHide] = useState(false);
  useEffect(() => {
    let lateY = window.screenY;
    const onscroll = () => {
      const diff = lateY - window.scrollY;
      setIsHide(diff < 0);
      lateY = window.scrollY;
    };
    window.addEventListener("scroll", onscroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, []);
  return (
    <header
      className={`fixed top-0 z-30 w-full left-0 sm:px-10 sm:pt-3
        backdrop-blur-md transition-transform duration-300 ${
          isHide ? "-translate-y-full" : "translate-y-0"
        }`}
    >
      <nav className="flex flex-row">
        <div className="ml-4 mt-2">
          <Link href="#top">
            <Image src="/favicon.ico" alt="logo" width={60} height={60} />
          </Link>
        </div>
        <motion.ul
          initial="init"
          animate="on"
          variants={headerVariants}
          className="ml-auto sm:px-7 px-3 py-5 flex items-end justify-end gap-5 lg:text-lg sm:text-sm text-xs"
        >
          <motion.li variants={FadeDown}>
            <Link href="#about" className="flex flex-row sm:gap-2 gap-1">
              <p className="colorful ">01.</p>
              <p className="hover:colorful transition-colors duration-300">
                About
              </p>
            </Link>
          </motion.li>
          <motion.li variants={FadeDown}>
            <Link href="#skills" className="flex flex-row sm:gap-2 gap-1">
              <p className="colorful ">02.</p>
              <p className="hover:colorful transition-colors duration-300">
                Skills
              </p>
            </Link>
          </motion.li>
          <motion.li variants={FadeDown}>
            <Link href="#projects" className="flex flex-row sm:gap-2 gap-1">
              <p className="colorful ">03.</p>
              <p className="hover:colorful transition-colors duration-300">
                Projects
              </p>
            </Link>
          </motion.li>
          <motion.li variants={FadeDown}>
            <Link href="#contact" className="flex flex-row sm:gap-2 gap-1">
              <p className="colorful ">04.</p>
              <p className="hover:colorful transition-colors duration-300">
                Contact
              </p>
            </Link>
          </motion.li>
        </motion.ul>
      </nav>
    </header>
  );
}
