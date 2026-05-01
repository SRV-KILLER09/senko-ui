"use client"
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

type Line = {
  text: string;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end" | "between";
  iconClassName?: string;
  muted?: boolean;
  className?: string;
};

type IconicHeadingProps = {
  lines: Line[];
  align?: "center" | "left" | "right";
  className?: string;
  shadow?: boolean;
};

export const IconicHeading = ({
  lines,
  align = "center",
  className,
  shadow = false,
}: IconicHeadingProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <div
      className={cn(
        "w-full",
        align === "center" && "text-center",
        align === "right" && "text-right"
      )}
    >
      <h1
        className={cn(
          "font-medium tracking-tight leading-[1.05]",
          "text-5xl md:text-7xl",
          "text-foreground",
          shadow && "drop-shadow-[0_10px_25px_rgba(0,0,0,0.15)]",
          className
        )}
      >
        {lines.map((line, i) => {
          const words = line.text.split(" ");

          const icon =
            line.icon && (
              <span
                className={cn(
                  "inline-flex items-center justify-center align-middle",
                  "w-[1.3em] h-[1.3em]",
                  "rounded-xl",
                  "bg-gradient-to-b from-blue-400 to-blue-600",
                  "text-white",
                  "mx-[0.15em] -rotate-7",
                  "shadow-md",
                  "drop-shadow-[0_6px_10px_rgba(0,0,0,0.5)]",
                  line.iconClassName
                )}
              >
                {line.icon}
              </span>
            );

          return (
            <span
              key={i}
              className={cn(
                "block transition-all duration-700 ease-out",
                i !== 0 && "mt-2 md:mt-3",
                line.muted && "text-muted-foreground",
                line.className,

                // animation
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6",

                // stagger
                visible && `delay-[${i * 120}ms]`
              )}
            >
              {line.iconPosition === "start" && icon}

              {line.iconPosition === "between" && words.length > 1 ? (
                <>
                  {words[0]} {icon} {words.slice(1).join(" ")}
                </>
              ) : (
                line.text
              )}

              {line.iconPosition === "end" && icon}
            </span>
          );
        })}
      </h1>
    </div>
  );
};