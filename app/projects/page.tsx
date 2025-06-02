"use client"

import MainProject from "@/components/main/mainproject";
import ScrollAnimation from "@/components/scrollAnimation";
import SectionContainer from "@/components/sectioncontainer";
import SubProject from "@/components/sub/subproject";


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