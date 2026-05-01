import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { ArrowUpRight, Icon, LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'


interface BeveledBorderButtonProps{
    title?:string;
    className?:string;
    icon?:LucideIcon;
    onClick?:()=>void
}
export const BeveledBorderButton = ({title,className,icon:Icon=ArrowUpRight,onClick}:BeveledBorderButtonProps) => {
    const MotionIcon=motion(Icon)
  return (
    <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className={cn("relative z-10 bg-neutral-950 hover:bg-neutral-900 text-white text-sm font-medium transition-colors duration-200 rounded-full px-5 py-2 gap-2 flex items-center justify-center border-transparent shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset] cursor-pointer",className)}
          onClick={onClick}
        >
          {title} <MotionIcon
            size={16}
            variants={{
              rest: { rotate: 0, scale: 1 },
              hover: { rotate: 45, scale: 1.06 },
            }}
            transition={{ type: "spring", stiffness: 900, damping: 15 }} />
        </motion.div>
  )
}
