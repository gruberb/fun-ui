import type { Meta, StoryObj } from "@storybook/react-vite";
import CardHead from "./CardHead";
import SimpleCardHead from "./SimpleCardHead";

const meta = {
  title: "Layout/CardHead",
  component: CardHead,
  args: { eyebrow: "Matchday 12", title: "Top teams", subtitle: "Ranked by points" },
  decorators: [(Story) => <div style={{ border: "1px solid var(--fui-line)", background: "var(--fui-raised)", maxWidth: 560 }}><Story /></div>],
} satisfies Meta<typeof CardHead>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithAction: Story = {
  args: { action: <button type="button">Show all</button> },
};

export const TitleOnly: Story = { args: { eyebrow: undefined, subtitle: undefined } };

export const Simple: Story = {
  render: () => <SimpleCardHead title="Fixtures" action={<button type="button" style={{ border: 0, background: "none", color: "var(--fui-accent)" }}>Filter</button>} />,
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: 16 }}>
      <CardHead {...args} />
      <CardHead {...args} action={<button type="button">Show all</button>} />
      <SimpleCardHead title="Simple head" />
    </div>
  ),
};
