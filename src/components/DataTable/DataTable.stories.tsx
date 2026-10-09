import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import DataTable from "./DataTable";
import type { DataTableColumn, DataTableProps } from "./DataTable";

type Team = { id: string; name: string; played: number; won: number; points: number; region: string };

const teams: Team[] = [
  { id: "alpha", name: "Alpha FC", played: 12, won: 9, points: 29, region: "North" },
  { id: "bravo", name: "Bravo United", played: 12, won: 8, points: 26, region: "South" },
  { id: "charlie", name: "Charlie Athletic", played: 12, won: 7, points: 24, region: "North" },
  { id: "delta", name: "Delta Town", played: 12, won: 6, points: 21, region: "East" },
  { id: "echo", name: "Echo Rovers", played: 12, won: 5, points: 19, region: "West" },
  { id: "foxtrot", name: "Foxtrot City", played: 12, won: 4, points: 15, region: "South" },
  { id: "golf", name: "Golf Wanderers", played: 12, won: 3, points: 12, region: "East" },
  { id: "hotel", name: "Hotel Sporting", played: 12, won: 1, points: 7, region: "West" },
];

const columns: DataTableColumn<Team>[] = [
  { id: "name", label: "Team", render: (row) => <strong>{row.name}</strong> },
  { id: "region", label: "Region", render: (row) => row.region },
  { id: "played", label: "Played", shortLabel: "P", numeric: true, render: (row) => row.played },
  { id: "won", label: "Won", shortLabel: "W", numeric: true, render: (row) => row.won },
  { id: "points", label: "Points", shortLabel: "Pts", numeric: true, className: "fui-data-table__primary", render: (row) => row.points },
];

const meta = {
  title: "Data Display/DataTable",
  component: DataTable<Team>,
  args: { rows: teams, columns, getRowKey: (row: Team) => row.id, minWidth: "560px", ariaLabel: "League table" },
} satisfies Meta<typeof DataTable<Team>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Compact: Story = { args: { variant: "compact" } };

export const Loading: Story = { args: { loading: true } };

export const Empty: Story = { args: { rows: [], emptyMessage: "No teams match this selection." } };

export const BoundedRows: Story = { args: { maxVisibleRows: 4, countLabel: "8 teams" } };

export const ClickableRows: Story = {
  args: { onRowClick: (row: Team) => alert(`Open ${row.name}`) },
};

function SearchFiltersAndSortingDemo(args: DataTableProps<Team>) {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("all");
  const [descending, setDescending] = useState(true);
  const rows = teams
    .filter((team) => team.name.toLowerCase().includes(query.toLowerCase()))
    .filter((team) => region === "all" || team.region === region)
    .sort((a, b) => (descending ? b.points - a.points : a.points - b.points));
  const sortable = columns.map((column) =>
    column.id === "points"
      ? { ...column, sort: { active: true, direction: descending ? ("desc" as const) : ("asc" as const), onSort: () => setDescending(!descending) } }
      : column,
  );
  return (
    <DataTable
      {...args}
      rows={rows}
      columns={sortable}
      search={{ value: query, placeholder: "Search teams", onChange: setQuery }}
      filters={[{
        id: "region",
        label: "Region",
        value: region,
        onChange: setRegion,
        options: [{ value: "all", label: "All regions" }, ...["North", "South", "East", "West"].map((value) => ({ value, label: value }))],
      }]}
      countLabel={`${rows.length} teams`}
    />
  );
}

export const SearchFiltersAndSorting: Story = {
  render: (args) => <SearchFiltersAndSortingDemo {...args} />,
};

export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: "grid", gap: 24 }}>
      <DataTable {...args} />
      <DataTable {...args} variant="compact" maxVisibleRows={3} countLabel="Compact, bounded" />
      <DataTable {...args} rows={[]} />
      <DataTable {...args} loading />
    </div>
  ),
};
