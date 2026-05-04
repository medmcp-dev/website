import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

const snippets = {
  javascript: `const response = await fetch("https://api.medicalmcp.com/analyze", {
  method: "POST",
  headers: {
    "Authorization": \`Bearer \${process.env.MCP_API_KEY}\`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    text: "chest pain for 2 hours"
  })
});

const result = await response.json();
// { risk_level, confidence, symptom_id, triage }`,
  curl: `curl https://api.medicalmcp.com/analyze \\
  -H "Authorization: Bearer $MCP_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{ "text": "chest pain for 2 hours" }'`,
  python: `import os, requests

r = requests.post(
    "https://api.medicalmcp.com/analyze",
    headers={"Authorization": f"Bearer {os.environ['MCP_API_KEY']}"},
    json={"text": "chest pain for 2 hours"},
)

result = r.json()`,
};

export const CodeExample = () => {
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
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">API</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            One endpoint. Predictable output.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Drop Medical MCP into any agent runtime. No SDK required, but
            first-class support for MCP-compatible clients.
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
                {copied ? "Copied" : "Copy"}
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
