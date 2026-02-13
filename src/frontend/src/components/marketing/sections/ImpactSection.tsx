import { Heart, Flame, Shield, Zap, DollarSign } from 'lucide-react';
import SectionShell from '../SectionShell';
import AnimatedInView from '../AnimatedInView';

export default function ImpactSection() {
  const impacts = [
    { icon: Heart, text: 'Saves human lives' },
    { icon: Shield, text: 'Prevents livestock deaths' },
    { icon: Flame, text: 'Reduces fire hazards' },
    { icon: Zap, text: 'Improves rural grid reliability' },
    { icon: DollarSign, text: 'Cost-effective large-scale deployment' },
  ];

  return (
    <SectionShell id="impact">
      <AnimatedInView>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 text-foreground">
          Impact on <span className="text-electric">Society</span>
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          SmartBreak transforms electrical safety and protects communities worldwide
        </p>
      </AnimatedInView>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedInView delay={0.2}>
          <div className="relative">
            <img
              src="/assets/generated/power-infrastructure-photo.dim_1600x900.png"
              alt="Power infrastructure at night"
              className="w-full rounded-xl shadow-2xl border border-border/50"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
          </div>
        </AnimatedInView>

        <AnimatedInView delay={0.4}>
          <div className="space-y-6">
            {impacts.map((impact, index) => (
              <div key={index} className="flex items-center gap-4 p-5 rounded-lg bg-card/50 border border-border/50 hover:border-electric/50 transition-colors">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-electric/10 flex items-center justify-center">
                  <impact.icon className="w-7 h-7 text-electric" />
                </div>
                <p className="text-lg lg:text-xl font-medium text-foreground">{impact.text}</p>
              </div>
            ))}
          </div>
        </AnimatedInView>
      </div>
    </SectionShell>
  );
}
