"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface AndroidMockupProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  screenClassName?: string
  scale?: number
}

const AndroidMockup = React.forwardRef<HTMLDivElement, AndroidMockupProps>(
  ({ className, children, screenClassName, scale = 1, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}
        className={cn("relative w-[375px] h-[773px] shrink-0", className)}
        {...props}
      >
        {/* ── Light mode SVG ───────────────────────────────────── */}
        <svg
          className="absolute inset-0 z-10 pointer-events-none block dark:hidden"
          width="375" height="773" viewBox="0 0 375 773"
          fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          {/* Chassis */}
          <rect width="373" height="773" rx="50" fill="#A1A1AA" />
          {/* Top shine on chassis */}
          <rect width="373" height="773" rx="50" fill="url(#lightRim)" />
          {/* Bezel */}
          <rect x="5" y="6" width="362" height="762" rx="44" fill="#18181B" />
          {/* Power button */}
          <path d="M375 294C375 292.895 374.105 292 373 292H371V351H373C374.105 351 375 350.105 375 349V294Z" fill="#A1A1AA" />
          {/* Volume button */}
          <path d="M375 143C375 141.895 374.105 141 373 141H371V243H373C374.105 243 375 242.105 375 241V143Z" fill="#A1A1AA" />
          {/* Screen */}
          <rect x="12" y="13" width="348" height="746" rx="37" fill="#F4F4F5" />
          {/* Camera */}
          <rect x="178" y="22" width="16" height="16" rx="8" fill="#18181B" fillOpacity="0.8" />
          {/* Camera glint */}
          <rect x="180" y="24" width="5" height="5" rx="2.5" fill="white" fillOpacity="0.25" />

          <defs>
            <linearGradient id="lightRim" x1="186" y1="0" x2="186" y2="773" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="white" stopOpacity="0.2" />
              <stop offset="10%" stopColor="white" stopOpacity="0" />
              <stop offset="90%" stopColor="white" stopOpacity="0" />
              <stop offset="100%" stopColor="black" stopOpacity="0.08" />
            </linearGradient>
          </defs>
        </svg>

        {/* ── Dark mode SVG ────────────────────────────────────── */}
        <svg
          className="absolute inset-0 z-10 pointer-events-none hidden dark:block"
          width="375" height="773" viewBox="0 0 375 773"
          fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          {/* Chassis */}
          <rect width="373" height="773" rx="50" fill="#3F3F46" />
          {/* Rim light */}
          <rect width="373" height="773" rx="50" fill="url(#darkRim)" />
          {/* Bezel */}
          <rect x="5" y="6" width="362" height="762" rx="44" fill="#09090B" />
          {/* Power button */}
          <path d="M375 294C375 292.895 374.105 292 373 292H371V351H373C374.105 351 375 350.105 375 349V294Z" fill="#52525B" />
          {/* Volume button */}
          <path d="M375 143C375 141.895 374.105 141 373 141H371V243H373C374.105 243 375 242.105 375 241V143Z" fill="#52525B" />
          {/* Screen */}
          <rect x="12" y="13" width="348" height="746" rx="37" fill="#09090B" />
          {/* Camera */}
          <rect x="178" y="22" width="16" height="16" rx="8" fill="#000000" fillOpacity="0.95" />
          {/* Camera glint */}
          <rect x="180" y="24" width="5" height="5" rx="2.5" fill="white" fillOpacity="0.15" />

          <defs>
            <linearGradient id="darkRim" x1="186" y1="0" x2="186" y2="773" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="white" stopOpacity="0.1" />
              <stop offset="8%" stopColor="white" stopOpacity="0" />
              <stop offset="92%" stopColor="white" stopOpacity="0" />
              <stop offset="100%" stopColor="white" stopOpacity="0.03" />
            </linearGradient>
          </defs>
        </svg>

        {/* ── Screen content ───────────────────────────────────── */}
        <div
          className={cn(
            "absolute left-[12px] top-[13px] w-[348px] h-[746px] rounded-[37px] overflow-hidden z-20",
            "bg-zinc-100 dark:bg-zinc-950",
            screenClassName
          )}
        >
          <div className="w-full h-full overflow-y-auto">
            {children}
          </div>
        </div>

        {/* Camera dot over content */}
        <div className="absolute top-[22px] left-[178px] w-[16px] h-[16px] rounded-full bg-zinc-900 dark:bg-black z-30" />
      </div>
    )
  }
)

AndroidMockup.displayName = "AndroidMockup"

export default AndroidMockup