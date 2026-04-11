import { InputHTMLAttributes } from "react";

interface SearchInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  loading?: boolean;
}

const SearchInput = ({
  value,
  onChange,
  onClear,
  loading = false,
  placeholder = "Search...",
  className = "",
  ...props
}: SearchInputProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-brutal-gray)]">
        <svg
          width="18"
          height="18"
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
        className="w-full border-2 border-[var(--color-brutal-black)] bg-white py-3 pl-10 pr-10 font-[family-name:var(--font-display)] text-sm font-bold uppercase tracking-wider placeholder:text-[var(--color-brutal-gray)] placeholder:font-normal placeholder:normal-case placeholder:tracking-normal focus:outline-none focus:ring-0"
        {...props}
      />

      {loading && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <div
            className="h-4 w-4 border-2 border-[var(--color-brutal-black)] border-t-[var(--color-brutal-yellow)] rounded-full"
            style={{ animation: "spin 1s linear infinite" }}
          />
        </div>
      )}

      {!loading && value && onClear && (
        <button
          onClick={onClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-brutal-gray)] hover:text-[var(--color-brutal-black)] border-none bg-transparent cursor-pointer p-0"
          aria-label="Clear search"
        >
          <svg
            width="16"
            height="16"
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
