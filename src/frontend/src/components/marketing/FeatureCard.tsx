import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-card/50 border-border/50 hover:border-electric/50 transition-all duration-300 hover:shadow-glow-electric-sm h-full">
      <CardContent className="p-6">
        <div className="w-14 h-14 rounded-full bg-electric/10 flex items-center justify-center mb-4">
          <Icon className="w-7 h-7 text-electric" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
