import type { Meta, StoryObj } from "@storybook/react-vite";
import Card from "./Card";

const meta = {
  title: "Primitives/Card",
  component: Card,
  argTypes: {
    hover: { control: "boolean" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h2 style={{ marginTop: 0 }}>Card Title</h2>
        <p>This is a raised surface with a 1px hairline border.</p>
      </div>
    ),
  },
};

export const WithHover: Story = {
  args: {
    hover: true,
    children: (
      <div>
        <h2 style={{ marginTop: 0 }}>Hover Me</h2>
        <p>The border darkens to ink on hover.</p>
      </div>
    ),
  },
};

export const Composed: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
      <Card hover>
        <h3 style={{ marginTop: 0 }}>Feature One</h3>
        <p style={{ fontSize: "0.875rem" }}>A feature description goes here.</p>
      </Card>
      <Card hover>
        <h3 style={{ marginTop: 0 }}>Feature Two</h3>
        <p style={{ fontSize: "0.875rem" }}>Another feature description.</p>
      </Card>
      <Card hover>
        <h3 style={{ marginTop: 0 }}>Feature Three</h3>
        <p style={{ fontSize: "0.875rem" }}>Yet another feature.</p>
      </Card>
    </div>
  ),
};
