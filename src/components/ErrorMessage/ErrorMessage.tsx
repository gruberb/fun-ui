interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
  retryLabel?: string;
  /** Small uppercase line above the message. */
  title?: string;
  /** Muted line below the message. */
  hint?: string;
  className?: string;
}

const ErrorMessage = ({
  message = "An error occurred. Please try again.",
  onRetry,
  retryLabel = "Try again",
  title,
  hint,
  className = "",
}: ErrorMessageProps) => {
  return (
    <div className={`fui-error ${className}`.trim()} role="alert">
      <div className="fui-error__body">
        {title && <p className="fui-error__title">{title}</p>}
        <p className="fui-error__message">{message}</p>
        {hint && <p className="fui-error__hint">{hint}</p>}
      </div>
      {onRetry && (
        <button type="button" onClick={onRetry} className="fui-btn fui-btn--danger fui-btn--sm">
          {retryLabel}
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
