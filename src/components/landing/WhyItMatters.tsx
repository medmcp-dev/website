export const WhyItMatters = () => {
  return (
    <section className="border-b border-border/60 py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">Why it matters</p>
          <h2 className="font-serif-display text-balance text-4xl leading-[1.05] md:text-5xl text-gradient-fade">
            Medical AI needs shared infrastructure, not more prompts.
          </h2>
          <p className="mt-6 text-balance text-lg text-muted-foreground">
            Without a shared medical MCP layer, every AI health agent reinvents
            symptom parsing and risk scoring independently — leading to
            inconsistent, unreliable outputs that can't be trusted in
            production. Medical MCP is the missing standard.
          </p>
        </div>
      </div>
    </section>
  );
};
