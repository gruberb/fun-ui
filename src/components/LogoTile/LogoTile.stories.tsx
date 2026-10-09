import type { Meta, StoryObj } from "@storybook/react-vite";
import LogoTile from "./LogoTile";

const logo = "data:image/svg+xml;utf8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="#206080"/><path d="M20 8l4 8h8l-6.5 5 2.5 9-8-5-8 5 2.5-9L8 16h8z" fill="#fdfaf2"/></svg>',
);

const meta = {
  title: "Primitives/LogoTile",
  component: LogoTile,
  args: { code: "ALP", url: logo },
  argTypes: { size: { control: "select", options: ["md", "lg"] } },
} satisfies Meta<typeof LogoTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {};

export const TextFallback: Story = { args: { url: null } };

export const BrokenImage: Story = { args: { url: "/missing-logo.png" } };

export const Large: Story = { args: { size: "lg" } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <LogoTile code="ALP" url={logo} />
      <LogoTile code="BRV" />
      <LogoTile code="CHA" url={logo} size="lg" />
      <LogoTile code="DEL" size="lg" />
      <LogoTile code="ECH" size={22} />
    </div>
  ),
};
