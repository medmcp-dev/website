import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useLandingCopy } from "@/hooks/use-landing-copy";
import { ArrowRight, BookOpen, Mail } from "lucide-react";

const API_URL = "https://core-production-389e.up.railway.app";

export const FinalCTA = () => {
  const t = useLandingCopy();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const join = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/v1/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setEmail("");
      toast({
        title: t.cta.toastSuccessTitle,
        description: (data.message as string | undefined) ?? t.cta.toastSuccessDescription,
      });
    } catch {
      toast({
        title: t.cta.toastErrorTitle,
        description: t.cta.toastErrorDescription,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="cta" className="beam-bg relative overflow-hidden border-b border-border/60 py-28">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif-display text-balance text-5xl leading-[1.05] md:text-6xl">
            <span className="text-gradient-fade">{t.cta.titleLine1}</span>
            <br />
            <span className="italic text-gradient-fade">{t.cta.titleLine2}</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            {t.cta.subtitle}
          </p>

          <form
            onSubmit={join}
            className="mx-auto mt-10 flex w-full max-w-md flex-col gap-2 sm:flex-row"
          >
            <Input
              type="email"
              required
              placeholder={t.cta.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 rounded-full bg-card px-5 text-sm"
            />
            <Button type="submit" size="lg" className="rounded-full" disabled={loading}>
              {loading ? t.cta.sending : <>{t.cta.requestAccess} <ArrowRight className="ml-1 h-4 w-4" /></>}
            </Button>
          </form>

          <div className="mt-5 flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <a href="#code" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <BookOpen className="h-3.5 w-3.5" />{t.cta.readDocs}
            </a>
            <span className="h-3 w-px bg-border" />
            <a href="mailto:hello@medmcp.dev" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <Mail className="h-3.5 w-3.5" /> hello@medmcp.dev
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
