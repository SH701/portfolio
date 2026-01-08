"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp } from "@/lib/motion";
import { User, Cake, Home, Mail, FileText } from "lucide-react";
import GithubIcon from "../etc/githubicon";

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
          <div className="flex  md:flex-col md:gap-2 mt-6 border-t border-dotted justify-center gap-20 pt-3">
            <Link
              href="https://github.com/SH701"
              className="flex items-center gap-2 hover:text-orange-500 transition-colors"
            >
              <GithubIcon className="size-5 md:size-5" />
              <span className="md:flex hidden">Git</span>
            </Link>
            <Link
              href="https://www.notion.so/2e07903c541c80b09a88f535f72907c9"
              className="flex items-center gap-2 hover:text-orange-500 transition-colors"
            >
              <FileText className="size-5 hover:-translate-y-1 text-orange-500 cursor-pointer duration-300 md:size-5" />
              <span className="md:flex hidden">Resume</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
