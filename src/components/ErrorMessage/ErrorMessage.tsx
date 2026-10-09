interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
  retryLabel?: string;
}

const ErrorMessage = ({
  message = "An error occurred. Please try again.",
  onRetry,
  retryLabel = "Try again",
}: ErrorMessageProps) => {
  return (
    <div className="fui-error" role="alert">
      <p className="fui-error__message">{message}</p>
      {onRetry && (
        <button type="button" onClick={onRetry} className="fui-btn fui-btn--danger fui-btn--sm">
          {retryLabel}
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
