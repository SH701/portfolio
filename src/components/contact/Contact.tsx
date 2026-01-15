import ScrollAnimation from "../etc/ScrollAnimation";
import SectionContainer from "../etc/Sectioncontainer";
import Description from "./Description";
import EmailForm from "./Emailform";

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
