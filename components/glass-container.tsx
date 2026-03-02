"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const glassDockVariants = cva(
  "relative flex flex-row items-center justify-center gap-3 p-2 w-fit h-16 rounded-[50px] shadow-2xl transition-all duration-300",
  {
    variants: {
      variant: {
        default: "",
        animated: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface GlassContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof glassDockVariants> {
  children: React.ReactNode
  blur?: number
  opacity?: number
  speed?: number
  colorFrom?: string
  colorTo?: string
}

export const GlassContainer = ({
  children,
  className,
  variant,
  blur = 15,
  opacity = 0.08,
  speed = 1,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  ...props
}: GlassContainerProps) => {
  return (
    <div
      className={cn(glassDockVariants({ variant, className }))}
      {...props}
    >
      {variant === "animated" && (
        <span
          className="animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[var(--color-from)] via-[var(--color-to)] to-[var(--color-from)] bg-[length:var(--bg-size)_100%] p-[1px]"
          style={{
            "--bg-size": `${speed * 300}%`,
            "--color-from": colorFrom,
            "--color-to": colorTo,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "destination-out",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "subtract",
            WebkitClipPath: "padding-box",
          } as React.CSSProperties}
        />
      )}
      <div
        className="absolute inset-0 -z-10 rounded-[inherit]"
        style={{
          backdropFilter: `blur(${blur}px)`,
          backgroundColor: `rgba(255, 255, 255, 0.04)`,
        }}
      />

      <div
        className="absolute inset-0 z-0 pointer-events-none rounded-[inherit] border border-white/10"
        style={{
          background: `linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.01)) border-box`,
          WebkitMask: `linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: "destination-out",
          maskComposite: "exclude",
        }}
      />

      <div className="relative z-20 flex flex-row items-center gap-3 px-2">
        {children}
      </div>
    </div>
  )
}