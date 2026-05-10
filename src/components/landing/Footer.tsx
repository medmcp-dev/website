import { Activity } from "lucide-react";

export const Footer = () => {
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
          Developer infrastructure for AI medical agents. MedMCP is not a
          medical device, diagnostic tool, or substitute for professional care.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <a href="#docs" className="hover:text-foreground">Docs</a>
          <a href="#code" className="hover:text-foreground">API</a>
          <a href="#cta" className="hover:text-foreground">Contact</a>
          <a
            href="https://github.com/medmcp-dev/core/blob/main/docs/policy.md"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            Usage policy
          </a>
          <a
            href="https://github.com/medmcp-dev/core/blob/main/docs/policy-hr.md"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            Sažetak (HR)
          </a>
        </div>
      </div>
    </footer>
  );
};
