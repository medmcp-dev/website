import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useLandingCopy } from "@/hooks/use-landing-copy";
import { Check, Copy } from "lucide-react";

const snippets = {
  javascript: `import { MedMCP } from '@medmcp/sdk';

const client = new MedMCP({ apiKey: process.env.MEDMCP_API_KEY });
const result = await client.analyze('chest pain for 2 hours');

console.log(result.risk_level);     // "high" | "critical"
console.log(result.confidence);     // 0..1
console.log(result.signals);        // structured risk drivers
console.log(result.interpretation); // "1 symptom(s) identified..."`,
  curl: `curl -X POST https://core-production-389e.up.railway.app/v1/analyze \\
  -H "X-API-Key: $MEDMCP_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"type":"symptom","data":{"text":"chest pain for 2 hours"}}'`,
  python: `import os
from medmcp import MedMCP

client = MedMCP(api_key=os.environ['MEDMCP_API_KEY'])
result = client.analyze('chest pain for 2 hours')

print(result.risk_level)      # "high" | "critical"
print(result.confidence)      # 0..1
print(result.signals)         # structured risk drivers
print(result.interpretation)  # "1 symptom(s) identified..."`,
};

export const CodeExample = () => {
  const t = useLandingCopy();
  const [tab, setTab] = useState<keyof typeof snippets>("javascript");
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(snippets[tab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section id="code" className="border-b border-border/60 py-24">
      <div className="container">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">{t.code.eyebrow}</p>
          <h2 className="font-serif-display text-balance text-4xl leading-[1.05] md:text-5xl text-gradient-fade">
            {t.code.title}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {t.code.subtitle}
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-xl border border-border bg-card">
          <Tabs value={tab} onValueChange={(v) => setTab(v as keyof typeof snippets)}>
            <div className="flex items-center justify-between border-b border-border bg-muted/40 px-3 py-2">
              <TabsList className="bg-transparent p-0">
                <TabsTrigger value="javascript" className="data-[state=active]:bg-background">JavaScript</TabsTrigger>
                <TabsTrigger value="curl" className="data-[state=active]:bg-background">cURL</TabsTrigger>
                <TabsTrigger value="python" className="data-[state=active]:bg-background">Python</TabsTrigger>
              </TabsList>
              <Button variant="ghost" size="sm" onClick={copy}>
                {copied ? <Check className="mr-1.5 h-3.5 w-3.5 text-primary" /> : <Copy className="mr-1.5 h-3.5 w-3.5" />}
                {copied ? t.code.copied : t.code.copy}
              </Button>
            </div>
            {(Object.keys(snippets) as (keyof typeof snippets)[]).map((k) => (
              <TabsContent key={k} value={k} className="m-0">
                <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed text-foreground">
                  {snippets[k]}
                </pre>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};
