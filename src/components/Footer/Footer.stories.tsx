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
        <span className="fui-label" style={{ fontSize: 11 }}>
          How Can I Play This Game?
        </span>
        <span className="fui-label" style={{ fontSize: 11, color: "var(--fui-muted)" }}>
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

export const CustomPadding: Story = {
  args: { author: "fun-ui", authorUrl: "https://example.com" },
  render: (args) => (
    <div style={{ ["--fui-footer-padding" as string]: "8px 0", ["--fui-footer-link-decoration" as string]: "none" }}>
      <Footer {...args} />
    </div>
  ),
};
