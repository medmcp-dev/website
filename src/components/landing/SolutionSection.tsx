import { Database, Gauge, ShieldCheck } from "lucide-react";

const features = [
  { icon: Database, title: "Canonical symptom schema", body: "Standardized SYMPTOM_* identifiers shared across every agent and integration." },
  { icon: Gauge, title: "Deterministic output", body: "Same input → same structured response. No prompt drift, no model surprises." },
  { icon: ShieldCheck, title: "Calibrated confidence", body: "Numeric confidence and risk levels you can route on with simple thresholds." },
];

export const SolutionSection = () => {
  return (
    <section className="border-b border-border/60 py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">The solution</p>
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              A standardized MCP layer for medical AI systems
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              Medical MCP provides a deterministic API that converts unstructured
              symptom input into structured clinical risk outputs — so your
              agents speak a shared, machine-readable medical language instead
              of free-form text.
            </p>
          </div>
          <div className="space-y-4">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4 rounded-lg border border-border bg-card p-5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
