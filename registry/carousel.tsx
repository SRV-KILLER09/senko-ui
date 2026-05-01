import { cn } from "@/lib/utils"
import { motion } from "motion/react";
import * as React from "react"

function Carousel({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="carousel"
            className={cn("relative w-full overflow-hidden py-4")}{...props} />
    )

}

interface CarouselRowProps extends React.ComponentProps<typeof motion.div> {
    direction?: "left" | "right";
    duration?: number;
}

function CarouselRow({
    className,
    direction = "left",
    duration = 40,
    children,
    ...props
}: CarouselRowProps) {
    const isLeft = direction === "left";
    const childrenArray = React.Children.toArray(children as React.ReactNode);
    const copies = 10;

    return (
        <motion.div
            data-slot="carousel-row"
            initial={{ x: isLeft ? 0 : "-10%" }}
            animate={{ x: isLeft ? "-10%" : 0 }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear",
            }}
            style={{ willChange: "transform" }}
            className={cn("flex w-max shrink-0 gap-5 pr-5", className)}
            {...props as any}
        >
            {Array.from({ length: copies }).map((_, i) => (
                <React.Fragment key={i}>
                    {childrenArray.map((child, j) =>
                        React.cloneElement(child as React.ReactElement, { key: `${i}-${(child as any)?.key || j}` })
                    )}
                </React.Fragment>
            ))}
        </motion.div>
    );
}
function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="carousel-item"
            className={cn(

                "flex justify-center items-center gap-2.5 rounded-full py-2 px-5",
                "relative overflow-hidden shrink-0",

                "bg-black/5 dark:bg-white/5",
                "backdrop-blur-md hover:backdrop-blur-[25px]",

                "border border-black/10 dark:border-white/10 shadow-sm dark:shadow-none",

                "transition-all duration-200 cursor-pointer",
                "hover:scale-[1.02] hover:bg-black/10 dark:hover:bg-white/10",
                "active:scale-[0.98]",

                "before:absolute before:inset-0 before:pointer-events-none",
                "before:bg-gradient-to-tr before:from-transparent before:via-black/5 dark:before:via-white/5 before:to-transparent",

                className
            )}
            {...props}
        />
    );
}

export {
    Carousel,
    CarouselRow,
    CarouselItem
}