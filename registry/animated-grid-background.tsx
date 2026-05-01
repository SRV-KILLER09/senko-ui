"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function AnimatedGridBackground({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const gridSize = 160; 
  const [nodes, setNodes] = useState<{ x: number; y: number; delay: number; duration: number }[]>([]);
  const [beams, setBeams] = useState<{ isHorizontal: boolean; position: number; delay: number; duration: number; direction: number }[]>([]);
  const [patches, setPatches] = useState<{ x: number; y: number; rx: number; ry: number; duration: number }[]>([]);

  useEffect(() => {
    setMounted(true);
    // Generate pulsing nodes on the grid intersections
    const generatedNodes = Array.from({ length: 15 }).map(() => ({
      x: Math.floor(Math.random() * 20) * gridSize,
      y: Math.floor(Math.random() * 20) * gridSize,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 3,
    }));
    setNodes(generatedNodes);

    // Generate traveling light beams along grid lines
    const generatedBeams = Array.from({ length: 12 }).map(() => ({
      isHorizontal: Math.random() > 0.5,
      position: Math.floor(Math.random() * 20) * gridSize, 
      delay: Math.random() * 8,
      duration: Math.random() * 6 + 4, 
      direction: Math.random() > 0.5 ? 1 : -1,
    }));
    setBeams(generatedBeams);

    // Generate floating patches to dim parts of the grid dynamically
    const generatedPatches = Array.from({ length: 5 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      rx: Math.random() * 400 - 200,
      ry: Math.random() * 400 - 200,
      duration: Math.random() * 10 + 15, // Slow movements
    }));
    setPatches(generatedPatches);
  }, []);

  if (!mounted) {
    return (
      <div className={cn("absolute inset-0 bg-background", className)} />
    );
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden bg-background pointer-events-none", className)}>
      {/* Soft radial gradient behind the center to create depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--grid-line)_0%,transparent_60%)]" />

      {/* Grid container (Static base opacity) */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          // Use CSS linear gradients to draw the grid lines
          backgroundImage: `
            linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          // Fade out the grid towards the edges
          maskImage: "radial-gradient(circle at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 80%)",
        }}
      >
        {/* Subtle dots at all intersections */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--grid-dot) 1.5px, transparent 2px)`,
            backgroundSize: `${gridSize}px ${gridSize}px`,
          }}
        />

        {/* Traveling light beams on the grid lines */}
        {beams.map((beam, i) => (
          beam.isHorizontal ? (
            <motion.div
              key={`beam-${i}`}
              className="absolute h-[1px]"
              style={{
                top: `${beam.position}px`,
                width: "400px",
                left: beam.direction === 1 ? '-400px' : '100vw',
                background: "linear-gradient(to right, transparent, var(--grid-beam), transparent)",
                boxShadow: "0 0 8px 2px var(--grid-beam)",
              }}
              animate={{
                left: beam.direction === 1 ? ['-400px', '100vw'] : ['100vw', '-400px'],
              }}
              transition={{
                repeat: Infinity,
                duration: beam.duration,
                delay: beam.delay,
                ease: "linear",
              }}
            />
          ) : (
            <motion.div
              key={`beam-${i}`}
              className="absolute w-[1px]"
              style={{
                left: `${beam.position}px`,
                height: "400px",
                top: beam.direction === 1 ? '-400px' : '100vh',
                background: "linear-gradient(to bottom, transparent, var(--grid-beam), transparent)",
                boxShadow: "0 0 8px 2px var(--grid-beam)",
              }}
              animate={{
                top: beam.direction === 1 ? ['-400px', '100vh'] : ['100vh', '-400px'],
              }}
              transition={{
                repeat: Infinity,
                duration: beam.duration,
                delay: beam.delay,
                ease: "linear",
              }}
            />
          )
        ))}

        {/* Pulsing/glowing nodes at random intersections */}
        {nodes.map((node, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute rounded-full bg-foreground/20 blur-[2px]"
            animate={{
              opacity: [0, 0.9, 0],
              scale: [0.5, 3, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: node.duration,
              delay: node.delay,
              ease: "easeInOut",
            }}
            style={{
              width: "4px",
              height: "4px",
              left: `${node.x - 1}px`, 
              top: `${node.y - 1}px`,
            }}
          />
        ))}

        {/* Floating patches to dim/clear parts of the grid dynamically */}
        {patches.map((patch, i) => (
          <motion.div
            key={`patch-${i}`}
            className="absolute rounded-full blur-[120px] pointer-events-none"
            style={{
              width: '50vw',
              height: '50vh',
              left: `${patch.x}vw`,
              top: `${patch.y}vh`,
              backgroundColor: 'var(--grid-patch)',
            }}
            animate={{
              x: [0, patch.rx, 0],
              y: [0, patch.ry, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: patch.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Subtle vignette layer over everything */}
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: `radial-gradient(circle at center, transparent 30%, var(--vignette) 100%)`
        }}
      />
    </div>
  );
}
