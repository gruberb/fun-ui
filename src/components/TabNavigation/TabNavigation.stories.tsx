import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import TabNavigation from "./TabNavigation";

const meta = {
  title: "Navigation/TabNavigation",
  component: TabNavigation,
} satisfies Meta<typeof TabNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [
      { id: "status", label: "Status" },
      { id: "schedule", label: "Schedule" },
      { id: "swimmers", label: "Swimmers" },
    ],
    activeTab: "status",
    onTabChange: () => {},
  },
};

export const Interactive: Story = {
  render: () => {
    const [active, setActive] = useState("games");
    return (
      <TabNavigation
        tabs={[
          { id: "games", label: "Games" },
          { id: "rankings", label: "Rankings" },
          { id: "teams", label: "Teams" },
          { id: "players", label: "Players" },
        ]}
        activeTab={active}
        onTabChange={setActive}
      />
    );
  },
};

export const TwoTabs: Story = {
  args: {
    tabs: [
      { id: "this-week", label: "This Week" },
      { id: "next-week", label: "Next Week" },
    ],
    activeTab: "this-week",
    onTabChange: () => {},
  },
};

export const WithPanelWiring: Story = {
  args: {
    ariaLabel: "Sections",
    className: "my-tabs",
    tabs: [
      { id: "status", label: "Status", buttonId: "tab-status", controls: "panel-status" },
      { id: "schedule", label: "Schedule", buttonId: "tab-schedule", controls: "panel-schedule" },
    ],
    activeTab: "status",
    onTabChange: () => {},
  },
};
