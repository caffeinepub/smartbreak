import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSmoothScroll } from '../../../hooks/useSmoothScroll';
import AnimatedInView from '../AnimatedInView';

export default function HeroSection() {
  const scrollTo = useSmoothScroll();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-blue via-background to-background" />
        <img
          src="/assets/generated/hero-grid-bg.dim_1920x1080.png"
          alt=""
          className="w-full h-full object-cover opacity-30 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <AnimatedInView className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 lg:mb-8 leading-tight">
            SmartBreak – Intelligent Detection & Automatic Isolation of{' '}
            <span className="text-electric">Broken Power Lines</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
            Preventing electrocution and fire hazards through real-time fault detection and automated isolation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-electric text-deep-blue hover:bg-electric/90 font-semibold text-base lg:text-lg px-8 py-6 rounded-full shadow-glow-electric"
              onClick={() => scrollTo('contact')}
            >
              Request Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-electric text-electric hover:bg-electric/10 font-semibold text-base lg:text-lg px-8 py-6 rounded-full"
              asChild
            >
              <a href="/assets/technical-brief.pdf" download>
                <Download className="mr-2 w-5 h-5" />
                Download Technical Brief
              </a>
            </Button>
          </div>
        </AnimatedInView>
      </div>
    </section>
  );
}
