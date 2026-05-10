import { useLayoutEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useLandingCopy } from "@/hooks/use-landing-copy";
import type { LandingCopy } from "@/lib/landing-i18n";
import { Loader2, Play } from "lucide-react";

type Risk = "low" | "medium" | "high" | "critical";

interface ApiResponse {
  risk_level: Risk;
  confidence: number;
  interpretation: string;
  entities: { type: string; value: string }[];
}

const riskColor: Record<Risk, string> = {
  low: "bg-risk-low/15 text-risk-low border-risk-low/30",
  medium: "bg-risk-medium/15 text-risk-medium border-risk-medium/30",
  high: "bg-risk-high/15 text-risk-high border-risk-high/30",
  critical: "bg-risk-critical/15 text-risk-critical border-risk-critical/30",
};

function runDemoAnalyze(
  text: string,
  di: LandingCopy["demoInterpretation"],
): ApiResponse {
  const low = text.toLowerCase();
  if (low.includes("chest pain") || low.includes("heart attack"))
    return {
      risk_level: "high",
      confidence: 1,
      interpretation: di.chest,
      entities: [{ type: "symptom", value: "chest pain" }],
    };
  if (low.includes("stroke") || low.includes("slurred") || low.includes("face droop"))
    return {
      risk_level: "critical",
      confidence: 1,
      interpretation: di.stroke,
      entities: [
        { type: "symptom", value: "facial droop" },
        { type: "symptom", value: "hemiplegia" },
      ],
    };
  if (low.includes("shortness of breath") || low.includes("dyspnoea"))
    return {
      risk_level: "high",
      confidence: 1,
      interpretation: di.dyspnoea,
      entities: [{ type: "symptom", value: "dyspnoea" }],
    };
  if (low.includes("fever"))
    return {
      risk_level: "medium",
      confidence: 0.5,
      interpretation: di.fever,
      entities: [{ type: "symptom", value: "fever" }],
    };
  if (low.includes("headache") || low.includes("migraine"))
    return {
      risk_level: "medium",
      confidence: 0.5,
      interpretation: di.headache,
      entities: [{ type: "symptom", value: "headache" }],
    };
  return { risk_level: "low", confidence: 0, interpretation: di.none, entities: [] };
}

const defaultInput = "chest pain for 2 hours radiating to left arm";

export const DemoSimulator = () => {
  const t = useLandingCopy();
  const [input, setInput] = useState(defaultInput);
  const inputRef = useRef(input);
  inputRef.current = input;
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ApiResponse | null>(null);

  useLayoutEffect(() => {
    setResult(runDemoAnalyze(inputRef.current, t.demoInterpretation));
  }, [locale, t.demoInterpretation]);

  const run = () => {
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setResult(runDemoAnalyze(input, t.demoInterpretation));
      setLoading(false);
    }, 600);
  };

  return (
    <section id="demo" className="border-b border-border/60 py-24">
      <div className="container">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {t.demo.eyebrow}
          </p>
          <h2 className="font-serif-display text-balance text-4xl leading-[1.05] md:text-5xl text-gradient-fade">
            {t.demo.title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.demo.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2.5">
              <span className="font-mono text-xs text-muted-foreground">{t.demo.requestLabel}</span>
              <span className="font-mono text-[10px] text-muted-foreground">{t.demo.encoding}</span>
            </div>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={6}
              className="resize-none rounded-none border-0 bg-transparent font-mono text-sm focus-visible:ring-0"
              placeholder={t.demo.placeholder}
            />
            <div className="flex items-center justify-between border-t border-border bg-muted/30 px-4 py-3">
              <span className="text-xs text-muted-foreground">{t.demo.charCount(input.length)}</span>
              <Button size="sm" onClick={run} disabled={loading}>
                {loading ? (
                  <><Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />{t.demo.analyzing}</>
                ) : (
                  <><Play className="mr-1.5 h-3.5 w-3.5" />{t.demo.analyze}</>
                )}
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2.5">
              <span className="font-mono text-xs text-muted-foreground">{t.demo.responseLabel}</span>
              <span className="font-mono text-[10px] text-muted-foreground">{t.demo.ok}</span>
            </div>
            <div className="min-h-[260px] p-5">
              {loading && (
                <div className="flex h-full items-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />{t.demo.computing}
                </div>
              )}
              {!loading && result && (
                <div className="space-y-4">
                  <div className={`inline-flex items-center gap-2 rounded-md border px-2.5 py-1 font-mono text-xs ${riskColor[result.risk_level]}`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {t.demo.riskLabel} {result.risk_level}
                  </div>
                  <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed text-foreground">
{`{
  "risk_level":    "${result.risk_level}",
  "confidence":    ${result.confidence},
  "entities":      ${JSON.stringify(result.entities)},
  "interpretation":"${result.interpretation.slice(0, 48)}..."
}`}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
