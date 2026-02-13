import { CheckCircle2 } from 'lucide-react';
import SectionShell from '../SectionShell';
import AnimatedInView from '../AnimatedInView';

export default function SimulationSection() {
  const results = [
    '230V, 50Hz AC system simulated',
    'Fault introduced at 0.5 seconds',
    'Voltage collapse detected',
    'Trip signal activated',
    'Zero false triggering',
  ];

  return (
    <SectionShell id="simulation" className="bg-deep-blue/50">
      <AnimatedInView>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 text-foreground">
          MATLAB Simulation Results
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Rigorous testing validates SmartBreak's reliability and accuracy
        </p>
      </AnimatedInView>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedInView delay={0.2}>
          <div className="relative">
            <img
              src="/assets/generated/matlab-waveform-placeholder.dim_1600x600.png"
              alt="MATLAB simulation waveform showing fault detection"
              className="w-full rounded-xl shadow-2xl border border-border/50"
            />
          </div>
        </AnimatedInView>

        <AnimatedInView delay={0.4}>
          <div className="space-y-4">
            {results.map((result, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card/30 border border-border/30">
                <CheckCircle2 className="w-6 h-6 text-electric flex-shrink-0" />
                <p className="text-base lg:text-lg text-foreground">{result}</p>
              </div>
            ))}
          </div>
        </AnimatedInView>
      </div>
    </SectionShell>
  );
}
