import { createElement } from 'react'
import { docs, meta } from '@/.source/server'
import { loader } from 'fumadocs-core/source'
import { statusBadgesPlugin } from 'fumadocs-core/source/status-badges'
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server'

export const source = loader({
  baseUrl: '/docs',
  source: toFumadocsSource(docs, meta),
  plugins: [
    statusBadgesPlugin({
      renderBadge: (status) => {
        const label =
          status === 'newly-added' || status === 'new'
            ? 'Newly added'
            : status.replace(/-/g, ' ')
        return createElement(
          'span',
          {
            className:
              'ml-1.5 inline-flex shrink-0 items-center rounded-full border border-black/10 bg-black/[0.04] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-orange-600 dark:border-white/10 dark:bg-white/[0.07] dark:text-orange-400',
          },
          label
        )
      },
    }),
  ],
})