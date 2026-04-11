import type { Meta, StoryObj } from "@storybook/react-vite";
import Footer from "./Footer";

const meta = {
  title: "Layout/Footer",
  component: Footer,
  argTypes: {
    author: { control: "text" },
    authorUrl: { control: "text" },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithAuthor: Story = {
  args: {
    author: "Built by Bastian",
    authorUrl: "https://gruebelei.com",
  },
};

export const WithCustomContent: Story = {
  args: {
    children: (
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
          How Can I Play This Game?
        </span>
        <span style={{ fontSize: "0.75rem", color: "var(--color-brutal-gray)" }}>
          2025
        </span>
      </div>
    ),
  },
};

export const Simple: Story = {
  args: {
    author: "fun-ui",
  },
};
