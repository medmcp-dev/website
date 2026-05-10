import { useLandingCopy } from "@/hooks/use-landing-copy";

export const ProblemSection = () => {
  const t = useLandingCopy();

  return (
    <section className="border-b border-border/60 py-24">
      <div className="container">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {t.problem.eyebrow}
          </p>
          <h2 className="font-serif-display text-balance text-4xl leading-[1.05] text-gradient-fade md:text-5xl">
            {t.problem.title}
          </h2>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
          {t.problem.cards.map(({ code, title, body }, i) => (
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
