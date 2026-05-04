import { Bot, Stethoscope, Workflow, Video } from "lucide-react";

const cases = [
  { icon: Stethoscope, title: "AI symptom checkers", body: "Replace brittle prompt chains with deterministic symptom classification." },
  { icon: Bot, title: "Healthcare copilots", body: "Give clinical assistants a shared schema for reasoning across patient turns." },
  { icon: Workflow, title: "Triage automation", body: "Route patients by structured risk_level and triage fields, not free text." },
  { icon: Video, title: "Telemedicine assistants", body: "Pre-screen intake conversations with calibrated confidence scores." },
];

export const UseCases = () => {
  return (
    <section id="use-cases" className="border-b border-border/60 py-24">
      <div className="container">
        <div className="max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">Use cases</p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Built for teams shipping medical AI
          </h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cases.map(({ icon: Icon, title, body }) => (
            <div key={title} className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-medium">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
