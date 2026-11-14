import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}
interface State {
  failed: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Portfolio render error:", error, info.componentStack);
  }

  render() {
    if (this.state.failed) {
      return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
          <h1 className="font-display text-2xl text-white">Something went wrong</h1>
          <p className="max-w-md text-slate-400">
            The page failed to load correctly. Please refresh, or reach out directly at
            jhansi.ambaram@gmail.com.
          </p>
          <button className="btn-primary" onClick={() => window.location.reload()}>
            Reload page
          </button>
        </main>
      );
    }
    return this.props.children;
  }
}
