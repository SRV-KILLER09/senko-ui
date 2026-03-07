import { IconicHeading } from "@/components/Icon-ic-Heading"
import {
  TrendingUp, Zap, Sparkles, ArrowRight, Star,
  Rocket, Brain, Globe, Heart, Code2
} from "lucide-react"

// ─── 1. Default ──────────────────────────────────────────────
export const IconicHeadingDefault = () => (
  <div className="flex w-full items-center justify-center py-8 px-4">
    <IconicHeading
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight"
      lines={[
        {
          text: "Scale your Product",
          className: "-mb-1 sm:-mb-2 md:-mb-3 text-foreground",
          icon: <TrendingUp className="w-[60%] h-[60%]" />,
          iconPosition: "between",
          iconClassName: "bg-gradient-to-t from-blue-200 to-blue-400 border border-white shadow-sm",
        },
        { text: "with TS-UI", className: "text-foreground font-medium" },
      ]}
    />
  </div>
)

// ─── 2. Icon at start ────────────────────────────────────────
export const IconicHeadingIconStart = () => (
  <div className="flex w-full items-center justify-center py-12 px-4">
    <IconicHeading
      className="text-4xl md:text-6xl font-medium tracking-tight"
      lines={[
        {
          text: "Ship faster",
          className: "-mb-2 md:-mb-3 text-foreground whitespace-nowrap",
          icon: <Rocket className="w-[60%] h-[60%]" />,
          iconPosition: "start",
          iconClassName: "bg-gradient-to-t from-orange-200 to-orange-400 border border-orange-300 shadow-sm",
        },
        { text: "than ever before", className: "text-foreground font-medium" },
      ]}
    />
  </div>
)

// ─── 3. Icon at end ──────────────────────────────────────────
export const IconicHeadingIconEnd = () => (
  <div className="flex w-full items-center justify-center py-12 px-4">
    <IconicHeading
      className="text-4xl md:text-6xl font-medium tracking-tight"
      lines={[
        {
          text: "Built for AI",
          className: "-mb-2 md:-mb-3 text-foreground whitespace-nowrap",
          icon: <Brain className="w-[60%] h-[60%]" />,
          iconPosition: "end",
          iconClassName: "bg-gradient-to-t from-violet-200 to-violet-400 border border-violet-300 shadow-sm",
        },
        { text: "products", className: "text-foreground" },
      ]}
    />
  </div>
)

// ─── 4. Three lines with icons ───────────────────────────────
export const IconicHeadingThreeLines = () => (
  <div className="flex w-full items-center justify-center py-12 px-4">
    <IconicHeading
      className="text-4xl md:text-6xl font-medium tracking-tight"
      lines={[
        {
          text: "Design fast",
          className: "-mb-2 md:-mb-3 text-foreground whitespace-nowrap",
          icon: <Sparkles className="w-[60%] h-[60%]" />,
          iconPosition: "end",
          iconClassName: "bg-gradient-to-t from-yellow-200 to-yellow-400 border border-yellow-300 shadow-sm",
        },
        {
          text: "ship faster",
          className: "-mb-2 md:-mb-3 text-foreground whitespace-nowrap",
          icon: <Zap className="w-[60%] h-[60%]" />,
          iconPosition: "start",
          iconClassName: "bg-gradient-to-t from-emerald-200 to-emerald-400 border border-emerald-300 shadow-sm",
        },
        { text: "grow forever", className: "text-foreground" },
      ]}
    />
  </div>
)

// ─── 5. Muted second line ────────────────────────────────────
export const IconicHeadingMuted = () => (
  <div className="flex w-full items-center justify-center py-12 px-2">
    <IconicHeading
      className="text-4xl md:text-6xl font-medium tracking-tight"
      lines={[
        {
          text: "Components",
          className: "-mb-2 md:-mb-3 text-foreground whitespace-nowrap",
          icon: <Code2 className="w-[60%] h-[60%]" />,
          iconPosition: "end",
          iconClassName: "bg-gradient-to-t from-green-200 to-zinc-400 border border-zinc-300 shadow-sm rotate-0",
        },
        {
          text: "that just work",
          className: "text-muted-foreground font-medium",
        },
      ]}
    />
  </div>
)

// ─── 6. Global / reach ───────────────────────────────────────
export const IconicHeadingGlobal = () => (
  <div className="flex w-full items-center justify-center py-12 px-4">
    <IconicHeading
      className="text-4xl md:text-6xl font-medium tracking-tight"
      lines={[
        {
          text: "Reach users",
          className: "-mb-2 md:-mb-3 text-foreground whitespace-nowrap",
          icon: <Globe className="w-[60%] h-[60%]" />,
          iconPosition: "end",
          iconClassName: "bg-gradient-to-t from-cyan-200 to-cyan-400 border border-cyan-300 shadow-sm rotate-6",
        },
        {
          text: "everywhere",
          className: "-mb-2 md:-mb-3 text-foreground whitespace-nowrap",
          icon: <ArrowRight className="w-[60%] h-[60%]" />,
          iconPosition: "start",
          iconClassName: "bg-gradient-to-t from-cyan-100 to-cyan-300 border border-cyan-200 shadow-sm",
        },
        { text: "instantly", className: "text-foreground" },
      ]}
    />
  </div>
)

// ─── 7. Loved by devs ────────────────────────────────────────
export const IconicHeadingLoved = () => (
  <div className="flex w-full items-center justify-center py-12 px-4">
    <IconicHeading
      className="text-4xl md:text-6xl font-medium tracking-tight"
      lines={[
        {
          text: "Loved by",
          className: "-mb-2 md:-mb-3 text-foreground whitespace-nowrap",
          icon: <Heart className="w-[60%] h-[60%]" />,
          iconPosition: "end",
          iconClassName: "bg-gradient-to-t from-rose-200 to-rose-400 border border-rose-300 shadow-sm",
        },
        {
          text: "10,000+ devs",
          className: "-mb-2 md:-mb-3 text-foreground whitespace-nowrap",
          icon: <Star className="w-[60%] h-[60%]" />,
          iconPosition: "start",
          iconClassName: "bg-gradient-to-t from-amber-200 to-amber-400 border border-amber-300 shadow-sm",
        },
        { text: "worldwide", className: "text-muted-foreground" },
      ]}
    />
  </div>
)