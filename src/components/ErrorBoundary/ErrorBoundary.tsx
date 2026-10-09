import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  title?: string;
  description?: string;
  reloadLabel?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const { title = "Something went wrong", description = "An unexpected error has occurred.", reloadLabel = "Reload page" } = this.props;
      return (
        <div className="fui-error-boundary">
          <div className="fui-card fui-error-boundary__card">
            <h2 className="fui-error-boundary__title">{title}</h2>
            <p className="fui-error-boundary__text">{description}</p>
            <div className="fui-error fui-error--code" role="alert">
              <p className="fui-error__message">{this.state.error?.message || "Unknown error"}</p>
            </div>
            <button type="button" onClick={() => window.location.reload()} className="fui-btn fui-btn--primary">
              {reloadLabel}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
