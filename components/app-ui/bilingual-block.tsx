import { cn } from '@/lib/cn';
import Transliteration from '@/components/app-ui/transliteration';
import TranslationBlock from '@/components/app-ui/translation-block';

type BilingualBlockProps = {
  arabic: string;
  english: string;
  speaker?: string;
  transliteration?: string;
  size?: 'base' | 'md' | 'lg';
  className?: string;
};

const arabicSizeClass = {
  base: 'text-[1.75rem] leading-loose',
  md: 'text-4xl leading-loose',
  lg: 'text-5xl leading-loose',
} as const;

export default function BilingualBlock({
  arabic,
  english,
  speaker,
  transliteration,
  size = 'md',
  className,
}: BilingualBlockProps) {
  return (
    <div
      className={cn(
        'bilingual-block bidi-isolate-block my-3 rounded-lg border border-fd-border bg-fd-card px-4 py-3',
        className
      )}
      dir="ltr"
      lang="en"
    >
      {speaker ? (
        <p className="mb-2 font-sans text-sm font-semibold text-fd-primary">
          {speaker}
        </p>
      ) : null}

      <p
        className={cn('arabic-isolate m-0! text-right', arabicSizeClass[size])}
        dir="rtl"
        lang="ar"
      >
        {arabic}
      </p>

      {transliteration ? (
        <p className="mb-1 mt-1">
          <Transliteration>{transliteration}</Transliteration>
        </p>
      ) : null}

      <TranslationBlock>{english}</TranslationBlock>
    </div>
  );
}

BilingualBlock.displayName = 'BilingualBlock';
