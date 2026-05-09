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
                "px-4 py-1.5 rounded-full",
                "border border-foreground/10 bg-background/60 backdrop-blur-md",

                "text-foreground/70 inline-flex items-center gap-2",
                "text-sm font-semibold tracking-widest uppercase",
                "transition-all duration-300 ease-out",
                "hover:border-foreground/20 hover:bg-background/80",

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
                <div className="absolute inset-[-50%] animate-[var(--animate-border-beam)] blur-sm opacity-100
bg-[conic-gradient(from_300deg,transparent_0deg,transparent_300deg,rgba(255,255,255,1)_320deg,rgba(168,85,247,1)_330deg,rgba(59,130,246,1)_340deg,rgba(255,255,255,1)_350deg,transparent_360deg)]"
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