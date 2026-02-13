import { AlertTriangle, Zap, Flame, Shield, MapPin } from 'lucide-react';
import SectionShell from '../SectionShell';
import AnimatedInView from '../AnimatedInView';

export default function ProblemSection() {
  const problems = [
    { icon: Zap, text: 'Frequent snapping of LV overhead conductors' },
    { icon: AlertTriangle, text: 'Fallen wires remain energized' },
    { icon: Flame, text: 'High risk of electrocution and fire' },
    { icon: Shield, text: 'Existing relays cannot detect open conductor faults' },
    { icon: MapPin, text: 'Rural areas lack advanced SCADA systems' },
  ];

  return (
    <SectionShell id="problem" className="bg-deep-blue/50">
      <AnimatedInView>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 text-foreground">
          The Hidden Danger in LV Distribution Networks
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Low-voltage distribution networks face critical safety challenges that put lives at risk every day.
        </p>
      </AnimatedInView>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedInView delay={0.2}>
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/50 hover:border-electric/50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-electric/10 flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-electric" />
                </div>
                <p className="text-base lg:text-lg text-foreground pt-2">{problem.text}</p>
              </div>
            ))}
          </div>
        </AnimatedInView>

        <AnimatedInView delay={0.4}>
          <div className="relative">
            <img
              src="/assets/generated/problem-infographic.dim_1400x700.png"
              alt="Broken conductor leading to live wire and public danger"
              className="w-full rounded-xl shadow-2xl border border-border/50"
            />
          </div>
        </AnimatedInView>
      </div>
    </SectionShell>
  );
}
