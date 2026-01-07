"use client";

import { useState } from "react";

import SkillsTab from "./skillstab";
import SkillsContent from "./skillscontent";
import ScrollAnimation from "../etc/scrollAnimation";
import { TabKey } from "@/data/skillsdata";

export default function ShowSkills() {
  const [activeTab, setActiveTab] = useState<TabKey>("Language");

  return (
    <ScrollAnimation
      delay={0.5}
      className="flex lg:gap-20 sm:gap-10 gap-5 flex-col md:flex-row items-center md:items-start"
    >
      <SkillsTab activeTab={activeTab} setActiveTab={setActiveTab} />
      <SkillsContent activeTab={activeTab} />
    </ScrollAnimation>
  );
}
