import { Database, Gauge, ShieldCheck } from "lucide-react";
import { useLandingCopy } from "@/hooks/use-landing-copy";

const icons = [Database, Gauge, ShieldCheck] as const;

export const SolutionSection = () => {
  const t = useLandingCopy();

  return (
    <section className="border-b border-border/60 py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {t.solution.eyebrow}
            </p>
            <h2 className="font-serif-display text-balance text-4xl leading-[1.05] md:text-5xl text-gradient-fade">
              {t.solution.title}
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              {t.solution.body}
            </p>
          </div>
          <div className="space-y-4">
            {t.solution.features.map((feature, i) => {
              const Icon = icons[i];
              return (
                <div key={feature.title} className="flex gap-4 rounded-lg border border-border bg-card p-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">{feature.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{feature.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
