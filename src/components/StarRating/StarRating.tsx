import { useState } from "react";

interface StarRatingProps {
  max?: number;
  value: number;
  onChange: (value: number) => void;
  /** Accessible name for each star button. */
  getLabel?: (n: number) => string;
}

const defaultLabel = (n: number) => `${n} star${n > 1 ? "s" : ""}`;

const StarRating = ({ max = 5, value, onChange, getLabel = defaultLabel }: StarRatingProps) => {
  const [hoverValue, setHoverValue] = useState(0);

  return (
    <div className="fui-stars" onMouseLeave={() => setHoverValue(0)}>
      {Array.from({ length: max }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          className={`fui-stars__star ${n <= (hoverValue || value) ? "is-on" : ""}`}
          onClick={() => onChange(n)}
          onMouseEnter={() => setHoverValue(n)}
          aria-label={getLabel(n)}
          aria-pressed={n <= value}
        >
          {"★"}
        </button>
      ))}
    </div>
  );
};

export default StarRating;
