import { useState } from "react";

interface StarRatingProps {
  max?: number;
  value: number;
  onChange: (value: number) => void;
}

const StarRating = ({ max = 5, value, onChange }: StarRatingProps) => {
  const [hoverValue, setHoverValue] = useState(0);

  return (
    <div
      className="flex gap-1"
      onMouseLeave={() => setHoverValue(0)}
    >
      {Array.from({ length: max }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          className={`bg-transparent border-none cursor-pointer text-3xl leading-none p-0 transition-all duration-150 hover:scale-120 ${
            n <= (hoverValue || value)
              ? "text-[var(--color-brutal-yellow)]"
              : "text-[var(--color-brutal-cream)]"
          }`}
          style={{ WebkitTextStroke: "1px var(--color-brutal-black)" }}
          onClick={() => onChange(n)}
          onMouseEnter={() => setHoverValue(n)}
          aria-label={`${n} star${n > 1 ? "s" : ""}`}
        >
          {"\u2605"}
        </button>
      ))}
    </div>
  );
};

export default StarRating;
