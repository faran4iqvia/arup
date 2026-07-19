import {
  visit,
  type Folder,
  type Root,
} from 'fumadocs-core/page-tree';
import type { LayoutTab } from 'fumadocs-ui/layouts/shared';
import type { ReactNode } from 'react';

export type NotesTabConfig = {
  title: string;
  description: string;
  url: string;
  icon: ReactNode;
  /** Extra URLs that should also mark this tab active (e.g. sibling routes). */
  matchUrls?: string[];
  /**
   * Fallback URL prefix for tab highlighting when the folder index is not found.
   * Sidebar scoping comes from `"root": true` in each section's meta.json.
   */
  sectionPrefix?: string;
};

/** Top-level Welcome pages that belong on the Welcome tab (not course phases). */
const WELCOME_PAGE_URLS = ['/notes/rtl-component-test'] as const;

function findFolderByIndexUrl(
  node: Root | Folder,
  tabUrl: string
): Folder | undefined {
  let match: Folder | undefined;

  visit(node, (item) => {
    if (match) return 'break';
    if (item.type === 'folder' && item.index?.url === tabUrl) {
      match = item;
      return 'break';
    }
  });

  return match;
}

function collectUrlsByPrefix(tree: Root, prefix: string): Set<string> {
  const urls = new Set<string>();
  const normalized =
    prefix.endsWith('/') && prefix.length > 1 ? prefix.slice(0, -1) : prefix;

  visit(tree, (node) => {
    if (
      node.type === 'page' &&
      !node.external &&
      node.url.startsWith(normalized)
    ) {
      urls.add(node.url);
    }
  });

  return urls;
}

function collectWelcomeUrls(config: NotesTabConfig): Set<string> {
  const urls = new Set<string>(['/notes', ...WELCOME_PAGE_URLS]);
  for (const extra of config.matchUrls ?? []) {
    urls.add(extra);
  }
  return urls;
}

function resolveTabUrls(tree: Root, config: NotesTabConfig): Set<string> {
  if (config.url === '/notes') {
    return collectWelcomeUrls(config);
  }

  if (config.sectionPrefix) {
    const urls = collectUrlsByPrefix(tree, config.sectionPrefix);
    urls.add(config.url);
    for (const extra of config.matchUrls ?? []) {
      urls.add(extra);
    }
    return urls;
  }

  const urls = new Set([config.url]);
  for (const extra of config.matchUrls ?? []) {
    urls.add(extra);
  }
  return urls;
}

export function buildNotesTabs(
  tree: Root,
  configs: NotesTabConfig[]
): LayoutTab[] {
  return configs.map((config) => {
    const { matchUrls: _matchUrls, sectionPrefix: _sectionPrefix, ...tab } =
      config;

    const folder = findFolderByIndexUrl(tree, config.url);

    // Prefer $folder binding for root sections (requires client-side build).
    if (folder?.root) {
      return {
        ...tab,
        $folder: folder,
      };
    }

    // Welcome tab and fallbacks use explicit URL sets.
    return {
      ...tab,
      urls: resolveTabUrls(tree, config),
    };
  });
}
