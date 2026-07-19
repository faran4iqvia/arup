export type CourseUnit = {
  id: string;
  label: string;
  phase: number;
  path: string;
  lessonIds: string[];
  reviewId: string;
};

/** All trackable main-lesson slugs for Arabyy units. */
export const COURSE_UNITS: CourseUnit[] = [
  {
    id: 'unit-01-script-and-sounds',
    label: 'Unit 1',
    phase: 1,
    path: 'phase-1-getting-started/unit-01-script-and-sounds',
    reviewId: 'unit-01-script-and-sounds/review-and-test',
    lessonIds: [
      '01-arabic-letters-review',
      '02-vowel-marks-tashkeel',
      '03-connected-letters',
      '04-reading-short-words',
      '05-listening-to-sounds',
    ],
  },
  {
    id: 'unit-02-first-words',
    label: 'Unit 2',
    phase: 1,
    path: 'phase-1-getting-started/unit-02-first-words',
    reviewId: 'unit-02-first-words/review-and-test',
    lessonIds: [
      '01-hello-and-goodbye',
      '02-please-and-thank-you',
      '03-yes-no-and-excuse-me',
      '04-my-name-is',
      '05-how-are-you',
    ],
  },
  {
    id: 'unit-03-simple-sentences',
    label: 'Unit 3',
    phase: 1,
    path: 'phase-1-getting-started/unit-03-simple-sentences',
    reviewId: 'unit-03-simple-sentences/review-and-test',
    lessonIds: [
      '01-i-you-he-she',
      '02-this-is-a-book',
      '03-this-and-that',
      '04-the-book',
      '05-big-and-small',
    ],
  },
  {
    id: 'unit-04-everyday-basics',
    label: 'Unit 4',
    phase: 1,
    path: 'phase-1-getting-started/unit-04-everyday-basics',
    reviewId: 'unit-04-everyday-basics/review-and-test',
    lessonIds: [
      '01-numbers-1-to-10',
      '02-saying-no',
      '03-i-read-i-write',
      '04-where-and-when',
      '05-there-is-and-i-have',
    ],
  },
  {
    id: 'unit-05-people',
    label: 'Unit 5',
    phase: 2,
    path: 'phase-2-everyday-arabic/unit-05-people',
    reviewId: 'unit-05-people/review-and-test',
    lessonIds: [
      '01-family-members',
      '02-my-your-his-her',
      '03-describing-people',
      '04-the-students-book',
      '05-plural-people',
    ],
  },
  {
    id: 'unit-06-daily-life',
    label: 'Unit 6',
    phase: 2,
    path: 'phase-2-everyday-arabic/unit-06-daily-life',
    reviewId: 'unit-06-daily-life/review-and-test',
    lessonIds: [
      '01-morning-routine',
      '02-telling-time',
      '03-days-and-dates',
      '04-at-home',
      '05-i-usually',
    ],
  },
  {
    id: 'unit-07-food-and-shopping',
    label: 'Unit 7',
    phase: 2,
    path: 'phase-2-everyday-arabic/unit-07-food-and-shopping',
    reviewId: 'unit-07-food-and-shopping/review-and-test',
    lessonIds: [
      '01-food-and-drink',
      '02-at-the-restaurant',
      '03-at-the-market',
      '04-i-like-and-i-want',
      '05-counting-and-paying',
    ],
  },
  {
    id: 'unit-08-travel-and-places',
    label: 'Unit 8',
    phase: 2,
    path: 'phase-2-everyday-arabic/unit-08-travel-and-places',
    reviewId: 'unit-08-travel-and-places/review-and-test',
    lessonIds: [
      '01-countries-and-cities',
      '02-directions',
      '03-transportation',
      '04-weather',
      '05-at-the-hotel',
    ],
  },
  {
    id: 'unit-09-past-tense',
    label: 'Unit 9',
    phase: 3,
    path: 'phase-3-sentence-building/unit-09-past-tense',
    reviewId: 'unit-09-past-tense/review-and-test',
    lessonIds: [
      '01-i-went-i-said',
      '02-we-they-did',
      '03-yesterday-last-week',
      '04-i-saw-it',
      '05-telling-a-short-story',
    ],
  },
  {
    id: 'unit-10-future-and-plans',
    label: 'Unit 10',
    phase: 3,
    path: 'phase-3-sentence-building/unit-10-future-and-plans',
    reviewId: 'unit-10-future-and-plans/review-and-test',
    lessonIds: [
      '01-i-will-go',
      '02-making-appointments',
      '03-i-want-to',
      '04-commands-and-requests',
      '05-plans-with-friends',
    ],
  },
  {
    id: 'unit-11-connecting-ideas',
    label: 'Unit 11',
    phase: 3,
    path: 'phase-3-sentence-building/unit-11-connecting-ideas',
    reviewId: 'unit-11-connecting-ideas/review-and-test',
    lessonIds: [
      '01-and-but-or',
      '02-because-and-that',
      '03-when-and-while',
      '04-inna-and-sisters',
      '05-who-and-which',
    ],
  },
  {
    id: 'unit-12-describing-and-comparing',
    label: 'Unit 12',
    phase: 3,
    path: 'phase-3-sentence-building/unit-12-describing-and-comparing',
    reviewId: 'unit-12-describing-and-comparing/review-and-test',
    lessonIds: [
      '01-more-than-and-the-most',
      '02-describing-places',
      '03-verb-form-ii',
      '04-verb-form-iii-and-iv',
      '05-passive-sentences',
    ],
  },
  {
    id: 'unit-13-conversations',
    label: 'Unit 13',
    phase: 4,
    path: 'phase-4-spoken-fluency/unit-13-conversations',
    reviewId: 'unit-13-conversations/review-and-test',
    lessonIds: [
      '01-small-talk',
      '02-asking-for-help',
      '03-if-then',
      '04-i-think-and-i-believe',
      '05-phone-conversations',
    ],
  },
  {
    id: 'unit-14-work-and-society',
    label: 'Unit 14',
    phase: 4,
    path: 'phase-4-spoken-fluency/unit-14-work-and-society',
    reviewId: 'unit-14-work-and-society/review-and-test',
    lessonIds: [
      '01-jobs-and-workplace',
      '02-education-and-studying',
      '03-health-and-doctor',
      '04-news-and-current-events',
      '05-formal-emails',
    ],
  },
  {
    id: 'unit-15-listening-to-arabic',
    label: 'Unit 15',
    phase: 4,
    path: 'phase-4-spoken-fluency/unit-15-listening-to-arabic',
    reviewId: 'unit-15-listening-to-arabic/review-and-test',
    lessonIds: [
      '01-listening-strategies',
      '02-msa-vs-dialects',
      '03-news-broadcasts',
      '04-interviews-and-talks',
      '05-connected-speech',
    ],
  },
  {
    id: 'unit-16-bringing-it-together',
    label: 'Unit 16',
    phase: 4,
    path: 'phase-4-spoken-fluency/unit-16-bringing-it-together',
    reviewId: 'unit-16-bringing-it-together/review-and-test',
    lessonIds: [
      '01-feelings-and-emotions',
      '02-agreeing-and-disagreeing',
      '03-complex-stories',
      '04-cultural-conversations',
      '05-final-dialogue-challenge',
    ],
  },
];

export const COURSE_LEVELS = COURSE_UNITS.map((unit) => ({
  id: unit.id,
  label: unit.label,
  lessonIds: unit.lessonIds.map((slug) => `${unit.id}/${slug}`),
  reviewId: unit.reviewId,
}));

export const ALL_LESSON_IDS = COURSE_LEVELS.flatMap((level) => [
  ...level.lessonIds,
  level.reviewId,
]);

export const REVIEW_IDS = COURSE_LEVELS.map((l) => l.reviewId);
