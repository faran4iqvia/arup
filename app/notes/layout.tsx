import NotesDocsLayout from '@/components/app-ui/notes-docs-layout';
import type { NotesTabConfig } from '@/lib/notes-tabs';
import { source } from '@/lib/source';
import {
  Megaphone,
  BrickWall,
  Lightbulb,
  Hand,
  BookOpen,
  Layers,
  MessageCircle,
} from 'lucide-react';

const tree = source.getPageTree();

// ─────────────────────────────────────────────────────────────────────────────
// Welcome
// ─────────────────────────────────────────────────────────────────────────────

const welcomeTabs: NotesTabConfig[] = [
  {
    title: 'Welcome',
    description: 'Start Here',
    url: '/notes',
    matchUrls: ['/notes/rtl-component-test'],
    icon: <Hand className="h-5 w-5 text-orange-500" />,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Main course — 16 units in 4 phases
// Each phase tab URL must match a folder index with `"root": true` in meta.json.
// That scopes the sidebar to that phase only (via Fumadocs TreeContext).
// ─────────────────────────────────────────────────────────────────────────────

const phaseTabs: NotesTabConfig[] = [
  {
    title: 'Phase 1',
    description: 'Units 1–4 · Script & first sentences',
    url: '/notes/phase-1-getting-started',
    sectionPrefix: '/notes/phase-1-getting-started',
    icon: <BookOpen className="h-5 w-5 text-amber-500" />,
  },
  {
    title: 'Phase 2',
    description: 'Units 5–8 · People, daily life, food, travel',
    url: '/notes/phase-2-everyday-arabic',
    sectionPrefix: '/notes/phase-2-everyday-arabic',
    icon: <BrickWall className="h-5 w-5 text-fuchsia-500" />,
  },
  {
    title: 'Phase 3',
    description: 'Units 9–12 · Past, future, connecting ideas',
    url: '/notes/phase-3-sentence-building',
    sectionPrefix: '/notes/phase-3-sentence-building',
    icon: <Layers className="h-5 w-5 text-teal-500" />,
  },
  {
    title: 'Phase 4',
    description: 'Units 13–16 · Conversations & listening',
    url: '/notes/phase-4-spoken-fluency',
    sectionPrefix: '/notes/phase-4-spoken-fluency',
    icon: <MessageCircle className="h-5 w-5 text-sky-500" />,
  },
];

/**
 * Unit map (for reference — sidebar order comes from each phase meta.json):
 *
 * Phase 1: unit-01 Script & Sounds · unit-02 First Words · unit-03 Simple Sentences · unit-04 Everyday Basics
 * Phase 2: unit-05 People · unit-06 Daily Life · unit-07 Food & Shopping · unit-08 Travel & Places
 * Phase 3: unit-09 Past Tense · unit-10 Future & Plans · unit-11 Connecting Ideas · unit-12 Describing & Comparing
 * Phase 4: unit-13 Conversations · unit-14 Work & Society · unit-15 Listening · unit-16 Bringing It Together
 */

// ─────────────────────────────────────────────────────────────────────────────
// Reference tracks — optional pronunciation & grammar deep dives
// ─────────────────────────────────────────────────────────────────────────────

const referenceTabs: NotesTabConfig[] = [
  {
    title: 'Pronunciation',
    description: 'Sounds, stress & listening',
    url: '/notes/pronunciation',
    sectionPrefix: '/notes/pronunciation',
    icon: <Megaphone className="h-5 w-5 text-red-500" />,
  },
  {
    title: 'Grammar',
    description: 'Reference deep dives',
    url: '/notes/grammar',
    sectionPrefix: '/notes/grammar',
    icon: <Lightbulb className="h-5 w-5 text-indigo-500" />,
  },
];

const tabConfigs = [
  ...welcomeTabs,
  ...phaseTabs,
  ...referenceTabs,
];

// @ts-ignore
export default function Layout({ children }: LayoutProps<'/notes'>) {
  return (
    <NotesDocsLayout tree={tree} tabConfigs={tabConfigs}>
      {children}
    </NotesDocsLayout>
  );
}
