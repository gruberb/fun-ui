import type { Meta, StoryObj } from "@storybook/react-vite";
import Badge from "./Badge";

const meta = {
  title: "Primitives/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: ["win", "loss", "warn", "accent", "neutral"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Win: Story = { args: { children: "Win", variant: "win" } };
export const Loss: Story = { args: { children: "Loss", variant: "loss" } };
export const Warn: Story = { args: { children: "Warn", variant: "warn" } };
export const Accent: Story = { args: { children: "Accent", variant: "accent" } };
export const Neutral: Story = { args: { children: "Neutral", variant: "neutral" } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
      <Badge variant="win">Win</Badge>
      <Badge variant="loss">Loss</Badge>
      <Badge variant="warn">Warn</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="neutral">Neutral</Badge>
    </div>
  ),
};
