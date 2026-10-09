import type { Meta, StoryObj } from "@storybook/react-vite";
import Popover from "./Popover";
import usePopoverHover from "./usePopoverHover";
import FormChip from "../FormChip/FormChip";

function HoverDemo({ preferredWidth }: { preferredWidth?: number }) {
  const { ref, id, open, handlers } = usePopoverHover<HTMLSpanElement>();
  return (
    <div style={{ padding: 80 }}>
      <FormChip ref={ref} outcome="win" tabIndex={0} aria-label="Matchday 11: win, Alpha FC 2:1 Bravo United" {...handlers} />
      <Popover anchorRef={ref} open={open} id={id} preferredWidth={preferredWidth}>
        <header className="fui-popover__header">
          <strong className="fui-popover__title">Matchday 11</strong>
          <span className="fui-popover__meta">Win · Home</span>
        </header>
        <div className="fui-popover__body">Alpha FC 2:1 Bravo United</div>
      </Popover>
    </div>
  );
}

const meta = {
  title: "Feedback/Popover",
  component: HoverDemo,
} satisfies Meta<typeof HoverDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OnHoverOrFocus: Story = {};

export const Wide: Story = { args: { preferredWidth: 420 } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 24 }}>
      <HoverDemo />
      <HoverDemo preferredWidth={420} />
    </div>
  ),
};
