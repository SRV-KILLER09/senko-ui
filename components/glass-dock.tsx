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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setMounted(true)
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (!mounted) return null

  const baseSize = isMobile ? 35 : 40
  const magnifiedSize = isMobile ? 45 : 56

  return (
    <div className="absolute bottom-4 left-0 right-0 flex justify-center z-30 px-4 pointer-events-none">
      <GlassContainer
        variant="default"
        className={cn(
          "flex flex-row items-center gap-2 md:gap-3 p-1.5 md:p-2 rounded-[50px] w-fit h-14 md:h-16 border-border/40 bg-card/10 backdrop-blur-xl shadow-2xl pointer-events-auto relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-b before:from-white/20 dark:before:from-white/7 before:to-transparent before:opacity-100 before:pointer-events-none",
          className
        )}
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {items.map((item, index) => (
          <IconItem
            key={index}
            mouseX={mouseX}
            item={item}
            baseSize={baseSize}
            magnifiedSize={magnifiedSize}
          />
        ))}
      </GlassContainer>
    </div>
  )
}

function IconItem({
  mouseX,
  item,
  baseSize,
  magnifiedSize,
}: {
  mouseX: MotionValue<number>
  item: DockItem
  baseSize: number
  magnifiedSize: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false) // Local state for isolation
  const Icon = item.icon

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { left: 0, width: 0 }
    return val - (bounds.left + bounds.width / 2)
  })

  const sizeTransform = useTransform(
    distance,
    [-150, 0, 150],
    [baseSize, magnifiedSize, baseSize]
  )
  
  const size = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center justify-center relative" // Removed 'group'
    >
      <Button
        size="icon"
        onClick={item.onClick}
        className={cn(
          "w-full h-full rounded-full flex items-center justify-center p-0 relative overflow-hidden",
          "border border-white/20 dark:border-white/10",
          "bg-gradient-to-b from-white/20 via-white/10 to-white/5 dark:from-white/8 dark:via-white/4 dark:to-transparent",
          "backdrop-blur-md shadow-lg transition-all duration-200",
          "hover:scale-[1.06] active:scale-[0.92]",
          isHovered ? "bg-white/25 dark:hover:bg-white/8" : ""
        )}
      >
        <Icon className={cn(
          "w-5 h-5 transition-colors",
          isHovered ? "text-foreground dark:text-white" : "text-foreground/70 dark:text-white/85"
        )} />
      </Button>

      {/* Tooltip logic using local state */}
      <div 
        className={cn(
          "absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded",
          "bg-popover/90 border border-border text-popover-foreground text-[10px]",
          "transition-all duration-200 pointer-events-none whitespace-nowrap shadow-xl",
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        )}
      >
        {item.label}
      </div>
    </motion.div>
  )
}