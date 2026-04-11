import type { InputHTMLAttributes } from "react";

interface SearchInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "size"> {
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  loading?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "py-2 pl-9 pr-9 text-sm",
  md: "py-3 pl-10 pr-10 text-sm",
  lg: "py-4 pl-12 pr-12 text-base",
};

const iconPositions = {
  sm: { left: "left-2.5", right: "right-2.5", size: 14 },
  md: { left: "left-3", right: "right-3", size: 16 },
  lg: { left: "left-4", right: "right-4", size: 18 },
};

const SearchInput = ({
  value,
  onChange,
  onClear,
  loading = false,
  placeholder = "Search...",
  className = "",
  size = "md",
  ...props
}: SearchInputProps) => {
  const ic = iconPositions[size];

  return (
    <div className={`relative ${className}`}>
      <div className={`absolute ${ic.left} top-1/2 -translate-y-1/2 text-[var(--color-brutal-gray)] pointer-events-none`}>
        <svg
          width={ic.size}
          height={ic.size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="square"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full border-2 border-[var(--color-brutal-black)] bg-white ${sizeClasses[size]} font-[family-name:var(--font-display)] font-bold uppercase tracking-wider placeholder:text-[var(--color-brutal-gray)] placeholder:font-normal placeholder:normal-case placeholder:tracking-normal focus:outline-none focus:ring-0`}
        {...props}
      />

      {loading && (
        <div className={`absolute ${ic.right} top-1/2 -translate-y-1/2`}>
          <div
            className="h-4 w-4 border-2 border-[var(--color-brutal-black)] border-t-[var(--color-brutal-yellow)] rounded-full"
            style={{ animation: "spin 1s linear infinite" }}
          />
        </div>
      )}

      {!loading && value && onClear && (
        <button
          onClick={onClear}
          className={`absolute ${ic.right} top-1/2 -translate-y-1/2 text-[var(--color-brutal-gray)] hover:text-[var(--color-brutal-black)] border-none bg-transparent cursor-pointer p-0`}
          aria-label="Clear search"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchInput;
