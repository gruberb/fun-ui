import type { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string | number;
  trend?: "up" | "down" | "neutral";
  icon?: ReactNode;
}

const trendSymbol = { up: "↑", down: "↓", neutral: "→" };

const StatCard = ({ label, value, trend, icon }: StatCardProps) => {
  return (
    <div className="fui-stat">
      <div className="fui-stat__main">
        <div className="fui-stat__label fui-label">{label}</div>
        <div className="fui-stat__value fui-num">
          {value}
          {trend && <span className={`fui-stat__trend fui-stat__trend--${trend}`}>{trendSymbol[trend]}</span>}
        </div>
      </div>
      {icon && <div className="fui-stat__icon">{icon}</div>}
    </div>
  );
};

export default StatCard;
