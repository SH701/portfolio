"use client";

import { useState } from "react";
import { TabKey } from "@/data/skillsdata";
import SkillsTab from "./skillstab";
import SkillsContent from "./skillscontent";

export default function ShowSkills() {
  const [activeTab, setActiveTab] = useState<TabKey>("Language");

  return (
    <div className="flex lg:gap-20 sm:gap-10 gap-5 flex-col sm:flex-row sm:ml-[0%] ml-[5%]">
      <SkillsTab activeTab={activeTab} setActiveTab={setActiveTab} />
      <SkillsContent activeTab={activeTab} />
    </div>
  );
}
