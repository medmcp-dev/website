import { Activity } from "lucide-react";
import { useLandingCopy } from "@/hooks/use-landing-copy";

export const Footer = () => {
  const t = useLandingCopy();

  return (
    <footer className="py-12">
      <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/15 text-primary">
            <Activity className="h-3.5 w-3.5" />
          </span>
          MedMCP
        </div>
        <p className="max-w-md text-xs text-muted-foreground">
          {t.footer.tagline}
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <a href="#code" className="hover:text-foreground">{t.footer.docs}</a>
          <a href="#code" className="hover:text-foreground">{t.footer.api}</a>
          <a href="#cta" className="hover:text-foreground">{t.footer.contact}</a>
          <a
            href="https://github.com/medmcp-dev/core/blob/main/docs/policy.md"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            {t.footer.usagePolicy}
          </a>
          <a
            href="https://github.com/medmcp-dev/core/blob/main/docs/policy-hr.md"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            {t.footer.summaryHr}
          </a>
        </div>
      </div>
    </footer>
  );
};
