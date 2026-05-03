"use client"

import type { ReactNode } from "react"

interface AuroraButtonProps {
  label?: ReactNode
  children?: ReactNode
  onClick?: () => void
  duration?: string
  className?: string
  beamColor?: string
}

export default function AuroraButton({
  label = "Click me",
  children,
  onClick,
  duration = "3s",
  className = "",
  beamColor = "139, 92, 246",
}: AuroraButtonProps) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer shadow-[0_0_20px_6px_rgba(0,0,0,0.15)] dark:shadow-[0_0_30px_10px_rgba(255,255,255,0.3)] relative rounded-full p-[2px] bg-linear-to-b from-foreground/70 to-foreground dark:bg-linear-to-tr dark:from-foreground dark:to-pink-200 overflow-hidden ${className}`}
    >

      <div
        className="absolute inset-[-100%] animate-spin pointer-events-none"
        style={{
          animationDuration: duration,
          background: `conic-gradient(
            from 0deg,
            transparent 0%,
            transparent 50%,
            rgba(${beamColor}, 0) 60%,
            rgba(${beamColor}, 0.3) 70%,
            rgba(${beamColor}, 0.6) 85%,
            rgba(255, 255, 255, 1) 96%,
            transparent 100%
          )`,
        }}
      />

      <div className="relative rounded-full flex justify-center items-center w-full py-2 px-6 bg-linear-to-b from-zinc-800 to-zinc-700 dark:bg-linear-to-tr dark:from-foreground/60 dark:to-pink-200 text-white dark:text-background font-medium gap-2">
        {children || label}
      </div>
    </div>
  )
}