"use client";

import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export interface MagneticPitSliderProps {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  barCount?: number;
  className?: string;
  onChange?: (value: number) => void;
}

export function MagneticPitSlider({
  value: controlledValue,
  defaultValue = 50,
  min = 0,
  max = 100,
  step = 1,
  barCount = 48,
  className,
  onChange,
}: MagneticPitSliderProps) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? min);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [trackWidth, setTrackWidth] = useState(0);

  // Soft, bouncy glass physics
  const springConfig = { type: "spring", stiffness: 200, damping: 20, mass: 0.5 };
  
  const mouseX = useMotionValue(0);
  const sliderX = useMotionValue((defaultValue - min) / (max - min)); 
  
  const springSliderX = useSpring(sliderX, springConfig);
  const springMouseX = useSpring(mouseX, springConfig);

  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.getBoundingClientRect().width);
    }
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        setTrackWidth(entries[0].contentRect.width);
      }
    });
    if (trackRef.current) observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    sliderX.set((value - min) / (max - min));
  }, [value, min, max, sliderX]);

  const updateValueFromPointer = useCallback((clientX: number) => {
    if (!trackRef.current || trackWidth === 0) return;
    const rect = trackRef.current.getBoundingClientRect();
    
    // allow dragging slightly outside bounds for pure mechanical feel
    const xInside = Math.max(0, Math.min(clientX - rect.left, trackWidth));
    const percentage = xInside / trackWidth;
    
    const rawValue = min + percentage * (max - min);
    const steppedValue = Math.round(rawValue / step) * step;
    const finalValue = Math.max(min, Math.min(steppedValue, max));
    
    if (!isControlled) {
      setInternalValue(finalValue);
    }
    onChange?.(finalValue);
    sliderX.set((finalValue - min) / (max - min));
  }, [min, max, step, isControlled, onChange, sliderX, trackWidth]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    updateValueFromPointer(e.clientX);
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
    }
  };

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (isDragging) {
        updateValueFromPointer(e.clientX);
      }
      if (containerRef.current && isHovered) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
      }
    };
    const handlePointerUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
    } else if (isHovered) {
      window.addEventListener("pointermove", handlePointerMove);
    }
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging, isHovered, updateValueFromPointer, mouseX]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    let newValue = value;
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      newValue = Math.min(value + step, max);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      newValue = Math.max(value - step, min);
    } else return;
    
    if (!isControlled) setInternalValue(newValue);
    onChange?.(newValue);
    sliderX.set((newValue - min) / (max - min));
  };

  const bars = useMemo(() => Array.from({ length: barCount }).map((_, i) => i), [barCount]);

  const thumbX = useTransform(springSliderX, [0, 1], [0, trackWidth]);
  
  return (
    <div className={cn("relative flex flex-col items-center justify-center w-full max-w-2xl p-12 outline-none", className)}
         onKeyDown={handleKeyDown}
         tabIndex={0}
         role="slider"
         aria-valuemin={min}
         aria-valuemax={max}
         aria-valuenow={value}
         ref={containerRef}
    >
      {/* Floating Glass Badge */}
      <motion.div
        className="absolute top-[-20px] px-6 py-2 bg-foreground/10 backdrop-blur-xl text-foreground text-xl font-medium rounded-full border border-foreground/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(255,255,255,0.1)] pointer-events-none z-30"
        style={{
          left: useTransform(springSliderX, [0, 1], [48, trackWidth + 48]), 
          x: "-50%",
          y: isHovered || isDragging ? 0 : 10, 
          opacity: isHovered || isDragging ? 1 : 0,
          scale: isDragging ? 1.05 : (isHovered ? 1 : 0.9),
        }}
        transition={{ duration: 0.2 }}
      >
        {value}
      </motion.div>

      {/* Frosted Glass Container */}
      <div 
        className={cn(
          "relative w-full h-[80px] flex items-center justify-center rounded-[40px] bg-foreground/5 backdrop-blur-2xl cursor-pointer touch-none select-none px-6 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(255,255,255,0.05)] border border-foreground/10 overflow-hidden",
          "transition-all duration-300",
          isHovered && "bg-foreground/10 border-foreground/20 shadow-[0_12px_48px_rgba(0,0,0,0.4),inset_0_2px_6px_rgba(255,255,255,0.2)]",
          isDragging && "cursor-grabbing bg-foreground/15 border-foreground/30"
        )}
        onPointerDown={handlePointerDown}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        {/* Glow behind the track */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent z-0 blur-xl pointer-events-none"
          style={{
            x: useTransform(springSliderX, [0, 1], ["-100%", "100%"]),
          }}
        />

        {/* Track holding the glass bars */}
        <div ref={trackRef} className="relative w-full h-full flex items-center justify-between z-10">
          {bars.map((i) => {
            const pct = i / (barCount - 1); 
            return (
              <GlassBar 
                key={i} 
                index={i}
                barCount={barCount}
                pct={pct} 
                sliderX={springSliderX} 
                mouseX={springMouseX}
                isHovered={isHovered}
                isDragging={isDragging}
                containerRef={containerRef}
              />
            );
          })}
          
          {/* Glass Orb Thumb */}
          <motion.div 
            className="absolute top-1/2 w-12 h-12 rounded-full bg-foreground/10 backdrop-blur-3xl shadow-[0_4px_24px_rgba(0,0,0,0.1),inset_0_4px_8px_rgba(255,255,255,0.3),inset_0_-4px_8px_rgba(0,0,0,0.1)] border border-foreground/40 z-20 flex items-center justify-center pointer-events-none"
            style={{
              x: thumbX,
              y: "-50%",
              marginLeft: -24, // center over its x origin
              scale: isDragging ? 0.9 : 1
            }}
          >
            {/* Inner highlight */}
            <div className="absolute top-[15%] left-[15%] w-[30%] h-[30%] rounded-full bg-foreground/20 blur-[2px]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function GlassBar({ 
  index,
  barCount,
  pct, 
  sliderX, 
  mouseX,
  isHovered,
  isDragging,
  containerRef
}: { 
  index: number;
  barCount: number;
  pct: number; 
  sliderX: MotionValue<number>; 
  mouseX: MotionValue<number>;
  isHovered: boolean;
  isDragging: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const GAUSSIAN_WIDTH = 40;
  const baseHeight = 36;
  const pitDepth = 24;

  const scaleY = useTransform(sliderX, (activeVal: number) => {
    const activeIndex = activeVal * (barCount - 1);
    const distance = Math.abs(index - activeIndex);
    const influence = Math.exp(-distance * 0.35); 
    
    const currentHeight = baseHeight - influence * pitDepth;
    return currentHeight / baseHeight;
  });

  const magneticLift = useTransform(mouseX, (x: number) => {
    if (!isHovered || isDragging || !containerRef.current) return 0;
    
    const rect = containerRef.current.getBoundingClientRect();
    const trackWidth = rect.width - 96; // padding
    const barXPos = 48 + pct * trackWidth;
    const distance = Math.abs(x - barXPos);
    
    if (distance < 60) { 
      const influence = Math.exp(-distance * 0.05);
      return influence * 0.4; 
    }
    return 0;
  });
  
  const finalScaleY = useTransform([scaleY, magneticLift], ([s, m]) => {
    return (s as number) + (m as number);
  });

  // Bars under thumb and before it become highly opaque white, far bars are translucent glass
  const opacity = useTransform(sliderX, (activeVal: number) => {
    const activeIndex = activeVal * (barCount - 1);
    if (index <= activeIndex) return 1;
    const distance = Math.abs(index - activeIndex);
    const influence = Math.exp(-distance * 0.5);
    return 0.15 + (influence * 0.85);
  });

  const background = useTransform(sliderX, (activeVal: number) => {
    const activeIndex = activeVal * (barCount - 1);
    if (index <= activeIndex) return "var(--foreground)";
    const distance = Math.abs(index - activeIndex);
    const influence = Math.exp(-distance * 0.5);
    if (influence > 0.5) return "var(--foreground)";
    return "var(--foreground)"; // Translucency handled by opacity
  });

  const boxShadow = useTransform(sliderX, (activeVal: number) => {
    const activeIndex = activeVal * (barCount - 1);
    const distance = Math.abs(index - activeIndex);
    const influence = Math.exp(-distance * 0.5);
    if (influence > 0.1) {
      return `0px 0px ${influence * 12}px var(--foreground)`;
    }
    return "0px 0px 0px rgba(0,0,0,0)";
  });

  return (
    <motion.div
      className="w-[4px] rounded-full origin-center"
      style={{
        height: baseHeight,
        scaleY: finalScaleY,
        opacity,
        backgroundColor: background,
        boxShadow,
      }}
    />
  );
}