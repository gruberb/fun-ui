import type { Meta, StoryObj } from "@storybook/react-vite";
import DataTable from "./DataTable";
import type { Column } from "./types";

const sampleColumns: Column[] = [
  { key: "rank", header: "#" },
  { key: "name", header: "Name" },
  { key: "points", header: "Points", sortable: true },
  { key: "goals", header: "Goals", sortable: true },
  { key: "assists", header: "Assists", sortable: true, responsive: "md" },
  { key: "gamesPlayed", header: "GP", responsive: "lg" },
];

const sampleData = [
  { id: 1, rank: 1, name: "Team Alpha", points: 142, goals: 68, assists: 74, gamesPlayed: 82 },
  { id: 2, rank: 2, name: "Team Beta", points: 138, goals: 71, assists: 67, gamesPlayed: 82 },
  { id: 3, rank: 3, name: "Team Gamma", points: 125, goals: 59, assists: 66, gamesPlayed: 82 },
  { id: 4, rank: 4, name: "Team Delta", points: 119, goals: 54, assists: 65, gamesPlayed: 82 },
  { id: 5, rank: 5, name: "Team Epsilon", points: 112, goals: 51, assists: 61, gamesPlayed: 82 },
  { id: 6, rank: 6, name: "Team Zeta", points: 108, goals: 49, assists: 59, gamesPlayed: 82 },
  { id: 7, rank: 7, name: "Team Eta", points: 101, goals: 46, assists: 55, gamesPlayed: 82 },
  { id: 8, rank: 8, name: "Team Theta", points: 95, goals: 42, assists: 53, gamesPlayed: 82 },
];

const meta = {
  title: "Data/DataTable",
  component: DataTable,
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Season Rankings",
    subtitle: "2024-25 Season",
    columns: sampleColumns,
    data: sampleData,
    initialSortKey: "points",
  },
};

export const WithDateBadge: Story = {
  args: {
    title: "Daily Rankings",
    dateBadge: "Apr 7, 2026",
    columns: sampleColumns,
    data: sampleData,
  },
};

export const Loading: Story = {
  args: {
    title: "Rankings",
    columns: sampleColumns,
    data: [],
    isLoading: true,
  },
};

export const Empty: Story = {
  args: {
    title: "Rankings",
    columns: sampleColumns,
    data: [],
    emptyMessage: "No rankings data for this date.",
  },
};

export const WithLimit: Story = {
  args: {
    title: "Top 3",
    columns: sampleColumns,
    data: sampleData,
    limit: 3,
    viewAllHref: "#",
    viewAllText: "View All Rankings",
  },
};

export const NoRankColors: Story = {
  args: {
    title: "Players",
    columns: sampleColumns,
    data: sampleData,
    showRankColors: false,
  },
};

export const CustomRenderers: Story = {
  args: {
    title: "Custom Cells",
    columns: [
      { key: "rank", header: "#" },
      {
        key: "name",
        header: "Team",
        render: (value: string) => <strong>{value}</strong>,
      },
      {
        key: "points",
        header: "Points",
        sortable: true,
        render: (value: number) => (
          <span className="brutal-badge bg-[var(--color-brutal-yellow)] text-[var(--color-brutal-black)]">
            {value}
          </span>
        ),
      },
    ],
    data: sampleData.slice(0, 5),
  },
};
