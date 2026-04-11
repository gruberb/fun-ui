import type { Meta, StoryObj } from "@storybook/react-vite";
import ProgressBar from "./ProgressBar";

const meta = {
  title: "Feedback/ProgressBar",
  component: ProgressBar,
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100 } },
    variant: {
      control: "select",
      options: ["default", "success", "warning"],
    },
    showPercentage: { control: "boolean" },
    label: { control: "text" },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: 60 },
};

export const WithLabel: Story = {
  args: { value: 75, label: "Progress", showPercentage: true },
};

export const Success: Story = {
  args: { value: 100, variant: "success", label: "Complete", showPercentage: true },
};

export const Warning: Story = {
  args: { value: 30, variant: "warning", label: "Low", showPercentage: true },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "400px" }}>
      <ProgressBar value={40} label="Default" variant="default" showPercentage />
      <ProgressBar value={80} label="Success" variant="success" showPercentage />
      <ProgressBar value={25} label="Warning" variant="warning" showPercentage />
    </div>
  ),
};
