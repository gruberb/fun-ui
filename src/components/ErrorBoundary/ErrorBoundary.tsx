import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
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

      return (
        <div className="min-h-[400px] flex items-center justify-center p-8">
          <div className="brutal-card p-8 max-w-md w-full text-center">
            <h2 className="text-xl mb-2">Something went wrong</h2>
            <p className="text-sm text-[var(--color-brutal-gray)] mb-4">
              An unexpected error has occurred.
            </p>
            <div className="bg-[var(--color-brutal-red)]/10 border-2 border-[var(--color-brutal-red)] text-red-700 px-4 py-3 mb-4 text-sm text-left">
              {this.state.error?.message || "Unknown error"}
            </div>
            <button
              onClick={() => window.location.reload()}
              className="brutal-btn brutal-btn-primary px-5 py-2.5 text-sm"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
