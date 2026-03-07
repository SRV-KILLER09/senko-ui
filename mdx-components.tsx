import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { ComponentPreview } from "./components/ComponetPreview";
import { LightTrailBadge } from "./components/LightTrailBadge";
import GlassDockPreview from "./components/previews/component-previews/glass-dock-preview";
import { SafariEmptyShowcase } from "./components/previews/device-previews/safari-preview/safari-empty-preview";
import { EmptyIphonePreview } from "./components/previews/device-previews/iphone-preview/empty-iphone-preview";
import { NavbarPreview } from "./components/previews/component-previews/navbar-preview";
import { WavyGridBackgroundPreview } from "./components/previews/background/wavy-grid-background-preview";
import {
  IconicHeadingDefault,
  IconicHeadingGlobal,
  IconicHeadingIconEnd,
  IconicHeadingIconStart,
  IconicHeadingLoved,
  IconicHeadingMuted,
  IconicHeadingThreeLines,
} from "./components/previews/text-effects/icon-heading-preview";
import {
  UnderlineHeadingAI,
  UnderlineHeadingCafe,
  UnderlineHeadingFinTech,
  UnderlineHeadingSaaS,
} from "./components/previews/text-effects/underline-heading-preview";
import BentoGridPreview from "./components/previews/component-previews/bento-grid-preview";
import {
  AuroraButtonBlue,
  AuroraButtonDefault,
  AuroraButtonFast,
  AuroraButtonPink,
  AuroraButtonSlow,
} from "./components/previews/component-previews/aurora-button";
import AndroidMockup from "./components/android-mockup";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ComponentPreview,
    GlassDockPreview,
    LightTrailBadge,
    SafariEmptyShowcase,
    EmptyIphonePreview,
    AndroidMockup,
    NavbarPreview,
    WavyGridBackgroundPreview,
    IconicHeadingDefault,
    IconicHeadingGlobal,
    IconicHeadingIconEnd,
    IconicHeadingIconStart,
    IconicHeadingLoved,
    IconicHeadingMuted,
    IconicHeadingThreeLines,
    UnderlineHeadingSaaS,
    UnderlineHeadingAI,
    UnderlineHeadingCafe,
    UnderlineHeadingFinTech,
    BentoGridPreview,
    AuroraButtonBlue,
    AuroraButtonDefault,
    AuroraButtonFast,
    AuroraButtonPink,
    AuroraButtonSlow,
    ...components,
  };
}
