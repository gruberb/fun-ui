import type { Meta, StoryObj } from "@storybook/react-vite";
import PageHeader from "./PageHeader";
import StepperSelect from "../StepperSelect/StepperSelect";

const seasons = [
  { value: "2024", label: "2024/25" },
  { value: "2025", label: "2025/26" },
];

const meta = {
  title: "Layout/PageHeader",
  component: PageHeader,
  args: { title: "Players" },
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithEyebrowAndDescription: Story = {
  args: {
    eyebrow: "Alpha League",
    title: "Players",
    description: "Season totals for every player, sortable by any column.",
  },
};

export const WithTitleNote: Story = {
  args: { title: "Matchday 12", titleNote: "2025/26", eyebrow: "Alpha League" },
};

export const WithControls: Story = {
  args: {
    eyebrow: "Alpha League",
    title: "Table",
    controls: <StepperSelect label="Season" value="2025" options={seasons} onChange={() => {}} />,
  },
};

export const Hero: Story = {
  args: {
    variant: "hero",
    eyebrow: "Alpha League",
    title: "Overview",
    description: "Standings, rank history and form at a glance.",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 24 }}>
      <PageHeader title="Default" />
      <PageHeader eyebrow="Eyebrow" title="With description" description="A short sentence under the title." />
      <PageHeader title="With note" titleNote="2025/26" />
      <PageHeader variant="hero" eyebrow="Eyebrow" title="Hero" description="Full-bleed grid-paper band." />
    </div>
  ),
};
