import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Badge from "../Badge/Badge";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import PageHeader from "../PageHeader/PageHeader";
import TabNavigation from "../TabNavigation/TabNavigation";
import StatusBox from "../StatusBox/StatusBox";
import EmptyState from "../EmptyState/EmptyState";
import StarRating from "../StarRating/StarRating";
import DataTable from "../DataTable/DataTable";
import StatCard from "../StatCard/StatCard";
import LiveIndicator from "../LiveIndicator/LiveIndicator";
import Tooltip from "../Tooltip/Tooltip";
import type { Column } from "../DataTable/types";

const Placeholder = () => null;

const meta = {
  title: "Composition/Kitchen Sink",
  component: Placeholder,
} satisfies Meta<typeof Placeholder>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns: Column[] = [
  { key: "rank", header: "#" },
  { key: "name", header: "Name" },
  { key: "score", header: "Score", sortable: true },
  { key: "status", header: "Status" },
];

const data = [
  { id: 1, rank: 1, name: "Alpha", score: 95, status: "Active" },
  { id: 2, rank: 2, name: "Beta", score: 88, status: "Active" },
  { id: 3, rank: 3, name: "Gamma", score: 76, status: "Inactive" },
  { id: 4, rank: 4, name: "Delta", score: 71, status: "Active" },
  { id: 5, rank: 5, name: "Epsilon", score: 64, status: "Inactive" },
];

export const FullPage: Story = {
  render: () => {
    const [tab, setTab] = useState("overview");
    const [rating, setRating] = useState(4);

    return (
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <PageHeader title="Dashboard" subtitle="Project overview" badge="Beta">
          <Button size="sm" variant="secondary">Settings</Button>
        </PageHeader>

        <TabNavigation
          tabs={[
            { id: "overview", label: "Overview" },
            { id: "rankings", label: "Rankings" },
            { id: "feedback", label: "Feedback" },
          ]}
          activeTab={tab}
          onTabChange={setTab}
        />

        {tab === "overview" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "1.5rem" }}>
              <StatCard label="Users" value="1,284" trend="up" />
              <StatCard label="Revenue" value="$42k" trend="up" />
              <StatCard label="Churn" value="2.1%" trend="down" />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
              <StatusBox title="API" status="positive" label="UP" description="All systems operational" />
              <StatusBox title="Deploy" status="info" label="LIVE" description="v2.4.1 deployed" />
            </div>

            <Card>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <h3 style={{ margin: 0 }}>Activity</h3>
                <LiveIndicator />
              </div>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                <Badge variant="success">Deployed</Badge>
                <Badge variant="warning">Review</Badge>
                <Badge variant="primary">New</Badge>
                <Tooltip text="3 issues need attention">
                  <Badge variant="danger">3 Issues</Badge>
                </Tooltip>
              </div>
            </Card>
          </div>
        )}

        {tab === "rankings" && (
          <DataTable
            title="Leaderboard"
            subtitle="Top performers this week"
            dateBadge="Apr 7, 2026"
            columns={columns}
            data={data}
            initialSortKey="score"
          />
        )}

        {tab === "feedback" && (
          <Card>
            <h3 style={{ marginTop: 0 }}>Rate your experience</h3>
            <StarRating value={rating} onChange={setRating} />
            <p style={{ fontSize: "0.875rem", marginTop: "0.75rem", color: "var(--color-brutal-gray)" }}>
              {rating}/5 stars selected
            </p>
          </Card>
        )}
      </div>
    );
  },
};

export const LoadingState: Story = {
  render: () => (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <PageHeader title="Rankings" subtitle="Loading data..." />
      <DataTable
        title="Season Rankings"
        columns={columns}
        data={[]}
        isLoading
      />
    </div>
  ),
};

export const ErrorState: Story = {
  render: () => (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <PageHeader title="Rankings" />
      <ErrorMessage message="Failed to load ranking data." onRetry={() => alert("Retrying...")} />
    </div>
  ),
};

export const EmptyDataState: Story = {
  render: () => (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <PageHeader title="Search Results" />
      <Card>
        <EmptyState
          heading="No results found"
          description="Try adjusting your search query or filters."
          action={{ label: "Clear Filters", onClick: () => {} }}
        />
      </Card>
    </div>
  ),
};

export const AllButtons: Story = {
  render: () => (
    <div>
      <h2 style={{ marginBottom: "1rem" }}>Buttons</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
        <Button variant="primary" size="sm">Small Primary</Button>
        <Button variant="primary">Medium Primary</Button>
        <Button variant="primary" size="lg">Large Primary</Button>
      </div>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
        <Button variant="secondary" size="sm">Small Secondary</Button>
        <Button variant="secondary">Medium Secondary</Button>
        <Button variant="secondary" size="lg">Large Secondary</Button>
      </div>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
        <Button variant="danger">Danger</Button>
        <Button variant="ghost">Ghost</Button>
        <Button disabled>Disabled</Button>
      </div>

      <h2 style={{ marginBottom: "1rem" }}>Badges</h2>
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="neutral">Neutral</Badge>
      </div>

      <h2 style={{ marginBottom: "1rem" }}>Loading</h2>
      <div style={{ display: "flex", gap: "3rem" }}>
        <LoadingSpinner size="small" message="Small" />
        <LoadingSpinner size="medium" message="Medium" />
        <LoadingSpinner size="large" message="Large" />
      </div>
    </div>
  ),
};
