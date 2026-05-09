import {
    type ButtonHTMLAttributes,
    type CSSProperties,
    type FC,
} from "react"

import { cn } from "@/lib/utils"

export interface LightTrailBadgeProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    swipeWidth?: number
}

export const LightTrailBadge: FC<LightTrailBadgeProps> = ({
    children,
    className,
    swipeWidth = 100,
    ...props
}) => {
    return (
        <button
            style={
                {
                    "--swipe-width": `${swipeWidth}%`,
                    "--shiny-width": "120px",
                } as CSSProperties
            }
            className={cn(
                "group relative overflow-hidden",
                "px-5 py-2 rounded-full",
                "border border-foreground/10 bg-background/50 backdrop-blur-md shadow-sm",

                "text-foreground/90 inline-flex items-center gap-2",
                "text-lg md:text-xl font-bold tracking-[0.2em] uppercase",
                "transition-all duration-500 ease-out",
                "hover:border-cyan-500/30 hover:bg-background/80 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]",

                className
            )}
            {...props}
        >
            {/* sliding fill effect on hover */}
            <span
                className="
        absolute inset-0
        bg-foreground/10
        translate-x-[-100%]
        transition-transform duration-500 ease-in-out
        group-hover:translate-x-0
      "
            />

            {/* border beam rainbow effect */}
            <div className="absolute inset-0 rounded-full pointer-events-none p-[1.5px] [mask-image:linear-gradient(white,white),linear-gradient(white,white)] [mask-clip:content-box,border-box] [mask-composite:exclude]">
                <div className="absolute inset-[-50%] animate-[var(--animate-border-beam)] blur-[4px] opacity-100
bg-[conic-gradient(from_300deg,transparent_0deg,transparent_300deg,rgba(255,255,255,1)_320deg,rgba(236,72,153,1)_330deg,rgba(6,182,212,1)_340deg,rgba(255,255,255,1)_350deg,transparent_360deg)]"
                />
            </div>

            {/* content with shiny sweep effect ON LOAD */}
            <span
                className={cn(
                    "relative z-10",
                    "inline-flex items-center gap-1.5",
                    "animate-[var(--animate-shiny-text)] [background-size:var(--shiny-width)_100%] bg-clip-text [background-position:0_0] bg-no-repeat",
                    "bg-gradient-to-r from-transparent via-foreground/80 via-50% to-transparent",
                    "transition-colors duration-300"
                )}
            >
                {children}
            </span>
        </button>
    )
}