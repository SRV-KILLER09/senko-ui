import { type ReactNode, type ElementType } from "react"
import { motion, type HTMLMotionProps } from "framer-motion"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface BentoGridProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends HTMLMotionProps<"div"> {
  name: string
  description: string
  background?: ReactNode
  Icon: ElementType
  href?: string
  cta?: string
}

export const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <motion.div
      className={cn(
        "grid w-full grid-cols-1 md:grid-cols-4 lg:grid-cols-8",
        "auto-rows-[14rem] gap-6",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export const BentoCard = ({
  name,
  description,
  background,
  Icon,
  href = "#",
  cta = "Learn more",
  className,
  ...props
}: BentoCardProps) => {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden rounded-3xl",
        "border border-border bg-card",
        "flex flex-col justify-between",
        "p-6",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-2xl",
        className
      )}
      {...props}
    >
      {background && (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500">
          {background}
        </div>
      )}

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/95 via-background/60 to-transparent" />

      <div className="relative z-20 flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border bg-muted">
          <Icon className="h-5 w-5 text-foreground" />
        </div>
      </div>

      <div className="relative z-20 space-y-2">
        <h3 className="text-lg font-semibold tracking-tight">
          {name}
        </h3>

        <p className="text-sm text-muted-foreground max-w-[260px]">
          {description}
        </p>

        <Button
          variant="ghost"
          size="sm"
          asChild
          className="px-0 text-primary hover:text-primary/80 hover:bg-transparent"
        >
          <a href={href} className="flex items-center gap-1">
            {cta}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </motion.div>
  )
}