import { LandingLocaleProvider } from "@/contexts/landing-locale";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { DemoSimulator } from "@/components/landing/DemoSimulator";
import { CodeExample } from "@/components/landing/CodeExample";
import { UseCases } from "@/components/landing/UseCases";
import { WhyItMatters } from "@/components/landing/WhyItMatters";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { LegalDisclaimerSection } from "@/components/landing/LegalDisclaimerSection";
import { DeveloperPrivacySection } from "@/components/landing/DeveloperPrivacySection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <LandingLocaleProvider>
      <main className="min-h-screen overflow-x-hidden bg-background text-foreground pt-16">
        <Nav />
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <DemoSimulator />
        <CodeExample />
        <UseCases />
        <WhyItMatters />
        <FinalCTA />
        <LegalDisclaimerSection />
        <DeveloperPrivacySection />
        <Footer />
      </main>
    </LandingLocaleProvider>
  );
};

export default Index;
