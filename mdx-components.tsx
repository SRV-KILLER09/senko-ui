import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { ComponentPreview } from "./components/component-preview";
import { LightTrailBadge } from "@/registry/light-trail-badge";
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
import AndroidMockup from "@/registry/android-mockup";
import LaptopMockup from "@/registry/laptop-mockup";
import {
  SaaSBadges,
  PortfolioBadges,
  Web3Badges,
  GamingBadges,
  EcommerceBadges,
} from "./components/previews/component-previews/light-trail-badge-preview";
import { ActivityDropdownPreview } from "./components/previews/component-previews/activity-dropdown-preview";
import {
  LikeButtonDefault,
  LikeButtonLiked,
} from "./components/previews/component-previews/like-button-preview";
import {
  SocialProofDefault,
  SocialProofCustom,
} from "./components/previews/component-previews/social-proof-preview";
import {
  MagneticSliderDefault,
  MagneticSliderCustom,
} from "./components/previews/component-previews/magnetic-slider-preview";
import { AiPromptGlassDefault } from "./components/previews/component-previews/ai-prompt-glass-preview";
import { AiPromptNeoDefault } from "./components/previews/component-previews/ai-prompt-neo-preview";
import { AnimatedGridPreview } from "./components/previews/background/animated-grid-preview";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ComponentPreview,
    GlassDockPreview,
    SaaSBadges,
    PortfolioBadges,
    Web3Badges,
    GamingBadges,
    EcommerceBadges,
    SafariEmptyShowcase,
    EmptyIphonePreview,
    AndroidMockup,
    LaptopMockup,
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
    ActivityDropdownPreview,
    LikeButtonDefault,
    LikeButtonLiked,
    SocialProofDefault,
    SocialProofCustom,
    MagneticSliderDefault,
    MagneticSliderCustom,
    AiPromptGlassDefault,
    AiPromptNeoDefault,
    AnimatedGridPreview,
    ...components,
  };
}
