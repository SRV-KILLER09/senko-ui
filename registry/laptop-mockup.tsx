"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, MotionValue } from "framer-motion"

interface LaptopMockupProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  screenClassName?: string
  scale?: number
  chassisOpacity?: MotionValue<number> | number
}

const LaptopMockup = React.forwardRef<HTMLDivElement, LaptopMockupProps>(
  ({ className, children, screenClassName, scale = 1, chassisOpacity = 1, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}
        className={cn("relative w-[1610px] h-[960px] shrink-0", className)}
        {...props}
      >
        <div
          className={cn(
            "absolute left-[150px] top-[4px] w-[1314px] h-[863px] rounded-t-[35px] overflow-hidden z-20",
            "bg-zinc-950 dark:bg-zinc-950",
            screenClassName
          )}
        >
          <div className="w-full h-full overflow-y-auto bg-background">
            {children}
          </div>
        </div>

        {/* ── Laptop Chassis SVG ────────────────────────────────── */}
        <motion.svg
          style={{ opacity: chassisOpacity }}
          className="absolute inset-0 z-10 pointer-events-none"
          width="1610"
          height="960"
          viewBox="0 0 1610 960"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Lid/Screen Frame Background */}
          <path
            d="M145 40C145 17.9086 162.909 0 185 0H1429C1451.09 0 1469 17.9086 1469 40V903H145V40Z"
            className="fill-zinc-300 dark:fill-zinc-800"
          />

          {/* Inner Bezel (The black border around the screen) */}
          <path
            d="M150 39C150 19.67 165.67 4 185 4H1429C1448.33 4 1464 19.67 1464 39V901H150V39Z"
            className="fill-black"
          />

          {/* Base/Bottom Body of Laptop */}
          <path
            d="M0 903H1610V927C1610 945.225 1595.23 960 1577 960H33C14.7746 960 0 945.225 0 927V903Z"
            className="fill-zinc-400 dark:fill-zinc-700"
          />

          {/* Trackpad / Lid Notch area */}
          <path
            d="M665 903H949V903C949 915.15 939.15 925 927 925H687C674.85 925 665 915.15 665 903V903Z"
            className="fill-zinc-500 dark:fill-zinc-600"
          />

          {/* Keyboard area/Lower Bezel shadow */}
          <path
            d="M150 867H1461V893C1461 896.866 1457.87 900 1454 900H157C153.134 900 150 896.866 150 893V867Z"
            fill="#242424"
            fillOpacity="0.8"
          />

          {/* Camera Lens (Optional add-on for realism) */}
          <circle cx="805" cy="22" r="4" fill="#18181B" />
          <circle cx="805" cy="22" r="1.5" fill="white" fillOpacity="0.2" />
        </motion.svg>
      </div>
    )
  }
)

LaptopMockup.displayName = "LaptopMockup"

export default LaptopMockup
