import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.join(process.cwd(), 'content/notes');

const PHASES = [
  {
    slug: 'phase-1-getting-started',
    title: 'Phase 1: Getting Started',
    description:
      'Units 1 to 4 — script, first words, simple sentences, everyday basics',
    phase: 1,
    units: [
      {
        slug: 'unit-01-script-and-sounds',
        title: 'Unit 1: Script and Sounds',
        unit: 1,
        lessons: [
          {
            slug: '01-arabic-letters-review',
            title: 'Arabic Letters Review',
            skill: 'Letter recognition',
          },
          {
            slug: '02-vowel-marks-tashkeel',
            title: 'Vowel Marks and Tashkeel',
            skill: 'Reading with harakat',
          },
          {
            slug: '03-connected-letters',
            title: 'Connected Letters',
            skill: 'Joined letter forms',
          },
          {
            slug: '04-reading-short-words',
            title: 'Reading Short Words',
            skill: 'Simple word reading',
          },
          {
            slug: '05-listening-to-sounds',
            title: 'Listening to Arabic Sounds',
            skill: 'Sound distinction',
          },
        ],
      },
      {
        slug: 'unit-02-first-words',
        title: 'Unit 2: First Words',
        unit: 2,
        lessons: [
          {
            slug: '01-hello-and-goodbye',
            title: 'Hello and Goodbye',
            skill: 'Greetings',
          },
          {
            slug: '02-please-and-thank-you',
            title: 'Please and Thank You',
            skill: 'Politeness',
          },
          {
            slug: '03-yes-no-and-excuse-me',
            title: 'Yes, No, and Excuse Me',
            skill: 'Basic responses',
          },
          {
            slug: '04-my-name-is',
            title: 'My Name Is',
            skill: 'Self introduction',
          },
          {
            slug: '05-how-are-you',
            title: 'How Are You',
            skill: 'Greeting dialogue',
          },
        ],
      },
      {
        slug: 'unit-03-simple-sentences',
        title: 'Unit 3: Simple Sentences',
        unit: 3,
        lessons: [
          {
            slug: '01-i-you-he-she',
            title: 'I, You, He, She',
            skill: 'Personal pronouns',
          },
          {
            slug: '02-this-is-a-book',
            title: 'This Is a Book',
            skill: 'Nominal sentences',
          },
          {
            slug: '03-this-and-that',
            title: 'This and That',
            skill: 'Demonstratives',
          },
          { slug: '04-the-book', title: 'The Book', skill: 'Definite article' },
          {
            slug: '05-big-and-small',
            title: 'Big and Small',
            skill: 'Adjective agreement',
          },
        ],
      },
      {
        slug: 'unit-04-everyday-basics',
        title: 'Unit 4: Everyday Basics',
        unit: 4,
        lessons: [
          {
            slug: '01-numbers-1-to-10',
            title: 'Numbers 1 to 10',
            skill: 'Counting',
          },
          { slug: '02-saying-no', title: 'Saying No', skill: 'Negation' },
          {
            slug: '03-i-read-i-write',
            title: 'I Read, I Write',
            skill: 'Present tense',
          },
          {
            slug: '04-where-and-when',
            title: 'Where and When',
            skill: 'Question words',
          },
          {
            slug: '05-there-is-and-i-have',
            title: 'There Is and I Have',
            skill: 'كان and possession',
          },
        ],
      },
    ],
  },
  {
    slug: 'phase-2-everyday-arabic',
    title: 'Phase 2: Everyday Arabic',
    description: 'Units 5 to 8 — people, daily life, food, travel',
    phase: 2,
    units: [
      {
        slug: 'unit-05-people',
        title: 'Unit 5: People',
        unit: 5,
        lessons: [
          {
            slug: '01-family-members',
            title: 'Family Members',
            skill: 'Family vocabulary',
          },
          {
            slug: '02-my-your-his-her',
            title: 'My, Your, His, Her',
            skill: 'Possessive suffixes',
          },
          {
            slug: '03-describing-people',
            title: 'Describing People',
            skill: 'Appearance and character',
          },
          {
            slug: '04-the-students-book',
            title: "The Student's Book",
            skill: 'Idafa',
          },
          {
            slug: '05-plural-people',
            title: 'Plural People',
            skill: 'Plural patterns',
          },
        ],
      },
      {
        slug: 'unit-06-daily-life',
        title: 'Unit 6: Daily Life',
        unit: 6,
        lessons: [
          {
            slug: '01-morning-routine',
            title: 'Morning Routine',
            skill: 'Daily verbs',
          },
          {
            slug: '02-telling-time',
            title: 'Telling Time',
            skill: 'Time expressions',
          },
          {
            slug: '03-days-and-dates',
            title: 'Days and Dates',
            skill: 'Calendar vocabulary',
          },
          { slug: '04-at-home', title: 'At Home', skill: 'Home vocabulary' },
          {
            slug: '05-i-usually',
            title: 'I Usually',
            skill: 'Habitual present',
          },
        ],
      },
      {
        slug: 'unit-07-food-and-shopping',
        title: 'Unit 7: Food and Shopping',
        unit: 7,
        lessons: [
          {
            slug: '01-food-and-drink',
            title: 'Food and Drink',
            skill: 'Food vocabulary',
          },
          {
            slug: '02-at-the-restaurant',
            title: 'At the Restaurant',
            skill: 'Ordering food',
          },
          {
            slug: '03-at-the-market',
            title: 'At the Market',
            skill: 'Shopping',
          },
          {
            slug: '04-i-like-and-i-want',
            title: 'I Like and I Want',
            skill: 'Likes and wants',
          },
          {
            slug: '05-counting-and-paying',
            title: 'Counting and Paying',
            skill: 'Numbers and money',
          },
        ],
      },
      {
        slug: 'unit-08-travel-and-places',
        title: 'Unit 8: Travel and Places',
        unit: 8,
        lessons: [
          {
            slug: '01-countries-and-cities',
            title: 'Countries and Cities',
            skill: 'Places',
          },
          { slug: '02-directions', title: 'Directions', skill: 'Prepositions' },
          {
            slug: '03-transportation',
            title: 'Transportation',
            skill: 'Travel vocabulary',
          },
          {
            slug: '04-weather',
            title: 'Weather',
            skill: 'Weather expressions',
          },
          {
            slug: '05-at-the-hotel',
            title: 'At the Hotel',
            skill: 'Hotel dialogue',
          },
        ],
      },
    ],
  },
  {
    slug: 'phase-3-sentence-building',
    title: 'Phase 3: Sentence Building',
    description:
      'Units 9 to 12 — past tense, future, connecting ideas, describing',
    phase: 3,
    units: [
      {
        slug: 'unit-09-past-tense',
        title: 'Unit 9: Past Tense',
        unit: 9,
        lessons: [
          {
            slug: '01-i-went-i-said',
            title: 'I Went, I Said',
            skill: 'Past tense singular',
          },
          {
            slug: '02-we-they-did',
            title: 'We, They Did',
            skill: 'Past tense plural',
          },
          {
            slug: '03-yesterday-last-week',
            title: 'Yesterday, Last Week',
            skill: 'Past time expressions',
          },
          { slug: '04-i-saw-it', title: 'I Saw It', skill: 'Object pronouns' },
          {
            slug: '05-telling-a-short-story',
            title: 'Telling a Short Story',
            skill: 'Past narrative',
          },
        ],
      },
      {
        slug: 'unit-10-future-and-plans',
        title: 'Unit 10: Future and Plans',
        unit: 10,
        lessons: [
          { slug: '01-i-will-go', title: 'I Will Go', skill: 'Future tense' },
          {
            slug: '02-making-appointments',
            title: 'Making Appointments',
            skill: 'Scheduling',
          },
          { slug: '03-i-want-to', title: 'I Want To', skill: 'Want plus verb' },
          {
            slug: '04-commands-and-requests',
            title: 'Commands and Requests',
            skill: 'Imperative',
          },
          {
            slug: '05-plans-with-friends',
            title: 'Plans with Friends',
            skill: 'Future dialogue',
          },
        ],
      },
      {
        slug: 'unit-11-connecting-ideas',
        title: 'Unit 11: Connecting Ideas',
        unit: 11,
        lessons: [
          {
            slug: '01-and-but-or',
            title: 'And, But, Or',
            skill: 'Coordinating conjunctions',
          },
          {
            slug: '02-because-and-that',
            title: 'Because and That',
            skill: 'Subordination',
          },
          {
            slug: '03-when-and-while',
            title: 'When and While',
            skill: 'Time clauses',
          },
          {
            slug: '04-inna-and-sisters',
            title: 'Inna and Her Sisters',
            skill: 'Sentence openers',
          },
          {
            slug: '05-who-and-which',
            title: 'Who and Which',
            skill: 'Relative clauses',
          },
        ],
      },
      {
        slug: 'unit-12-describing-and-comparing',
        title: 'Unit 12: Describing and Comparing',
        unit: 12,
        lessons: [
          {
            slug: '01-more-than-and-the-most',
            title: 'More Than and The Most',
            skill: 'Comparatives',
          },
          {
            slug: '02-describing-places',
            title: 'Describing Places',
            skill: 'Place descriptions',
          },
          {
            slug: '03-verb-form-ii',
            title: 'Verb Form II',
            skill: 'Form II verbs',
          },
          {
            slug: '04-verb-form-iii-and-iv',
            title: 'Verb Forms III and IV',
            skill: 'Forms III and IV',
          },
          {
            slug: '05-passive-sentences',
            title: 'Passive Sentences',
            skill: 'Passive voice',
          },
        ],
      },
    ],
  },
  {
    slug: 'phase-4-spoken-fluency',
    title: 'Phase 4: Spoken Fluency',
    description:
      'Units 13 to 16 — conversations, work, listening, consolidation',
    phase: 4,
    units: [
      {
        slug: 'unit-13-conversations',
        title: 'Unit 13: Conversations',
        unit: 13,
        lessons: [
          {
            slug: '01-small-talk',
            title: 'Small Talk',
            skill: 'Conversation openers',
          },
          {
            slug: '02-asking-for-help',
            title: 'Asking for Help',
            skill: 'Requests',
          },
          { slug: '03-if-then', title: 'If Then', skill: 'Conditionals' },
          {
            slug: '04-i-think-and-i-believe',
            title: 'I Think and I Believe',
            skill: 'Opinions',
          },
          {
            slug: '05-phone-conversations',
            title: 'Phone Conversations',
            skill: 'Phone phrases',
          },
        ],
      },
      {
        slug: 'unit-14-work-and-society',
        title: 'Unit 14: Work and Society',
        unit: 14,
        lessons: [
          {
            slug: '01-jobs-and-workplace',
            title: 'Jobs and Workplace',
            skill: 'Work vocabulary',
          },
          {
            slug: '02-education-and-studying',
            title: 'Education and Studying',
            skill: 'School vocabulary',
          },
          {
            slug: '03-health-and-doctor',
            title: 'Health and Doctor',
            skill: 'Health vocabulary',
          },
          {
            slug: '04-news-and-current-events',
            title: 'News and Current Events',
            skill: 'Media vocabulary',
          },
          {
            slug: '05-formal-emails',
            title: 'Formal Emails',
            skill: 'Formal writing',
          },
        ],
      },
      {
        slug: 'unit-15-listening-to-arabic',
        title: 'Unit 15: Listening to Arabic',
        unit: 15,
        lessons: [
          {
            slug: '01-listening-strategies',
            title: 'Listening Strategies',
            skill: 'MSA listening',
          },
          {
            slug: '02-msa-vs-dialects',
            title: 'MSA vs Dialects',
            skill: 'Dialect awareness',
          },
          {
            slug: '03-news-broadcasts',
            title: 'News Broadcasts',
            skill: 'News Arabic',
          },
          {
            slug: '04-interviews-and-talks',
            title: 'Interviews and Talks',
            skill: 'Interview patterns',
          },
          {
            slug: '05-connected-speech',
            title: 'Connected Speech',
            skill: 'Fast speech',
          },
        ],
      },
      {
        slug: 'unit-16-bringing-it-together',
        title: 'Unit 16: Bringing It Together',
        unit: 16,
        lessons: [
          {
            slug: '01-feelings-and-emotions',
            title: 'Feelings and Emotions',
            skill: 'Emotional vocabulary',
          },
          {
            slug: '02-agreeing-and-disagreeing',
            title: 'Agreeing and Disagreeing',
            skill: 'Debate phrases',
          },
          {
            slug: '03-complex-stories',
            title: 'Complex Stories',
            skill: 'Narrative mastery',
          },
          {
            slug: '04-cultural-conversations',
            title: 'Cultural Conversations',
            skill: 'Culture topics',
          },
          {
            slug: '05-final-dialogue-challenge',
            title: 'Final Dialogue Challenge',
            skill: 'Mixed skills',
          },
        ],
      },
    ],
  },
];

const PRONUNCIATION = [
  {
    slug: '01-emphatic-and-pharyngeal-consonants',
    title: 'Emphatic and Pharyngeal Consonants',
  },
  {
    slug: '02-vowel-length-and-hamza',
    title: 'Short vs Long Vowels and Hamza',
  },
  { slug: '03-sun-and-moon-letters', title: 'Sun and Moon Letters' },
  { slug: '04-word-stress', title: 'Word Stress Patterns' },
  { slug: '05-connected-speech', title: 'Connected Speech in Natural MSA' },
  { slug: '06-msa-vs-dialect-pronunciation', title: 'MSA vs Spoken Dialects' },
];

const GRAMMAR = [
  { slug: '01-personal-pronouns', title: 'Personal Pronouns' },
  { slug: '02-nominal-sentence', title: 'The Nominal Sentence' },
  { slug: '03-demonstratives', title: 'Demonstratives' },
  { slug: '04-definite-article', title: 'The Definite Article' },
  { slug: '05-gender-and-agreement', title: 'Gender and Adjective Agreement' },
  { slug: '06-prepositions', title: 'Core Prepositions' },
  { slug: '07-verb-kana', title: 'The Verb كان / يكون' },
  { slug: '08-present-tense-form-i', title: 'Present Tense Form I' },
  { slug: '09-negation', title: 'Negation' },
  { slug: '10-possessive-suffixes', title: 'Possessive Suffixes' },
  { slug: '11-idafa', title: 'Idafa (Construct State)' },
  { slug: '12-plural-patterns', title: 'Plural Patterns' },
  { slug: '13-past-tense-form-i', title: 'Past Tense Form I' },
  { slug: '14-object-pronouns', title: 'Object Pronouns on Verbs' },
  { slug: '15-future-markers', title: 'Future with س and سوف' },
  { slug: '16-imperative', title: 'Imperative Forms' },
  { slug: '17-ann-and-sisters', title: 'Subordinate Clauses with أن' },
  { slug: '18-inna-and-sisters', title: 'Inna and Her Sisters' },
  { slug: '19-form-ii-iii', title: 'Verb Forms II and III' },
  { slug: '20-form-iv', title: 'Verb Form IV' },
  { slug: '21-passive-voice', title: 'Passive Voice' },
  { slug: '22-relative-clauses', title: 'Relative Clauses' },
  { slug: '23-hollow-defective-verbs', title: 'Hollow and Defective Verbs' },
  { slug: '24-subjunctive-jussive', title: 'Subjunctive and Jussive Moods' },
  {
    slug: '25-comparatives-superlatives',
    title: 'Comparatives and Superlatives',
  },
  { slug: '26-conditional', title: 'Conditionals' },
  { slug: '27-masdar', title: 'Verbal Nouns (Masdar)' },
  { slug: '28-numbers-and-agreement', title: 'Numbers and Agreement Rules' },
  { slug: '29-coordinated-sentences', title: 'Coordinating Conjunctions' },
  { slug: '30-complex-sentences', title: 'Complex Multi Clause Sentences' },
];

async function writeJson(filePath, data) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`);
}

async function writeMdx(filePath, content) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, content);
}

function lessonStub({
  title,
  description,
  phase,
  unit,
  lesson,
  skill,
  unitTitle,
  phaseSlug,
  unitSlug,
}) {
  const lessonNum = lesson ?? '';
  return `---
title: '${title.replace(/'/g, "''")}'
description: '${description.replace(/'/g, "''")}'
phase: ${phase}
unit: ${unit}${lessonNum ? `\nlesson: ${lessonNum}` : ''}${skill ? `\nskill: '${skill.replace(/'/g, "''")}'` : ''}
---

<Callout title="Coming soon" type="info">
  This lesson is part of **${unitTitle}**. Full content will be added soon.
</Callout>

<P>
  Follow lessons in order within each unit. Return to the [course home](/notes) or open the [RTL component test](/notes/rtl-component-test) to preview Arabic layout components.
</P>
`;
}

function reviewStub({ unitTitle, phase, unit, phaseSlug, unitSlug }) {
  return `---
title: '${unitTitle} — Unit Checkpoint'
description: 'Review and test for ${unitTitle}'
phase: ${phase}
unit: ${unit}
---

<Callout title="Checkpoint coming soon" type="info">
  The full unit review and test for **${unitTitle}** will be added when lesson content is complete.
</Callout>
`;
}

function phaseIndexStub(phase) {
  const unitLinks = phase.units
    .map(
      (u) =>
        `- [${u.title}](/notes/${phase.slug}/${u.slug}/${u.lessons[0].slug})`
    )
    .join('\n');

  return `---
title: '${phase.title}'
description: '${phase.description}'
phase: ${phase.phase}
---

## ${phase.title}

${phase.description}

### Units in this phase

${unitLinks}
`;
}

function trackIndexStub(title, description, items, basePath) {
  const links = items
    .map((item) => `- [${item.title}](/notes/${basePath}/${item.slug})`)
    .join('\n');

  return `---
title: '${title}'
description: '${description}'
---

## ${title}

${description}

### Topics

${links}
`;
}

async function main() {
  const rootPages = ['index', 'rtl-component-test'];

  for (const phase of PHASES) {
    rootPages.push(phase.slug);

    const phaseDir = path.join(ROOT, phase.slug);
    await writeJson(path.join(phaseDir, 'meta.json'), {
      title: phase.title,
      description: phase.description,
      root: true,
      pages: ['index', ...phase.units.map((u) => u.slug)],
    });

    await writeMdx(path.join(phaseDir, 'index.mdx'), phaseIndexStub(phase));

    for (const unit of phase.units) {
      const unitDir = path.join(phaseDir, unit.slug);
      const lessonSlugs = unit.lessons.map((l) => l.slug);
      lessonSlugs.push('review-and-test');

      await writeJson(path.join(unitDir, 'meta.json'), {
        title: unit.title,
        pages: lessonSlugs,
      });

      for (let i = 0; i < unit.lessons.length; i++) {
        const lesson = unit.lessons[i];
        await writeMdx(
          path.join(unitDir, `${lesson.slug}.mdx`),
          lessonStub({
            title: lesson.title,
            description: lesson.skill,
            phase: phase.phase,
            unit: unit.unit,
            lesson: i + 1,
            skill: lesson.skill,
            unitTitle: unit.title,
            phaseSlug: phase.slug,
            unitSlug: unit.slug,
          })
        );
      }

      await writeMdx(
        path.join(unitDir, 'review-and-test.mdx'),
        reviewStub({
          unitTitle: unit.title,
          phase: phase.phase,
          unit: unit.unit,
          phaseSlug: phase.slug,
          unitSlug: unit.slug,
        })
      );
    }
  }

  rootPages.push('pronunciation', 'grammar');

  await writeJson(path.join(ROOT, 'meta.json'), {
    title: 'Arabyy',
    description: 'Learn Modern Standard Arabic step by step',
    root: true,
    pagesIndex: 'index',
    pages: rootPages,
  });

  const pronunciationDir = path.join(ROOT, 'pronunciation');
  await writeJson(path.join(pronunciationDir, 'meta.json'), {
    title: 'Pronunciation',
    description: 'Arabic sounds, stress, and listening',
    root: true,
    pages: ['index', ...PRONUNCIATION.map((p) => p.slug)],
  });
  await writeMdx(
    path.join(pronunciationDir, 'index.mdx'),
    trackIndexStub(
      'Pronunciation Track',
      'Standalone pronunciation lessons for MSA and listening comprehension.',
      PRONUNCIATION,
      'pronunciation'
    )
  );
  for (const item of PRONUNCIATION) {
    await writeMdx(
      path.join(pronunciationDir, `${item.slug}.mdx`),
      lessonStub({
        title: item.title,
        description: item.title,
        phase: 0,
        unit: 0,
        unitTitle: 'Pronunciation Track',
      })
    );
  }

  const grammarDir = path.join(ROOT, 'grammar');
  await writeJson(path.join(grammarDir, 'meta.json'), {
    title: 'Grammar',
    description: 'Optional grammar reference deep dives',
    root: true,
    pages: ['index', ...GRAMMAR.map((g) => g.slug)],
  });
  await writeMdx(
    path.join(grammarDir, 'index.mdx'),
    trackIndexStub(
      'Grammar Track',
      'Optional reference pages with full grammar rules, tables, and extra examples.',
      GRAMMAR,
      'grammar'
    )
  );
  for (const item of GRAMMAR) {
    await writeMdx(
      path.join(grammarDir, `${item.slug}.mdx`),
      lessonStub({
        title: item.title,
        description: item.title,
        phase: 0,
        unit: 0,
        unitTitle: 'Grammar Track',
      })
    );
  }

  console.log('Scaffolded Arabyy content under content/notes/');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
