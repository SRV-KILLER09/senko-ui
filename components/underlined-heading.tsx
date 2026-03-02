"use client";

import { motion, easeOut } from "motion/react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type UnderlineHeadingProps = {
  content: string[];
  highlightContent?: string[];

  className?: string;
  lineClassName?: string;
  highlightClassName?: string;
  textGradientClass?: string;
  behind?: boolean;
};

export default function UnderlineHeading({
  content,
  highlightContent,
  className,
  lineClassName,
  highlightClassName,
  textGradientClass,
  behind = false,
}: UnderlineHeadingProps) {


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
          gradient
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
    "bg-linear-to-b from-neutral-900 to-neutral-600 dark:from-neutral-50 dark:to-neutral-400 bg-clip-text text-transparent";

  const text = content.map((line, lineIndex) => {
    if (!highlightContent || highlightContent.length === 0) return line;

    const parts = line.split(
      new RegExp(`(${highlightContent.join("|")})`, "gi")
    );

    return (
      <span key={lineIndex}>
        {parts.map((part, i) => {
          const match = highlightContent.find(
            word => word.toLowerCase() === part.toLowerCase()
          );

          if (match) {
            return (
              <HighlightText
                key={i}
                delay={0.55 + lineIndex * 0.2}
              >
                {part}
              </HighlightText>
            );
          }

          return part;
        })}
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