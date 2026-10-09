interface ProgressBarProps {
  value: number;
  label?: string;
  variant?: "default" | "success" | "warning";
  showPercentage?: boolean;
  className?: string;
}

const ProgressBar = ({
  value,
  label,
  variant = "default",
  showPercentage = false,
  className = "",
}: ProgressBarProps) => {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div className={`fui-progress fui-progress--${variant} ${className}`.trim()}>
      {(label || showPercentage) && (
        <div className="fui-progress__head fui-label">
          {label && <span>{label}</span>}
          {showPercentage && <span className="fui-progress__pct">{Math.round(clamped)}%</span>}
        </div>
      )}
      <div
        className="fui-progress__track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(clamped)}
        aria-label={label}
      >
        <div className="fui-progress__bar" style={{ width: `${clamped}%` }} />
      </div>
    </div>
  );
};

export default ProgressBar;
