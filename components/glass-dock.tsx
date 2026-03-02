"use client"

import { useRef, useEffect, useState } from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react"
import { cn } from "@/lib/utils"
import { type LucideIcon } from "lucide-react"
import { GlassContainer } from "@/components/glass-container"
import { Button } from "@/components/ui/button"

interface DockItem {
  label: string
  icon: LucideIcon
  onClick: () => void
}

interface GlassDockProps {
  items: DockItem[]
  className?: string
}

export const GlassDock = ({ items, className }: GlassDockProps) => {
  const mouseX = useMotionValue(Infinity)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute bottom-4 left-0 right-0 flex justify-center z-30 px-4 pointer-events-none">
      <GlassContainer
        variant="default"
        className={cn(
          "flex flex-row items-center gap-3 p-2 rounded-[50px] w-fit h-16 border-border/40 bg-card/10 backdrop-blur-xl shadow-2xl pointer-events-auto relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-b before:from-white/20 dark:before:from-white/7 before:to-transparent before:opacity-100 before:pointer-events-none",
          className
        )}
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {items.map((item, index) => (
          <IconItem key={index} mouseX={mouseX} item={item} />
        ))}
      </GlassContainer>
    </div>
  )
}

function IconItem({
  mouseX,
  item,
}: {
  mouseX: MotionValue<number>
  item: DockItem
}) {
  const ref = useRef<HTMLDivElement>(null)
  const Icon = item.icon

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { left: 0, width: 0 }
    return val - (bounds.left + bounds.width / 2)
  })

  const sizeTransform = useTransform(distance, [-150, 0, 150], [40, 56, 40])
  const size = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      className="flex items-center justify-center relative group"
    >
      <Button
        size="icon"
        onClick={item.onClick}
        className="
  w-full h-full rounded-full flex items-center justify-center p-0
  relative overflow-hidden

  border border-white/30 dark:border-white/15
  bg-gradient-to-b
  from-white/35 via-white/20 to-white/10
  dark:from-white/12 dark:via-white/6 dark:to-transparent

  backdrop-blur-md
  shadow-lg

  transition-all duration-200
  hover:scale-[1.06]
  active:scale-[0.92]

  hover:bg-white/40 dark:hover:bg-white/10

  before:absolute before:inset-0
  before:bg-gradient-to-tr
  before:from-transparent before:via-white/20 before:to-transparent
  before:opacity-0 hover:before:opacity-100
  before:transition-opacity
  "
      >
        <Icon className="w-5 h-5 text-foreground dark:text-white/85 group-hover:text-foreground dark:group-hover:text-white transition-colors" />
      </Button>
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-popover/90 border border-border text-popover-foreground text-[10px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
        {item.label}
      </div>
    </motion.div>
  )
}