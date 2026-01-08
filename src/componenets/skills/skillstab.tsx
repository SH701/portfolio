import { TabKey, tabs } from "@/data/skillsdata";

interface Props {
  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;
}

export default function SkillsTab({ activeTab, setActiveTab }: Props) {
  return (
    <nav className="flex md:flex-col items-start gap-0 flex-row pb-4 md:gap-5">
      {tabs.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => setActiveTab(key)}
          className={`p-2 md:rounded-md lg:w-25 lg:h-15 lg:text-xl
            md:border md:border-orange-600 hover:-translate-y-1 hover:text-orange-600 cursor-pointer duration-300 border-b-2
            ${activeTab === key ? "text-orange-500" : ""}
          `}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
