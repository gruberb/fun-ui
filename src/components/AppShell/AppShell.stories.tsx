import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import AppShell from "./AppShell";
import type { AppShellNavItem } from "./AppShell";
import PageHeader from "../PageHeader/PageHeader";
import DataTable from "../DataTable/DataTable";
import Segmented from "../Segmented/Segmented";
import StepperSelect from "../StepperSelect/StepperSelect";
import MatchTile from "../MatchTile/MatchTile";
import MatchTiles from "../MatchTile/MatchTiles";
import LogoTile from "../LogoTile/LogoTile";
import CardHead from "../CardHead/CardHead";
import Notice from "../Notice/Notice";

const icon = (path: string) => <svg viewBox="0 0 24 24" aria-hidden="true"><path d={path} /></svg>;

const nav: AppShellNavItem[] = [
  { id: "overview", label: "Overview", href: "#overview", icon: icon("m3.7 10.9 8.3-7 8.3 7M6 9.7V20h12V9.7") },
  { id: "fixtures", label: "Fixtures", mobileLabel: "Games", href: "#fixtures", icon: icon("M3.5 5h17v15h-17zM3.5 9.5h17M8 3v4M16 3v4") },
  { id: "tables", label: "Tables", href: "#tables", icon: icon("M9 20V9.5h6V20M3.5 20v-6.7H9M20.5 20v-5.2H15M2.5 20h19") },
  { id: "teams", label: "Teams", href: "#teams", icon: icon("M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8") },
];

const brand = (
  <a href="#overview" aria-label="Alpha League home">
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" fill="var(--fui-ink)" /></svg>
    <span>Alpha League</span>
  </a>
);

const standings = [
  { id: "alpha", name: "Alpha FC", played: 12, points: 29 },
  { id: "bravo", name: "Bravo United", played: 12, points: 26 },
  { id: "charlie", name: "Charlie Athletic", played: 12, points: 24 },
  { id: "delta", name: "Delta Town", played: 12, points: 21 },
];

const meta = {
  title: "Layout/AppShell",
  component: AppShell,
  parameters: { layout: "fullscreen" },
  args: { brand, nav, activeId: "overview", children: null },
} satisfies Meta<typeof AppShell>;

export default meta;
type Story = StoryObj<typeof meta>;

function Page() {
  const [active, setActive] = useState("overview");
  const [scope, setScope] = useState("all");
  const [round, setRound] = useState("12");
  const team = (name: string, code: string, score: number) => ({ name, label: code, logo: <LogoTile code={code} size={22} />, score });
  return (
    <AppShell brand={brand} nav={nav} activeId={active} onNavigate={setActive}>
      <PageHeader
        eyebrow="Alpha League"
        title={nav.find((item) => item.id === active)?.label ?? ""}
        titleNote="2025/26"
        description="Standings and results through the latest matchday."
        controls={
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <Segmented size="lg" ariaLabel="Scope" value={scope} onChange={setScope} options={[{ value: "all", label: "Overall" }, { value: "day", label: "Matchday only" }]} />
            <StepperSelect label="Matchday" value={round} onChange={setRound} options={Array.from({ length: 12 }, (_, index) => ({ value: String(index + 1), label: `Matchday ${index + 1}` }))} />
          </div>
        }
      />
      <div style={{ display: "grid", gap: 24 }}>
        <Notice tone="warn" title="Heads up.">Results for matchday 12 are still coming in.</Notice>
        <div style={{ border: "1px solid var(--fui-line)", background: "var(--fui-raised)" }}>
          <CardHead eyebrow="Matchday 12" title="Results" subtitle="Tap a tile to open the match" />
          <div style={{ padding: "0 18px 18px" }}>
            <MatchTiles>
              <MatchTile time="Fri 20:30" home={team("Alpha FC", "ALP", 2)} away={team("Bravo United", "BRV", 1)} />
              <MatchTile time="Sat 15:30" home={team("Charlie Athletic", "CHA", 0)} away={team("Delta Town", "DEL", 3)} />
            </MatchTiles>
          </div>
        </div>
        <DataTable
          ariaLabel="Standings"
          rows={standings}
          getRowKey={(row) => row.id}
          minWidth="480px"
          columns={[
            { id: "name", label: "Team", render: (row) => <strong>{row.name}</strong> },
            { id: "played", label: "Played", shortLabel: "P", numeric: true, render: (row) => row.played },
            { id: "points", label: "Points", shortLabel: "Pts", numeric: true, className: "fui-data-table__primary", render: (row) => row.points },
          ]}
        />
      </div>
    </AppShell>
  );
}

export const FullPage: Story = { render: () => <Page /> };

export const Empty: Story = {
  args: { children: <p style={{ padding: 40 }}>Page content goes here.</p> },
};
