import { useLandingLocale } from "@/contexts/landing-locale";

const POLICY_URL =
  "https://github.com/medmcp-dev/core/blob/main/docs/policy.md";

export const LegalDisclaimerSection = () => {
  const { locale } = useLandingLocale();

  if (locale === "hr") {
    return (
      <section lang="hr" className="border-b border-border/60 py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="font-serif-display text-balance text-4xl leading-[1.05] text-gradient-fade md:text-5xl">
              Pravna napomena
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
  }

  return (
    <section lang="en" className="border-b border-border/60 py-24">
      <div className="container">
        <div className="max-w-3xl">
          <h2 className="font-serif-display text-balance text-4xl leading-[1.05] text-gradient-fade md:text-5xl">
            Product scope
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            MedMCP provides infrastructure for AI agents —{" "}
            <strong className="font-semibold text-foreground">
              it is not a medical device
            </strong>
            ,{" "}
            <strong className="font-semibold text-foreground">
              not a diagnostic tool in the regulatory sense
            </strong>
            , and{" "}
            <strong className="font-semibold text-foreground">
              not a substitute for clinical judgment
            </strong>
            . Outputs are reference signals for developers and AI agents, not
            for end users (patients) as a “healthcare service”.
          </p>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Integrators are responsible for applicable legal requirements in
            their jurisdiction (for example{" "}
            <strong className="font-semibold text-foreground">MDR</strong> where
            relevant to their deployment).
          </p>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            The canonical English description is the{" "}
            <a
              href={POLICY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              <strong className="font-semibold text-foreground">
                Usage policy
              </strong>
            </a>{" "}
            on GitHub.
          </p>
        </div>
      </div>
    </section>
  );
};
