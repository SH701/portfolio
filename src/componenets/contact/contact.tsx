import ScrollAnimation from "../etc/scrollAnimation";
import SectionContainer from "../etc/sectioncontainer";
import Description from "./description";

import EmailForm from "./emailform";

export default function Contact() {
  return (
    <ScrollAnimation delay={0.5}>
      <SectionContainer title={"Contact"}>
        <div className="flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-0">
          <Description />
          <EmailForm />
        </div>
      </SectionContainer>
    </ScrollAnimation>
  );
}
