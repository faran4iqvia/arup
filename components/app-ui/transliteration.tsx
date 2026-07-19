import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type TransliterationProps = {
  children: ReactNode;
  className?: string;
};

export default function Transliteration({
  children,
  className,
}: TransliterationProps) {
  return (
    <span
      className={cn(
        'ltr-block font-sans text-base italic text-fd-muted-foreground',
        className
      )}
      dir="ltr"
      lang="en"
    >
      {children}
    </span>
  );
}

Transliteration.displayName = 'Transliteration';
