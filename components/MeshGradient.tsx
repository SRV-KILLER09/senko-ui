"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export const MeshGradient = ({
    children,
    className
}: {
    children?: React.ReactNode;
    className?: string
}) => {
    return (
        <div className={cn(
            "relative h-full w-full overflow-hidden bg-[#030303]",
            "shadow-[inset_0px_0px_100px_10px_rgba(255,255,255,0.08)]",
            className
        )}>
            <div className="absolute inset-0 z-20 border border-white/10 pointer-events-none" />

            <div className="absolute inset-0 z-10 shadow-[inset_0px_0px_180px_50px_rgba(255,255,255,0.03)] pointer-events-none" />

            <motion.div
                animate={{
                    x: [0, 80, -40, 0],
                    y: [0, 40, 80, 0],
                    rotate: [0, 90, 180, 360],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-violet-600/20 blur-[140px]"
            />

            <motion.div
                animate={{
                    x: [0, -100, 50, 0],
                    y: [0, 100, -50, 0],
                }}
                transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-15%] right-[-5%] w-[70%] h-[70%] rounded-full bg-cyan-400/15 blur-[160px]"
            />

            <motion.div
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.1, 0.2, 0.1],
                    x: [0, 50, 0]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-rose-500/10 blur-[120px] mix-blend-plus-lighter"
            />

            <motion.div
                animate={{
                    y: [0, -60, 0],
                    x: [0, 30, 0],
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[20%] left-[15%] w-[35%] h-[35%] rounded-full bg-emerald-500/10 blur-[130px]"
            />

            <div className="relative z-30 flex h-full w-full items-center justify-center">
                {children}
            </div>
        </div>
    )
}
