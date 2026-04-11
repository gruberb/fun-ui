import type { Meta, StoryObj } from "@storybook/react-vite";
import StatusBox from "./StatusBox";

const meta = {
  title: "Feedback/StatusBox",
  component: StatusBox,
  argTypes: {
    status: {
      control: "select",
      options: ["positive", "negative", "warning", "info"],
    },
  },
} satisfies Meta<typeof StatusBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Positive: Story = {
  args: {
    title: "Lane Swimming",
    status: "positive",
    label: "YES",
    description: "Open until 4:00 PM",
  },
};

export const Negative: Story = {
  args: {
    title: "Kids Pool",
    status: "negative",
    label: "NO",
    description: "Opens at 1:00 PM",
  },
};

export const Warning: Story = {
  args: {
    title: "Members Only",
    status: "warning",
    label: "MAYBE",
    description: "Restricted access until noon",
  },
};

export const Info: Story = {
  args: {
    title: "Library",
    status: "info",
    label: "OPEN",
    description: "Closes in 3 hours",
  },
};

export const Grid: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
      <StatusBox title="Lane Swimming" status="positive" label="YES" description="Open now" />
      <StatusBox title="Kids Pool" status="negative" label="NO" description="Closed today" />
    </div>
  ),
};
