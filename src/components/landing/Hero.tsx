import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="beam-bg relative overflow-hidden">
      <div className="container relative z-10 grid gap-16 py-24 md:py-36 lg:grid-cols-2 lg:gap-12">
        <div className="flex min-w-0 flex-col justify-center">
          <a
            href="#demo"
            className="gradient-pill mb-8 inline-flex w-fit items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs text-foreground/90"
          >
            Announcing MedMCP v1
            <ChevronRight className="h-3.5 w-3.5 opacity-70" />
          </a>

          <h1 className="font-serif-display text-balance text-5xl leading-[1.02] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            <span className="text-gradient-fade">Medical risk</span>
            <br />
            <span className="italic text-gradient-fade">for developers</span>
          </h1>

          <p className="mt-8 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
            The structured reasoning layer for AI medical agents. Turn raw
            symptoms into deterministic clinical risk signals at scale.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild className="rounded-full">
              <a href="#cta">
                Get API access
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="ghost" asChild className="rounded-full">
              <a href="#code">View documentation</a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-3 font-mono text-xs text-muted-foreground">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[hsl(var(--risk-medium))] shadow-[0_0_8px_hsl(var(--risk-medium))]" />
            <span>API status: operational</span>
            <span className="hidden h-3 w-px bg-border sm:block" />
            <span className="hidden sm:inline">v1.0 · MCP-compatible</span>
          </div>
        </div>

        <div className="relative flex min-w-0 items-center">
          <div className="w-full overflow-hidden rounded-xl border border-border bg-card/80 backdrop-blur">
            <div className="flex items-center gap-2 border-b border-border bg-background/40 px-4 py-2.5">
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
{ "type": "symptom", "data": {
    "text": "chest pain for 2 hours"
  }
}

`}<span className="text-muted-foreground">{"// Response"}</span>
{`
{
  "risk_level": `}<span className="text-[hsl(var(--risk-high))]">{`"high"`}</span>{`,
  "confidence": `}<span className="text-foreground">{`1`}</span>{`,
  "interpretation": `}<span className="text-foreground">{`"1 symptom(s) identified..."`}</span>{`,
  "entities": [{ "type": "symptom", "value": `}<span className="text-[hsl(var(--risk-high))]">{`"chest pain"`}</span>{` }]
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
