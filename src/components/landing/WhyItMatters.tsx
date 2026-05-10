import { useLandingCopy } from "@/hooks/use-landing-copy";

export const WhyItMatters = () => {
  const t = useLandingCopy();

  return (
    <section className="border-b border-border/60 py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">{t.why.eyebrow}</p>
          <h2 className="font-serif-display text-balance text-4xl leading-[1.05] md:text-5xl text-gradient-fade">
            {t.why.title}
          </h2>
          <p className="mt-6 text-balance text-lg text-muted-foreground">
            {t.why.body}
          </p>
        </div>
      </div>
    </section>
  );
};
