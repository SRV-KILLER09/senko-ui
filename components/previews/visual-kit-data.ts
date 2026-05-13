export type VisualKitEntry = {
  title: string;
  category: string;
  description: string;
  /** Named export from `@/registry/senko-visual-effects` */
  component:
    | "AuroraWashField"
    | "DiagonalStripeField"
    | "DotMatrixField"
    | "HexLatticeField"
    | "FilmGrainOverlay"
    | "OrbClusterGlow"
    | "SoftMeshWash"
    | "RetroScanlines"
    | "SpotlightConeSweep"
    | "ConicRainbowHalo"
    | "ParallaxStarsField"
    | "MorphBlobField"
    | "NeonWireGrid"
    | "PastelMistWash"
    | "CinematicVignetteBreath"
    | "CrossingLaserBeams"
    | "RipplePoolSurface"
    | "SmokeWispWash"
    | "DiagonalShineBands"
    | "SparkleDustField"
    | "GlowingInsetFrame"
    | "ShimmerWashCard"
    | "ConicBorderSpinnerPlate"
    | "TechCornerBrackets"
    | "NeonPulseFrame"
    | "FrostedGlassTile"
    | "DashedEllipseOrbit"
    | "ConfettiSpeckles"
    | "IridescentSheenOverlay"
    | "RippleGlassCard"
    | "EchoPulseRings"
    | "GentleFloatShell"
    | "SlowRotateDrift"
    | "BreatheScaleCard"
    | "TiltHoverSurface"
    | "MarqueeFadeStrip"
    | "SparkleBadgeChip"
    | "RadiantDotBadge"
    | "MiniEqBars"
    | "BlinkCaretLine"
    | "ChromeGradientText"
    | "GlitchSkewText"
    | "BlurInText"
    | "SplitHueText"
    | "AnimatedUnderlineText"
    | "SweepHighlightText"
    | "NeonGlowText"
    | "OrbitTrailDots"
    | "SonarRippleWell"
    | "MetaballFusionPair";
  code: string;
  /** For text-style primitives */
  label?: string;
  /** Shown inside the live preview when the component supports `children` */
  childText?: string;
};

const baseImport = (name: string) =>
  `import { ${name} } from "@/registry/senko-visual-effects"`;

function wrap(name: string, inner: string) {
  return `${baseImport(name)}

export default function Example() {
  return (
    <div className="w-full max-w-xl mx-auto">
      ${inner}
    </div>
  )
}`;
}

export const VISUAL_KIT_ENTRIES: VisualKitEntry[] = [
  {
    title: "Aurora wash field",
    category: "Background",
    description: "Slow conic gradient wash with glass blur — hero-friendly ambient layer.",
    component: "AuroraWashField",
    code: wrap("AuroraWashField", `<AuroraWashField />`),
  },
  {
    title: "Diagonal stripe field",
    category: "Background",
    description: "Animated diagonal micro-stripes for texture without noise.",
    component: "DiagonalStripeField",
    code: wrap("DiagonalStripeField", `<DiagonalStripeField />`),
  },
  {
    title: "Dot matrix field",
    category: "Background",
    description: "Pulsing dot grid with cinematic top/bottom falloff.",
    component: "DotMatrixField",
    code: wrap("DotMatrixField", `<DotMatrixField />`),
  },
  {
    title: "Hex lattice field",
    category: "Background",
    description: "Vector hex pattern with soft indigo wash.",
    component: "HexLatticeField",
    code: wrap("HexLatticeField", `<HexLatticeField />`),
  },
  {
    title: "Film grain overlay",
    category: "Background",
    description: "SVG turbulence grain for analog texture over flat gradients.",
    component: "FilmGrainOverlay",
    code: wrap("FilmGrainOverlay", `<FilmGrainOverlay />`),
  },
  {
    title: "Orb cluster glow",
    category: "Background",
    description: "Three drifting blurred orbs for premium SaaS depth.",
    component: "OrbClusterGlow",
    code: wrap("OrbClusterGlow", `<OrbClusterGlow />`),
  },
  {
    title: "Soft mesh wash",
    category: "Background",
    description: "Dual radial mesh drift with light blur.",
    component: "SoftMeshWash",
    code: wrap("SoftMeshWash", `<SoftMeshWash />`),
  },
  {
    title: "Retro scanlines",
    category: "Background",
    description: "CRT-style scanlines with emerald tint.",
    component: "RetroScanlines",
    code: wrap("RetroScanlines", `<RetroScanlines />`),
  },
  {
    title: "Spotlight cone sweep",
    category: "Background",
    description: "Rotating soft spotlight through darkness.",
    component: "SpotlightConeSweep",
    code: wrap("SpotlightConeSweep", `<SpotlightConeSweep />`),
  },
  {
    title: "Conic rainbow halo",
    category: "Background",
    description: "Large blurred conic ring behind a frosted inner card.",
    component: "ConicRainbowHalo",
    code: wrap("ConicRainbowHalo", `<ConicRainbowHalo />`),
  },
  {
    title: "Parallax stars field",
    category: "Background",
    description: "Twinkling micro-stars with staggered motion timing.",
    component: "ParallaxStarsField",
    code: wrap("ParallaxStarsField", `<ParallaxStarsField />`),
  },
  {
    title: "Morph blob field",
    category: "Background",
    description: "Organic blob silhouette with CSS morph keyframes.",
    component: "MorphBlobField",
    code: wrap("MorphBlobField", `<MorphBlobField />`),
  },
  {
    title: "Neon wire grid",
    category: "Background",
    description: "Cyber cyan line grid on deep black.",
    component: "NeonWireGrid",
    code: wrap("NeonWireGrid", `<NeonWireGrid />`),
  },
  {
    title: "Pastel mist wash",
    category: "Background",
    description: "Floating pastel fog banks — light mode shines, dark mode moody.",
    component: "PastelMistWash",
    code: wrap("PastelMistWash", `<PastelMistWash />`),
  },
  {
    title: "Cinematic vignette breath",
    category: "Background",
    description: "Breathing inset vignette for dramatic framing.",
    component: "CinematicVignetteBreath",
    code: wrap("CinematicVignetteBreath", `<CinematicVignetteBreath />`),
  },
  {
    title: "Crossing laser beams",
    category: "Background",
    description: "Perpendicular gradient beams that slide through the frame.",
    component: "CrossingLaserBeams",
    code: wrap("CrossingLaserBeams", `<CrossingLaserBeams />`),
  },
  {
    title: "Ripple pool surface",
    category: "Background",
    description: "Expanding rings from center — calm water metaphor.",
    component: "RipplePoolSurface",
    code: wrap("RipplePoolSurface", `<RipplePoolSurface />`),
  },
  {
    title: "Smoke wisp wash",
    category: "Background",
    description: "Neutral drifting smoke gradients for understated depth.",
    component: "SmokeWispWash",
    code: wrap("SmokeWispWash", `<SmokeWispWash />`),
  },
  {
    title: "Diagonal shine bands",
    category: "Background",
    description: "Specular sweep across muted base — loading-state friendly.",
    component: "DiagonalShineBands",
    code: wrap("DiagonalShineBands", `<DiagonalShineBands />`),
  },
  {
    title: "Sparkle dust field",
    category: "Background",
    description: "Sparse golden sparkles on deep indigo.",
    component: "SparkleDustField",
    code: wrap("SparkleDustField", `<SparkleDustField />`),
  },
  {
    title: "Glowing inset frame",
    category: "Frame",
    description: "Gradient outer glow with solid inner stage.",
    component: "GlowingInsetFrame",
    code: wrap("GlowingInsetFrame", `<GlowingInsetFrame />`),
  },
  {
    title: "Shimmer wash card",
    category: "Frame",
    description: "Glass card with horizontal shimmer pass.",
    component: "ShimmerWashCard",
    code: wrap("ShimmerWashCard", `<ShimmerWashCard />`),
  },
  {
    title: "Conic border spinner plate",
    category: "Frame",
    description: "Rotating conic border — wrap feature panels.",
    component: "ConicBorderSpinnerPlate",
    code: wrap("ConicBorderSpinnerPlate", `<ConicBorderSpinnerPlate />`),
  },
  {
    title: "Tech corner brackets",
    category: "Frame",
    description: "HUD-style corner brackets on dashed field.",
    component: "TechCornerBrackets",
    code: wrap("TechCornerBrackets", `<TechCornerBrackets />`),
  },
  {
    title: "Neon pulse frame",
    category: "Frame",
    description: "Pink outer glow that breathes with the container.",
    component: "NeonPulseFrame",
    code: wrap("NeonPulseFrame", `<NeonPulseFrame />`),
  },
  {
    title: "Frosted glass tile",
    category: "Surface",
    description: "Heavy blur frosted panel with subtle specular corner.",
    component: "FrostedGlassTile",
    code: wrap("FrostedGlassTile", `<FrostedGlassTile />`),
  },
  {
    title: "Dashed ellipse orbit",
    category: "Decorative",
    description: "Two counter-rotating dashed ellipses.",
    component: "DashedEllipseOrbit",
    code: wrap("DashedEllipseOrbit", `<DashedEllipseOrbit />`),
  },
  {
    title: "Confetti speckles",
    category: "Decorative",
    description: "Continuous falling confetti ribbons — celebration mode.",
    component: "ConfettiSpeckles",
    code: wrap("ConfettiSpeckles", `<ConfettiSpeckles />`),
  },
  {
    title: "Iridescent sheen overlay",
    category: "Surface",
    description: "Screen-blended shifting hues over dark base.",
    component: "IridescentSheenOverlay",
    code: wrap("IridescentSheenOverlay", `<IridescentSheenOverlay />`),
  },
  {
    title: "Ripple glass card",
    category: "Surface",
    description: "Glass surface with periodic ripple ring from center.",
    component: "RippleGlassCard",
    code: wrap("RippleGlassCard", `<RippleGlassCard />`),
  },
  {
    title: "Echo pulse rings",
    category: "Motion",
    description: "Nested rings that scale in gentle echo.",
    component: "EchoPulseRings",
    code: wrap("EchoPulseRings", `<EchoPulseRings />`),
  },
  {
    title: "Gentle float shell",
    category: "Motion",
    description: "Card in slow vertical bob — use for CTAs or icons.",
    component: "GentleFloatShell",
    code: wrap("GentleFloatShell", `<GentleFloatShell />`),
  },
  {
    title: "Slow rotate drift",
    category: "Motion",
    description: "Micro-rotation drift on a tinted glass panel.",
    component: "SlowRotateDrift",
    code: wrap("SlowRotateDrift", `<SlowRotateDrift />`),
  },
  {
    title: "Breathe scale card",
    category: "Motion",
    description: "Subtle scale breathing on gradient hairline.",
    component: "BreatheScaleCard",
    code: wrap("BreatheScaleCard", `<BreatheScaleCard />`),
  },
  {
    title: "Tilt hover surface",
    category: "Motion",
    description: "Springy 3D tilt on hover — wrap interactive tiles.",
    component: "TiltHoverSurface",
    code: wrap("TiltHoverSurface", `<TiltHoverSurface />`),
  },
  {
    title: "Marquee fade strip",
    category: "Motion",
    description: "Edge-faded infinite horizontal marquee with centered slot.",
    component: "MarqueeFadeStrip",
    childText: "Centered",
    code: wrap("MarqueeFadeStrip", `<MarqueeFadeStrip><span className="text-sm">Centered</span></MarqueeFadeStrip>`),
  },
  {
    title: "Sparkle badge chip",
    category: "UI",
    description: "Pill badge with periodic glow burst.",
    component: "SparkleBadgeChip",
    childText: "Early access",
    code: wrap("SparkleBadgeChip", `<SparkleBadgeChip>Early access</SparkleBadgeChip>`),
  },
  {
    title: "Radiant dot badge",
    category: "UI",
    description: "Live indicator with ping + solid core.",
    component: "RadiantDotBadge",
    childText: "Systems nominal",
    code: wrap("RadiantDotBadge", `<RadiantDotBadge>Systems nominal</RadiantDotBadge>`),
  },
  {
    title: "Mini equalizer bars",
    category: "UI",
    description: "Audio-style spectrum bars — footer or player chrome.",
    component: "MiniEqBars",
    childText: "Now playing",
    code: wrap("MiniEqBars", `<MiniEqBars>Now playing</MiniEqBars>`),
  },
  {
    title: "Blink caret line",
    category: "UI",
    description: "Terminal-style caret blink beside monospace label.",
    component: "BlinkCaretLine",
    childText: "syncing",
    code: wrap("BlinkCaretLine", `<BlinkCaretLine>syncing</BlinkCaretLine>`),
  },
  {
    title: "Chrome gradient text",
    category: "Typography",
    description: "Metallic vertical gradient lettering.",
    component: "ChromeGradientText",
    label: "Senko",
    code: wrap("ChromeGradientText", `<ChromeGradientText label="Senko" />`),
  },
  {
    title: "Glitch skew text",
    category: "Typography",
    description: "RGB split glitch with occasional skew pulse.",
    component: "GlitchSkewText",
    label: "SIGNAL",
    code: wrap("GlitchSkewText", `<GlitchSkewText label="SIGNAL" />`),
  },
  {
    title: "Blur-in text",
    category: "Typography",
    description: "Soft blur resolving to sharp type on a loop.",
    component: "BlurInText",
    label: "Clarity",
    code: wrap("BlurInText", `<BlurInText label="Clarity" />`),
  },
  {
    title: "Split hue text",
    category: "Typography",
    description: "Two-tone split on the string midpoint.",
    component: "SplitHueText",
    label: "SenkoUI",
    code: wrap("SplitHueText", `<SplitHueText label="SenkoUI" />`),
  },
  {
    title: "Animated underline text",
    category: "Typography",
    description: "Gradient underline draws on repeat.",
    component: "AnimatedUnderlineText",
    label: "Documentation",
    code: wrap("AnimatedUnderlineText", `<AnimatedUnderlineText label="Documentation" />`),
  },
  {
    title: "Sweep highlight text",
    category: "Typography",
    description: "Sheen band sweeps across muted letterforms.",
    component: "SweepHighlightText",
    label: "Premium",
    code: wrap("SweepHighlightText", `<SweepHighlightText label="Premium" />`),
  },
  {
    title: "Neon glow text",
    category: "Typography",
    description: "Outlined neon tube look with cyan bloom.",
    component: "NeonGlowText",
    label: "NIGHT",
    code: wrap("NeonGlowText", `<NeonGlowText label="NIGHT" />`),
  },
  {
    title: "Orbit trail dots",
    category: "Decorative",
    description: "Dots on a rotating ring — loader or logo chrome.",
    component: "OrbitTrailDots",
    childText: "Orbiting",
    code: wrap("OrbitTrailDots", `<OrbitTrailDots>Orbiting</OrbitTrailDots>`),
  },
  {
    title: "Sonar ripple well",
    category: "Decorative",
    description: "Sonar-style expanding rings from focal point.",
    component: "SonarRippleWell",
    childText: "Scanning",
    code: wrap("SonarRippleWell", `<SonarRippleWell>Scanning</SonarRippleWell>`),
  },
  {
    title: "Metaball fusion pair",
    category: "Decorative",
    description: "Two blurred circles merge with contrast filter trick.",
    component: "MetaballFusionPair",
    childText: "Liquid merge",
    code: wrap("MetaballFusionPair", `<MetaballFusionPair>Liquid merge</MetaballFusionPair>`),
  },
];

/** Sidebar / routing: one docs page per kit category */
export const VISUAL_KIT_CATEGORY_ORDER = [
  "Background",
  "Frame",
  "Surface",
  "Decorative",
  "Motion",
  "UI",
  "Typography",
] as const;

export type VisualKitCategory = (typeof VISUAL_KIT_CATEGORY_ORDER)[number];

export const VISUAL_KIT_PAGE_SLUG: Record<VisualKitCategory, string> = {
  Background: "visual-kit-backgrounds",
  Frame: "visual-kit-frames",
  Surface: "visual-kit-surfaces",
  Decorative: "visual-kit-decorative",
  Motion: "visual-kit-motion",
  UI: "visual-kit-ui",
  Typography: "visual-kit-typography",
};

export function visualKitEntriesForCategory(category: string): VisualKitEntry[] {
  return VISUAL_KIT_ENTRIES.filter((e) => e.category === category);
}
