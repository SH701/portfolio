"use client"


import {Main} from "@/data/mainprojects"
import Image from "next/image"
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import ScrollAnimation from "@/components/scrollAnimation";
import GithubIcon from "@/components/githubicon";
import ProjectHeader from "./projectheader";


type Props={
    openIndex:number|null;
    setOpenIndex:Dispatch<SetStateAction<number|null>>
}

export default function MainProject({setOpenIndex}:Props){
    
    return(
        <div className="flex  flex-col gap-20 mt-16">
            {Main.map(({ title, description, language, period,img,githubLink,projectLink }, index) => {
                const isEven = index % 2 === 0;
                return (
                <ScrollAnimation
                    delay={1}
                    key={title}
                    className={` gap-5 mb-40 flex ${isEven ? "flex-row-reverse justify-start" : "flex-row justify-end lg:mr-20 mr-2"}`}>
                    <div className={`flex-shrink-0 ${isEven ? "ml-auto" : "mr-auto"}`}>
                        <div className="relative w-[300px] h-[280px] sm:w-[400px] sm:h-[250px] lg:w-[700px] lg:h-[400px] ">
                            <Image src={img} alt="대표사진" fill className="rounded-md shadow-md object-cover -z-10" />
                        </div>
                    </div>
                    <div className={`absolute z-30 max-w-[500px] ${isEven ? "left-0" : "right-0"}`}>  
                        <ProjectHeader title={title}  period={period} projectLink={projectLink} className={`flex flex-col ${isEven? "items-start justify-start":"items-end justify-end"}`}/>
                        <div className={`p-4 bg-[#112240] flex items-center justify-center w-[70%] h-60 lg:w-[100%] lg:h-[80%]   ${isEven ? "ml-0 mr-auto" : "ml-auto mr-0"}`}>
                            <p className="text-[12px] lg:text-[18px] sm:text-[14px] sm:px-8 py-5 px-4">{description}</p>
                        </div>
                        <div className="flex flex-row flex-wrap">
                         {language.map((item)=>(                           
                            <p key={item} className="text-xs pt-3 lg:text-base px-1">{item}</p>
                         ))}
                         </div>
                        <div className={`flex ${isEven ? "justify-start" : "justify-end"} gap-1 mt-2`}>
                            <Link href={githubLink}>
                            <GithubIcon className="size-5 lg:size-8"/>
                            </Link>
                            <button onClick={()=>{
                                setOpenIndex(index);
                            }} 
                             className="hover:text-teal-300  transition duration-300 rounded-md cursor-pointer text-sm p-1">
                            <p className="lg:text-lg">상세내용</p>
                            </button>
                            </div> 
                    </div>
                </ScrollAnimation >      
                );
            })}
            </div>
            
    )
}