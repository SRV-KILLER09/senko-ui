// @ts-nocheck
import { default as __fd_glob_10 } from "../content/docs/device-mocks/meta.json?collection=meta"
import { default as __fd_glob_9 } from "../content/docs/components/meta.json?collection=meta"
import { default as __fd_glob_8 } from "../content/docs/backgrounds/meta.json?collection=meta"
import { default as __fd_glob_7 } from "../content/docs/meta.json?collection=meta"
import * as __fd_glob_6 from "../content/docs/device-mocks/iphone.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/device-mocks/browser.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/components/navbar.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/components/light-trail-button.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/components/glass-dock.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/backgrounds/wavy-grid-background.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/index.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.doc("docs", "content/docs", {"index.mdx": __fd_glob_0, "backgrounds/wavy-grid-background.mdx": __fd_glob_1, "components/glass-dock.mdx": __fd_glob_2, "components/light-trail-button.mdx": __fd_glob_3, "components/navbar.mdx": __fd_glob_4, "device-mocks/browser.mdx": __fd_glob_5, "device-mocks/iphone.mdx": __fd_glob_6, });

export const meta = await create.meta("meta", "content/docs", {"meta.json": __fd_glob_7, "backgrounds/meta.json": __fd_glob_8, "components/meta.json": __fd_glob_9, "device-mocks/meta.json": __fd_glob_10, });