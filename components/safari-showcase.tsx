"use client"

import React from "react"
import { BentoGrid, BentoCard } from "./bento-grid"
import { GlassCard } from "./glass-card"
import { GlassDock } from "./glass-dock"
import PillNavBar from "./GlassyTopBar"
import { GlassLogin } from "./glass-login"
import WavyGridBackground from "./WavyGridBackground"
import { IconicHeading } from "./Icon-ic-Heading"
import UnderlineHeading from "./underlined-heading"
import { BeveledBorderButton } from "./BeveledBorderButton"
import { LightTrailBadge } from "./LightTrailBadge"
import {
    Layout,
    Layers,
    Zap,
    Shield,
    Smartphone,
    Palette,
    Box,
    Compass,
    Bell,
    Search,
    Check,
    Terminal,
    ArrowUpRight,
    PieChart,
    Users
} from "lucide-react"

export function SafariShowcase() {
    return (
        <div className="relative w-full h-full overflow-hidden flex flex-col font-sans border-t border-black/5 dark:border-white/5">
            {/* 1. Component: WavyGridBackground */}
            <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
                <WavyGridBackground mode="contained" />
            </div>

            {/* 2. Component: GlassyTopBar (PillNavBar) */}
            <div className="relative z-50 h-20 flex items-center justify-center pt-8 overflow-visible">
                <PillNavBar
                    className="static scale-90 translate-y-[-10px]"
                    items={[
                        { label: "Components", href: "#" },
                        { label: "Dashboard", href: "#" },
                        { label: "Templates", href: "#" },
                    ]}
                    logo={
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center">
                                <Box className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-bold text-xs tracking-tight text-zinc-900 dark:text-white uppercase">TS-UI</span>
                        </div>
                    }
                    actions={[
                        <div key="action" className="px-3 py-1 bg-blue-600 text-[10px] font-bold text-white rounded-lg uppercase tracking-widest">v1.2</div>
                    ]}
                />
            </div>

            {/* Main Showcase Layout */}
            <div className="relative z-10 flex-1 overflow-y-auto px-10 pt-16 pb-32 custom-scrollbar">
                <div className="max-w-6xl mx-auto space-y-16">

                    {/* 3 & 4. Components: IconicHeading & UnderlineHeading */}
                    <div className="space-y-4 text-center">
                        <IconicHeading
                            lines={[
                                { text: "Component Registry", iconPosition: "end", icon: <Box className="w-4 h-4" /> }
                            ]}
                            className="text-4xl"
                        />
                        <div className="flex justify-center">
                            <UnderlineHeading
                                content={["The Modern Standard for SaaS UI"]}
                                highlightContent={["Modern Standard"]}
                                className="text-xl font-medium"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* 5. Component: GlassLogin */}
                        <div className="lg:col-span-4 flex items-center justify-center">
                            <div className="scale-[0.65] origin-center -my-20">
                                <GlassLogin />
                            </div>
                        </div>

                        {/* 6. Component: BentoGrid */}
                        <div className="lg:col-span-8">
                            <BentoGrid className="lg:grid-cols-4 auto-rows-[10rem]">
                                <BentoCard
                                    name="Motion Engine"
                                    description="Smooth, framer-motion powered transitions."
                                    Icon={Zap}
                                    className="col-span-2"
                                    background={<div className="absolute inset-0 bg-blue-500/5" />}
                                />
                                <BentoCard
                                    name="Glassy UI"
                                    description="Premium blur and transparency."
                                    Icon={Layers}
                                    className="col-span-2"
                                    background={<div className="absolute inset-0 bg-purple-500/5" />}
                                />
                                <BentoCard
                                    name="Theme Support"
                                    description="Dark mode out of the box."
                                    Icon={Palette}
                                    className="col-span-2"
                                    background={<div className="absolute inset-0 bg-orange-500/5" />}
                                />
                                <BentoCard
                                    name="SaaS Optimized"
                                    description="Built for modern workflows."
                                    Icon={Shield}
                                    className="col-span-2"
                                    background={<div className="absolute inset-0 bg-green-500/5" />}
                                />
                            </BentoGrid>
                        </div>
                    </div>

                    {/* 7. Component: GlassCard & LightTrailBadge & BeveledButton */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <GlassCard className="p-8 space-y-6">
                            <LightTrailBadge>
                                <span className="text-[10px] uppercase font-black tracking-widest px-2 py-0.5">Live Metrics</span>
                            </LightTrailBadge>
                            <div className="space-y-4">
                                <h4 className="text-2xl font-bold tracking-tight dark:text-white">Analytics Performance</h4>
                                <p className="text-sm text-zinc-500 font-medium">Beautifully integrated cards for your dashboard stats.</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <BeveledBorderButton title="View Details" className="py-2.5 px-6 text-[10px]" />
                                <button className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Dismiss</button>
                            </div>
                        </GlassCard>

                        <GlassCard className="p-8 flex flex-col justify-center items-center text-center space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center">
                                <Terminal className="w-6 h-6 text-blue-500" />
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-lg font-bold dark:text-white">CLI Integration</h4>
                                <pre className="text-[10px] font-mono p-3 rounded-lg bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                                    npx shadcn@latest add ts-ui
                                </pre>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </div>

            {/* 8. Component: GlassDock */}
            <div className="relative z-40 h-24 flex items-center justify-center overflow-visible mb-6 scale-90">
                <GlassDock
                    items={[
                        { label: "Home", icon: Layout, onClick: () => { } },
                        { label: "Mobile", icon: Smartphone, onClick: () => { } },
                        { label: "Settings", icon: Palette, onClick: () => { } },
                        { label: "Search", icon: Search, onClick: () => { } },
                        { label: "Inbox", icon: Bell, onClick: () => { } },
                    ]}
                />
            </div>

            <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
        }
      `}</style>
        </div>
    )
}
