import type { Meta, StoryObj } from "@storybook/react-vite";
import Sticker from "./Sticker";
import type { StickerShape } from "./Sticker";
import Crosshair from "./Crosshair";

const shapes: StickerShape[] = ["trophy", "ball", "whistle", "boot", "coin", "flame"];

// Stickers are absolutely positioned, so each story renders them in a relative frame.
function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: "relative", width: 200, height: 200, border: "1px solid var(--fui-line)", background: "var(--fui-raised)", ["--fui-sticker-top" as string]: "40px" }}>
      <Crosshair />
      {children}
    </div>
  );
}

const meta = {
  title: "Primitives/Sticker",
  component: Sticker,
  argTypes: { shape: { control: "select", options: shapes } },
  decorators: [(Story) => <Frame><Story /></Frame>],
} satisfies Meta<typeof Sticker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Trophy: Story = { args: { shape: "trophy" } };

export const Ball: Story = { args: { shape: "ball" } };

export const Whistle: Story = { args: { shape: "whistle" } };

export const Boot: Story = { args: { shape: "boot" } };

export const Coin: Story = { args: { shape: "coin", glyph: "$" } };

export const Flame: Story = { args: { shape: "flame" } };

export const CustomBands: Story = { args: { shape: "trophy", bands: ["#206080", "#608030", "#d89c18"] } };

export const AllShapes: Story = {
  decorators: [],
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
      {shapes.map((shape) => <Frame key={shape}><Sticker shape={shape} /></Frame>)}
    </div>
  ),
};
