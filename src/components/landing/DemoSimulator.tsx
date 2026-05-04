import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
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

const analyze = (text: string): ApiResponse => {
  const t = text.toLowerCase();
  if (t.includes("chest pain") || t.includes("heart attack"))
    return { risk_level: "high", confidence: 1, interpretation: "1 symptom(s) identified: chest pain. Top differential: NSTEMI (match score: 2.8).", entities: [{ type: "symptom", value: "chest pain" }] };
  if (t.includes("stroke") || t.includes("slurred") || t.includes("face droop"))
    return { risk_level: "critical", confidence: 1, interpretation: "2 symptom(s) identified. Top differential: ischaemic stroke (match score: 3.1).", entities: [{ type: "symptom", value: "facial droop" }, { type: "symptom", value: "hemiplegia" }] };
  if (t.includes("shortness of breath") || t.includes("dyspnoea"))
    return { risk_level: "high", confidence: 1, interpretation: "1 symptom(s) identified: dyspnoea. Top differential: pulmonary embolism (match score: 2.1).", entities: [{ type: "symptom", value: "dyspnoea" }] };
  if (t.includes("fever"))
    return { risk_level: "medium", confidence: 0.5, interpretation: "1 symptom(s) identified: fever. Top differential: sepsis (match score: 1.2).", entities: [{ type: "symptom", value: "fever" }] };
  if (t.includes("headache") || t.includes("migraine"))
    return { risk_level: "medium", confidence: 0.5, interpretation: "1 symptom(s) identified: headache. Top differential: migraine (match score: 1.4).", entities: [{ type: "symptom", value: "headache" }] };
  return { risk_level: "low", confidence: 0, interpretation: "No recognised symptoms identified.", entities: [] };
};

export const DemoSimulator = () => {
  const [input, setInput] = useState("chest pain for 2 hours radiating to left arm");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ApiResponse | null>({
    risk_level: "high",
    confidence: 1,
    interpretation: "1 symptom(s) identified: chest pain. Top differential: NSTEMI (match score: 2.8).",
    entities: [{ type: "symptom", value: "chest pain" }],
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
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">Live API simulator</p>
          <h2 className="font-serif-display text-balance text-4xl leading-[1.05] md:text-5xl text-gradient-fade">
            Try it. Same input, same structured output.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Send any symptom description. MedMCP returns a deterministic
            risk level, matched entities, and structured interpretation.
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
