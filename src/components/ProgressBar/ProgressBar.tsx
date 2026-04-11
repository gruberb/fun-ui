interface ProgressBarProps {
  value: number;
  label?: string;
  variant?: "default" | "success" | "warning";
  showPercentage?: boolean;
  className?: string;
}

const variantColors = {
  default: "var(--color-brutal-blue)",
  success: "var(--color-brutal-green)",
  warning: "var(--color-brutal-yellow)",
};

const ProgressBar = ({
  value,
  label,
  variant = "default",
  showPercentage = false,
  className = "",
}: ProgressBarProps) => {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div className={className}>
      {(label || showPercentage) && (
        <div className="flex justify-between items-center mb-1">
          {label && (
            <span className="text-xs font-bold uppercase tracking-wider">
              {label}
            </span>
          )}
          {showPercentage && (
            <span className="text-xs font-bold tabular-nums">
              {Math.round(clamped)}%
            </span>
          )}
        </div>
      )}
      <div className="h-4 border-2 border-[var(--color-brutal-black)] bg-white">
        <div
          className="h-full transition-all duration-300 ease-out"
          style={{
            width: `${clamped}%`,
            backgroundColor: variantColors[variant],
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
