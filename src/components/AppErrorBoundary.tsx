import * as React from "react";

type State = { error: Error | null };

export class AppErrorBoundary extends React.Component<
  { children: React.ReactNode },
  State
> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen bg-neutral-950 p-6 text-neutral-100">
          <h1 className="text-lg font-semibold">Nešto je pošlo po zlu pri učitavanju</h1>
          <p className="mt-2 text-sm text-neutral-400">
            Ako vidiš ovu poruku, pošalji screenshot ili tekst greške developeru.
          </p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 text-xs text-neutral-200">
            {this.state.error.message}
            {"\n\n"}
            {this.state.error.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}
