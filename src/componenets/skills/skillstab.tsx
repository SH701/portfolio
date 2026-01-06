import { TabKey, tabs } from "@/data/skillsdata";

interface Props {
  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;
}

export default function SkillsTab({ activeTab, setActiveTab }: Props) {
  return (
    <nav className="flex sm:flex-col items-start gap-0 flex-row pb-4 sm:gap-5">
      {tabs.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => setActiveTab(key)}
          className={`p-2 sm:rounded-md cursor-pointer lg:w-25 lg:h-15 lg:text-xl
            sm:border sm:border-teal-400 ani border-b-2
            ${activeTab === key ? "text-teal-300" : ""}
          `}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
