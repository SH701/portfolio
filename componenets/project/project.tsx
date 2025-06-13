"use client";

import { useState } from "react";
import ScrollAnimation from "../scrollAnimation";
import SectionContainer from "../sectioncontainer";
import MainProject from "./main/mainproject";
import SubProject from "./sub/subproject";
import OpenDetail from "./main/projectdetail/opendetail";

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="min-h-screen relative">
      <ScrollAnimation>
        <SectionContainer title={"Main Projects"} count={"03."}>
          <MainProject openIndex={openIndex} setOpenIndex={setOpenIndex} />
          <SubProject />
        </SectionContainer>
      </ScrollAnimation>
      <OpenDetail openIndex={openIndex} setOpenIndex={setOpenIndex} />
    </div>
  );
}
