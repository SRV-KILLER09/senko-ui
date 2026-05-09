import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Box } from 'lucide-react';
import React from 'react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2.5 px-2">
          <div className="shrink-0 w-7 h-7 rounded-lg bg-black dark:bg-white flex items-center justify-center shadow-md">
            <Box className="w-4 h-4 text-white dark:text-black" />
          </div>
          <span className="font-bold text-base tracking-tight text-black dark:text-white whitespace-nowrap">Senko UI</span>
          <span className="shrink-0 hidden sm:inline-flex items-center gap-1 ml-1 px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 text-[10px] font-mono text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
            v1.0
          </span>
        </div>
      ),
      transparentMode: "top",
    },

    githubUrl: 'https://github.com',
  };
}