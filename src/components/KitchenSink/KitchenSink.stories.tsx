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
import DataTable, { type DataTableColumn } from "../DataTable/DataTable";
import StatCard from "../StatCard/StatCard";
import LiveIndicator from "../LiveIndicator/LiveIndicator";
import Tooltip from "../Tooltip/Tooltip";
import SearchInput from "../SearchInput/SearchInput";
import ProgressBar from "../ProgressBar/ProgressBar";
import Modal from "../Modal/Modal";
import Footer from "../Footer/Footer";

const Placeholder = () => null;

const meta = {
  title: "Composition/Kitchen Sink",
  component: Placeholder,
} satisfies Meta<typeof Placeholder>;

export default meta;
type Story = StoryObj<typeof meta>;

type Row = { id: number; rank: number; name: string; score: number; status: string };

const columns: DataTableColumn<Row>[] = [
  { id: "rank", label: "#", render: (row) => row.rank },
  { id: "name", label: "Name", render: (row) => row.name },
  { id: "score", label: "Score", numeric: true, render: (row) => row.score },
  { id: "status", label: "Status", render: (row) => row.status },
];

const data: Row[] = [
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
        <PageHeader
          title="Dashboard"
          eyebrow="Project overview"
          controls={<Button size="sm" variant="secondary">Settings</Button>}
        />

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
                <Badge variant="win">Deployed</Badge>
                <Badge variant="warn">Review</Badge>
                <Badge variant="accent">New</Badge>
                <Tooltip text="3 issues need attention">
                  <Badge variant="loss">3 Issues</Badge>
                </Tooltip>
              </div>
            </Card>
          </div>
        )}

        {tab === "rankings" && (
          <DataTable
            ariaLabel="Leaderboard"
            columns={columns}
            rows={data}
            getRowKey={(row) => String(row.id)}
            countLabel="Top performers this week"
            minWidth="480px"
          />
        )}

        {tab === "feedback" && (
          <Card>
            <h3 style={{ marginTop: 0 }}>Rate your experience</h3>
            <StarRating value={rating} onChange={setRating} />
            <p style={{ fontSize: "0.875rem", marginTop: "0.75rem", color: "var(--fui-muted)" }}>
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
      <PageHeader title="Rankings" description="Loading data..." />
      <DataTable
        ariaLabel="Season rankings"
        columns={columns}
        rows={[]}
        getRowKey={(row) => String(row.id)}
        emptyMessage="No data to show."
        loading
        minWidth="480px"
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
        <Badge variant="win">Win</Badge>
        <Badge variant="loss">Loss</Badge>
        <Badge variant="warn">Warn</Badge>
        <Badge variant="accent">Accent</Badge>
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

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section style={{ marginBottom: 32 }}>
    <p className="fui-kicker">{title}</p>
    {children}
  </section>
);

export const AllComponents: Story = {
  render: () => {
    const [query, setQuery] = useState("");
    const [tab, setTab] = useState("one");
    const [rating, setRating] = useState(3);
    const [open, setOpen] = useState(false);

    return (
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Section title="Search">
          <SearchInput value={query} onChange={setQuery} onClear={() => setQuery("")} placeholder="Search..." />
        </Section>

        <Section title="Tabs">
          <TabNavigation
            tabs={[{ id: "one", label: "One" }, { id: "two", label: "Two" }, { id: "three", label: "Three" }]}
            activeTab={tab}
            onTabChange={setTab}
          />
        </Section>

        <Section title="Stats">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            <StatCard label="Points" value="1,284" trend="up" />
            <StatCard label="Rank" value="12" trend="neutral" />
            <StatCard label="Misses" value="3" trend="down" />
          </div>
        </Section>

        <Section title="Status">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            <StatusBox title="Positive" status="positive" label="" />
            <StatusBox title="Negative" status="negative" label="" />
            <StatusBox title="Warning" status="warning" label="" />
            <StatusBox title="Info" status="info" label="" />
          </div>
        </Section>

        <Section title="Progress">
          <div style={{ display: "grid", gap: 12 }}>
            <ProgressBar value={40} label="Default" showPercentage />
            <ProgressBar value={80} label="Success" variant="success" showPercentage />
            <ProgressBar value={25} label="Warning" variant="warning" showPercentage />
          </div>
        </Section>

        <Section title="Feedback">
          <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
            <LoadingSpinner size="small" message="" />
            <LiveIndicator />
            <StarRating value={rating} onChange={setRating} />
            <Tooltip text="Hairline tooltip"><Badge variant="accent">Hover</Badge></Tooltip>
            <Button variant="secondary" size="sm" onClick={() => setOpen(true)}>Open modal</Button>
          </div>
          <ErrorMessage message="Failed to load data." onRetry={() => {}} />
          <LoadingSpinner variant="skeleton" count={3} />
        </Section>

        <Section title="Card">
          <Card hover>
            <EmptyState heading="Nothing here" description="Empty state inside a card." />
          </Card>
        </Section>

        <Modal isOpen={open} onClose={() => setOpen(false)} title="Modal" footer={<Button size="sm" onClick={() => setOpen(false)}>Done</Button>}>
          <p style={{ margin: 0 }}>Modal body on a raised surface with an ink border.</p>
        </Modal>

        <Footer author="fun-ui" />
      </div>
    );
  },
};
