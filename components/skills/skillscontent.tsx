"use client";

import { TabKey, tabs } from "@/data/skillsdata";

interface Props {
  activeTab: TabKey;
}

export default function SkillsContent({ activeTab }: Props) {
  const activeItems = tabs.find((t) => t.key === activeTab)?.items ?? [];

  return (
    <section>
      <ul>
        {activeItems.map((item) => (
          <li key={item.name} className="flex items-center lg:gap-5 gap-3 ">
            <div className="lg:size-16 size-12 flex items-center justify-center rounded-full bg-white opacity-90 shadow-sm">
              {item.Icon && <item.Icon className="lg:size-10 size-8" color={item.color} />}
            </div>
            <div className="flex flex-col mt-3">
              <h3 className="text-white opacity-85 pl-1 lg:text-2xl ">{item.name}</h3>
              <p className="text-xs text-gray-400 pb-3 pl-1 lg:text-base">- {item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
