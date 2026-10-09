import type { Meta, StoryObj } from "@storybook/react-vite";
import TrendBadge from "./TrendBadge";

const meta = {
  title: "Data Display/TrendBadge",
  component: TrendBadge,
  args: { trend: 3, title: "Places gained or lost over the last five matchdays" },
} satisfies Meta<typeof TrendBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Up: Story = {};

export const Down: Story = { args: { trend: -2 } };

export const Flat: Story = { args: { trend: 0 } };

export const NoComparison: Story = { args: { trend: null } };

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 16 }}>
      <TrendBadge {...args} trend={3} />
      <TrendBadge {...args} trend={-2} />
      <TrendBadge {...args} trend={0} />
      <TrendBadge {...args} trend={null} />
    </div>
  ),
};
