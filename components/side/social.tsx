"use client"

import Link from "next/link"
import GithubIcon from "../githubicon"
import {motion} from "framer-motion";
import {FadeLeft} from "@/data/motion"




export default function Social(){
    return(
        <motion.div 
        initial="init"
        animate="on"
        variants={FadeLeft}
        className="flex flex-col items-center justify-center">
            <Link 
              href="https://github.com/SH701"
              className="transition hover:-translate-y-1 hover:text-teal-300 duration-300"
            >
             <GithubIcon className="size-6"/>
            </Link>
             <div className="w-px mt-2 h-32 bg-gray-400" />
        </motion.div>
    )
}