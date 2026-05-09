"use client"

import React from "react"
import { 
  Sparkles, 
  Cpu, 
  Globe, 
  Terminal, 
  Layers, 
  Coins, 
  Trophy, 
  Gamepad2, 
  ShoppingBag,
  Zap
} from "lucide-react"
import { LightTrailBadge } from "@/registry/light-trail-badge"

// ─── 1. AI & SaaS Landing Pages ─────────────────────────────
export const SaaSBadges = () => (
  <div className="flex flex-col items-center justify-center py-12 px-4 gap-6 bg-zinc-950 rounded-3xl border border-white/5">
    <div className="flex flex-wrap justify-center gap-4">
      <LightTrailBadge>
        <Sparkles className="w-3 h-3" />
        New: Magic Edit
      </LightTrailBadge>
      <LightTrailBadge>
        <Cpu className="w-3 h-3" />
        GPT-4o Omnimodal
      </LightTrailBadge>
      <LightTrailBadge className="border-blue-500/20">
        Join the waitlist
      </LightTrailBadge>
    </div>
    <p className="text-zinc-500 text-xs font-mono uppercase tracking-tighter">AI & SaaS Landing Pages</p>
  </div>
)

// ─── 2. Modern Developer Portfolios ────────────────────────
export const PortfolioBadges = () => (
  <div className="flex flex-col items-center justify-center py-12 px-4 gap-6 bg-zinc-950 rounded-3xl border border-white/5">
    <div className="flex flex-wrap justify-center gap-4">
      <LightTrailBadge className="lowercase">
        <Terminal className="w-3 h-3" />
        nextjs
      </LightTrailBadge>
      <LightTrailBadge className="lowercase">
        typescript
      </LightTrailBadge>
      <LightTrailBadge className="border-emerald-500/30 text-emerald-400/90">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        Available for Hire
      </LightTrailBadge>
    </div>
    <p className="text-zinc-500 text-xs font-mono uppercase tracking-tighter">Developer Portfolios</p>
  </div>
)

// ─── 3. Crypto & Web3 Dashboards ───────────────────────────
export const Web3Badges = () => (
  <div className="flex flex-col items-center justify-center py-12 px-4 gap-6 bg-zinc-900/50 rounded-3xl border border-white/5">
    <div className="flex flex-wrap justify-center gap-4">
      <LightTrailBadge className="bg-indigo-500/10 border-indigo-500/20">
        <Coins className="w-3 h-3 text-indigo-400" />
        Transaction Confirmed
      </LightTrailBadge>
      <LightTrailBadge>
        <Globe className="w-3 h-3" />
        Mainnet
      </LightTrailBadge>
      <LightTrailBadge className="border-amber-500/40 text-amber-400">
        Whale Tier
      </LightTrailBadge>
    </div>
    <p className="text-zinc-500 text-xs font-mono uppercase tracking-tighter">Crypto & Web3</p>
  </div>
)

// ─── 4. Gaming & Esport Platforms ──────────────────────────
export const GamingBadges = () => (
  <div className="flex flex-col items-center justify-center py-12 px-4 gap-6 bg-zinc-950 rounded-3xl border border-white/5">
    <div className="flex flex-wrap justify-center gap-4">
      <LightTrailBadge className="border-purple-500/50 text-purple-300">
        <Trophy className="w-3 h-3" />
        Grandmaster
      </LightTrailBadge>
      <LightTrailBadge className="border-red-500/40 text-red-400">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
        Live Now
      </LightTrailBadge>
      <LightTrailBadge>
        <Gamepad2 className="w-3 h-3" />
        Daily Unlock
      </LightTrailBadge>
    </div>
    <p className="text-zinc-500 text-xs font-mono uppercase tracking-tighter">Gaming & Esports</p>
  </div>
)

// ─── 5. Premium E-commerce ─────────────────────────────────
export const EcommerceBadges = () => (
  <div className="flex flex-col items-center justify-center py-12 px-4 gap-6 bg-zinc-950 rounded-3xl border border-white/5">
    <div className="flex flex-wrap justify-center gap-4">
      <LightTrailBadge className="tracking-widest">
        Limited Edition
      </LightTrailBadge>
      <LightTrailBadge className="bg-white/5">
        <ShoppingBag className="w-3 h-3" />
        Staff Pick
      </LightTrailBadge>
      <LightTrailBadge className="border-foreground text-foreground">
        <Zap className="w-3 h-3" />
        Premium User
      </LightTrailBadge>
    </div>
    <p className="text-zinc-500 text-xs font-mono uppercase tracking-tighter">Premium E-commerce</p>
  </div>
)

// ─── Final Page Layout ────────────────────────────────────
export default function LightTrailShowcase() {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-24 space-y-12">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold tracking-tighter mb-4 italic">Light Trail Showcase</h1>
        <p className="text-zinc-400">Micro-interactions for high-conversion interfaces. Interactive badges with dynamic border beams and text sweeps.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <SaaSBadges />
        <PortfolioBadges />
        <Web3Badges />
        <GamingBadges />
        <div className="md:col-span-2">
          <EcommerceBadges />
        </div>
      </div>
    </div>
  )
}