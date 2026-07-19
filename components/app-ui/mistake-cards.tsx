import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type MistakeCardsProps = {
  children: ReactNode;
  className?: string;
};

export default function MistakeCards({
  children,
  className,
}: MistakeCardsProps) {
  return (
    <div className={cn('mistake-cards my-4 flex flex-col gap-4', className)}>
      {children}
    </div>
  );
}

MistakeCards.displayName = 'MistakeCards';
