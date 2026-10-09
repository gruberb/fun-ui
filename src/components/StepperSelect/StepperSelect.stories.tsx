import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import StepperSelect from "./StepperSelect";
import type { StepperSelectProps } from "./StepperSelect";

const rounds = Array.from({ length: 10 }, (_, index) => ({ value: String(index + 1), label: `Matchday ${index + 1}` }));

const meta = {
  title: "Primitives/StepperSelect",
  component: StepperSelect,
  args: { label: "Matchday", value: "4", options: rounds, onChange: () => {} },
} satisfies Meta<typeof StepperSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

function Controlled(props: StepperSelectProps) {
  const [value, setValue] = useState(props.value);
  return <StepperSelect {...props} value={value} onChange={setValue} />;
}

export const Default: Story = { render: (args) => <Controlled {...args} /> };

export const FirstOption: Story = { args: { value: "1" } };

export const LastOption: Story = { args: { value: "10" } };

export const AllStates: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Controlled {...args} />
      <StepperSelect {...args} value="1" />
      <StepperSelect {...args} value="10" />
      <StepperSelect label="Season" value="2025" options={[{ value: "2024", label: "2024/25" }, { value: "2025", label: "2025/26" }]} onChange={() => {}} />
    </div>
  ),
};
