export type TrendBadgeProps = {
  /** Positive is up, negative is down, 0 is flat, null means no comparison. */
  trend: number | null;
  /** Native tooltip explaining the comparison. */
  title?: string;
};

export default function TrendBadge({ trend, title }: TrendBadgeProps) {
  if (trend == null) return <span className="fui-trend-badge fui-trend-badge--flat" title={title}>–</span>;
  if (trend > 0) return <span className="fui-trend-badge fui-trend-badge--up" title={title}>▲{trend}</span>;
  if (trend < 0) return <span className="fui-trend-badge fui-trend-badge--down" title={title}>▼{Math.abs(trend)}</span>;
  return <span className="fui-trend-badge fui-trend-badge--flat" title={title}>＝</span>;
}
