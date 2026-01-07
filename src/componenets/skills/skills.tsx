import ScrollAnimation from "../etc/scrollAnimation";
import SectionContainer from "../etc/sectioncontainer";
import ShowSkills from "./showskills";

export default function Skills() {
  return (
    <ScrollAnimation>
      <SectionContainer title={"Skills"} className="pt-20">
        <ShowSkills />
      </SectionContainer>
    </ScrollAnimation>
  );
}
