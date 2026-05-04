const problems = [
  {
    code: "ERR_PROMPT_DRIFT",
    title: "Unreliable prompt parsing",
    body: "LLMs hallucinate symptoms, miss negations, and produce different outputs for identical input.",
  },
  {
    code: "ERR_NO_SCHEMA",
    title: "No shared output contract",
    body: "Every team invents its own JSON shape, making interoperability between agents impossible.",
  },
  {
    code: "ERR_RISK_DRIFT",
    title: "Inconsistent risk scoring",
    body: "Risk thresholds drift between models and prompts, eroding clinical and product trust.",
  },
  {
    code: "ERR_REGRESSION",
    title: "Hard to keep production-grade",
    body: "Prompt regressions silently break downstream triage logic with each model upgrade.",
  },
];

export const ProblemSection = () => {
  return (
    <section className="border-b border-border/60 py-24">
      <div className="container">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            // the problem
          </p>
          <h2 className="font-serif-display text-balance text-4xl leading-[1.05] text-gradient-fade md:text-5xl">
            AI medical agents are built on inconsistent reasoning
          </h2>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {problems.map(({ code, title, body }, i) => (
            <div key={code} className="bg-card p-6 transition-colors hover:bg-card/60">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="rounded border border-border bg-background/60 px-2 py-0.5 font-mono text-[10px] text-[hsl(var(--risk-high))]">
                  {code}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-medium tracking-tight">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
