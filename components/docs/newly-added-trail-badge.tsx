import { cn } from "@/lib/utils";
import { LightTrailBadge } from "@/registry/light-trail-badge";

/**
 * Same pattern as the Light Trail Badge docs (orange “NEW” + dot + slate label).
 */
export function NewlyAddedTrailBadge({ className }: { className?: string }) {
  return (
    <LightTrailBadge
      type="button"
      tabIndex={-1}
      className={cn(
        "pointer-events-none shrink-0 shadow-lg shadow-zinc-200/50 dark:shadow-black/20",
        "px-2 py-0.5 sm:px-2.5 sm:py-0.5",
        className
      )}
    >
      <div className="flex items-center gap-1.5 px-0.5 leading-none">
        <span className="text-[8px] font-black uppercase tracking-[0.2em] text-orange-600 sm:text-[9px] dark:text-orange-400">
          NEW
        </span>
        <div className="h-1 w-1 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-600" />
        <span className="text-[8px] font-bold uppercase tracking-widest text-zinc-500 sm:text-[9px] dark:text-zinc-400">
          NEWLY ADDED
        </span>
      </div>
    </LightTrailBadge>
  );
}
