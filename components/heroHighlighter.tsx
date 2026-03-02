"use client";

import { motion, easeOut } from "motion/react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type HeroHighlighterProps = {
  content: string[];
  highlightContent?: string;

  className?: string;
  lineClassName?: string;
  highlightClassName?: string;
  textGradientClass?: string;
  behind?: boolean;
};

export default function HeroHighlighter({
  content,
  highlightContent,
  className,
  lineClassName,
  highlightClassName,
  textGradientClass,
  behind = false,
}: HeroHighlighterProps) {


  const HighlightText = ({
    children,
    delay = 0,
  }: {
    children: ReactNode;
    delay?: number;
  }) => (
    <span className="relative inline-block">
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 0.35,
          ease: easeOut,
          delay,
        }}
        className={cn(
          "absolute left-0 -bottom-1 h-[5px] w-full origin-left bg-neutral-200",
          behind && "-z-10",
          highlightClassName
        )}
      />
      <span
        className={cn(
          behind && "relative z-10",
          "bg-linear-to-b from-neutral-50 to-neutral-900 bg-clip-text text-transparent"
        )}
      >
        {children}
      </span>
    </span>
  );

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  const gradient =
    textGradientClass ??
    "bg-linear-to-b from-neutral-50 to-neutral-900 bg-clip-text text-transparent";

  const text = content.map((line, index) => {
    if (!highlightContent) return line;

    const parts = line.split(highlightContent);
    if (parts.length === 1) return line;

    return (
      <span key={index}>
        {parts[0]}
        <HighlightText delay={0.55 + index * 0.2}>
          {highlightContent}
        </HighlightText>
        {parts[1]}
      </span>
    );
  });

  return (
    <div className="flex justify-center items-center w-full">
      <motion.h1
        variants={container}
        initial="hidden"
        animate="show"
        className={cn(
          "font-bold text-5xl max-w-2xl text-center tracking-tight",
          className
        )}
      >
        {text.map((line, i) => (
          <motion.span
            key={i}
            variants={child}
            className={cn("block not-first:mt-3", lineClassName)}
          >
            <span className={gradient}>{line}</span>
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}