const NOTES_PREFIX = '/notes/';

const MAIN_UNIT_PREFIX = 'unit-';

/** Map a notes page URL to a progress lesson id. */
export function urlToLessonId(url: string): string | null {
  if (!url.startsWith(NOTES_PREFIX)) return null;

  const path = url.slice(NOTES_PREFIX.length);
  if (!path || path.includes('/progress') || path.includes('/daily-drill')) {
    return null;
  }

  const segments = path.split('/').filter(Boolean);
  if (segments.length < 2) return null;

  // phase-1-getting-started/unit-01-script-and-sounds/01-arabic-letters-review
  if (
    segments[0]?.startsWith('phase-') &&
    segments[1]?.startsWith(MAIN_UNIT_PREFIX)
  ) {
    return `${segments[1]}/${segments.slice(2).join('/')}`;
  }

  return null;
}
