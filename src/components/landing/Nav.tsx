import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";

export const Nav = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 text-primary">
            <Activity className="h-4 w-4" />
          </span>
          <span>Medical MCP</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#demo" className="transition-colors hover:text-foreground">Demo</a>
          <a href="#code" className="transition-colors hover:text-foreground">API</a>
          <a href="#use-cases" className="transition-colors hover:text-foreground">Use cases</a>
          <a href="#docs" className="transition-colors hover:text-foreground">Docs</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
            <a href="#docs">Sign in</a>
          </Button>
          <Button size="sm" asChild>
            <a href="#cta">Request access</a>
          </Button>
        </div>
      </div>
    </header>
  );
};
