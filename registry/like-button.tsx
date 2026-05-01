"use client";

import * as React from "react";
import NumberFlow from "@number-flow/react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

function HeartIcon({ className, filled }: { className?: string; filled?: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

const PARTICLE_COUNT = 6;

function SparkleAnimation() {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      {Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
        const angle = (i / PARTICLE_COUNT) * 360;
        const radians = (angle * Math.PI) / 180;
        const radius = 25;
        const x = Math.cos(radians) * radius;
        const y = Math.sin(radians) * radius;

        return (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-rose-400"
            style={{ filter: "blur(0.5px)" }}
            initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
            animate={{
              opacity: [1, 0],
              scale: [0, 1.5, 0],
              x: [0, x],
              y: [0, y],
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          />
        );
      })}
    </div>
  );
}

export interface LikeButtonProps {
  className?: string;
  initialCount?: number;
  defaultLiked?: boolean;
}

export function LikeButton({
  className,
  initialCount = 0,
  defaultLiked = false,
}: LikeButtonProps) {
  const [likeCount, setLikeCount] = React.useState(initialCount);
  const [isLiked, setIsLiked] = React.useState(defaultLiked);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const toggleLike = () => {
    if (isLiked) {
      setLikeCount((count) => Math.max(0, count - 1));
      setIsLiked(false);
      return;
    }

    setLikeCount((count) => count + 1);
    setIsLiked(true);
    setIsAnimating(true);
  };

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        "relative h-12 cursor-pointer gap-2 rounded-2xl px-5 overflow-hidden group border-none",
        // Glassmorphism Base
        "bg-background/40 backdrop-blur-md border border-border/50 text-foreground shadow-[0_4px_30px_rgba(0,0,0,0.1)]",
        "hover:bg-background/60 hover:border-border/80 hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)]",
        "transition-all duration-500 ease-out",
        // Active state overrides
        isLiked && "bg-rose-500/10 border-rose-500/30 shadow-[0_8px_32px_rgba(251,113,133,0.15)]",
        className
      )}
      onClick={toggleLike}
      aria-pressed={isLiked}
      aria-label={isLiked ? "Unlike" : "Like"}
    >
      {/* Soft internal glow for glassmorphism */}
      <div className={cn(
        "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 bg-gradient-to-tr from-rose-500/10 to-transparent pointer-events-none",
        isLiked && "opacity-100"
      )} />

      <div className="relative z-10 flex items-center justify-center">
        {isAnimating && <SparkleAnimation />}
        
        <AnimatePresence mode="popLayout">
          {isAnimating ? (
            <motion.div
              key="animating-heart"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [1.2, 1], opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              onAnimationComplete={() => setIsAnimating(false)}
            >
              <HeartIcon 
                filled={true} 
                className="text-rose-500 w-5 h-5 drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" 
              />
            </motion.div>
          ) : (
            <HeartIcon
              filled={isLiked}
              className={cn(
                "w-5 h-5 transition-all duration-300",
                isLiked 
                  ? "text-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" 
                  : "text-muted-foreground group-hover:scale-110"
              )}
            />
          )}
        </AnimatePresence>
      </div>

      <span className="min-w-[1.5rem] relative z-10 flex items-center text-sm font-medium">
        <NumberFlow 
          value={likeCount} 
          transformTiming={{ duration: 500, easing: 'ease-out' }}
          spinTiming={{ duration: 500, easing: 'ease-out' }}
        />
        <span className="sr-only"> likes</span>
      </span>

      {/* Glossy reflection highlight */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-2xl pointer-events-none" />
    </button>
  );
}
