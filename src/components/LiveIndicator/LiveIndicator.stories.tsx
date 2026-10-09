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
    <div className="fui-card" style={{ maxWidth: 300, display: "flex", alignItems: "center", justifyContent: "space-between", padding: 16 }}>
      <span className="fui-label">Game Status</span>
      <LiveIndicator />
    </div>
  ),
};
