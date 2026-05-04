import { Button } from "@/components/ui/button";
import { Activity } from "lucide-react";

export const Nav = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-sm font-medium tracking-tight">
          <Activity className="h-4 w-4" />
          <span>Medical MCP</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#demo" className="transition-colors hover:text-foreground">Demo</a>
          <a href="#code" className="transition-colors hover:text-foreground">API</a>
          <a href="#use-cases" className="transition-colors hover:text-foreground">Use cases</a>
          <a href="#docs" className="transition-colors hover:text-foreground">Docs</a>
        </nav>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" asChild className="hidden rounded-full sm:inline-flex">
            <a href="#docs">Log in</a>
          </Button>
          <Button size="sm" asChild className="rounded-full">
            <a href="#cta">Get started</a>
          </Button>
        </div>
      </div>
    </header>
  );
};
