import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Segmented from "./Segmented";
import type { SegmentedProps } from "./Segmented";

const scopes = [
  { value: "all", label: "Overall" },
  { value: "home", label: "Home" },
  { value: "away", label: "Away" },
];

const meta = {
  title: "Primitives/Segmented",
  component: Segmented,
  args: { options: scopes, value: "all", onChange: () => {}, ariaLabel: "Table scope" },
  argTypes: { size: { control: "select", options: ["md", "lg"] }, role: { control: "select", options: ["group", "tablist"] } },
} satisfies Meta<typeof Segmented>;

export default meta;
type Story = StoryObj<typeof meta>;

function Controlled(props: SegmentedProps) {
  const [value, setValue] = useState(props.value);
  return <Segmented {...props} value={value} onChange={setValue} />;
}

export const Default: Story = { render: (args) => <Controlled {...args} /> };

export const Large: Story = { args: { size: "lg" }, render: (args) => <Controlled {...args} /> };

export const Tabs: Story = {
  args: { role: "tablist", ariaLabel: "Profile sections", options: [{ value: "overview", label: "Overview" }, { value: "games", label: "Games" }, { value: "history", label: "History", disabled: true }], value: "overview" },
  render: (args) => <Controlled {...args} />,
};

export const TabsWithPanels: Story = {
  args: {
    role: "tablist",
    ariaLabel: "Sections",
    options: [
      { value: "a", label: "First", id: "tab-a", controls: "panel-a" },
      { value: "b", label: "Second", id: "tab-b", controls: "panel-b" },
    ],
    value: "a",
  },
  render: (args) => <Controlled {...args} />,
};

export const Stretch: Story = { args: { stretch: true, size: "lg" }, render: (args) => <Controlled {...args} /> };

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: 12, justifyItems: "start" }}>
      <Controlled {...args} />
      <Controlled {...args} size="lg" />
      <Controlled {...args} role="tablist" />
    </div>
  ),
};
