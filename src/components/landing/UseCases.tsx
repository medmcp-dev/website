import { Bot, Stethoscope, Workflow, Video } from "lucide-react";
import { useLandingCopy } from "@/hooks/use-landing-copy";

const icons = [Stethoscope, Bot, Workflow, Video] as const;

export const UseCases = () => {
  const t = useLandingCopy();

  return (
    <section id="use-cases" className="border-b border-border/60 py-24">
      <div className="container">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {t.useCases.eyebrow}
          </p>
          <h2 className="font-serif-display text-balance text-4xl leading-[1.05] text-gradient-fade md:text-5xl">
            {t.useCases.title}
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {t.useCases.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <div
                key={card.title}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-foreground/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="mt-5 font-mono text-[11px] text-muted-foreground">{card.tag}</span>
                <h3 className="mt-1 font-medium tracking-tight">{card.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{card.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
