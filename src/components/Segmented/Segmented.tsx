export type SegmentedOption = { value: string; label: string; disabled?: boolean };

export type SegmentedProps = {
  options: SegmentedOption[];
  value: string;
  onChange: (value: string) => void;
  /** Accessible name of the control. */
  ariaLabel: string;
  /** `group` renders toggle buttons (aria-pressed); `tablist` renders tabs. */
  role?: "group" | "tablist";
  /** `lg` matches the 48px height of StepperSelect. */
  size?: "md" | "lg";
  /** Fill the container width on narrow screens. */
  stretch?: boolean;
  className?: string;
};

export default function Segmented({
  options,
  value,
  onChange,
  ariaLabel,
  role = "group",
  size = "md",
  stretch = false,
  className = "",
}: SegmentedProps) {
  const classes = ["fui-segmented", `fui-segmented--${size}`, stretch ? "fui-segmented--stretch" : "", className].filter(Boolean).join(" ");
  return (
    <div className={classes} role={role} aria-label={ariaLabel}>
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <button
            type="button"
            key={option.value}
            className={`fui-segmented__item${selected ? " is-selected" : ""}`}
            disabled={option.disabled}
            {...(role === "tablist" ? { role: "tab", "aria-selected": selected } : { "aria-pressed": selected })}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
