import type { Meta, StoryObj } from "@storybook/react-vite";
import Tag from "./Tag";

const meta = {
  title: "Primitives/Tag",
  component: Tag,
  args: { children: "Midfield" },
  argTypes: { series: { control: "select", options: [undefined, 1, 2, 3, 4] } },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {};

export const Series1: Story = { args: { series: 1, children: "Goalkeeper" } };

export const Series2: Story = { args: { series: 2, children: "Defender" } };

export const Series3: Story = { args: { series: 3, children: "Midfield" } };

export const Series4: Story = { args: { series: 4, children: "Forward" } };

export const AllSeries: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Tag>Neutral</Tag>
      <Tag series={1}>Goalkeeper</Tag>
      <Tag series={2}>Defender</Tag>
      <Tag series={3}>Midfield</Tag>
      <Tag series={4}>Forward</Tag>
    </div>
  ),
};
