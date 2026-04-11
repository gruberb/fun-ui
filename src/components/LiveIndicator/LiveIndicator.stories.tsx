import type { Meta, StoryObj } from "@storybook/react-vite";
import LiveIndicator from "./LiveIndicator";

const meta = {
  title: "Data/LiveIndicator",
  component: LiveIndicator,
} satisfies Meta<typeof LiveIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomLabel: Story = {
  args: { label: "In Progress" },
};

export const InContext: Story = {
  render: () => (
    <div className="brutal-card p-4 flex items-center justify-between" style={{ maxWidth: 300 }}>
      <span className="font-bold uppercase tracking-wider text-sm">Game Status</span>
      <LiveIndicator />
    </div>
  ),
};
