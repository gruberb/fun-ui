import type { Meta, StoryObj } from "@storybook/react-vite";

const colors = [
  { name: "brutal-black", hex: "#1A1A1A" },
  { name: "brutal-white", hex: "#FAFAFA" },
  { name: "brutal-cream", hex: "#F5F0E8" },
  { name: "brutal-blue", hex: "#2563EB" },
  { name: "brutal-red", hex: "#EF4444" },
  { name: "brutal-yellow", hex: "#FACC15" },
  { name: "brutal-green", hex: "#16A34A" },
  { name: "brutal-pink", hex: "#EC4899" },
  { name: "brutal-teal", hex: "#14B8A6" },
  { name: "brutal-orange", hex: "#F97316" },
  { name: "brutal-purple", hex: "#8B5CF6" },
  { name: "brutal-gray", hex: "#6B7280" },
];

const ColorSwatch = ({ name, hex }: { name: string; hex: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
    <div
      style={{
        width: 48,
        height: 48,
        backgroundColor: hex,
        border: "2px solid #1A1A1A",
        flexShrink: 0,
      }}
    />
    <div>
      <div style={{ fontWeight: 700, fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
        {name}
      </div>
      <div style={{ fontSize: "0.75rem", color: "#6B7280", fontFamily: "monospace" }}>{hex}</div>
    </div>
  </div>
);

const TokensPage = () => null;

const meta = {
  title: "Tokens/Overview",
  component: TokensPage,
} satisfies Meta<typeof TokensPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: "1.5rem" }}>Color Palette</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
        {colors.map((c) => (
          <ColorSwatch key={c.name} {...c} />
        ))}
      </div>
    </div>
  ),
};

export const Typography: Story = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: "1.5rem" }}>Typography</h2>

      <div style={{ marginBottom: "2rem" }}>
        <p className="stat-label" style={{ marginBottom: "0.5rem" }}>Display Font: Space Grotesk</p>
        <div style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
          <h1>Heading 1 — The Quick Brown Fox</h1>
          <h2>Heading 2 — Jumps Over The Lazy Dog</h2>
          <h3 style={{ fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Heading 3 — Pack My Box With Five Dozen
          </h3>
        </div>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <p className="stat-label" style={{ marginBottom: "0.5rem" }}>Body Font: Inter</p>
        <div style={{ fontFamily: '"Inter", sans-serif' }}>
          <p style={{ fontSize: "1rem", lineHeight: 1.6 }}>
            Body text at 16px. The brutalist aesthetic demands bold borders, hard shadows, and sharp
            corners — but body text stays readable with Inter's clean geometry.
          </p>
          <p style={{ fontSize: "0.875rem", color: "#6B7280", lineHeight: 1.6 }}>
            Secondary text at 14px. Used for descriptions, subtitles, and metadata.
          </p>
        </div>
      </div>

      <div>
        <p className="stat-label" style={{ marginBottom: "0.5rem" }}>Label Styles</p>
        <div style={{ display: "flex", gap: "2rem", alignItems: "baseline" }}>
          <span className="font-bold uppercase tracking-wider text-sm">Button / Label</span>
          <span className="stat-label">Stat Label</span>
          <span className="brutal-badge" style={{ background: "var(--color-brutal-cream)" }}>Badge</span>
        </div>
      </div>
    </div>
  ),
};

export const ShadowsAndBorders: Story = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: "1.5rem" }}>Shadows & Borders</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
        <div>
          <div
            style={{
              width: "100%",
              height: 80,
              border: "2px solid #1A1A1A",
              boxShadow: "4px 4px 0px 0px #1A1A1A",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span className="stat-label">shadow-brutal</span>
          </div>
          <p style={{ fontSize: "0.75rem", marginTop: "0.5rem", fontFamily: "monospace", color: "#6B7280" }}>
            4px 4px 0px 0px #1A1A1A
          </p>
        </div>
        <div>
          <div
            style={{
              width: "100%",
              height: 80,
              border: "2px solid #1A1A1A",
              boxShadow: "2px 2px 0px 0px #1A1A1A",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span className="stat-label">shadow-brutal-sm</span>
          </div>
          <p style={{ fontSize: "0.75rem", marginTop: "0.5rem", fontFamily: "monospace", color: "#6B7280" }}>
            2px 2px 0px 0px #1A1A1A
          </p>
        </div>
        <div>
          <div
            style={{
              width: "100%",
              height: 80,
              border: "2px solid #1A1A1A",
              background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span className="stat-label">No shadow</span>
          </div>
          <p style={{ fontSize: "0.75rem", marginTop: "0.5rem", fontFamily: "monospace", color: "#6B7280" }}>
            border: 2px solid #1A1A1A
          </p>
        </div>
      </div>

      <h3 style={{ marginTop: "2rem", marginBottom: "1rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
        Border Widths
      </h3>
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {[1, 2, 3, 4].map((w) => (
          <div key={w} style={{ textAlign: "center" }}>
            <div
              style={{
                width: 60,
                height: 60,
                border: `${w}px solid #1A1A1A`,
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "0.75rem", fontWeight: 700 }}>{w}px</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
