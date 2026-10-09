import type { Meta, StoryObj } from "@storybook/react-vite";
import Portrait from "./Portrait";

const photo = "data:image/svg+xml;utf8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 46"><rect width="40" height="46" fill="#d0c0c0"/><circle cx="20" cy="18" r="8" fill="#786060"/><path d="M4 46c0-12 7-18 16-18s16 6 16 18z" fill="#786060"/></svg>',
);
const crest = "data:image/svg+xml;utf8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><circle cx="20" cy="20" r="16" fill="#206080"/></svg>',
);

const meta = {
  title: "Primitives/Portrait",
  component: Portrait,
  args: { label: "Photo of Alex Example", url: photo, fallbackCode: "ALP", fallbackUrl: crest },
  argTypes: { size: { control: "select", options: ["md", "lg"] } },
} satisfies Meta<typeof Portrait>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithPhoto: Story = {};

export const LogoFallback: Story = { args: { url: null } };

export const TextFallback: Story = { args: { url: null, fallbackUrl: null } };

export const Large: Story = { args: { size: "lg" } };

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 12 }}>
      <Portrait {...args} />
      <Portrait {...args} url={null} />
      <Portrait {...args} url={null} fallbackUrl={null} />
      <Portrait {...args} size="lg" />
      <Portrait {...args} width={30} />
    </div>
  ),
};
