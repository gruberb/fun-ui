import type { Meta, StoryObj } from "@storybook/react-vite";
import PageHeader from "./PageHeader";
import Button from "../Button/Button";

const meta = {
  title: "Layout/PageHeader",
  component: PageHeader,
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: "Dashboard" },
};

export const WithSubtitle: Story = {
  args: {
    title: "Season Rankings",
    subtitle: "2024-25 Fantasy Hockey Season",
  },
};

export const WithBadge: Story = {
  args: {
    title: "Daily Rankings",
    subtitle: "Points scored today",
    badge: "Live",
  },
};

export const WithChildren: Story = {
  args: {
    title: "Teams",
    subtitle: "Manage your fantasy teams",
  },
  render: (args) => (
    <PageHeader {...args}>
      <Button size="sm">Add Team</Button>
    </PageHeader>
  ),
};
