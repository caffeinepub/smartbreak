import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionShellProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionShell({ id, children, className }: SectionShellProps) {
  return (
    <section id={id} className={cn('py-16 sm:py-20 lg:py-28', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
