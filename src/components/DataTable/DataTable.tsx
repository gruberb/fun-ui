import type { CSSProperties, KeyboardEvent, ReactNode } from "react";

export type DataTableColumn<Row> = {
  id: string;
  label: string;
  /** Shown instead of `label` on narrow screens. */
  shortLabel?: string;
  numeric?: boolean;
  className?: string;
  /** CSS width of the column, e.g. "80px". */
  width?: string;
  render: (row: Row, index: number) => ReactNode;
  sort?: {
    active: boolean;
    direction: "asc" | "desc";
    onSort: () => void;
  };
};

export type DataTableFilter = {
  id: string;
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
};

export type DataTableSearch = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export type DataTableProps<Row> = {
  rows: Row[];
  columns: DataTableColumn<Row>[];
  getRowKey: (row: Row) => string;
  /** Rendered first in the toolbar, e.g. a Segmented control. */
  leading?: ReactNode;
  search?: DataTableSearch;
  /** Visually hidden label of the search input. */
  searchLabel?: string;
  filters?: DataTableFilter[];
  countLabel?: string;
  emptyMessage?: string;
  loading?: boolean;
  /** Minimum table width before the scroll container scrolls sideways. */
  minWidth?: string;
  /** Overrides `minWidth` at 860px and below. */
  mobileMinWidth?: string;
  /** Bounds the height to this many rows and keeps the header sticky. */
  maxVisibleRows?: number;
  variant?: "default" | "compact";
  ariaLabel?: string;
  onRowClick?: (row: Row) => void;
};

// Row heights per variant, used to translate maxVisibleRows into a pixel height.
const BOUNDS = {
  default: { head: 56, row: 82, mobileHead: 46, mobileRow: 68 },
  compact: { head: 44, row: 52, mobileHead: 40, mobileRow: 48 },
} as const;

export default function DataTable<Row>({
  rows,
  columns,
  getRowKey,
  leading,
  search,
  searchLabel = "Search",
  filters = [],
  countLabel,
  emptyMessage = "No data to show.",
  loading = false,
  minWidth = "900px",
  mobileMinWidth,
  maxVisibleRows,
  variant = "default",
  ariaLabel,
  onRowClick,
}: DataTableProps<Row>) {
  const hasToolbar = Boolean(leading || search || filters.length || countLabel);
  const bounds = BOUNDS[variant];

  function activateRow(event: KeyboardEvent<HTMLTableRowElement>, row: Row) {
    if (!onRowClick || (event.key !== "Enter" && event.key !== " ")) return;
    event.preventDefault();
    onRowClick(row);
  }

  return (
    <section
      className={`fui-data-table fui-data-table--${variant}${loading ? " is-loading" : ""}`}
      aria-label={ariaLabel}
      aria-busy={loading}
    >
      {hasToolbar && (
        <div className="fui-data-table__toolbar">
          {leading}
          {search && (
            <label className="fui-data-table__search">
              <span className="fui-data-table__search-icon" aria-hidden="true" />
              <span className="fui-visually-hidden">{searchLabel}</span>
              <input
                value={search.value}
                onChange={(event) => search.onChange(event.target.value)}
                placeholder={search.placeholder}
              />
            </label>
          )}
          {filters.map((filter) => (
            <label className="fui-data-table__filter" key={filter.id}>
              <span className="fui-visually-hidden">{filter.label}</span>
              <select
                aria-label={filter.label}
                value={filter.value}
                onChange={(event) => filter.onChange(event.target.value)}
              >
                {filter.options.map((option) => (
                  <option value={option.value} key={option.value}>{option.label}</option>
                ))}
              </select>
            </label>
          ))}
          {countLabel && <span className="fui-data-table__count fui-label">{countLabel}</span>}
        </div>
      )}
      <div
        className={`fui-data-table__scroll${maxVisibleRows ? " is-bounded" : ""}`}
        style={
          maxVisibleRows
            ? ({
                "--fui-data-table-max-height": `${bounds.head + maxVisibleRows * bounds.row}px`,
                "--fui-data-table-max-height-mobile": `${bounds.mobileHead + maxVisibleRows * bounds.mobileRow}px`,
              } as CSSProperties)
            : undefined
        }
      >
        <table
          style={
            {
              "--fui-data-table-min-width": minWidth,
              "--fui-data-table-mobile-min-width": mobileMinWidth ?? minWidth,
            } as CSSProperties
          }
        >
          <colgroup>
            {columns.map((column) => (
              <col key={column.id} style={column.width ? { width: column.width } : undefined} />
            ))}
          </colgroup>
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.id}
                  data-column={column.id}
                  className={column.numeric ? "fui-num" : undefined}
                  aria-sort={
                    column.sort?.active ? (column.sort.direction === "asc" ? "ascending" : "descending") : undefined
                  }
                >
                  {column.sort ? (
                    <button type="button" className="fui-data-table__sort" onClick={column.sort.onSort}>
                      <ColumnLabel label={column.label} shortLabel={column.shortLabel} />
                      <span aria-hidden="true">
                        {column.sort.active ? (column.sort.direction === "asc" ? "↑" : "↓") : "↕"}
                      </span>
                    </button>
                  ) : (
                    <ColumnLabel label={column.label} shortLabel={column.shortLabel} />
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={getRowKey(row)}
                className={onRowClick ? "fui-data-table__row--clickable" : undefined}
                tabIndex={onRowClick ? 0 : undefined}
                onClick={onRowClick ? () => onRowClick(row) : undefined}
                onKeyDown={onRowClick ? (event) => activateRow(event, row) : undefined}
              >
                {columns.map((column) => (
                  <td
                    key={column.id}
                    data-column={column.id}
                    className={[column.numeric ? "fui-num" : "", column.className ?? ""].filter(Boolean).join(" ") || undefined}
                  >
                    {column.render(row, index)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {!loading && !rows.length && <div className="fui-data-table__empty">{emptyMessage}</div>}
      </div>
    </section>
  );
}

function ColumnLabel({ label, shortLabel }: { label: string; shortLabel?: string }) {
  return (
    <>
      <span className={`fui-data-table__label-long${shortLabel ? " has-short" : ""}`}>{label}</span>
      {shortLabel && <span className="fui-data-table__label-short">{shortLabel}</span>}
    </>
  );
}
