"use client"

import React from "react"
import {
    Zap,
    Activity,
    PieChart,
    Users,
    ArrowUpRight,
    Layout,
    Shield,
    Smartphone,
    Palette,
    Box,
    Plus,
    ArrowRight
} from "lucide-react"
import IPhoneMockup from "./iphone-mockup"
import { GlassCard } from "./glass-card"
import { LightTrailBadge } from "./LightTrailBadge"
import { BeveledBorderButton } from "./BeveledBorderButton"
import { MeshGradient } from "./MeshGradient"
import { IconicHeading } from "./Icon-ic-Heading"
import { GlassDock } from "./glass-dock"

export function IPhoneSaaSPreview({ scale = 1 }: { scale?: number }) {
    return (
        <div className="relative group">
            <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-1000" />
            <IPhoneMockup scale={scale}>
                <div className="w-full h-full bg-white dark:bg-[#050505] overflow-hidden flex flex-col font-sans">
                    {/* 1. Component: MeshGradient */}
                    <div className="absolute inset-0 z-0 opacity-30">
                        <MeshGradient />
                    </div>

                    {/* Status Bar Mock */}
                    <div className="relative z-10 h-12 flex items-center justify-between px-8 pt-6 opacity-60">
                        <span className="text-[11px] font-black text-zinc-900 dark:text-white">9:41</span>
                        <div className="flex gap-1.5 translate-y-[-1px]">
                            <div className="w-[18px] h-[9px] rounded-sm border border-black dark:border-white/50" />
                            <div className="w-[5px] h-[5px] bg-black dark:bg-white rounded-full translate-y-[2px]" />
                        </div>
                    </div>

                    {/* Header: IconicHeading snippet */}
                    <div className="relative z-10 px-6 pt-6 pb-2 space-y-4">
                        <div className="flex items-center justify-between">
                            <IconicHeading
                                lines={[{ text: "Nexus", iconPosition: "end", icon: <Box className="w-3 h-3" /> }]}
                                className="text-xl"
                            />
                            <div className="w-10 h-10 rounded-2xl bg-zinc-900/5 dark:bg-white/10 flex items-center justify-center">
                                <Plus className="w-5 h-5 text-zinc-500" />
                            </div>
                        </div>
                        {/* 2. Component: LightTrailBadge */}
                        <LightTrailBadge>
                            <span className="text-[8px] font-black tracking-widest uppercase px-3 py-1">System Active</span>
                        </LightTrailBadge>
                    </div>

                    {/* 3. Component Content Area: GlassCard focus */}
                    <div className="relative z-10 flex-1 overflow-y-auto px-6 space-y-6 pt-4 pb-24 custom-scrollbar">
                        <GlassCard className="p-6 space-y-4 relative overflow-hidden group/card">
                            <div className="flex items-center justify-between relative z-10">
                                <div className="p-2 bg-blue-500/10 rounded-xl">
                                    <Activity className="w-5 h-5 text-blue-600" />
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-green-500" />
                            </div>
                            <div className="space-y-1 relative z-10">
                                <div className="text-4xl font-black text-zinc-900 dark:text-white tracking-tighter">$12.4k</div>
                                <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest opacity-80">Daily Volume</div>
                            </div>
                        </GlassCard>

                        <div className="grid grid-cols-2 gap-4">
                            <GlassCard className="p-4 space-y-3">
                                <div className="p-2 bg-purple-500/10 rounded-lg w-fit">
                                    <PieChart className="w-4 h-4 text-purple-600" />
                                </div>
                                <div className="text-sm font-bold dark:text-white text-zinc-900">84%</div>
                                <div className="text-[9px] text-zinc-500 font-bold uppercase tracking-tight">Growth</div>
                            </GlassCard>
                            <GlassCard className="p-4 space-y-3 text-center flex flex-col items-center">
                                <div className="p-2 bg-green-500/10 rounded-lg w-fit">
                                    <Shield className="w-4 h-4 text-green-600" />
                                </div>
                                <div className="text-[9px] text-zinc-500 font-bold uppercase tracking-tight">Protected</div>
                            </GlassCard>
                        </div>

                        {/* 4. Component: BeveledBorderButton */}
                        <div className="space-y-4 pt-2">
                            <div className="flex items-center justify-between px-1">
                                <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Actions</span>
                                <ArrowRight className="w-3 h-3 text-zinc-400" />
                            </div>
                            <div className="space-y-3">
                                <BeveledBorderButton title="Launch Production" className="w-full text-[10px] py-3.5" />
                                <div className="w-full py-3.5 rounded-2xl border border-zinc-200 dark:border-white/10 flex items-center justify-center gap-2 text-[10px] font-bold text-zinc-900 dark:text-white bg-white/40 dark:bg-white/5 backdrop-blur-xl">
                                    <Box className="w-3.5 h-3.5" />
                                    Configure Node
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 5. Component: GlassDock (Mobile optimized) */}
                    <div className="relative z-20 h-20 bg-white/60 dark:bg-black/80 backdrop-blur-2xl border-t border-black/[0.05] dark:border-white/[0.05] flex items-center justify-center overflow-visible scale-75 origin-bottom">
                        <GlassDock
                            items={[
                                { label: "Home", icon: Layout, onClick: () => { } },
                                { label: "Alerts", icon: Zap, onClick: () => { } },
                                { label: "Vault", icon: Shield, onClick: () => { } },
                                { label: "Stats", icon: Activity, onClick: () => { } },
                            ]}
                        />
                    </div>
                </div>
            </IPhoneMockup>
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 0px;
                }
            `}</style>
        </div>
    )
}
