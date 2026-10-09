import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import EmptyState from "./EmptyState";

const PlaceholderIcon = () => (
  <svg
    width="100%"
    height="100%"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeWidth={1}
      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
    />
  </svg>
);

const meta = {
  title: "Feedback/EmptyState",
  component: EmptyState,
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: "No data available",
    description: "There's nothing to show right now. Check back later.",
  },
};

export const WithIcon: Story = {
  args: {
    icon: <PlaceholderIcon />,
    heading: "No games scheduled",
    description: "There are no games on this date.",
  },
};

export const WithAction: Story = {
  args: {
    icon: <PlaceholderIcon />,
    heading: "No teams found",
    description: "Try adjusting your search or filters.",
    action: { label: "Reset Filters", onClick: fn() },
  },
};

export const Dashed: Story = {
  args: { variant: "dashed", heading: "No entries yet", description: "Entries appear here once added." },
};
