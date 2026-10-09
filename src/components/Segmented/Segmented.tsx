export type SegmentedOption = {
  value: string; label: string;
  disabled?: boolean;
  /** DOM id of the option button, e.g. for a tabpanel's aria-labelledby. */
  id?: string;
  /** Id of the controlled element, rendered as aria-controls. */
  controls?: string;
};

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
            id={option.id}
            aria-controls={option.controls}
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
