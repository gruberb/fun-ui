import type { Meta, StoryObj } from "@storybook/react-vite";
import StatCard from "./StatCard";

const meta = {
  title: "Data/StatCard",
  component: StatCard,
  argTypes: {
    trend: { control: "select", options: ["up", "down", "neutral", undefined] },
  },
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Total Points", value: 142 },
};

export const TrendUp: Story = {
  args: { label: "Goals", value: 68, trend: "up" },
};

export const TrendDown: Story = {
  args: { label: "Assists", value: 12, trend: "down" },
};

export const Grid: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
      <StatCard label="Goals" value={68} trend="up" />
      <StatCard label="Assists" value={74} trend="neutral" />
      <StatCard label="Total Points" value={142} trend="up" />
    </div>
  ),
};
