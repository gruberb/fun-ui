import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import Modal from "./Modal";
import Button from "../Button/Button";

const meta = {
  title: "Feedback/Modal",
  component: Modal,
  argTypes: {
    isOpen: { control: "boolean" },
    title: { control: "text" },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: "Confirm Action",
    children: <p>Are you sure you want to proceed?</p>,
    footer: (
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Button variant="secondary" size="sm">
          Cancel
        </Button>
        <Button variant="primary" size="sm">
          Confirm
        </Button>
      </div>
    ),
  },
};

export const Interactive: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Save Collection"
          footer={
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                Save
              </Button>
            </div>
          }
        >
          <p>Enter a name for your collection:</p>
          <input
            type="text"
            placeholder="Collection name"
            style={{ marginTop: 12, width: "100%", minHeight: 38, padding: "0 12px", border: "1px solid var(--fui-line-strong)", background: "var(--fui-raised)", borderRadius: 0 }}
          />
        </Modal>
      </>
    );
  },
};

export const LongContent: Story = {
  args: {
    isOpen: true,
    title: "Terms of Service",
    children: (
      <div style={{ maxHeight: "300px", overflow: "auto" }}>
        {Array.from({ length: 10 }, (_, i) => (
          <p key={i} style={{ marginBottom: "1rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        ))}
      </div>
    ),
    footer: (
      <Button variant="primary" size="sm">
        Accept
      </Button>
    ),
  },
};
