// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "backgrounds/wavy-grid-background.mdx": () => import("../content/docs/backgrounds/wavy-grid-background.mdx?collection=docs"), "components/aurora-button.mdx": () => import("../content/docs/components/aurora-button.mdx?collection=docs"), "components/bento-grid.mdx": () => import("../content/docs/components/bento-grid.mdx?collection=docs"), "components/glass-dock.mdx": () => import("../content/docs/components/glass-dock.mdx?collection=docs"), "components/light-trail-button.mdx": () => import("../content/docs/components/light-trail-button.mdx?collection=docs"), "components/navbar.mdx": () => import("../content/docs/components/navbar.mdx?collection=docs"), "device-mocks/browser.mdx": () => import("../content/docs/device-mocks/browser.mdx?collection=docs"), "device-mocks/iphone.mdx": () => import("../content/docs/device-mocks/iphone.mdx?collection=docs"), "text/iconic-text.mdx": () => import("../content/docs/text/iconic-text.mdx?collection=docs"), "text/underline-heading.mdx": () => import("../content/docs/text/underline-heading.mdx?collection=docs"), }),
};
export default browserCollections;