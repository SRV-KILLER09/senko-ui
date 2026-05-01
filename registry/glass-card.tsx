import { cn } from "@/lib/utils"
import { cva } from "class-variance-authority"
import * as React from "react"

const GlassCardVariants = cva(
  cn(
    "relative flex flex-col gap-6 rounded-2xl p-6 backdrop-blur-xl",
    "border border-black/10 dark:border-white/10",
    "bg-white/40 dark:bg-black/20",
    "shadow-xl overflow-hidden text-foreground",
    "before:absolute before:inset-0 before:-z-10",
    "before:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.4),transparent_50%)]",
    "dark:before:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_50%)]"
  )
)

const GlassCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="glass-card"
      className={cn(GlassCardVariants(), className)}
      {...props}
    />
  )
)
GlassCard.displayName = "GlassCard"

const GlassCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="glass-card-header"
      className={cn(
        "grid auto-rows-min gap-1.5 pb-6 border-b relative",
        "border-black/10 dark:border-white/10",
        className
      )}
      {...props}
    />
  )
)
GlassCardHeader.displayName = "GlassCardHeader"

const GlassCardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="glass-card-title"
      className={cn(
        "text-xl font-semibold tracking-tight",
        "drop-shadow-sm",
        className
      )}
      {...props}
    />
  )
)
GlassCardTitle.displayName = "GlassCardTitle"

const GlassCardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="glass-card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
)
GlassCardDescription.displayName = "GlassCardDescription"

const GlassCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="glass-card-content"
      className={cn("px-0", className)}
      {...props}
    />
  )
)
GlassCardContent.displayName = "GlassCardContent"

const GlassCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="glass-card-footer"
      className={cn("flex items-center pt-2", className)}
      {...props}
    />
  )
)
GlassCardFooter.displayName = "GlassCardFooter"

export {
  GlassCard,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
  GlassCardContent,
  GlassCardFooter,
}