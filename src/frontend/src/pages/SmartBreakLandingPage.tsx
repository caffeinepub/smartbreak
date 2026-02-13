import SiteHeader from '../components/marketing/SiteHeader';
import HeroSection from '../components/marketing/sections/HeroSection';
import ProblemSection from '../components/marketing/sections/ProblemSection';
import SolutionSection from '../components/marketing/sections/SolutionSection';
import HowItWorksSection from '../components/marketing/sections/HowItWorksSection';
import TechnologySection from '../components/marketing/sections/TechnologySection';
import SimulationSection from '../components/marketing/sections/SimulationSection';
import ImpactSection from '../components/marketing/sections/ImpactSection';
import AboutSection from '../components/marketing/sections/AboutSection';
import ContactSection from '../components/marketing/sections/ContactSection';
import SiteFooter from '../components/marketing/SiteFooter';

export default function SmartBreakLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <TechnologySection />
        <SimulationSection />
        <ImpactSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
