import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, BookOpen, Mail } from "lucide-react";

export const FinalCTA = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  const join = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setOpen(false);
    setEmail("");
    toast({ title: "You're on the list", description: "We'll reach out when API access opens up." });
  };

  return (
    <section id="cta" className="relative overflow-hidden border-b border-border/60 py-28">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Build medical agents on infrastructure, not prompts.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Get early API access and start shipping deterministic medical reasoning today.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button size="lg" asChild>
              <a href="#cta">Get API access <ArrowRight className="ml-1.5 h-4 w-4" /></a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#docs"><BookOpen className="mr-1.5 h-4 w-4" /> Read docs</a>
            </Button>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="lg" variant="ghost"><Mail className="mr-1.5 h-4 w-4" /> Join waitlist</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Join the waitlist</DialogTitle>
                  <DialogDescription>
                    We're onboarding teams building production medical AI. Drop your email and we'll reach out.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={join} className="space-y-4">
                  <Input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <DialogFooter>
                    <Button type="submit" className="w-full">Request access</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};
