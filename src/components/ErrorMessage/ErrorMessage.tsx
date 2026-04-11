interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorMessage = ({
  message = "An error occurred. Please try again.",
  onRetry,
}: ErrorMessageProps) => {
  return (
    <div className="bg-[var(--color-brutal-red)]/10 border-2 border-[var(--color-brutal-red)] text-red-700 px-4 py-3 my-4">
      <p className="font-bold uppercase tracking-wider text-sm">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="brutal-btn brutal-btn-danger mt-2 px-3 py-1 text-sm"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
