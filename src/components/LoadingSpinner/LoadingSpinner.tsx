interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  message?: string;
  /** "skeleton" renders shimmer blocks instead of a spinner. */
  variant?: "spinner" | "skeleton";
  /** Number of shimmer blocks when variant is "skeleton". */
  count?: number;
}

const LoadingSpinner = ({
  size = "medium",
  message = "Loading...",
  variant = "spinner",
  count = 3,
}: LoadingSpinnerProps) => {
  if (variant === "skeleton") {
    return (
      <div className="fui-skeleton" role="status" aria-label={message || "Loading"}>
        {Array.from({ length: count }, (_, i) => (
          <span key={i} className="fui-skeleton__block" />
        ))}
      </div>
    );
  }

  return (
    <div className="fui-loading" role="status">
      <span className={`fui-spinner fui-spinner--${size}`} aria-hidden="true" />
      {message && <p className="fui-loading__message fui-label">{message}</p>}
    </div>
  );
};

export default LoadingSpinner;
