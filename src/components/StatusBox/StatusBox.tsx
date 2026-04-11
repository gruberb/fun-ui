type Status = "positive" | "negative" | "warning" | "info";

interface StatusBoxProps {
  title: string;
  status: Status;
  label: string;
  description?: string;
}

const statusConfig: Record<Status, { text: string; textClass: string; borderClass: string }> = {
  positive: {
    text: "YES",
    textClass: "text-[var(--color-brutal-green)]",
    borderClass: "border-l-4 border-l-[var(--color-brutal-green)]",
  },
  negative: {
    text: "NO",
    textClass: "text-[var(--color-brutal-red)]",
    borderClass: "border-l-4 border-l-[var(--color-brutal-red)]",
  },
  warning: {
    text: "MAYBE",
    textClass: "text-[var(--color-brutal-orange)]",
    borderClass: "border-l-4 border-l-[var(--color-brutal-orange)]",
  },
  info: {
    text: "INFO",
    textClass: "text-[var(--color-brutal-blue)]",
    borderClass: "border-l-4 border-l-[var(--color-brutal-blue)]",
  },
};

const StatusBox = ({ title, status, label, description }: StatusBoxProps) => {
  const config = statusConfig[status];

  return (
    <div className={`brutal-card p-6 min-w-[250px] flex flex-col items-center ${config.borderClass}`}>
      <h2 className="font-display text-lg font-bold text-[var(--color-brutal-black)] uppercase tracking-wider mb-4">
        {title}
      </h2>
      <div
        className={`font-display text-6xl font-bold my-2 h-16 flex items-center justify-center ${config.textClass}`}
      >
        {label || config.text}
      </div>
      {description && (
        <div className="text-sm text-[var(--color-brutal-black)]/60 mt-2 font-display uppercase tracking-wide text-center">
          {description}
        </div>
      )}
    </div>
  );
};

export default StatusBox;
