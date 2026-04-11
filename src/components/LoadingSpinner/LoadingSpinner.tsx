interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  message?: string;
}

const sizeClasses = {
  small: "w-4 h-4 border-2",
  medium: "w-8 h-8 border-4",
  large: "w-12 h-12 border-4",
};

const LoadingSpinner = ({
  size = "medium",
  message = "Loading...",
}: LoadingSpinnerProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div
        className={`${sizeClasses[size]} border-[var(--color-brutal-black)] border-t-[var(--color-brutal-yellow)] rounded-full`}
        style={{ animation: "spin 1s linear infinite" }}
      />
      {message && (
        <p className="mt-4 text-[var(--color-brutal-black)] font-bold uppercase tracking-wider text-sm">
          {message}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
