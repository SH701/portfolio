import ScrollAnimation from "../etc/ScrollAnimation";
import SectionContainer from "../etc/Sectioncontainer";
import ShowSkills from "./ShowSkills";

export default function Skills() {
  return (
    <ScrollAnimation>
      <SectionContainer title={"Skills"} className="pt-20">
        <ShowSkills />
      </SectionContainer>
    </ScrollAnimation>
  );
}
