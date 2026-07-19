'use client';

import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { Root } from 'fumadocs-core/page-tree';
import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { baseOptions } from '@/lib/layout.shared';
import ProgressSidebarItem from '@/components/app-ui/progress-sidebar-item';
import { buildNotesTabs, type NotesTabConfig } from '@/lib/notes-tabs';

type NotesDocsLayoutProps = {
  tree: Root;
  tabConfigs: NotesTabConfig[];
  children: ReactNode;
};

export default function NotesDocsLayout({
  tree,
  tabConfigs,
  children,
}: NotesDocsLayoutProps) {
  // Build tabs on the client so `$folder` (page tree nodes) and `Set`s stay valid.
  // Passing them from a Server Component breaks serialization and hides the tab UI.
  const tabs = useMemo(
    () => buildNotesTabs(tree, tabConfigs),
    [tree, tabConfigs]
  );

  return (
    <DocsLayout
      {...baseOptions()}
      tree={tree}
      tabMode="sidebar"
      tabs={tabs}
      sidebar={{
        components: {
          Item: ProgressSidebarItem,
        },
      }}
    >
      {children}
    </DocsLayout>
  );
}

NotesDocsLayout.displayName = 'NotesDocsLayout';
