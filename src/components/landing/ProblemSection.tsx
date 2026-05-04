import { AlertTriangle, GitBranch, Scale, Wrench } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Unreliable prompt parsing",
    body: "LLMs hallucinate symptoms, miss negations, and produce different outputs for identical input.",
  },
  {
    icon: GitBranch,
    title: "No shared output schema",
    body: "Every team invents its own JSON shape, making interoperability between agents impossible.",
  },
  {
    icon: Scale,
    title: "Inconsistent risk scoring",
    body: "Risk thresholds drift between models and prompts, eroding clinical and product trust.",
  },
  {
    icon: Wrench,
    title: "Hard to keep production-grade",
    body: "Prompt regressions silently break downstream triage logic with each model upgrade.",
  },
];

export const ProblemSection = () => {
  return (
    <section className="border-b border-border/60 py-24">
      <div className="container">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">The problem</p>
          <h2 className="font-serif-display text-balance text-4xl leading-[1.05] md:text-5xl text-gradient-fade">
            AI medical agents are built on inconsistent reasoning
          </h2>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {problems.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex gap-4 bg-card p-6">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
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
    </section>
  );
};
