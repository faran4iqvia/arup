import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type DialogueBlockProps = {
  children: ReactNode;
  title?: string;
  className?: string;
};

export default function DialogueBlock({
  children,
  title,
  className,
}: DialogueBlockProps) {
  return (
    <section
      className={cn(
        'dialogue-block bidi-isolate-block my-4 space-y-2 rounded-lg border border-fd-border bg-fd-accent/20 p-4',
        className
      )}
      dir="ltr"
      lang="en"
      aria-label={title || 'Dialogue'}
    >
      {title ? (
        <h4 className="m-0! font-sans text-base font-semibold text-fd-foreground">
          {title}
        </h4>
      ) : null}
      <div className="space-y-2">{children}</div>
    </section>
  );
}

DialogueBlock.displayName = 'DialogueBlock';
