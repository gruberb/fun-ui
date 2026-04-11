import { ReactNode } from "react";

export type DataRow = Record<string, any>;

export interface Column {
  key: string;
  header: string;
  render?: (value: any, row: DataRow, index: number) => ReactNode;
  className?: string;
  responsive?: "always" | "md" | "lg";
  sortable?: boolean;
}

export interface DataTableProps {
  data: DataRow[];
  columns: Column[];
  keyField?: string;
  rankField?: string;

  title?: string;
  subtitle?: string;
  limit?: number;
  viewAllHref?: string;
  viewAllText?: string;
  renderLink?: (props: { href: string; children: ReactNode }) => ReactNode;
  dateBadge?: string;
  dateSlot?: ReactNode;

  isLoading?: boolean;
  emptyMessage?: string;

  className?: string;
  showRankColors?: boolean;

  initialSortKey?: string;
  initialSortDirection?: "asc" | "desc";
}
