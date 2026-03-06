"use client"

import { useRef, type ComponentPropsWithoutRef, type ReactNode } from "react"
import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

/* ────────────────────────────────────────────────────────────── */
/* Bento Grid                                                      */
/* ────────────────────────────────────────────────────────────── */

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

export function BentoGrid({ children, className, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid w-full",
        "grid-cols-1 sm:grid-cols-2 md:grid-cols-12",
        "auto-rows-[240px] md:auto-rows-[280px] lg:auto-rows-[320px]",
        "gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

/* ────────────────────────────────────────────────────────────── */
/* Bento Card                                                      */
/* ────────────────────────────────────────────────────────────── */

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className?: string
  background: ReactNode
  Icon: React.ElementType
  description: string
  href?: string
  cta?: string
  glowColor?: string
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  glowColor = "255,255,255",
  ...props
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    card.style.setProperty("--x", `${e.clientX - rect.left}px`)
    card.style.setProperty("--y", `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl",
        "border border-border bg-card transition-all duration-300",
        className
      )}
      style={{ "--x": "50%", "--y": "50%" } as React.CSSProperties}
      {...props}
    >
      {/* Cursor Glow Border */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(420px circle at var(--x) var(--y),
            rgba(${glowColor},0.35) 0%,
            rgba(${glowColor},0.25) 25%,
            rgba(${glowColor},0.15) 40%,
            transparent 70%)`,
        }}
      />

      {/* Inner Card */}
      <div className="relative m-[1px] h-[calc(100%-2px)] w-[calc(100%-2px)] rounded-[11px] bg-card overflow-hidden flex flex-col justify-between z-20">

        {/* Background visuals */}
        <div className="absolute inset-0 z-0">
          {background}
        </div>

        {/* 
          VIGNETTE — uses currentColor trick via CSS vars so it works in both themes.
          In light mode: bg-card resolves to white → vignette is white edges.
          In dark mode: bg-card resolves to near-black → vignette is dark edges.
          Both look correct because we're just fading TO the card background color.
        */}

        {/* Strong edge vignette — corners and sides */}
        <div
          className="pointer-events-none absolute inset-0 z-[6] rounded-[11px] transition-opacity duration-500 group-hover:opacity-60"
          style={{
            background: `
              radial-gradient(
                ellipse 100% 100% at center,
                transparent 0%,
                transparent 30%,
                hsl(var(--card) / 0.5) 55%,
                hsl(var(--card) / 0.8) 75%,
                hsl(var(--card) / 0.97) 100%
              )
            `,
          }}
        />

        {/* Extra corner darkening */}
        <div
          className="pointer-events-none absolute inset-0 z-[6] rounded-[11px] opacity-80 transition-opacity duration-500 group-hover:opacity-40"
          style={{
            background: `
              radial-gradient(ellipse 60% 60% at 0% 0%,   hsl(var(--card) / 0.8) 0%, transparent 60%),
              radial-gradient(ellipse 60% 60% at 100% 0%,  hsl(var(--card) / 0.8) 0%, transparent 60%),
              radial-gradient(ellipse 60% 60% at 0% 100%,  hsl(var(--card) / 0.8) 0%, transparent 60%),
              radial-gradient(ellipse 60% 60% at 100% 100%,hsl(var(--card) / 0.8) 0%, transparent 60%)
            `,
          }}
        />

        {/* Edge gloss highlight — subtle rim light */}
        <div
          className="pointer-events-none absolute inset-0 z-[7] rounded-[11px] opacity-20 dark:opacity-30 transition-opacity duration-500 group-hover:opacity-40"
          style={{
            background: `
              linear-gradient(to bottom,
                hsl(var(--foreground) / 0.1) 0%,
                transparent 12%,
                transparent 88%,
                hsl(var(--foreground) / 0.04) 100%),
              linear-gradient(to right,
                hsl(var(--foreground) / 0.06) 0%,
                transparent 8%,
                transparent 92%,
                hsl(var(--foreground) / 0.06) 100%)
            `,
          }}
        />

        {/* Bottom fade for text readability */}
        <div
          className="pointer-events-none absolute inset-0 z-[5] transition-opacity duration-300 group-hover:opacity-60"
          style={{
            background: `
              linear-gradient(
                to top,
                hsl(var(--card) / 0.98) 0%,
                hsl(var(--card) / 0.85) 20%,
                hsl(var(--card) / 0.4)  45%,
                transparent 100%
              )
            `,
          }}
        />

        {/* Content */}
        <div className="relative z-30 flex flex-col h-full p-4 md:p-6">

          {/* Icon */}
          <div className="mb-4">
            <div className="
              inline-flex p-3 rounded-lg
              bg-muted/60 backdrop-blur-md
              border border-border
              transition-all duration-300
              group-hover:border-border/80
              group-hover:bg-muted
            ">
              <Icon className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
            </div>
          </div>

          {/* Text */}
          <div className="mt-auto flex flex-col gap-1 transition-all duration-300 group-hover:-translate-y-6">
            <h3 className="text-lg md:text-xl font-semibold tracking-tight text-foreground">
              {name}
            </h3>
            <p className="max-w-xs text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors">
              {description}
            </p>
          </div>

          {/* CTA */}
          {href && cta && (
            <div className="
              pointer-events-none absolute bottom-0 left-0 w-full
              translate-y-10 flex items-center p-4 md:p-6
              opacity-0 transition-all duration-300
              group-hover:translate-y-0 group-hover:opacity-100
              z-40
            ">
              <Button
                variant="link"
                asChild
                size="sm"
                className="pointer-events-auto p-0 h-auto no-underline"
                style={{ color: `rgb(${glowColor})` }}
              >
                <Link href={href}>
                  {cta}
                  <ArrowRightIcon className="ms-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}