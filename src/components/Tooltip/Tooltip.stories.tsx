import type { Meta, StoryObj } from "@storybook/react-vite";
import Tooltip from "./Tooltip";
import Badge from "../Badge/Badge";

const meta = {
  title: "Data/Tooltip",
  component: Tooltip,
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "This is a tooltip",
    children: <span className="font-bold uppercase tracking-wider text-sm cursor-help underline">Hover me</span>,
  },
  decorators: [(Story) => <div style={{ paddingTop: "4rem" }}><Story /></div>],
};

export const OnBadge: Story = {
  render: () => (
    <div style={{ paddingTop: "4rem" }}>
      <Tooltip text="3 points scored today">
        <Badge variant="success">+3 PTS</Badge>
      </Tooltip>
    </div>
  ),
};
