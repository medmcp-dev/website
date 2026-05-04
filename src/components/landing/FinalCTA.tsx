import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, BookOpen, Mail } from "lucide-react";

export const FinalCTA = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const join = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setEmail("");
    toast({ title: "You're on the list", description: "We'll reach out when API access opens up." });
  };

  return (
    <section id="cta" className="beam-bg relative overflow-hidden border-b border-border/60 py-28">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif-display text-balance text-5xl leading-[1.05] md:text-6xl">
            <span className="text-gradient-fade">Build on infrastructure,</span>
            <br />
            <span className="italic text-gradient-fade">not on prompts.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Get early API access and start shipping deterministic medical reasoning today.
          </p>
          
          <form
            onSubmit={join}
            className="mx-auto mt-10 flex w-full max-w-md flex-col gap-2 sm:flex-row"
          >
            <Input
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 rounded-full bg-card px-5 text-sm"
            />
            <Button type="submit" size="lg" className="rounded-full">
              Request access <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </form>

          <div className="mt-5 flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <a href="#code" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <BookOpen className="h-3.5 w-3.5" /> Read docs
            </a>
            <span className="h-3 w-px bg-border" />
            <a href="mailto:hello@medicalmcp.dev" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <Mail className="h-3.5 w-3.5" /> hello@medicalmcp.dev
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
