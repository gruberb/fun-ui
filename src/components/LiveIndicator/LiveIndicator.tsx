interface LiveIndicatorProps {
  label?: string;
}

const LiveIndicator = ({ label = "Live" }: LiveIndicatorProps) => {
  return (
    <span className="relative inline-flex items-center gap-2">
      <span
        className="w-2 h-2 bg-[var(--color-brutal-red)]"
        style={{ animation: "pulse-ring 2s infinite" }}
      />
      <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-brutal-red)]">
        {label}
      </span>
    </span>
  );
};

export default LiveIndicator;
