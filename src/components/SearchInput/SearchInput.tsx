import type { InputHTMLAttributes } from "react";

interface SearchInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "size"> {
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  loading?: boolean;
  size?: "sm" | "md" | "lg";
  /** Accessible name of the clear button. */
  clearLabel?: string;
}

const SearchInput = ({
  value,
  onChange,
  onClear,
  loading = false,
  placeholder = "Search...",
  className = "",
  size = "md",
  clearLabel = "Clear search",
  ...props
}: SearchInputProps) => {
  return (
    <div className={`fui-search fui-search--${size} ${className}`.trim()}>
      <svg
        className="fui-search__icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="fui-search__input"
        {...props}
      />

      {loading && <span className="fui-search__end fui-spinner fui-spinner--small" aria-hidden="true" />}

      {!loading && value && onClear && (
        <button type="button" onClick={onClear} className="fui-search__end fui-search__clear" aria-label={clearLabel}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchInput;
