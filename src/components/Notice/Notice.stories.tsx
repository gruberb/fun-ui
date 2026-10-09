import type { Meta, StoryObj } from "@storybook/react-vite";
import Notice from "./Notice";

const meta = {
  title: "Feedback/Notice",
  component: Notice,
  args: { children: "Two of five sources are limited right now." },
  argTypes: { tone: { control: "select", options: ["neutral", "warn", "error"] } },
} satisfies Meta<typeof Notice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {};

export const Warn: Story = { args: { tone: "warn", children: "The news feed is older than 36 hours." } };

export const Error: Story = { args: { tone: "error", title: "Feed unavailable.", children: "The last run could not read any source." } };

export const AllTones: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 12 }}>
      <Notice>All sources reachable, one feed is not mapped to a club.</Notice>
      <Notice tone="warn" title="Stale.">The news feed is older than 36 hours.</Notice>
      <Notice tone="error" title="Feed unavailable.">The last run could not read any source.</Notice>
    </div>
  ),
};
