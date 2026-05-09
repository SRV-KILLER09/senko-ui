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

import UnderlineHeading from "@/registry/underlined-heading";
import { IconicHeading } from "@/registry/iconic-heading";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    p: (props) => (
      <p {...props} className="text-[1.05rem] md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 font-light mb-6 tracking-wide pl-1 md:pl-4 border-l border-transparent hover:border-indigo-500/10 transition-colors duration-500" />
    ),
    ul: (props) => (
      <ul {...props} className="space-y-4 mb-8 pl-1 md:pl-4" />
    ),
    li: (props) => {
      const children = props.children;
      return (
        <li {...props} className="text-[1.05rem] md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 font-light tracking-wide flex items-start gap-3 group">
          <span className="mt-2.5 shrink-0 w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover:bg-indigo-500/50 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.5)] transition-all duration-300" />
          <span className="flex-1">{children}</span>
        </li>
      );
    },
    strong: (props) => (
      <strong {...props} className="font-medium text-zinc-900 dark:text-zinc-100" />
    ),
    h2: (props) => {
      const text = props.children?.toString() || "";
      
      // For Introduction, use tighter top margin since it's right above the hero
      if (text.includes("Introduction")) {
        return (
          <div id={props.id} className="mt-8 mb-4">
            <LightTrailBadge>{text}</LightTrailBadge>
          </div>
        );
      }

      // For all other headings, use standard section margins
      return (
        <div id={props.id} className="mt-16 mb-8">
          <LightTrailBadge>{text}</LightTrailBadge>
        </div>
      );
    },
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
    UnderlineHeading,
    IconicHeading,
    ...components,
  };
}
