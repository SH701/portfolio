"use client"


import ScrollAnimation from "@/components/scrollAnimation";
import SectionContainer from "@/components/sectioncontainer";
import SubProject from "@/components/project/sub/subproject";
import MainProject from "./main/mainproject";


export default function Projects(){
    return (
        <ScrollAnimation>
        <SectionContainer title={"Main Projects"} count={"03."} >
            <MainProject/>
            <SubProject/>
        </SectionContainer>
        </ScrollAnimation>
        )
}