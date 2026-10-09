import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import SearchInput from "./SearchInput";

const meta = {
  title: "Primitives/SearchInput",
  component: SearchInput,
  argTypes: {
    loading: { control: "boolean" },
    placeholder: { control: "text" },
  },
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "",
    placeholder: "Search games...",
  },
};

export const WithValue: Story = {
  args: {
    value: "Hades",
    placeholder: "Search games...",
  },
};

export const Loading: Story = {
  args: {
    value: "Searching...",
    loading: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div style={{ maxWidth: "400px" }}>
        <SearchInput
          value={value}
          onChange={setValue}
          onClear={() => setValue("")}
          placeholder="Type to search..."
        />
        {value && (
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: "0.875rem",
              color: "var(--fui-muted)",
            }}
          >
            Searching for: {value}
          </p>
        )}
      </div>
    );
  },
};
