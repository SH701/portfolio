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
          className={`p-2 rounded-md cursor-pointer lg:w-25 lg:h-15 lg:text-xl
            border border-teal-400 transition duration-300 hover:text-teal-300 hover:-translate-y-1
            ${activeTab === key ? "text-teal-300" : ""}
          `}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
