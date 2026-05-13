"use client";

import { NewlyAddedTrailBadge } from "@/components/docs/newly-added-trail-badge";
import { ComponentPreview } from "@/components/component-preview";
import { VISUAL_KIT_COMPONENT_MAP } from "@/components/previews/visual-kit-component-map";
import {
  VISUAL_KIT_ENTRIES,
  visualKitEntriesForCategory,
  type VisualKitEntry,
} from "@/components/previews/visual-kit-data";

function KitPreview({ entry }: { entry: VisualKitEntry }) {
  const Comp = VISUAL_KIT_COMPONENT_MAP[entry.component];

  if (entry.label != null) {
    return <Comp label={entry.label} />;
  }

  if (entry.childText != null) {
    if (entry.component === "MarqueeFadeStrip") {
      return (
        <Comp>
          <span className="text-sm text-muted-foreground">{entry.childText}</span>
        </Comp>
      );
    }
    return <Comp>{entry.childText}</Comp>;
  }

  return <Comp />;
}

export type VisualKitShowcaseProps = {
  /** When set, only entries in this category are shown (matches `VisualKitEntry.category`). */
  category?: string;
};

export function VisualKitShowcase({ category }: VisualKitShowcaseProps) {
  const entries = category ? visualKitEntriesForCategory(category) : VISUAL_KIT_ENTRIES;
  const showCategoryPill = !category;

  if (entries.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        No previews for this category. Check the <code className="rounded bg-muted px-1">category</code> prop.
      </p>
    );
  }

  return (
    <div className="not-prose w-full max-w-none space-y-16 text-fd-foreground">
      <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/5 p-4 dark:border-indigo-400/25 dark:bg-indigo-950/40">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-sm font-medium text-foreground">
            {entries.length} {category ? `${category} ` : ""}
            {entries.length === 1 ? "primitive" : "primitives"}
            {category ? " on this page" : " total"} — jump to a preview
          </p>
          <NewlyAddedTrailBadge className="scale-95 sm:scale-100" />
        </div>
        <nav className="mt-3 max-h-48 overflow-y-auto text-[11px] leading-relaxed text-muted-foreground md:max-h-none md:columns-2 md:gap-x-6 lg:columns-3">
          {entries.map((e) => (
            <a
              key={e.component}
              href={`#${e.component.toLowerCase()}`}
              className="block truncate py-0.5 text-indigo-600 underline-offset-2 hover:text-indigo-500 hover:underline dark:text-indigo-300 dark:hover:text-indigo-200"
            >
              {e.title}
            </a>
          ))}
        </nav>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">
        Copy-paste from{" "}
        <code className="rounded-md bg-muted px-1.5 py-0.5 text-xs text-foreground">@/registry/senko-visual-effects</code>
        . Optional <code className="rounded-md bg-muted px-1.5 py-0.5 text-xs">children</code> slot is supported on several layers.
      </p>

      {entries.map((entry) => (
        <section key={entry.component} id={entry.component.toLowerCase()} className="scroll-mt-28">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">{entry.title}</h3>
            <NewlyAddedTrailBadge className="scale-[0.82] origin-left sm:scale-90" />
            {showCategoryPill ? (
              <span className="rounded-full border border-border bg-muted/50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                {entry.category}
              </span>
            ) : null}
          </div>
          <p className="mb-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">{entry.description}</p>
          <ComponentPreview code={entry.code} lang="tsx">
            <div className="mx-auto w-full min-w-0 max-w-xl">
              <KitPreview entry={entry} />
            </div>
          </ComponentPreview>
        </section>
      ))}
    </div>
  );
}
