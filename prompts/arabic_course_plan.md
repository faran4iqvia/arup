# Arabic Fusha Course Plan (Duolingo Style, Foundation through B1)

Reference document for the full **Arabyy** Modern Standard Arabic (Fusha) curriculum. Use this alongside `arabic_course_master_prompt_v2.md` when generating lesson content.

**Status:** Draft plan v2. Awaiting learner confirmation before any lesson files are generated.

**Vocabulary targets:** Unit 1 to 4: 350 | Unit 5 to 8: 650 (1,000 total) | Unit 9 to 12: 1,000 (2,000 total) | Unit 13 to 16: 1,000 (3,000 total)

**Course focus:** Sentence building, spoken Arabic comprehension, and high frequency vocabulary. No Quranic or Hadith content in this course.

---

## Learner Profile

- Native language: English
- Target language: Modern Standard Arabic (Fusha), the standard for news, formal speech, and educated conversation
- Prior exposure: can read Arabic script; recognizes some words; cannot yet build sentences confidently
- Target level: B1 in MSA sentence building, everyday conversation, and spoken Arabic comprehension
- Study rhythm: daily or near daily, one lesson at a time
- Primary goals:
  1. Build Arabic sentences step by step, from two word phrases to full connected speech
  2. Grow practical vocabulary in themed units (people, food, travel, work)
  3. Understand spoken Arabic (MSA news, talks, formal conversation) and bridge toward everyday dialects
- Learning style: short, focused lessons that stack skills like Duolingo, with written explanations, drills, and dialogues

---

## Duolingo Style Design Principles

This course mirrors how Duolingo builds Arabic, adapted for long form Fumadocs lessons:

| Duolingo pattern                         | How Arabyy implements it                                                     |
| ---------------------------------------- | ---------------------------------------------------------------------------- |
| **Units** (themed skill groups)          | 16 units across 4 phases, each with a clear theme                            |
| **Short lessons** (one skill per lesson) | ~5 lessons per unit, each teaching one pattern or topic                      |
| **Stacking** (new builds on old)         | Every lesson opens with a Warm Up recall from prior lessons                  |
| **Spiral review**                        | Exercises pull vocabulary and grammar from 2 to 3 units back                 |
| **Unit checkpoint**                      | `review-and-test.mdx` at the end of every unit                               |
| **Themed vocabulary**                    | Words introduced in context (food unit teaches food words, not random lists) |
| **Sentence first**                       | Learner produces Arabic sentences early, not just vocabulary flashcards      |

**Lesson size target:** 25 to 35 minutes per lesson. Smaller and more focused than the Dutchyy lessons.

---

## What Makes This Course Different from Dutchyy

| Aspect         | Dutchyy                      | Arabyy                                                |
| -------------- | ---------------------------- | ----------------------------------------------------- |
| Structure      | CEFR levels (A0, A1, A2, B1) | **16 themed units** grouped in 4 phases               |
| Lesson shape   | Long comprehensive chapters  | **Short skill based lessons** with warm up and drills |
| Starting point | True beginner                | Can read script; starts from first words and sounds   |
| End goal       | Daily life fluency           | **Sentence building + spoken Arabic + vocabulary**    |
| Extra tracks   | Pronunciation, Grammar       | Pronunciation, Grammar (reference only)               |
| RTL handling   | Not needed                   | Strict isolated RTL components (see master prompt)    |

---

## Technical Prerequisites (Build Before Content)

These must exist and be tested **before** generating lesson MDX.

| Priority | Component / rule                                                    | Purpose                                 |
| -------- | ------------------------------------------------------------------- | --------------------------------------- |
| P0       | Export `ArabicBase`, `ArabicMd`, `ArabicLg` in `components/mdx.tsx` | Inline Arabic without flipping the page |
| P0       | `BilingualBlock` component                                          | Arabic line (RTL) + English line (LTR)  |
| P0       | Table cell wrapper pattern                                          | Vocabulary tables with safe RTL cells   |
| P0       | `TranslationBlock` component                                        | English below Arabic dialogue lines     |
| P1       | `DialogueBlock` component                                           | Two speaker conversations               |
| P1       | `Transliteration` inline component                                  | Latin phonetics, always LTR             |
| P1       | Master prompt RTL rules enforced in every file                      | No bare Arabic in markdown paragraphs   |
| P2       | Lesson page stays LTR; sidebar titles in English                    | Navigation never mirrors                |

**Golden rule:** The page, sidebar, headings, exercises, and explanations stay **LTR English**. Only Arabic script lives inside designated RTL wrappers.

---

## File Structure

```
content/notes/
  meta.json
  phase-1-getting-started/
    meta.json
    unit-01-script-and-sounds/
      01-arabic-letters-review.mdx
      ...
      review-and-test.mdx
    unit-02-first-words/
      ...
    unit-03-simple-sentences/
      ...
    unit-04-everyday-basics/
      ...
  phase-2-everyday-arabic/
    meta.json
    unit-05-people/
    unit-06-daily-life/
    unit-07-food-and-shopping/
    unit-08-travel-and-places/
  phase-3-sentence-building/
    meta.json
    unit-09-past-tense/
    unit-10-future-and-plans/
    unit-11-connecting-ideas/
    unit-12-describing-and-comparing/
  phase-4-spoken-fluency/
    meta.json
    unit-13-conversations/
    unit-14-work-and-society/
    unit-15-listening-to-arabic/
    unit-16-bringing-it-together/
  pronunciation/
    meta.json
    01-emphatic-and-pharyngeal-consonants.mdx
    ...
  grammar/
    meta.json
    01-personal-pronouns.mdx
    ...
```

Each unit folder has its own `meta.json`. Lesson slugs are lowercase with hyphens. All frontmatter titles and descriptions are in **English**.

---

## Three Content Tracks

| Track             | Purpose                                                             | Cross reference in main lessons |
| ----------------- | ------------------------------------------------------------------- | ------------------------------- |
| **Main lessons**  | Unit based skill lessons: vocabulary, one pattern, drills, dialogue | Primary path (follow in order)  |
| **Pronunciation** | Sounds, stress, connected speech, MSA vs dialect when listening     | `Pronunciation Focus` callout   |
| **Grammar**       | Optional deep dive reference (learner visits when needed)           | `Grammar Focus` callout         |

Main lessons teach one skill at a time. Grammar files provide the full rule set for review, not duplication in every lesson.

---

## Pronunciation Track

| #   | File                                    | Title                                 | Study alongside  |
| --- | --------------------------------------- | ------------------------------------- | ---------------- |
| 1   | `01-emphatic-and-pharyngeal-consonants` | Emphatic and Pharyngeal Consonants    | Unit 1 Lesson 2  |
| 2   | `02-vowel-length-and-hamza`             | Short vs Long Vowels and Hamza        | Unit 1 Lesson 3  |
| 3   | `03-sun-and-moon-letters`               | Sun Letters, Moon Letters, and ال     | Unit 3 Lesson 2  |
| 4   | `04-word-stress`                        | Word Stress Patterns                  | Unit 4 Lesson 3  |
| 5   | `05-connected-speech`                   | Connected Speech in Natural MSA       | Unit 13 Lesson 1 |
| 6   | `06-msa-vs-dialect-pronunciation`       | MSA vs Spoken Dialects When Listening | Unit 15 Lesson 2 |

---

## Grammar Track (Reference)

Numbered reference files. Main lessons introduce patterns in context; these files hold full tables and extra examples.

| #   | File                           | Title                          | First introduced |
| --- | ------------------------------ | ------------------------------ | ---------------- |
| 1   | `01-personal-pronouns`         | Personal Pronouns              | Unit 3 Lesson 1  |
| 2   | `02-nominal-sentence`          | The Nominal Sentence           | Unit 3 Lesson 2  |
| 3   | `03-demonstratives`            | Demonstratives: هذا, هذه, ذلك  | Unit 3 Lesson 3  |
| 4   | `04-definite-article`          | The Definite Article ال        | Unit 3 Lesson 4  |
| 5   | `05-gender-and-agreement`      | Gender and Adjective Agreement | Unit 3 Lesson 5  |
| 6   | `06-prepositions`              | Core Prepositions              | Unit 4 Lesson 4  |
| 7   | `07-verb-kana`                 | The Verb كان / يكون            | Unit 4 Lesson 5  |
| 8   | `08-present-tense-form-i`      | Present Tense: Form I          | Unit 4 Lesson 3  |
| 9   | `09-negation`                  | Negation: لا, ليس, لم          | Unit 4 Lesson 2  |
| 10  | `10-possessive-suffixes`       | Possessive Suffixes            | Unit 5 Lesson 2  |
| 11  | `11-idafa`                     | Idafa (Construct State)        | Unit 5 Lesson 4  |
| 12  | `12-plural-patterns`           | Plural Patterns                | Unit 5 Lesson 5  |
| 13  | `13-past-tense-form-i`         | Past Tense: Form I             | Unit 9 Lesson 1  |
| 14  | `14-object-pronouns`           | Object Pronouns on Verbs       | Unit 9 Lesson 4  |
| 15  | `15-future-markers`            | Future with س and سوف          | Unit 10 Lesson 1 |
| 16  | `16-imperative`                | Imperative Forms               | Unit 10 Lesson 4 |
| 17  | `17-ann-and-sisters`           | Subordinate Clauses with أن    | Unit 11 Lesson 2 |
| 18  | `18-inna-and-sisters`          | Inna and Her Sisters           | Unit 11 Lesson 4 |
| 19  | `19-form-ii-iii`               | Verb Forms II and III          | Unit 12 Lesson 3 |
| 20  | `20-form-iv`                   | Verb Form IV                   | Unit 12 Lesson 4 |
| 21  | `21-passive-voice`             | Passive Voice                  | Unit 12 Lesson 5 |
| 22  | `22-relative-clauses`          | Relative Clauses: الذي, التي   | Unit 11 Lesson 5 |
| 23  | `23-hollow-defective-verbs`    | Hollow and Defective Verbs     | Unit 9 Lesson 5  |
| 24  | `24-subjunctive-jussive`       | Subjunctive and Jussive Moods  | Unit 11 Lesson 3 |
| 25  | `25-comparatives-superlatives` | Comparatives and Superlatives  | Unit 12 Lesson 2 |
| 26  | `26-conditional`               | Conditionals: إذا and لو       | Unit 13 Lesson 3 |
| 27  | `27-masdar`                    | Verbal Nouns (Masdar)          | Unit 14 Lesson 2 |
| 28  | `28-numbers-and-agreement`     | Numbers and Agreement Rules    | Unit 6 Lesson 3  |
| 29  | `29-coordinated-sentences`     | Coordinating Conjunctions      | Unit 11 Lesson 1 |
| 30  | `30-complex-sentences`         | Complex Multi Clause Sentences | Unit 16 Lesson 3 |

**Grammar track total:** 30 reference files

---

## Phase 1: Getting Started

Goal: Read Arabic comfortably, say first phrases, build simple two and three word sentences.

---

### Unit 1: Script and Sounds (~40 words, 5 lessons)

| #   | Slug                       | Skill Focus                            | What you can say do after   |
| --- | -------------------------- | -------------------------------------- | --------------------------- |
| 1   | `01-arabic-letters-review` | Recognize all 28 letters               | Read isolated letters       |
| 2   | `02-vowel-marks-tashkeel`  | Fatha, kasra, damma, sukun, shadda     | Read words with full vowels |
| 3   | `03-connected-letters`     | Letters in initial, medial, final form | Read joined words           |
| 4   | `04-reading-short-words`   | Common two and three letter words      | Read simple words aloud     |
| 5   | `05-listening-to-sounds`   | Hear and distinguish key Arabic sounds | Tell similar sounds apart   |
| —   | `review-and-test`          | **Unit 1 Checkpoint**                  | Read short voweled words    |

---

### Unit 2: First Words (~60 words, 5 lessons)

| #   | Slug                      | Skill Focus                          | What you can say do after    |
| --- | ------------------------- | ------------------------------------ | ---------------------------- |
| 1   | `01-hello-and-goodbye`    | Greetings: السلام, مرحبا, مع السلامة | Greet someone                |
| 2   | `02-please-and-thank-you` | Politeness: من فضلك, شكرا, عفوا      | Be polite in Arabic          |
| 3   | `03-yes-no-and-excuse-me` | Yes, no, excuse me                   | Answer simple questions      |
| 4   | `04-my-name-is`           | Introduce yourself: اسمي, أنا من     | Say your name and country    |
| 5   | `05-how-are-you`          | Ask and answer: كيف حالك, بخير       | Exchange a greeting dialogue |
| —   | `review-and-test`         | **Unit 2 Checkpoint**                | Introduce yourself fully     |

---

### Unit 3: Simple Sentences (~80 words, 5 lessons)

| #   | Slug                | Skill Focus                              | What you can say do after    |
| --- | ------------------- | ---------------------------------------- | ---------------------------- |
| 1   | `01-i-you-he-she`   | Personal pronouns                        | Use أنا, أنت, هو, هي         |
| 2   | `02-this-is-a-book` | Nominal sentences without a verb         | Say "this is a…"             |
| 3   | `03-this-and-that`  | Demonstratives: هذا, هذه, ذلك            | Point to near and far things |
| 4   | `04-the-book`       | Definite article ال and sun/moon letters | Use ال correctly             |
| 5   | `05-big-and-small`  | Adjective agreement (gender)             | Describe things simply       |
| —   | `review-and-test`   | **Unit 3 Checkpoint**                    | Build 5 word descriptions    |

---

### Unit 4: Everyday Basics (~170 words, 5 lessons)

| #   | Slug                     | Skill Focus                         | What you can say do after   |
| --- | ------------------------ | ----------------------------------- | --------------------------- |
| 1   | `01-numbers-1-to-10`     | Count from 1 to 10                  | Use numbers with nouns      |
| 2   | `02-saying-no`           | Negation with لا and ليس            | Make negative sentences     |
| 3   | `03-i-read-i-write`      | Present tense Form I (first person) | Say what you do daily       |
| 4   | `04-where-and-when`      | Question words: أين, متى, ماذا, من  | Ask basic questions         |
| 5   | `05-there-is-and-i-have` | كان / يكون and possession basics    | Say "there is" and "I have" |
| —   | `review-and-test`        | **Unit 4 Checkpoint**               | Ask and answer 10 questions |

**Phase 1 total:** 20 lessons + 4 unit checkpoints | **Cumulative vocabulary:** ~350 words

---

## Phase 2: Everyday Arabic

Goal: Talk about people, daily routines, food, and travel using full present tense and core vocabulary.

---

### Unit 5: People (~120 words, 5 lessons)

| #   | Slug                   | Skill Focus                          | What you can say do after         |
| --- | ---------------------- | ------------------------------------ | --------------------------------- |
| 1   | `01-family-members`    | Family vocabulary                    | Name family members               |
| 2   | `02-my-your-his-her`   | Possessive suffixes                  | Say "my father", "her book"       |
| 3   | `03-describing-people` | Appearance and character adjectives  | Describe a person                 |
| 4   | `04-the-students-book` | Idafa (construct state)              | Express "the book of the student" |
| 5   | `05-plural-people`     | Sound masculine and feminine plurals | Talk about groups of people       |
| —   | `review-and-test`      | **Unit 5 Checkpoint**                | Describe your family              |

---

### Unit 6: Daily Life (~130 words, 5 lessons)

| #   | Slug                 | Skill Focus                                | What you can say do after    |
| --- | -------------------- | ------------------------------------------ | ---------------------------- |
| 1   | `01-morning-routine` | Daily routine verbs (present tense)        | Describe your morning        |
| 2   | `02-telling-time`    | Time expressions: الساعة, صباحا, مساء      | Say what time it is          |
| 3   | `03-days-and-dates`  | Days of the week, months, numbers 11 to 20 | Set a date                   |
| 4   | `04-at-home`         | Rooms and furniture                        | Describe your home           |
| 5   | `05-i-usually`       | Habitual present tense in context          | Describe a typical day       |
| —   | `review-and-test`    | **Unit 6 Checkpoint**                      | Describe your daily schedule |

---

### Unit 7: Food and Shopping (~150 words, 5 lessons)

| #   | Slug                     | Skill Focus                    | What you can say do after    |
| --- | ------------------------ | ------------------------------ | ---------------------------- |
| 1   | `01-food-and-drink`      | Common food vocabulary         | Name foods and drinks        |
| 2   | `02-at-the-restaurant`   | Ordering: أريد, من فضلك        | Order a meal                 |
| 3   | `03-at-the-market`       | Shopping vocabulary and prices | Ask how much something costs |
| 4   | `04-i-like-and-i-want`   | Express likes: أحب, أريد       | Say what you like            |
| 5   | `05-counting-and-paying` | Numbers 21 to 100, paying      | Handle money and quantities  |
| —   | `review-and-test`        | **Unit 7 Checkpoint**          | Order food and pay           |

---

### Unit 8: Travel and Places (~150 words, 5 lessons)

| #   | Slug                      | Skill Focus                           | What you can say do after   |
| --- | ------------------------- | ------------------------------------- | --------------------------- |
| 1   | `01-countries-and-cities` | Places and nationalities              | Say where you are from      |
| 2   | `02-directions`           | Prepositions: في, على, إلى, من        | Give simple directions      |
| 3   | `03-transportation`       | Travel vocabulary: airport, taxi, bus | Talk about travel           |
| 4   | `04-weather`              | Weather expressions                   | Describe the weather        |
| 5   | `05-at-the-hotel`         | Hotel check in dialogue               | Handle a hotel conversation |
| —   | `review-and-test`         | **Unit 8 Checkpoint**                 | Navigate travel situations  |

**Phase 2 total:** 20 lessons + 4 unit checkpoints | **Cumulative vocabulary:** ~1,000 words

---

## Phase 3: Sentence Building

Goal: Move beyond present tense. Tell stories, make plans, connect ideas, and describe in depth.

---

### Unit 9: Past Tense (~130 words, 5 lessons)

| #   | Slug                       | Skill Focus                             | What you can say do after         |
| --- | -------------------------- | --------------------------------------- | --------------------------------- |
| 1   | `01-i-went-i-said`         | Past tense Form I (singular)            | Talk about what you did yesterday |
| 2   | `02-we-they-did`           | Past tense (plural forms)               | Talk about what a group did       |
| 3   | `03-yesterday-last-week`   | Time expressions for past               | Anchor events in time             |
| 4   | `04-i-saw-it`              | Object pronouns on past verbs           | Say "I saw him/her/it"            |
| 5   | `05-telling-a-short-story` | Past tense narrative (3 to 5 sentences) | Tell a short personal story       |
| —   | `review-and-test`          | **Unit 9 Checkpoint**                   | Narrate your last weekend         |

---

### Unit 10: Future and Plans (~120 words, 5 lessons)

| #   | Slug                       | Skill Focus                     | What you can say do after |
| --- | -------------------------- | ------------------------------- | ------------------------- |
| 1   | `01-i-will-go`             | Future with س and سوف           | Talk about future plans   |
| 2   | `02-making-appointments`   | Scheduling: غدا, الأسبوع القادم | Set a meeting time        |
| 3   | `03-i-want-to`             | Want + أن + verb                | Express intentions        |
| 4   | `04-commands-and-requests` | Imperative forms                | Make polite requests      |
| 5   | `05-plans-with-friends`    | Future dialogue practice        | Plan an outing in Arabic  |
| —   | `review-and-test`          | **Unit 10 Checkpoint**          | Discuss next week plans   |

---

### Unit 11: Connecting Ideas (~130 words, 5 lessons)

| #   | Slug                  | Skill Focus                           | What you can say do after    |
| --- | --------------------- | ------------------------------------- | ---------------------------- |
| 1   | `01-and-but-or`       | Coordinating conjunctions: و, لكن, أو | Link two simple sentences    |
| 2   | `02-because-and-that` | Subordination with لأن and أن         | Give reasons                 |
| 3   | `03-when-and-while`   | Time clauses: عندما, بينما            | Describe simultaneous events |
| 4   | `04-inna-and-sisters` | Sentence openers: إن, لكن             | Emphasize and contrast       |
| 5   | `05-who-and-which`    | Relative clauses: الذي, التي          | Describe people and things   |
| —   | `review-and-test`     | **Unit 11 Checkpoint**                | Write a 6 sentence paragraph |

---

### Unit 12: Describing and Comparing (~120 words, 5 lessons)

| #   | Slug                        | Skill Focus                   | What you can say do after      |
| --- | --------------------------- | ----------------------------- | ------------------------------ |
| 1   | `01-more-than-and-the-most` | Comparatives and superlatives | Compare two things             |
| 2   | `02-describing-places`      | City, countryside, landmarks  | Describe a city                |
| 3   | `03-verb-form-ii`           | Form II verbs in context      | Use common Form II verbs       |
| 4   | `04-verb-form-iii-and-iv`   | Forms III and IV in context   | Use shared and sent verbs      |
| 5   | `05-passive-sentences`      | Passive voice basics          | Understand "it was written"    |
| —   | `review-and-test`           | **Unit 12 Checkpoint**        | Compare places and experiences |

**Phase 3 total:** 20 lessons + 4 unit checkpoints | **Cumulative vocabulary:** ~2,000 words

---

## Phase 4: Spoken Fluency

Goal: Hold conversations, express opinions, follow spoken Arabic, and use everything learned together.

---

### Unit 13: Conversations (~130 words, 5 lessons)

| #   | Slug                       | Skill Focus                     | What you can say do after    |
| --- | -------------------------- | ------------------------------- | ---------------------------- |
| 1   | `01-small-talk`            | Casual MSA conversation openers | Start a conversation         |
| 2   | `02-asking-for-help`       | Requests and problem solving    | Ask for help politely        |
| 3   | `03-if-then`               | Real conditionals with إذا      | Talk about real conditions   |
| 4   | `04-i-think-and-i-believe` | Opinions: أعتقد, أظن, برأيي     | Share your opinion           |
| 5   | `05-phone-conversations`   | Phone and messaging phrases     | Handle a phone call          |
| —   | `review-and-test`          | **Unit 13 Checkpoint**          | Hold a 2 minute conversation |

---

### Unit 14: Work and Society (~130 words, 5 lessons)

| #   | Slug                         | Skill Focus                      | What you can say do after  |
| --- | ---------------------------- | -------------------------------- | -------------------------- |
| 1   | `01-jobs-and-workplace`      | Professions and workplace vocab  | Talk about your job        |
| 2   | `02-education-and-studying`  | School and university vocabulary | Discuss education          |
| 3   | `03-health-and-doctor`       | Health, body, at the doctor      | Describe symptoms          |
| 4   | `04-news-and-current-events` | Media vocabulary                 | Read a news headline       |
| 5   | `05-formal-emails`           | Formal written MSA               | Write a short formal email |
| —   | `review-and-test`            | **Unit 14 Checkpoint**           | Discuss work and news      |

---

### Unit 15: Listening to Arabic (~120 words, 5 lessons)

| #   | Slug                      | Skill Focus                             | What you can say do after      |
| --- | ------------------------- | --------------------------------------- | ------------------------------ |
| 1   | `01-listening-strategies` | How to follow fast MSA speech           | Use listening strategies       |
| 2   | `02-msa-vs-dialects`      | What changes: Egyptian, Levantine, Gulf | Recognize dialect shifts       |
| 3   | `03-news-broadcasts`      | News Arabic patterns                    | Follow a news clip transcript  |
| 4   | `04-interviews-and-talks` | Interview and lecture patterns          | Follow an interview            |
| 5   | `05-connected-speech`     | How words blend in natural speech       | Parse fast connected speech    |
| —   | `review-and-test`         | **Unit 15 Checkpoint**                  | Comprehend a 2 minute MSA clip |

---

### Unit 16: Bringing It Together (~120 words, 5 lessons)

| #   | Slug                          | Skill Focus                           | What you can say do after   |
| --- | ----------------------------- | ------------------------------------- | --------------------------- |
| 1   | `01-feelings-and-emotions`    | Emotional vocabulary                  | Express how you feel        |
| 2   | `02-agreeing-and-disagreeing` | Debate phrases                        | Agree or push back politely |
| 3   | `03-complex-stories`          | Multi clause past tense narratives    | Tell a detailed story       |
| 4   | `04-cultural-conversations`   | Culture, traditions, holidays         | Discuss culture             |
| 5   | `05-final-dialogue-challenge` | Full mixed skills dialogue            | Complete a long dialogue    |
| —   | `review-and-test`             | **Unit 16 Checkpoint (Course Final)** | Full B1 assessment          |

**Phase 4 total:** 20 lessons + 4 unit checkpoints | **Cumulative vocabulary:** ~3,000 words

---

## Course Summary

| Content type                        | Count   |
| ----------------------------------- | ------- |
| Main lessons (16 units × 5 lessons) | 80      |
| Unit checkpoints (review and test)  | 16      |
| Pronunciation track                 | 6       |
| Grammar track (reference)           | 30      |
| **Total MDX files**                 | **132** |

| Phase               | Units    | Lessons | Checkpoints | New words |
| ------------------- | -------- | ------- | ----------- | --------- |
| 1 Getting Started   | 1 to 4   | 20      | 4           | 350       |
| 2 Everyday Arabic   | 5 to 8   | 20      | 4           | 650       |
| 3 Sentence Building | 9 to 12  | 20      | 4           | 1,000     |
| 4 Spoken Fluency    | 13 to 16 | 20      | 4           | 1,000     |

---

## Verb Progression Map

Verbs introduced by usefulness for spoken MSA, spread across units:

| Phase         | New verbs (root / meaning)                                    |
| ------------- | ------------------------------------------------------------- |
| Unit 2 to 4   | كان, قرأ, كتب, فهم, ذهب, جاء, قال, عمل, أكل, شرب              |
| Unit 5 to 8   | عرف, أراد, سأل, أجاب, سكن, درس, تعلّم, فتح, أغلق, اشترى, أحب  |
| Unit 9 to 12  | أرسل, شارك, بنى, أعطى, أخذ, وجد, بقي, حاول, اعتقد, ظن         |
| Unit 13 to 16 | ناقش, وافق, رفض, استمع, أعلن, سافر, استقبل, تعرّف, اشتري, زار |

---

## Weekly Pacing Suggestion

Assumes daily study. Duolingo style pacing: **5 lessons per week** (one unit per week at steady pace).

### Steady pace (recommended): 1 unit per week

| Weeks     | Units                    | Milestone                         |
| --------- | ------------------------ | --------------------------------- |
| 1         | Unit 1 Script and Sounds | Read voweled words                |
| 2         | Unit 2 First Words       | Introduce yourself                |
| 3         | Unit 3 Simple Sentences  | Build basic sentences             |
| 4         | Unit 4 Everyday Basics   | Ask questions, use present tense  |
| 5 to 8    | Units 5 to 8             | Everyday Arabic topics            |
| 9 to 12   | Units 9 to 12            | Past, future, connected sentences |
| 13 to 16  | Units 13 to 16           | Conversations and listening       |
| **Total** | **16 weeks (~4 months)** | **B1 spoken MSA foundation**      |

### Other paces

| Pace      | Units per week             | Total duration        |
| --------- | -------------------------- | --------------------- |
| Intensive | 2                          | ~8 weeks (~2 months)  |
| Relaxed   | 0.5 (1 unit every 2 weeks) | ~32 weeks (~8 months) |

---

## Unit Checkpoint Format

Each `review-and-test.mdx` at the end of a unit contains:

1. **Skill summary** — what the unit taught, listed as can do statements
2. **Vocabulary recap** — all new words from the unit in one table
3. **Mixed drill** — 15 to 20 questions (match, translate, fill blank, reorder words)
4. **Dialogue challenge** — one situational conversation using only unit vocabulary and prior units
5. **Answer key**
6. **Next unit preview** — one paragraph on what comes next

---

## Build Order (Implementation)

### Stage A: Technical foundation (before any lesson MDX)

1. Build and test RTL safe MDX components
2. Export Arabic font components in `mdx.tsx`
3. Add one test lesson with mixed Arabic and English
4. Update `course-catalog.ts` and progress maps for unit based slugs
5. Update site metadata for Arabyy

### Stage B: Content generation (after Stage A passes)

1. Unit 1 lessons, one at a time
2. Pronunciation 01 to 02 alongside Unit 1
3. Unit 1 checkpoint, then Units 2 to 4 with Grammar 01 to 09
4. Phase 2 units with Grammar 10 to 28
5. Phase 3 units with Grammar 13 to 27
6. Phase 4 units with Pronunciation 05 to 06 and Grammar 26 to 30

Do not start the next phase until the current phase is fully generated and reviewed.

---

## Related Files

- `prompts/arabic_course_master_prompt_v2.md` — AI generation instructions, Duolingo style lesson structure, RTL rules
- `prompts/arabic_course_plan.md` — this file
- `prompts/dutch_course_plan.md` — structural reference for the original Dutchyy pattern
