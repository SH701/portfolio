"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp } from "@/lib/motion";
import { User, Mail, NotebookText, Briefcase, ChevronDown } from "lucide-react";
import GithubIcon from "@/components/etc/Githubicon";
import { useState } from "react";

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={FadeUp}
      className="mt-16 border-1 border-orange-500 rounded-lg px-4 py-8 mb-6 lg:mx-30"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-orange-500">
        ABOUT
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-24 md:gap-12">
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
          {/* 개인정보 */}
          <div className="flex items-center gap-4">
            <User className="size-5 text-orange-500" />
            <span>김수환</span>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="size-5 text-orange-500" />
            <span>rkrk7636@gmail.com</span>
          </div>

          {/* 경력 토글 */}
          <hr className="border-orange-200 my-1" />
          <div className="flex flex-col gap-1">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="flex items-center gap-4 cursor-pointer text-left"
            >
              <Briefcase className="size-5 text-orange-500 flex-shrink-0" />
              <span className="font-medium">경력</span>
              <ChevronDown
                className={`size-4 text-orange-500 ml-auto transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              />
            </button>
            {open && (
              <div className="ml-9 flex flex-col gap-0.5 text-sm">
                <span className="font-medium">비트버디 · 인턴</span>
                <span className="text-gray-500">2026.03 ~ 2026.04</span>
                <span className="text-gray-600">메신저 기능 개발, 다국어 지원</span>
              </div>
            )}
          </div>

          {/* 링크 */}
          <div className="flex md:flex-col md:gap-2 mt-4 justify-center gap-20">
            <Link
              href="https://github.com/SH701"
              className="flex items-center gap-2 hover:text-orange-500"
            >
              <GithubIcon className="size-5 text-orange-500" />
              <span className="md:flex hidden duration-300">Git</span>
            </Link>
            <Link
              href="https://sh701.tistory.com/"
              className="flex items-center gap-2 hover:text-orange-500 transition-colors"
            >
              <NotebookText className="size-5 text-orange-500 cursor-pointer" />
              <span className="md:flex hidden duration-300">Blog</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
