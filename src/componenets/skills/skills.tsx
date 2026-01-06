import ScrollAnimation from "../etc/scrollAnimation";
import SectionContainer from "../etc/sectioncontainer";
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
