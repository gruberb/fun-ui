import type { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string | number;
  trend?: "up" | "down" | "neutral";
  icon?: ReactNode;
}

const trendIndicators = {
  up: { symbol: "\u2191", color: "text-[var(--color-brutal-green)]" },
  down: { symbol: "\u2193", color: "text-[var(--color-brutal-red)]" },
  neutral: { symbol: "\u2192", color: "text-[var(--color-brutal-gray)]" },
};

const StatCard = ({ label, value, trend, icon }: StatCardProps) => {
  return (
    <div className="stat-card">
      <div className="flex items-start justify-between">
        <div>
          <div className="stat-label">{label}</div>
          <div className="stat-value mt-1 flex items-baseline gap-2">
            {value}
            {trend && (
              <span className={`text-sm ${trendIndicators[trend].color}`}>
                {trendIndicators[trend].symbol}
              </span>
            )}
          </div>
        </div>
        {icon && <div className="w-8 h-8 text-[var(--color-brutal-gray)]">{icon}</div>}
      </div>
    </div>
  );
};

export default StatCard;
