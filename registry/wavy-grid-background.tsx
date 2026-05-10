"use client";

import React, { useCallback, useEffect, useRef } from "react";

interface WavyGridProps {
  squareSize?: number;
  gridGap?: number;
  maxOpacity?: number;
  height?: number;
  mode?: "fixed" | "contained";
}

export default function WavyGridBackground({
  squareSize = 4,
  gridGap = 2,
  maxOpacity = 0.25,
  height = 400,
  mode = "fixed",
}: WavyGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const state = useRef({
    ctx: null as CanvasRenderingContext2D | null,
    cols: 0,
    rows: 0,
    dpr: 1,
    color: "rgb(0,0,0)",
    sinTable: [] as number[],
  });

  const updateThemeColor = useCallback(() => {
    const probe = document.createElement("div");
    probe.style.color = "var(--foreground)";
    document.body.appendChild(probe);

    const computed = getComputedStyle(probe).color;
    state.current.color = computed;

    document.body.removeChild(probe);
  }, []);

  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";

    const cols = Math.ceil(rect.width / (squareSize + gridGap));
    const rows = Math.ceil(rect.height / (squareSize + gridGap));

    const ctx = canvas.getContext("2d", { alpha: true });

    state.current.ctx = ctx;
    state.current.cols = cols;
    state.current.rows = rows;
    state.current.dpr = dpr;

    const tableSize = cols + rows + 100;
    const sinTable = new Array(tableSize);

    for (let i = 0; i < tableSize; i++) {
      sinTable[i] = Math.sin(i * 0.25);
    }

    state.current.sinTable = sinTable;

    updateThemeColor();
  }, [squareSize, gridGap, updateThemeColor]);

  useEffect(() => {
    setupCanvas();

    const ro = new ResizeObserver(setupCanvas);
    if (containerRef.current) ro.observe(containerRef.current);

    const themeObserver = new MutationObserver(updateThemeColor);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "style", "data-theme"],
    });

    let raf: number;
    let lastTime = 0;

    const render = (time: number) => {

      lastTime = time;

      const s = state.current;
      if (!s.ctx) return;

      const ctx = s.ctx;
      const total = (squareSize + gridGap) * s.dpr;
      const size = squareSize * s.dpr;

      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = s.color;

      const t = time * 0.001;
      const table = s.sinTable;

      for (let i = 0; i < s.cols; i++) {
        const x = i * total;
        const waveX = Math.sin(i * 0.3 + t * 2);

        for (let j = 0; j < s.rows; j++) {
          const waveY = Math.sin(j * 0.25 + t * 1.6);

          const wave = (waveX + waveY + Math.sin((i + j) * 0.15 + t * 1.2)) / 3;
          const opacity = ((wave + 1) * 0.5) * maxOpacity;

          if (opacity < 0.02) continue;

          ctx.globalAlpha = opacity;
          ctx.fillRect(x, j * total, size, size);
        }
      }

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      themeObserver.disconnect();
    };
  }, [setupCanvas, updateThemeColor, squareSize, gridGap, maxOpacity]);

  useEffect(() => {
    if (mode !== "fixed") return;

    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 180, 1);
      const visible = 18 - progress * 18;
      const fade = 55 - progress * 55;

      const mask = `linear-gradient(to bottom, black 0%, black ${visible}%, transparent ${fade}%)`;

      if (containerRef.current) {
        containerRef.current.style.maskImage = mask;
        containerRef.current.style.webkitMaskImage = mask;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mode]);

  return (
    <div
      ref={containerRef}
      className="will-change-transform"
      style={{
        position: mode === "contained" ? "absolute" : "fixed",
        inset: mode === "contained" ? 0 : undefined,
        top: mode === "fixed" ? 0 : undefined,
        left: mode === "fixed" ? 0 : undefined,
        width: "100%",
        height: mode === "fixed" ? `${height}px` : "100%",
        zIndex: 0,
        pointerEvents: "none",
        backgroundColor: mode === "contained" ? "transparent" : "var(--background)",
        WebkitMaskImage:
          mode === "fixed"
            ? "linear-gradient(to bottom, black 0%, black 18%, transparent 65%)"
            : "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
        maskImage:
          mode === "fixed"
            ? "linear-gradient(to bottom, black 0%, black 18%, transparent 65%)"
            : "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
      }}
    >
      <canvas ref={canvasRef} style={{ display: "block" }} />
    </div>
  );
}