"use client";

import { cn } from "@/lib/utils";
import { motion, easeOut } from "motion/react";
import { ReactNode } from "react";

type HighlightTextProps = {
  children: ReactNode;
  delay?: number;
  className?:string
};

export function HighlightText({ children, className,delay = 0 }: HighlightTextProps) {
  return (
    <span className="relative inline-block">
      <span className="bg-linear-to-b from-neutral-50 to-neutral-900 bg-clip-text text-transparent">
        {children}
      </span>
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 0.35,
          ease: easeOut,
          delay,
        }}
        className={cn("absolute left-0 -bottom-1 h-[5px] w-full origin-left bg-neutral-200",className)}
      />
    </span>
  );
}