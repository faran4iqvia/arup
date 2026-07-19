import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type TranslationBlockProps = {
  children: ReactNode;
  label?: string;
  className?: string;
};

export default function TranslationBlock({
  children,
  label,
  className,
}: TranslationBlockProps) {
  return (
    <p
      className={cn(
        'ltr-block m-0! font-sans text-base leading-relaxed text-fd-muted-foreground',
        className
      )}
      dir="ltr"
      lang="en"
    >
      {label ? (
        <>
          <span className="font-semibold text-fd-foreground">{label}: </span>
          {children}
        </>
      ) : (
        children
      )}
    </p>
  );
}

TranslationBlock.displayName = 'TranslationBlock';
