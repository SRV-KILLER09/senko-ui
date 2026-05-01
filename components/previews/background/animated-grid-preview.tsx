"use client";

import { AnimatedGridBackground } from "@/registry/animated-grid-background";

export function AnimatedGridPreview() {
  return (
    <div className="relative w-full min-h-[400px] overflow-hidden rounded-xl">
      <AnimatedGridBackground />
      <div className="relative z-10 flex items-center justify-center h-full min-h-[400px]">
        <span className="text-2xl font-bold text-foreground/80 drop-shadow-sm">
          Animated Grid Background
        </span>
      </div>
    </div>
  );
}
