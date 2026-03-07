"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface IPhoneMockupProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  screenClassName?: string
  scale?: number
}

const IPhoneMockup = React.forwardRef<HTMLDivElement, IPhoneMockupProps>(
  ({ className, children, screenClassName, scale = 1, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}
        className={cn("relative w-[377px] h-[767px] shrink-0", className)}
        {...props}
      >
        {/* Outer Chassis */}
        <div className="absolute inset-x-[2px] inset-y-0 rounded-[65px] bg-zinc-300 dark:bg-zinc-700" />

        {/* Inner Bezel */}
        <div className="absolute inset-x-[6px] inset-y-[3px] rounded-[60px] bg-zinc-900 dark:bg-zinc-800 z-10" />

        {/* Screen */}
        <div
          className={cn(
            "absolute left-[17px] top-[15px] w-[343px] h-[736px] rounded-[48px] overflow-hidden",
            "bg-white dark:bg-zinc-950",
            "z-20",
            screenClassName
          )}
        >
          <div className="w-full h-full overflow-y-auto">
            {children}
          </div>
        </div>

        {/* Dynamic Island */}
        <div className="absolute top-[25px] left-1/2 -translate-x-1/2 w-[108px] h-[32px] rounded-[16px] bg-black z-50 backdrop-blur-md" />

        {/* Side Buttons */}
        <svg
          className="absolute inset-0 z-40 pointer-events-none"
          width="377"
          height="767"
          viewBox="0 0 377 767"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 148C0 146.895 0.895431 146 2 146H4V176H2C0.895431 176 0 175.105 0 174V148Z" className="fill-zinc-300 dark:fill-zinc-600"/>
          <path d="M0 203C0 201.895 0.895431 201 2 201H4V260H2C0.895431 260 0 259.105 0 258V203Z" className="fill-zinc-300 dark:fill-zinc-600"/>
          <path d="M0 277C0 275.895 0.895431 275 2 275H4V334H2C0.895431 334 0 333.105 0 332V277Z" className="fill-zinc-300 dark:fill-zinc-600"/>
          <path d="M377 242C377 240.895 376.105 240 375 240H373V333H375C376.105 333 377 332.105 377 331V242Z" className="fill-zinc-300 dark:fill-zinc-600"/>
        </svg>
      </div>
    )
  }
)

IPhoneMockup.displayName = "IPhoneMockup"

export default IPhoneMockup