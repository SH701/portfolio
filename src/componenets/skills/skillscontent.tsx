"use client";

import { motion } from "framer-motion";
import { TabKey, tabs } from "@/data/skillsdata";
import { SkillContent } from "@/lib/motion";

interface Props {
  activeTab: TabKey;
}

export default function SkillsContent({ activeTab }: Props) {
  const activeItems = tabs.find((t) => t.key === activeTab)?.items ?? [];

  return (
    <section className="relative sm:-translate-y-6 min-h-[600px]">
      <motion.ul initial="init" animate="on">
        <p className="mb-3 flex flex-row gap-1">
          Skill Stack <span className="text-orange-500">{activeTab}</span>
        </p>
        {activeItems.map((item) => (
          <motion.li
            variants={SkillContent}
            key={item.name}
            className="flex items-center lg:gap-5 gap-3 "
          >
            <div className="lg:size-16 size-12 flex items-center justify-center rounded-full bg-gray-600 shadow-sm">
              {item.Icon && (
                <item.Icon className="lg:size-10 size-8" color={item.color} />
              )}
            </div>
            <div className="flex flex-col mt-3">
              <h3 className="text-white pl-1 lg:text-2xl ">{item.name}</h3>
              <p className="text-xs text-gray-100 pb-3 pl-1 pr-5 lg:text-base">
                - {item.description}
              </p>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
