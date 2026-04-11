import type { Meta, StoryObj } from "@storybook/react-vite";
import ErrorBoundary from "./ErrorBoundary";

const ThrowError = () => {
  throw new Error("Test error: something broke!");
};

const meta = {
  title: "Feedback/ErrorBoundary",
  component: ErrorBoundary,
} satisfies Meta<typeof ErrorBoundary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p>This content renders normally because no error is thrown.</p>,
  },
};

export const WithError: Story = {
  render: () => (
    <ErrorBoundary>
      <ThrowError />
    </ErrorBoundary>
  ),
};

export const CustomFallback: Story = {
  render: () => (
    <ErrorBoundary
      fallback={
        <div className="brutal-card p-6 text-center">
          <h2>Custom Fallback</h2>
          <p className="text-sm">You can provide your own fallback UI.</p>
        </div>
      }
    >
      <ThrowError />
    </ErrorBoundary>
  ),
};
