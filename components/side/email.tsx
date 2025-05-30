"use client"

import {motion} from "framer-motion";
import { FadeRight } from "@/data/motion";


export default function Email(){
    return(
        <motion.div 
        initial="init"
        animate="on"
        variants={FadeRight}
        className="flex flex-col items-center justify-center">
            <p className="vertical-rlEN text-xs ani">rkrk7636@gmail.com</p>
            <div className="w-px mt-2 h-32 bg-gray-400" />
        </motion.div>
    )
}