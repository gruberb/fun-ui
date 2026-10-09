import type { Meta, StoryObj } from "@storybook/react-vite";
import FormChip from "./FormChip";
import FormChips from "./FormChips";

const meta = {
  title: "Data Display/FormChip",
  component: FormChip,
  args: { outcome: "win" },
  argTypes: { outcome: { control: "select", options: ["win", "draw", "loss"] } },
} satisfies Meta<typeof FormChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Win: Story = { args: { outcome: "win" } };

export const Draw: Story = { args: { outcome: "draw" } };

export const Loss: Story = { args: { outcome: "loss" } };

export const CustomGlyph: Story = { args: { outcome: "win", children: "S" } };

export const Chips: Story = {
  render: () => (
    <FormChips>
      <FormChip outcome="win" />
      <FormChip outcome="win" />
      <FormChip outcome="draw" />
      <FormChip outcome="loss" />
      <FormChip outcome="win" />
    </FormChips>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 12, justifyItems: "start" }}>
      <FormChips>
        <FormChip outcome="win" />
        <FormChip outcome="draw" />
        <FormChip outcome="loss" />
      </FormChips>
      <FormChips />
    </div>
  ),
};
