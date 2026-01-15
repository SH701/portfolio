"use client";

import { useState } from "react";
import ScrollAnimation from "../etc/ScrollAnimation";
import SectionContainer from "../etc/Sectioncontainer";
import ProjectList from "./ProjectList";

import OpenDetail from "./detail/OpenDetail";

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
