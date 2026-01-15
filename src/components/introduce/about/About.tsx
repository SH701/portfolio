"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp } from "@/lib/motion";
import { User, Cake, Home, Mail, NotebookText } from "lucide-react";
import GithubIcon from "@/components/etc/Githubicon";

export default function About() {
  return (
    <motion.div
      variants={FadeUp}
      className="mt-16 border-1 border-orange-500 rounded-lg px-4 py-8 mb-6 lg:mx-30"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-orange-500">
        ABOUT
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-24 md:gap-12 ">
        <div className="relative hidden md:w-[250px] md:h-[320px] flex-shrink-0 md:flex">
          <Image
            src="/images/profile.png"
            fill
            alt="프로필"
            className="rounded-full object-cover"
            priority
          />
        </div>
        <div className="flex flex-col gap-3 text-base md:text-lg">
          <div className="flex items-center gap-4">
            <User className="size-5 text-orange-500" />
            <span>김수환</span>
          </div>
          <div className="flex items-center gap-4">
            <Cake className="size-5 text-orange-500" />
            <span>2000. 07. 01</span>
          </div>
          <div className="flex items-center gap-4">
            <Home className="size-5 text-orange-500" />
            <span>서울특별시 은평구</span>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="size-5 text-orange-500" />
            <span>rkrk7636@gmail.com</span>
          </div>
          <div className="flex  md:flex-col md:gap-2 mt-6  justify-center gap-20">
            <Link
              href="https://github.com/SH701"
              className="flex items-center gap-2 hover:text-orange-500 "
            >
              <GithubIcon className="size-5  text-orange-500 " />
              <span className="md:flex hidden duration-300">Git</span>
            </Link>
            <Link
              href="https://sh701.tistory.com/"
              className="flex items-center gap-2 hover:text-orange-500 transition-colors"
            >
              <NotebookText className="size5 text-orange-500 cursor-pointer  " />
              <span className="md:flex hidden duration-300">Blog</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
