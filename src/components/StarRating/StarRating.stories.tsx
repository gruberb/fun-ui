import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import StarRating from "./StarRating";

const meta = {
  title: "Feedback/StarRating",
  component: StarRating,
} satisfies Meta<typeof StarRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: 0, onChange: () => {} },
};

export const WithValue: Story = {
  args: { value: 3, onChange: () => {} },
};

export const Interactive: Story = {
  render: () => {
    const [rating, setRating] = useState(0);
    return (
      <div>
        <StarRating value={rating} onChange={setRating} />
        <p className="fui-label" style={{ marginTop: 8, fontSize: 11, color: "var(--fui-muted)" }}>
          {rating > 0 ? `${rating} / 5 stars` : "Click to rate"}
        </p>
      </div>
    );
  },
};

export const TenStars: Story = {
  render: () => {
    const [rating, setRating] = useState(0);
    return <StarRating max={10} value={rating} onChange={setRating} />;
  },
};
