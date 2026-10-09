import type { ReactNode } from "react";

interface Tab {
  id: string;
  label: string;
  icon?: ReactNode;
  /** DOM id of the tab button (`id` is the tab key), e.g. for a tabpanel's aria-labelledby. */
  buttonId?: string;
  /** Id of the controlled tabpanel, rendered as aria-controls. */
  controls?: string;
}

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  ariaLabel?: string;
  className?: string;
}

const TabNavigation = ({ tabs, activeTab, onTabChange, ariaLabel, className = "" }: TabNavigationProps) => {
  return (
    <div className={`fui-tabs ${className}`.trim()} role="tablist" aria-label={ariaLabel}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          id={tab.buttonId}
          aria-controls={tab.controls}
          aria-selected={activeTab === tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`fui-tabs__tab ${activeTab === tab.id ? "is-active" : ""}`}
        >
          {tab.icon && <span className="fui-tabs__icon">{tab.icon}</span>}
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
