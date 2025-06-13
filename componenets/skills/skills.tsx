import ScrollAnimation from "../scrollAnimation";
import SectionContainer from "../sectioncontainer";
import ShowSkills from "./showskills";

export default function Skills() {
  return (
    <ScrollAnimation>
      <SectionContainer
        title={"Skills"}
        count={"02."}
        className="w-[80%] sm:w-[100%] "
      >
        <ShowSkills />
      </SectionContainer>
    </ScrollAnimation>
  );
}
