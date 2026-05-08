"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ShaderBackgroundProps = {
  className?: string;
  /** 0..1 overall intensity */
  intensity?: number;
  /** If true, disables mouse parallax. */
  disableParallax?: boolean;
  /** Target FPS cap (lower = smoother on low-end). */
  fps?: number;
  /** Render scale (0.35..1). Lower = much faster. */
  quality?: number;
};

function clamp01(v: number) {
  return Math.max(0, Math.min(1, v));
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function readCssColorVar(varName: string, fallback: string) {
  const probe = document.createElement("div");
  probe.style.color = `hsl(var(${varName}))`;
  probe.style.position = "fixed";
  probe.style.opacity = "0";
  document.body.appendChild(probe);
  const c = getComputedStyle(probe).color || fallback;
  document.body.removeChild(probe);
  return c;
}

export function ShaderBackground({
  className,
  intensity = 0.9,
  disableParallax = false,
  fps = 30,
  quality = 0.55,
}: ShaderBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastFrameRef = useRef<number>(0);
  const [mounted, setMounted] = useState(false);

  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }, []);

  // Parallax target in -1..1
  const parallaxRef = useRef({ tx: 0, ty: 0, x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (reducedMotion) return;
    if (disableParallax) return;

    const onMove = (e: PointerEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      parallaxRef.current.tx = nx;
      parallaxRef.current.ty = ny;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mounted, reducedMotion, disableParallax]);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const q = clamp(quality, 0.35, 1);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr * q);
      canvas.height = Math.floor(h * dpr * q);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });

    const getPalette = () => {
      const fg = readCssColorVar("--foreground", "rgb(255,255,255)");
      const a = "rgb(99, 102, 241)";
      const b = "rgb(34, 211, 238)";
      const c = "rgb(244, 63, 94)";
      return { fg, a, b, c };
    };

    let { fg, a, b, c } = getPalette();
    const themeObserver = new MutationObserver(() => {
      ({ fg, a, b, c } = getPalette());
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style", "data-theme"],
    });

    const I = clamp01(intensity);
    const minFrameMs = 1000 / Math.max(10, fps);

    const draw = (tMs: number) => {
      rafRef.current = window.requestAnimationFrame(draw);
      if (document.hidden) return;
      if (reducedMotion) return;

      const last = lastFrameRef.current;
      if (last && tMs - last < minFrameMs) return;
      lastFrameRef.current = tMs;

      const t = tMs * 0.00008;
      const w = canvas.width;
      const h = canvas.height;

      // Smooth parallax
      const p = parallaxRef.current;
      p.x = lerp(p.x, p.tx, 0.06);
      p.y = lerp(p.y, p.ty, 0.06);
      const px = disableParallax ? 0 : p.x;
      const py = disableParallax ? 0 : p.y;

      ctx.clearRect(0, 0, w, h);

      // Base vignette (cheap at low-res)
      const vignette = ctx.createRadialGradient(w * 0.5, h * 0.35, 0, w * 0.5, h * 0.35, Math.max(w, h) * 0.9);
      vignette.addColorStop(0, "rgba(0,0,0,0)");
      vignette.addColorStop(1, "rgba(0,0,0,0.30)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);

      // Soft "shader blobs"
      ctx.globalCompositeOperation = "lighter";
      const blob = (x: number, y: number, r: number, color: string, alpha: number) => {
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, color.replace("rgb", "rgba").replace(")", `,${alpha})`));
        g.addColorStop(1, color.replace("rgb", "rgba").replace(")", ",0)"));
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      };

      const ax = w * (0.2 + 0.04 * Math.sin(t * 9)) + px * 18 * dpr;
      const ay = h * (0.25 + 0.05 * Math.cos(t * 7)) + py * 14 * dpr;
      const bx = w * (0.78 + 0.05 * Math.cos(t * 6)) - px * 16 * dpr;
      const by = h * (0.2 + 0.04 * Math.sin(t * 8)) - py * 16 * dpr;
      const cx = w * (0.62 + 0.04 * Math.sin(t * 5)) + px * 10 * dpr;
      const cy = h * (0.72 + 0.05 * Math.cos(t * 4)) + py * 10 * dpr;

      blob(ax, ay, Math.max(w, h) * 0.36, a, 0.18 * I);
      blob(bx, by, Math.max(w, h) * 0.30, b, 0.12 * I);
      blob(cx, cy, Math.max(w, h) * 0.28, c, 0.09 * I);

      // Diagonal rim-light streaks (striped gradient fill)
      ctx.globalCompositeOperation = "screen";
      ctx.globalAlpha = 0.08 * I;
      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(0.22 + Math.sin(t * 3) * 0.02);
      ctx.translate(-w / 2, -h / 2);
      const stripeW = 160;
      for (let i = -w; i < w * 2; i += stripeW) {
        const g = ctx.createLinearGradient(i, 0, i + stripeW, 0);
        g.addColorStop(0, "rgba(255,255,255,0)");
        g.addColorStop(0.5, "rgba(255,255,255,0.25)");
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.fillRect(i + (t * 120) % stripeW, 0, stripeW, h);
      }
      ctx.restore();
      ctx.globalAlpha = 1;

      // Final subtle tint unify (very cheap)
      ctx.globalCompositeOperation = "soft-light";
      ctx.fillStyle = fg.replace("rgb", "rgba").replace(")", `,${0.04 * I})`);
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";
    };

    rafRef.current = window.requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      themeObserver.disconnect();
    };
  }, [mounted, reducedMotion, intensity, disableParallax, fps, quality]);

  return (
    <div className={cn("fixed inset-0 -z-10 pointer-events-none", className)} aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}

