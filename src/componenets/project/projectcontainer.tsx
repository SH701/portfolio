"use client";

import { useState } from "react";
import ScrollAnimation from "../etc/scrollAnimation";
import SectionContainer from "../etc/sectioncontainer";
import ProjectList from "./projectlist";

import OpenDetail from "./detail/opendetail";

export default function ProjectContainer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="min-h-screen relative">
      <ScrollAnimation>
        <SectionContainer title={"Projects"}>
          <ProjectList openIndex={openIndex} setOpenIndex={setOpenIndex} />
        </SectionContainer>
      </ScrollAnimation>
      <OpenDetail openIndex={openIndex} setOpenIndex={setOpenIndex} />
    </div>
  );
}
