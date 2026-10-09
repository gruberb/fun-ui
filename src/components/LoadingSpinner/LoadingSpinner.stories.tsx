import type { Meta, StoryObj } from "@storybook/react-vite";
import LoadingSpinner from "./LoadingSpinner";

const meta = {
  title: "Feedback/LoadingSpinner",
  component: LoadingSpinner,
  argTypes: {
    size: { control: "select", options: ["small", "medium", "large"] },
    message: { control: "text" },
    variant: { control: "select", options: ["spinner", "skeleton"] },
  },
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = { args: { size: "small", message: "Loading..." } };
export const Large: Story = { args: { size: "large", message: "Crunching data..." } };
export const Skeleton: Story = { args: { variant: "skeleton" } };
export const NoMessage: Story = { args: { message: "" } };

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "3rem", alignItems: "flex-start" }}>
      <LoadingSpinner size="small" message="Small" />
      <LoadingSpinner size="medium" message="Medium" />
      <LoadingSpinner size="large" message="Large" />
    </div>
  ),
};
