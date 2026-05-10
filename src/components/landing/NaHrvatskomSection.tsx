const POLICY_URL =
  "https://github.com/medmcp-dev/core/blob/main/docs/policy.md";

export const NaHrvatskomSection = () => {
  return (
    <section lang="hr" className="border-b border-border/60 py-24">
      <div className="container">
        <div className="max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            // na hrvatskom, kratko
          </p>
          <h2 className="font-serif-display text-balance text-4xl leading-[1.05] text-gradient-fade md:text-5xl">
            Na hrvatskom
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            MedMCP je infrastruktura za AI agente —{" "}
            <strong className="font-semibold text-foreground">
              nije medicinski uređaj
            </strong>
            ,{" "}
            <strong className="font-semibold text-foreground">
              nije dijagnostički alat u regulatornom smislu
            </strong>{" "}
            i{" "}
            <strong className="font-semibold text-foreground">
              nije zamjena za kliničku prosudbu
            </strong>
            . Izlazni podaci su referentni signali namijenjeni programerima i
            AI agentima, ne krajnjim korisnicima (pacijentima) kao
            „zdravstvenoj usluzi“.
          </p>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Integratori su odgovorni za svoje pravne zahtjeve u svojoj zemlji
            (npr.{" "}
            <strong className="font-semibold text-foreground">MDR</strong> ako
            relevantno za njihovo rješenje).
          </p>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Za potpuno englesko objašnjenje što servis jest i što nije, vidi{" "}
            <a
              href={POLICY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              <strong className="font-semibold text-foreground">
                Usage policy
              </strong>
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};
