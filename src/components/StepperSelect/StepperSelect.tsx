export type StepperSelectOption = { value: string; label: string };

export type StepperSelectProps = {
  /** Mono caption above the value; also the select's accessible name. */
  label: string;
  value: string;
  options: StepperSelectOption[];
  onChange: (value: string) => void;
  /** Accessible names of the step buttons. */
  previousLabel?: string;
  nextLabel?: string;
  className?: string;
};

export default function StepperSelect({
  label,
  value,
  options,
  onChange,
  previousLabel = `Previous ${label}`,
  nextLabel = `Next ${label}`,
  className = "",
}: StepperSelectProps) {
  const index = Math.max(0, options.findIndex((option) => option.value === value));
  return (
    <div className={`fui-stepper-select${className ? ` ${className}` : ""}`}>
      <button type="button" aria-label={previousLabel} disabled={index <= 0} onClick={() => onChange(options[index - 1]?.value ?? value)}>‹</button>
      <label>
        <span className="fui-label">{label}</span>
        <select aria-label={label} value={value} onChange={(event) => onChange(event.target.value)}>
          {options.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}
        </select>
      </label>
      <button type="button" aria-label={nextLabel} disabled={index >= options.length - 1} onClick={() => onChange(options[index + 1]?.value ?? value)}>›</button>
    </div>
  );
}
