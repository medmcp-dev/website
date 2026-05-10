const GDPR_SUMMARY_URL =
  "https://github.com/medmcp-dev/core/blob/main/docs/gdpr.md";

export const DeveloperPrivacySection = () => {
  return (
    <section lang="hr" className="border-b border-border/60 py-24">
      <div className="container">
        <div className="max-w-3xl">
          <h2 className="font-serif-display text-balance text-3xl leading-[1.05] text-gradient-fade md:text-4xl">
            Data / privacy za developere
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Integratori API-ja trebaju računati s obradom podataka vezanih uz
            račune, ključeve i tehničke zapise poziva — okviri su opisani u
            engleskom sažetku u repozitoriju{" "}
            <span className="whitespace-nowrap">medmcp-dev/core</span>. Ova
            stranica ne donosi novi „izvor istine“; služi samo kao kratka
            orijentacija i poveznica.
          </p>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            <a
              href={GDPR_SUMMARY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              Full summary (EN)
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
