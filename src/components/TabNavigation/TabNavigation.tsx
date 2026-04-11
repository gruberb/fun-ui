import { ReactNode } from "react";

interface Tab {
  id: string;
  label: string;
  icon?: ReactNode;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const TabNavigation = ({ tabs, activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <div className="mb-4 md:mb-6">
      <div className="flex gap-2 md:gap-3 justify-center flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`brutal-btn px-3 py-1.5 text-sm flex items-center gap-1.5 ${
              activeTab === tab.id
                ? "bg-[var(--color-brutal-blue)] text-white shadow-[var(--shadow-brutal-sm)]"
                : "border-transparent text-[var(--color-brutal-black)]/70 hover:border-[var(--color-brutal-black)]"
            }`}
          >
            {tab.icon && <span className="w-4 h-4">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
