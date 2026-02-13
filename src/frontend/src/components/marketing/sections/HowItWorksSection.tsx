import { Zap, AlertCircle, Radio, CheckCircle, Power, MessageSquare } from 'lucide-react';
import SectionShell from '../SectionShell';
import AnimatedInView from '../AnimatedInView';

export default function HowItWorksSection() {
  const steps = [
    { icon: Zap, title: 'Conductor snaps', description: 'Physical break in overhead line' },
    { icon: AlertCircle, title: 'Voltage loss detected', description: 'At consumer end' },
    { icon: Radio, title: 'Alert transmitted', description: 'Battery-powered signal' },
    { icon: CheckCircle, title: 'Validation', description: 'Multiple alerts confirmed' },
    { icon: Power, title: 'Isolation triggered', description: 'Actuator trips isolator' },
    { icon: MessageSquare, title: 'SMS notification', description: 'Sent to control room' },
  ];

  return (
    <SectionShell id="how-it-works" className="bg-deep-blue/50">
      <AnimatedInView>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 text-foreground">
          How It Works
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          Six intelligent steps from fault detection to automated isolation
        </p>
      </AnimatedInView>

      <AnimatedInView delay={0.2}>
        <div className="hidden lg:grid lg:grid-cols-6 gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-electric/10 border-2 border-electric flex items-center justify-center mb-4 shadow-glow-electric">
                  <step.icon className="w-10 h-10 text-electric" />
                </div>
                <div className="bg-card/50 border border-border/50 rounded-lg p-4 h-32 flex flex-col justify-center">
                  <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-10 left-full w-4 h-0.5 bg-electric/50 -translate-x-1/2" />
              )}
            </div>
          ))}
        </div>

        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-electric/10 border-2 border-electric flex items-center justify-center shadow-glow-electric">
                <step.icon className="w-8 h-8 text-electric" />
              </div>
              <div className="flex-1 bg-card/50 border border-border/50 rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedInView>
    </SectionShell>
  );
}
