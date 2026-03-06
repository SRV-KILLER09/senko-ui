import defaultMdxComponents from 'fumadocs-ui/mdx'
import type { MDXComponents } from 'mdx/types'
import { ComponentPreview } from './components/ComponetPreview'
import { LightTrailBadge } from './components/LightTrailBadge'
import GlassDockPreview from './components/previews/component-previews/glass-dock-preview'
import { SafariEmptyShowcase } from './components/previews/device-previews/safari-preview/safari-empty-preview'
import { EmptyIphonePreview } from './components/previews/device-previews/iphone-preview/empty-iphone-preview'
import { NavbarPreview } from './components/previews/component-previews/navbar-preview'
import { WavyGridBackgroundPreview } from './components/previews/background/wavy-grid-background-preview'
import { IconicHeadingpreview } from './components/previews/text-effects/icon-heading-preview'
import { UnderlineHeadingAI, UnderlineHeadingCafe, UnderlineHeadingFinTech, UnderlineHeadingSaaS } from './components/previews/text-effects/underline-heading-preview'



export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ComponentPreview,
    GlassDockPreview,
    LightTrailBadge,
    SafariEmptyShowcase,
    EmptyIphonePreview,
    NavbarPreview,
    WavyGridBackgroundPreview,
    IconicHeadingpreview,
    UnderlineHeadingSaaS,
    UnderlineHeadingAI,
    UnderlineHeadingCafe,
    UnderlineHeadingFinTech,
    ...components,
  }
}