import { useState, useMemo, useRef, useEffect } from "react";
import type { DataTableProps } from "./types";
import DataTableHeader from "./DataTableHeader";
import DataTableEmpty from "./DataTableEmpty";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const DataTable = ({
  data,
  columns,
  keyField = "id",
  rankField = "rank",
  title,
  subtitle,
  limit,
  viewAllHref,
  viewAllText = "View All",
  renderLink,
  dateBadge,
  dateSlot,
  isLoading = false,
  emptyMessage = "No data available.",
  className = "",
  showRankColors = true,
  initialSortKey,
  initialSortDirection = "desc",
}: DataTableProps) => {
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      if (tableContainerRef.current && tableRef.current) {
        setIsScrollable(tableRef.current.clientWidth > tableContainerRef.current.clientWidth);
      }
    };
    checkScrollable();
    window.addEventListener("resize", checkScrollable);
    return () => window.removeEventListener("resize", checkScrollable);
  }, []);

  const defaultSortKey =
    initialSortKey ||
    columns.find((col) => col.sortable)?.key ||
    columns[0]?.key;

  const [sortKey, setSortKey] = useState<string>(defaultSortKey);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">(initialSortDirection);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDirection("desc");
    }
  };

  const getRankColor = (rank: number): string => {
    if (!showRankColors) return "rank-indicator rank-indicator-default";
    if (rank === 1) return "rank-indicator rank-indicator-1";
    if (rank === 2) return "rank-indicator rank-indicator-2";
    if (rank === 3) return "rank-indicator rank-indicator-3";
    return "rank-indicator rank-indicator-default";
  };

  const safeData = useMemo(() => (Array.isArray(data) ? data : []), [data]);

  const displayItems = useMemo(() => {
    if (safeData.length === 0) return [];

    let result = [...safeData];
    result.sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];
      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
      }
      return 0;
    });

    if (limit && limit > 0) {
      result = result.slice(0, limit);
    }
    return result;
  }, [safeData, sortKey, sortDirection, limit]);

  const nameColumnIndex = columns.findIndex((col) => col.key !== rankField);
  const hasNameColumn = nameColumnIndex !== -1;

  return (
    <div className={`ranking-table-container ${className}`}>
      <div className="ranking-table-header">
        <DataTableHeader
          title={title}
          subtitle={subtitle}
          dateBadge={dateBadge}
          dateSlot={dateSlot}
          viewAllHref={viewAllHref}
          viewAllText={viewAllText}
          showViewAll={!!limit && safeData.length > limit}
          renderLink={renderLink}
        />
      </div>

      {isLoading && (
        <div className="p-6">
          <LoadingSpinner message="Loading data..." />
        </div>
      )}

      {!isLoading && safeData.length === 0 && (
        <div className="p-6">
          <DataTableEmpty message={emptyMessage} />
        </div>
      )}

      {!isLoading && safeData.length > 0 && (
        <div>
          <div className="ranking-table-body">
            <div
              ref={tableContainerRef}
              className="overflow-x-auto scrollbar-hide"
              style={{ position: "relative" }}
            >
              <table ref={tableRef} className="ranking-table">
                <thead>
                  <tr>
                    <th className="sticky left-0 z-20 bg-[var(--color-brutal-cream)] text-center">
                      {columns.find((col) => col.key === rankField)?.header || "Rank"}
                    </th>
                    {hasNameColumn && (
                      <th
                        className="sticky z-20 border-l border-[var(--color-brutal-cream)] bg-[var(--color-brutal-cream)]"
                        style={{ left: "65px" }}
                      >
                        {columns[nameColumnIndex].header}
                      </th>
                    )}
                    {columns
                      .filter((col, idx) => col.key !== rankField && idx !== nameColumnIndex)
                      .map((column) => {
                        let responsiveClass = "";
                        if (column.responsive === "md") responsiveClass = "hidden md:table-cell";
                        else if (column.responsive === "lg") responsiveClass = "hidden lg:table-cell";

                        return (
                          <th key={column.key} className={`${responsiveClass} ${column.className || ""}`}>
                            {column.sortable ? (
                              <button onClick={() => handleSort(column.key)}>
                                {column.header}
                                {sortKey === column.key && (
                                  <span className="ml-1">{sortDirection === "asc" ? "\u2191" : "\u2193"}</span>
                                )}
                              </button>
                            ) : (
                              column.header
                            )}
                          </th>
                        );
                      })}
                  </tr>
                </thead>
                <tbody>
                  {displayItems.map((item, index) => {
                    const key = item[keyField] || index;
                    const rankValue = item[rankField] || index + 1;

                    return (
                      <tr key={key}>
                        <td className="sticky left-0 z-10 text-center bg-white" style={{ width: "50px" }}>
                          <div className={getRankColor(Number(rankValue))}>{rankValue}</div>
                        </td>
                        {hasNameColumn && (
                          <td
                            className="sticky z-10 border-l border-[var(--color-brutal-cream)] bg-white"
                            style={{ left: "65px" }}
                          >
                            {columns[nameColumnIndex].render
                              ? columns[nameColumnIndex].render(item[columns[nameColumnIndex].key], item, index)
                              : item[columns[nameColumnIndex].key]}
                          </td>
                        )}
                        {columns
                          .filter((col, idx) => col.key !== rankField && idx !== nameColumnIndex)
                          .map((column) => {
                            const value = item[column.key];
                            let responsiveClass = "";
                            if (column.responsive === "md") responsiveClass = "hidden md:table-cell";
                            else if (column.responsive === "lg") responsiveClass = "hidden lg:table-cell";

                            return (
                              <td key={column.key} className={`${responsiveClass} ${column.className || ""}`}>
                                {column.render ? column.render(value, item, index) : value}
                              </td>
                            );
                          })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          {isScrollable && (
            <div className="table-scroll-indicator">
              &harr; Scroll for more
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DataTable;
