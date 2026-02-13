import { Brain, Shield, Cpu, Thermometer, MapPin, Sun } from 'lucide-react';
import SectionShell from '../SectionShell';
import AnimatedInView from '../AnimatedInView';
import FeatureCard from '../FeatureCard';

export default function TechnologySection() {
  const technologies = [
    {
      icon: Brain,
      title: 'Multi-point validation logic',
      description: 'Intelligent cross-verification from multiple consumer units',
    },
    {
      icon: Shield,
      title: 'False alarm reduction',
      description: 'Advanced algorithms minimize false triggering',
    },
    {
      icon: Cpu,
      title: 'AI-ready fault classification',
      description: 'Machine learning integration for predictive analysis',
    },
    {
      icon: Thermometer,
      title: 'Predictive monitoring',
      description: 'Thermal and vibration sensors for early warning',
    },
    {
      icon: MapPin,
      title: 'GPS-based localization',
      description: 'Precise fault location identification',
    },
    {
      icon: Sun,
      title: 'Solar-assisted backup',
      description: 'Renewable energy ensures continuous operation',
    },
  ];

  return (
    <SectionShell id="technology">
      <AnimatedInView>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 text-foreground">
          Technology & Innovation
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          Cutting-edge features that make SmartBreak the most reliable solution for power line safety
        </p>
      </AnimatedInView>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <AnimatedInView key={index} delay={0.1 * index}>
            <FeatureCard icon={tech.icon} title={tech.title} description={tech.description} />
          </AnimatedInView>
        ))}
      </div>
    </SectionShell>
  );
}
