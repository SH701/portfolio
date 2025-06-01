"use client"

import GithubIcon from "@/components/githubicon";
import Link from "next/link";
import {motion} from "framer-motion"
import {FadeUp} from "@/data/motion"

const textVariant={
    on:{
        transition:{
            delayChildren :1.5,
            staggerChildren:0.25,
        }
    }
}

export default function Introduce(){
    return(
         <motion.div 
         initial="init"
         animate="on"
         variants={textVariant}
         className="flex flex-col gap-2 pt-24 sm:px-10 ">
         <motion.div className="colorful text-2xl" variants={FadeUp}>안녕하세요. 저는 웹 개발자</motion.div>
         <motion.div className="lg:text-6xl pt-5 text-white opacity-80 text-4xl font-bold" variants={FadeUp}>김수환입니다.</motion.div>
         <motion.div className="lg:text-6xl pt-4 text-3xl font-bold" variants={FadeUp}>저는 끊임없는 도전을 즐기며,<br /> 
         웹 개발의 매력에 빠져 있습니다.</motion.div>
         <motion.p className="pt-5 text-lg lg:text-xl" variants={FadeUp}>사용자에게 먼저 다가갈 수 있는 웹사이트의 프론트엔드 부분을 담당하고 있습니다.</motion.p>
         <motion.div className="flex flex-row gap-3 pt-5" variants={FadeUp}>
            <Link href="https://github.com/SH701">
               <GithubIcon className="size-10 colorful mt-3"/>
            </Link>
            <Link href="https://vercel.com/sh701s-projects">
            <svg 
            data-testid="geist-icon" 
            className="size-10 colorful mt-3"
            strokeLinejoin="round" 
            viewBox="0 0 16 16" 
            >    
            <g clipPath="url(#clip0_872_3186)">
                <circle
                cx="8"
                cy="8"
                r="7.25"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
                <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4.5L11.5 10.625H4.5L8 4.5Z"
                fill="var(--ds-gray-100)"
                />
                 </g>
            <defs>
            <clipPath id="clip0_872_3186">
            <rect width="16" height="16" fill="white" />
            </clipPath>
            </defs>
          </svg>
         </Link>
         <a href="/resume.docx" download className="w-10 h-10 bg-teal-400 rounded-full mt-3 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8  text-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
         </a>
        </motion.div>
        </motion.div>
    )
}