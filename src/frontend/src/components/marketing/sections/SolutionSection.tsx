import { CheckCircle2 } from 'lucide-react';
import SectionShell from '../SectionShell';
import AnimatedInView from '../AnimatedInView';

export default function SolutionSection() {
  const features = [
    'Detects conductor break in real time',
    'Uses multi-consumer validation logic',
    'Automatically trips isolator',
    'Sends GSM/LoRa remote alerts',
  ];

  return (
    <SectionShell id="solution">
      <AnimatedInView>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 text-foreground">
          The <span className="text-electric">SmartBreak</span> Solution
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          A low-cost, retrofit-friendly intelligent system that saves lives through automated fault detection and isolation.
        </p>
      </AnimatedInView>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedInView delay={0.2}>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card/30 border border-border/30">
                <CheckCircle2 className="w-6 h-6 text-electric flex-shrink-0" />
                <p className="text-base lg:text-lg text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </AnimatedInView>

        <AnimatedInView delay={0.4}>
          <div className="relative">
            <img
              src="/assets/generated/solution-architecture-diagram.dim_1600x900.png"
              alt="SmartBreak system architecture diagram"
              className="w-full rounded-xl shadow-2xl border border-border/50"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
          </div>
        </AnimatedInView>
      </div>
    </SectionShell>
  );
}
