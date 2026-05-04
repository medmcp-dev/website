import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="container relative grid gap-16 py-24 md:py-32 lg:grid-cols-2 lg:gap-12">
        <div className="flex min-w-0 flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Infrastructure for AI medical agents
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Medical risk layer for{" "}
            <span className="text-primary">AI agents</span>
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg text-muted-foreground">
            Turn raw symptoms into structured clinical risk signals using a
            standardized MCP API. Deterministic output, canonical schema, built
            for production.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <a href="#cta">
                Request API access
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#code">
                <BookOpen className="mr-1.5 h-4 w-4" />
                View documentation
              </a>
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <span className="font-mono">v1.0 · MCP compatible</span>
            <span className="hidden h-3 w-px bg-border sm:block" />
            <span className="hidden sm:inline">Deterministic · Schema-stable · Low latency</span>
          </div>
        </div>

        <div className="relative flex min-w-0 items-center">
          <div className="w-full overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-primary/5">
            <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-4 py-2.5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              </div>
              <span className="ml-2 font-mono text-xs text-muted-foreground">POST /v1/analyze</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
<span className="text-muted-foreground">{"// Request"}</span>
{`
{ "text": "chest pain for 2 hours radiating to left arm" }

`}<span className="text-muted-foreground">{"// Response"}</span>
{`
{
  "risk_level": `}<span className="text-[hsl(var(--risk-high))]">{`"HIGH"`}</span>{`,
  "confidence": `}<span className="text-primary">{`0.87`}</span>{`,
  "symptom_id": `}<span className="text-primary">{`"SYMPTOM_CHEST_PAIN"`}</span>{`,
  "triage": `}<span className="text-[hsl(var(--risk-high))]">{`"urgent"`}</span>{`
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
