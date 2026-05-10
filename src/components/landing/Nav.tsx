import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useLandingLocale, type LandingLocale } from "@/contexts/landing-locale";
import { Activity } from "lucide-react";

export const Nav = () => {
  const { locale, setLocale } = useLandingLocale();

  return (
    <header className="fixed top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-3">
        <a href="#" className="flex shrink-0 items-center gap-2 text-sm font-medium tracking-tight">
          <Activity className="h-4 w-4" />
          <span>MedMCP</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#demo" className="transition-colors hover:text-foreground">Demo</a>
          <a href="#code" className="transition-colors hover:text-foreground">API</a>
          <a href="#use-cases" className="transition-colors hover:text-foreground">Use cases</a>
          <a href="https://github.com/medmcp-dev/core" className="transition-colors hover:text-foreground">GitHub</a>
        </nav>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <ToggleGroup
            type="single"
            value={locale}
            onValueChange={(v) => {
              if (v === "en" || v === "hr") setLocale(v as LandingLocale);
            }}
            variant="outline"
            size="sm"
            aria-label="Jezik stranice / Page language"
            className="rounded-full border border-border/60 bg-background/60 p-0.5"
          >
            <ToggleGroupItem
              value="en"
              className="h-8 min-w-[2.25rem] rounded-full px-2.5 text-xs data-[state=on]:bg-primary/15 data-[state=on]:text-foreground"
            >
              EN
            </ToggleGroupItem>
            <ToggleGroupItem
              value="hr"
              className="h-8 min-w-[2.25rem] rounded-full px-2.5 text-xs data-[state=on]:bg-primary/15 data-[state=on]:text-foreground"
            >
              HR
            </ToggleGroupItem>
          </ToggleGroup>
          <Button variant="ghost" size="sm" asChild className="hidden rounded-full sm:inline-flex">
            <a href="https://github.com/medmcp-dev/core" target="_blank" rel="noopener noreferrer">GitHub</a>
          </Button>
          <Button size="sm" asChild className="rounded-full">
            <a href="#cta">Get started</a>
          </Button>
        </div>
      </div>
    </header>
  );
};
