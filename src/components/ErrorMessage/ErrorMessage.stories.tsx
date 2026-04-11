import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import ErrorMessage from "./ErrorMessage";

const meta = {
  title: "Feedback/ErrorMessage",
  component: ErrorMessage,
  argTypes: {
    message: { control: "text" },
  },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomMessage: Story = {
  args: { message: "Failed to load player data." },
};

export const WithRetry: Story = {
  args: {
    message: "Network request failed.",
    onRetry: fn(),
  },
};
