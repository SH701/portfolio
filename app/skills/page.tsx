import ScrollAnimation from "@/components/scrollAnimation";
import SectionContainer from "@/components/sectioncontainer";
import ShowSkills from "@/components/skills/showskills";



export default function Skills(){
    return (
    <ScrollAnimation >
       <SectionContainer title={"Skills"} count={"02."}>
        <ShowSkills/>
       </SectionContainer>
    </ScrollAnimation>
        )
}