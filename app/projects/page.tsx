import MainProject from "@/components/main/mainproject";
import SectionContainer from "@/components/sectioncontainer";
import SubProject from "@/components/sub/subproject";


export default function Projects(){
    return (
        <SectionContainer title={"Main Projects"} count={"03."} >
            <MainProject/>
            <SubProject/>
        </SectionContainer>
        )
}