import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { DemoSimulator } from "@/components/landing/DemoSimulator";
import { CodeExample } from "@/components/landing/CodeExample";
import { UseCases } from "@/components/landing/UseCases";
import { WhyItMatters } from "@/components/landing/WhyItMatters";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <DemoSimulator />
      <CodeExample />
      <UseCases />
      <WhyItMatters />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
