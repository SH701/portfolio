import ScrollAnimation from "@/components/scrollAnimation";
import SectionContainer from "@/components/sectioncontainer";
import ShowSkills from "@/components/skills/showskills";



export default function Skills(){
    return (
    <ScrollAnimation  >
       <SectionContainer title={"Skills"} count={"02."} className="w-[80%] sm:w-[100%] ">
        <ShowSkills/>
       </SectionContainer>
    </ScrollAnimation>
        )
}