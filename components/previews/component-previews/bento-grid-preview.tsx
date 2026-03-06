
"use client"

import { BentoGrid, BentoCard } from "@/components/bento-grid"
import {
  Search,
  Share2,
  Bell,
  Zap,
} from "lucide-react"

export default function BentoGridPreview() {
  return (
      <div className="w-full max-w-2xl z-0">
        <BentoGrid className="h-full md:grid-cols-5 md:grid-rows-2 gap-4">

          {/* Tagging */}
          <BentoCard
            className="md:col-span-3 md:row-span-1"
            name="Tagging"
            description="Neural auto-organization for your files."
            background={
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="
                  relative w-2/3 aspect-video
                  bg-muted/40
                  backdrop-blur-xl
                  border border-border
                  rounded-xl
                  p-4
                  shadow-xl
                  transition-all duration-500
                  group-hover:scale-110
                ">
                  <div className="space-y-2">
                    <div className="h-1.5 w-full rounded bg-muted" />
                    <div className="h-1.5 w-[70%] rounded bg-violet-500/20" />

                    <div className="flex gap-1 mt-4">
                      <div className="h-4 w-10 rounded bg-violet-500/10 border border-violet-500/20" />
                      <div className="h-4 w-10 rounded bg-muted" />
                    </div>
                  </div>
                </div>
              </div>
            }
            Icon={Search}
            href="/"
            cta="Explore"
            glowColor="139, 92, 246"
          />

          {/* Network */}
          <BentoCard
            className="md:col-span-2 md:row-span-1"
            name="Network"
            description="Visualize relationships between notes."
            background={
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-32 w-32">

                  <div className="
                    absolute top-1/2 left-1/2
                    -translate-x-1/2 -translate-y-1/2
                    w-10 h-10
                    rounded-full
                    bg-violet-500/20
                    border border-violet-500/40
                    flex items-center justify-center
                    backdrop-blur-md
                    z-10
                    transition-transform duration-500
                    group-hover:scale-110
                  ">
                    <Share2 size={16} className="text-violet-500" />
                  </div>

                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="
                        absolute w-6 h-6
                        rounded-lg
                        bg-muted
                        border border-border
                        transition-all duration-700
                      "
                      style={{
                        top: `${50 + 35 * Math.sin((i * 90 * Math.PI) / 180)}%`,
                        left: `${50 + 35 * Math.cos((i * 90 * Math.PI) / 180)}%`,
                      }}
                    />
                  ))}
                </div>
              </div>
            }
            Icon={Share2}
            href="/"
            cta="View Map"
            glowColor="139, 92, 246"
          />

          {/* Alerts */}
          <BentoCard
            className="md:col-span-2 md:row-span-1"
            name="Alerts"
            description="Smart nudges at the right moment."
            background={
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <div className="w-full space-y-2 opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105">

                  <div className="
                    bg-muted/60
                    backdrop-blur-md
                    border border-border
                    p-2
                    rounded-lg
                    flex items-center gap-3
                  ">
                    <div className="w-6 h-6 rounded-full bg-rose-500/20 border border-rose-500/20 flex items-center justify-center">
                      <Bell size={10} className="text-rose-500" />
                    </div>

                    <div className="h-1.5 w-16 bg-muted-foreground/40 rounded" />
                  </div>

                  <div className="
                    bg-muted/60
                    backdrop-blur-md
                    border border-border
                    p-2
                    rounded-lg
                    flex items-center gap-3
                    translate-x-2
                  ">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/20 flex items-center justify-center">
                      <Zap size={10} className="text-blue-500" />
                    </div>

                    <div className="h-1.5 w-12 bg-muted-foreground/40 rounded" />
                  </div>
                </div>
              </div>
            }
            Icon={Bell}
            href="/"
            cta="Manage"
            glowColor="244, 63, 94"
          />

          {/* Flows */}
          <BentoCard
            className="md:col-span-3 md:row-span-1"
            name="Flows"
            description="Automate repetitive task chains."
            background={
              <div className="absolute inset-0 flex items-center justify-center">
                <Zap
                  size={80}
                  strokeWidth={0.5}
                  className="
                    text-yellow-500/10
                    transition-all duration-700
                    group-hover:text-yellow-500/30
                    group-hover:scale-125
                  "
                />
              </div>
            }
            Icon={Zap}
            href="/"
            cta="Build"
            glowColor="234, 179, 8"
          />

        </BentoGrid>
      </div>
  )
}
