"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type KitProps = {
  className?: string;
  children?: ReactNode;
};

export function AuroraWashField({ className, children }: KitProps) {
  return (
    <div className={cn("relative isolate min-h-[220px] w-full overflow-hidden rounded-2xl bg-background", className)}>
      <div
        className="pointer-events-none absolute -inset-[40%] opacity-70 blur-3xl vk-animate-aurora"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, #6366f1 0deg, #ec4899 120deg, #22d3ee 240deg, #6366f1 360deg)",
        }}
      />
      <div className="absolute inset-0 bg-background/40 backdrop-blur-3xl" />
      {children ? <div className="relative z-10 flex h-full min-h-[220px] items-center justify-center p-6">{children}</div> : null}
    </div>
  );
}

export function DiagonalStripeField({ className, children }: KitProps) {
  return (
    <div className={cn("relative min-h-[220px] w-full overflow-hidden rounded-2xl bg-muted/30", className)}>
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-25 vk-animate-shift-bg"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 12px, rgba(99,102,241,0.15) 12px, rgba(99,102,241,0.15) 14px)",
          backgroundSize: "40px 40px",
        }}
      />
      {children ? <div className="relative z-10 flex min-h-[220px] items-center justify-center p-6">{children}</div> : null}
    </div>
  );
}

export function DotMatrixField({ className, children }: KitProps) {
  return (
    <div className={cn("relative min-h-[220px] w-full overflow-hidden rounded-2xl bg-zinc-950", className)}>
      <div
        className="pointer-events-none absolute inset-0 vk-animate-pulse-soft"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(129,140,248,0.35) 1px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/80" />
      {children ? <div className="relative z-10 flex min-h-[220px] items-center justify-center p-6 text-white">{children}</div> : null}
    </div>
  );
}

export function HexLatticeField({ className, children }: KitProps) {
  return (
    <div className={cn("relative min-h-[220px] w-full overflow-hidden rounded-2xl bg-background", className)}>
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12] dark:opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hex" width="28" height="49" patternUnits="userSpaceOnUse" patternTransform="scale(1) rotate(0)">
            <path
              d="M14 0L28 8.5v17L14 34 0 25.5v-17z"
              fill="none"
              stroke="currentColor"
              className="text-indigo-500"
              strokeWidth="0.8"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-fuchsia-500/10 vk-animate-pulse-soft" />
      {children ? <div className="relative z-10 flex min-h-[220px] items-center justify-center p-6">{children}</div> : null}
    </div>
  );
}

export function FilmGrainOverlay({ className, children }: KitProps) {
  return (
    <div className={cn("relative min-h-[220px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-300 dark:from-zinc-900 dark:to-zinc-800", className)}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-overlay vk-animate-grain"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      {children ? <div className="relative z-10 flex min-h-[220px] items-center justify-center p-6">{children}</div> : null}
    </div>
  );
}

export function OrbClusterGlow({ className, children }: KitProps) {
  return (
    <div className={cn("relative min-h-[220px] w-full overflow-hidden rounded-2xl bg-background", className)}>
      <motion.div
        className="absolute -left-1/4 top-1/4 h-48 w-48 rounded-full bg-violet-500/30 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-1/4 bottom-1/4 h-56 w-56 rounded-full bg-cyan-500/25 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -25, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/3 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      {children ? <div className="relative z-10 flex min-h-[220px] items-center justify-center p-6">{children}</div> : null}
    </div>
  );
}

export function SoftMeshWash({ className, children }: KitProps) {
  return (
    <div className={cn("relative min-h-[220px] w-full overflow-hidden rounded-2xl bg-background", className)}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(99,102,241,0.25),transparent_55%),radial-gradient(ellipse_at_80%_100%,rgba(236,72,153,0.2),transparent_50%)] vk-animate-mesh-drift" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />
      {children ? <div className="relative z-10 flex min-h-[220px] items-center justify-center p-6">{children}</div> : null}
    </div>
  );
}

export function RetroScanlines({ className, children }: KitProps) {
  return (
    <div className={cn("relative min-h-[220px] w-full overflow-hidden rounded-2xl bg-zinc-900", className)}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] vk-animate-scan"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.35) 2px, rgba(255,255,255,0.35) 4px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent" />
      {children ? <div className="relative z-10 flex min-h-[220px] items-center justify-center p-6 text-emerald-100">{children}</div> : null}
    </div>
  );
}

export function SpotlightConeSweep({ className, children }: KitProps) {
  return (
    <div className={cn("relative min-h-[220px] w-full overflow-hidden rounded-2xl bg-zinc-950", className)}>
      <div className="pointer-events-none absolute inset-0 bg-zinc-950" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[200%] w-32 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-white/25 via-white/5 to-transparent blur-md vk-animate-spin-slow" />
      {children ? <div className="relative z-10 flex min-h-[220px] items-center justify-center p-6 text-white">{children}</div> : null}
    </div>
  );
}

export function ConicRainbowHalo({ className, children }: KitProps) {
  return (
    <div className={cn("relative flex min-h-[220px] w-full items-center justify-center overflow-hidden rounded-2xl bg-background p-8", className)}>
      <div className="pointer-events-none absolute inset-[-20%] rounded-full bg-[conic-gradient(from_0deg,#f472b6,#a78bfa,#22d3ee,#34d399,#fbbf24,#f472b6)] opacity-30 blur-3xl vk-animate-spin-slow" />
      <div className="absolute inset-4 rounded-xl border border-white/10 bg-background/80 shadow-2xl backdrop-blur-md dark:bg-zinc-950/80" />
      {children ? <div className="relative z-10">{children}</div> : null}
    </div>
  );
}

export function ParallaxStarsField({ className, children }: KitProps) {
  const stars = Array.from({ length: 48 }, (_, i) => ({
    x: (i * 37) % 100,
    y: (i * 53) % 100,
    s: 0.5 + (i % 3) * 0.4,
    d: 2 + (i % 5),
  }));
  return (
    <div className={cn("relative min-h-[220px] w-full overflow-hidden rounded-2xl bg-zinc-950", className)}>
      {stars.map((st, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white"
          style={{ left: `${st.x}%`, top: `${st.y}%`, width: st.s, height: st.s }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: st.d, repeat: Infinity, delay: i * 0.08 }}
        />
      ))}
      {children ? <div className="relative z-10 flex min-h-[220px] items-center justify-center p-6 text-white">{children}</div> : null}
    </div>
  );
}

export function MorphBlobField({ className, children }: KitProps) {
  return (
    <div className={cn("relative min-h-[220px] w-full overflow-hidden rounded-2xl bg-background", className)}>
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-64 -translate-x-1/2 -translate-y-1/2 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-r from-indigo-400/40 to-fuchsia-400/40 blur-2xl vk-animate-morph" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-32 w-32 rounded-full bg-cyan-400/30 blur-2xl vk-animate-float-y" />
      {children ? <div className="relative z-10 flex min-h-[220px] items-center justify-center p-6">{children}</div> : null}
    </div>
  );
}

export function NeonWireGrid({ className, children }: KitProps) {
  return (
    <div className={cn("relative min-h-[220px] w-full overflow-hidden rounded-2xl bg-black", className)}>
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.4) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          boxShadow: "inset 0 0 80px rgba(34,211,238,0.15)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent" />
      {children ? <div className="relative z-10 flex min-h-[220px] items-center justify-center p-6 text-cyan-100">{children}</div> : null}
    </div>
  );
}

export function PastelMistWash({ className, children }: KitProps) {
  return (
    <div className={cn("relative min-h-[220px] w-full overflow-hidden rounded-2xl bg-rose-50 dark:bg-zinc-900", className)}>
      <div className="pointer-events-none absolute -left-20 top-0 h-full w-1/2 rounded-full bg-pink-200/50 blur-3xl dark:bg-fuchsia-900/30 vk-animate-float-y" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-full w-1/2 rounded-full bg-sky-200/50 blur-3xl dark:bg-cyan-900/25 vk-animate-float-y-reverse" />
      {children ? <div className="relative z-10 flex min-h-[220px] items-center justify-center p-6">{children}</div> : null}
    </div>
  );
}

export function CinematicVignetteBreath({ className, children }: KitProps) {
  return (
    <div className={cn("relative min-h-[220px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800 to-black", className)}>
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          boxShadow: "inset 0 0 120px rgba(0,0,0,0.85)",
        }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      {children ? <div className="relative z-10 flex min-h-[220px] items-center justify-center p-6 text-zinc-200">{children}</div> : null}
    </div>
  );
}

export function CrossingLaserBeams({ className, children }: KitProps) {
  return (
    <div className={cn("relative min-h-[220px] w-full overflow-hidden rounded-2xl bg-zinc-950", className)}>
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-indigo-400 to-transparent vk-animate-slide-x" />
        <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-fuchsia-400 to-transparent vk-animate-slide-y" />
      </div>
      {children ? <div className="relative z-10 flex min-h-[220px] items-center justify-center p-6 text-white">{children}</div> : null}
    </div>
  );
}

export function RipplePoolSurface({ className, children }: KitProps) {
  return (
    <div className={cn("relative flex min-h-[220px] w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-900", className)}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full border border-cyan-400/40"
          style={{ width: 60, height: 60 }}
          initial={{ scale: 0.3, opacity: 0.8 }}
          animate={{ scale: 6, opacity: 0 }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 1.2, ease: "easeOut" }}
        />
      ))}
      {children ? <div className="relative z-10 text-cyan-100">{children}</div> : null}
    </div>
  );
}

export function SmokeWispWash({ className, children }: KitProps) {
  return (
    <div className={cn("relative min-h-[220px] w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-950", className)}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(100,116,139,0.25),transparent_60%),radial-gradient(ellipse_at_70%_50%,rgba(71,85,105,0.2),transparent_55%)] vk-animate-mesh-drift" />
      {children ? <div className="relative z-10 flex min-h-[220px] items-center justify-center p-6">{children}</div> : null}
    </div>
  );
}

export function DiagonalShineBands({ className, children }: KitProps) {
  return (
    <div className={cn("relative min-h-[220px] w-full overflow-hidden rounded-2xl bg-muted/40", className)}>
      <div className="pointer-events-none absolute -inset-full rotate-12 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.12)_50%,transparent_60%)] vk-animate-shine-sweep" />
      {children ? <div className="relative z-10 flex min-h-[220px] items-center justify-center p-6">{children}</div> : null}
    </div>
  );
}

export function SparkleDustField({ className, children }: KitProps) {
  return (
    <div className={cn("relative min-h-[220px] w-full overflow-hidden rounded-2xl bg-indigo-950", className)}>
      {Array.from({ length: 32 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-amber-200"
          style={{ left: `${(i * 17) % 100}%`, top: `${(i * 31) % 100}%` }}
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2 + (i % 3), repeat: Infinity, delay: (i % 10) * 0.2 }}
        />
      ))}
      {children ? <div className="relative z-10 flex min-h-[220px] items-center justify-center p-6 text-amber-50">{children}</div> : null}
    </div>
  );
}

export function GlowingInsetFrame({ className, children }: KitProps) {
  return (
    <div className={cn("relative min-h-[220px] w-full rounded-2xl bg-zinc-900 p-[2px]", className)}>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 opacity-80 blur-sm vk-animate-spin-slow" />
      <div className="relative flex min-h-[218px] items-center justify-center rounded-[14px] bg-zinc-950 p-6">{children ?? <span className="text-sm text-zinc-400">Framed content</span>}</div>
    </div>
  );
}

export function ShimmerWashCard({ className, children }: KitProps) {
  return (
    <div className={cn("relative min-h-[220px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md dark:bg-white/[0.03]", className)}>
      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent vk-animate-shimmer-x" />
      {children ?? <p className="relative z-10 text-center text-sm text-muted-foreground">Glass shimmer surface</p>}
    </div>
  );
}

export function ConicBorderSpinnerPlate({ className, children }: KitProps) {
  return (
    <div className={cn("relative flex min-h-[220px] w-full items-center justify-center p-2", className)}>
      <div className="relative rounded-2xl p-[3px] vk-animate-spin-slow" style={{ background: "conic-gradient(from 0deg, #6366f1, #ec4899, #22d3ee, #6366f1)" }}>
        <div className="flex min-h-[200px] min-w-[200px] items-center justify-center rounded-[13px] bg-background px-6">{children ?? <span className="text-sm text-muted-foreground">Spinning rim</span>}</div>
      </div>
    </div>
  );
}

export function TechCornerBrackets({ className, children }: KitProps) {
  return (
    <div className={cn("relative min-h-[220px] w-full rounded-2xl border border-dashed border-zinc-600/50 bg-zinc-950/80 p-10", className)}>
      <span className="absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-cyan-400" />
      <span className="absolute right-3 top-3 h-6 w-6 border-r-2 border-t-2 border-cyan-400" />
      <span className="absolute bottom-3 left-3 h-6 w-6 border-b-2 border-l-2 border-cyan-400" />
      <span className="absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-cyan-400" />
      <div className="flex min-h-[140px] items-center justify-center">{children ?? <span className="text-xs tracking-[0.3em] text-cyan-500/80">HUD//FRAME</span>}</div>
    </div>
  );
}

export function NeonPulseFrame({ className, children }: KitProps) {
  return (
    <div className={cn("relative min-h-[220px] w-full rounded-2xl p-[1px]", className)}>
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{ boxShadow: "0 0 20px rgba(236,72,153,0.5), inset 0 0 20px rgba(236,72,153,0.15)" }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <div className="relative flex min-h-[218px] items-center justify-center rounded-2xl bg-black p-6">{children ?? <span className="font-medium text-pink-400">Neon pulse</span>}</div>
    </div>
  );
}
