import type { CSSProperties } from "react";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  message?: string;
  /** "skeleton" renders shimmer blocks instead of a spinner. */
  variant?: "spinner" | "skeleton";
  /** Number of shimmer blocks when variant is "skeleton". */
  count?: number;
  /** Fixed column count for the skeleton grid; default auto-fits. */
  columns?: number;
  className?: string;
}

const LoadingSpinner = ({
  size = "medium",
  message = "Loading...",
  variant = "spinner",
  count = 3,
  columns,
  className = "",
}: LoadingSpinnerProps) => {
  if (variant === "skeleton") {
    return (
      <div
        className={["fui-skeleton", columns ? "fui-skeleton--fixed" : "", className].filter(Boolean).join(" ")}
        style={columns ? ({ "--fui-skeleton-columns": columns } as CSSProperties) : undefined}
        role="status"
        aria-label={message || "Loading"}
      >
        {Array.from({ length: count }, (_, i) => (
          <span key={i} className="fui-skeleton__block" />
        ))}
      </div>
    );
  }

  return (
    <div className={`fui-loading ${className}`.trim()} role="status">
      <span className={`fui-spinner fui-spinner--${size}`} aria-hidden="true" />
      {message && <p className="fui-loading__message fui-label">{message}</p>}
    </div>
  );
};

export default LoadingSpinner;
