import SectionShell from '../SectionShell';
import AnimatedInView from '../AnimatedInView';

export default function AboutSection() {
  return (
    <SectionShell id="about" className="bg-deep-blue/50">
      <AnimatedInView>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-foreground">
            Research Background
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Developed as an innovative electrical safety project focused on enhancing LV distribution protection
            without requiring full smart grid transformation. SmartBreak represents a breakthrough in making
            advanced safety technology accessible and affordable for utilities worldwide, particularly in rural
            and underserved areas where traditional SCADA systems are not economically viable.
          </p>
        </div>
      </AnimatedInView>
    </SectionShell>
  );
}
