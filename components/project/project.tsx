"use client"


import ScrollAnimation from "@/components/scrollAnimation";
import SectionContainer from "@/components/sectioncontainer";
import SubProject from "@/components/project/sub/subproject";
import MainProject from "./main/mainproject";
import OpenDetail from "./main/projectdetail/opendetail";
import { useState } from "react";


export default function Projects(){
     const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
        <div className="min-h-screen relative">
        <ScrollAnimation>
        <SectionContainer title={"Main Projects"} count={"03."} >
            <MainProject openIndex={openIndex} setOpenIndex={setOpenIndex}/>
            <SubProject/>
        </SectionContainer>
        </ScrollAnimation>
        <OpenDetail openIndex={openIndex} setOpenIndex={setOpenIndex}/>
        </div>
        )
}