"use client";

import { useState } from "react";

import SkillsTab from "./SkillsTab";
import SkillsContent from "./SkillsContent";
import ScrollAnimation from "../etc/ScrollAnimation";
import { TabKey } from "@/data/skillsdata";

export default function ShowSkills() {
  const [activeTab, setActiveTab] = useState<TabKey>("Language");

  return (
    <ScrollAnimation
      delay={0.5}
      className="flex lg:gap-20 md:gap-10 flex-col md:flex-row items-center md:items-start"
    >
      <SkillsTab activeTab={activeTab} setActiveTab={setActiveTab} />
      <SkillsContent activeTab={activeTab} />
    </ScrollAnimation>
  );
}
