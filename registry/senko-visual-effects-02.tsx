"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type KitProps = {
  className?: string;
  children?: ReactNode;
};

type TextKitProps = KitProps & {
  label?: string;
};

export function FrostedGlassTile({ className, children }: KitProps) {
  return (
    <div className={cn("relative min-h-[220px] w-full overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]", className)}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-50 dark:from-white/10" />
      {children ?? <p className="relative text-center text-sm text-zinc-600 dark:text-zinc-300">Frosted glass tile</p>}
    </div>
  );
}

export function DashedEllipseOrbit({ className, children }: KitProps) {
  return (
    <div className={cn("relative flex min-h-[220px] w-full items-center justify-center overflow-hidden rounded-2xl bg-zinc-950", className)}>
      <div className="pointer-events-none absolute h-48 w-72 rounded-full border border-dashed border-violet-400/40 vk-animate-spin-slow" />
      <div className="pointer-events-none absolute h-36 w-52 rounded-full border border-dashed border-cyan-400/30 vk-animate-spin-reverse" />
      {children ? <div className="relative z-10 text-white">{children}</div> : null}
    </div>
  );
}

export function ConfettiSpeckles({ className, children }: KitProps) {
  const colors = ["#f472b6", "#22d3ee", "#a78bfa", "#fbbf24", "#34d399"];
  return (
    <div className={cn("relative min-h-[220px] w-full overflow-hidden rounded-2xl bg-background", className)}>
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-2 w-1 rounded-sm"
          style={{
            left: `${(i * 23) % 100}%`,
            top: `${-5 + (i % 5)}%`,
            backgroundColor: colors[i % colors.length],
            rotate: `${(i * 17) % 360}deg`,
          }}
          animate={{ y: ["0%", "120%"], opacity: [1, 0.8, 0] }}
          transition={{ duration: 3 + (i % 4) * 0.4, repeat: Infinity, delay: (i % 8) * 0.15, ease: "linear" }}
        />
      ))}
      {children ? <div className="relative z-10 flex min-h-[220px] items-center justify-center p-6">{children}</div> : null}
    </div>
  );
}

export function IridescentSheenOverlay({ className, children }: KitProps) {
  return (
    <div className={cn("relative min-h-[220px] w-full overflow-hidden rounded-2xl bg-zinc-900", className)}>
      <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-60 vk-animate-aurora" style={{ background: "linear-gradient(120deg, #6366f1, #ec4899, #22d3ee, #6366f1)", backgroundSize: "200% 200%" }} />
      <div className="absolute inset-0 bg-zinc-900/60" />
      {children ? <div className="relative z-10 flex min-h-[220px] items-center justify-center p-6 text-white">{children}</div> : null}
    </div>
  );
}

export function RippleGlassCard({ className, children }: KitProps) {
  return (
    <div className={cn("relative min-h-[220px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-lg", className)}>
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20"
        animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
      />
      {children ? <div className="relative z-10 flex min-h-[220px] items-center justify-center p-6">{children}</div> : null}
    </div>
  );
}

export function EchoPulseRings({ className, children }: KitProps) {
  return (
    <div className={cn("relative flex min-h-[220px] w-full items-center justify-center overflow-hidden rounded-2xl bg-background", className)}>
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full border border-indigo-500/30"
          style={{ width: 40 + i * 50, height: 40 + i * 50 }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.6 - i * 0.12, 0.2, 0.6 - i * 0.12] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
      {children ? <div className="relative z-10">{children}</div> : null}
    </div>
  );
}

export function GentleFloatShell({ className, children }: KitProps) {
  return (
    <div className={cn("relative flex min-h-[220px] w-full items-center justify-center overflow-hidden rounded-2xl bg-muted/30", className)}>
      <motion.div className="rounded-2xl border border-border bg-card px-10 py-8 shadow-lg" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
        {children ?? <span className="text-sm text-muted-foreground">Floating shell</span>}
      </motion.div>
    </div>
  );
}

export function SlowRotateDrift({ className, children }: KitProps) {
  return (
    <div className={cn("relative flex min-h-[220px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-violet-950 to-background", className)}>
      <motion.div className="rounded-xl border border-violet-500/30 bg-violet-950/40 px-8 py-6 backdrop-blur-sm" animate={{ rotate: [0, 2, -2, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}>
        {children ?? <span className="text-sm text-violet-200">Gentle drift</span>}
      </motion.div>
    </div>
  );
}

export function BreatheScaleCard({ className, children }: KitProps) {
  return (
    <div className={cn("relative flex min-h-[220px] w-full items-center justify-center rounded-2xl bg-background", className)}>
      <motion.div className="rounded-2xl bg-gradient-to-br from-indigo-500/20 to-pink-500/20 p-[1px]" animate={{ scale: [1, 1.04, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
        <div className="rounded-2xl bg-background px-10 py-8">{children ?? <span className="text-sm text-muted-foreground">Breathing card</span>}</div>
      </motion.div>
    </div>
  );
}

export function TiltHoverSurface({ className, children }: KitProps) {
  return (
    <div className={cn("relative flex min-h-[220px] w-full items-center justify-center perspective-[800px] rounded-2xl bg-zinc-100 dark:bg-zinc-950", className)}>
      <motion.div className="rounded-xl bg-white p-8 shadow-xl dark:bg-zinc-900" whileHover={{ rotateX: 8, rotateY: -8 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} style={{ transformStyle: "preserve-3d" }}>
        {children ?? <span className="text-sm text-muted-foreground">Hover tilt</span>}
      </motion.div>
    </div>
  );
}

export function MarqueeFadeStrip({ className, children }: KitProps) {
  return (
    <div className={cn("relative min-h-[220px] w-full overflow-hidden rounded-2xl border border-border bg-muted/20", className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
      <motion.div className="absolute left-0 top-1/2 flex -translate-y-1/2 gap-8 whitespace-nowrap px-4 text-xs font-medium uppercase tracking-widest text-muted-foreground" animate={{ x: [0, -400] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i}>Senko · Motion · Depth · Light ·</span>
        ))}
      </motion.div>
      {children ? <div className="relative z-20 flex min-h-[220px] items-center justify-center p-6">{children}</div> : null}
    </div>
  );
}

export function SparkleBadgeChip({ className, children }: KitProps) {
  return (
    <div className={cn("relative flex min-h-[220px] w-full items-center justify-center rounded-2xl bg-background", className)}>
      <motion.span className="relative inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-5 py-2 text-xs font-semibold text-amber-700 dark:text-amber-200" animate={{ boxShadow: ["0 0 0 0 rgba(251,191,36,0.4)", "0 0 24px 4px rgba(251,191,36,0)", "0 0 0 0 rgba(251,191,36,0.4)"] }} transition={{ duration: 2.2, repeat: Infinity }}>
        <span className="relative z-10">{children ?? "New drop"}</span>
        <motion.span className="absolute inset-0 rounded-full bg-amber-400/20" animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2.2, repeat: Infinity }} />
      </motion.span>
    </div>
  );
}

export function RadiantDotBadge({ className, children }: KitProps) {
  return (
    <div className={cn("relative flex min-h-[220px] w-full items-center justify-center rounded-2xl bg-zinc-950", className)}>
      <div className="relative flex items-center gap-3">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
        </span>
        <span className="text-sm text-emerald-100">{children ?? "Live"}</span>
      </div>
    </div>
  );
}

export function MiniEqBars({ className, children }: KitProps) {
  const heights = [12, 22, 16, 28, 14, 24, 18, 20];
  return (
    <div className={cn("relative flex min-h-[220px] w-full items-center justify-center gap-1 rounded-2xl bg-black", className)}>
      {heights.map((h, i) => (
        <motion.div
          key={i}
          className="w-1.5 rounded-full bg-gradient-to-t from-cyan-500 to-violet-400"
          animate={{ height: [h * 0.4, h, h * 0.5, h * 0.8, h * 0.4] }}
          transition={{ duration: 0.8 + i * 0.05, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 }}
        />
      ))}
      {children ? <div className="absolute bottom-6 text-xs text-zinc-500">{children}</div> : null}
    </div>
  );
}

export function BlinkCaretLine({ className, children }: KitProps) {
  return (
    <div className={cn("relative flex min-h-[220px] w-full items-center justify-center rounded-2xl bg-muted/30 font-mono text-sm", className)}>
      <span className="text-muted-foreground">{children ?? "await signal"}</span>
      <motion.span className="ml-0.5 inline-block h-4 w-0.5 bg-foreground" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }} />
    </div>
  );
}

export function ChromeGradientText({ className, label = "Chrome" }: TextKitProps) {
  return (
    <div className={cn("flex min-h-[220px] w-full items-center justify-center rounded-2xl bg-zinc-950", className)}>
      <span
        className="bg-clip-text text-4xl font-black tracking-tight text-transparent"
        style={{
          backgroundImage: "linear-gradient(180deg, #fff 0%, #a1a1aa 45%, #fff 50%, #71717a 100%)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export function GlitchSkewText({ className, label = "GLITCH" }: TextKitProps) {
  return (
    <div className={cn("relative flex min-h-[220px] w-full items-center justify-center overflow-hidden rounded-2xl bg-black", className)}>
      <motion.span className="relative text-4xl font-black text-white" animate={{ x: [0, -2, 2, 0], skewX: [0, 4, -3, 0] }} transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 2 }}>
        {label}
      </motion.span>
      <motion.span className="pointer-events-none absolute text-4xl font-black text-cyan-400/70 mix-blend-screen" animate={{ x: [0, 3, -2, 0], opacity: [0, 1, 0, 0] }} transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 1.8 }}>
        {label}
      </motion.span>
    </div>
  );
}

export function BlurInText({ className, label = "Reveal" }: TextKitProps) {
  return (
    <div className={cn("flex min-h-[220px] w-full items-center justify-center rounded-2xl bg-background", className)}>
      <motion.span className="text-3xl font-semibold text-foreground" initial={{ filter: "blur(12px)", opacity: 0 }} animate={{ filter: "blur(0px)", opacity: 1 }} transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1.5 }}>
        {label}
      </motion.span>
    </div>
  );
}

export function SplitHueText({ className, label = "Split" }: TextKitProps) {
  const half = Math.ceil(label.length / 2);
  const a = label.slice(0, half);
  const b = label.slice(half);
  return (
    <div className={cn("flex min-h-[220px] w-full items-center justify-center gap-1 rounded-2xl bg-muted/20 text-4xl font-bold", className)}>
      <span className="text-indigo-500">{a}</span>
      <span className="text-rose-500">{b}</span>
    </div>
  );
}

export function AnimatedUnderlineText({ className, label = "Underline" }: TextKitProps) {
  return (
    <div className={cn("flex min-h-[220px] w-full flex-col items-center justify-center rounded-2xl bg-background", className)}>
      <span className="relative text-2xl font-semibold text-foreground">
        {label}
        <motion.span
          className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-indigo-500 to-pink-500"
          style={{ transformOrigin: "0% 50%" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.8 }}
        />
      </span>
    </div>
  );
}

export function SweepHighlightText({ className, label = "Shine" }: TextKitProps) {
  return (
    <div className={cn("flex min-h-[220px] w-full items-center justify-center rounded-2xl bg-zinc-900", className)}>
      <span className="relative inline-block overflow-hidden text-3xl font-bold text-zinc-500">
        <span className="relative z-10">{label}</span>
        <motion.span
          className="pointer-events-none absolute top-0 bottom-0 z-0 w-[45%] bg-gradient-to-r from-transparent via-white/50 to-transparent"
          initial={{ left: "-45%" }}
          animate={{ left: ["-45%", "100%"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
        />
      </span>
    </div>
  );
}

export function NeonGlowText({ className, label = "NEON" }: TextKitProps) {
  return (
    <div className={cn("flex min-h-[220px] w-full items-center justify-center rounded-2xl bg-black", className)}>
      <span className="text-4xl font-black tracking-widest text-transparent" style={{ WebkitTextStroke: "1px #22d3ee", textShadow: "0 0 20px rgba(34,211,238,0.8), 0 0 40px rgba(34,211,238,0.4)" }}>
        {label}
      </span>
    </div>
  );
}

export function OrbitTrailDots({ className, children }: KitProps) {
  const n = 8;
  return (
    <div className={cn("relative flex min-h-[220px] w-full items-center justify-center overflow-hidden rounded-2xl bg-background", className)}>
      <motion.div className="relative h-28 w-28" animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}>
        {Array.from({ length: n }).map((_, i) => (
          <span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-indigo-500"
            style={{
              left: "50%",
              top: "50%",
              marginLeft: -4,
              marginTop: -4,
              transform: `rotate(${(360 / n) * i}deg) translateY(-48px)`,
            }}
          />
        ))}
      </motion.div>
      {children ? <div className="absolute bottom-8 text-xs text-muted-foreground">{children}</div> : null}
    </div>
  );
}

export function SonarRippleWell({ className, children }: KitProps) {
  return (
    <div className={cn("relative flex min-h-[220px] w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-950", className)}>
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full border border-sky-500/25"
          style={{ width: 48, height: 48 }}
          initial={{ scale: 0.5, opacity: 0.6 }}
          animate={{ scale: 5, opacity: 0 }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 1, ease: "easeOut" }}
        />
      ))}
      {children ? <div className="relative z-10 text-sky-100">{children}</div> : null}
    </div>
  );
}

export function MetaballFusionPair({ className, children }: KitProps) {
  return (
    <div className={cn("relative flex min-h-[220px] w-full items-center justify-center overflow-hidden rounded-2xl bg-white dark:bg-black", className)}>
      <div className="relative flex items-center justify-center" style={{ filter: "blur(12px) contrast(24)" }}>
        <motion.div className="absolute h-24 w-24 rounded-full bg-fuchsia-500" animate={{ x: [-30, 30, -30] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute h-24 w-24 rounded-full bg-violet-500" animate={{ x: [30, -30, 30] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-white/30 dark:bg-black/40" />
      {children ? <div className="relative z-10 text-sm font-medium text-foreground">{children}</div> : null}
    </div>
  );
}
