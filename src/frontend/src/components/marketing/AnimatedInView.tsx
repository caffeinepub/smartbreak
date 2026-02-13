import { ReactNode } from 'react';
import { useInViewAnimation } from '../../hooks/useInViewAnimation';
import { cn } from '@/lib/utils';

interface AnimatedInViewProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedInView({ children, className, delay = 0 }: AnimatedInViewProps) {
  const { ref, isVisible } = useInViewAnimation({ delay });

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
    >
      {children}
    </div>
  );
}
