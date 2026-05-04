import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Play } from "lucide-react";

type Risk = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

interface ApiResponse {
  risk_level: Risk;
  confidence: number;
  symptom_id: string;
  triage: string;
}

const riskColor: Record<Risk, string> = {
  LOW: "bg-risk-low/15 text-risk-low border-risk-low/30",
  MEDIUM: "bg-risk-medium/15 text-risk-medium border-risk-medium/30",
  HIGH: "bg-risk-high/15 text-risk-high border-risk-high/30",
  CRITICAL: "bg-risk-critical/15 text-risk-critical border-risk-critical/30",
};

const analyze = (text: string): ApiResponse => {
  const t = text.toLowerCase();
  if (t.includes("chest pain") || t.includes("heart attack"))
    return { risk_level: "HIGH", confidence: 0.87, symptom_id: "SYMPTOM_CHEST_PAIN", triage: "urgent" };
  if (t.includes("stroke") || t.includes("slurred") || t.includes("face droop"))
    return { risk_level: "CRITICAL", confidence: 0.94, symptom_id: "SYMPTOM_STROKE_SIGNS", triage: "emergency" };
  if (t.includes("shortness of breath") || t.includes("can't breathe"))
    return { risk_level: "HIGH", confidence: 0.82, symptom_id: "SYMPTOM_DYSPNEA", triage: "urgent" };
  if (t.includes("fever"))
    return { risk_level: "MEDIUM", confidence: 0.74, symptom_id: "SYMPTOM_FEVER", triage: "same_day" };
  if (t.includes("headache") || t.includes("migraine"))
    return { risk_level: "MEDIUM", confidence: 0.69, symptom_id: "SYMPTOM_HEADACHE", triage: "routine" };
  if (t.includes("rash"))
    return { risk_level: "LOW", confidence: 0.71, symptom_id: "SYMPTOM_RASH", triage: "routine" };
  return { risk_level: "LOW", confidence: 0.58, symptom_id: "SYMPTOM_GENERIC", triage: "routine" };
};

export const DemoSimulator = () => {
  const [input, setInput] = useState("chest pain for 2 hours radiating to left arm");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ApiResponse | null>({
    risk_level: "HIGH",
    confidence: 0.87,
    symptom_id: "SYMPTOM_CHEST_PAIN",
    triage: "urgent",
  });

  const run = () => {
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setResult(analyze(input));
      setLoading(false);
    }, 600);
  };

  return (
    <section id="demo" className="border-b border-border/60 py-24">
      <div className="container">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">Live API simulator</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Try it. Same input, same structured output.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Send any symptom description. Medical MCP returns a canonical
            symptom id, risk level, confidence and triage routing.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2.5">
              <span className="font-mono text-xs text-muted-foreground">request.text</span>
              <span className="font-mono text-[10px] text-muted-foreground">UTF-8</span>
            </div>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={6}
              className="resize-none rounded-none border-0 bg-transparent font-mono text-sm focus-visible:ring-0"
              placeholder="e.g. shortness of breath when climbing stairs"
            />
            <div className="flex items-center justify-between border-t border-border bg-muted/30 px-4 py-3">
              <span className="text-xs text-muted-foreground">{input.length} chars</span>
              <Button size="sm" onClick={run} disabled={loading}>
                {loading ? (
                  <><Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" /> Analyzing</>
                ) : (
                  <><Play className="mr-1.5 h-3.5 w-3.5" /> Analyze</>
                )}
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2.5">
              <span className="font-mono text-xs text-muted-foreground">response.json</span>
              <span className="font-mono text-[10px] text-muted-foreground">200 OK</span>
            </div>
            <div className="min-h-[260px] p-5">
              {loading && (
                <div className="flex h-full items-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" /> Computing structured risk signals…
                </div>
              )}
              {!loading && result && (
                <div className="space-y-4">
                  <div className={`inline-flex items-center gap-2 rounded-md border px-2.5 py-1 font-mono text-xs ${riskColor[result.risk_level]}`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    risk_level: {result.risk_level}
                  </div>
                  <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed text-foreground">
{`{
  "risk_level":  "${result.risk_level}",
  "confidence":  ${result.confidence.toFixed(2)},
  "symptom_id":  "${result.symptom_id}",
  "triage":      "${result.triage}"
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
