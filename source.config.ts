import { defineDocs, defineConfig, frontmatterSchema } from 'fumadocs-mdx/config'
import { z } from 'zod'

export const { docs, meta } = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: frontmatterSchema.extend({
      status: z.string().optional(),
    }),
  },
})

export default defineConfig()