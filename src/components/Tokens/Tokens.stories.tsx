import type { Meta, StoryObj } from "@storybook/react-vite";

const palette = [
  "red", "cadmium", "azure", "sap", "chrome", "sepia",
  "greyish-orange", "warm-grey", "greyish-rose", "purple", "madder", "terracotta",
];

const roles = [
  "paper", "panel", "raised", "ink", "ink-2", "muted", "accent", "accent-soft",
  "win", "draw", "loss", "warn", "win-soft", "loss-soft", "warn-soft",
  "line", "line-soft", "line-strong",
];

/** Resolves a --fui-* token to its computed colour as #rrggbb. */
const toHex = (el: HTMLElement, name: string) => {
  const probe = document.createElement("span");
  probe.style.color = `var(--fui-${name})`;
  el.appendChild(probe);
  const m = getComputedStyle(probe).color.match(/\d+(\.\d+)?/g);
  probe.remove();
  return m ? "#" + m.slice(0, 3).map((v) => Math.round(Number(v)).toString(16).padStart(2, "0")).join("") : "";
};

const Swatch = ({ name }: { name: string }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
    <div style={{ width: 48, height: 48, flex: "none", background: `var(--fui-${name})`, border: "1px solid var(--fui-line-strong)" }} />
    <div>
      <div className="fui-label" style={{ fontSize: 12, fontWeight: 500 }}>--fui-{name}</div>
      <div
        className="fui-label"
        style={{ fontSize: 11, color: "var(--fui-muted)" }}
        ref={(el) => {
          if (el) el.textContent = toHex(el, name);
        }}
      />
    </div>
  </div>
);

const Grid = ({ names }: { names: string[] }) => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
    {names.map((n) => <Swatch key={n} name={n} />)}
  </div>
);

const TokensPage = () => null;

const meta = {
  title: "Tokens/Overview",
  component: TokensPage,
} satisfies Meta<typeof TokensPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Palette: Story = {
  render: () => (
    <div>
      <p className="fui-kicker">Palette</p>
      <Grid names={palette} />
    </div>
  ),
};

export const Roles: Story = {
  render: () => (
    <div>
      <p className="fui-kicker">Role tokens</p>
      <Grid names={roles} />
    </div>
  ),
};

export const Typography: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 28 }}>
      <div>
        <p className="fui-kicker">Sans: Archivo</p>
        <h1 style={{ margin: 0, fontWeight: 500, letterSpacing: "-.03em" }}>Heading 1, the quick brown fox</h1>
        <h2 style={{ margin: "8px 0", fontWeight: 500, letterSpacing: "-.02em" }}>Heading 2, jumps over the lazy dog</h2>
        <p style={{ margin: 0 }}>Body text at 15px on linen paper.</p>
        <p style={{ margin: 0, color: "var(--fui-muted)", fontSize: 14 }}>Secondary text for descriptions and metadata.</p>
      </div>
      <div>
        <p className="fui-kicker">Mono: IBM Plex Mono</p>
        <div style={{ display: "flex", gap: 32, alignItems: "baseline", flexWrap: "wrap" }}>
          <span className="fui-kicker" style={{ margin: 0 }}>Kicker</span>
          <span className="fui-label" style={{ fontSize: 11 }}>Label</span>
          <span className="fui-num" style={{ fontFamily: "var(--fui-font-mono)" }}>1,234.50</span>
        </div>
      </div>
    </div>
  ),
};

export const RulesAndShadow: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
      {[
        { label: "line", style: { border: "1px solid var(--fui-line)" } },
        { label: "line-strong", style: { border: "1px solid var(--fui-line-strong)" } },
        { label: "ink", style: { border: "1px solid var(--fui-ink)" } },
        { label: "shadow-pop (popovers only)", style: { border: "1px solid var(--fui-ink)", boxShadow: "var(--fui-shadow-pop)" } },
      ].map((b) => (
        <div key={b.label} className="fui-label" style={{ ...b.style, height: 80, display: "grid", placeItems: "center", background: "var(--fui-raised)", fontSize: 11 }}>
          {b.label}
        </div>
      ))}
    </div>
  ),
};
