// @ts-nocheck
import { default as __fd_glob_24 } from "../content/docs/text/meta.json?collection=meta"
import { default as __fd_glob_23 } from "../content/docs/backgrounds/meta.json?collection=meta"
import { default as __fd_glob_22 } from "../content/docs/device-mocks/meta.json?collection=meta"
import { default as __fd_glob_21 } from "../content/docs/components/meta.json?collection=meta"
import { default as __fd_glob_20 } from "../content/docs/meta.json?collection=meta"
import * as __fd_glob_19 from "../content/docs/text/underline-heading.mdx?collection=docs"
import * as __fd_glob_18 from "../content/docs/text/iconic-text.mdx?collection=docs"
import * as __fd_glob_17 from "../content/docs/components/social-proof.mdx?collection=docs"
import * as __fd_glob_16 from "../content/docs/components/navbar.mdx?collection=docs"
import * as __fd_glob_15 from "../content/docs/components/magnetic-pit-slider.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/components/like-button.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/components/light-trail-badge.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/components/glass-dock.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/components/bento-grid.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/components/aurora-button.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/components/ai-prompt-box-neomorphism.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/components/ai-prompt-box-glassmorphism.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/components/activity-dropdown.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/device-mocks/laptop.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/device-mocks/iphone.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/device-mocks/browser.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/device-mocks/android.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/backgrounds/wavy-grid-background.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/backgrounds/animated-grid-background.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/index.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.doc("docs", "content/docs", {"index.mdx": __fd_glob_0, "backgrounds/animated-grid-background.mdx": __fd_glob_1, "backgrounds/wavy-grid-background.mdx": __fd_glob_2, "device-mocks/android.mdx": __fd_glob_3, "device-mocks/browser.mdx": __fd_glob_4, "device-mocks/iphone.mdx": __fd_glob_5, "device-mocks/laptop.mdx": __fd_glob_6, "components/activity-dropdown.mdx": __fd_glob_7, "components/ai-prompt-box-glassmorphism.mdx": __fd_glob_8, "components/ai-prompt-box-neomorphism.mdx": __fd_glob_9, "components/aurora-button.mdx": __fd_glob_10, "components/bento-grid.mdx": __fd_glob_11, "components/glass-dock.mdx": __fd_glob_12, "components/light-trail-badge.mdx": __fd_glob_13, "components/like-button.mdx": __fd_glob_14, "components/magnetic-pit-slider.mdx": __fd_glob_15, "components/navbar.mdx": __fd_glob_16, "components/social-proof.mdx": __fd_glob_17, "text/iconic-text.mdx": __fd_glob_18, "text/underline-heading.mdx": __fd_glob_19, });

export const meta = await create.meta("meta", "content/docs", {"meta.json": __fd_glob_20, "components/meta.json": __fd_glob_21, "device-mocks/meta.json": __fd_glob_22, "backgrounds/meta.json": __fd_glob_23, "text/meta.json": __fd_glob_24, });