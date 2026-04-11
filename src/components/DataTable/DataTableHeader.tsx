import type { ReactNode } from "react";

interface DataTableHeaderProps {
  title?: string;
  subtitle?: string;
  dateBadge?: string;
  dateSlot?: ReactNode;
  viewAllHref?: string;
  viewAllText?: string;
  showViewAll?: boolean;
  renderLink?: (props: { href: string; children: ReactNode }) => ReactNode;
}

const DataTableHeader = ({
  title,
  subtitle,
  dateBadge,
  dateSlot,
  viewAllHref,
  viewAllText = "View All",
  showViewAll = false,
  renderLink,
}: DataTableHeaderProps) => {
  if (!title && !dateBadge && !viewAllHref && !dateSlot) return null;

  const viewAllContent = (
    <>
      {viewAllText} <span className="ml-1">&rarr;</span>
    </>
  );

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
      <div>
        {title && <h2 className="text-xl font-bold">{title}</h2>}
        {subtitle && <p className="text-sm opacity-60">{subtitle}</p>}
        {dateBadge && (
          <span className="inline-block mt-1 bg-[var(--color-brutal-yellow)] text-[var(--color-brutal-black)] text-xs px-3 py-1 font-medium uppercase tracking-wider">
            {dateBadge}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2">
        {dateSlot}
        {showViewAll && viewAllHref && (
          renderLink ? (
            renderLink({
              href: viewAllHref,
              children: viewAllContent,
            })
          ) : (
            <a
              href={viewAllHref}
              className="text-[var(--color-brutal-blue)] hover:opacity-80 font-bold uppercase tracking-wider text-sm flex items-center transition-colors"
            >
              {viewAllContent}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default DataTableHeader;
