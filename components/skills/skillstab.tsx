"use client";

import { TabKey, tabs } from "@/data/skillsdata";

interface Props {
  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;
}

export default function SkillsTab({ activeTab, setActiveTab }: Props) {
  return (
    <nav className="flex flex-col items-start gap-5">
      {tabs.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => setActiveTab(key)}                     
          className={`p-2 rounded-md cursor-pointer lg:w-30 lg:h-20 lg:text-xl
            border border-teal-400 transition-colors duration-300
            ${activeTab === key ? "text-teal-400" : ""}
          `}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
