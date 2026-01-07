"use client";

import { useState } from "react";
import ScrollAnimation from "../etc/scrollAnimation";
import SectionContainer from "../etc/sectioncontainer";
import MainProject from "./main/mainproject";

import OpenDetail from "./main/projectdetail/opendetail";

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="min-h-screen relative">
      <ScrollAnimation>
        <SectionContainer title={"Projects"}>
          <MainProject openIndex={openIndex} setOpenIndex={setOpenIndex} />
        </SectionContainer>
      </ScrollAnimation>
      <OpenDetail openIndex={openIndex} setOpenIndex={setOpenIndex} />
    </div>
  );
}
